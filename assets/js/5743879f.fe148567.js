"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[58378],{

/***/ 67309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_03_js_basics_md_574_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-03-js-basics-md-574.json
const site_docs_courses_web_development_03_js_basics_md_574_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/03-js-basics","title":"Chapter 3 → JavaScript Basics","description":"Previous 04-js-dom","source":"@site/docs/courses/web-development/03-js-basics.md","sourceDirName":"courses/web-development","slug":"/web-development/03-js-basics","permalink":"/ai-engineering-journey/web-development/03-js-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-js-basics","slug":"/web-development/03-js-basics","title":"Chapter 3 → JavaScript Basics","sidebar_label":"Chapter 3 → JavaScript Basics","sidebar_position":3},"sidebar":"course-web-development","previous":{"title":"Chapter 2 → CSS3","permalink":"/ai-engineering-journey/web-development/02-css"},"next":{"title":"Chapter 4 → JavaScript and the DOM","permalink":"/ai-engineering-journey/web-development/04-js-dom"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/03-js-basics.md


const frontMatter = {
	id: '03-js-basics',
	slug: '/web-development/03-js-basics',
	title: 'Chapter 3 → JavaScript Basics',
	sidebar_label: 'Chapter 3 → JavaScript Basics',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3 → JavaScript Basics';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "3.1 Variables",
  "id": "31-variables",
  "level": 3
}, {
  "value": "3.2 Types",
  "id": "32-types",
  "level": 3
}, {
  "value": "3.3 Operators",
  "id": "33-operators",
  "level": 3
}, {
  "value": "3.4 Control Flow",
  "id": "34-control-flow",
  "level": 3
}, {
  "value": "3.5 Functions",
  "id": "35-functions",
  "level": 3
}, {
  "value": "3.6 Objects",
  "id": "36-objects",
  "level": 3
}, {
  "value": "3.7 Promises and Async/Await",
  "id": "37-promises-and-asyncawait",
  "level": 3
}, {
  "value": "3.8 Arrays",
  "id": "38-arrays",
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
  "value": "TypeScript: Closure Analyzer &amp; Data Transformer",
  "id": "typescript-closure-analyzer--data-transformer",
  "level": 3
}, {
  "value": "TypeScript Implementation: Polyfill Detector, Type Coercion Analyzer, Prototype Walker",
  "id": "typescript-implementation-polyfill-detector-type-coercion-analyzer-prototype-walker",
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
  "value": "Application Problems",
  "id": "application-problems-1",
  "level": 3
}, {
  "value": "structuredClone and Deep Copying",
  "id": "structuredclone-and-deep-copying",
  "level": 3
}, {
  "value": "Event Loop Deep Dive: Microtasks vs Macrotasks",
  "id": "event-loop-deep-dive-microtasks-vs-macrotasks",
  "level": 3
}, {
  "value": "WeakRef and FinalizationRegistry",
  "id": "weakref-and-finalizationregistry",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-3--javascript-basics",
        children: "Chapter 3 → JavaScript Basics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/02-css",
          children: "02-css"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/04-js-dom",
          children: "04-js-dom"
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
          children: "const"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " provide block scoping while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), " is function-scoped and should be avoided in modern code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " JavaScript primitives are immutable and passed by value; objects are mutable and passed by reference."]
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
            children: "Variables"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " provide block scoping with the Temporal Dead Zone"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " by default, use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " when reassignment is necessary"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JavaScript has 7 primitives and objects — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typeof null"
            }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "'object'"
            }), " (a bug)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use explicit coercion like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Number()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean()"
            }), " for clarity"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional chaining ", (0,jsx_runtime.jsx)(_components.code, {
              children: "?."
            }), " and nullish coalescing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "??"
            }), " prevent runtime errors"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "==="
            }), " for equality to avoid type coercion surprises"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Flow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for…of"
            }), " iterates values, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for…in"
            }), " iterates keys (with prototype chain)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.hasOwn()"
            }), " to filter inherited properties in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for…in"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Arrow functions have lexical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " and no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arguments"
            }), " object"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use arrow functions for callbacks, regular functions for methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Modern methods like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "filter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reduce"
            }), " enable declarative data transformations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer non-mutating methods that return new arrays over mutating ones"
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
        }), " Always use strict equality ", (0,jsx_runtime.jsx)(_components.code, {
          children: "==="
        }), " and take advantage of optional chaining ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?."
        }), " and nullish coalescing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "??"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Variable Declarations]\n    B[Primitive & Reference Types]\n    A --> B\n    C[Modern Operators]\n    B --> C\n    D[Control Flow Structures]\n    C --> D\n    E[Functions & Arrow Functions]\n    D --> E\n    F[Objects & Destructuring]\n    E --> F\n    G[Array Methods]\n    F --> G\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare variables using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and explain the differences in scope and hoisting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify and use JavaScript primitive types and reference types with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeof"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "instanceof"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply modern operators including optional chaining, nullish coalescing, spread/rest, and strict equality."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write control flow statements with loops, conditionals, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and invoke functions using declarations, expressions, and arrow functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulate objects and arrays using destructuring, spread, and modern methods."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for…of"
        }), " loops over iterable values; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for…in"
        }), " iterates property keys including inherited ones."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/03-javascript-basics.png",
        alt: "JavaScript Basics Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-variables",
      children: "3.1 Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript provides three variable declaration keywords, each with distinct scoping rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// var → function-scoped, hoisted, can be redeclared\nvar x = 10;\nif (true) {\n  var x = 20; // Same variable → leaks out of block\n}\nconsole.log(x); // 20\n\n// let → block-scoped, hoisted but not initialized (TDZ)\nlet y = 10;\nif (true) {\n  let y = 20; // Different variable → block-scoped\n}\nconsole.log(y); // 10\n\n// const → block-scoped, must be initialized, cannot be reassigned\nconst z = 30;\n// z = 40; // TypeError: Assignment to constant variable\n\n// const does NOT make objects immutable\nconst obj = { a: 1 };\nobj.a = 2; // Allowed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal Dead Zone (TDZ):"
      }), " Variables declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "let"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " exist in the scope but cannot be accessed until the declaration is evaluated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "{\n  console.log(a); // ReferenceError: Cannot access 'a' before initialization\n  let a = 5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rule: Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " by default, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "let"
      }), " when reassignment is necessary, never use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "var"
      }), " in modern code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-types",
      children: "3.2 Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript has seven primitive types and one reference type (Object)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Primitives (immutable, passed by value)\ntypeof 42;           // 'number'\ntypeof 'hello';      // 'string'\ntypeof true;         // 'boolean'\ntypeof undefined;    // 'undefined'\ntypeof null;         // 'object' (historical bug)\ntypeof 123n;         // 'bigint'\ntypeof Symbol('id'); // 'symbol'\n\n// Objects (mutable, passed by reference)\ntypeof {};           // 'object'\ntypeof [];           // 'object'\ntypeof function(){}; // 'function'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type coercion"
      }), " occurs implicitly in many contexts:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "'5' - 2;   // 3 (string coerced to number)\n'5' + 2;   // '52' (number coerced to string)\n+ '42';    // 42 (unary plus coerces to number)\n!!'text';  // true (truthy value coerced to boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use explicit coercion for clarity:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Number('42');        // 42\nString(42);          // '42'\nBoolean(0);          // false\nparseInt('42px', 10); // 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-operators",
      children: "3.3 Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equality:"
      }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "==="
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!=="
      }), " to avoid type coercion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "0 == false;   // true (coercion)\n0 === false;  // false\n'' == 0;      // true\n'' === 0;     // false\nnull == undefined; // true\nnull === undefined; // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Optional chaining (", (0,jsx_runtime.jsx)(_components.code, {
          children: "?."
        }), ")"]
      }), " short-circuits if the operand is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undefined"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const user = { profile: { name: 'Alice' } };\nconsole.log(user?.profile?.name);  // 'Alice'\nconsole.log(user?.address?.city);  // undefined (no error)\nconsole.log(user?.address?.city ?? 'Unknown'); // 'Unknown'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Nullish coalescing (", (0,jsx_runtime.jsx)(_components.code, {
          children: "??"
        }), ")"]
      }), " returns the right operand only when the left is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undefined"
      }), " (not for other falsy values):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const count = 0;\ncount ?? 10;   // 0 (0 is not nullish)\nundefined ?? 10; // 10\nnull ?? 10;     // 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Spread (", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), ")"]
      }), " expands iterables into elements:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const arr = [1, 2, 3];\nconst copy = [...arr];       // [1, 2, 3]\nconst merged = [...arr, 4, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst combined = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Rest (", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), ")"]
      }), " collects remaining parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function sum(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nsum(1, 2, 3, 4); // 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-control-flow",
      children: "3.4 Control Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// if / else if / else\nconst score = 85;\nlet grade;\nif (score >= 90) {\n  grade = 'A';\n} else if (score >= 80) {\n  grade = 'B';\n} else {\n  grade = 'C';\n}\n\n// switch → strict comparison\nswitch (grade) {\n  case 'A':\n    console.log('Excellent');\n    break;\n  case 'B':\n    console.log('Good');\n    break;\n  default:\n    console.log('Needs improvement');\n}\n\n// Loops\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nfor (const item of iterable) {\n  // Values of arrays, strings, Maps, Sets\n}\n\nfor (const key in object) {\n  // Keys/property names (includes prototype chain)\n  if (Object.hasOwn(object, key)) {\n    // Own property check\n  }\n}\n\nlet n = 0;\nwhile (n < 3) {\n  n++;\n}\n\ndo {\n  n--;\n} while (n > 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-functions",
      children: "3.5 Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function declaration"
      }), " (hoisted):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function expression"
      }), " (not hoisted):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const greet = function(name) {\n  return `Hello, ${name}!`;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Arrow functions"
      }), " (lexical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), ", no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arguments"
      }), " object, concise body):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const greet = (name) => `Hello, ${name}!`;\nconst double = (n) => n * 2;\nconst sum = (a, b) => {\n  const result = a + b;\n  return result;\n};\n\n// Lexical this binding\nconst counter = {\n  count: 0,\n  increment() {\n    setInterval(() => {\n      this.count++; // Arrow inherits this from surrounding scope\n    }, 1000);\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default parameters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function createUser(name, role = 'user', isActive = true) {\n  return { name, role, isActive };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-objects",
      children: "3.6 Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Objects are collections of key-value pairs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Object literal\nconst user = {\n  name: 'Alice',\n  age: 30,\n  greet() {\n    return `Hi, I'm ${this.name}`;\n  },\n};\n\n// Computed property keys\nconst key = 'dynamicField';\nconst obj = {\n  [key]: 'value',\n};\n\n// Property shorthand\nconst name = 'Bob';\nconst person = { name }; // { name: 'Bob' }\n\n// Methods\nObject.keys(user);   // ['name', 'age']\nObject.values(user); // ['Alice', 30]\nObject.entries(user); // [['name', 'Alice'], ['age', 30]]\n\n// Property descriptors\nObject.defineProperty(user, 'id', {\n  value: 1,\n  writable: false,\n  enumerable: false,\n  configurable: false,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-promises-and-asyncawait",
      children: "3.7 Promises and Async/Await"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript handles asynchronous operations via Promises and async/await."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Creating a Promise\nfunction fetchUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id > 0) {\n        resolve({ id, name: \"Alice\", role: \"admin\" });\n      } else {\n        reject(new Error(\"Invalid user ID\"));\n      }\n    }, 1000);\n  });\n}\n\n// Consuming with .then/.catch\nfetchUser(1)\n  .then((user) => console.log(user.name))\n  .catch((err) => console.error(err));\n\n// Consuming with async/await (preferred)\nasync function loadUserProfile(id) {\n  try {\n    const user = await fetchUser(id);\n    return user;\n  } catch (error) {\n    console.error(\"Failed to load user:\", error);\n    return null;\n  }\n}\n\n// Parallel execution with Promise.all\nasync function loadDashboard() {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUser(1),\n    fetchPosts(),\n    fetchNotifications(),\n  ]);\n  return { user, posts, notifications };\n}\n\n// Promise.race - returns first settled promise\nasync function fetchWithTimeout(url, ms = 5000) {\n  const controller = new AbortController();\n  const timeout = setTimeout(() => controller.abort(), ms);\n  try {\n    const response = await fetch(url, { signal: controller.signal });\n    return response;\n  } finally {\n    clearTimeout(timeout);\n  }\n}\n\n// Promise.allSettled - waits for all, regardless of rejection\nconst results = await Promise.allSettled([\n  fetch(\"/api/users\"),\n  fetch(\"/api/posts\"),\n  fetch(\"/api/invalid-endpoint\"),\n]);\n\nconst successful = results.filter((r) => r.status === \"fulfilled\").map((r) => r.value);\nconst failed = results.filter((r) => r.status === \"rejected\").map((r) => r.reason);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-arrays",
      children: "3.8 Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arrays are ordered, zero-indexed collections."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const arr = [1, 2, 3, 4, 5];\n\n// Destructuring\nconst [first, second, ...rest] = arr;\n// first = 1, second = 2, rest = [3, 4, 5]\n\n// Mutating methods\narr.push(6);       // [1,2,3,4,5,6]\narr.pop();         // Removes and returns last element\narr.shift();       // Removes and returns first element\narr.unshift(0);    // Prepends element\narr.splice(2, 1);  // Removes 1 element at index 2\n\n// Non-mutating methods (return new array)\nconst doubled = arr.map((n) => n * 2);\nconst evens = arr.filter((n) => n % 2 === 0);\nconst sum = arr.reduce((acc, n) => acc + n, 0);\nconst found = arr.find((n) => n > 3);\nconst hasLarge = arr.some((n) => n > 10);\nconst allPositive = arr.every((n) => n > 0);\nconst sorted = [...arr].sort((a, b) => a - b);\n\n// Array-like to array conversion\nconst args = Array.from(arguments);\nconst fromSet = [...new Set([1, 2, 2, 3])];\n\n// Flat and flatMap\nconst nested = [1, [2, [3]]];\nnested.flat(2); // [1, 2, 3]\n\nconst phrases = ['hello world', 'goodbye'];\nphrases.flatMap((s) => s.split(' ')); // ['hello', 'world', 'goodbye']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object destructuring:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const user = { id: 1, name: 'Alice', role: 'admin' };\nconst { name, role, ...rest } = user;\n// name = 'Alice', role = 'admin', rest = { id: 1 }\n\n// Renaming and defaults\nconst { name: fullName, status = 'active' } = user;\n\n// Nested destructuring\nconst data = { user: { address: { city: 'Portland' } } };\nconst { user: { address: { city } } } = data;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Array.from()"
        }), " to convert array-like objects (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arguments"
        }), " or NodeList) into true arrays for method chaining."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeof null === 'object'"
        }), " is a long-standing JavaScript bug. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value === null"
        }), " to check for null."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " does not make objects immutable — only the binding is constant. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object.freeze()"
        }), " for shallow immutability."]
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
              children: "var"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function-scoped, hoisted, redeclarable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-scoped, TDZ, no redeclaration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "==="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract equality with coercion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict equality without coercion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?."
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuits only on null/undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuits on any falsy value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "??"
            }), " vs `"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Declaration vs Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hoisted, named"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not hoisted, can be anonymous"
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
            children: "Primitives"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "number"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "bigint"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "symbol"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "filter"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "reduce"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "find"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "some"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "every"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "flat"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "flatMap"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Object.keys()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.values()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.entries()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.assign()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "==="
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "!=="
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "?."
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "??"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "..."
            }), " (spread/rest)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "for…of"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "for…in"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "do…while"
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
            children: "Form Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String and number type checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents invalid data submission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array methods (map, filter, reduce)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative, readable data pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional chaining for nested responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful handling of missing data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const for defaults, spread for merging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable configuration objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event Handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow functions for lexical this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct context in callback closures"
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
        children: "Q1. What is the Temporal Dead Zone (TDZ)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) The time between hoisting and initialization of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " variables"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A Firefox-specific debugging tool"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) The period when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), " variables are undefined"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A zone where garbage collection is paused"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["A) The TDZ is the period between when a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " variable enters scope and when it is initialized."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. Which of the following returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0 == false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0 === false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'' === 0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null === undefined"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0 == false"
            }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " due to type coercion. Strict equality ", (0,jsx_runtime.jsx)(_components.code, {
              children: "==="
            }), " would return ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), "."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What does the spread operator ", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), " do when used with objects?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Creates a deep clone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Copies own enumerable properties into a new object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Removes properties from the original"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Converts the object to an array"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Spread creates a shallow copy — nested objects are still shared between the original and the copy."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. Which array method creates a new array by applying a function to each element?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forEach()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "map()"
            }), " returns a new array with the results of calling a function on every element."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-closure-analyzer--data-transformer",
      children: "TypeScript: Closure Analyzer & Data Transformer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ClosureAnalyzer {\n  static memoize<T extends (...args: any[]) => any>(fn: T): T {\n    const cache = new Map<string, ReturnType<T>>();\n    return ((...args: any[]) => {\n      const key = JSON.stringify(args);\n      if (!cache.has(key)) cache.set(key, fn(...args));\n      return cache.get(key);\n    }) as T;\n  }\n  static createCounter(start: number = 0): { value: number; increment: () => number; reset: () => void } {\n    let count = start;\n    return { value: count, increment: () => ++count, reset: () => { count = start; } };\n  }\n  static compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {\n    return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);\n  }\n}\n\nclass DataPipeline {\n  static async chain<T>(data: T[], ...transforms: ((arr: T[]) => T[])[]): Promise<T[]> {\n    return transforms.reduce((acc, fn) => fn(acc), data);\n  }\n  static groupBy<T, K extends string | number>(items: T[], keyFn: (item: T) => K): Record<K, T[]> {\n    return items.reduce((acc, item) => {\n      const key = keyFn(item);\n      (acc[key] ?? (acc[key] = [])).push(item);\n      return acc;\n    }, {} as Record<K, T[]>);\n  }\n}\n\nconst fib = ClosureAnalyzer.memoize((n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2));\nconsole.log(\"Fib(42):\", fib(42));\nconst grouped = DataPipeline.groupBy([1, 2, 3, 4, 5, 6], n => (n % 2 === 0 ? \"even\" : \"odd\"));\nconsole.log(\"Grouped:\", JSON.stringify(grouped));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-polyfill-detector-type-coercion-analyzer-prototype-walker",
      children: "TypeScript Implementation: Polyfill Detector, Type Coercion Analyzer, Prototype Walker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PolyfillDetector {\n    static check(feature: string): { supported: boolean; polyfill?: string } {\n        const checks: Record<string, { test: () => boolean; polyfillUrl: string }> = {\n            \"Promise\": { test: () => typeof Promise !== \"undefined\", polyfillUrl: \"core-js/stable/promise\" },\n            \"Array.prototype.includes\": { test: () => typeof Array.prototype.includes === \"function\", polyfillUrl: \"core-js/stable/array/includes\" },\n            \"Object.entries\": { test: () => typeof Object.entries === \"function\", polyfillUrl: \"core-js/stable/object/entries\" },\n            \"Object.values\": { test: () => typeof Object.values === \"function\", polyfillUrl: \"core-js/stable/object/values\" },\n            \"String.prototype.startsWith\": { test: () => typeof String.prototype.startsWith === \"function\", polyfillUrl: \"core-js/stable/string/starts-with\" },\n            \"fetch\": { test: () => typeof fetch !== \"undefined\", polyfillUrl: \"whatwg-fetch\" },\n            \"Symbol\": { test: () => typeof Symbol !== \"undefined\", polyfillUrl: \"core-js/stable/symbol\" },\n            \"Map\": { test: () => typeof Map !== \"undefined\", polyfillUrl: \"core-js/stable/map\" },\n            \"Set\": { test: () => typeof Set !== \"undefined\", polyfillUrl: \"core-js/stable/set\" },\n            \"Array.from\": { test: () => typeof Array.from === \"function\", polyfillUrl: \"core-js/stable/array/from\" },\n            \"Object.assign\": { test: () => typeof Object.assign === \"function\", polyfillUrl: \"core-js/stable/object/assign\" },\n            \"Array.prototype.flat\": { test: () => typeof Array.prototype.flat === \"function\", polyfillUrl: \"core-js/stable/array/flat\" },\n            \"Array.prototype.flatMap\": { test: () => typeof Array.prototype.flatMap === \"function\", polyfillUrl: \"core-js/stable/array/flat-map\" },\n            \"globalThis\": { test: () => typeof globalThis !== \"undefined\", polyfillUrl: \"core-js/stable/global-this\" },\n            \"WeakRef\": { test: () => typeof WeakRef !== \"undefined\", polyfillUrl: \"core-js/stable/weak-ref\" },\n        };\n        const c = checks[feature];\n        if (!c) return { supported: false, polyfill: \"unknown feature\" };\n        try { return { supported: c.test(), polyfill: c.polyfillUrl }; } catch { return { supported: false, polyfill: c.polyfillUrl }; }\n    }\n\n    static scanAll(): { feature: string; supported: boolean; polyfill: string }[] {\n        const features = [\"Promise\", \"Array.prototype.includes\", \"Object.entries\", \"fetch\", \"Symbol\", \"Map\", \"Set\", \"Array.from\", \"Object.assign\", \"Array.prototype.flat\"];\n        return features.map(f => {\n            const result = PolyfillDetector.check(f);\n            return { feature: f, supported: result.supported, polyfill: result.polyfill || \"\" };\n        });\n    }\n}\n\nclass TypeCoercionAnalyzer {\n    static analyze(value: any, context: string): { input: any; type: string; coerced: string; result: any; explanation: string } {\n        let coerced: string = \"none\";\n        let result: any = value;\n        let explanation = \"No coercion needed\";\n\n        if (context === \"number\") {\n            result = Number(value);\n            coerced = \"ToNumber\";\n            explanation = `Number(${JSON.stringify(value)}) = ${result}`;\n        } else if (context === \"string\") {\n            result = String(value);\n            coerced = \"ToString\";\n            explanation = `String(${JSON.stringify(value)}) = ${JSON.stringify(result)}`;\n        } else if (context === \"boolean\") {\n            result = Boolean(value);\n            coerced = \"ToBoolean\";\n            explanation = `Boolean(${JSON.stringify(value)}) = ${result}`;\n        } else if (context === \"loose-equal\") {\n            const eq = value == 0;\n            result = eq;\n            coerced = \"Abstract Equality\";\n            explanation = `${JSON.stringify(value)} == 0 ? ${eq}`;\n        }\n\n        return { input: value, type: typeof value, coerced, result, explanation };\n    }\n\n    static demonstrate(): string[] {\n        const lines: string[] = [];\n        const cases = [\n            { v: \"5\", ctx: \"number\" }, { v: null, ctx: \"number\" },\n            { v: undefined, ctx: \"number\" }, { v: [], ctx: \"number\" },\n            { v: [1], ctx: \"number\" }, { v: [1, 2], ctx: \"number\" },\n            { v: {}, ctx: \"string\" }, { v: [1, 2], ctx: \"string\" },\n            { v: 0, ctx: \"boolean\" }, { v: \"\", ctx: \"boolean\" },\n            { v: \"false\", ctx: \"boolean\" },\n        ];\n        for (const c of cases) {\n            const a = TypeCoercionAnalyzer.analyze(c.v, c.ctx);\n            lines.push(`  ${JSON.stringify(c.v)} (${a.type}) ? ${a.coerced} ? ${JSON.stringify(a.result)}`);\n        }\n        return lines;\n    }\n}\n\nclass PrototypeChainWalker {\n    static walk(obj: any, maxDepth: number = 10): { constructor: string; proto: any; properties: string[]; depth: number }[] {\n        const chain: { constructor: string; proto: any; properties: string[]; depth: number }[] = [];\n        let current = obj;\n        let depth = 0;\n        while (current !== null && depth < maxDepth) {\n            const proto = Object.getPrototypeOf(current);\n            if (!proto) break;\n            const props = [\n                ...Object.getOwnPropertyNames(proto),\n                ...Object.getOwnPropertySymbols(proto).map(s => s.toString())\n            ];\n            chain.push({\n                constructor: proto.constructor?.name || \"(anonymous)\",\n                proto,\n                properties: props.filter(p => p !== \"constructor\"),\n                depth\n            });\n            current = proto;\n            depth++;\n        }\n        return chain;\n    }\n\n    static visualize(obj: any): string {\n        const chain = this.walk(obj);\n        return chain.map((l, i) => {\n            const indent = \"  \".repeat(i);\n            const props = l.properties.slice(0, 8);\n            return `${indent}? ${l.constructor}${props.length > 0 ? ` [${props.join(\", \")}${l.properties.length > 8 ? \", …\" : \"\"}]` : \" [empty]\"}`;\n        }).join(\"\\n\");\n    }\n}\n\n// Demo\nconsole.log(\"Polyfills:\", JSON.stringify(PolyfillDetector.scanAll().slice(0, 3), null, 2));\nconsole.log(\"Type coercion:\\n\", TypeCoercionAnalyzer.demonstrate().join(\"\\n\"));\nconsole.log(\"Array prototype chain:\\n\", PrototypeChainWalker.visualize([1, 2, 3]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// js basics\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'js basics', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Arrow functions inherit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " from their enclosing scope, making them ideal for callbacks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " provide block scoping; prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " unless reassignment is required."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primitives are immutable and passed by value; objects are mutable and passed by reference."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "==="
        }), " for comparisons, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?."
        }), " for safe property access, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "??"
        }), " for nullish defaults."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control flow includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if/else"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for/of"
        }), " loops over iterables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arrow functions provide concise syntax and lexical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " binding."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object and array destructuring enables readable extraction of nested values."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modern array methods (", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), ") enable declarative data transformation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Modern array methods enable declarative, chainable data transformations without side effects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the Temporal Dead Zone and how does it affect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeof null === 'object'"
        }), " considered a bug? How should you test for null?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between spreading an array and spreading an object?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does optional chaining (", (0,jsx_runtime.jsx)(_components.code, {
          children: "?."
        }), ") differ from logical AND (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), ") for property access?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deepClone(obj)"
        }), " that creates a deep copy of a serializable object using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JSON.parse"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "JSON.stringify"
        }), " and explain its limitations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupBy(arr, key)"
        }), " that groups an array of objects by a specified key and returns an object mapping keys to arrays of matching objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a pipeline function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pipe(...fns)"
        }), " that composes functions left-to-right: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pipe(f, g)(x)"
        }), " should return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "g(f(x))"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems-1",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "retry(fn, retries)"
        }), " that calls an async function and retries it up to N times if it rejects, with exponential backoff (100ms, 200ms, 400ms, ...) between attempts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parallelWithLimit(tasks, limit)"
        }), " that runs an array of async functions with at most ", (0,jsx_runtime.jsx)(_components.code, {
          children: "limit"
        }), " concurrent executions, returning results in order."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structuredclone-and-deep-copying",
      children: "structuredClone and Deep Copying"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "structuredClone"
      }), " global creates deep copies of objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const original = {\n  name: \"Alice\",\n  hobbies: [\"reading\", \"coding\"],\n  address: { city: \"Portland\", zip: 97201 },\n};\n\n// Deep clone — no mutation to original\nconst clone = structuredClone(original);\nclone.hobbies.push(\"hiking\");\nclone.address.zip = 97202;\n\nconsole.log(original.hobbies); // [\"reading\", \"coding\"] — unchanged\nconsole.log(original.address.zip); // 97201 — unchanged\n\n// Supports: objects, arrays, maps, sets, dates, regexps, typed arrays, blobs\n// Not supported: functions, DOM nodes, class instances with prototypes, Error objects\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-loop-deep-dive-microtasks-vs-macrotasks",
      children: "Event Loop Deep Dive: Microtasks vs Macrotasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(\"1: sync\");\n\nsetTimeout(() => console.log(\"2: macrotask\"), 0);\n\nPromise.resolve().then(() => console.log(\"3: microtask\"));\n\nqueueMicrotask(() => console.log(\"4: queueMicrotask\"));\n\nrequestAnimationFrame(() => console.log(\"5: animation frame\"));\n\n// Output order:\n// 1: sync\n// 3: microtask  (microtask queue empties after each macrotask)\n// 4: queueMicrotask\n// 2: macrotask  (next macrotask cycle)\n// 5: animation frame (before paint, after macrotask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weakref-and-finalizationregistry",
      children: "WeakRef and FinalizationRegistry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const cache = new Map();\n\nfunction fetchData(id) {\n  if (cache.has(id)) return cache.get(id);\n  const data = { id, timestamp: Date.now() };\n  cache.set(id, new WeakRef(data));\n  return data;\n}\n\n// Clean up unreferenced entries\nconst registry = new FinalizationRegistry((id) => {\n  console.log(`Data ${id} was garbage collected`);\n});\n\nfunction track(id, ref) {\n  registry.register(ref, id);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), "-free functional event emitter with methods ", (0,jsx_runtime.jsx)(_components.code, {
          children: "on(event, handler)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "off(event, handler)"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "emit(event, ...args)"
        }), ". The implementation must support multiple handlers per event, removal of specific handlers, and wildcard listeners that receive all events. Use a plain object as the handlers store and the rest/spread syntax for variable arguments. Ensure that removing a handler during emission does not skip other handlers. Write unit-test-style assertions that demonstrate all three methods working correctly, including the wildcard behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "const"
          }), " by default"]
        }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " for variables that are never reassigned. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " only when you need to reassign. Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), " in modern code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "==="
          }), " for equality"]
        }), " — avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " coercion surprises. The only exception is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "== null"
        }), " to check both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "undefined"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use async/await over raw Promises"
        }), " — it reads like synchronous code, has better error stacks, and works naturally with try/catch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise.all"
          }), " for independent parallel work"]
        }), " — when tasks do not depend on each other, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.all"
        }), " runs them concurrently and fails fast on any rejection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer array methods over loops"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "some"
        }), " express data transformations declaratively without manual indexing."]
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