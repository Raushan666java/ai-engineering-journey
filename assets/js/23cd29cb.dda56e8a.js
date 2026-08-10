"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[83023],{

/***/ 14560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_php_basics_md_23c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-php-basics-md-23c.json
const site_docs_courses_laravel_php_basics_md_23c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/php-basics","title":"Chapter 0: PHP Foundations for Laravel","description":"---","source":"@site/docs/courses/laravel/php-basics.md","sourceDirName":"courses/laravel","slug":"/laravel/php-basics","permalink":"/ai-engineering-journey/laravel/php-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":61,"frontMatter":{"id":"php-basics","slug":"/laravel/php-basics","title":"Chapter 0: PHP Foundations for Laravel","sidebar_label":"Chapter 0: PHP Foundations for Laravel","sidebar_position":61},"sidebar":"coursesSidebar","previous":{"title":"MySQL & Database Design","permalink":"/ai-engineering-journey/laravel/mysql-database"},"next":{"title":"Java & Spring Boot — Complete University Textbook","permalink":"/ai-engineering-journey/java"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/php-basics.md


const frontMatter = {
	id: 'php-basics',
	slug: '/laravel/php-basics',
	title: 'Chapter 0: PHP Foundations for Laravel',
	sidebar_label: 'Chapter 0: PHP Foundations for Laravel',
	sidebar_position: 61
};
const contentTitle = 'Chapter 0: PHP Foundations for Laravel';

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
  "value": "1.1 PHP Syntax and Variables",
  "id": "11-php-syntax-and-variables",
  "level": 3
}, {
  "value": "1.1.1 Data Types",
  "id": "111-data-types",
  "level": 4
}, {
  "value": "1.1.2 Type Juggling and Casting",
  "id": "112-type-juggling-and-casting",
  "level": 4
}, {
  "value": "1.1.3 Strict Types",
  "id": "113-strict-types",
  "level": 4
}, {
  "value": "1.1.4 Operators",
  "id": "114-operators",
  "level": 4
}, {
  "value": "1.1.5 Control Structures",
  "id": "115-control-structures",
  "level": 4
}, {
  "value": "1.1.6 Loops",
  "id": "116-loops",
  "level": 4
}, {
  "value": "1.2 Arrays",
  "id": "12-arrays",
  "level": 3
}, {
  "value": "1.2.1 Indexed and Associative Arrays",
  "id": "121-indexed-and-associative-arrays",
  "level": 4
}, {
  "value": "1.2.2 Array Functions",
  "id": "122-array-functions",
  "level": 4
}, {
  "value": "1.2.3 Functional Array Processing: map, filter, reduce",
  "id": "123-functional-array-processing-map-filter-reduce",
  "level": 4
}, {
  "value": "1.2.4 Array Destructuring and Unpacking in Depth",
  "id": "124-array-destructuring-and-unpacking-in-depth",
  "level": 4
}, {
  "value": "1.3 Functions",
  "id": "13-functions",
  "level": 3
}, {
  "value": "1.3.1 Named Functions",
  "id": "131-named-functions",
  "level": 4
}, {
  "value": "1.3.2 Strict Types and Return Type Variance",
  "id": "132-strict-types-and-return-type-variance",
  "level": 4
}, {
  "value": "1.3.3 Anonymous Functions (Closures)",
  "id": "133-anonymous-functions-closures",
  "level": 4
}, {
  "value": "1.3.4 Arrow Functions (PHP 7.4+)",
  "id": "134-arrow-functions-php-74",
  "level": 4
}, {
  "value": "1.3.5 Variadic Functions",
  "id": "135-variadic-functions",
  "level": 4
}, {
  "value": "1.3.6 Named Arguments (PHP 8.0+)",
  "id": "136-named-arguments-php-80",
  "level": 4
}, {
  "value": "1.3.7 First-Class Callable Syntax (PHP 8.1+)",
  "id": "137-first-class-callable-syntax-php-81",
  "level": 4
}, {
  "value": "1.4 Object-Oriented Programming",
  "id": "14-object-oriented-programming",
  "level": 3
}, {
  "value": "1.4.1 Classes, Properties, and Methods",
  "id": "141-classes-properties-and-methods",
  "level": 4
}, {
  "value": "1.4.2 Constructor Property Promotion (PHP 8.0+)",
  "id": "142-constructor-property-promotion-php-80",
  "level": 4
}, {
  "value": "1.4.3 Inheritance",
  "id": "143-inheritance",
  "level": 4
}, {
  "value": "1.4.4 Abstract Classes",
  "id": "144-abstract-classes",
  "level": 4
}, {
  "value": "1.4.5 Interfaces",
  "id": "145-interfaces",
  "level": 4
}, {
  "value": "1.4.6 Traits",
  "id": "146-traits",
  "level": 4
}, {
  "value": "1.4.7 Magic Methods",
  "id": "147-magic-methods",
  "level": 4
}, {
  "value": "1.5 Namespaces and Autoloading",
  "id": "15-namespaces-and-autoloading",
  "level": 3
}, {
  "value": "1.5.1 Defining Namespaces",
  "id": "151-defining-namespaces",
  "level": 4
}, {
  "value": "1.5.2 Importing with <code>use</code>",
  "id": "152-importing-with-use",
  "level": 4
}, {
  "value": "1.5.3 Aliasing",
  "id": "153-aliasing",
  "level": 4
}, {
  "value": "1.5.4 Global Namespace",
  "id": "154-global-namespace",
  "level": 4
}, {
  "value": "1.5.5 PSR-4 Autoloading",
  "id": "155-psr-4-autoloading",
  "level": 4
}, {
  "value": "1.6 Error Handling",
  "id": "16-error-handling",
  "level": 3
}, {
  "value": "1.6.1 Basic Try/Catch",
  "id": "161-basic-trycatch",
  "level": 4
}, {
  "value": "1.6.2 Multiple Catch Blocks and Finally",
  "id": "162-multiple-catch-blocks-and-finally",
  "level": 4
}, {
  "value": "1.6.3 Custom Exception Classes",
  "id": "163-custom-exception-classes",
  "level": 4
}, {
  "value": "1.6.4 Error Reporting",
  "id": "164-error-reporting",
  "level": 4
}, {
  "value": "1.6.5 Try/Catch with Multiple Exception Types (PHP 8.0+)",
  "id": "165-trycatch-with-multiple-exception-types-php-80",
  "level": 4
}, {
  "value": "1.7 Composer",
  "id": "17-composer",
  "level": 3
}, {
  "value": "1.7.1 Initializing a Project",
  "id": "171-initializing-a-project",
  "level": 4
}, {
  "value": "1.7.2 Requiring Packages",
  "id": "172-requiring-packages",
  "level": 4
}, {
  "value": "1.7.3 PSR-4 Autoloading",
  "id": "173-psr-4-autoloading",
  "level": 4
}, {
  "value": "1.7.4 Composer Scripts",
  "id": "174-composer-scripts",
  "level": 4
}, {
  "value": "1.7.5 Version Constraints",
  "id": "175-version-constraints",
  "level": 4
}, {
  "value": "1.7.6 Composer Lock File and Best Practices",
  "id": "176-composer-lock-file-and-best-practices",
  "level": 4
}, {
  "value": "1.8 PHP 8.3 Features",
  "id": "18-php-83-features",
  "level": 3
}, {
  "value": "1.8.1 Readonly Classes (PHP 8.2+)",
  "id": "181-readonly-classes-php-82",
  "level": 4
}, {
  "value": "1.8.2 Enums (PHP 8.1+)",
  "id": "182-enums-php-81",
  "level": 4
}, {
  "value": "1.8.3 Typed Properties (PHP 7.4+) and Readonly Properties (PHP 8.1+)",
  "id": "183-typed-properties-php-74-and-readonly-properties-php-81",
  "level": 4
}, {
  "value": "1.8.4 <code>json_validate</code> (PHP 8.3+)",
  "id": "184-json_validate-php-83",
  "level": 4
}, {
  "value": "1.8.5 Dynamic Class Constant Fetch (PHP 8.3+)",
  "id": "185-dynamic-class-constant-fetch-php-83",
  "level": 4
}, {
  "value": "1.8.6 Additional PHP 8.x Features Used in Laravel",
  "id": "186-additional-php-8x-features-used-in-laravel",
  "level": 4
}, {
  "value": "1.9 Design Patterns for Laravel Developers",
  "id": "19-design-patterns-for-laravel-developers",
  "level": 3
}, {
  "value": "1.9.1 Factory Pattern",
  "id": "191-factory-pattern",
  "level": 4
}, {
  "value": "1.9.2 Repository Pattern",
  "id": "192-repository-pattern",
  "level": 4
}, {
  "value": "1.9.3 Strategy Pattern",
  "id": "193-strategy-pattern",
  "level": 4
}, {
  "value": "1.9.4 Singleton Pattern",
  "id": "194-singleton-pattern",
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
        id: "chapter-0-php-foundations-for-laravel",
        children: "Chapter 0: PHP Foundations for Laravel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/laravel/php-basics/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/php-basics/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/php-basics/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/php-basics/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/php-basics/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/php-basics/visual-explanation.png",
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
            children: "PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, practical exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming concepts"
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
            children: "PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, practical exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming concepts"
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
            children: "PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, practical exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming concepts"
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
            children: "PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, code examples, practical exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming concepts"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write PHP scripts using proper syntax, variables, data types, and type declarations with strict typing enabled"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manipulate indexed and associative arrays using built-in functions and functional constructs like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array_map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array_filter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array_reduce"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and invoke named functions, anonymous closures, arrow functions, variadic functions, and named-argument calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build object-oriented PHP applications with classes, inheritance, abstract classes, interfaces, and traits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organize code into namespaces and configure PSR-4 autoloading with Composer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement structured error handling with exceptions, custom exception classes, and try/catch/finally blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Composer to initialize projects, require dependencies, manage autoloading, and run scripts"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Leverage PHP 8.3 features including readonly classes, enums, typed properties, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "json_validate"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement common design patterns (Factory, Repository, Strategy, Singleton) in PHP for Laravel application architecture"
      }), "\n"]
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/php-basics.png",
        alt: "PHP Basics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-php-syntax-and-variables",
      children: "1.1 PHP Syntax and Variables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PHP is a dynamically-typed, server-side scripting language. Every PHP file begins with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<?php"
      }), " and may contain HTML output. Statements end with a semicolon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// This is a single-line comment\n\n/*\n * This is a\n * multi-line comment\n */\n\necho \"Hello, world!\"; // Outputs: Hello, world!\nprint \"Hello again!\";  // print is similar but returns 1\n\n// Variables are prefixed with $\n$name = \"Laravel\";\n$year = 2026;\n$isAwesome = true;\n\n// Variable variables (rarely used in practice)\n$varName = \"framework\";\n$$varName = \"Laravel\"; // $framework = \"Laravel\"\necho $framework; // Outputs: Laravel\n\n// Constants\ndefine(\"VERSION\", \"13.0.0\");\nconst APP_NAME = \"My Application\";\n\necho VERSION;  // Outputs: 13.0.0\necho APP_NAME; // Outputs: My Application\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "111-data-types",
      children: "1.1.1 Data Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP supports eight primitive types: four scalar (bool, int, float, string), two compound (array, object), and two special (null, resource)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Boolean\n$isActive = true;\n$isAdmin = false;\nvar_dump($isActive); // bool(true)\n\n// Integer\n$count = 42;\n$hex = 0x1A;        // 26\n$octal = 0o77;      // 63 (PHP 8.1+)\n$binary = 0b1010;   // 10\n$large = 1_000_000; // 1000000 (numeric separator)\n\n// Float\n$price = 29.99;\n$scientific = 1.5e3; // 1500.0\n$tiny = 1.5e-3;      // 0.0015\n\n// String\n$single = 'Single-quoted strings do not interpolate $variables';\n$double = \"Double-quoted strings interpolate $single\";\n$heredoc = <<<EOT\nThis is a heredoc string.\nIt can span multiple lines.\nVariables like $name are interpolated.\nEOT;\n\n$nowdoc = <<<'EOD'\nThis is a nowdoc string.\nLike single quotes, variables like $name are NOT interpolated.\nEOD;\n\n// Null\n$nothing = null;\n$undefined; // Defaults to null, but emits a warning if read before assignment\n\n// Resource (external resource handle)\n$handle = fopen('php://memory', 'r+');\nvar_dump($handle); // resource(5) of type (stream)\nfclose($handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "112-type-juggling-and-casting",
      children: "1.1.2 Type Juggling and Casting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP automatically converts types when operators expect specific types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Type juggling\n$result = \"10\" + 5;     // 15 (string \"10\" cast to int)\n$result2 = \"10\" . 5;    // \"105\" (int 5 cast to string, concatenation)\n$result3 = \"10 apples\" + 5; // 15 (PHP 8.0+ emits warning, earlier PHP returned 15)\n$result4 = \"apples\" + 5;    // 5 (PHP 8.0+ emits warning)\n\n// Explicit casting\n$intValue = (int) \"42\";        // 42\n$floatValue = (float) \"3.14\"; // 3.14\n$stringValue = (string) 100;   // \"100\"\n$boolValue = (bool) 1;         // true\n$arrayValue = (array) \"hello\"; // [\"hello\"]\n\n// Common truthy/falsy values\nvar_dump((bool) \"\");       // false\nvar_dump((bool) \"0\");      // false\nvar_dump((bool) 0);        // false\nvar_dump((bool) 0.0);      // false\nvar_dump((bool) []);       // false\nvar_dump((bool) null);     // false\nvar_dump((bool) \"hello\");  // true\nvar_dump((bool) 42);       // true\nvar_dump((bool) [1, 2]);   // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "113-strict-types",
      children: "1.1.3 Strict Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, PHP coerces values to match type hints. Declaring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strict_types"
      }), " at the top of a file changes this to throw ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeError"
      }), " on mismatch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n// File: strict-example.php\ndeclare(strict_types=1);\n\nfunction add(int $a, int $b): int {\n    return $a + $b;\n}\n\necho add(5, 10);    // 15\necho add(5, \"10\");  // TypeError: Argument #2 ($b) must be of type int, string given\n\nfunction greet(string $name): string {\n    return \"Hello, $name!\";\n}\n\necho greet(\"Alice\"); // Hello, Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "declare(strict_types=1)"
      }), " affects only the file where it appears. Calls from a file without strict_types into a strict file still enforce strict typing for the callee."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "114-operators",
      children: "1.1.4 Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Arithmetic\n$a = 10;\n$b = 3;\necho $a + $b;  // 13\necho $a - $b;  // 7\necho $a * $b;  // 30\necho $a / $b;  // 3.3333...\necho $a % $b;  // 1\necho $a ** $b; // 1000 (10^3)\n\n// Assignment with operators\n$x = 5;\n$x += 3;  // 8\n$x -= 2;  // 6\n$x *= 2;  // 12\n$x /= 3;  // 4\n\n// Comparison\nvar_dump(5 == \"5\");   // true (loose equality)\nvar_dump(5 === \"5\");  // false (strict equality)\nvar_dump(5 != \"5\");   // false\nvar_dump(5 !== \"5\");  // true\nvar_dump(5 > 3);      // true\nvar_dump(5 <=> 3);    // 1 (spaceship: -1, 0, or 1)\n\n// Null coalescing\n$username = $_GET['user'] ?? 'guest';\n$nested = $a['b']['c'] ?? 'default';\n\n// Null coalescing assignment (PHP 7.4+)\n$data['key'] ??= 'default';\n// Equivalent to: $data['key'] = $data['key'] ?? 'default';\n\n// Spaceship operator for sorting\n$cmp = 5 <=> 3;  // 1 (greater than)\n$cmp = 3 <=> 5;  // -1 (less than)\n$cmp = 5 <=> 5;  // 0 (equal)\n\n// Logical\nvar_dump(true && false);  // false\nvar_dump(true || false);  // true\nvar_dump(!true);          // false\nvar_dump(true and false); // false (lower precedence than &&)\nvar_dump(true or false);  // true (lower precedence than ||)\n\n// String\n$greeting = \"Hello, \" . \"World!\"; // Concatenation\necho $greeting;                    // Hello, World!\n\n$name = \"Alice\";\necho \"Hello, $name\";    // Hello, Alice\necho \"Hello, {$name}\";  // Hello, Alice (explicit syntax)\necho \"Hello, ${name}\";  // Hello, Alice (deprecated in PHP 8.2+)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "115-control-structures",
      children: "1.1.5 Control Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// if / elseif / else\n$score = 85;\n\nif ($score >= 90) {\n    echo \"A\";\n} elseif ($score >= 80) {\n    echo \"B\";\n} elseif ($score >= 70) {\n    echo \"C\";\n} elseif ($score >= 60) {\n    echo \"D\";\n} else {\n    echo \"F\";\n}\n// Outputs: B\n\n// Alternative syntax (common in Blade templates)\nif ($score >= 90):\n    echo \"A\";\nelseif ($score >= 80):\n    echo \"B\";\nelse:\n    echo \"Below B\";\nendif;\n\n// match (PHP 8.0+)\n$statusCode = 404;\n$message = match ($statusCode) {\n    200, 201 => 'Success',\n    301, 302 => 'Redirect',\n    400, 403, 404 => 'Client Error',\n    500, 502, 503 => 'Server Error',\n    default => 'Unknown',\n};\necho $message; // Client Error\n\n// match is an expression — it returns a value\n$result = match (true) {\n    $statusCode < 300 => 'Success',\n    $statusCode < 400 => 'Redirect',\n    $statusCode < 500 => 'Client Error',\n    default => 'Server Error',\n};\n\n// switch (traditional)\nswitch ($statusCode) {\n    case 200:\n    case 201:\n        echo \"OK\";\n        break;\n    case 404:\n        echo \"Not Found\";\n        break;\n    default:\n        echo \"Other\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "116-loops",
      children: "1.1.6 Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// while\n$i = 0;\nwhile ($i < 5) {\n    echo $i . \" \";\n    $i++;\n}\n// Outputs: 0 1 2 3 4\n\n// do-while (always executes at least once)\n$j = 0;\ndo {\n    echo $j . \" \";\n    $j++;\n} while ($j < 0);\n// Outputs: 0\n\n// for\nfor ($k = 0; $k < 5; $k++) {\n    echo $k . \" \";\n}\n// Outputs: 0 1 2 3 4\n\n// foreach\n$fruits = ['apple', 'banana', 'cherry'];\nforeach ($fruits as $fruit) {\n    echo $fruit . \" \";\n}\n// Outputs: apple banana cherry\n\n// foreach with key\n$user = ['name' => 'Alice', 'role' => 'admin'];\nforeach ($user as $key => $value) {\n    echo \"$key: $value\" . PHP_EOL;\n}\n\n// break and continue\nfor ($i = 0; $i < 10; $i++) {\n    if ($i === 3) {\n        continue; // Skip 3\n    }\n    if ($i === 7) {\n        break; // Stop at 7\n    }\n    echo $i . \" \";\n}\n// Outputs: 0 1 2 4 5 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-arrays",
      children: "1.2 Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arrays in PHP are ordered maps that map keys to values. They are the single most-used data structure in PHP and Laravel development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-indexed-and-associative-arrays",
      children: "1.2.1 Indexed and Associative Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Indexed array (starts at 0)\n$colors = ['red', 'green', 'blue'];\necho $colors[0]; // red\n\n// Short syntax with explicit indices\n$numbers = [1, 2, 3, 4, 5];\n\n// Traditional syntax\n$oldWay = array(10, 20, 30);\n\n// Associative array (string keys)\n$user = [\n    'name' => 'Alice',\n    'email' => 'alice@example.com',\n    'role' => 'admin',\n];\necho $user['name']; // Alice\n\n// Mixed keys\n$mixed = [\n    'first' => 1,\n    'second' => 2,\n    10 => 'ten',\n    20 => 'twenty',\n];\n\n// Appending to an array\n$colors[] = 'yellow'; // $colors = ['red', 'green', 'blue', 'yellow']\n\n// Array destructuring (PHP 7.1+)\n$info = ['John', 25, 'New York'];\n[$name, $age, $city] = $info;\necho $name; // John\n\n// Associative destructuring\n$profile = ['username' => 'jdoe', 'email' => 'john@example.com'];\n['username' => $userName, 'email' => $userEmail] = $profile;\necho $userName; // jdoe\n\n// Spread operator in array (PHP 7.4+)\n$arr1 = [1, 2, 3];\n$arr2 = [0, ...$arr1, 4, 5];\n// $arr2 = [0, 1, 2, 3, 4, 5]\n\n// Unpacking with string keys (PHP 8.1+)\n$a = ['a' => 1, 'b' => 2];\n$b = ['b' => 3, 'c' => 4];\n$merged = [...$a, ...$b];\n// $merged = ['a' => 1, 'b' => 3, 'c' => 4] (later keys overwrite)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-array-functions",
      children: "1.2.2 Array Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n$items = [3, 1, 4, 1, 5, 9, 2, 6];\n\n// count\necho count($items); // 8\n\n// in_array\nvar_dump(in_array(5, $items)); // true\n\n// array_search\necho array_search(4, $items); // 2 (index)\n\n// array_key_exists\n$user = ['name' => 'Alice', 'age' => 30];\nvar_dump(array_key_exists('name', $user)); // true\nvar_dump(isset($user['name']));            // true (also checks for null)\n\n// Sorting\nsort($items);      // ascending by value, reindexes\nprint_r($items);\n// [1, 1, 2, 3, 4, 5, 6, 9]\n\n$items = [3, 1, 4, 1, 5, 9, 2, 6];\nrsort($items);     // descending by value, reindexes\n\n$user = ['name' => 'Alice', 'age' => 30, 'role' => 'admin'];\nasort($user);      // ascending by value, preserves keys\nksort($user);      // ascending by key\n\n// array_merge\n$a = ['a' => 1, 'b' => 2];\n$b = ['b' => 3, 'c' => 4];\n$merged = array_merge($a, $b);\n// ['a' => 1, 'b' => 3, 'c' => 4]\n\n// array_merge_recursive (nested merges)\n\n// array_diff and array_intersect\n$arr1 = [1, 2, 3, 4, 5];\n$arr2 = [3, 5, 7, 9];\n$diff = array_diff($arr1, $arr2);   // [1, 2, 4] (values in arr1 not in arr2)\n$common = array_intersect($arr1, $arr2); // [3, 5]\n\n// array_unique\n$dupes = [1, 1, 2, 3, 3, 4];\n$unique = array_unique($dupes); // [1, 2, 3, 4]\n\n// array_values and array_keys\n$keys = array_keys($user);   // ['name', 'age', 'role']\n$vals = array_values($user); // ['Alice', 30, 'admin']\n\n// array_chunk\n$chunks = array_chunk([1, 2, 3, 4, 5], 2);\n// [[1, 2], [3, 4], [5]]\n\n// array_slice\n$slice = array_slice([1, 2, 3, 4, 5], 1, 3);\n// [2, 3, 4]\n\n// array_column (from array of arrays/objects)\n$people = [\n    ['id' => 1, 'name' => 'Alice'],\n    ['id' => 2, 'name' => 'Bob'],\n    ['id' => 3, 'name' => 'Charlie'],\n];\n$names = array_column($people, 'name');\n// ['Alice', 'Bob', 'Charlie']\n\n$withKeys = array_column($people, 'name', 'id');\n// [1 => 'Alice', 2 => 'Bob', 3 => 'Charlie']\n\n// array_combine\n$keys = ['name', 'age', 'city'];\n$values = ['Alice', 30, 'New York'];\n$combined = array_combine($keys, $values);\n// ['name' => 'Alice', 'age' => 30, 'city' => 'New York']\n\n// array_fill\n$filled = array_fill(0, 5, 'default');\n// ['default', 'default', 'default', 'default', 'default']\n\n// array_walk (modifies array in place)\n$prices = [10, 20, 30];\narray_walk($prices, function (&$price) {\n    $price = $price * 1.1;\n});\n// $prices = [11, 22, 33]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-functional-array-processing-map-filter-reduce",
      children: "1.2.3 Functional Array Processing: map, filter, reduce"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// array_map — transform every element\n$squared = array_map(fn(int $n): int => $n * $n, $numbers);\n// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n// With multiple arrays\n$add = array_map(\n    fn(int $a, int $b): int => $a + $b,\n    [1, 2, 3],\n    [10, 20, 30]\n);\n// [11, 22, 33]\n\n// array_filter — keep elements matching a predicate\n$evens = array_filter($numbers, fn(int $n): bool => $n % 2 === 0);\n// [2, 4, 6, 8, 10] (note: keys are preserved)\n\n// Re-index after filter\n$evens = array_values(array_filter($numbers, fn(int $n): bool => $n % 2 === 0));\n\n// Filter without callback removes falsy values\n$mixed = [0, 1, '', 'hello', null, true, false];\n$clean = array_filter($mixed);\n// [1, 'hello', true] (indices: 1, 3, 5)\n\n// Filter with ARRAY_FILTER_USE_BOTH or ARRAY_FILTER_USE_KEY\n$users = [\n    'alice' => 'admin',\n    'bob' => 'editor',\n    'charlie' => 'admin',\n    'dave' => 'viewer',\n];\n$admins = array_filter(\n    $users,\n    fn(string $role, string $name): bool => $role === 'admin',\n    ARRAY_FILTER_USE_BOTH\n);\n// ['alice' => 'admin', 'charlie' => 'admin']\n\n// array_reduce — fold/reduce to a single value\n$sum = array_reduce($numbers, fn(int $carry, int $item): int => $carry + $item, 0);\n// 55\n\n$product = array_reduce($numbers, fn(int $carry, int $item): int => $carry * $item, 1);\n// 3628800\n\n// Practical example: group by a field\n$orders = [\n    ['id' => 1, 'status' => 'shipped', 'total' => 50],\n    ['id' => 2, 'status' => 'pending', 'total' => 30],\n    ['id' => 3, 'status' => 'shipped', 'total' => 75],\n    ['id' => 4, 'status' => 'pending', 'total' => 20],\n    ['id' => 5, 'status' => 'cancelled', 'total' => 15],\n];\n\n$grouped = array_reduce($orders, function (array $carry, array $order): array {\n    $status = $order['status'];\n    $carry[$status][] = $order;\n    return $carry;\n}, []);\n\nprint_r($grouped);\n// [\n//   'shipped' => [['id' => 1, ...], ['id' => 3, ...]],\n//   'pending' => [['id' => 2, ...], ['id' => 4, ...]],\n//   'cancelled' => [['id' => 5, ...]],\n// ]\n\n// Chaining map, filter, reduce\n$result = array_reduce(\n    array_filter(\n        array_map(fn(int $n): int => $n * 2, $numbers),\n        fn(int $n): bool => $n > 10\n    ),\n    fn(int $carry, int $item): int => $carry + $item,\n    0\n);\n// numbers * 2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n// filtered (>10) = [12, 14, 16, 18, 20]\n// reduced (sum) = 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-array-destructuring-and-unpacking-in-depth",
      children: "1.2.4 Array Destructuring and Unpacking in Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Nested destructuring\n$data = [\n    'user' => ['name' => 'Alice', 'address' => ['city' => 'NYC', 'zip' => '10001']],\n    'meta' => ['last_login' => '2026-01-15'],\n];\n\n['user' => ['name' => $name, 'address' => ['city' => $city]]] = $data;\necho $name; // Alice\necho $city; // NYC\n\n// Swapping variables using array destructuring\n$a = 1;\n$b = 2;\n[$a, $b] = [$b, $a];\necho \"$a, $b\"; // 2, 1\n\n// Skipping elements\n$tuple = [10, 20, 30, 40];\n[, $second, , $fourth] = $tuple;\necho \"$second, $fourth\"; // 20, 40\n\n// Variadic in destructuring\n$first = [1, 2, 3, 4, 5];\n[$head, ...$tail] = $first;\necho \"$head, [\" . implode(',', $tail) . \"]\"; // 1, [2,3,4,5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-functions",
      children: "1.3 Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functions are first-class citizens in PHP. They can be named, anonymous, assigned to variables, passed as arguments, and returned from other functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-named-functions",
      children: "1.3.1 Named Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nfunction greet(string $name): string {\n    return \"Hello, $name!\";\n}\n\necho greet(\"Alice\"); // Hello, Alice!\n\n// Optional parameters with defaults\nfunction createUser(string $name, string $role = 'viewer', bool $active = true): array {\n    return [\n        'name' => $name,\n        'role' => $role,\n        'active' => $active,\n    ];\n}\n\n$user = createUser('Alice');\nprint_r($user);\n// ['name' => 'Alice', 'role' => 'viewer', 'active' => true]\n\n$admin = createUser('Bob', 'admin');\nprint_r($admin);\n// ['name' => 'Bob', 'role' => 'admin', 'active' => true]\n\n// Nullable types and union types (PHP 8.0+)\nfunction findUser(int $id): ?array {\n    // Returns array or null\n    $users = [1 => ['name' => 'Alice'], 2 => ['name' => 'Bob']];\n    return $users[$id] ?? null;\n}\n\nfunction formatValue(int|string $value): string {\n    return \"Value: $value\";\n}\n\necho formatValue(42);    // Value: 42\necho formatValue(\"42\");  // Value: 42\n\n// Void return type (no return value)\nfunction logMessage(string $message): void {\n    echo \"[LOG] $message\" . PHP_EOL;\n}\n\n// Mixed return type (any type)\nfunction identity(mixed $value): mixed {\n    return $value;\n}\n\n// Type coercion without strict types\nfunction multiply(int $a, int $b): int {\n    return $a * $b;\n}\necho multiply(\"5\", \"10\"); // 50 (strings coerced to ints)\n\n// Named arguments (PHP 8.0+)\nfunction createProfile(\n    string $name,\n    string $email,\n    int $age = 0,\n    string $city = 'Unknown',\n    bool $subscribed = false\n): array {\n    return compact('name', 'email', 'age', 'city', 'subscribed');\n}\n\n// Skip defaults by naming arguments\n$profile = createProfile(\n    name: 'Alice',\n    email: 'alice@example.com',\n    subscribed: true,\n);\n// age defaults to 0, city defaults to 'Unknown'\n\n// Named arguments can be in any order\n$profile2 = createProfile(\n    email: 'bob@example.com',\n    name: 'Bob',\n    city: 'New York',\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-strict-types-and-return-type-variance",
      children: "1.3.2 Strict Types and Return Type Variance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nfunction calculateTotal(array $items, float $taxRate): float {\n    $subtotal = array_sum($items);\n    return $subtotal * (1 + $taxRate);\n}\n\n// Return type compatibility for inheritance\ninterface Formatter {\n    public function format(string $input): string;\n}\n\nclass UpperCaseFormatter implements Formatter {\n    public function format(string $input): string {\n        return strtoupper($input);\n    }\n}\n\n// Covariant return types (PHP 7.4+)\nclass ParentStore {\n    public function get(): object {\n        return new stdClass();\n    }\n}\n\nclass ChildStore extends ParentStore {\n    public function get(): \\stdClass {\n        return new \\stdClass();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "133-anonymous-functions-closures",
      children: "1.3.3 Anonymous Functions (Closures)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n$greet = function (string $name): string {\n    return \"Hello, $name!\";\n};\n\necho $greet(\"Alice\"); // Hello, Alice!\n\n// Closures can capture variables from the surrounding scope using \"use\"\n$prefix = \"User: \";\n$formatUser = function (string $name) use ($prefix): string {\n    return $prefix . $name;\n};\n\necho $formatUser(\"Alice\"); // User: Alice\n\n// By default, \"use\" captures by value (copy). Use & for by-reference.\n$counter = 0;\n$increment = function () use (&$counter): void {\n    $counter++;\n};\n$increment();\n$increment();\necho $counter; // 2\n\n// Closures are often used as callbacks\n$numbers = [1, 2, 3, 4, 5];\n$doubled = array_map(function (int $n): int {\n    return $n * 2;\n}, $numbers);\n// [2, 4, 6, 8, 10]\n\n// Static closures (cannot bind $this)\n$staticClosure = static function (string $name): string {\n    return \"Static: $name\";\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "134-arrow-functions-php-74",
      children: "1.3.4 Arrow Functions (PHP 7.4+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arrow functions are a concise syntax for closures. They automatically capture variables by value and are limited to a single expression."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n$numbers = [1, 2, 3, 4, 5];\n\n// Arrow function automatically captures $multiplier by value\n$multiplier = 3;\n$multiplied = array_map(\n    fn(int $n): int => $n * $multiplier,\n    $numbers\n);\n// [3, 6, 9, 12, 15]\n\n// Arrow functions cannot have multiple statements\n// Cannot use: fn($x) => { $y = $x * 2; return $y; };\n// Must be a single expression: fn($x) => $x * 2\n\n// Nested arrow functions\n$data = [[1, 2], [3, 4], [5, 6]];\n$sums = array_map(\n    fn(array $pair): int => array_reduce(\n        $pair,\n        fn(int $carry, int $n): int => $carry + $n,\n        0\n    ),\n    $data\n);\n// [3, 7, 11]\n\n// Arrow functions in array_filter\n$even = array_filter($numbers, fn(int $n): bool => $n % 2 === 0);\n// [2, 4]\n\n// Arrow functions automatically have access to $this in class context\nclass Calculator {\n    private int $factor = 10;\n\n    public function apply(array $values): array {\n        return array_map(\n            fn(int $v): int => $v * $this->factor,\n            $values\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "135-variadic-functions",
      children: "1.3.5 Variadic Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Variadic parameter captures all remaining arguments as an array\nfunction sum(int ...$numbers): int {\n    return array_sum($numbers);\n}\n\necho sum(1, 2, 3, 4, 5); // 15\n\n// Variadic with regular parameters\nfunction createList(string $title, string ...$items): array {\n    return [\n        'title' => $title,\n        'items' => $items,\n        'count' => count($items),\n    ];\n}\n\nprint_r(createList('Shopping', 'Apples', 'Bread', 'Milk'));\n// ['title' => 'Shopping', 'items' => ['Apples', 'Bread', 'Milk'], 'count' => 3]\n\n// Spread operator to unpack array into variadic arguments\n$args = [1, 2, 3, 4, 5];\necho sum(...$args); // 15\n\n// Named arguments with variadic\nfunction formatList(string $label, string ...$items): string {\n    $formatted = array_map(fn(string $item): string => \"- $item\", $items);\n    return \"$label:\\n\" . implode(\"\\n\", $formatted);\n}\n\necho formatList('Fruits', ...['Apple', 'Banana', 'Cherry']);\n\n// Variadic at end of parameter list (PHP 8.0+)\nfunction buildQuery(string $table, array $conditions, string ...$orderBy): string {\n    $query = \"SELECT * FROM $table\";\n    if (count($conditions) > 0) {\n        $clauses = implode(' AND ', $conditions);\n        $query .= \" WHERE $clauses\";\n    }\n    if (count($orderBy) > 0) {\n        $query .= \" ORDER BY \" . implode(', ', $orderBy);\n    }\n    return $query;\n}\n\necho buildQuery('users', ['active = 1'], 'name ASC', 'created_at DESC');\n// SELECT * FROM users WHERE active = 1 ORDER BY name ASC, created_at DESC\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "136-named-arguments-php-80",
      children: "1.3.6 Named Arguments (PHP 8.0+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Named arguments allow passing arguments to a function by specifying the parameter name, making code self-documenting and skipping default parameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nfunction renderTemplate(\n    string $view,\n    array $data = [],\n    bool $cache = false,\n    int $ttl = 3600,\n    ?string $layout = null,\n): string {\n    $output = \"Rendering: $view\\n\";\n    if ($cache) {\n        $output .= \"Cached for {$ttl}s\\n\";\n    }\n    if ($layout !== null) {\n        $output .= \"Using layout: $layout\\n\";\n    }\n    $output .= \"Data: \" . json_encode($data) . \"\\n\";\n    return $output;\n}\n\n// Without named arguments (hard to read, must pass defaults)\necho renderTemplate('welcome', [], false, 3600, 'app');\n\n// With named arguments (self-documenting, skip defaults)\necho renderTemplate(\n    view: 'welcome',\n    data: ['name' => 'Alice'],\n    cache: true,\n    ttl: 1800,\n);\n\n// Named arguments can be combined with positional\necho renderTemplate('dashboard', cache: true);\n// Positional $view = 'dashboard', named $cache = true\n\n// Named arguments work with variadic functions\nfunction tagged(string $tag, string ...$items): string {\n    return \"<$tag>\" . implode(\"</$tag><$tag>\", $items) . \"</$tag>\";\n}\n\necho tagged(tag: 'li', items: 'Home', 'About', 'Contact');\n// <li>Home</li><li>About</li><li>Contact</li>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "137-first-class-callable-syntax-php-81",
      children: "1.3.7 First-Class Callable Syntax (PHP 8.1+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Instead of wrapping in a closure, use first-class callable syntax\n$numbers = [1, 2, 3, 4, 5];\n\n// Traditional\n$doubled1 = array_map(function (int $n): int {\n    return $n * 2;\n}, $numbers);\n\n// With named function\nfunction double(int $n): int {\n    return $n * 2;\n}\n$doubled2 = array_map('double', $numbers);\n\n// First-class callable syntax (PHP 8.1+)\n$doubled3 = array_map(double(...), $numbers);\n\n// Useful with built-in functions\n$strings = ['  hello  ', '  world  '];\n$trimmed = array_map(trim(...), $strings);\n// ['hello', 'world']\n\n// With methods\nclass Formatter {\n    public function prefix(string $value): string {\n        return \"Item: $value\";\n    }\n}\n$formatter = new Formatter();\n$prefixed = array_map($formatter->prefix(...), ['a', 'b', 'c']);\n// ['Item: a', 'Item: b', 'Item: c']\n\n// Static methods\nclass MathHelper {\n    public static function cube(int $n): int {\n        return $n ** 3;\n    }\n}\n$cubes = array_map(MathHelper::cube(...), [1, 2, 3]);\n// [1, 8, 27]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-object-oriented-programming",
      children: "1.4 Object-Oriented Programming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel is deeply object-oriented. Everything from requests to models to middleware is a class instance. Understanding PHP OOP is essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-classes-properties-and-methods",
      children: "1.4.1 Classes, Properties, and Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass User\n{\n    // Properties with type declarations (PHP 7.4+)\n    public string $name;\n    protected string $email;\n    private int $age;\n    public static int $count = 0;\n    public readonly string $uuid;\n\n    // Constructor\n    public function __construct(string $name, string $email, int $age)\n    {\n        $this->name = $name;\n        $this->email = $email;\n        $this->age = $age;\n        $this->uuid = uniqid('user_');\n        static::$count++;\n    }\n\n    // Methods\n    public function getEmail(): string\n    {\n        return $this->email;\n    }\n\n    protected function setEmail(string $email): void\n    {\n        $this->email = $email;\n    }\n\n    public function isAdult(): bool\n    {\n        return $this->age >= 18;\n    }\n\n    // Static method\n    public static function getCount(): int\n    {\n        return static::$count;\n    }\n\n    // Destructor\n    public function __destruct()\n    {\n        static::$count--;\n    }\n}\n\n$user = new User('Alice', 'alice@example.com', 30);\necho $user->name;        // Alice\necho $user->isAdult();   // true\necho User::getCount();   // 1\nunset($user);\necho User::getCount();   // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-constructor-property-promotion-php-80",
      children: "1.4.2 Constructor Property Promotion (PHP 8.0+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP 8.0 introduced constructor property promotion, which combines property declaration and constructor assignment into a single syntax. Laravel uses this extensively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Without promotion (verbose)\nclass OldWay\n{\n    public string $name;\n    public string $email;\n    private int $age;\n\n    public function __construct(string $name, string $email, int $age)\n    {\n        $this->name = $name;\n        $this->email = $email;\n        $this->age = $age;\n    }\n}\n\n// With promotion (concise) — used throughout Laravel\nclass User\n{\n    public function __construct(\n        public string $name,\n        public string $email,\n        private int $age,\n        public readonly string $uuid = '',\n    ) {\n        $this->uuid = $uuid ?: uniqid('user_');\n    }\n\n    public function getAge(): int\n    {\n        return $this->age;\n    }\n}\n\n$user = new User(name: 'Alice', email: 'alice@example.com', age: 30);\necho $user->name;     // Alice\necho $user->getAge(); // 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-inheritance",
      children: "1.4.3 Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass Animal\n{\n    public function __construct(\n        protected string $name,\n        protected int $age,\n    ) {}\n\n    public function speak(): string\n    {\n        return \"$this->name makes a sound\";\n    }\n\n    public function describe(): string\n    {\n        return \"$this->name is $this->age years old\";\n    }\n}\n\nclass Dog extends Animal\n{\n    private string $breed;\n\n    public function __construct(string $name, int $age, string $breed)\n    {\n        parent::__construct($name, $age);\n        $this->breed = $breed;\n    }\n\n    public function speak(): string\n    {\n        return \"$this->name barks\";\n    }\n\n    public function fetch(): string\n    {\n        return \"$this->name fetches the stick\";\n    }\n\n    public function getBreed(): string\n    {\n        return $this->breed;\n    }\n}\n\nclass Cat extends Animal\n{\n    public function speak(): string\n    {\n        return \"$this->name meows\";\n    }\n}\n\n$dog = new Dog('Rex', 3, 'Labrador');\necho $dog->speak();      // Rex barks\necho $dog->describe();   // Rex is 3 years old\necho $dog->fetch();      // Rex fetches the stick\n\n$cat = new Cat('Whiskers', 5);\necho $cat->speak();      // Whiskers meows\n\n// Polymorphism\nfunction makeAnimalSpeak(Animal $animal): string\n{\n    return $animal->speak();\n}\n\necho makeAnimalSpeak($dog); // Rex barks\necho makeAnimalSpeak($cat); // Whiskers meows\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-abstract-classes",
      children: "1.4.4 Abstract Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Abstract classes define a base template that cannot be instantiated directly. They can contain both abstract methods (without implementation) and concrete methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nabstract class PaymentGateway\n{\n    public function __construct(\n        protected string $apiKey,\n        protected bool $sandbox = true,\n    ) {}\n\n    // Abstract methods — subclasses MUST implement these\n    abstract public function charge(float $amount, array $payload): array;\n    abstract public function refund(string $transactionId): array;\n\n    // Concrete method — shared across all gateways\n    public function isSandbox(): bool\n    {\n        return $this->sandbox;\n    }\n\n    // Template method pattern\n    public function processPayment(float $amount, array $payload): array\n    {\n        $this->validateAmount($amount);\n        $payload['environment'] = $this->sandbox ? 'sandbox' : 'production';\n        $result = $this->charge($amount, $payload);\n        $this->logTransaction($result);\n        return $result;\n    }\n\n    protected function validateAmount(float $amount): void\n    {\n        if ($amount <= 0) {\n            throw new \\InvalidArgumentException('Amount must be positive');\n        }\n    }\n\n    protected function logTransaction(array $result): void\n    {\n        echo \"[Payment] Transaction: {$result['id']}\" . PHP_EOL;\n    }\n}\n\nclass StripeGateway extends PaymentGateway\n{\n    public function charge(float $amount, array $payload): array\n    {\n        // Simulated Stripe API call\n        return [\n            'id' => 'stripe_' . uniqid(),\n            'amount' => $amount,\n            'currency' => $payload['currency'] ?? 'usd',\n            'status' => 'succeeded',\n            'gateway' => 'stripe',\n        ];\n    }\n\n    public function refund(string $transactionId): array\n    {\n        return [\n            'id' => 'refund_' . $transactionId,\n            'status' => 'refunded',\n        ];\n    }\n}\n\nclass PayPalGateway extends PaymentGateway\n{\n    public function charge(float $amount, array $payload): array\n    {\n        return [\n            'id' => 'paypal_' . uniqid(),\n            'amount' => $amount,\n            'currency' => $payload['currency'] ?? 'usd',\n            'status' => 'completed',\n            'gateway' => 'paypal',\n        ];\n    }\n\n    public function refund(string $transactionId): array\n    {\n        return [\n            'id' => 'refund_' . $transactionId,\n            'status' => 'completed',\n        ];\n    }\n}\n\n// Cannot instantiate abstract class directly:\n// $gateway = new PaymentGateway('key'); // Error!\n\n$stripe = new StripeGateway('sk_test_123');\n$result = $stripe->processPayment(49.99, ['currency' => 'eur']);\necho $result['status']; // succeeded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "145-interfaces",
      children: "1.4.5 Interfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interfaces define contracts without implementation. Unlike abstract classes, a class can implement multiple interfaces."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\ninterface Logger\n{\n    public function log(string $level, string $message, array $context = []): void;\n    public function emergency(string $message, array $context = []): void;\n    public function error(string $message, array $context = []): void;\n    public function info(string $message, array $context = []): void;\n}\n\ninterface Cacheable\n{\n    public function cacheKey(): string;\n    public function cacheTtl(): int;\n}\n\n// A class can implement multiple interfaces\nclass FileLogger implements Logger\n{\n    public function __construct(\n        private string $logPath = '/var/log/app.log',\n    ) {}\n\n    public function log(string $level, string $message, array $context = []): void\n    {\n        $timestamp = date('Y-m-d H:i:s');\n        $contextStr = !empty($context) ? ' ' . json_encode($context) : '';\n        $line = \"[$timestamp] [$level] $message$contextStr\" . PHP_EOL;\n        file_put_contents($this->logPath, $line, FILE_APPEND | LOCK_EX);\n    }\n\n    public function emergency(string $message, array $context = []): void\n    {\n        $this->log('EMERGENCY', $message, $context);\n    }\n\n    public function error(string $message, array $context = []): void\n    {\n        $this->log('ERROR', $message, $context);\n    }\n\n    public function info(string $message, array $context = []): void\n    {\n        $this->log('INFO', $message, $context);\n    }\n}\n\nclass UserModel implements Cacheable\n{\n    public function __construct(\n        private int $id,\n        public string $name,\n    ) {}\n\n    public function cacheKey(): string\n    {\n        return \"user_{$this->id}\";\n    }\n\n    public function cacheTtl(): int\n    {\n        return 3600; // 1 hour\n    }\n}\n\n// Using the interface for type safety\nfunction processUser(Cacheable $entity): string\n{\n    return \"Cache key: {$entity->cacheKey()}, TTL: {$entity->cacheTtl()}\";\n}\n\n$user = new UserModel(42, 'Alice');\necho processUser($user); // Cache key: user_42, TTL: 3600\n\n// Interface inheritance\ninterface AdvancedLogger extends Logger\n{\n    public function withContext(array $context): AdvancedLogger;\n    public function flush(): void;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "146-traits",
      children: "1.4.6 Traits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traits are horizontal reuse mechanisms. They let you share methods across unrelated classes. Traits cannot be instantiated alone."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\ntrait Timestampable\n{\n    protected string $createdAt;\n    protected string $updatedAt;\n\n    public function initializeTimestamps(): void\n    {\n        $this->createdAt = date('c');\n        $this->updatedAt = date('c');\n    }\n\n    public function touch(): void\n    {\n        $this->updatedAt = date('c');\n    }\n\n    public function getCreatedAt(): string\n    {\n        return $this->createdAt;\n    }\n\n    public function getUpdatedAt(): string\n    {\n        return $this->updatedAt;\n    }\n}\n\ntrait SoftDeletes\n{\n    protected ?string $deletedAt = null;\n\n    public function delete(): void\n    {\n        $this->deletedAt = date('c');\n    }\n\n    public function restore(): void\n    {\n        $this->deletedAt = null;\n    }\n\n    public function isDeleted(): bool\n    {\n        return $this->deletedAt !== null;\n    }\n}\n\nclass Post\n{\n    use Timestampable, SoftDeletes;\n\n    public function __construct(\n        public string $title,\n        public string $content,\n    ) {\n        $this->initializeTimestamps();\n    }\n}\n\nclass Comment\n{\n    use Timestampable;\n\n    public function __construct(\n        public string $body,\n        public int $postId,\n    ) {\n        $this->initializeTimestamps();\n    }\n}\n\n$post = new Post('My First Post', 'Hello, world!');\necho $post->getCreatedAt(); // 2026-01-15T10:00:00+00:00\n$post->touch();\n$post->delete();\nvar_dump($post->isDeleted()); // true\n\n// Trait method precedence:\n// 1. Current class method overrides trait method\n// 2. Trait method overrides inherited method\n\ntrait CanGreet\n{\n    public function greet(): string\n    {\n        return \"Hello from trait!\";\n    }\n}\n\nclass BaseClass\n{\n    public function greet(): string\n    {\n        return \"Hello from base!\";\n    }\n}\n\nclass MyClass extends BaseClass\n{\n    use CanGreet;\n}\n\n$obj = new MyClass();\necho $obj->greet(); // Hello from trait! (trait overrides base)\n\n// Conflict resolution with insteadof and as\ntrait A\n{\n    public function foo(): string { return 'A::foo'; }\n    public function common(): string { return 'A::common'; }\n}\n\ntrait B\n{\n    public function bar(): string { return 'B::bar'; }\n    public function common(): string { return 'B::common'; }\n}\n\nclass Resolver\n{\n    use A, B {\n        A::common insteadof B; // Use A's version of common\n        B::bar as protected;    // Change visibility of bar\n        B::common as aliasForB; // Alias B's common under a different name\n    }\n}\n\n$r = new Resolver();\necho $r->common();    // A::common\necho $r->aliasForB(); // B::common\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "147-magic-methods",
      children: "1.4.7 Magic Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP provides magic methods that are invoked automatically in specific situations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass MagicExample\n{\n    private array $data = [];\n\n    // __get is called when reading inaccessible/invisible properties\n    public function __get(string $name): mixed\n    {\n        return $this->data[$name] ?? null;\n    }\n\n    // __set is called when writing to inaccessible/invisible properties\n    public function __set(string $name, mixed $value): void\n    {\n        $this->data[$name] = $value;\n    }\n\n    // __call is called when invoking inaccessible/invisible methods\n    public function __call(string $name, array $arguments): mixed\n    {\n        if ($name === 'compute') {\n            return array_sum($arguments);\n        }\n        throw new \\BadMethodCallException(\"Method $name does not exist\");\n    }\n\n    // __callStatic for static method calls\n    public static function __callStatic(string $name, array $arguments): mixed\n    {\n        return \"Static call: $name with \" . implode(', ', $arguments);\n    }\n\n    // __toString when the object is cast to string\n    public function __toString(): string\n    {\n        return json_encode($this->data);\n    }\n\n    // __invoke when the object is called as a function\n    public function __invoke(mixed ...$args): string\n    {\n        return \"Invoked with: \" . implode(', ', $args);\n    }\n\n    // __debugInfo for var_dump output\n    public function __debugInfo(): array\n    {\n        return [\n            'data_keys' => array_keys($this->data),\n            'data_count' => count($this->data),\n        ];\n    }\n}\n\n$obj = new MagicExample();\n$obj->name = 'Alice';       // Calls __set\necho $obj->name;            // Calls __get, outputs: Alice\necho $obj->compute(1, 2, 3);  // Calls __call, outputs: 6\necho MagicExample::staticMethod('a', 'b'); // Calls __callStatic\necho $obj;                  // Calls __toString\necho $obj('x', 'y');        // Calls __invoke\n// Output: Invoked with: x, y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-namespaces-and-autoloading",
      children: "1.5 Namespaces and Autoloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Namespaces solve the problem of name collisions and enable PSR-4 autoloading, which Laravel relies on heavily."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-defining-namespaces",
      children: "1.5.1 Defining Namespaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n// File: src/Models/User.php\nnamespace App\\Models;\n\nclass User\n{\n    public function __construct(\n        public string $name,\n        public string $email,\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n// File: src/Services/MailService.php\nnamespace App\\Services;\n\nclass MailService\n{\n    public function send(string $to, string $subject, string $body): bool\n    {\n        echo \"Sending email to $to: $subject\" . PHP_EOL;\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "152-importing-with-use",
      children: ["1.5.2 Importing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n// File: src/Controllers/UserController.php\nnamespace App\\Controllers;\n\n// Import classes from other namespaces\nuse App\\Models\\User;\nuse App\\Services\\MailService;\n\nclass UserController\n{\n    public function __construct(\n        private MailService $mail,\n    ) {}\n\n    public function register(array $data): User\n    {\n        $user = new User($data['name'], $data['email']);\n        $this->mail->send(\n            $user->email,\n            'Welcome!',\n            \"Hello {$user->name}, welcome aboard.\"\n        );\n        return $user;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-aliasing",
      children: "1.5.3 Aliasing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Models\\User as UserModel;\nuse App\\Services\\MailService as Mailer;\n\n$user = new UserModel('Alice', 'alice@example.com');\n$mailer = new Mailer();\n$mailer->send($user->email, 'Test', 'Body');\n\n// Grouped imports (PHP 7.0+)\nuse App\\Models\\{User, Post, Comment};\nuse App\\Services\\{MailService, CacheService, LoggerService};\n\n// Import a global class (prepend with backslash in namespace context)\n// In a namespaced file:\nuse function array_map;\nuse const PHP_INT_MAX;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "154-global-namespace",
      children: "1.5.4 Global Namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\nnamespace App\\Utils;\n\n// Call a global class by prepending backslash\n$now = new \\DateTimeImmutable();\necho $now->format('Y-m-d');\n\n// Call global functions\n$length = \\strlen('hello');\n\n// The `use` keyword can import from global\nuse DateTimeImmutable;\n$now2 = new DateTimeImmutable();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "155-psr-4-autoloading",
      children: "1.5.5 PSR-4 Autoloading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PSR-4 maps namespace prefixes to directory structures. A class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Models\\User"
      }), " with prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\"
      }), " mapped to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/"
      }), " lives at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/Models/User.php"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), " configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"autoload\": {\n        \"psr-4\": {\n            \"App\\\\\": \"src/\",\n            \"Database\\\\Factories\\\\\": \"database/factories/\",\n            \"Database\\\\Seeders\\\\\": \"database/seeders/\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After adding autoload entries, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer dump-autoload\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), " maps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/"
      }), ". When you create a class at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Models/User.php"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace App\\Models;"
      }), ", Composer autoloads it automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-error-handling",
      children: "1.6 Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP provides a comprehensive error handling system. Laravel wraps this into a clean exception-handling layer, but understanding the raw PHP mechanisms is essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "161-basic-trycatch",
      children: "1.6.1 Basic Try/Catch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nfunction divide(float $a, float $b): float\n{\n    if ($b === 0.0) {\n        throw new \\DivisionByZeroError('Cannot divide by zero');\n    }\n    return $a / $b;\n}\n\ntry {\n    $result = divide(10, 0);\n    echo $result;\n} catch (\\DivisionByZeroError $e) {\n    echo \"Caught division error: \" . $e->getMessage();\n} catch (\\Throwable $e) {\n    echo \"Caught generic error: \" . $e->getMessage();\n}\n// Outputs: Caught division error: Cannot divide by zero\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "162-multiple-catch-blocks-and-finally",
      children: "1.6.2 Multiple Catch Blocks and Finally"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nfunction processFile(string $path): string\n{\n    if (!file_exists($path)) {\n        throw new \\RuntimeException(\"File not found: $path\");\n    }\n\n    $content = file_get_contents($path);\n    if ($content === false) {\n        throw new \\RuntimeException(\"Failed to read file: $path\");\n    }\n\n    $decoded = json_decode($content, true);\n    if (json_last_error() !== JSON_ERROR_NONE) {\n        throw new \\UnexpectedValueException(\n            'Invalid JSON: ' . json_last_error_msg()\n        );\n    }\n\n    return $content;\n}\n\ntry {\n    $data = processFile('/tmp/config.json');\n    echo $data;\n} catch (\\RuntimeException $e) {\n    echo \"Runtime error: \" . $e->getMessage();\n} catch (\\UnexpectedValueException $e) {\n    echo \"Value error: \" . $e->getMessage();\n} finally {\n    echo \" (cleanup completed)\";\n}\n// The finally block always executes, whether an exception was thrown or not\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "163-custom-exception-classes",
      children: "1.6.3 Custom Exception Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nnamespace App\\Exceptions;\n\nclass PaymentException extends \\RuntimeException\n{\n    public function __construct(\n        string $message = 'Payment processing failed',\n        int $code = 0,\n        ?\\Throwable $previous = null,\n        private ?string $transactionId = null,\n        private ?array $errors = [],\n    ) {\n        parent::__construct($message, $code, $previous);\n    }\n\n    public function getTransactionId(): ?string\n    {\n        return $this->transactionId;\n    }\n\n    public function getErrors(): array\n    {\n        return $this->errors;\n    }\n\n    public function isRetryable(): bool\n    {\n        return in_array($this->code, [408, 429, 500, 502, 503], true);\n    }\n}\n\nclass InsufficientFundsException extends PaymentException\n{\n    public function __construct(\n        float $balance,\n        float $required,\n        ?string $transactionId = null,\n    ) {\n        $message = sprintf(\n            'Insufficient funds: $%.2f required, $%.2f available',\n            $required,\n            $balance\n        );\n        parent::__construct($message, 402, null, $transactionId);\n    }\n}\n\nclass GatewayTimeoutException extends PaymentException\n{\n    public function __construct(\n        string $gateway,\n        ?string $transactionId = null,\n    ) {\n        $message = \"Gateway $gateway timed out\";\n        parent::__construct($message, 504, null, $transactionId);\n    }\n}\n\n// Usage\nfunction processPayment(float $amount, float $balance): void\n{\n    if ($balance < $amount) {\n        throw new InsufficientFundsException($balance, $amount, 'txn_123');\n    }\n    // Process payment...\n}\n\ntry {\n    processPayment(100.00, 25.00);\n} catch (InsufficientFundsException $e) {\n    echo $e->getMessage(); // Insufficient funds: $100.00 required, $25.00 available\n    echo \"Retryable: \" . ($e->isRetryable() ? 'yes' : 'no'); // no\n} catch (PaymentException $e) {\n    echo \"Payment error: \" . $e->getMessage();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "164-error-reporting",
      children: "1.6.4 Error Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Error levels\n// E_ERROR, E_WARNING, E_PARSE, E_NOTICE, E_STRICT (PHP 5.4+)\n// E_DEPRECATED, E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE\n// E_ALL includes all errors\n\n// Report all errors except notices\nerror_reporting(E_ALL & ~E_NOTICE & ~E_USER_NOTICE & ~E_DEPRECATED);\n\n// In development, show all errors\nerror_reporting(E_ALL);\n\n// Control whether errors are displayed\nini_set('display_errors', '1');\nini_set('display_startup_errors', '1');\n\n// In production, log errors instead of displaying them\n// ini_set('display_errors', '0');\nini_set('log_errors', '1');\nini_set('error_log', '/var/log/php_errors.log');\n\n// Convert warnings to exceptions using set_error_handler\nset_error_handler(function (\n    int $severity,\n    string $message,\n    string $file,\n    int $line,\n): bool {\n    if (!(error_reporting() & $severity)) {\n        // Error level is not included in error_reporting\n        return false;\n    }\n    throw new \\ErrorException($message, 0, $severity, $file, $line);\n});\n\n// Now this triggers an ErrorException instead of a warning\ntry {\n    $result = 1 / 0; // DivisionByZeroError on modern PHP\n} catch (\\DivisionByZeroError $e) {\n    echo \"Caught: \" . $e->getMessage();\n}\n\n// Triggering user errors\ntrigger_error('Something went wrong', E_USER_WARNING);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "165-trycatch-with-multiple-exception-types-php-80",
      children: "1.6.5 Try/Catch with Multiple Exception Types (PHP 8.0+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass ValidationException extends \\RuntimeException {}\nclass NotFoundException extends \\RuntimeException {}\nclass UnauthorizedException extends \\RuntimeException {}\n\nfunction execute(string $action): string\n{\n    return match ($action) {\n        'validate' => throw new ValidationException('Invalid input'),\n        'find' => throw new NotFoundException('Resource not found'),\n        'auth' => throw new UnauthorizedException('Access denied'),\n        default => \"Action: $action\",\n    };\n}\n\n// Catching multiple exception types\ntry {\n    $result = execute('find');\n    echo $result;\n} catch (ValidationException | NotFoundException | UnauthorizedException $e) {\n    $class = (new \\ReflectionClass($e))->getShortName();\n    echo \"[$class] \" . $e->getMessage();\n}\n// Outputs: [NotFoundException] Resource not found\n\n// The Throwable interface catches everything\ntry {\n    execute('unknown');\n} catch (\\Throwable $e) {\n    echo get_class($e) . ': ' . $e->getMessage();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-composer",
      children: "1.7 Composer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Composer is PHP's dependency manager, essential for Laravel development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-initializing-a-project",
      children: "1.7.1 Initializing a Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a new project and initialize composer\nmkdir my-project\ncd my-project\n\n# Initialize with interactive prompts\ncomposer init\n\n# Non-interactive initialization\ncomposer init --name=\"my/project\" --description=\"My awesome project\" --type=\"project\" --no-interaction\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer init"
      }), " command generates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"name\": \"my/project\",\n    \"description\": \"My awesome project\",\n    \"type\": \"project\",\n    \"require\": {},\n    \"autoload\": {\n        \"psr-4\": {\n            \"App\\\\\": \"src/\"\n        }\n    },\n    \"scripts\": {\n        \"test\": \"phpunit\",\n        \"check\": [\n            \"@test\",\n            \"phpstan analyse\"\n        ]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "172-requiring-packages",
      children: "1.7.2 Requiring Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Require a production dependency\ncomposer require laravel/framework\n\n# Require a specific version\ncomposer require monolog/monolog:3.7.0\n\n# Require with version constraint\ncomposer require guzzlehttp/guzzle:^7.0\n\n# Require a dev dependency\ncomposer require --dev phpunit/phpunit:^11.0\ncomposer require --dev laravel/sail\n\n# Remove a package\ncomposer remove phpunit/phpunit --dev\n\n# Update a specific package\ncomposer update monolog/monolog\n\n# Update all packages\ncomposer update\n\n# Install from lock file\ncomposer install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "173-psr-4-autoloading",
      children: "1.7.3 PSR-4 Autoloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# After modifying autoload section in composer.json:\ncomposer dump-autoload\n# or\ncomposer dump-autoload -o  # Optimized (classmap for faster loading)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example directory structure with PSR-4:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "project/\n├── composer.json\n├── src/\n│   ├── Models/\n│   │   ├── User.php          # namespace App\\Models;\n│   │   └── Product.php       # namespace App\\Models;\n│   ├── Services/\n│   │   └── InvoiceService.php # namespace App\\Services;\n│   └── Exceptions/\n│       └── AppException.php  # namespace App\\Exceptions;\n├── tests/\n│   └── Unit/\n│       └── UserTest.php      # namespace App\\Tests\\Unit;\n└── public/\n    └── index.php\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "174-composer-scripts",
      children: "1.7.4 Composer Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"scripts\": {\n        \"test\": \"phpunit\",\n        \"test:coverage\": \"phpunit --coverage-html coverage/\",\n        \"lint\": \"phpcs --standard=PSR12 src/\",\n        \"stan\": \"phpstan analyse --level=max src/\",\n        \"fix\": \"phpcbf --standard=PSR12 src/\",\n        \"all\": [\n            \"@lint\",\n            \"@stan\",\n            \"@test\"\n        ],\n        \"pre-update-cmd\": [\n            \"echo 'Running before update...'\"\n        ],\n        \"post-update-cmd\": [\n            \"echo 'Running after update...'\"\n        ],\n        \"post-install-cmd\": [\n            \"php artisan optimize\",\n            \"php artisan storage:link\"\n        ]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run scripts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer test\ncomposer run-script all\ncomposer run lint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "175-version-constraints",
      children: "1.7.5 Version Constraints"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^1.2.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">=1.2.3, <2.0.0 (compatible with minor versions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~1.2.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">=1.2.3, <1.3.0 (compatible with patch versions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1.2.*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">=1.2.0, <1.3.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">=1.2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2.0 or higher"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1.2.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1.2.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any version"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"require\": {\n        \"php\": \"^8.3\",\n        \"laravel/framework\": \"^13.0\",\n        \"spatie/laravel-permission\": \"^6.0\",\n        \"laravel/sanctum\": \"^4.0\",\n        \"guzzlehttp/guzzle\": \"^7.8\"\n    },\n    \"require-dev\": {\n        \"phpunit/phpunit\": \"^11.0\",\n        \"laravel/sail\": \"^1.0\",\n        \"nunomaduro/collision\": \"^8.0\",\n        \"larastan/larastan\": \"^2.0\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "176-composer-lock-file-and-best-practices",
      children: "1.7.6 Composer Lock File and Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# The composer.lock file must be committed to version control\n# It ensures everyone on the team uses the exact same versions\n\n# When deploying, only run:\ncomposer install --no-dev --optimize-autoloader\n\n# Classmap optimization for production\ncomposer dump-autoload -o\n\n# Check for security vulnerabilities\ncomposer audit\n\n# Show installed packages\ncomposer show\n\n# Show packages that can be updated\ncomposer outdated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-php-83-features",
      children: "1.8 PHP 8.3 Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP 8.3, released November 2023, is the minimum PHP version for Laravel 13. These features appear throughout Laravel's codebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "181-readonly-classes-php-82",
      children: "1.8.1 Readonly Classes (PHP 8.2+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Marking a class as readonly makes all properties implicitly readonly\nreadonly class Configuration\n{\n    // All properties are automatically readonly\n    public function __construct(\n        public string $appName,\n        public string $env,\n        public bool $debug,\n        public string $url,\n    ) {}\n}\n\n$config = new Configuration(\n    appName: 'My App',\n    env: 'production',\n    debug: false,\n    url: 'https://example.com',\n);\n\necho $config->appName; // My App\n\n// This would cause an error:\n// $config->appName = 'New Name';\n// Error: Cannot modify readonly property Configuration::$appName\n\n// Readonly properties can only be declared in promoted constructor parameters\n// or in the property declaration of a readonly class\n\n// Readonly classes support inheritance\nreadonly class ExtendedConfig extends Configuration\n{\n    public function __construct(\n        string $appName,\n        string $env,\n        bool $debug,\n        string $url,\n        public string $version,\n    ) {\n        parent::__construct($appName, $env, $debug, $url);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-enums-php-81",
      children: "1.8.2 Enums (PHP 8.1+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enums are a first-class type in PHP, heavily used in Laravel for status fields, notification channels, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Pure enum (no backed value)\nenum UserRole\n{\n    case Admin;\n    case Editor;\n    case Viewer;\n}\n\n// Backed enum (with scalar value)\nenum OrderStatus: string\n{\n    case Pending = 'pending';\n    case Processing = 'processing';\n    case Shipped = 'shipped';\n    case Delivered = 'delivered';\n    case Cancelled = 'cancelled';\n}\n\n// Int-backed enum\nenum HttpCode: int\n{\n    case OK = 200;\n    case Created = 201;\n    case BadRequest = 400;\n    case Unauthorized = 401;\n    case NotFound = 404;\n    case ServerError = 500;\n}\n\n// Enum methods\nenum PaymentMethod: string\n{\n    case CreditCard = 'cc';\n    case PayPal = 'pp';\n    case BankTransfer = 'bt';\n\n    public function label(): string\n    {\n        return match ($this) {\n            self::CreditCard => 'Credit Card',\n            self::PayPal => 'PayPal',\n            self::BankTransfer => 'Bank Transfer',\n        };\n    }\n\n    public function requiresGateway(): bool\n    {\n        return match ($this) {\n            self::BankTransfer => false,\n            default => true,\n        };\n    }\n\n    public static function fromCurrency(string $currency): self\n    {\n        return match ($currency) {\n            'USD', 'EUR', 'GBP' => self::CreditCard,\n            'BTC' => self::BankTransfer,\n            default => self::PayPal,\n        };\n    }\n}\n\n// Usage\n$status = OrderStatus::Pending;\necho $status->name;    // Pending\necho $status->value;   // pending\n\n// Match on enum\nfunction getStatusColor(OrderStatus $status): string\n{\n    return match ($status) {\n        OrderStatus::Pending => 'yellow',\n        OrderStatus::Processing => 'blue',\n        OrderStatus::Shipped => 'purple',\n        OrderStatus::Delivered => 'green',\n        OrderStatus::Cancelled => 'red',\n    };\n}\n\necho getStatusColor(OrderStatus::Delivered); // green\n\n// Enum with backed values\n$fromDb = OrderStatus::from('shipped'); // OrderStatus::Shipped\n$tryFrom = OrderStatus::tryFrom('unknown'); // null (no exception)\n\n// Enum in switch\n$method = PaymentMethod::PayPal;\nswitch ($method) {\n    case PaymentMethod::CreditCard:\n        echo \"Processing credit card\";\n        break;\n    case PaymentMethod::PayPal:\n        echo \"Redirecting to PayPal\";\n        break;\n    case PaymentMethod::BankTransfer:\n        echo \"Generating bank transfer details\";\n        break;\n}\n// Outputs: Redirecting to PayPal\n\necho PaymentMethod::PayPal->label(); // PayPal\necho PaymentMethod::fromCurrency('EUR')->label(); // Credit Card\n\n// Enum implements interfaces\nenum StringableStatus: string implements \\JsonSerializable\n{\n    case Active = 'active';\n    case Inactive = 'inactive';\n\n    public function jsonSerialize(): string\n    {\n        return $this->value;\n    }\n}\n\necho json_encode(StringableStatus::Active); // \"active\"\n\n// Enum in arrays\n$allowedStatuses = [OrderStatus::Pending, OrderStatus::Processing, OrderStatus::Shipped];\nvar_dump(in_array(OrderStatus::Pending, $allowedStatuses)); // true\n\n// Enum for Laravel model casting\n// In a Laravel model:\n// protected $casts = [\n//     'role' => UserRole::class,\n//     'status' => OrderStatus::class,\n// ];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-typed-properties-php-74-and-readonly-properties-php-81",
      children: "1.8.3 Typed Properties (PHP 7.4+) and Readonly Properties (PHP 8.1+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass Product\n{\n    // Typed properties\n    public string $name;\n    public float $price;\n    public ?string $description = null;\n    public array $tags = [];\n    private int $stock;\n\n    // Readonly property (set once, cannot change)\n    public readonly string $sku;\n\n    // Union type\n    private int|float $discount = 0;\n\n    // Mixed type\n    private mixed $metadata = [];\n\n    public function __construct(string $name, float $price)\n    {\n        $this->name = $name;\n        $this->price = $price;\n        $this->sku = strtoupper(uniqid('SKU_'));\n        $this->stock = 0;\n    }\n\n    public function setStock(int $stock): void\n    {\n        $this->stock = $stock;\n    }\n\n    public function getStock(): int\n    {\n        return $this->stock;\n    }\n\n    // Nullable type\n    public function setDescription(?string $description): void\n    {\n        $this->description = $description;\n    }\n}\n\n$product = new Product('Widget', 19.99);\n$product->setStock(50);\n// $product->sku = 'new_sku'; // Error: readonly property\n\necho $product->sku; // SKU_6612a3b4c5d6e\n\n// Typed properties must be initialized before access\n// Uninitialized typed property access throws TypeError\n\n// Property hook proposal (PHP 8.4+) — future feature\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "184-json_validate-php-83",
      children: ["1.8.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "json_validate"
      }), " (PHP 8.3+)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PHP 8.3 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "json_validate()"
      }), " to check if a string is valid JSON without decoding it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Before PHP 8.3 (wasteful — decodes twice)\nfunction isValidJsonOld(string $data): bool\n{\n    json_decode($data);\n    return json_last_error() === JSON_ERROR_NONE;\n}\n\n// With PHP 8.3 (efficient — validates without decoding)\nfunction isValidJson(string $data): bool\n{\n    return json_validate($data);\n}\n\n$valid = '{\"name\":\"Alice\",\"age\":30}';\n$invalid = '{\"name\": Alice}';\n\nvar_dump(isValidJson($valid));   // true\nvar_dump(isValidJson($invalid)); // false\n\n// Practical use: validate before decoding\n$response = '{\"status\":\"ok\",\"data\":[]}';\n\nif (!json_validate($response)) {\n    throw new \\InvalidArgumentException('Invalid JSON response');\n}\n\n$data = json_decode($response, true, 512, JSON_THROW_ON_ERROR);\necho $data['status']; // ok\n\n// Depth parameter (default 512)\n$deepJson = '{\"a\":{\"b\":{\"c\":{\"d\":\"value\"}}}}';\nvar_dump(json_validate($deepJson, 3));  // false (too deep)\nvar_dump(json_validate($deepJson, 10)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "185-dynamic-class-constant-fetch-php-83",
      children: "1.8.5 Dynamic Class Constant Fetch (PHP 8.3+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PHP 8.3 allows fetching class constants using a dynamic name with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassName::{$name}"
      }), " syntax."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass ErrorMessages\n{\n    public const NOT_FOUND = 'Resource not found';\n    public const UNAUTHORIZED = 'Unauthorized access';\n    public const VALIDATION_FAILED = 'Validation failed';\n    public const SERVER_ERROR = 'Internal server error';\n}\n\n// Before PHP 8.3 (required constant() function)\n$errorKey = 'NOT_FOUND';\n$message = constant(ErrorMessages::class . '::' . $errorKey);\necho $message; // Resource not found\n\n// PHP 8.3+ dynamic constant fetch\n$errorKey = 'VALIDATION_FAILED';\n$message = ErrorMessages::{$errorKey};\necho $message; // Validation failed\n\n// Practical use in mapping\nfunction getErrorMessage(string $key): string\n{\n    return ErrorMessages::{$key} ?? 'Unknown error';\n}\n\necho getErrorMessage('UNAUTHORIZED'); // Unauthorized access\n\n// Works with enums too\nenum Status: string\n{\n    case Active = 'active';\n    case Inactive = 'inactive';\n    case Archived = 'archived';\n}\n\n$statusName = 'Active';\necho Status::{$statusName}->value; // active\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "186-additional-php-8x-features-used-in-laravel",
      children: "1.8.6 Additional PHP 8.x Features Used in Laravel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// 1. Nullsafe operator (PHP 8.0+)\nclass Address\n{\n    public function __construct(\n        public ?string $city = null,\n        public ?string $zipCode = null,\n    ) {}\n}\n\nclass Customer\n{\n    public function __construct(\n        public string $name,\n        public ?Address $address = null,\n    ) {}\n}\n\n$customer = new Customer('Alice', new Address(city: 'New York'));\n$city = $customer->address?->city ?? 'Unknown';\necho $city; // New York\n\n$customer2 = new Customer('Bob');\n$city2 = $customer2->address?->city ?? 'Unknown';\necho $city2; // Unknown\n\n// 2. Match expression (PHP 8.0+)\n$httpCode = 404;\n$category = match (true) {\n    $httpCode < 200 => 'Informational',\n    $httpCode < 300 => 'Success',\n    $httpCode < 400 => 'Redirect',\n    $httpCode < 500 => 'Client Error',\n    default => 'Server Error',\n};\necho $category; // Client Error\n\n// 3. Attributes (PHP 8.0+)\n#[Attribute]\nclass Route\n{\n    public function __construct(\n        public string $method,\n        public string $path,\n    ) {}\n}\n\n#[Attribute]\nclass Middleware\n{\n    public function __construct(\n        public string $name,\n    ) {}\n}\n\n#[Route('GET', '/users')]\n#[Middleware('auth')]\nclass UserController\n{\n    #[Route('GET', '/users/{id}')]\n    public function show(int $id): string\n    {\n        return \"Showing user $id\";\n    }\n}\n\n// Reading attributes at runtime\n$reflection = new ReflectionClass(UserController::class);\n$routeAttr = $reflection->getAttributes(Route::class)[0] ?? null;\nif ($routeAttr !== null) {\n    $route = $routeAttr->newInstance();\n    echo \"{$route->method} {$route->path}\"; // GET /users\n}\n\n// 4. New in initializers (PHP 8.1+)\nclass Cache\n{\n    public function __construct(\n        private int $ttl = 3600,\n    ) {}\n\n    public function get(string $key): string\n    {\n        return \"cached:$key\";\n    }\n}\n\nclass Service\n{\n    // Can use new in default parameter value\n    public function __construct(\n        private Cache $cache = new Cache(),\n    ) {}\n}\n\n// 5. Fibers (PHP 8.1+) — used in Laravel's async features\n$fiber = new Fiber(function (): void {\n    $value = Fiber::suspend('suspended');\n    echo \"Resumed with: $value\";\n});\n\n$result = $fiber->start();\necho $result; // suspended\n$fiber->resume('hello'); // Resumed with: hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-design-patterns-for-laravel-developers",
      children: "1.9 Design Patterns for Laravel Developers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design patterns provide proven solutions to common architectural problems. These four patterns are fundamental to Laravel application design."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "191-factory-pattern",
      children: "1.9.1 Factory Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Factory pattern creates objects without specifying the exact class. Laravel's database factories are a prime example."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Interfaces for the products\ninterface PaymentProvider\n{\n    public function charge(float $amount, array $options): array;\n    public function refund(string $transactionId): array;\n}\n\n// Concrete implementations\nclass StripeProvider implements PaymentProvider\n{\n    public function __construct(\n        private string $apiKey,\n        private string $webhookSecret,\n    ) {}\n\n    public function charge(float $amount, array $options): array\n    {\n        return [\n            'id' => 'ch_' . uniqid(),\n            'amount' => $amount,\n            'currency' => $options['currency'] ?? 'usd',\n            'status' => 'succeeded',\n            'provider' => 'stripe',\n        ];\n    }\n\n    public function refund(string $transactionId): array\n    {\n        return [\n            'id' => 'refund_' . $transactionId,\n            'status' => 'succeeded',\n        ];\n    }\n}\n\nclass PayPalProvider implements PaymentProvider\n{\n    public function __construct(\n        private string $clientId,\n        private string $clientSecret,\n    ) {}\n\n    public function charge(float $amount, array $options): array\n    {\n        return [\n            'id' => 'PAY-' . uniqid(),\n            'amount' => $amount,\n            'currency' => $options['currency'] ?? 'usd',\n            'status' => 'completed',\n            'provider' => 'paypal',\n        ];\n    }\n\n    public function refund(string $transactionId): array\n    {\n        return [\n            'id' => 'RF-' . $transactionId,\n            'status' => 'completed',\n        ];\n    }\n}\n\n// The Factory\nclass PaymentFactory\n{\n    public function make(string $provider, array $config): PaymentProvider\n    {\n        return match ($provider) {\n            'stripe' => new StripeProvider(\n                apiKey: $config['api_key'],\n                webhookSecret: $config['webhook_secret'],\n            ),\n            'paypal' => new PayPalProvider(\n                clientId: $config['client_id'],\n                clientSecret: $config['client_secret'],\n            ),\n            default => throw new \\InvalidArgumentException(\n                \"Unknown payment provider: $provider\"\n            ),\n        };\n    }\n\n    // Static version\n    public static function create(string $provider, array $config): PaymentProvider\n    {\n        return (new self())->make($provider, $config);\n    }\n}\n\n// Usage\n$factory = new PaymentFactory();\n$stripe = $factory->make('stripe', [\n    'api_key' => 'sk_test_123',\n    'webhook_secret' => 'whsec_456',\n]);\n\n$result = $stripe->charge(50.00, ['currency' => 'eur']);\necho $result['status']; // succeeded\n\n// Static usage\n$paypal = PaymentFactory::create('paypal', [\n    'client_id' => 'abc',\n    'client_secret' => 'def',\n]);\n\n// In Laravel, this would be registered as a service provider:\n// class PaymentServiceProvider extends ServiceProvider\n// {\n//     public function register(): void\n//     {\n//         $this->app->bind(PaymentFactory::class, function ($app) {\n//             return new PaymentFactory();\n//         });\n//     }\n// }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "192-repository-pattern",
      children: "1.9.2 Repository Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Repository pattern abstracts data access, making it easy to switch data sources and test business logic in isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nnamespace App\\Repositories;\n\n// Entity\nclass User\n{\n    public function __construct(\n        public ?int $id,\n        public string $name,\n        public string $email,\n        public bool $active = true,\n        public ?string $createdAt = null,\n    ) {\n        $this->createdAt ??= date('c');\n    }\n}\n\n// Repository interface\ninterface UserRepositoryInterface\n{\n    public function find(int $id): ?User;\n    public function findByEmail(string $email): ?User;\n    public function all(): array;\n    public function save(User $user): User;\n    public function delete(User $user): bool;\n    public function findActive(): array;\n}\n\n// In-memory implementation (useful for testing)\nclass InMemoryUserRepository implements UserRepositoryInterface\n{\n    /** @var array<int, User> */\n    private array $users = [];\n    private int $nextId = 1;\n\n    public function find(int $id): ?User\n    {\n        return $this->users[$id] ?? null;\n    }\n\n    public function findByEmail(string $email): ?User\n    {\n        foreach ($this->users as $user) {\n            if ($user->email === $email) {\n                return $user;\n            }\n        }\n        return null;\n    }\n\n    public function all(): array\n    {\n        return array_values($this->users);\n    }\n\n    public function save(User $user): User\n    {\n        if ($user->id === null) {\n            $user->id = $this->nextId++;\n            $this->users[$user->id] = $user;\n        } else {\n            $this->users[$user->id] = $user;\n        }\n        return $user;\n    }\n\n    public function delete(User $user): bool\n    {\n        if ($user->id !== null && isset($this->users[$user->id])) {\n            unset($this->users[$user->id]);\n            return true;\n        }\n        return false;\n    }\n\n    public function findActive(): array\n    {\n        return array_values(\n            array_filter($this->users, fn(User $u): bool => $u->active)\n        );\n    }\n}\n\n// Database implementation (production)\nclass DatabaseUserRepository implements UserRepositoryInterface\n{\n    public function __construct(\n        private \\PDO $pdo,\n    ) {}\n\n    public function find(int $id): ?User\n    {\n        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');\n        $stmt->execute([$id]);\n        $data = $stmt->fetch(\\PDO::FETCH_ASSOC);\n        return $data ? $this->hydrate($data) : null;\n    }\n\n    public function findByEmail(string $email): ?User\n    {\n        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = ?');\n        $stmt->execute([$email]);\n        $data = $stmt->fetch(\\PDO::FETCH_ASSOC);\n        return $data ? $this->hydrate($data) : null;\n    }\n\n    public function all(): array\n    {\n        $stmt = $this->pdo->query('SELECT * FROM users');\n        return array_map(fn(array $row): User => $this->hydrate($row), $stmt->fetchAll(\\PDO::FETCH_ASSOC));\n    }\n\n    public function save(User $user): User\n    {\n        if ($user->id === null) {\n            $stmt = $this->pdo->prepare(\n                'INSERT INTO users (name, email, active, created_at) VALUES (?, ?, ?, ?)'\n            );\n            $stmt->execute([$user->name, $user->email, $user->active ? 1 : 0, $user->createdAt]);\n            $user->id = (int) $this->pdo->lastInsertId();\n        } else {\n            $stmt = $this->pdo->prepare(\n                'UPDATE users SET name = ?, email = ?, active = ? WHERE id = ?'\n            );\n            $stmt->execute([$user->name, $user->email, $user->active ? 1 : 0, $user->id]);\n        }\n        return $user;\n    }\n\n    public function delete(User $user): bool\n    {\n        $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = ?');\n        return $stmt->execute([$user->id]);\n    }\n\n    public function findActive(): array\n    {\n        $stmt = $this->pdo->query('SELECT * FROM users WHERE active = 1');\n        return array_map(\n            fn(array $row): User => $this->hydrate($row),\n            $stmt->fetchAll(\\PDO::FETCH_ASSOC)\n        );\n    }\n\n    private function hydrate(array $data): User\n    {\n        return new User(\n            id: (int) $data['id'],\n            name: $data['name'],\n            email: $data['email'],\n            active: (bool) $data['active'],\n            createdAt: $data['created_at'],\n        );\n    }\n}\n\n// Service using the repository\nclass UserService\n{\n    public function __construct(\n        private UserRepositoryInterface $users,\n    ) {}\n\n    public function register(string $name, string $email): User\n    {\n        $existing = $this->users->findByEmail($email);\n        if ($existing !== null) {\n            throw new \\RuntimeException('Email already registered');\n        }\n        return $this->users->save(new User(null, $name, $email));\n    }\n\n    public function deactivate(int $id): void\n    {\n        $user = $this->users->find($id);\n        if ($user === null) {\n            throw new \\RuntimeException('User not found');\n        }\n        $user->active = false;\n        $this->users->save($user);\n    }\n\n    public function getActiveUsers(): array\n    {\n        return $this->users->findActive();\n    }\n}\n\n// Usage with in-memory repository\n$repo = new InMemoryUserRepository();\n$service = new UserService($repo);\n\n$alice = $service->register('Alice', 'alice@example.com');\n$bob = $service->register('Bob', 'bob@example.com');\n$service->deactivate($alice->id);\n\necho count($service->getActiveUsers()); // 1 (only Bob)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "193-strategy-pattern",
      children: "1.9.3 Strategy Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\n// Strategy interface\ninterface ShippingStrategy\n{\n    public function calculateCost(float $weight, string $destination): float;\n    public function getEstimatedDays(): int;\n    public function getName(): string;\n}\n\n// Concrete strategies\nclass StandardShipping implements ShippingStrategy\n{\n    public function calculateCost(float $weight, string $destination): float\n    {\n        return 5.99 + ($weight * 0.50);\n    }\n\n    public function getEstimatedDays(): int\n    {\n        return 5;\n    }\n\n    public function getName(): string\n    {\n        return 'Standard Shipping';\n    }\n}\n\nclass ExpressShipping implements ShippingStrategy\n{\n    public function calculateCost(float $weight, string $destination): float\n    {\n        return 14.99 + ($weight * 1.20);\n    }\n\n    public function getEstimatedDays(): int\n    {\n        return 2;\n    }\n\n    public function getName(): string\n    {\n        return 'Express Shipping';\n    }\n}\n\nclass OvernightShipping implements ShippingStrategy\n{\n    public function calculateCost(float $weight, string $destination): float\n    {\n        return 29.99 + ($weight * 2.50);\n    }\n\n    public function getEstimatedDays(): int\n    {\n        return 1;\n    }\n\n    public function getName(): string\n    {\n        return 'Overnight Shipping';\n    }\n}\n\nclass InternationalShipping implements ShippingStrategy\n{\n    private const ZONE_RATES = [\n        'NA' => ['base' => 15.00, 'per_kg' => 3.00, 'days' => 7],\n        'EU' => ['base' => 20.00, 'per_kg' => 4.00, 'days' => 5],\n        'AS' => ['base' => 25.00, 'per_kg' => 5.00, 'days' => 10],\n        'SA' => ['base' => 30.00, 'per_kg' => 6.00, 'days' => 12],\n        'AF' => ['base' => 35.00, 'per_kg' => 7.00, 'days' => 14],\n        'OC' => ['base' => 40.00, 'per_kg' => 8.00, 'days' => 14],\n    ];\n\n    private const COUNTRY_TO_ZONE = [\n        'US' => 'NA', 'CA' => 'NA', 'MX' => 'NA',\n        'GB' => 'EU', 'DE' => 'EU', 'FR' => 'EU', 'IT' => 'EU', 'ES' => 'EU',\n        'JP' => 'AS', 'CN' => 'AS', 'IN' => 'AS', 'KR' => 'AS',\n        'BR' => 'SA', 'AR' => 'SA',\n        'NG' => 'AF', 'ZA' => 'AF', 'KE' => 'AF',\n        'AU' => 'OC', 'NZ' => 'OC',\n    ];\n\n    private function getZone(string $destination): string\n    {\n        return self::COUNTRY_TO_ZONE[$destination] ?? 'AS';\n    }\n\n    public function calculateCost(float $weight, string $destination): float\n    {\n        $zone = $this->getZone($destination);\n        $rates = self::ZONE_RATES[$zone];\n        return $rates['base'] + ($weight * $rates['per_kg']);\n    }\n\n    public function getEstimatedDays(): int\n    {\n        return 14;\n    }\n\n    public function getName(): string\n    {\n        return 'International Shipping';\n    }\n}\n\n// Context class\nclass ShippingCalculator\n{\n    private ShippingStrategy $strategy;\n\n    public function __construct(?ShippingStrategy $strategy = null)\n    {\n        $this->strategy = $strategy ?? new StandardShipping();\n    }\n\n    public function setStrategy(ShippingStrategy $strategy): void\n    {\n        $this->strategy = $strategy;\n    }\n\n    public function calculate(float $weight, string $destination): array\n    {\n        return [\n            'method' => $this->strategy->getName(),\n            'cost' => $this->strategy->calculateCost($weight, $destination),\n            'estimated_days' => $this->strategy->getEstimatedDays(),\n            'weight' => $weight,\n            'destination' => $destination,\n        ];\n    }\n}\n\n// Strategy resolver\nclass ShippingStrategyResolver\n{\n    /** @var array<string, ShippingStrategy> */\n    private array $strategies;\n\n    public function __construct()\n    {\n        $this->strategies = [\n            'standard' => new StandardShipping(),\n            'express' => new ExpressShipping(),\n            'overnight' => new OvernightShipping(),\n            'international' => new InternationalShipping(),\n        ];\n    }\n\n    public function resolve(string $method): ShippingStrategy\n    {\n        return $this->strategies[$method]\n            ?? throw new \\InvalidArgumentException(\"Unknown shipping method: $method\");\n    }\n}\n\n// Usage\n$calculator = new ShippingCalculator();\n$resolver = new ShippingStrategyResolver();\n\n// Standard shipping\n$result = $calculator->calculate(2.5, 'US');\necho \"{$result['method']}: \\${$result['cost']}, {$result['estimated_days']} days\";\n// Standard Shipping: $7.24, 5 days\n\n// Switch to express\n$calculator->setStrategy($resolver->resolve('express'));\n$result = $calculator->calculate(2.5, 'US');\necho \"{$result['method']}: \\${$result['cost']}, {$result['estimated_days']} days\";\n// Express Shipping: $17.99, 2 days\n\n// International\n$international = new InternationalShipping();\n$calculator->setStrategy($international);\n$result = $calculator->calculate(2.5, 'JP');\necho \"{$result['method']}: \\${$result['cost']}, {$result['estimated_days']} days\";\n// International Shipping: $37.50, 14 days\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "194-singleton-pattern",
      children: "1.9.4 Singleton Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Singleton pattern ensures a class has only one instance. Laravel's service container manages singletons natively, but understanding the raw pattern is valuable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\ndeclare(strict_types=1);\n\nclass Logger\n{\n    private static ?Logger $instance = null;\n    private array $logs = [];\n    private string $logFile;\n\n    // Private constructor prevents direct instantiation\n    private function __construct(string $logFile = 'app.log')\n    {\n        $this->logFile = $logFile;\n    }\n\n    // Prevent cloning\n    private function __clone(): void {}\n\n    // Prevent unserialization\n    public function __wakeup(): void\n    {\n        throw new \\RuntimeException('Cannot unserialize singleton');\n    }\n\n    // Static method to get the single instance\n    public static function getInstance(string $logFile = 'app.log'): self\n    {\n        if (self::$instance === null) {\n            self::$instance = new self($logFile);\n        }\n        return self::$instance;\n    }\n\n    public function log(string $level, string $message): void\n    {\n        $entry = sprintf(\n            '[%s] [%s] %s',\n            date('Y-m-d H:i:s'),\n            strtoupper($level),\n            $message\n        );\n        $this->logs[] = $entry;\n        file_put_contents($this->logFile, $entry . PHP_EOL, FILE_APPEND | LOCK_EX);\n    }\n\n    public function getLogs(): array\n    {\n        return $this->logs;\n    }\n\n    public function clear(): void\n    {\n        $this->logs = [];\n    }\n}\n\n// Usage\n$logger1 = Logger::getInstance();\n$logger2 = Logger::getInstance();\n\nvar_dump($logger1 === $logger2); // true (same instance)\n\n$logger1->log('info', 'Application started');\n$logger1->log('error', 'Database connection failed');\n$logger1->log('info', 'Application stopped');\n\nprint_r($logger1->getLogs());\n// [\n//   '[2026-01-15 10:00:00] [INFO] Application started',\n//   '[2026-01-15 10:00:00] [ERROR] Database connection failed',\n//   '[2026-01-15 10:00:00] [INFO] Application stopped',\n// ]\n\n// Laravel's container manages singletons for you:\n// $this->app->singleton(Logger::class, function ($app) {\n//     return Logger::getInstance();\n// });\n// // Then use dependency injection:\n// public function __construct(private Logger $logger) {}\n\n// Improved singleton with configurable instance\nclass ConfigAwareSingleton\n{\n    private static array $instances = [];\n\n    private function __construct(\n        private readonly string $name,\n    ) {}\n\n    public static function getInstance(string $name): self\n    {\n        if (!isset(self::$instances[$name])) {\n            self::$instances[$name] = new self($name);\n        }\n        return self::$instances[$name];\n    }\n\n    public function getName(): string\n    {\n        return $this->name;\n    }\n}\n\n$db1 = ConfigAwareSingleton::getInstance('database');\n$db2 = ConfigAwareSingleton::getInstance('database');\n$cache1 = ConfigAwareSingleton::getInstance('cache');\n\nvar_dump($db1 === $db2);     // true\nvar_dump($db1 === $cache1);  // false (different named singletons)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key PHP concepts for Laravel development."]
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
            children: "Variables & Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store and manipulate data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic typing with type declarations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered data collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed + associative + array functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code organization and reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes, inheritance, interfaces, traits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Namespaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code organization and collision prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSR-4 autoloading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "require, autoload, scripts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use strict types (declare(strict_types=1)) in all new PHP files. It prevents subtle type coercion bugs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for PHP fundamentals."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PHP Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<?php, echo, semicolons, variables start with $"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, float, string, bool, array, object, null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP Keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class, extends, implements, abstract, final, trait"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly, enums, json_validate, override attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "composer init, require, install, update, dump-autoload"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " PSR-4 autoloading requires namespace-to-directory matching. A single mismatch causes cryptic class-not-found errors."]
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
            children: "Type System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict vs dynamic typing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance vs composition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Namespaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structure vs verbosity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse vs dependency conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application stability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceptions vs return codes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never use extract() on user input. It can overwrite existing variables and create security vulnerabilities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your PHP fundamentals knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " How do you declare a variable in PHP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) var name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) $name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) let name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) const name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) $name</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What does Composer's require command do?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Updates all packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Adds a package as a dependency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Removes a package"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Lists all packages"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Adds a package as a dependency</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " Which keyword is used to implement an interface?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) extends"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) implements"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) inherits"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) uses"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) implements</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What is the purpose of namespaces in PHP?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Speed optimization"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Organize code and prevent class name collisions"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Database connection"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) User authentication"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>B) Organize code and prevent class name collisions</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Compare key PHP concepts for Laravel development."]
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
                            children: "Variables & Types"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Store and manipulate data"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Dynamic typing with type declarations"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Arrays"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Ordered data collections"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Indexed + associative + array functions"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "OOP"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Code organization and reuse"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Classes, inheritance, interfaces, traits"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Namespaces"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Code organization and collision prevention"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "PSR-4 autoloading"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Composer"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Dependency management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "require, autoload, scripts"
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
                        }), " Quick reference for PHP fundamentals."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                            children: "PHP Syntax"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "<?php, echo, semicolons, variables start with $"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Data Types"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "int, float, string, bool, array, object, null"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "OOP Keywords"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "class, extends, implements, abstract, final, trait"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "PHP 8.3"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "readonly, enums, json_validate, override attribute"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Composer"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "composer init, require, install, update, dump-autoload"
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
                            children: "Type System"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Code reliability"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Strict vs dynamic typing"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "OOP"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Application architecture"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Inheritance vs composition"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Namespaces"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Code organization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Structure vs verbosity"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Composer"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Dependency management"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Reuse vs dependency conflicts"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Error Handling"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Application stability"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Exceptions vs return codes"
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
                        }), " Test your PHP fundamentals knowledge."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " How do you declare a variable in PHP?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) var name"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) $name"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) let name"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) const name"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>B) $name</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " What does Composer's require command do?"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) Updates all packages"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) Adds a package as a dependency"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) Removes a package"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) Lists all packages"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>B) Adds a package as a dependency</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " Which keyword is used to implement an interface?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) extends"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) implements"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) inherits"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) uses"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>B) implements</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Q4:"
                                  }), " What is the purpose of namespaces in PHP?"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "A) Speed optimization"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "B) Organize code and prevent class name collisions"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "C) Database connection"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "D) User authentication"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                    children: ["Answer</summary>B) Organize code and prevent class name collisions</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "concept-comparison-2",
                                      children: "Concept Comparison"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Compare key PHP concepts for Laravel development."]
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
                                            children: "Variables & Types"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Store and manipulate data"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Dynamic typing with type declarations"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Arrays"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Ordered data collections"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Indexed + associative + array functions"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "OOP"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Code organization and reuse"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Classes, inheritance, interfaces, traits"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Namespaces"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Code organization and collision prevention"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "PSR-4 autoloading"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Composer"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Dependency management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "require, autoload, scripts"
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
                                        }), " Quick reference for PHP fundamentals."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                            children: "PHP Syntax"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "<?php, echo, semicolons, variables start with $"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Data Types"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "int, float, string, bool, array, object, null"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "OOP Keywords"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "class, extends, implements, abstract, final, trait"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "PHP 8.3"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "readonly, enums, json_validate, override attribute"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Composer"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "composer init, require, install, update, dump-autoload"
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
                                            children: "Type System"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Code reliability"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Strict vs dynamic typing"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "OOP"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Application architecture"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Inheritance vs composition"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Namespaces"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Code organization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Structure vs verbosity"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Composer"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Dependency management"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Reuse vs dependency conflicts"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Error Handling"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Application stability"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Exceptions vs return codes"
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
                                        }), " Test your PHP fundamentals knowledge."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Q1:"
                                      }), " How do you declare a variable in PHP?"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "A) var name"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "B) $name"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "C) let name"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "D) const name"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                        children: ["Answer</summary>B) $name</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: "Q2:"
                                          }), " What does Composer's require command do?"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "A) Updates all packages"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "B) Adds a package as a dependency"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "C) Removes a package"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "D) Lists all packages"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                            children: ["Answer</summary>B) Adds a package as a dependency</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                children: "Q3:"
                                              }), " Which keyword is used to implement an interface?"]
                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "A) extends"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "B) implements"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "C) inherits"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "D) uses"
                                              }), "\n"]
                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                children: ["Answer</summary>B) implements</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "Q4:"
                                                  }), " What is the purpose of namespaces in PHP?"]
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "A) Speed optimization"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "B) Organize code and prevent class name collisions"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "C) Database connection"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "D) User authentication"
                                                  }), "\n"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                    children: ["Answer</summary>B) Organize code and prevent class name collisions</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "concept-comparison-3",
                                                      children: "Concept Comparison"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Compare key PHP concepts for Laravel development."]
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
                                                            children: "Variables & Types"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Store and manipulate data"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Dynamic typing with type declarations"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Arrays"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Ordered data collections"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Indexed + associative + array functions"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "OOP"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Code organization and reuse"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Classes, inheritance, interfaces, traits"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Namespaces"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Code organization and collision prevention"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "PSR-4 autoloading"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Composer"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Dependency management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "require, autoload, scripts"
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
                                                        }), " Quick reference for PHP fundamentals."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                                            children: "PHP Syntax"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "<?php, echo, semicolons, variables start with $"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Data Types"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "int, float, string, bool, array, object, null"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "OOP Keywords"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "class, extends, implements, abstract, final, trait"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "PHP 8.3"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "readonly, enums, json_validate, override attribute"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Composer"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "composer init, require, install, update, dump-autoload"
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
                                                            children: "Type System"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Code reliability"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Strict vs dynamic typing"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "OOP"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Application architecture"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Inheritance vs composition"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Namespaces"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Code organization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Structure vs verbosity"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Composer"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Dependency management"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Reuse vs dependency conflicts"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Error Handling"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Application stability"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Exceptions vs return codes"
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
                                                        }), " Test your PHP fundamentals knowledge."]
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                        children: "Q1:"
                                                      }), " How do you declare a variable in PHP?"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "A) var name"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "B) $name"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "C) let name"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "D) const name"
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                        children: ["Answer</summary>B) $name</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                            children: "Q2:"
                                                          }), " What does Composer's require command do?"]
                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "A) Updates all packages"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "B) Adds a package as a dependency"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "C) Removes a package"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "D) Lists all packages"
                                                          }), "\n"]
                                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                            children: ["Answer</summary>B) Adds a package as a dependency</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                children: "Q3:"
                                                              }), " Which keyword is used to implement an interface?"]
                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "A) extends"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "B) implements"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "C) inherits"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "D) uses"
                                                              }), "\n"]
                                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                children: ["Answer</summary>B) implements</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                    children: "Q4:"
                                                                  }), " What is the purpose of namespaces in PHP?"]
                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "A) Speed optimization"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "B) Organize code and prevent class name collisions"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "C) Database connection"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "D) User authentication"
                                                                  }), "\n"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                    children: ["Answer</summary>B) Organize code and prevent class name collisions</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "summary",
                                                                      children: "Summary"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["PHP uses ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "$"
                                                                        }), "-prefixed variables, supports 8 primitive types, and performs implicit type juggling; ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "declare(strict_types=1)"
                                                                        }), " disables coercion for function calls within that file."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["Arrays are ordered maps supporting both integer and string keys; functional helpers like ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "array_map"
                                                                        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "array_filter"
                                                                        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "array_reduce"
                                                                        }), " enable declarative data processing without explicit loops."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["Functions support optional parameters, variadic arguments with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "..."
                                                                        }), ", arrow functions with implicit by-value capture, and named arguments that skip defaults in any order."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["OOP in PHP includes constructor property promotion (PHP 8.0+), abstract classes, interfaces (with multiple implementation), and traits for horizontal method reuse with conflict resolution via ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "insteadof"
                                                                        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "as"
                                                                        }), "."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["Namespaces map to PSR-4 directory structures using Composer autoloading; ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "use"
                                                                        }), " statements import classes, functions, and constants with optional aliasing."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["Exception handling uses ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "try"
                                                                        }), "/", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "catch"
                                                                        }), "/", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "finally"
                                                                        }), " blocks, custom exception classes extending ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "\\RuntimeException"
                                                                        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "\\Exception"
                                                                        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "set_error_handler"
                                                                        }), " to convert PHP errors to ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "ErrorException"
                                                                        }), "."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["Composer manages dependencies and autoloading via ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "composer.json"
                                                                        }), "; the ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "composer.lock"
                                                                        }), " file ensures deterministic installs; ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "composer dump-autoload -o"
                                                                        }), " optimizes class loading for production."]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["PHP 8.3 features include ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "json_validate"
                                                                        }), " for efficient JSON validation, dynamic class constant fetch with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "ClassName::{$name}"
                                                                        }), ", readonly classes (PHP 8.2+), backed and pure enums, and typed properties."]
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "Design patterns like Factory (object creation delegation), Repository (data access abstraction), Strategy (interchangeable algorithms), and Singleton (single instance control) are foundational to Laravel's architecture and should be used where appropriate, not as dogma."
                                                                      }), "\n"]
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
                                                                            children: "=="
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "==="
                                                                          }), " in PHP? Provide an example where they produce different results."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "declare(strict_types=1)"
                                                                          }), " change PHP's behavior? Why does it only affect the file where it appears?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "array_reduce"
                                                                          }), " do? Explain its signature and provide a use case where it is more appropriate than a foreach loop."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "Explain the difference between an abstract class and an interface. When would you choose one over the other?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "How do traits resolve method name conflicts? What keywords handle conflict resolution?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is PSR-4 autoloading and how does Composer implement it? What is the relationship between namespace ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "App\\Models\\User"
                                                                          }), " and the file path where the class is stored?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["Describe the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Exception"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "\\Throwable"
                                                                          }), ". Why might you catch ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "\\Throwable"
                                                                          }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "\\Exception"
                                                                          }), "?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "composer install"
                                                                          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "composer update"
                                                                          }), "? When should each be used?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "json_validate()"
                                                                          }), " in PHP 8.3 improve upon ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "json_decode()"
                                                                          }), " followed by ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "json_last_error()"
                                                                          }), "?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What is the Strategy pattern? Name a real-world Laravel scenario where the Strategy pattern would be appropriate."
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "application-problems",
                                                                      children: "Application Problems"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Strict Type Calculator"
                                                                          }), ": Write a class ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Calculator"
                                                                          }), " with methods ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "add"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "subtract"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "multiply"
                                                                          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "divide"
                                                                          }), ". Each method must use strict type declarations (int parameters, return types). The ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "divide"
                                                                          }), " method must throw a custom ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "DivisionByZeroException"
                                                                          }), " when the divisor is zero. Include both an interface ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "CalculatorInterface"
                                                                          }), " and an implementation."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Functional Array Processing"
                                                                          }), ": Given an array of associative arrays representing products — each with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "name"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "price"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "category"
                                                                          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "in_stock"
                                                                          }), " (boolean) — write PHP code that:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Filters to only in-stock items"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Applies a 10% discount to the price"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Groups the resulting items by category"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Returns the average price per category"
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Use only ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "array_filter"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "array_map"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "array_reduce"
                                                                            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "array_map"
                                                                            }), " — no foreach loops."]
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Namespace and Autoloading Setup"
                                                                          }), ": Create the complete file structure for a PHP project with:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Namespace ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "App\\Domain\\Models"
                                                                            }), " containing a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Customer"
                                                                            }), " class with constructor property promotion for ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "name"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "email"
                                                                            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "loyaltyPoints"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Namespace ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "App\\Domain\\Repositories"
                                                                            }), " containing a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "CustomerRepository"
                                                                            }), " interface and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "InMemoryCustomerRepository"
                                                                            }), " implementation"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "composer.json"
                                                                            }), " with proper PSR-4 autoloading"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Write the ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "composer.json"
                                                                            }), " and all PHP files with complete implementations."]
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Enum-backed State Machine"
                                                                          }), ": Implement an order workflow using a PHP backed enum ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "OrderState"
                                                                          }), " with states: ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Pending"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Confirmed"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Processing"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Shipped"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Delivered"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Cancelled"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Returned"
                                                                          }), ". Each state must define which transitions are valid. Include a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "canTransitionTo(OrderState $target): bool"
                                                                          }), " method and a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "transition(OrderState $target): OrderState"
                                                                          }), " method that throws an ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "InvalidTransitionException"
                                                                          }), " on invalid transitions."]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Custom Exception Hierarchy"
                                                                          }), ": Design and implement a validation exception hierarchy for a user registration system:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Base ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ValidationException"
                                                                            }), " extending ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "\\InvalidArgumentException"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "EmailAlreadyExistsException"
                                                                            }), " with the conflicting email stored"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "WeakPasswordException"
                                                                            }), " listing which password rules were violated"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ValidationResult"
                                                                            }), " class that collects multiple exceptions and throws them as a single ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ValidationException"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Demonstrate usage with a complete try/catch example."
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "challenge-problems",
                                                                      children: "Challenge Problems"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Typed Collection Class"
                                                                          }), ": Implement a generic ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Collection"
                                                                          }), " class in PHP that:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Stores elements of a single type (enforced at runtime via ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "assert"
                                                                            }), " or type checks)"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "map(callable): Collection"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "filter(callable): Collection"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "reduce(callable, mixed): mixed"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "first(): mixed"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "last(): mixed"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "count(): int"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "toArray(): array"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Implements ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ArrayAccess"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "IteratorAggregate"
                                                                            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Countable"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Has static factory methods ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "fromArray(array $items): Collection"
                                                                            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "range(int $from, int $to): Collection"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Provide a complete implementation with documentation and a demonstration script that exercises every method."
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Repository Pattern with Multiple Storage Backends"
                                                                          }), ": Build a complete ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "ProductRepository"
                                                                          }), " system with:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "Product"
                                                                            }), " readonly class with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "id"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "name"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "price"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "sku"
                                                                            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "createdAt"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ProductRepositoryInterface"
                                                                            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "find(int $id): ?Product"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "findBySku(string $sku): ?Product"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "all(): array"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "save(Product): Product"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "delete(int $id): bool"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "search(string $query): array"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["Three implementations: ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "InMemoryProductRepository"
                                                                            }), " (testing), ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "JsonFileProductRepository"
                                                                            }), " (persists to a JSON file), ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "CachedProductRepository"
                                                                            }), " (decorator wrapping another repository with an in-memory cache)"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "ProductService"
                                                                            }), " that uses the repository with a ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "batchImport(array $products): array"
                                                                            }), " method returning count of successful and failed imports"]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Tests demonstrating switching between all three repository implementations without changing service code."
                                                                          }), "\n"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                            children: "Strategy + Factory + Repository Integration"
                                                                          }), ": Build a complete notification system:"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "NotificationChannel"
                                                                            }), " interface with ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "send(string $recipient, string $subject, string $body): NotificationResult"
                                                                            })]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "EmailChannel"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "SMSChannel"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "PushNotificationChannel"
                                                                            }), " implementations (simulated)"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "NotificationFactory"
                                                                            }), " that creates the appropriate channel based on configuration"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "NotificationRepository"
                                                                            }), " interface with implementations for storing notification history"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: [(0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "NotificationService"
                                                                            }), " that sends notifications, stores results, and implements retry logic (up to 3 retries with exponential backoff)"]
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Use the Strategy pattern for selecting the channel, Factory for creating channels, Repository for storage"
                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "Include complete error handling with custom exceptions for delivery failures, rate limiting, and invalid recipients"
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