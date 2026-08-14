"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[99442],{

/***/ 77168
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_javascript_basics_md_6c4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-javascript-basics-md-6c4.json
const site_docs_courses_laravel_javascript_basics_md_6c4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/javascript-basics","title":"Chapter: JavaScript Fundamentals","description":"---","source":"@site/docs/courses/laravel/javascript-basics.md","sourceDirName":"courses/laravel","slug":"/laravel/javascript-basics","permalink":"/ai-engineering-journey/laravel/javascript-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":59,"frontMatter":{"id":"javascript-basics","slug":"/laravel/javascript-basics","title":"Chapter: JavaScript Fundamentals","sidebar_label":"Chapter: JavaScript Fundamentals","sidebar_position":59},"sidebar":"course-laravel","previous":{"title":"Laravel 13 with AI & Automation → Complete University Textbook","permalink":"/ai-engineering-journey/laravel"},"next":{"title":"MySQL & Database Design","permalink":"/ai-engineering-journey/laravel/mysql-database"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/javascript-basics.md


const frontMatter = {
	id: 'javascript-basics',
	slug: '/laravel/javascript-basics',
	title: 'Chapter: JavaScript Fundamentals',
	sidebar_label: 'Chapter: JavaScript Fundamentals',
	sidebar_position: 59
};
const contentTitle = 'Chapter: JavaScript Fundamentals';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-2",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-2",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-3",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-3",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. JavaScript Syntax and Variables",
  "id": "1-javascript-syntax-and-variables",
  "level": 3
}, {
  "value": "Variable Declarations",
  "id": "variable-declarations",
  "level": 4
}, {
  "value": "Data Types",
  "id": "data-types",
  "level": 4
}, {
  "value": "Type Coercion",
  "id": "type-coercion",
  "level": 4
}, {
  "value": "Strict Mode",
  "id": "strict-mode",
  "level": 4
}, {
  "value": "Operators",
  "id": "operators",
  "level": 4
}, {
  "value": "2. Functions",
  "id": "2-functions",
  "level": 3
}, {
  "value": "Function Declarations",
  "id": "function-declarations",
  "level": 4
}, {
  "value": "Function Expressions",
  "id": "function-expressions",
  "level": 4
}, {
  "value": "Arrow Functions",
  "id": "arrow-functions",
  "level": 4
}, {
  "value": "Default Parameters",
  "id": "default-parameters",
  "level": 4
}, {
  "value": "Rest Parameters",
  "id": "rest-parameters",
  "level": 4
}, {
  "value": "Spread Operator",
  "id": "spread-operator",
  "level": 4
}, {
  "value": "IIFE — Immediately Invoked Function Expression",
  "id": "iife--immediately-invoked-function-expression",
  "level": 4
}, {
  "value": "Callbacks",
  "id": "callbacks",
  "level": 4
}, {
  "value": "Higher-Order Functions — map, filter, reduce",
  "id": "higher-order-functions--map-filter-reduce",
  "level": 4
}, {
  "value": "3. Objects and Arrays",
  "id": "3-objects-and-arrays",
  "level": 3
}, {
  "value": "Object Creation and Access",
  "id": "object-creation-and-access",
  "level": 4
}, {
  "value": "Object Destructuring",
  "id": "object-destructuring",
  "level": 4
}, {
  "value": "Object Methods",
  "id": "object-methods",
  "level": 4
}, {
  "value": "Array Methods — push, pop, find, some, every, includes, flat",
  "id": "array-methods--push-pop-find-some-every-includes-flat",
  "level": 4
}, {
  "value": "Spread Operator with Arrays",
  "id": "spread-operator-with-arrays",
  "level": 4
}, {
  "value": "4. DOM Manipulation",
  "id": "4-dom-manipulation",
  "level": 3
}, {
  "value": "Selecting Elements",
  "id": "selecting-elements",
  "level": 4
}, {
  "value": "Creating and Inserting Elements",
  "id": "creating-and-inserting-elements",
  "level": 4
}, {
  "value": "innerHTML — caution with user data",
  "id": "innerhtml--caution-with-user-data",
  "level": 4
}, {
  "value": "classList",
  "id": "classlist",
  "level": 4
}, {
  "value": "dataset",
  "id": "dataset",
  "level": 4
}, {
  "value": "textContent vs innerText",
  "id": "textcontent-vs-innertext",
  "level": 4
}, {
  "value": "Traversal",
  "id": "traversal",
  "level": 4
}, {
  "value": "5. ES6+ Features",
  "id": "5-es6-features",
  "level": 3
}, {
  "value": "Template Literals",
  "id": "template-literals",
  "level": 4
}, {
  "value": "let and const (detailed)",
  "id": "let-and-const-detailed",
  "level": 4
}, {
  "value": "Destructuring (detailed)",
  "id": "destructuring-detailed",
  "level": 4
}, {
  "value": "Spread and Rest",
  "id": "spread-and-rest",
  "level": 4
}, {
  "value": "Modules — import / export",
  "id": "modules--import--export",
  "level": 4
}, {
  "value": "Promises",
  "id": "promises",
  "level": 4
}, {
  "value": "async / await",
  "id": "async--await",
  "level": 4
}, {
  "value": "Symbols",
  "id": "symbols",
  "level": 4
}, {
  "value": "Maps",
  "id": "maps",
  "level": 4
}, {
  "value": "Sets",
  "id": "sets",
  "level": 4
}, {
  "value": "6. AJAX and the Fetch API",
  "id": "6-ajax-and-the-fetch-api",
  "level": 3
}, {
  "value": "GET Request",
  "id": "get-request",
  "level": 4
}, {
  "value": "POST Request with JSON",
  "id": "post-request-with-json",
  "level": 4
}, {
  "value": "FormData",
  "id": "formdata",
  "level": 4
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 4
}, {
  "value": "AbortController — cancelling requests",
  "id": "abortcontroller--cancelling-requests",
  "level": 4
}, {
  "value": "Axios (popular HTTP library)",
  "id": "axios-popular-http-library",
  "level": 4
}, {
  "value": "7. Event Handling",
  "id": "7-event-handling",
  "level": 3
}, {
  "value": "addEventListener",
  "id": "addeventlistener",
  "level": 4
}, {
  "value": "Event Phases — Capture, Target, Bubble",
  "id": "event-phases--capture-target-bubble",
  "level": 4
}, {
  "value": "stopPropagation",
  "id": "stoppropagation",
  "level": 4
}, {
  "value": "preventDefault",
  "id": "preventdefault",
  "level": 4
}, {
  "value": "Event Delegation",
  "id": "event-delegation",
  "level": 4
}, {
  "value": "Custom Events",
  "id": "custom-events",
  "level": 4
}, {
  "value": "Event Listener Options",
  "id": "event-listener-options",
  "level": 4
}, {
  "value": "Keyboard and Input Events",
  "id": "keyboard-and-input-events",
  "level": 4
}, {
  "value": "8. Alpine.js for Laravel",
  "id": "8-alpinejs-for-laravel",
  "level": 3
}, {
  "value": "Setup",
  "id": "setup",
  "level": 4
}, {
  "value": "x-data — Component State",
  "id": "x-data--component-state",
  "level": 4
}, {
  "value": "x-init — Initialization",
  "id": "x-init--initialization",
  "level": 4
}, {
  "value": "x-show — Toggle Visibility",
  "id": "x-show--toggle-visibility",
  "level": 4
}, {
  "value": "x-if — Conditional Rendering",
  "id": "x-if--conditional-rendering",
  "level": 4
}, {
  "value": "x-for — Loops",
  "id": "x-for--loops",
  "level": 4
}, {
  "value": "x-model — Two-way Data Binding",
  "id": "x-model--two-way-data-binding",
  "level": 4
}, {
  "value": "x-on / @ — Event Listeners",
  "id": "x-on----event-listeners",
  "level": 4
}, {
  "value": "x-bind / : — Dynamic Attributes",
  "id": "x-bind----dynamic-attributes",
  "level": 4
}, {
  "value": "x-text and x-html",
  "id": "x-text-and-x-html",
  "level": 4
}, {
  "value": "x-ref — Reference Elements",
  "id": "x-ref--reference-elements",
  "level": 4
}, {
  "value": "x-teleport — Move Elements in DOM",
  "id": "x-teleport--move-elements-in-dom",
  "level": 4
}, {
  "value": "x-effect — Reactive Side Effects",
  "id": "x-effect--reactive-side-effects",
  "level": 4
}, {
  "value": "Transitions",
  "id": "transitions",
  "level": 4
}, {
  "value": "Alpine.data — Reusable Components",
  "id": "alpinedata--reusable-components",
  "level": 4
}, {
  "value": "Alpine.store — Global State",
  "id": "alpinestore--global-state",
  "level": 4
}, {
  "value": "Integration with Blade and Livewire",
  "id": "integration-with-blade-and-livewire",
  "level": 4
}, {
  "value": "9. Modern JavaScript Tooling",
  "id": "9-modern-javascript-tooling",
  "level": 3
}, {
  "value": "npm and yarn",
  "id": "npm-and-yarn",
  "level": 4
}, {
  "value": "package.json",
  "id": "packagejson",
  "level": 4
}, {
  "value": "ES Modules",
  "id": "es-modules",
  "level": 4
}, {
  "value": "Import Maps",
  "id": "import-maps",
  "level": 4
}, {
  "value": "Bundling Concepts",
  "id": "bundling-concepts",
  "level": 4
}, {
  "value": "10. JavaScript in Laravel",
  "id": "10-javascript-in-laravel",
  "level": 3
}, {
  "value": "Vite Configuration",
  "id": "vite-configuration",
  "level": 4
}, {
  "value": "resources/js/app.js",
  "id": "resourcesjsappjs",
  "level": 4
}, {
  "value": "import.meta.env",
  "id": "importmetaenv",
  "level": 4
}, {
  "value": "Bootstrap JavaScript",
  "id": "bootstrap-javascript",
  "level": 4
}, {
  "value": "Tailwind Configuration",
  "id": "tailwind-configuration",
  "level": 4
}, {
  "value": "Laravel Echo and Broadcasting",
  "id": "laravel-echo-and-broadcasting",
  "level": 4
}, {
  "value": "Complete Blade + Vite + Alpine Integration",
  "id": "complete-blade--vite--alpine-integration",
  "level": 4
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison-2",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-2",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-2",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison-3",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-3",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-3",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-3",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
        id: "chapter-javascript-fundamentals",
        children: "Chapter: JavaScript Fundamentals"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare variables with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and explain their scoping differences"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify JavaScript data types and understand type coercion behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write function declarations, expressions, arrow functions, and IIFEs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use rest parameters, spread syntax, and default parameters in function signatures"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply higher-order functions — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), " — to array transformations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manipulate the DOM using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelector"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createElement"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "classList"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dataset"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle events through capturing, bubbling, delegation, and custom events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform HTTP requests with the Fetch API and handle responses, errors, and cancellation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ES6+ features: destructuring, modules, Promises, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "await"
        }), ", Maps, Sets, Symbols"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build reactive UI fragments with Alpine.js directives in Blade templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure Vite, npm scripts, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import.meta.env"
        }), " inside a Laravel project"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Laravel Echo with WebSocket broadcasting for real-time features"
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
        href: "../../assets/images/lessons/laravel/javascript-basics/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/javascript-basics/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/javascript-basics/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/javascript-basics/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/javascript-basics/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/javascript-basics/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript fundamentals: syntax, types, functions, DOM, ES6+, async patterns, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, functions, closures, promises, async/await, DOM, ES6+, Alpine.js, Laravel Echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, Laravel integration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic web development"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript fundamentals: syntax, types, functions, DOM, ES6+, async patterns, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, functions, closures, promises, async/await, DOM, ES6+, Alpine.js, Laravel Echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, Laravel integration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic web development"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-2",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript fundamentals: syntax, types, functions, DOM, ES6+, async patterns, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, functions, closures, promises, async/await, DOM, ES6+, Alpine.js, Laravel Echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, Laravel integration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic web development"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-2",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-3",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript fundamentals: syntax, types, functions, DOM, ES6+, async patterns, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, functions, closures, promises, async/await, DOM, ES6+, Alpine.js, Laravel Echo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, Laravel integration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic web development"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-3",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/javascript-basics.png",
        alt: "JavaScript Basics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-javascript-syntax-and-variables",
      children: "1. JavaScript Syntax and Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript is a dynamic, loosely typed language. Variables hold values; the type is determined at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "variable-declarations",
      children: "Variable Declarations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// var — function-scoped, hoisted, avoid in modern code\nvar name = 'Alice';\nvar count = 10;\nvar isActive = true;\n\n// let — block-scoped, preferred for reassignable variables\nlet score = 0;\nscore = 95;\n\nlet items = ['pen', 'book'];\nitems.push('ruler');\n\n// const — block-scoped, cannot be reassigned\nconst PI = 3.14159;\nconst user = { id: 1, role: 'admin' };\nuser.role = 'editor'; // mutation is allowed\n// user = {};         // TypeError: Assignment to constant variable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scoping rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hoisted"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reassignable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Temporal Dead Zone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function scopeDemo() {\n    var x = 1;\n    if (true) {\n        var x = 2;   // same variable!\n        let y = 3;\n        const z = 4; // block-scoped\n    }\n    console.log(x); // 2 (var leaks out of block)\n    // console.log(y); // ReferenceError\n    // console.log(z); // ReferenceError\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "data-types",
      children: "Data Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript has seven primitive types and one object type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Primitives\nconst str = 'hello';             // string\nconst num = 42;                  // number\nconst big = 9007199254740991n;   // bigint\nconst bool = false;              // boolean\nconst und = undefined;           // undefined\nconst nil = null;                // null (typeof returns \"object\")\nconst sym = Symbol('id');        // symbol\n\n// Objects\nconst obj = { key: 'value' };\nconst arr = [1, 2, 3];\nconst fn = () => {};\nconst date = new Date();\nconst regex = /test/gi;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "type-coercion",
      children: "Type Coercion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript implicitly converts types in certain operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// String coercion\nconsole.log(5 + '5');       // \"55\"\nconsole.log('The value: ' + 42); // \"The value: 42\"\n\n// Numeric coercion\nconsole.log('5' - 3);       // 2\nconsole.log('5' * '2');     // 10\nconsole.log('hello' - 1);   // NaN\n\n// Boolean coercion (falsy values)\nconst falsy = [false, 0, '', null, undefined, NaN];\nfalsy.forEach(v => console.log(Boolean(v))); // all => false\n\n// Loose vs strict equality\nconsole.log(5 == '5');      // true  (coerces)\nconsole.log(5 === '5');     // false (no coercion)\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "strict-mode",
      children: "Strict Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strict mode catches silent errors and forbids dangerous syntax."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "'use strict';\n\n// x = 10;           // ReferenceError (must declare)\n// delete Object.prototype; // TypeError\n// NaN = 5;          // TypeError\n\nfunction strictFn() {\n    'use strict';\n    // this is undefined in plain function calls\n    console.log(this); // undefined\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "operators",
      children: "Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Arithmetic\nlet a = 10, b = 3;\nconsole.log(a + b, a - b, a * b, a / b, a % b, a ** b);\n// 13 7 30 3.333... 1 1000\n\n// Assignment\nlet x = 5;\nx += 3;  // 8\nx *= 2;  // 16\n\n// Comparison\nconsole.log(5 > 3, 5 <= 3, 'a' < 'b'); // true false true\n\n// Logical\nconsole.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!true);         // false\nconsole.log(null ?? 'fallback'); // \"fallback\" (nullish coalescing)\n\n// Optional chaining\nconst userProfile = { address: { city: 'Paris' } };\nconsole.log(userProfile?.address?.city);  // \"Paris\"\nconsole.log(userProfile?.billing?.card);  // undefined (no error)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-functions",
      children: "2. Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functions are first-class objects — they can be assigned, passed, and returned."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "function-declarations",
      children: "Function Declarations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function greet(name) {\n    return `Hello, ${name}!`;\n}\n\nconsole.log(greet('Alice')); // \"Hello, Alice!\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Declarations are hoisted — callable before their definition."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(add(2, 3)); // 5\n\nfunction add(a, b) {\n    return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "function-expressions",
      children: "Function Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const multiply = function (a, b) {\n    return a * b;\n};\n\nconsole.log(multiply(4, 5)); // 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "arrow-functions",
      children: "Arrow Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Arrow functions have a concise syntax and lexically bind ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Single parameter, single expression — implicit return\nconst square = n => n * n;\n\n// Multiple parameters\nconst sum = (a, b) => a + b;\n\n// Block body — explicit return\nconst getFullName = (first, last) => {\n    const title = 'Ms.';\n    return `${title} ${first} ${last}`;\n};\n\nconsole.log(square(5));    // 25\nconsole.log(sum(3, 4));    // 7\nconsole.log(getFullName('Jane', 'Doe')); // \"Ms. Jane Doe\"\n\n// Lexical this\nconst team = {\n    name: 'Devs',\n    members: ['Alice', 'Bob'],\n    show() {\n        this.members.forEach(m => {\n            console.log(`${this.name}: ${m}`); // arrow captures outer this\n        });\n    }\n};\nteam.show();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "default-parameters",
      children: "Default Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function createUser(name, role = 'viewer', active = true) {\n    return { name, role, active };\n}\n\nconsole.log(createUser('Alice'));\n// { name: \"Alice\", role: \"viewer\", active: true }\n\nconsole.log(createUser('Bob', 'admin', false));\n// { name: \"Bob\", role: \"admin\", active: false }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rest-parameters",
      children: "Rest Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Collect remaining arguments into an array."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function logAll(prefix, ...args) {\n    args.forEach(arg => console.log(`${prefix}: ${arg}`));\n}\n\nlogAll('INFO', 'start', 'process', 'end');\n// \"INFO: start\"\n// \"INFO: process\"\n// \"INFO: end\"\n\n// Rest in destructuring\nconst [first, ...rest] = [10, 20, 30, 40];\nconsole.log(first); // 10\nconsole.log(rest);  // [20, 30, 40]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spread-operator",
      children: "Spread Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expand an iterable into individual elements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const nums = [1, 2, 3];\nconst more = [...nums, 4, 5];\nconsole.log(more); // [1, 2, 3, 4, 5]\n\n// Merge objects\nconst defaults = { theme: 'light', lang: 'en' };\nconst overrides = { lang: 'fr' };\nconst config = { ...defaults, ...overrides };\nconsole.log(config); // { theme: \"light\", lang: \"fr\" }\n\n// Spread in function calls\nconsole.log(Math.max(...nums)); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iife--immediately-invoked-function-expression",
      children: "IIFE — Immediately Invoked Function Expression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "(function () {\n    const secret = 'hidden';\n    console.log('IIFE runs once');\n})();\n\n// Arrow IIFE\n(() => {\n    console.log('Arrow IIFE');\n})();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "callbacks",
      children: "Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A callback is a function passed into another function to execute later."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fetchData(callback) {\n    setTimeout(() => {\n        callback({ id: 1, status: 'ok' });\n    }, 1000);\n}\n\nfetchData(data => {\n    console.log('Received:', data);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "higher-order-functions--map-filter-reduce",
      children: "Higher-Order Functions — map, filter, reduce"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const numbers = [5, 10, 15, 20, 25];\n\n// map — transform every element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [10, 20, 30, 40, 50]\n\n// filter — keep elements that pass a test\nconst big = numbers.filter(n => n > 12);\nconsole.log(big); // [15, 20, 25]\n\n// reduce — accumulate to a single value\nconst total = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log(total); // 75\n\n// Chaining\nconst result = numbers\n    .filter(n => n % 10 === 0)\n    .map(n => n / 10)\n    .reduce((acc, n) => acc + n, 0);\nconsole.log(result); // (10 + 20) / 10 = 3\n\n// reduce — grouping\nconst people = [\n    { name: 'Alice', role: 'admin' },\n    { name: 'Bob', role: 'editor' },\n    { name: 'Carol', role: 'admin' }\n];\nconst grouped = people.reduce((acc, p) => {\n    (acc[p.role] = acc[p.role] || []).push(p);\n    return acc;\n}, {});\nconsole.log(grouped);\n// { admin: [{ name: \"Alice\" }, { name: \"Carol\" }], editor: [{ name: \"Bob\" }] }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-objects-and-arrays",
      children: "3. Objects and Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "object-creation-and-access",
      children: "Object Creation and Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Object literal\nconst car = {\n    make: 'Tesla',\n    model: 'Model 3',\n    year: 2024,\n    start() {\n        console.log(`${this.make} ${this.model} started`);\n    }\n};\n\n// Dot notation\nconsole.log(car.make);     // \"Tesla\"\n\n// Bracket notation — dynamic keys\nconst key = 'model';\nconsole.log(car[key]);     // \"Model 3\"\n\n// Computed property keys\nconst prefix = 'prop';\nconst obj = {\n    [prefix + '1']: 'value-a',\n    [prefix + '2']: 'value-b'\n};\nconsole.log(obj.prop1); // \"value-a\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "object-destructuring",
      children: "Object Destructuring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const user = { id: 1, name: 'Alice', email: 'alice@example.com' };\n\n// Basic destructuring\nconst { name, email } = user;\nconsole.log(name, email); // \"Alice\" \"alice@example.com\"\n\n// Rename\nconst { id: userId } = user;\nconsole.log(userId); // 1\n\n// Default values\nconst { role = 'viewer' } = user;\nconsole.log(role); // \"viewer\"\n\n// Nested destructuring\nconst response = {\n    status: 200,\n    data: { title: 'Hello', author: 'Bob' }\n};\nconst { data: { title, author } } = response;\nconsole.log(title); // \"Hello\"\n\n// Rest in object destructuring\nconst { id: userId2, ...rest } = user;\nconsole.log(userId2); // 1\nconsole.log(rest);    // { name: \"Alice\", email: \"alice@example.com\" }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "object-methods",
      children: "Object Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const inventory = {\n    items: [],\n    add(item) {\n        this.items.push(item);\n    },\n    clear() {\n        this.items = [];\n    }\n};\n\ninventory.add('laptop');\ninventory.add('monitor');\nconsole.log(inventory.items); // [\"laptop\", \"monitor\"]\n\n// Static methods\nconst target = { a: 1 };\nconst source = { b: 2, c: 3 };\nObject.assign(target, source);\nconsole.log(target); // { a: 1, b: 2, c: 3 }\n\nconst keys = Object.keys(target);\nconst values = Object.values(target);\nconst entries = Object.entries(target);\nconsole.log(keys);    // [\"a\", \"b\", \"c\"]\nconsole.log(values);  // [1, 2, 3]\nconsole.log(entries); // [[\"a\", 1], [\"b\", 2], [\"c\", 3]]\n\n// Object.freeze — makes object immutable (shallow)\nconst frozen = Object.freeze({ version: 1 });\n// frozen.version = 2; // TypeError in strict mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "array-methods--push-pop-find-some-every-includes-flat",
      children: "Array Methods — push, pop, find, some, every, includes, flat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const fruits = ['apple', 'banana'];\n\n// push / pop (modify end)\nfruits.push('cherry');\nconsole.log(fruits);       // [\"apple\", \"banana\", \"cherry\"]\nconsole.log(fruits.pop()); // \"cherry\"\n\n// shift / unshift (modify start)\nfruits.unshift('avocado');\nconsole.log(fruits);         // [\"avocado\", \"apple\", \"banana\"]\nconsole.log(fruits.shift()); // \"avocado\"\n\n// find — returns first match\nconst numbers = [10, 25, 30, 45];\nconst found = numbers.find(n => n > 20);\nconsole.log(found); // 25\n\n// some — at least one passes\nconsole.log(numbers.some(n => n > 40)); // true\n\n// every — all pass\nconsole.log(numbers.every(n => n > 5)); // true\n\n// includes — strict equality check\nconsole.log(fruits.includes('banana')); // true\n\n// flat — flatten nested arrays\nconst nested = [1, [2, [3, [4]]]];\nconsole.log(nested.flat());       // [1, 2, [3, [4]]]\nconsole.log(nested.flat(2));      // [1, 2, 3, [4]]\nconsole.log(nested.flat(Infinity)); // [1, 2, 3, 4]\n\n// splice — insert/remove at index\nconst colors = ['red', 'green', 'blue'];\ncolors.splice(1, 1, 'yellow');  // remove 1 at index 1, insert 'yellow'\nconsole.log(colors); // [\"red\", \"yellow\", \"blue\"]\n\n// slice — non-destructive copy\nconst sliced = colors.slice(0, 2);\nconsole.log(sliced); // [\"red\", \"yellow\"]\n\n// sort — mutates, accepts compare function\nconst scores = [3, 30, 1, 100];\nscores.sort((a, b) => a - b);\nconsole.log(scores); // [1, 3, 30, 100]\n\n// forEach — iterate\nfruits.forEach((fruit, i) => {\n    console.log(`${i}: ${fruit}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spread-operator-with-arrays",
      children: "Spread Operator with Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst merged = [...a, ...b];\nconsole.log(merged); // [1, 2, 3, 4, 5, 6]\n\n// Copy (shallow)\nconst copy = [...a];\nconsole.log(copy);    // [1, 2, 3]\nconsole.log(copy === a); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-dom-manipulation",
      children: "4. DOM Manipulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Document Object Model (DOM) is a tree representation of HTML. JavaScript can traverse and mutate this tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "selecting-elements",
      children: "Selecting Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>DOM Demo</title>\n</head>\n<body>\n    <h1 id=\"title\">Hello World</h1>\n    <p class=\"text\">First paragraph</p>\n    <p class=\"text\">Second paragraph</p>\n    <ul id=\"list\">\n        <li data-id=\"1\">Item 1</li>\n        <li data-id=\"2\">Item 2</li>\n        <li data-id=\"3\">Item 3</li>\n    </ul>\n    <div class=\"container\"></div>\n    <button id=\"btn\">Click me</button>\n\n    <script src=\"app.js\"></script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// getElementById\nconst title = document.getElementById('title');\nconsole.log(title.textContent); // \"Hello World\"\n\n// querySelector — returns first match (CSS selector)\nconst firstText = document.querySelector('.text');\nconsole.log(firstText.textContent); // \"First paragraph\"\n\nconst list = document.querySelector('#list');\nconsole.log(list.children.length); // 3\n\n// querySelectorAll — returns NodeList (array-like)\nconst allTexts = document.querySelectorAll('.text');\nallTexts.forEach(el => console.log(el.textContent));\n\n// By tag name\nconst allLis = document.querySelectorAll('li');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-and-inserting-elements",
      children: "Creating and Inserting Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Create Elements</title>\n</head>\n<body>\n    <div id=\"app\"></div>\n    <script>\n        const app = document.getElementById('app');\n\n        // createElement\n        const heading = document.createElement('h2');\n        heading.textContent = 'Dynamic Heading';\n        heading.classList.add('highlight');\n\n        const paragraph = document.createElement('p');\n        paragraph.textContent = 'This paragraph was created by JavaScript.';\n\n        const link = document.createElement('a');\n        link.href = 'https://laravel.com';\n        link.textContent = 'Visit Laravel';\n        link.target = '_blank';\n\n        // appendChild / append\n        app.appendChild(heading);\n        app.append(paragraph, link);\n\n        // Insert adjacent\n        const banner = document.createElement('div');\n        banner.textContent = 'Banner';\n        heading.insertAdjacentElement('afterend', banner);\n\n        // Remove\n        // app.removeChild(heading);\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "innerhtml--caution-with-user-data",
      children: "innerHTML — caution with user data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const container = document.querySelector('.container');\ncontainer.innerHTML = '<span class=\"badge\">New</span>';\n\n// SECURITY: never interpolate unsanitized user input\n// const userInput = '<img src=x onerror=alert(1)>';\n// container.innerHTML = userInput; // XSS vulnerability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "classlist",
      children: "classList"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const box = document.querySelector('.box');\nif (box) {\n    box.classList.add('active');\n    box.classList.remove('hidden');\n    box.classList.toggle('visible');\n    console.log(box.classList.contains('active')); // true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dataset",
      children: "dataset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const li = document.querySelector('li');\nconsole.log(li.dataset.id); // \"1\"\nli.dataset.status = 'done';\n// HTML becomes: <li data-id=\"1\" data-status=\"done\">Item 1</li>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "textcontent-vs-innertext",
      children: "textContent vs innerText"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const p = document.querySelector('p');\nconsole.log(p.textContent); // includes all text (no layout cost)\n// innerText is layout-aware and more expensive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "traversal",
      children: "Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const child = document.querySelector('li');\nconsole.log(child.parentElement);       // <ul>\nconsole.log(child.nextElementSibling);  // next <li>\nconsole.log(child.previousElementSibling); // previous <li>\nconsole.log(child.closest('ul'));       // nearest matching ancestor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-es6-features",
      children: "5. ES6+ Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "template-literals",
      children: "Template Literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const name = 'Alice';\nconst age = 30;\n\n// Interpolation\nconst greeting = `Hello, my name is ${name} and I am ${age} years old.`;\nconsole.log(greeting);\n// \"Hello, my name is Alice and I am 30 years old.\"\n\n// Multi-line strings\nconst html = `\n    <div class=\"card\">\n        <h2>${name}</h2>\n        <p>Age: ${age}</p>\n    </div>\n`;\n\n// Tagged templates\nfunction highlight(strings, ...values) {\n    return strings.reduce((result, str, i) => {\n        const val = values[i] ? `<strong>${values[i]}</strong>` : '';\n        return result + str + val;\n    }, '');\n}\n\nconst tagged = highlight`User: ${name}, Role: ${'admin'}`;\nconsole.log(tagged); // \"User: <strong>Alice</strong>, Role: <strong>admin</strong>\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "let-and-const-detailed",
      children: "let and const (detailed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See Section 1 for scoping comparison. Block scoping eliminates the classic loop closure bug:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Bug with var\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100); // 3, 3, 3\n}\n\n// Fixed with let\nfor (let j = 0; j < 3; j++) {\n    setTimeout(() => console.log(j), 100); // 0, 1, 2\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "destructuring-detailed",
      children: "Destructuring (detailed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Already covered in Sections 3. Additional patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Swapping variables\nlet x = 1, y = 2;\n[x, y] = [y, x];\nconsole.log(x, y); // 2 1\n\n// Function parameter destructuring\nfunction printUser({ name, email, role = 'viewer' }) {\n    console.log(`${name} (${email}) — ${role}`);\n}\nprintUser({ name: 'Alice', email: 'a@example.com' });\n// \"Alice (a@example.com) — viewer\"\n\n// Nested array destructuring\nconst [a, , b] = [10, 20, 30];\nconsole.log(a, b); // 10 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spread-and-rest",
      children: "Spread and Rest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detailed in Sections 2 and 3. Key distinction:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spread"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "expands"
        }), " an iterable (used in array/object literals, function calls)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rest"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "collects"
        }), " remaining elements (used in destructuring, function parameters)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modules--import--export",
      children: "Modules — import / export"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// math.js\nexport const PI = 3.14159;\nexport function add(a, b) { return a + b; }\nexport default function multiply(a, b) { return a * b; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// app.js\nimport multiply, { PI, add } from './math.js';\n\nconsole.log(multiply(2, 3)); // 6\nconsole.log(add(PI, 1));     // 4.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Dynamic import (lazy loading)\nconst button = document.getElementById('loadModule');\nbutton.addEventListener('click', async () => {\n    const { default: format } = await import('./format.js');\n    console.log(format('dynamic import'));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "promises",
      children: "Promises"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function asyncTask(success) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (success) {\n                resolve('Task completed');\n            } else {\n                reject(new Error('Task failed'));\n            }\n        }, 1000);\n    });\n}\n\n// Consuming\nasyncTask(true)\n    .then(result => console.log(result))\n    .catch(err => console.error(err))\n    .finally(() => console.log('Done'));\n\n// Promise combinators\nconst p1 = Promise.resolve('A');\nconst p2 = Promise.resolve('B');\nconst p3 = new Promise(r => setTimeout(() => r('C'), 500));\n\nPromise.all([p1, p2, p3])\n    .then(values => console.log(values)); // [\"A\", \"B\", \"C\"]\n\nPromise.race([p1, p2, p3])\n    .then(winner => console.log(winner)); // \"A\"\n\nPromise.allSettled([p1, Promise.reject('X'), p3])\n    .then(results => console.log(results));\n// [{ status: \"fulfilled\", value: \"A\" }, { status: \"rejected\", reason: \"X\" }, ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "async--await",
      children: "async / await"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "async function fetchUserData(userId) {\n    try {\n        const response = await fetch(`https://api.example.com/users/${userId}`);\n        if (!response.ok) {\n            throw new Error(`HTTP ${response.status}`);\n        }\n        const user = await response.json();\n        return user;\n    } catch (error) {\n        console.error('Fetch failed:', error);\n        throw error;\n    }\n}\n\n// Top-level await (in modules)\n// const config = await fetch('/config.json').then(r => r.json());\n\n// Parallel execution with async/await\nasync function loadAll() {\n    const [users, posts] = await Promise.all([\n        fetch('/api/users').then(r => r.json()),\n        fetch('/api/posts').then(r => r.json())\n    ]);\n    return { users, posts };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "symbols",
      children: "Symbols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbols are unique, immutable primitive values used as object keys to avoid collisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\nconsole.log(sym1 === sym2); // false\n\nconst obj = {\n    [sym1]: 'secret-value',\n    visible: 'public'\n};\n\nconsole.log(obj[sym1]);     // \"secret-value\"\nconsole.log(Object.keys(obj)); // [\"visible\"] — Symbols are hidden from enumeration\n\n// Well-known Symbols\nconst iterable = {\n    items: [1, 2, 3],\n    [Symbol.iterator]() {\n        let i = 0;\n        return {\n            next: () => ({\n                value: this.items[i++],\n                done: i > this.items.length\n            })\n        };\n    }\n};\nconsole.log([...iterable]); // [1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maps",
      children: "Maps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maps hold key-value pairs where keys can be any type (objects, functions, primitives)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const cache = new Map();\n\ncache.set('user_1', { name: 'Alice' });\ncache.set(42, 'answer');\ncache.set(document.body, 'body element');\n\nconsole.log(cache.get('user_1')); // { name: \"Alice\" }\nconsole.log(cache.has(42));       // true\nconsole.log(cache.size);          // 3\n\ncache.delete(42);\ncache.forEach((value, key) => {\n    console.log(key, value);\n});\n\n// Map vs object — Map preserves insertion order, has size, better performance for frequent add/delete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sets",
      children: "Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets store unique values of any type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const tags = new Set();\n\ntags.add('javascript');\ntags.add('laravel');\ntags.add('javascript'); // ignored — already exists\n\nconsole.log(tags.size); // 2\nconsole.log(tags.has('laravel')); // true\n\ntags.delete('laravel');\n\n// Array deduplication\nconst duplicates = [1, 2, 2, 3, 3, 3];\nconst unique = [...new Set(duplicates)];\nconsole.log(unique); // [1, 2, 3]\n\n// Iteration\ntags.forEach(tag => console.log(tag));\n\n// Set operations\nconst a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst union = new Set([...a, ...b]);            // {1, 2, 3, 4}\nconst intersection = new Set([...a].filter(x => b.has(x))); // {2, 3}\nconst difference = new Set([...a].filter(x => !b.has(x)));  // {1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-ajax-and-the-fetch-api",
      children: "6. AJAX and the Fetch API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "get-request",
      children: "GET Request"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Simple GET\nfetch('https://jsonplaceholder.typicode.com/posts')\n    .then(response => {\n        if (!response.ok) {\n            throw new Error(`HTTP error: ${response.status}`);\n        }\n        return response.json();\n    })\n    .then(posts => {\n        console.log(`${posts.length} posts loaded`);\n    })\n    .catch(error => {\n        console.error('Network error:', error.message);\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "post-request-with-json",
      children: "POST Request with JSON"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const newPost = {\n    title: 'JavaScript Fetch API',\n    body: 'Content goes here...',\n    userId: 1\n};\n\nfetch('https://jsonplaceholder.typicode.com/posts', {\n    method: 'POST',\n    headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n    },\n    body: JSON.stringify(newPost)\n})\n    .then(res => res.json())\n    .then(data => console.log('Created:', data))\n    .catch(err => console.error(err));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "formdata",
      children: "FormData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const form = document.getElementById('myForm');\nform.addEventListener('submit', async event => {\n    event.preventDefault();\n\n    const formData = new FormData(form);\n\n    // FormData automatically handles file uploads\n    fetch('/api/upload', {\n        method: 'POST',\n        body: formData\n        // Do NOT set Content-Type — browser sets multipart/form-data with boundary\n    })\n        .then(res => res.json())\n        .then(data => console.log('Uploaded:', data))\n        .catch(err => console.error(err));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "async function safeFetch(url, options = {}) {\n    try {\n        const response = await fetch(url, options);\n\n        if (response.status === 204) {\n            return null; // No content\n        }\n\n        if (!response.ok) {\n            const errorBody = await response.text();\n            throw new Error(\n                `Request failed: ${response.status} ${response.statusText}\\n${errorBody}`\n            );\n        }\n\n        return await response.json();\n    } catch (error) {\n        if (error.name === 'AbortError') {\n            console.log('Request was cancelled');\n            return null;\n        }\n        console.error('Fetch error:', error);\n        throw error;\n    }\n}\n\n// Usage\nconst data = await safeFetch('/api/users');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "abortcontroller--cancelling-requests",
      children: "AbortController — cancelling requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function searchWithCancel(query) {\n    const controller = new AbortController();\n    const signal = controller.signal;\n\n    const promise = fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal })\n        .then(res => res.json());\n\n    promise.cancel = () => controller.abort();\n\n    return promise;\n}\n\n// Cancel a request\nconst searchPromise = searchWithCancel('laravel');\nsearchPromise.cancel(); // Aborts the fetch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "axios-popular-http-library",
      children: "Axios (popular HTTP library)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- Include from CDN or via npm -->\n<script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// GET with axios\naxios.get('/api/users')\n    .then(response => {\n        console.log(response.data); // parsed JSON\n        console.log(response.status);\n        console.log(response.headers);\n    })\n    .catch(error => {\n        if (error.response) {\n            console.log(error.response.data); // server error body\n        } else if (error.request) {\n            console.log('No response received');\n        } else {\n            console.log('Request setup error:', error.message);\n        }\n    });\n\n// POST with axios\naxios.post('/api/posts', { title: 'Hello', body: 'World' })\n    .then(({ data }) => console.log(data));\n\n// Axios instance with defaults\nconst api = axios.create({\n    baseURL: '/api',\n    timeout: 5000,\n    headers: {\n        'X-CSRF-TOKEN': document.querySelector('meta[name=\"csrf-token\"]')?.content\n    }\n});\n\napi.get('/users')\n    .then(({ data }) => console.log(data));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-event-handling",
      children: "7. Event Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "addeventlistener",
      children: "addEventListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Events</title>\n</head>\n<body>\n    <button id=\"clickBtn\">Click me</button>\n    <form id=\"myForm\">\n        <input type=\"text\" name=\"username\" id=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n    <div id=\"parent\" style=\"padding:20px;background:#eee;\">\n        Parent\n        <div id=\"child\" style=\"padding:20px;background:#ccc;\">\n            Child\n            <div id=\"grandchild\" style=\"padding:20px;background:#aaa;\">\n                Grandchild\n            </div>\n        </div>\n    </div>\n\n    <script>\n        const btn = document.getElementById('clickBtn');\n        btn.addEventListener('click', event => {\n            console.log('Button clicked!');\n            console.log('Event type:', event.type);\n            console.log('Target:', event.target);\n        });\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-phases--capture-target-bubble",
      children: "Event Phases — Capture, Target, Bubble"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events travel in three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capture"
        }), " — document → target (rarely used directly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target"
        }), " — the element that received the event"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bubble"
        }), " — target → document (default listener phase)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const parent = document.getElementById('parent');\nconst child = document.getElementById('child');\nconst grandchild = document.getElementById('grandchild');\n\n// Bubbling phase (default) — third parameter false or omitted\nparent.addEventListener('click', () => console.log('Parent bubble'), false);\nchild.addEventListener('click', () => console.log('Child bubble'));\ngrandchild.addEventListener('click', () => console.log('Grandchild bubble'));\n\n// Click on grandchild outputs:\n// \"Grandchild bubble\"\n// \"Child bubble\"\n// \"Parent bubble\"\n\n// Capture phase — third parameter true\nparent.addEventListener('click', () => console.log('Parent capture'), true);\nchild.addEventListener('click', () => console.log('Child capture'), true);\ngrandchild.addEventListener('click', () => console.log('Grandchild capture'), true);\n\n// Click on grandchild outputs:\n// \"Parent capture\"\n// \"Child capture\"\n// \"Grandchild capture\"\n// \"Grandchild bubble\"\n// \"Child bubble\"\n// \"Parent bubble\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stoppropagation",
      children: "stopPropagation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "grandchild.addEventListener('click', event => {\n    event.stopPropagation(); // Stops further propagation\n    console.log('Grandchild — no more events');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preventdefault",
      children: "preventDefault"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "document.getElementById('myForm').addEventListener('submit', event => {\n    event.preventDefault(); // Prevent form submission\n    const username = document.getElementById('username').value;\n    console.log('Form would submit:', username);\n});\n\ndocument.querySelectorAll('a').forEach(link => {\n    link.addEventListener('click', event => {\n        if (!confirm('Follow this link?')) {\n            event.preventDefault();\n        }\n    });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-delegation",
      children: "Event Delegation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attach a single listener to a parent and handle events from many children."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Event Delegation</title>\n</head>\n<body>\n    <ul id=\"taskList\">\n        <li data-id=\"1\">Task 1</li>\n        <li data-id=\"2\">Task 2</li>\n        <li data-id=\"3\">Task 3</li>\n    </ul>\n    <button id=\"addTaskBtn\">Add Task</button>\n\n    <script>\n        const taskList = document.getElementById('taskList');\n\n        // Single listener for all current and future items\n        taskList.addEventListener('click', event => {\n            const li = event.target.closest('li');\n            if (!li) return;\n\n            console.log('Task clicked:', li.dataset.id, li.textContent);\n            li.classList.toggle('completed');\n        });\n\n        document.getElementById('addTaskBtn').addEventListener('click', () => {\n            const newLi = document.createElement('li');\n            const id = Date.now();\n            newLi.dataset.id = id;\n            newLi.textContent = `Task ${id}`;\n            taskList.appendChild(newLi);\n        });\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-events",
      children: "Custom Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Define custom event\nconst notificationEvent = new CustomEvent('notify', {\n    detail: {\n        message: 'Something happened',\n        level: 'info',\n        timestamp: Date.now()\n    },\n    bubbles: true,\n    cancelable: true\n});\n\n// Dispatch\ndocument.dispatchEvent(notificationEvent);\n\n// Listen\ndocument.addEventListener('notify', event => {\n    const { message, level } = event.detail;\n    console.log(`[${level}] ${message}`);\n});\n\n// From a component\nclass ToastManager {\n    show(message, level = 'info') {\n        const event = new CustomEvent('toast', {\n            detail: { message, level },\n            bubbles: true\n        });\n        document.dispatchEvent(event);\n    }\n}\n\nconst toasts = new ToastManager();\ntoasts.show('User saved successfully', 'success');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-listener-options",
      children: "Event Listener Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const handler = () => console.log('Clicked');\n\n// once — automatically removes after first invocation\nbtn.addEventListener('click', handler, { once: true });\n\n// passive — hint that preventDefault will not be called (improves scroll perf)\ndocument.addEventListener('touchstart', handler, { passive: true });\n\n// Remove listener\nbtn.removeEventListener('click', handler);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "keyboard-and-input-events",
      children: "Keyboard and Input Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const input = document.getElementById('username');\n\ninput.addEventListener('input', () => {\n    console.log('Current value:', input.value);\n});\n\ninput.addEventListener('focus', () => {\n    input.style.borderColor = 'blue';\n});\n\ninput.addEventListener('blur', () => {\n    input.style.borderColor = '';\n});\n\ndocument.addEventListener('keydown', event => {\n    if (event.key === 'Escape') {\n        console.log('Escape pressed');\n    }\n    if (event.ctrlKey && event.key === 's') {\n        event.preventDefault();\n        console.log('Ctrl+S intercepted');\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-alpinejs-for-laravel",
      children: "8. Alpine.js for Laravel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alpine.js is a lightweight JavaScript framework for composing behavior directly in HTML markup. It pairs naturally with Laravel Blade."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Alpine with Laravel</title>\n    {{-- Via Vite (Laravel default) --}}\n    @vite(['resources/js/app.js'])\n\n    {{-- Or CDN for quick prototyping --}}\n    {{-- <script defer src=\"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js\"></script> --}}\n</head>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// resources/js/app.js (Laravel default)\nimport './bootstrap';\nimport Alpine from 'alpinejs';\n\nwindow.Alpine = Alpine;\nAlpine.start();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-data--component-state",
      children: "x-data — Component State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ count: 0, name: 'Alice' }\">\n    <p x-text=\"count\"></p>\n    <p x-text=\"name\"></p>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-init--initialization",
      children: "x-init — Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ message: '' }\" x-init=\"message = 'Page loaded at ' + new Date().toLocaleTimeString()\">\n    <p x-text=\"message\"></p>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-show--toggle-visibility",
      children: "x-show — Toggle Visibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ open: false }\">\n    <button @click=\"open = !open\">Toggle</button>\n    <div x-show=\"open\" x-transition>\n        This content fades in and out.\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-if--conditional-rendering",
      children: "x-if — Conditional Rendering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ showExtra: false }\">\n    <template x-if=\"showExtra\">\n        <p>This element is removed/added from the DOM (not just hidden).</p>\n    </template>\n    <button @click=\"showExtra = !showExtra\">Toggle</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-for--loops",
      children: "x-for — Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ users: [\n    { id: 1, name: 'Alice' },\n    { id: 2, name: 'Bob' },\n    { id: 3, name: 'Carol' }\n] }\">\n    <template x-for=\"user in users\" :key=\"user.id\">\n        <div>\n            <span x-text=\"user.id\"></span>:\n            <span x-text=\"user.name\"></span>\n        </div>\n    </template>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-model--two-way-data-binding",
      children: "x-model — Two-way Data Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ search: '' }\">\n    <input type=\"text\" x-model=\"search\" placeholder=\"Type to search...\">\n    <p x-text=\"'Searching for: ' + search\"></p>\n\n    {{-- Debounce for API calls --}}\n    <input type=\"text\" x-model.debounce.500ms=\"query\">\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-on----event-listeners",
      children: "x-on / @ — Event Listeners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ count: 0 }\">\n    <button x-on:click=\"count++\">Increment</button>\n    <button @click=\"count--\">Decrement</button>\n    <p x-text=\"count\"></p>\n\n    {{-- Specific keys --}}\n    <input type=\"text\" @keydown.escape=\"count = 0\" @keydown.enter=\"count++\">\n\n    {{-- Window events --}}\n    <div x-data @resize.window=\"console.log(window.innerWidth)\"></div>\n\n    {{-- Prevent default --}}\n    <form @submit.prevent=\"console.log('submitted')\">\n        <button type=\"submit\">Submit</button>\n    </form>\n\n    {{-- Outside click --}}\n    <div x-data=\"{ open: false }\" @click.outside=\"open = false\">\n        <button @click=\"open = !open\">Dropdown</button>\n        <div x-show=\"open\">Dropdown content</div>\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-bind----dynamic-attributes",
      children: "x-bind / : — Dynamic Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ isActive: false, bgColor: 'blue' }\">\n    <button\n        :class=\"{ 'bg-blue-500': isActive, 'bg-gray-300': !isActive }\"\n        :style=\"`color: ${bgColor}`\"\n        :disabled=\"!isActive\"\n        @click=\"isActive = !isActive\"\n    >\n        Toggle\n    </button>\n\n    {{-- Bind to a data attribute --}}\n    <div :data-status=\"isActive ? 'on' : 'off'\"></div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-text-and-x-html",
      children: "x-text and x-html"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ title: 'Hello World', htmlContent: '<strong>Bold text</strong>' }\">\n    {{-- x-text escapes HTML --}}\n    <h1 x-text=\"title\"></h1>\n\n    {{-- x-html renders HTML (XSS risk if content is user-supplied) --}}\n    <div x-html=\"htmlContent\"></div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-ref--reference-elements",
      children: "x-ref — Reference Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ focusInput() { $refs.input.focus() } }\">\n    <input type=\"text\" x-ref=\"input\">\n    <button @click=\"focusInput()\">Focus Input</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-teleport--move-elements-in-dom",
      children: "x-teleport — Move Elements in DOM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ open: false }\">\n    <button @click=\"open = true\">Open Modal</button>\n\n    <template x-teleport=\"body\">\n        <div x-show=\"open\" class=\"modal-overlay\">\n            <div class=\"modal-content\">\n                <p>This modal is teleported to the body element.</p>\n                <button @click=\"open = false\">Close</button>\n            </div>\n        </div>\n    </template>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-effect--reactive-side-effects",
      children: "x-effect — Reactive Side Effects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ count: 0, doubled: 0 }\" x-effect=\"doubled = count * 2\">\n    <button @click=\"count++\">Count: <span x-text=\"count\"></span></button>\n    <p>Doubled: <span x-text=\"doubled\"></span></p>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "transitions",
      children: "Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div x-data=\"{ show: false }\">\n    <button @click=\"show = !show\">Toggle</button>\n\n    {{-- Default transition (fade + scale) --}}\n    <div x-show=\"show\" x-transition>\n        Smooth entrance and exit.\n    </div>\n\n    {{-- Custom durations --}}\n    <div x-show=\"show\" x-transition.duration.500ms>\n        Custom duration.\n    </div>\n\n    {{-- Separate enter/leave --}}\n    <div x-show=\"show\"\n         x-transition:enter=\"transition ease-out duration-300\"\n         x-transition:enter-start=\"opacity-0 scale-90\"\n         x-transition:enter-end=\"opacity-100 scale-100\"\n         x-transition:leave=\"transition ease-in duration-200\"\n         x-transition:leave-start=\"opacity-100 scale-100\"\n         x-transition:leave-end=\"opacity-0 scale-90\">\n        Styled with Tailwind classes.\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "alpinedata--reusable-components",
      children: "Alpine.data — Reusable Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// resources/js/alpine-components.js\ndocument.addEventListener('alpine:init', () => {\n    Alpine.data('dropdown', () => ({\n        open: false,\n        toggle() {\n            this.open = !this.open;\n        },\n        close() {\n            this.open = false;\n        },\n        init() {\n            this.$watch('open', value => {\n                console.log('Dropdown:', value ? 'open' : 'closed');\n            });\n        }\n    }));\n\n    Alpine.data('counter', (initial = 0) => ({\n        count: initial,\n        increment() { this.count++; },\n        decrement() { this.count--; },\n        reset() { this.count = initial; }\n    }));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Using Alpine.data components --}}\n<div x-data=\"dropdown\">\n    <button @click=\"toggle()\">Dropdown</button>\n    <div x-show=\"open\" @click.outside=\"close()\">\n        <a href=\"#\">Profile</a>\n        <a href=\"#\">Settings</a>\n    </div>\n</div>\n\n<div x-data=\"counter(10)\">\n    <button @click=\"decrement()\">-</button>\n    <span x-text=\"count\"></span>\n    <button @click=\"increment()\">+</button>\n    <button @click=\"reset()\">Reset</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "alpinestore--global-state",
      children: "Alpine.store — Global State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// resources/js/alpine-store.js\ndocument.addEventListener('alpine:init', () => {\n    Alpine.store('auth', {\n        user: null,\n        async fetchUser() {\n            const res = await fetch('/api/user');\n            this.user = await res.json();\n        },\n        logout() {\n            this.user = null;\n        },\n        get isAuthenticated() {\n            return this.user !== null;\n        }\n    });\n\n    Alpine.store('notifications', {\n        items: [],\n        add(message, type = 'info') {\n            this.items.push({ id: Date.now(), message, type });\n        },\n        remove(id) {\n            this.items = this.items.filter(n => n.id !== id);\n        }\n    });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Access store across components --}}\n<div x-data>\n    <template x-if=\"$store.auth.isAuthenticated\">\n        <div>\n            Welcome, <span x-text=\"$store.auth.user?.name\"></span>\n            <button @click=\"$store.auth.logout()\">Logout</button>\n        </div>\n    </template>\n    <template x-if=\"!$store.auth.isAuthenticated\">\n        <button @click=\"$store.auth.fetchUser()\">Login</button>\n    </template>\n</div>\n\n{{-- Toast notifications with global store --}}\n<div x-data>\n    <button @click=\"$store.notifications.add('User saved!', 'success')\">\n        Save\n    </button>\n    <div class=\"toast-container\">\n        <template x-for=\"note in $store.notifications.items\" :key=\"note.id\">\n            <div x-show=\"true\" x-transition\n                 :class=\"'toast toast-' + note.type\">\n                <span x-text=\"note.message\"></span>\n                <button @click=\"$store.notifications.remove(note.id)\">&times;</button>\n            </div>\n        </template>\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "integration-with-blade-and-livewire",
      children: "Integration with Blade and Livewire"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Alpine + Blade: pass server data to Alpine --}}\n<div x-data='@json($componentData)'>\n    <h2 x-text=\"title\"></h2>\n    <p x-text=\"`Items: ${items.length}`\"></p>\n</div>\n\n{{-- Alpine + Livewire: wire events trigger Alpine --}}\n<div x-data=\"{ showModal: false }\"\n     @user-saved.window=\"showModal = true\">\n    <livewire:user-form />\n\n    <div x-show=\"showModal\" x-transition @click.outside=\"showModal = false\">\n        <p>User saved successfully!</p>\n        <button @click=\"showModal = false\">Close</button>\n    </div>\n</div>\n\n{{-- Alpine within Livewire component --}}\n<livewire:counter :initial=\"0\" />\n{{--\nInside counter Livewire component:\n<div x-data=\"{ count: {{ $initial }} }\">\n    <button wire:click=\"increment\">Count: <span x-text=\"count\"></span></button>\n</div>\n--}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-modern-javascript-tooling",
      children: "9. Modern JavaScript Tooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "npm-and-yarn",
      children: "npm and yarn"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# npm\nnpm init -y\nnpm install lodash\nnpm install -D vite\nnpm run dev\n\n# yarn\nyarn init -y\nyarn add lodash\nyarn add -D vite\nyarn dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "packagejson",
      children: "package.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"name\": \"laravel-project\",\n    \"private\": true,\n    \"type\": \"module\",\n    \"scripts\": {\n        \"dev\": \"vite\",\n        \"build\": \"vite build\",\n        \"preview\": \"vite preview\"\n    },\n    \"dependencies\": {\n        \"alpinejs\": \"^3.14.0\",\n        \"axios\": \"^1.7.0\",\n        \"lodash\": \"^4.17.21\"\n    },\n    \"devDependencies\": {\n        \"@vitejs/plugin-vue\": \"^5.0.0\",\n        \"autoprefixer\": \"^10.4.0\",\n        \"vite\": \"^6.0.0\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "es-modules",
      children: "ES Modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Named exports\nexport const version = '1.0.0';\nexport function formatDate(date) { /* ... */ }\n\n// Default export\nexport default class Logger { /* ... */ }\n\n// Re-export\nexport { debounce } from 'lodash';\n\n// Import all\nimport * as utils from './utils.js';\nconsole.log(utils.version);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "import-maps",
      children: "Import Maps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Import maps allow browsers to resolve bare import specifiers without a bundler."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<script type=\"importmap\">\n{\n    \"imports\": {\n        \"alpinejs\": \"https://cdn.jsdelivr.net/npm/alpinejs@3.14.0/dist/module.esm.js\",\n        \"lodash\": \"/vendor/lodash/lodash.js\"\n    }\n}\n</script>\n<script type=\"module\">\n    import Alpine from 'alpinejs';\n    import _ from 'lodash';\n\n    window.Alpine = Alpine;\n    Alpine.start();\n\n    console.log(_.debounce(() => {}, 300));\n</script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bundling-concepts",
      children: "Bundling Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entry point"
        }), " — the file Vite starts from (usually ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resources/js/app.js"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code splitting"
        }), " — dynamic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import()"
        }), " automatically creates separate chunks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree shaking"
        }), " — unused exports are removed in production builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minification"
        }), " — Vite uses esbuild for production to compress output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source maps"
        }), " — map compiled code back to original source for debugging"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// This will be tree-shaken if never imported\nexport function unusedHelper() {\n    return 'never used';\n}\n\n// Code splitting example\nconst button = document.getElementById('heavyFeature');\nbutton.addEventListener('click', async () => {\n    const { default: Chart } = await import('./Chart.js');\n    new Chart('#canvas');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-javascript-in-laravel",
      children: "10. JavaScript in Laravel"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vite-configuration",
      children: "Vite Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// vite.config.js (Laravel default)\nimport { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n    plugins: [\n        laravel({\n            input: ['resources/css/app.css', 'resources/js/app.js'],\n            refresh: true\n        }),\n        tailwindcss()\n    ]\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "resourcesjsappjs",
      children: "resources/js/app.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// resources/js/app.js\nimport './bootstrap';\nimport Alpine from 'alpinejs';\nimport axios from 'axios';\n\n// Make Alpine globally available\nwindow.Alpine = Alpine;\nAlpine.start();\n\n// Configure Axios defaults\naxios.defaults.headers.common['X-CSRF-TOKEN'] = document\n    .querySelector('meta[name=\"csrf-token\"]')\n    ?.getAttribute('content');\n\naxios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "importmetaenv",
      children: "import.meta.env"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel/Vite exposes environment variables through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "import.meta.env"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// .env\n// VITE_APP_NAME=Laravel\n// VITE_API_URL=https://api.example.com\n\n// In JavaScript\nconsole.log(import.meta.env.VITE_APP_NAME); // \"Laravel\"\nconsole.log(import.meta.env.VITE_API_URL);  // \"https://api.example.com\"\nconsole.log(import.meta.env.MODE);          // \"development\" or \"production\"\nconsole.log(import.meta.env.DEV);           // true in dev mode\nconsole.log(import.meta.env.PROD);          // true in production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bootstrap-javascript",
      children: "Bootstrap JavaScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// resources/js/bootstrap.js\nimport axios from 'axios';\nimport _ from 'lodash';\n\nwindow._ = _;\nwindow.axios = axios;\n\nwindow.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n\n// Laravel Echo (WebSockets)\nimport Echo from 'laravel-echo';\nimport Pusher from 'pusher-js';\n\nwindow.Pusher = Pusher;\n\nwindow.Echo = new Echo({\n    broadcaster: 'pusher',\n    key: import.meta.env.VITE_PUSHER_APP_KEY,\n    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,\n    forceTLS: true\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tailwind-configuration",
      children: "Tailwind Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nexport default {\n    content: [\n        './resources/**/*.blade.php',\n        './resources/**/*.js',\n        './resources/**/*.vue',\n    ],\n    theme: {\n        extend: {},\n    },\n    plugins: [],\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-echo-and-broadcasting",
      children: "Laravel Echo and Broadcasting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Listen for events on a channel\nimport Echo from 'laravel-echo';\n\nwindow.Echo = new Echo({\n    broadcaster: 'pusher',\n    key: import.meta.env.VITE_PUSHER_APP_KEY,\n    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,\n    forceTLS: true\n});\n\n// Public channel\nEcho.channel('orders')\n    .listen('OrderShipped', event => {\n        console.log('Order shipped:', event.order);\n        showNotification(`Order #${event.order.id} shipped!`);\n    });\n\n// Private channel (requires authentication)\nEcho.private(`user.${userId}`)\n    .listen('NewMessage', event => {\n        console.log('New message:', event.message);\n        appendMessage(event.message);\n    })\n    .notification(notification => {\n        console.log('Notification:', notification);\n    });\n\n// Presence channel (who's online)\nEcho.join(`room.${roomId}`)\n    .here(members => {\n        console.log('Online members:', members);\n    })\n    .joining(member => {\n        console.log('Joined:', member.name);\n    })\n    .leaving(member => {\n        console.log('Left:', member.name);\n    })\n    .listen('MessageSent', event => {\n        addMessage(event.message);\n    });\n\n// Leaving a channel (cleanup)\n// Echo.leave('orders');\n// Echo.leaveChannel(`user.${userId}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complete-blade--vite--alpine-integration",
      children: "Complete Blade + Vite + Alpine Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- resources/views/dashboard.blade.php --}}\n<!DOCTYPE html>\n<html lang=\"{{ str_replace('_', '-', app()->getLocale()) }}\">\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"csrf-token\" content=\"{{ csrf_token() }}\">\n    <title>Dashboard - {{ config('app.name') }}</title>\n    @vite(['resources/css/app.css', 'resources/js/app.js'])\n</head>\n<body class=\"antialiased bg-gray-50\">\n    <div x-data=\"dashboard()\" class=\"min-h-screen\">\n        {{-- Header --}}\n        <header class=\"bg-white shadow\">\n            <div class=\"max-w-7xl mx-auto px-4 py-4 flex justify-between items-center\">\n                <h1 class=\"text-xl font-bold\" x-text=\"title\"></h1>\n                <div x-data=\"dropdown\">\n                    <button @click=\"toggle()\" class=\"flex items-center gap-2\">\n                        <span x-text=\"$store.auth.user?.name || 'Guest'\"></span>\n                        <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"></path>\n                        </svg>\n                    </button>\n                    <div x-show=\"open\" @click.outside=\"close()\"\n                         class=\"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg\"\n                         x-transition>\n                        <a href=\"/profile\" class=\"block px-4 py-2 hover:bg-gray-100\">Profile</a>\n                        <a href=\"/settings\" class=\"block px-4 py-2 hover:bg-gray-100\">Settings</a>\n                        <form method=\"POST\" action=\"{{ route('logout') }}\">\n                            @csrf\n                            <button type=\"submit\" class=\"block w-full text-left px-4 py-2 hover:bg-gray-100\">\n                                Logout\n                            </button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </header>\n\n        {{-- Main content --}}\n        <main class=\"max-w-7xl mx-auto px-4 py-8\">\n            {{-- Stats grid --}}\n            <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8\">\n                <div x-data=\"statCard('{{ $totalUsers }}', 'Users')\" class=\"bg-white p-6 rounded-lg shadow\">\n                    <p class=\"text-sm text-gray-500\" x-text=\"label\"></p>\n                    <p class=\"text-3xl font-bold mt-1\" x-text=\"value\"></p>\n                </div>\n                <div x-data=\"statCard('{{ $totalOrders }}', 'Orders')\" class=\"bg-white p-6 rounded-lg shadow\">\n                    <p class=\"text-sm text-gray-500\" x-text=\"label\"></p>\n                    <p class=\"text-3xl font-bold mt-1\" x-text=\"value\"></p>\n                </div>\n                <div x-data=\"statCard('{{ $revenue }}', 'Revenue')\" class=\"bg-white p-6 rounded-lg shadow\">\n                    <p class=\"text-sm text-gray-500\" x-text=\"label\"></p>\n                    <p class=\"text-3xl font-bold mt-1\" x:text=\"`$${value}`\"></p>\n                </div>\n            </div>\n\n            {{-- Real-time orders (Echo) --}}\n            <div x-data=\"orders()\" class=\"bg-white rounded-lg shadow p-6\">\n                <div class=\"flex justify-between items-center mb-4\">\n                    <h2 class=\"text-lg font-semibold\">Recent Orders</h2>\n                    <span class=\"text-sm text-gray-500\">\n                        Live: <span x-text=\"connected ? 'Connected' : 'Disconnected'\"\n                                   :class=\"connected ? 'text-green-500' : 'text-red-500'\"></span>\n                    </span>\n                </div>\n                <template x-if=\"loading\">\n                    <p>Loading orders...</p>\n                </template>\n                <template x-if=\"!loading\">\n                    <table class=\"w-full\">\n                        <thead>\n                            <tr class=\"text-left text-sm text-gray-500\">\n                                <th class=\"pb-2\">ID</th>\n                                <th class=\"pb-2\">Customer</th>\n                                <th class=\"pb-2\">Status</th>\n                                <th class=\"pb-2\">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <template x-for=\"order in orders\" :key=\"order.id\">\n                                <tr class=\"border-t\" :class=\"{ 'bg-yellow-50': order.isNew }\">\n                                    <td class=\"py-2\" x-text=\"order.id\"></td>\n                                    <td class=\"py-2\" x-text=\"order.customer\"></td>\n                                    <td class=\"py-2\">\n                                        <span :class=\"statusClass(order.status)\"\n                                              x-text=\"order.status\"></span>\n                                    </td>\n                                    <td class=\"py-2\" x-text=\"`$${order.total}`\"></td>\n                                </tr>\n                            </template>\n                        </tbody>\n                    </table>\n                </template>\n            </div>\n        </main>\n    </div>\n\n    <script>\n        document.addEventListener('alpine:init', () => {\n            // Stat card component\n            Alpine.data('statCard', (value, label) => ({\n                value: value,\n                label: label\n            }));\n\n            // Dashboard main component\n            Alpine.data('dashboard', () => ({\n                title: 'Dashboard',\n                init() {\n                    console.log('Dashboard initialized');\n                }\n            }));\n\n            // Orders component with Echo\n            Alpine.data('orders', () => ({\n                orders: [],\n                loading: true,\n                connected: false,\n\n                async init() {\n                    await this.fetchOrders();\n\n                    if (window.Echo) {\n                        Echo.channel('orders')\n                            .listen('OrderShipped', event => {\n                                this.orders.unshift({\n                                    id: event.order.id,\n                                    customer: event.order.customer_name,\n                                    status: 'shipped',\n                                    total: event.order.total,\n                                    isNew: true\n                                });\n                                setTimeout(() => {\n                                    this.orders.forEach(o => o.isNew = false);\n                                }, 3000);\n                            });\n\n                        Echo.connector.pusher.connection.bind('connected', () => {\n                            this.connected = true;\n                        });\n                    }\n                },\n\n                async fetchOrders() {\n                    try {\n                        const response = await axios.get('/api/orders');\n                        this.orders = response.data;\n                    } catch (error) {\n                        console.error('Failed to load orders:', error);\n                    } finally {\n                        this.loading = false;\n                    }\n                },\n\n                statusClass(status) {\n                    const classes = {\n                        pending: 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-xs',\n                        shipped: 'text-blue-600 bg-blue-100 px-2 py-1 rounded text-xs',\n                        delivered: 'text-green-600 bg-green-100 px-2 py-1 rounded text-xs',\n                        cancelled: 'text-red-600 bg-red-100 px-2 py-1 rounded text-xs'\n                    };\n                    return classes[status] || classes.pending;\n                }\n            }));\n\n            // Dropdown component\n            Alpine.data('dropdown', () => ({\n                open: false,\n                toggle() { this.open = !this.open; },\n                close() { this.open = false; }\n            }));\n        });\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key JavaScript concepts for web development."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store values in memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "var, let, const with different scoping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable code blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarations, expressions, arrows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOM API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulate page content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "querySelector, event listeners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle async operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async/await syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ES6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern JavaScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modules, destructuring, spread, classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use const by default and let only when you need to reassign. Never use \u000bar in modern JavaScript."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for JavaScript fundamentals."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scoping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "var (function), let/const (block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number, String, Boolean, null, undefined, Object, Symbol, BigInt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map, filter, reduce, find, forEach, some, every"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOM Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "querySelector, createElement, appendChild, addEventListener"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ES6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow functions, template literals, destructuring, spread, modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Echo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket broadcasting, channels, events"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Async/await is syntactic sugar over Promises. Error handling with try/catch is essential for async functions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power vs memory footprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async/Await"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability vs Promise.then"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOM Manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct control vs framework abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation vs bundle size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Echo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time interactivity vs server complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Beware of floating-point precision in JS. Use libraries like Decimal.js for financial calculations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your JavaScript fundamentals knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the difference between let and var?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) let is block-scoped, var is function-scoped"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They are identical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) var is block-scoped, let is function-scoped"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) let is global, var is local"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>A) let is block-scoped, var is function-scoped</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What does the map() array method do?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Filters array elements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Creates a new array by transforming each element"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reduces array to a single value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Sorts the array"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Creates a new array by transforming each element</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " What is the event loop?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) DOM event handler"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) JavaScript's async execution model"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) A loop structure"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Array iteration method"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) JavaScript's async execution model</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What does Laravel Echo enable?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Form validation"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Real-time WebSocket broadcasting"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Database queries"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) File uploads"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>B) Real-time WebSocket broadcasting</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Compare key JavaScript concepts for web development."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Purpose"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Feature"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Variables"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Store values in memory"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "var, let, const with different scoping"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Functions"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Reusable code blocks"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Declarations, expressions, arrows"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "DOM API"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Manipulate page content"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "querySelector, event listeners"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Promises"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Handle async operations"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Async/await syntax"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "ES6+"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Modern JavaScript"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Modules, destructuring, spread, classes"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "quick-reference-1",
                      children: "Quick Reference"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Quick reference for JavaScript fundamentals."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Topic"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Point"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Scoping"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "var (function), let/const (block)"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Data Types"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Number, String, Boolean, null, undefined, Object, Symbol, BigInt"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Array Methods"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "map, filter, reduce, find, forEach, some, every"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "DOM Methods"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "querySelector, createElement, appendChild, addEventListener"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "ES6+"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Arrow functions, template literals, destructuring, spread, modules"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Laravel Echo"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "WebSocket broadcasting, channels, events"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "cross-application-matrix-1",
                      children: "Cross-Application Matrix"
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Application Context"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Trade-Off"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Closures"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Data encapsulation"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Power vs memory footprint"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Async/Await"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "HTTP requests"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Readability vs Promise.then"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "DOM Manipulation"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "UI updates"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Direct control vs framework abstraction"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Modules"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Code organization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Encapsulation vs bundle size"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Laravel Echo"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Real-time features"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Real-time interactivity vs server complexity"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "chapter-quiz-1",
                      children: "Chapter Quiz"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Test your JavaScript fundamentals knowledge."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " What is the difference between let and var?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) let is block-scoped, var is function-scoped"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) They are identical"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) var is block-scoped, let is function-scoped"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) let is global, var is local"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>A) let is block-scoped, var is function-scoped</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " What does the map() array method do?"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) Filters array elements"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) Creates a new array by transforming each element"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) Reduces array to a single value"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) Sorts the array"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>B) Creates a new array by transforming each element</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " What is the event loop?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) DOM event handler"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) JavaScript's async execution model"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) A loop structure"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) Array iteration method"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>B) JavaScript's async execution model</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Q4:"
                                  }), " What does Laravel Echo enable?"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "A) Form validation"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "B) Real-time WebSocket broadcasting"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "C) Database queries"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "D) File uploads"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                    children: ["Answer</summary>B) Real-time WebSocket broadcasting</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "concept-comparison-2",
                                      children: "Concept Comparison"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Compare key JavaScript concepts for web development."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Concept"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Purpose"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Key Feature"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Variables"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Store values in memory"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "var, let, const with different scoping"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Functions"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Reusable code blocks"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Declarations, expressions, arrows"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "DOM API"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Manipulate page content"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "querySelector, event listeners"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Promises"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Handle async operations"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Async/await syntax"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "ES6+"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Modern JavaScript"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Modules, destructuring, spread, classes"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "quick-reference-2",
                                      children: "Quick Reference"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Quick reference for JavaScript fundamentals."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Topic"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Key Point"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Scoping"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "var (function), let/const (block)"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Data Types"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Number, String, Boolean, null, undefined, Object, Symbol, BigInt"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Array Methods"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "map, filter, reduce, find, forEach, some, every"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "DOM Methods"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "querySelector, createElement, appendChild, addEventListener"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "ES6+"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Arrow functions, template literals, destructuring, spread, modules"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Laravel Echo"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "WebSocket broadcasting, channels, events"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "cross-application-matrix-2",
                                      children: "Cross-Application Matrix"
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Concept"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Application Context"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Trade-Off"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Closures"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Data encapsulation"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Power vs memory footprint"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Async/Await"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "HTTP requests"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Readability vs Promise.then"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "DOM Manipulation"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "UI updates"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Direct control vs framework abstraction"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Modules"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Code organization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Encapsulation vs bundle size"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Laravel Echo"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Real-time features"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Real-time interactivity vs server complexity"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "chapter-quiz-2",
                                      children: "Chapter Quiz"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Test your JavaScript fundamentals knowledge."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Q1:"
                                      }), " What is the difference between let and var?"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "A) let is block-scoped, var is function-scoped"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "B) They are identical"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "C) var is block-scoped, let is function-scoped"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "D) let is global, var is local"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                        children: ["Answer</summary>A) let is block-scoped, var is function-scoped</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: "Q2:"
                                          }), " What does the map() array method do?"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "A) Filters array elements"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "B) Creates a new array by transforming each element"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "C) Reduces array to a single value"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "D) Sorts the array"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                            children: ["Answer</summary>B) Creates a new array by transforming each element</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                children: "Q3:"
                                              }), " What is the event loop?"]
                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "A) DOM event handler"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "B) JavaScript's async execution model"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "C) A loop structure"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "D) Array iteration method"
                                              }), "\n"]
                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                children: ["Answer</summary>B) JavaScript's async execution model</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "Q4:"
                                                  }), " What does Laravel Echo enable?"]
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "A) Form validation"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "B) Real-time WebSocket broadcasting"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "C) Database queries"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "D) File uploads"
                                                  }), "\n"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                    children: ["Answer</summary>B) Real-time WebSocket broadcasting</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "concept-comparison-3",
                                                      children: "Concept Comparison"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Compare key JavaScript concepts for web development."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Concept"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Purpose"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Key Feature"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Variables"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Store values in memory"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "var, let, const with different scoping"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Functions"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Reusable code blocks"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Declarations, expressions, arrows"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "DOM API"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Manipulate page content"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "querySelector, event listeners"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Promises"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Handle async operations"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Async/await syntax"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "ES6+"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Modern JavaScript"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Modules, destructuring, spread, classes"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "quick-reference-3",
                                                      children: "Quick Reference"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Quick reference for JavaScript fundamentals."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Topic"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Key Point"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Scoping"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "var (function), let/const (block)"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Data Types"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Number, String, Boolean, null, undefined, Object, Symbol, BigInt"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Array Methods"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "map, filter, reduce, find, forEach, some, every"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "DOM Methods"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "querySelector, createElement, appendChild, addEventListener"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "ES6+"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Arrow functions, template literals, destructuring, spread, modules"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Laravel Echo"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "WebSocket broadcasting, channels, events"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "cross-application-matrix-3",
                                                      children: "Cross-Application Matrix"
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Concept"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Application Context"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Trade-Off"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Closures"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Data encapsulation"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Power vs memory footprint"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Async/Await"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "HTTP requests"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Readability vs Promise.then"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "DOM Manipulation"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "UI updates"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Direct control vs framework abstraction"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Modules"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Code organization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Encapsulation vs bundle size"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Laravel Echo"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Real-time features"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Real-time interactivity vs server complexity"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "chapter-quiz-3",
                                                      children: "Chapter Quiz"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Test your JavaScript fundamentals knowledge."]
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                        children: "Q1:"
                                                      }), " What is the difference between let and var?"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "A) let is block-scoped, var is function-scoped"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "B) They are identical"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "C) var is block-scoped, let is function-scoped"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "D) let is global, var is local"
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                        children: ["Answer</summary>A) let is block-scoped, var is function-scoped</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                            children: "Q2:"
                                                          }), " What does the map() array method do?"]
                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "A) Filters array elements"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "B) Creates a new array by transforming each element"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "C) Reduces array to a single value"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "D) Sorts the array"
                                                          }), "\n"]
                                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                            children: ["Answer</summary>B) Creates a new array by transforming each element</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                children: "Q3:"
                                                              }), " What is the event loop?"]
                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "A) DOM event handler"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "B) JavaScript's async execution model"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "C) A loop structure"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "D) Array iteration method"
                                                              }), "\n"]
                                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                children: ["Answer</summary>B) JavaScript's async execution model</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                    children: "Q4:"
                                                                  }), " What does Laravel Echo enable?"]
                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "A) Form validation"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "B) Real-time WebSocket broadcasting"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "C) Database queries"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "D) File uploads"
                                                                  }), "\n"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                    children: ["Answer</summary>B) Real-time WebSocket broadcasting</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "summary",
                                                                      children: "Summary"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "JavaScript fundamentals form the backbone of modern Laravel frontend development. This chapter covered:"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Core language"
                                                                      }), " — Variables (", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "var"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "let"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "const"
                                                                      }), "), data types, operators, type coercion, and strict mode form JavaScript's foundational syntax. Understanding scope and the temporal dead zone prevents subtle bugs."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Functions"
                                                                      }), " — First-class citizens in JavaScript. Arrow functions provide concise syntax and lexical ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "this"
                                                                      }), " binding. Rest parameters, spread syntax, and default parameters make function signatures flexible. Higher-order functions (", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "map"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "filter"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "reduce"
                                                                      }), ") enable declarative data transformations without explicit loops."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Objects and arrays"
                                                                      }), " — The primary data structures. Destructuring, spread, and modern methods (", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "find"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "some"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "every"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "includes"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "flat"
                                                                      }), ") provide concise, readable data access and manipulation patterns."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "DOM manipulation"
                                                                      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "querySelector"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "createElement"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "classList"
                                                                      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "dataset"
                                                                      }), " give precise control over the document tree. Event delegation reduces memory by attaching a single listener to a parent for many children."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "ES6+ features"
                                                                      }), " — Template literals, destructuring, modules, Promises, and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "async"
                                                                      }), "/", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "await"
                                                                      }), " modernize the language. Maps and Sets add purpose-built collection types. Symbols provide truly private object keys."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Fetch API"
                                                                      }), " — Native HTTP requests with promise-based handling. ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "AbortController"
                                                                      }), " cancels in-flight requests. FormData handles multipart submissions. Axios offers a richer API with interceptors and defaults."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Event handling"
                                                                      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "addEventListener"
                                                                      }), " with capture, bubble, and target phases. ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "stopPropagation"
                                                                      }), " halts event flow; ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "preventDefault"
                                                                      }), " cancels browser defaults. Custom events decouple components through a pub/sub pattern."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Alpine.js"
                                                                      }), " — Lightweight reactive framework that lives in HTML. ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "x-data"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "x-model"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "x-on"
                                                                      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "x-bind"
                                                                      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "x-for"
                                                                      }), " mirror core reactive patterns without a build step. ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "Alpine.data"
                                                                      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "Alpine.store"
                                                                      }), " provide reusable components and global state."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Modern tooling"
                                                                      }), " — Vite drives fast development with HMR and optimized production builds. ES modules, import maps, and bundling concepts (tree shaking, code splitting) enable scalable application architecture."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Laravel integration"
                                                                      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "vite.config.js"
                                                                      }), " connects Blade to the Vite pipeline. ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "import.meta.env"
                                                                      }), " exposes environment variables. Laravel Echo with Pusher/WebSockets adds real-time capabilities. Alpine.js integrates naturally with Blade templates and Livewire components for reactive UIs."]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "exercises",
                                                                      children: "Exercises"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "review-questions",
                                                                      children: "Review Questions"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "var"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "let"
                                                                          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "const"
                                                                          }), "? Give an example where ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "var"
                                                                          }), " would behave differently from ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "let"
                                                                          }), "."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "=="
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "==="
                                                                          }), ". Provide three examples where they produce different results."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is a higher-order function? Write a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "map"
                                                                          }), " call that transforms an array of numbers into an array of their squares."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "How does event delegation work? Why is it more efficient than attaching a listener to every child element?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What are the three phases of event propagation in the DOM? In what order do they fire?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "async"
                                                                          }), "/", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "await"
                                                                          }), " relate to Promises? Rewrite a Promise chain using ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "async"
                                                                          }), "/", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "await"
                                                                          }), "."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "x-show"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "x-if"
                                                                          }), " in Alpine.js? When would you use each?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "How does the spread operator differ from rest parameters? Give one example of each."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "AbortController"
                                                                          }), " API? When would you cancel a fetch request?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["How does Vite integrate with Laravel? What is the role of ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "laravel-vite-plugin"
                                                                          }), "?"]
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "application-problems",
                                                                      children: "Application Problems"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Task Manager"
                                                                          }), " — Create an HTML page with a text input and an \"Add\" button. Use JavaScript to add items to a list. Each list item must have a \"Delete\" button. Use event delegation so dynamically added items are deletable. Store the task array and re-render on every change using a render function."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Search Filter"
                                                                          }), " — Create an array of 20 product objects (id, name, category, price). Render them in a grid using ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "map"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "join"
                                                                          }), ". Add a search input that filters the array with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "filter"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "includes"
                                                                          }), ". Debounce the input using a 300ms ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "setTimeout"
                                                                          }), " — clear the previous timeout on each keystroke."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "API Dashboard"
                                                                          }), " — Use the Fetch API to load data from ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "https://jsonplaceholder.typicode.com/posts"
                                                                          }), ". Display the posts in a table. Add a \"Delete\" button that sends a DELETE request and removes the post from the DOM. Show a loading spinner while fetching. Handle network errors with a user-facing error message."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Alpine Shopping Cart"
                                                                          }), " — Build a simple cart component using Alpine.js with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "x-data"
                                                                          }), ". Include:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "An array of cart items (name, price, quantity)"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Buttons to increment and decrement quantity"
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["An ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "x-effect"
                                                                            }), " that logs the total whenever items change"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Computed total displayed with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "x-text"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "A \"Clear cart\" button"
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Real-time Notification"
                                                                          }), " — Set up a Laravel Echo listener for a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "NotificationReceived"
                                                                          }), " event. Display a toast notification at the top of the page for 5 seconds using Alpine.js ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "x-show"
                                                                          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "x-transition"
                                                                          }), ". Include a \"Dismiss\" button that removes the notification immediately."]
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "challenge-problems",
                                                                      children: "Challenge Problems"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Custom Reactive Store"
                                                                          }), " — Implement a minimal reactive store without a framework:"]
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-javascript",
                                                                            children: "function createStore(initialState) {\n    // Return { state, subscribe, dispatch }\n    // When dispatch mutates state, notify all subscribers\n}\n"
                                                                          })
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "Then use it to power a counter with increment/decrement/reset buttons and three independent displays that all update when state changes."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Async Autocomplete"
                                                                          }), " — Build an autocomplete component with Alpine.js that:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Sends a debounced fetch to an API endpoint on keystroke"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Shows a dropdown of results below the input"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Navigates results with arrow keys (keydown handler)"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Selects on Enter or click"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Cancels the previous request on new keystroke (AbortController)"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Shows \"No results\" when the API returns empty"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Handle race conditions where a slow response arrives after a fast one"
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "JavaScript Module Bundler"
                                                                          }), " — Write a minimal module bundler that:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Parses a dependency graph from an entry file using regex (not full AST)"
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Resolves ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "import"
                                                                            }), " statements to their file contents"]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Bundles all modules into a single IIFE"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Handles circular dependencies gracefully"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Outputs the bundled code as a string"
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Alpine Component Library"
                                                                          }), " — Create a reusable component library with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Alpine.data"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Alpine.store"
                                                                          }), ":"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Alpine.data('modal', ...)"
                                                                            }), " — configurable modal with open/close, backdrop click, Esc key"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Alpine.data('tooltip', ...)"
                                                                            }), " — hover-activated tooltip positioned relative to trigger"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Alpine.data('tabs', ...)"
                                                                            }), " — tabbed interface with keyboard navigation"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Alpine.store('toasts', ...)"
                                                                            }), " — global toast notification queue with auto-dismiss"]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Demonstrate all components in a single Blade view with Tailwind styling"
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Full-stack Real-time Board"
                                                                          }), " — Combine Laravel, Alpine.js, Vite, and Echo to build a collaborative task board:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Drag-and-drop columns using Alpine.js drag events"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Real-time updates via Laravel broadcasting when any user moves a task"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Optimistic UI updates with rollback on failure"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "CSRF-protected API endpoints for task CRUD"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Presence channel showing which users are viewing each column"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Written entirely with Blade + Alpine (no separate Vue/React SPA)"
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n"]
                                                                  })
                                                                })]
                                                              })
                                                            })]
                                                          })
                                                        })]
                                                      })
                                                    })]
                                                  })
                                                })]
                                              })
                                            })]
                                          })
                                        })]
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      })
                    })]
                  })
                })]
              })
            })]
          })
        })]
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