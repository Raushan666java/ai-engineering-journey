"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[17110],{

/***/ 58553
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_13_preprocessor_md_bc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-13-preprocessor-md-bc8.json
const site_docs_courses_c_programming_13_preprocessor_md_bc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/13-preprocessor","title":"Chapter 13: The Preprocessor","description":"Previous Recursion","source":"@site/docs/courses/c-programming/13-preprocessor.md","sourceDirName":"courses/c-programming","slug":"/c-programming/13-preprocessor","permalink":"/ai-engineering-journey/c-programming/13-preprocessor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-preprocessor","slug":"/c-programming/13-preprocessor","title":"Chapter 13: The Preprocessor","sidebar_label":"Chapter 13: The Preprocessor","sidebar_position":13},"sidebar":"coursesSidebar","previous":{"title":"Chapter 12: File Handling","permalink":"/ai-engineering-journey/c-programming/12-file-handling"},"next":{"title":"Chapter 14: Recursion","permalink":"/ai-engineering-journey/c-programming/14-recursion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/13-preprocessor.md


const frontMatter = {
	id: '13-preprocessor',
	slug: '/c-programming/13-preprocessor',
	title: 'Chapter 13: The Preprocessor',
	sidebar_label: 'Chapter 13: The Preprocessor',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: The Preprocessor';

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
  "level": 3
}, {
  "value": "13.1 The Preprocessor&#39;s Role",
  "id": "131-the-preprocessors-role",
  "level": 2
}, {
  "value": "Real-World Analogy: Kitchen Prep Station",
  "id": "real-world-analogy-kitchen-prep-station",
  "level": 3
}, {
  "value": "Numbered Steps of Preprocessing",
  "id": "numbered-steps-of-preprocessing",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "13.2 <code>#include</code> — File Inclusion",
  "id": "132-include--file-inclusion",
  "level": 2
}, {
  "value": "Real-World Analogy: Copy-Paste from Reference Book",
  "id": "real-world-analogy-copy-paste-from-reference-book",
  "level": 3
}, {
  "value": "Search Path Rules",
  "id": "search-path-rules",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace",
  "level": 3
}, {
  "value": "Nested Include Resolution",
  "id": "nested-include-resolution",
  "level": 3
}, {
  "value": "Example with Output",
  "id": "example-with-output",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "13.3 <code>#define</code> — Object-like Macros",
  "id": "133-define--object-like-macros",
  "level": 2
}, {
  "value": "Real-World Analogy: Find-and-Replace All",
  "id": "real-world-analogy-find-and-replace-all",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace-1",
  "level": 3
}, {
  "value": "Example with Output",
  "id": "example-with-output-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "13.4 <code>#define</code> — Function-like Macros",
  "id": "134-define--function-like-macros",
  "level": 2
}, {
  "value": "Real-World Analogy: Recipe Template with Blanks",
  "id": "real-world-analogy-recipe-template-with-blanks",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 3
}, {
  "value": "Critical: The Space-Before-Paren Trap",
  "id": "critical-the-space-before-paren-trap",
  "level": 3
}, {
  "value": "Why Parentheses Matter",
  "id": "why-parentheses-matter",
  "level": 3
}, {
  "value": "Dry Run Trace — With vs Without Parentheses",
  "id": "dry-run-trace--with-vs-without-parentheses",
  "level": 3
}, {
  "value": "Example with Output",
  "id": "example-with-output-2",
  "level": 3
}, {
  "value": "Multi-Statement Macros",
  "id": "multi-statement-macros",
  "level": 3
}, {
  "value": "Variadic Macros (C99)",
  "id": "variadic-macros-c99",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "13.5 Macros vs Functions — Comparison",
  "id": "135-macros-vs-functions--comparison",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Decision Guide",
  "id": "decision-guide",
  "level": 3
}, {
  "value": "13.6 <code>#define</code> vs <code>const</code> vs <code>enum</code> — Comparison",
  "id": "136-define-vs-const-vs-enum--comparison",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Example Demonstrating Differences",
  "id": "example-demonstrating-differences",
  "level": 3
}, {
  "value": "When to Use What",
  "id": "when-to-use-what",
  "level": 3
}, {
  "value": "13.7 <code>#undef</code>",
  "id": "137-undef",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "13.8 Conditional Compilation",
  "id": "138-conditional-compilation",
  "level": 2
}, {
  "value": "Real-World Analogy: Light Switch / Router Configuration",
  "id": "real-world-analogy-light-switch--router-configuration",
  "level": 3
}, {
  "value": "13.8.1 Directives Overview",
  "id": "1381-directives-overview",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "13.8.2 <code>#ifdef</code> and <code>#ifndef</code>",
  "id": "1382-ifdef-and-ifndef",
  "level": 3
}, {
  "value": "Dry Run Trace — <code>#ifdef</code>/<code>#ifndef</code>",
  "id": "dry-run-trace--ifdefifndef",
  "level": 3
}, {
  "value": "13.8.3 <code>#if</code> and <code>#elif</code>",
  "id": "1383-if-and-elif",
  "level": 3
}, {
  "value": "Dry Run Trace — <code>#if</code>/<code>#elif</code>/<code>#else</code>",
  "id": "dry-run-trace--ifelifelse",
  "level": 3
}, {
  "value": "13.8.4 <code>#if defined(...)</code>",
  "id": "1384-if-defined",
  "level": 3
}, {
  "value": "13.8.5 Use Cases",
  "id": "1385-use-cases",
  "level": 3
}, {
  "value": "Platform Detection",
  "id": "platform-detection",
  "level": 4
}, {
  "value": "Debug Builds",
  "id": "debug-builds",
  "level": 4
}, {
  "value": "Header Guards",
  "id": "header-guards",
  "level": 4
}, {
  "value": "13.8.6 <code>#pragma once</code> vs <code>#ifndef</code> — Comparison",
  "id": "1386-pragma-once-vs-ifndef--comparison",
  "level": 3
}, {
  "value": "13.8.7 Nested Conditional Compilation",
  "id": "1387-nested-conditional-compilation",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "13.9 <code>#pragma</code>",
  "id": "139-pragma",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Common Pragmas",
  "id": "common-pragmas",
  "level": 3
}, {
  "value": "<code>_Pragma()</code> Operator (C99)",
  "id": "_pragma-operator-c99",
  "level": 3
}, {
  "value": "Example with Output",
  "id": "example-with-output-3",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-3",
  "level": 3
}, {
  "value": "13.10 <code>#error</code>",
  "id": "1310-error",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Syntax and Example",
  "id": "syntax-and-example",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases-1",
  "level": 3
}, {
  "value": "Example",
  "id": "example",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-4",
  "level": 3
}, {
  "value": "13.11 <code>#line</code>",
  "id": "1311-line",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax",
  "level": 3
}, {
  "value": "Example",
  "id": "example-1",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases-2",
  "level": 3
}, {
  "value": "13.12 <code>#</code> and <code>##</code> Operators",
  "id": "1312--and--operators",
  "level": 2
}, {
  "value": "13.12.1 Stringification (<code>#</code>)",
  "id": "13121-stringification-",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Detailed Expansion",
  "id": "detailed-expansion",
  "level": 3
}, {
  "value": "Dry Run Trace — Stringification",
  "id": "dry-run-trace--stringification",
  "level": 3
}, {
  "value": "Stringification with Spaces",
  "id": "stringification-with-spaces",
  "level": 3
}, {
  "value": "13.12.2 Token Pasting (<code>##</code>)",
  "id": "13122-token-pasting-",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Practical Examples",
  "id": "practical-examples",
  "level": 3
}, {
  "value": "Type-Generic Operations (Before C11 <code>_Generic</code>)",
  "id": "type-generic-operations-before-c11-_generic",
  "level": 4
}, {
  "value": "X Macros Pattern",
  "id": "x-macros-pattern",
  "level": 4
}, {
  "value": "Combining <code>#</code> and <code>##</code>",
  "id": "combining--and-",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "13.13 Predefined Macros",
  "id": "1313-predefined-macros",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Complete Table",
  "id": "complete-table",
  "level": 3
}, {
  "value": "Example with Output",
  "id": "example-with-output-4",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases-3",
  "level": 3
}, {
  "value": "Debug Logging",
  "id": "debug-logging",
  "level": 4
}, {
  "value": "Static Assertions",
  "id": "static-assertions",
  "level": 4
}, {
  "value": "Version Checking",
  "id": "version-checking",
  "level": 4
}, {
  "value": "C/C++ Compatibility",
  "id": "cc-compatibility",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "13.14 Macro Pitfalls",
  "id": "1314-macro-pitfalls",
  "level": 2
}, {
  "value": "1. Side Effects from Double Evaluation",
  "id": "1-side-effects-from-double-evaluation",
  "level": 3
}, {
  "value": "2. Missing Parentheses",
  "id": "2-missing-parentheses",
  "level": 3
}, {
  "value": "3. Semicolon Swallowing",
  "id": "3-semicolon-swallowing",
  "level": 3
}, {
  "value": "4. No Type Safety",
  "id": "4-no-type-safety",
  "level": 3
}, {
  "value": "5. Debugging Difficulty",
  "id": "5-debugging-difficulty",
  "level": 3
}, {
  "value": "6. Dangling Else",
  "id": "6-dangling-else",
  "level": 3
}, {
  "value": "7. Name Collisions",
  "id": "7-name-collisions",
  "level": 3
}, {
  "value": "Pitfalls at a Glance",
  "id": "pitfalls-at-a-glance",
  "level": 3
}, {
  "value": "13.15 Interview Corner",
  "id": "1315-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between a macro and an inline function?",
  "id": "q1-what-is-the-difference-between-a-macro-and-an-inline-function",
  "level": 3
}, {
  "value": "Q2: What are macro side effects and how do you prevent them?",
  "id": "q2-what-are-macro-side-effects-and-how-do-you-prevent-them",
  "level": 3
}, {
  "value": "Q3: Explain the <code>#</code> and <code>##</code> preprocessor operators with examples.",
  "id": "q3-explain-the--and--preprocessor-operators-with-examples",
  "level": 3
}, {
  "value": "Q4: Is <code>#pragma once</code> portable? Should I use it?",
  "id": "q4-is-pragma-once-portable-should-i-use-it",
  "level": 3
}, {
  "value": "Q5: What are X macros? Provide an example.",
  "id": "q5-what-are-x-macros-provide-an-example",
  "level": 3
}, {
  "value": "Q6: Can macros be recursive?",
  "id": "q6-can-macros-be-recursive",
  "level": 3
}, {
  "value": "Q7: What is the difference between <code>#ifdef MACRO</code> and <code>#if defined(MACRO)</code>?",
  "id": "q7-what-is-the-difference-between-ifdef-macro-and-if-definedmacro",
  "level": 3
}, {
  "value": "Q8: How do you create a debug print macro that includes file and line info?",
  "id": "q8-how-do-you-create-a-debug-print-macro-that-includes-file-and-line-info",
  "level": 3
}, {
  "value": "Q9: Explain the <code>do { ... } while (0)</code> pattern.",
  "id": "q9-explain-the-do----while-0-pattern",
  "level": 3
}, {
  "value": "Q10: What is the purpose of <code>#line</code> directive?",
  "id": "q10-what-is-the-purpose-of-line-directive",
  "level": 3
}, {
  "value": "13.16 Applications in Real Systems",
  "id": "1316-applications-in-real-systems",
  "level": 2
}, {
  "value": "13.16.1 The Linux Kernel — <code>container_of</code> Macro",
  "id": "13161-the-linux-kernel--container_of-macro",
  "level": 3
}, {
  "value": "13.16.2 Assertion Macros",
  "id": "13162-assertion-macros",
  "level": 3
}, {
  "value": "13.16.3 Debug Logging Infrastructure",
  "id": "13163-debug-logging-infrastructure",
  "level": 3
}, {
  "value": "13.16.4 Platform-Specific Code",
  "id": "13164-platform-specific-code",
  "level": 3
}, {
  "value": "13.16.5 Unit Test Framework",
  "id": "13165-unit-test-framework",
  "level": 3
}, {
  "value": "13.16.6 API Export/Import Macros",
  "id": "13166-api-exportimport-macros",
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
    em: "em",
    file: "file",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-13-the-preprocessor",
        children: "Chapter 13: The Preprocessor"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/12-file-handling",
          children: "File Handling"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/14-recursion",
          children: "Recursion"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the preprocessing phase and its role in compilation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define and use object-like and function-like macros with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guard header files against multiple inclusion"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use conditional compilation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), ") for portability and debugging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand the dangers of macros and the alternative of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and inline functions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use predefined standard macros"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#error"
        }), " directives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Master the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), " stringification and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), " token-pasting operators"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish when to use macros vs functions vs const vs enum"
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
        href: "../../assets/images/lessons/c-programming/13-preprocessor/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/13-preprocessor/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/13-preprocessor/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/13-preprocessor/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/13-preprocessor/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/13-preprocessor/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Preprocessor Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Textual transformation before compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand the 4-phase translation model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#include"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes the contents of another file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<>"
            }), " for system headers and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            }), " for project headers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#define (Object-like)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple textual substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for constants, guards, and configuration flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#define (Function-like)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized textual substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always parenthesize macro parameters and the overall expression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Compilation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#else"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for platform detection, debug builds, and header guards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "# and ## Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stringification (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), ") and token pasting (", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stringify turns a parameter into a quoted string; token pasting concatenates tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predefined Macros"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__LINE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__FILE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__DATE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__TIME__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__STDC__"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for debug logging, assertions, and version checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#pragma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler-specific instructions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            }), " for header guards"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"13.1 Preprocessor Overview\"] --> B[\"13.2 #include\"]\n    B --> C[\"13.3 #define (Object-like)\"]\n    C --> D[\"13.4 #define (Function-like)\"]\n    D --> E[\"13.5 Macros vs Functions\"]\n    E --> F[\"13.6 #define vs const vs enum\"]\n    F --> G[\"13.7 #undef\"]\n    G --> H[\"13.8 Conditional Compilation\"]\n    H --> I[\"13.9 #pragma\"]\n    I --> J[\"13.10 #error\"]\n    J --> K[\"13.11 #line\"]\n    K --> L[\"13.12 # and ## Operators\"]\n    L --> M[\"13.13 Predefined Macros\"]\n    M --> N[\"13.14 Macro Pitfalls\"]\n    N --> O[\"13.15 Interview Corner\"]\n    O --> P[\"13.16 Applications in Real Systems\"]\n    P --> Q[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-the-preprocessors-role",
      children: "13.1 The Preprocessor's Role"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The preprocessor runs as the first stage of compilation. It processes directives — lines beginning with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " — before the compiler sees the code. It is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "textual transformation engine"
      }), ", not a language parser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-kitchen-prep-station",
      children: "Real-World Analogy: Kitchen Prep Station"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A chef does not cook raw ingredients directly. First, vegetables are washed and chopped, spices are measured, and meat is marinated. These prep steps happen before any cooking begins. The preprocessor is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prep station"
      }), " of compilation — it arranges, substitutes, and conditions the source text before the compiler (the chef) starts cooking (compiling)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kitchen Prep"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preprocessor Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recipe says \"use stock\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stock.h>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitute \"butter\" everywhere for \"margarine\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define butter margarine"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"If using gas stove, preheat to 350\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef GAS_STOVE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write reminder on ingredient label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma message(\"Check expiry\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stop if missing ingredient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#error \"Butter required\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-preprocessing",
      children: "Numbered Steps of Preprocessing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigraph replacement"
        }), " — Replace trigraph sequences (deprecated in C17)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Line splicing"
        }), " — Join lines ending with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\"
        }), " (backslash-newline)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenization"
        }), " — Split source into preprocessing tokens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directive processing and macro expansion"
        }), " — Execute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), ", etc., and expand macros."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Whitespace stripping"
        }), " — Remove comment tokens, trim whitespace."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function preprocess(sourceText):\n    text = replace_trigraphs(sourceText)\n    text = splice_continuation_lines(text)\n    tokens = tokenize(text)\n    \n    while tokens remain:\n        token = next_token(tokens)\n        \n        if token is '#include <header>':\n            headerText = read_system_header(header)\n            insert headerText at current position\n        \n        elif token is '#include \"header\"':\n            headerText = read_user_header(header)\n            insert headerText at current position\n        \n        elif token is '#define MACRO replacement':\n            macro_table[MACRO] = replacement\n        \n        elif token is '#define MACRO(params) replacement':\n            macro_table[MACRO] = (params, replacement)\n        \n        elif token is '#ifdef MACRO':\n            push_condition(macro_table.contains(MACRO))\n        \n        elif token is '#if expression':\n            push_condition(evaluate(expression))\n        \n        elif token is '#else':\n            flip_current_condition()\n        \n        elif token is '#endif':\n            pop_condition()\n        \n        elif token is '#error message':\n            halt_with_error(message)\n        \n        elif token is identifier and token in macro_table:\n            expand_macro(token)\n        \n        else:\n            output(token)\n    \n    return output_text\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this input:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define PI 3.14159\n#define DOUBLE(x) ((x) * 2)\n\nint r = 5;\ndouble c = DOUBLE(r) * PI;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter directive mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PI"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add to macro table: PI → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14159"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14159"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replacement text stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter directive mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DOUBLE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add to macro table: DOUBLE(x) → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "((x) * 2)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parameter list ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " stored"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((x) * 2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replacement text stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro, not directive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "r"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check macro table — not found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "r"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DOUBLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found in macro table! Enter expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begin argument collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "r"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Argument ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "r"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DOUBLE(r)"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "((r) * 2)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((r) * 2)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found in macro table!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PI"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14159"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14159"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int r = 5;\ndouble c = ((r) * 2) * 3.14159;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line splicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro table insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) for m macros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro expansion (single)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) for k chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro expansion (recursive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(∞) without guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(stack depth)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#include resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f) for f file size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d) for d nesting depth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero runtime overhead — all substitution happens at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging is hard — error messages reference expanded code, not source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform code via conditional compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type safety in function-like macros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can create compile-time constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects from argument re-evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token pasting enables code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing parentheses cause precedence bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stringification for log/assert macros"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No scoping — macros are global and leak across files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic macros for flexible logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be pointed to (no function pointers to macros)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header guards prevent redefinition errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive expansion risk (most compilers stop after one level)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigraphs"
        }), " (removed in C17): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "??="
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "??/"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\"
        }), ". Rare but can confuse old code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backslash-newline splicing"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\"
        }), " at end of line joins with next line. Inside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "//"
        }), " comments, this can swallow the next line."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty macro"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define EMPTY"
        }), " — expands to nothing. Useful for conditional checks without value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Macro redefinition"
        }), ": Most compilers allow redefinition if the replacement text is identical; otherwise warning/error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum line length"
        }), ": C standard requires 4095 characters per logical line after splicing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "132-include--file-inclusion",
      children: ["13.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include"
      }), " — File Inclusion"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-copy-paste-from-reference-book",
      children: "Real-World Analogy: Copy-Paste from Reference Book"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine writing a report and needing the definition of \"binary search tree.\" Instead of rewriting it by hand, you photocopy the page from a textbook and paste it into your report. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include"
      }), " does exactly this — it copies the entire contents of a file and pastes them into your source file at the exact point of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include"
      }), " directive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search-path-rules",
      children: "Search Path Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>      /* system header — searches standard include paths */\n#include \"myheader.h\"    /* user header — searches current directory first */\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <...>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler's standard include directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard library, system headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"...\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current source directory, then standard include directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project headers, third-party local headers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preprocessor encounters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), " directive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extracts the filename between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), ": search current source directory first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If not found (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), "), search system include paths."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found: open file, read entire content, splice it at the directive location."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not found: emit fatal compilation error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process the included file recursively (nested includes)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function handle_include(directive, filename):\n    if directive is '<>':\n        paths = system_include_paths\n    else:\n        paths = [current_directory] + system_include_paths\n    \n    for path in paths:\n        full_path = path + '/' + filename\n        if file_exists(full_path):\n            content = read_file(full_path)\n            push_include_guard(full_path)\n            preprocess(content)\n            pop_include_guard()\n            return\n    \n    error(\"fatal error: \" + filename + \": No such file or directory\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace",
      children: "Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Source file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main.c"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include \"config.h\"\nint main() { return VERSION; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Header file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config.h"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifndef CONFIG_H\n#define CONFIG_H\n#define VERSION 42\n#endif\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"config.h\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search current dir → found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open and start preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef CONFIG_H"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONFIG_H not defined → enter block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define CONFIG_H"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add CONFIG_H to macro table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define VERSION 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add VERSION → 42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End conditional block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close file, return to main.c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resume: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int main() { return VERSION; }"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expand ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Final:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int main() { return 42; }"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nested-include-resolution",
      children: "Nested Include Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* a.h */ #include \"b.h\"  → finds b.h → processes → returns\n/* b.h */ #include \"c.h\"  → finds c.h → processes → returns\n/* c.h */ #define LIMIT 100\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The preprocessor maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file stack"
      }), " — each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include"
      }), " pushes a new file context; EOF pops back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-with-output",
      children: "Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include \"mydefs.h\"   /* suppose this defines GREETING \"Hello from mydefs!\" */\n\nint main(void)\n{\n    printf(\"%s\\n\", GREETING);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hello from mydefs!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular includes"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.h"
        }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b.h"
        }), " which includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.h"
        }), " — causes infinite recursion without header guards. The preprocessor would stack-overflow or hit file-descriptor limits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing file"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include \"nonexistent.h\""
        }), " → compilation error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-header files"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include \"data.txt\""
        }), " — valid but poor practice. The preprocessor doesn't care about file extension."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum nesting"
        }), ": C99 requires at least 15 levels of nested inclusion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include guard collision"
        }), ": Two different headers using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef HEADER_H"
        }), " — the first included \"wins\" and the second gets silently skipped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "133-define--object-like-macros",
      children: ["13.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " — Object-like Macros"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-find-and-replace-all",
      children: "Real-World Analogy: Find-and-Replace All"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your teacher tells the class \"whenever I say 'device', write 'mobile phone'.\" Every time you hear \"device,\" you automatically substitute \"mobile phone\" in your notes. This is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object-like macro"
      }), " — wherever the preprocessor sees the macro name, it replaces it with the replacement text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define PI 3.1415926535\n#define MAX_BUFFER 4096\n#define PROGRAM_NAME \"My Application\"\n#define DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preprocessor encounters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define MACRO replacement"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stores ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MACRO"
        }), " as a key in the macro table with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "replacement"
        }), " as value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For every subsequent token matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MACRO"
        }), ", replace it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "replacement"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue scanning the replacement text for further macros (recursive expansion)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#undef MACRO"
        }), " is encountered, remove the entry from the table."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function handle_define_OBJECT_LIKE(token_stream):\n    name = next_token(token_stream)  // macro name\n    replacement = remaining_tokens(token_stream)  // rest of line\n    \n    macro_table[name] = {\n        type: OBJECT_LIKE,\n        replacement: replacement\n    }\n\nfunction expand_macro(name):\n    entry = macro_table[name]\n    if entry.type == OBJECT_LIKE:\n        return entry.replacement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-1",
      children: "Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Source:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define API_VERSION 2024\n#define MSG \"Welcome v\" /* concat won't work here */\nint v = API_VERSION;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start directive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "API_VERSION"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Store in table: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "API_VERSION"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2024"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start directive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MSG"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Store in table: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MSG"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Welcome v\""
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "API_VERSION"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Macro found! Look up → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2024"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2024"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expanded output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int v = 2024;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-with-output-1",
      children: "Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define PI 3.14159\n#define RADIUS 5.0\n#define FORMAT \"Area = %.2f\\n\"\n\nint main(void)\n{\n    double area = PI * RADIUS * RADIUS;\n    printf(FORMAT, area);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Area = 78.54\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) insertion into hash table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average, O(m) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = length of replacement text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r) where r = characters in replacement text"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-1",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time constant — no runtime cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Works in preprocessor conditions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#if"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be scoped to a block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be undefined and redefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global — affects entire translation unit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for include guards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible to debugger symbols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause hard-to-find bugs with unintended substitution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive macro (stopped)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define REC REC"
        }), " — the preprocessor will not expand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REC"
        }), " recursively. It marks it as \"currently expanding\" and stops. No infinite loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redefinition"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define X 1"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define X 2"
        }), " — most compilers warn unless the definition is identical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty definition"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define FLAG"
        }), " — defines FLAG as empty. Useful with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), " for feature detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Macro in macro replacement"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define TWO 2"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define FOUR TWO"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FOUR"
        }), " expands to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TWO"
        }), " then to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semicolon in macro"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define PI 3.14;"
        }), " — now ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = PI * 2;"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = 3.14; * 2;"
        }), " — syntax error."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "134-define--function-like-macros",
      children: ["13.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " — Function-like Macros"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-recipe-template-with-blanks",
      children: "Real-World Analogy: Recipe Template with Blanks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A recipe card says \"Bake at ___ degrees for ___ minutes.\" You fill in the blanks: \"Bake at 350 degrees for 30 minutes.\" The recipe is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function-like macro"
      }), " — it has parameters (blanks) that get filled in with actual arguments each time the macro is used."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n#define ABS(x) ((x) < 0 ? -(x) : (x))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preprocessor encounters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define MACRO(params) replacement"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parses the parameter list; spaces before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "("
        }), " matter — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define MACRO (x)"
        }), " is an object-like macro named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MACRO"
        }), " with expansion ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stores macro with parameter list and replacement text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On invocation, collects comma-separated arguments inside parentheses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Substitutes each parameter textually with its argument."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then scans the result for further macro expansions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "critical-the-space-before-paren-trap",
      children: "Critical: The Space-Before-Paren Trap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define FOO (x)  /* object-like macro: FOO expands to (x) */\n#define BAR(x)   /* function-like macro: BAR takes parameter x */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-parentheses-matter",
      children: "Why Parentheses Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without parentheses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_SQUARE(x) x * x\nBAD_SQUARE(2 + 3)  /* expands to: 2 + 3 * 2 + 3 = 11, not 25 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With parentheses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\nSQUARE(2 + 3)  /* expands to: ((2 + 3) * (2 + 3)) = 25 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--with-vs-without-parentheses",
      children: "Dry Run Trace — With vs Without Parentheses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without parentheses:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_SQUARE(x) x * x\nint y = BAD_SQUARE(2 + 3);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BAD_SQUARE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found in macro table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(2 + 3)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Collect arguments: a = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitute"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 3"
            }), " body: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 3 * 2 + 3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "2 + (3 * 2) + 3"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 6 + 3"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "11"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "With parentheses:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\nint y = SQUARE(2 + 3);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SQUARE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found in macro table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(2 + 3)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Collect arguments: a = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitute"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2 + 3"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "((2 + 3) * (2 + 3))"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(5 * 5)"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "25"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-with-output-2",
      children: "Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define SQUARE(x) ((x) * (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\nint main(void)\n{\n    int a = 5;\n    printf(\"SQUARE(%d) = %d\\n\", a, SQUARE(a));\n    printf(\"SQUARE(%d + 1) = %d\\n\", a + 1, SQUARE(a + 1));\n    printf(\"MAX(%d, %d) = %d\\n\", 10, 20, MAX(10, 20));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SQUARE(5) = 25\nSQUARE(5 + 1) = 36\nMAX(10, 20) = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-statement-macros",
      children: "Multi-Statement Macros"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define SWAP(a, b, type)  \\\n    do {                  \\\n        type temp = a;    \\\n        a = b;            \\\n        b = temp;         \\\n    } while (0)\n\nint main(void)\n{\n    int x = 10, y = 20;\n    SWAP(x, y, int);\n    printf(\"x = %d, y = %d\\n\", x, y);\n\n    if (x < y)\n        SWAP(x, y, int);  /* works without braces */\n    else\n        x = 0;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 20, y = 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do { ... } while (0)"
      }), "? Without it:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_SWAP(a, b, t)  t _t = a; a = b; b = _t\nif (x < y)\n    BAD_SWAP(x, y, int);  /* expands to: if (x < y) t _t = x; x = y; y = _t; */\n/* Only first statement is conditional — x = y and y = _t always execute! */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variadic-macros-c99",
      children: "Variadic Macros (C99)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define LOG(fmt, ...) printf(\"[LOG] \" fmt \"\\n\", __VA_ARGS__)\n#define DEBUG_LOG(fmt, ...) fprintf(stderr, \"[DEBUG] %s:%d: \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n\nint main(void)\n{\n    LOG(\"Value = %d\", 42);\n    DEBUG_LOG(\"x = %d, y = %d\", 10, 20);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[LOG] Value = 42\n[DEBUG] test.c:12: x = 10, y = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##__VA_ARGS__"
      }), " GNU extension allows omitting the variadic argument (makes the trailing comma disappear when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__VA_ARGS__"
      }), " is empty)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p) where p = chars in argument list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution into body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b × p) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-argument macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k × p) for k parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested macro expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) total for m expansions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-2",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type-agnostic — works with any type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type checking — int and pointer both accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero runtime overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments evaluated multiple times → side effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can generate code via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be recursive in any useful way"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic macros for logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to debug — line numbers point to expansion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (0)"
            }), " pattern works in all contexts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot return a value from inside a statement expr"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Side effects — the classic bug:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint x = 1, y = 2;\nint z = MAX(++x, y);  /* expands to: ((++x) > (y) ? (++x) : (y)) */\n/* x is incremented TWICE! z = 3, x = 3 */\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Double evaluation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "#define SQUARE(x) ((x) * (x))\nint arr[] = {1, 2, 3};\nint i = 0;\nint s = SQUARE(arr[i++]);  /* expands to ((arr[i++]) * (arr[i++])) */\n/* i is incremented twice! arr[0] * arr[1] = 1 * 2 = 2, i = 2 */\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comma in argument:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "#define ASSERT(cond, msg) if (!(cond)) printf(\"%s\\n\", msg)\nASSERT(x < 3, \"x is too big\");  /* OK */\n/* But: */ ASSERT(x < 3, \"x, which is \" /* comma in string literal is OK */);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Whitespace between macro name and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), ":"]
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#define MAX (a,b)"
          }), " is an object-like macro named ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MAX"
          }), " expanding to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(a,b)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recursion guard:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#define DOUBLE(x) (2 * DOUBLE(x))"
          }), " — the preprocessor stops after detecting the recursive expansion, producing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(2 * DOUBLE(x))"
          }), " as text output (which will likely cause a compilation error)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-macros-vs-functions--comparison",
      children: "13.5 Macros vs Functions — Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Macro"
      }), " is like having a personal assistant who, every time you say \"double-check,\" physically does the two checks right there, writing them down in your notebook. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Function"
      }), " is like having a reference desk — you go there, ask, get an answer, and return."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When substitution happens"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before compilation (preprocessor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At runtime (call and return)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inlined at every call site — can bloat binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single copy of code — called via call instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No call overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call/return overhead (small, usually negligible)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — purely textual substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking of parameters and return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side effects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments re-evaluated each time used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments evaluated once, then passed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can be recursive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (preprocessor stops recursive expansion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can have address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — cannot point to a macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — function pointers work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Global — visible from point of definition to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block scope, file scope, or global"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error messages refer to expanded code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger shows original source line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variadic"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__VA_ARGS__"
            }), " since C99"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "..."
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A — expands to expression that must be valid C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit return type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can contain complex control flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Awkward — needs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (0)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural — any control flow works"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile-time evaluation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes — can be used in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#if"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — runtime only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token pasting / stringification"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), " operators"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-guide",
      children: "Decision Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* USE MACRO when: */\n#define IS_DIGIT(c) ((c) >= '0' && (c) <= '9')      /* Type-agnostic, hot path */\n#define MAX(a,b)    ((a) > (b) ? (a) : (b))           /* Works for any type */\n#define ASSERT(c)   if (!(c)) abort()                 /* __LINE__, __FILE__ needed */\n\n/* USE FUNCTION when: */\nstatic inline int max(int a, int b) { return a > b ? a : b; }  /* Type-safe */\ndouble sqrt(double x);                                         /* Recursive, complex */\nvoid sort(int* arr, size_t n);                                 /* Multi-statement, side effects */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "136-define-vs-const-vs-enum--comparison",
      children: ["13.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), " — Comparison"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), ": A sticky note on your desk that says \"PI = 3.14\" — you have to rewrite it everywhere you need it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), ": A document in a filing cabinet labeled \"PI = 3.14\" — you look it up when needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enum"
        }), ": A predefined list of related constants — like a restaurant menu with numbered items."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When evaluated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor — textual substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time integral constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integral type only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Global from definition to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block, file, or global scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File or block scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — substitution only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored in memory (may be optimized out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integral constant, no storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugger visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible in debugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible in debugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible in debugger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Can be used in ", (0,jsx_runtime.jsx)(_components.code, {
                children: "#if"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can be used in switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (integral)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (unless constexpr in C23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can have address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "&pi"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type information"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " by default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole file recompiled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the translation unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the translation unit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-demonstrating-differences",
      children: "Example Demonstrating Differences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define PI_DEF  3.14159        /* No type, no address, no scope */\nconst double PI_CONST = 3.14159; /* Typed, scoped, addressable */\nenum { PI_ENUM = 3 };           /* Integer only — 3, not 3.14159 */\n\nint main(void)\n{\n    printf(\"#define: %f\\n\", PI_DEF);      /* works — substituted */\n    printf(\"const:   %f\\n\", PI_CONST);    /* works — stored variable */\n    printf(\"enum:    %d\\n\", PI_ENUM);      /* works — integral constant */\n\n    /* What you CANNOT do: */\n    // #undef PI_CONST     /* error: undef on non-macro */\n    // enum { PI_ENUM = 3.14159 };  /* error: enum must be integer */\n    // int* p = &PI_DEF;   /* error: PI_DEF is not an lvalue */\n    \n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-what",
      children: "When to Use What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const double"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Related integer constants (days, states, flags)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Constant needed in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#if"
            }), " directive"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String constant"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const char*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " (C99 VLA also works)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debug flag (enable/disable code sections)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " (can be checked with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type-independent operation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_Generic"
            }), " in C11)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "137-undef",
      children: ["13.7 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#undef"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You told your assistant \"whenever I say 'current', write '2024'.\" Later you say \"I changed my mind — stop doing that.\" ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#undef"
      }), " cancels a previous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Removes a previously defined macro from the symbol table:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define TEMP 100\nint main(void)\n{\n    int x = TEMP;   /* 100 */\n\n#undef TEMP          /* TEMP is no longer defined */\n\n    // int y = TEMP; /* ERROR: TEMP is not defined */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporary redefinition"
        }), ": undefine then redefine with a different value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cleaning up"
        }), ": prevent macro name from leaking to other files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoiding conflicts"
        }), ": undefine a library macro before defining your own."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define LIMIT 100\n/* ... use LIMIT ... */\n#undef LIMIT\n\n#define LIMIT 200   /* redefine with new value */\n/* ... use new LIMIT ... */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-2",
      children: "Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define MAX 10\nint a = MAX;     /* a = 10 */\n#undef MAX\n/* MAX is gone */\n#define MAX 20\nint b = MAX;     /* b = 20 */\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macro Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX → 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX → 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a = 10;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef MAX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX 20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX → 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX → 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int b = 20;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#undef"
        }), " on an undefined macro is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "safe"
        }), " — no error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#undef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef MACRO"
        }), " evaluates to false."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-conditional-compilation",
      children: "13.8 Conditional Compilation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-light-switch--router-configuration",
      children: "Real-World Analogy: Light Switch / Router Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A factory assembly line can produce slightly different products depending on which switches are toggled. If SWITCH_A is on, include feature A. If SWITCH_B is on, include feature B. The factory doesn't build both features and then choose — it only builds what the switches allow. Conditional compilation works the same way: only the code that passes the condition is compiled."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1381-directives-overview",
      children: "13.8.1 Directives Overview"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If MACRO is defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DEBUG"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If MACRO is NOT defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef HEADER_H"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If expression is non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if VERSION >= 3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Else-if (C99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif VERSION >= 2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Otherwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#else"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End conditional block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if defined(MACRO)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If defined (expression form)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if defined(__linux__)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-3",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preprocessor evaluates the condition in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If true: keep following code until next conditional directive."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If false: skip (discard) following code until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#else"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#elif"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#else"
        }), ": keep code if previous condition was false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#elif"
        }), ": evaluate new condition if previous was false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), ": condition is simply \"is defined\" or \"is not defined.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        }), " ends the conditional block and returns to normal processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "condition_stack = []  // stack of booleans\nskip_depth = 0        // how many levels deep we are skipping\n\nfunction process_conditional(directive, condition):\n    if skip_depth > 0:\n        // Inside a skipped block — only track nesting\n        if directive in ['#if', '#ifdef', '#ifndef']:\n            skip_depth++\n        elif directive == '#endif':\n            skip_depth--\n        return SKIP\n    \n    if directive in ['#if', '#ifdef', '#ifndef']:\n        should_keep = evaluate_condition(directive, condition)\n        condition_stack.push(should_keep)\n        if not should_keep:\n            skip_depth = 1  // start skipping\n        return\n    \n    if directive == '#elif':\n        if condition_stack.top() is false:\n            // Previous condition was false, evaluate this one\n            ...\n        else:\n            skip_depth = 1\n    \n    if directive == '#else':\n        if condition_stack.top() is false:\n            condition_stack.pop()\n            condition_stack.push(true)\n            skip_depth = 0\n        else:\n            skip_depth = 1\n    \n    if directive == '#endif':\n        condition_stack.pop()\n        skip_depth = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1382-ifdef-and-ifndef",
      children: ["13.8.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifdef"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define DEBUG\n\nint main(void)\n{\n#ifdef DEBUG\n    printf(\"Debug mode enabled — verbose output active\\n\");\n#endif\n\n#ifndef RELEASE\n    printf(\"Release mode is NOT defined — using debug settings\\n\");\n#endif\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Debug mode enabled — verbose output active\nRelease mode is NOT defined — using debug settings\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-trace--ifdefifndef",
      children: ["Dry Run Trace — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifdef"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macro Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keep?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define DEBUG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DEBUG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES (DEBUG defined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Debug mode...\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef RELEASE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES (RELEASE not defined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Release mode...\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1383-if-and-elif",
      children: ["13.8.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#if"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#elif"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define VERSION 2\n\nint main(void)\n{\n#if VERSION >= 3\n    printf(\"Version 3 or later\\n\");\n#elif VERSION >= 2\n    printf(\"Version 2\\n\");\n#else\n    printf(\"Version 1\\n\");\n#endif\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Version 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-trace--ifelifelse",
      children: ["Dry Run Trace — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#if"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "#elif"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "#else"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keep?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if VERSION >= 3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "2 >= 3"
            }), " = 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif VERSION >= 2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "2 >= 2"
            }), " = 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Version 2\\n\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1384-if-defined",
      children: ["13.8.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#if defined(...)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defined()"
      }), " operator works inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#if"
      }), ", enabling logical combinations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n#if defined(__linux__) || defined(__unix__)\n    printf(\"Compiling on Linux/Unix\\n\");\n#elif defined(_WIN32)\n    printf(\"Compiling on Windows\\n\");\n#elif defined(__APPLE__)\n    printf(\"Compiling on macOS\\n\");\n#else\n    printf(\"Unknown platform\\n\");\n#endif\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1385-use-cases",
      children: "13.8.5 Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "platform-detection",
      children: "Platform Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef _WIN32\n    #include <windows.h>\n    #define SLEEP(ms) Sleep(ms)\n#elif defined(__linux__)\n    #include <unistd.h>\n    #define SLEEP(ms) usleep((ms) * 1000)\n#elif defined(__APPLE__)\n    #include <unistd.h>\n    #define SLEEP(ms) usleep((ms) * 1000)\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "debug-builds",
      children: "Debug Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef DEBUG\n    #define LOG(msg) printf(\"[DEBUG] %s:%d: %s\\n\", __FILE__, __LINE__, msg)\n    #define ASSERT(cond) if (!(cond)) { fprintf(stderr, \"Assertion failed: %s at %s:%d\\n\", #cond, __FILE__, __LINE__); abort(); }\n#else\n    #define LOG(msg)          /* nothing */\n    #define ASSERT(cond)      /* nothing */\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "header-guards",
      children: "Header Guards"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifndef MY_HEADER_H\n#define MY_HEADER_H\n\n/* header content — only processed once per translation unit */\n\n#endif /* MY_HEADER_H */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1386-pragma-once-vs-ifndef--comparison",
      children: ["13.8.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      }), " — Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef"
            }), " Guard"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-standard (but widely supported)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard C89+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Errors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot cause name collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name collision silently skips header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three lines + unique name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster on some compilers (no file open needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens file to check guard macro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported by all compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on every conforming compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicated headers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects same file via inode/file identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects by macro name only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Different paths, same file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works (same inode)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fails (different paths → different ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Method 1: #pragma once (modern, concise) */\n#pragma once\n\n/* Method 2: #ifndef guard (portable, standard) */\n#ifndef MY_HEADER_H\n#define MY_HEADER_H\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), " for new projects (every major compiler supports it). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      }), " guards when maximum portability is required (embedded systems, legacy compilers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1387-nested-conditional-compilation",
      children: "13.8.7 Nested Conditional Compilation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define DEBUG\n#define PLATFORM 2\n\nint main(void)\n{\n#ifdef DEBUG\n    #if PLATFORM == 1\n        printf(\"[DEBUG] Platform 1\\n\");\n    #elif PLATFORM == 2\n        printf(\"[DEBUG] Platform 2\\n\");\n    #else\n        printf(\"[DEBUG] Unknown platform\\n\");\n    #endif\n#else\n    printf(\"Release build\\n\");\n#endif\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[DEBUG] Platform 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "#ifdef"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#if defined()"
          })]
        }), ": Functionally identical for single conditions. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if defined()"
        }), " allows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Empty ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#if"
          })]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if 0"
        }), " ... ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        }), " — classic comment-out block (works even when comments nest poorly)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Evaluating undefined macro in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#if"
          })]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if UNDEFINED > 0"
        }), " — undefined macros evaluate to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Mismatched ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#endif"
          })]
        }), ": Compilation error — \"unterminated conditional.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nesting limit"
        }), ": C99 mandates at least 63 levels of nesting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "139-pragma",
      children: ["13.9 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A recipe might include a note: \"If using a convection oven, reduce temperature by 25°F.\" This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compiler-specific instruction"
      }), " — it only applies if you're using a convection oven (specific compiler). Other ovens (other compilers) may ignore it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma"
      }), " provides compiler-specific instructions. Unrecognized pragmas are silently ignored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pragmas",
      children: "Common Pragmas"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#pragma once                     /* include guard (alternative to #ifndef) */\n\n#if defined(__GNUC__)\n#pragma GCC optimize(\"O2\")       /* GCC: optimization hint */\n#pragma GCC diagnostic ignored \"-Wunused-variable\"  /* GCC: suppress warning */\n#endif\n\n#if defined(_MSC_VER)\n#pragma warning(disable: 4996)   /* MSVC: disable 'unsafe' function warning */\n#pragma warning(push, 3)         /* MSVC: set warning level to 3 */\n#pragma warning(pop)             /* MSVC: restore previous warning level */\n#endif\n\n#pragma pack(push, 1)            /* pack struct members without padding */\nstruct PackedData {\n    char c;\n    int  i;                      /* normally 8 bytes; with pack(1): 5 bytes */\n};\n#pragma pack(pop)                /* restore default packing */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "_pragma-operator-c99",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "_Pragma()"
      }), " Operator (C99)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "_Pragma()"
      }), " allows pragmas to be used inside macro definitions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define STRINGIFY(x) #x\n#define PRAGMA(x) _Pragma(STRINGIFY(x))\n#define SUPPRESS_WARNING(w) PRAGMA(GCC diagnostic ignored w)\n\nSUPPRESS_WARNING(\"-Wunused-variable\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-with-output-3",
      children: "Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#pragma pack(push, 1)\nstruct Packed {\n    char c;\n    int  i;\n};\n#pragma pack(pop)\n\nstruct Normal {\n    char c;\n    int  i;\n};\n\nint main(void)\n{\n    printf(\"Packed struct: %zu bytes\\n\", sizeof(struct Packed));\n    printf(\"Normal struct: %zu bytes\\n\", sizeof(struct Normal));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Packed struct: 5 bytes\nNormal struct: 8 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-3",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to compiler-specific optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-portable — code may not compile on other compilers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can suppress false-positive warnings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrecognized pragmas silently ignored (bugs hide)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure packing for binary protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause alignment faults on some architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            }), " is cleaner than header guards"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            }), " not in standard (but universally supported)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "1310-error",
      children: ["13.10 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#error"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A factory assembly line has a security checkpoint. If a part doesn't meet specifications, the line stops immediately with an alarm. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#error"
      }), " is that alarm — it halts compilation with a message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-and-example",
      children: "Syntax and Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifndef __STDC__\n#error \"This program requires a standard C compiler\"\n#endif\n\n#if !defined(__linux__) && !defined(_WIN32) && !defined(__APPLE__)\n#error \"Unsupported operating system — only Linux, Windows, and macOS are supported\"\n#endif\n\n#if __STDC_VERSION__ < 199901L\n#error \"C99 or later is required for variadic macros and // comments\"\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases-1",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platform requirements"
        }), ": Ensure compilation on supported platforms only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version requirements"
        }), ": Check compiler or C standard version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration validation"
        }), ": Verify that required macros are defined."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature detection"
        }), ": Ensure required features are available."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define REQUIRED_FEATURE\n\nint main(void)\n{\n#ifndef REQUIRED_FEATURE\n#error \"REQUIRED_FEATURE must be defined to compile this program\"\n#endif\n\n    printf(\"All required features present\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you comment out ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define REQUIRED_FEATURE"
      }), ", compilation stops with:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "error: #error \"REQUIRED_FEATURE must be defined to compile this program\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-4",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catches configuration errors at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crude — unconditional halt only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents silent miscompilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be conditional on runtime state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear error message for users"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be combined with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#if"
            }), " for conditional use"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "1311-line",
      children: ["13.11 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#line"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You're editing a document and the page numbers are wrong. You insert a sticky note saying \"The next page should be numbered page 100.\" ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#line"
      }), " resets the line numbering that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__LINE__"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__FILE__"
      }), " report."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#line 100 \"newfile.c\"\n/* Next line is treated as line 100 of \"newfile.c\" */\n\n#line 200\n/* Line number reset to 200, filename unchanged */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"Line: %d, File: %s\\n\", __LINE__, __FILE__);\n#line 50 \"generated.c\"\n    printf(\"Line: %d, File: %s\\n\", __LINE__, __FILE__);\n#line 75\n    printf(\"Line: %d, File: %s\\n\", __LINE__, __FILE__);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Line: 6, File: test.c\nLine: 50, File: generated.c\nLine: 76, File: generated.c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases-2",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generated code"
        }), ": Tools like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yacc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flex"
        }), ", and code generators use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " to point errors back to the original source file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source transformation"
        }), ": If a tool transforms C code, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " preserves the mapping back to the original."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error reporting"
        }), ": Custom preprocessors can use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " so compiler errors reference the correct file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "1312--and--operators",
      children: ["13.12 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      }), " Operators"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These operators are only meaningful inside function-like macro definitions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "13121-stringification-",
      children: ["13.12.1 Stringification (", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You're filling out a form. The blank says \"Name: _____.\" The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " operator is like writing the label \"Name\" onto the form — it takes the field name and turns it into a printed label."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " operator converts a macro parameter to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "string literal"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define PRINT_INT(x) printf(#x \" = %d\\n\", x)\n\nint main(void)\n{\n    int value = 42;\n    PRINT_INT(value);      /* expands to: printf(\"value\" \" = %d\\n\", value) */\n    PRINT_INT(value + 1);  /* expands to: printf(\"value + 1\" \" = %d\\n\", value + 1) */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "value = 42\nvalue + 1 = 43\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-expansion",
      children: "Detailed Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define STR(x) #x\n\nSTR(hello)        → \"hello\"\nSTR(42)           → \"42\"\nSTR(x y z)        → \"x y z\"\nSTR(text)         → \"text\"\n\n/* With macro argument: */\n#define FOO 123\nSTR(FOO)          → \"FOO\"   /* NOT \"123\" — # prevents expansion of the parameter */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--stringification",
      children: "Dry Run Trace — Stringification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SHOW(var) printf(#var \" = %d\\n\", var)\nint count = 5;\nSHOW(count);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SHOW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found in macro table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Collect argument: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#var"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#count"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"count\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Substitute: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"count\" \" = %d\\n\", count)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " operator prevents further macro expansion of the parameter. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#FOO"
      }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"FOO\""
      }), " even if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FOO"
      }), " is itself a macro."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stringification-with-spaces",
      children: "Stringification with Spaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define STR(x) #x\nSTR(  hello   world  )    → \"hello   world\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple spaces between tokens in the argument are collapsed to a single space, but leading/trailing whitespace is removed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "13122-token-pasting-",
      children: ["13.12.2 Token Pasting (", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You have two pieces of a shipping label: \"apt-\" and \"3B.\" You tape them together to make \"apt-3B.\" The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      }), " operator concatenates two tokens into one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define MAKE_VAR(name, num) name ## num\n\nint main(void)\n{\n    int MAKE_VAR(x, 1) = 10;   /* creates: int x1 = 10; */\n    int MAKE_VAR(x, 2) = 20;   /* creates: int x2 = 20; */\n\n    printf(\"x1 = %d, x2 = %d\\n\", x1, x2);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x1 = 10, x2 = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-examples",
      children: "Practical Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "type-generic-operations-before-c11-_generic",
      children: ["Type-Generic Operations (Before C11 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Generic"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define DECLARE_VECTOR(type) \\\n    typedef struct { type x; type y; } Vector2##type\n\nDECLARE_VECTOR(int);     /* creates: typedef struct { int x; int y; } Vector2int */\nDECLARE_VECTOR(float);   /* creates: typedef struct { float x; float y; } Vector2float */\nDECLARE_VECTOR(double);  /* creates: typedef struct { double x; double y; } Vector2double */\n\nint main(void)\n{\n    Vector2int v1 = {1, 2};\n    Vector2float v2 = {1.5f, 2.5f};\n    printf(\"v1 = (%d, %d)\\n\", v1.x, v1.y);\n    printf(\"v2 = (%.1f, %.1f)\\n\", v2.x, v2.y);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v1 = (1, 2)\nv2 = (1.5, 2.5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x-macros-pattern",
      children: "X Macros Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define COLOR_TABLE \\\n    X(RED,   0xFF0000) \\\n    X(GREEN, 0x00FF00) \\\n    X(BLUE,  0x0000FF) \\\n    X(WHITE, 0xFFFFFF)\n\n#define X(name, value) name,\ntypedef enum { COLOR_TABLE } Color;\n#undef X\n\n#define X(name, value) value,\nconst int color_values[] = { COLOR_TABLE };\n#undef X\n\n#define X(name, value) #name,\nconst char* color_names[] = { COLOR_TABLE };\n#undef X\n\nint main(void)\n{\n    for (int i = RED; i <= WHITE; i++)\n        printf(\"%s = #%06X\\n\", color_names[i], color_values[i]);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RED = #FF0000\nGREEN = #00FF00\nBLUE = #0000FF\nWHITE = #FFFFFF\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "combining--and-",
      children: ["Combining ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define MAKE_GETTER(type, field) \\\n    type get_##field(void) { return field; } \\\n    const char* get_##field##_name(void) { return #field; }\n\nint x = 42;\nMAKE_GETTER(int, x);   /* creates: int get_x(void) { return x; } */\n                       /* creates: const char* get_x_name(void) { return \"x\"; } */\n\nint main(void)\n{\n    printf(\"Value: %d\\n\",  get_x());\n    printf(\"Name:  %s\\n\",  get_x_name());\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Value: 42\nName:  x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invalid token result"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define CAT(a, b) a ## b"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(1, 2)"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "12"
        }), " (valid). But ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(1, 2x)"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "12x"
        }), " (valid); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(+, =)"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), " (valid). ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(1, 2.3)"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "12.3"
        }), " (valid). However, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(., 2)"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".2"
        }), " which might not be valid depending on context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty macro argument"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define F(x) #x"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "F()"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "##"
          }), " with empty argument"]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define CAT(a, b) a ## b"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(prefix, )"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prefix"
        }), " (empty argument yields just the other token). This behavior is compiler-dependent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Space before ", (0,jsx_runtime.jsx)(_components.code, {
            children: "##"
          })]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name ## num"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name##num"
        }), " are equivalent — spaces don't affect the paste."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "#"
          }), " prevents expansion"]
        }), ": In ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#x"
        }), ", the parameter ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is NOT expanded further. In ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a ## b"
        }), ", both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b"
        }), " are fully expanded before pasting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1313-predefined-macros",
      children: "13.13 Predefined Macros"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A factory stamps each product with the date, time, and machine ID. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__DATE__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__TIME__"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__FILE__"
      }), " are automatic stamps the compiler adds to let you know when, where, and in what context your code was compiled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-table",
      children: "Complete Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Macro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__LINE__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current source line number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__FILE__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current source file name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"program.c\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__DATE__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilation date (Mmm dd yyyy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Jun 24 2026\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__TIME__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilation time (hh:mm:ss)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"14:30:00\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__STDC__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 if compiler conforms to ANSI C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__STDC_VERSION__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C standard version code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "201112L"
            }), " (C11)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__STDC_HOSTED__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 if hosted implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__func__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current function name (C99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"main\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__cplusplus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined only in C++ compilation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "201703L"
            }), " (C++17)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__LINE__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Current line (resettable via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#line"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-with-output-4",
      children: "Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid show_info(void)\n{\n    printf(\"Function:  %s\\n\", __func__);\n    printf(\"Line:      %d\\n\", __LINE__);\n}\n\nint main(void)\n{\n    printf(\"File:       %s\\n\", __FILE__);\n    printf(\"Line:       %d\\n\", __LINE__);\n    printf(\"Date:       %s\\n\", __DATE__);\n    printf(\"Time:       %s\\n\", __TIME__);\n    printf(\"STDC:       %d\\n\", __STDC__);\n    printf(\"STDC Ver:   %ld\\n\", __STDC_VERSION__);\n    printf(\"STDC Hosted:%d\\n\", __STDC_HOSTED__);\n    show_info();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (varies):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "File:       macros.c\nLine:       15\nDate:       Jun 24 2026\nTime:       14:30:00\nSTDC:       1\nSTDC Ver:   201112\nSTDC Hosted:1\nFunction:   show_info\nLine:       10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-cases-3",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "debug-logging",
      children: "Debug Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define LOG(fmt, ...) \\\n    fprintf(stderr, \"[%s:%d] \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n\nLOG(\"x = %d\", x);   /* [file.c:42] x = 10 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "static-assertions",
      children: "Static Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define STATIC_ASSERT(cond, msg) \\\n    typedef char static_assert_##msg##_##__LINE__[(cond) ? 1 : -1]\n\nSTATIC_ASSERT(sizeof(int) == 4, int_must_be_4_bytes);\n/* If condition fails: error: size of array is negative */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-checking",
      children: "Version Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#if __STDC_VERSION__ >= 201112L\n    /* C11 features available */\n    _Static_assert(1, \"C11 static assert\");\n#elif __STDC_VERSION__ >= 199901L\n    /* C99 features available */\n    #define inline inline\n#else\n    /* C89 — limited features */\n    #define inline /* no inline */\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cc-compatibility",
      children: "C/C++ Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef __cplusplus\nextern \"C\" {\n#endif\n\nvoid c_function(int x);\n\n#ifdef __cplusplus\n}\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), " changes after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " directive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), " is the current file name, not the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), "'ing file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__DATE__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__TIME__"
        }), " reflect when compilation started, not the current time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__STDC_VERSION__"
        }), " values: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "199409L"
        }), " (C95), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "199901L"
        }), " (C99), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "201112L"
        }), " (C11), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "201710L"
        }), " (C17), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "202311L"
        }), " (C23)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__func__"
        }), " is not a macro but an implicit identifier — it cannot be used in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1314-macro-pitfalls",
      children: "13.14 Macro Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-side-effects-from-double-evaluation",
      children: "1. Side Effects from Double Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\nint main(void)\n{\n    int x = 1, y = 2;\n    int z = MAX(++x, y);\n    printf(\"z = %d, x = %d\\n\", z, x);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expansion:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "((++x) > (y) ? (++x) : (y))"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "z = 3, x = 3"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " was incremented twice!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-missing-parentheses",
      children: "2. Missing Parentheses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_MULTIPLY(a, b) a * b\nBAD_MULTIPLY(2 + 3, 4)   /* 2 + 3 * 4 = 14, not 20 */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define MULTIPLY(a, b) ((a) * (b))"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-semicolon-swallowing",
      children: "3. Semicolon Swallowing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_SWAP(a, b)  int temp = a; a = b; b = temp\n\nif (x > y)\n    BAD_SWAP(x, y);\nelse\n    x = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expansion:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (x > y)\n    int temp = x;  /* only this is conditional */\nx = y;              /* always executed */\ny = temp;           /* error: temp not in scope */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Multi-statement macros need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do { ... } while (0)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-no-type-safety",
      children: "4. No Type Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\nSQUARE(\"hello\")    /* compiles! \"hello\" * \"hello\" → garbage error */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-debugging-difficulty",
      children: "5. Debugging Difficulty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Error messages refer to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "expanded"
      }), " code, not the macro invocation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BUGGY(x) x + x * 2\nint y = BUGGY(5);  /* compiler error points to expanded: 5 + 5 * 2 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-dangling-else",
      children: "6. Dangling Else"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define IF_BIG(x) if ((x) > 100)\n\nint y = 50;\nIF_BIG(y)\n    printf(\"Big!\\n\");\nelse\n    printf(\"Small\\n\");  /* else without if in preprocessor output? No, but in source it looks wrong */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-name-collisions",
      children: "7. Name Collisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include \"some_lib.h\"    /* some_lib.h might define MIN, MAX */\n#define MIN(a, b) ...    /* redefinition warning/error — or worse, silent override */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfalls-at-a-glance",
      children: "Pitfalls at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAX(++x, y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects — increment twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use inline function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing parens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SQUARE(2+3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong precedence — 11 vs 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((x)*(x))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BAD_SWAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only first statement conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (0)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SQUARE(\"hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use inline function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collides with library headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INTPLUS_MAX"
            }), " prefix"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in unreadable expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep macros simple"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1315-interview-corner",
      children: "13.15 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-a-macro-and-an-inline-function",
      children: "Q1: What is the difference between a macro and an inline function?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macro"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static inline"
            }), " Function"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor — textual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler — semantic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side effect protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — double evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe — arguments evaluated once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor — expanded code shown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal — function name visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can return a value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (expression result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (return statement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["From ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block or file scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "macro"
        }), " when you need ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), ", token pasting, type-agnostic operations, or preprocessor conditionals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inline function"
        }), " for type safety, side-effect protection, readability, and debugger support."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-macro-side-effects-and-how-do-you-prevent-them",
      children: "Q2: What are macro side effects and how do you prevent them?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\n\nint i = 2;\nint result = SQUARE(++i);\n/* Expands to: ((++i) * (++i)) — i incremented twice! */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use inline functions instead where possible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document that the macro evaluates arguments multiple times."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use GNU C statement expressions as a safer alternative (non-standard):\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "#define MAX(a, b) ({ \\\n    __typeof__(a) _a = (a); \\\n    __typeof__(b) _b = (b); \\\n    _a > _b ? _a : _b; \\\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In C11, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Generic"
        }), " for type-safe macros."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-explain-the--and--preprocessor-operators-with-examples",
      children: ["Q3: Explain the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      }), " preprocessor operators with examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), " (Stringification):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define STR(x) #x\nSTR(hello)   → \"hello\"\nSTR(42)      → \"42\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Turns the parameter into a string literal. The parameter is NOT expanded before stringification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), " (Token Pasting):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define CONCAT(a, b) a ## b\nCONCAT(var, 123)   → var123\nCONCAT(prefix, _suffix)   → prefix_suffix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concatenates two tokens into one new token. Both operands are fully expanded before pasting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Combined:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define MAKE_VAR(type, name) \\\n    type name = 0; \\\n    const char* name##_str = #name\n\nMAKE_VAR(int, counter)\n/* Creates:\n *   int counter = 0;\n *   const char* counter_str = \"counter\";\n */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-is-pragma-once-portable-should-i-use-it",
      children: ["Q4: Is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), " portable? Should I use it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), " is supported by all major compilers (GCC, Clang, MSVC, ICC, etc.) but is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not ISO C standard"
      }), ". It is safe for most projects because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every modern compiler supports it."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It eliminates naming collisions that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), " guards suffer from."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It can be faster — the compiler avoids opening the file entirely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), " for new projects. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      }), " guards only if you need to support obscure or legacy compilers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-x-macros-provide-an-example",
      children: "Q5: What are X macros? Provide an example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["X macros are a technique where a single list of data drives multiple code generation passes using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#undef"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Define the data list once */\n#define FRUIT_TABLE \\\n    X(APPLE,  \"Apple\",   100) \\\n    X(BANANA, \"Banana\",  80)  \\\n    X(CHERRY, \"Cherry\",  250)\n\n/* Generate enum */\n#define X(id, name, price) id,\ntypedef enum { FRUIT_TABLE } FruitId;\n#undef X\n\n/* Generate name array */\n#define X(id, name, price) name,\nconst char* fruit_names[] = { FRUIT_TABLE };\n#undef X\n\n/* Generate price array */\n#define X(id, name, price) price,\nint fruit_prices[] = { FRUIT_TABLE };\n#undef X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Single source of truth — adding a fruit updates enum, name array, and price array simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-can-macros-be-recursive",
      children: "Q6: Can macros be recursive?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No. The C preprocessor has an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "expansion barrier"
      }), " — when a macro is currently being expanded, it is marked and not expanded again. This prevents infinite recursion:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define REC REC   /* Expands once to REC, then stops — REC stays as text */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There is one level of indirect recursion allowed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define A B\n#define B A\nA   /* Expands: A → B → A (stops here) */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q7-what-is-the-difference-between-ifdef-macro-and-if-definedmacro",
      children: ["Q7: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifdef MACRO"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#if defined(MACRO)"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functionally identical for a single condition. The difference:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if defined(MACRO)"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More verbose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single condition only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can combine with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "||"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cannot negate directly (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef"
            }), " is separate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can negate: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#if !defined(MACRO)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cannot use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "defined()"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif"
            }), " before C99"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#elif defined(MACRO)"
            }), " works"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef A              ←→  #if defined(A)\n#ifndef A             ←→  #if !defined(A)\n                         #if defined(A) || defined(B)   ← can't do with #ifdef\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-create-a-debug-print-macro-that-includes-file-and-line-info",
      children: "Q8: How do you create a debug print macro that includes file and line info?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef DEBUG\n    #define DBG_PRINT(fmt, ...) \\\n        fprintf(stderr, \"[DEBUG] %s:%d: \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n#else\n    #define DBG_PRINT(fmt, ...)  /* nothing */\n#endif\n\n/* Usage: */\nDBG_PRINT(\"x = %d, y = %s\", x, \"hello\");\n/* Output: [DEBUG] test.c:10: x = 42, y = hello */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "##"
      }), " before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__VA_ARGS__"
      }), " is a GNU extension that removes the trailing comma when the variadic argument is empty."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-explain-the-do----while-0-pattern",
      children: ["Q9: Explain the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do { ... } while (0)"
      }), " pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This pattern ensures multi-statement macros work correctly in all syntactic contexts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SWAP(a, b, type)  do { type _t = a; a = b; b = _t; } while (0)\n\nif (x > y)\n    SWAP(x, y, int);    /* Works: if (x > y) do { ... } while (0); */\nelse\n    y = 0;\n\n/* Without do-while: */\n#define BAD_SWAP(a, b, type)  type _t = a; a = b; b = _t\nif (x > y)\n    BAD_SWAP(x, y, int);  /* Only first statement inside if! */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do { } while (0)"
      }), " requires a semicolon, consumes it, and wraps all statements into a single compound statement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q10-what-is-the-purpose-of-line-directive",
      children: ["Q10: What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#line"
      }), " directive?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "#line"
      }), " resets the line number and optionally the filename reported by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__LINE__"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__FILE__"
      }), ". It is primarily used by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code generators"
        }), " (yacc, lex, IDL compilers) to map generated C code back to the original source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source-to-source transforms"
        }), " to preserve original line numbers for debugging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error reporting"
        }), " in custom preprocessing tools."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1316-applications-in-real-systems",
      children: "13.16 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "13161-the-linux-kernel--container_of-macro",
      children: ["13.16.1 The Linux Kernel — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container_of"
      }), " Macro"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of the most famous macros in systems programming:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define container_of(ptr, type, member) ({                      \\\n    const __typeof__(((type *)0)->member) *__mptr = (ptr);     \\\n    (type *)((char *)__mptr - offsetof(type, member));         \\\n})\n\n/* Usage: given a pointer to a struct member, get the containing struct */\nstruct my_struct {\n    int a;\n    int b;\n    struct list_node node;\n};\n\nstruct list_node* np = get_node();\nstruct my_struct* sp = container_of(np, struct my_struct, node);\n/* sp points to the my_struct that contains np */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This macro is the foundation of Linux kernel data structures (linked lists, trees, queues)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13162-assertion-macros",
      children: "13.16.2 Assertion Macros"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#ifdef NDEBUG\n    #define ASSERT(cond) ((void)0)\n#else\n    #define ASSERT(cond) \\\n        do { \\\n            if (!(cond)) { \\\n                fprintf(stderr, \"ASSERTION FAILED: %s\\n  File: %s, Line: %d\\n\", \\\n                        #cond, __FILE__, __LINE__); \\\n                abort(); \\\n            } \\\n        } while (0)\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13163-debug-logging-infrastructure",
      children: "13.16.3 Debug Logging Infrastructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* log.h */\n#ifndef LOG_H\n#define LOG_H\n\n#define LOG_LEVEL_NONE  0\n#define LOG_LEVEL_ERROR 1\n#define LOG_LEVEL_WARN  2\n#define LOG_LEVEL_INFO  3\n#define LOG_LEVEL_DEBUG 4\n\n#ifndef LOG_LEVEL\n#define LOG_LEVEL LOG_LEVEL_INFO\n#endif\n\n#if LOG_LEVEL >= LOG_LEVEL_ERROR\n    #define LOG_ERROR(fmt, ...) \\\n        fprintf(stderr, \"[ERROR] %s:%d: \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n#else\n    #define LOG_ERROR(fmt, ...) ((void)0)\n#endif\n\n#if LOG_LEVEL >= LOG_LEVEL_WARN\n    #define LOG_WARN(fmt, ...) \\\n        fprintf(stderr, \"[WARN]  %s:%d: \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n#else\n    #define LOG_WARN(fmt, ...) ((void)0)\n#endif\n\n#if LOG_LEVEL >= LOG_LEVEL_DEBUG\n    #define LOG_DEBUG(fmt, ...) \\\n        fprintf(stderr, \"[DEBUG] %s:%d: \" fmt \"\\n\", __FILE__, __LINE__, ##__VA_ARGS__)\n#else\n    #define LOG_DEBUG(fmt, ...) ((void)0)\n#endif\n\n#endif /* LOG_H */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13164-platform-specific-code",
      children: "13.16.4 Platform-Specific Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* platform.h */\n#ifndef PLATFORM_H\n#define PLATFORM_H\n\n/* Detect platform */\n#if defined(_WIN32) || defined(_WIN64)\n    #define PLATFORM_WINDOWS 1\n    #include <windows.h>\n    #define THREAD_RETURN DWORD WINAPI\n    #define THREAD_FUNC(name) DWORD WINAPI name(LPVOID param)\n#elif defined(__linux__)\n    #define PLATFORM_LINUX 1\n    #include <pthread.h>\n    #define THREAD_RETURN void*\n    #define THREAD_FUNC(name) void* name(void* param)\n#elif defined(__APPLE__)\n    #define PLATFORM_MACOS 1\n    #include <pthread.h>\n    #define THREAD_RETURN void*\n    #define THREAD_FUNC(name) void* name(void* param)\n#else\n    #error \"Unsupported platform\"\n#endif\n\n#endif /* PLATFORM_H */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13165-unit-test-framework",
      children: "13.16.5 Unit Test Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A compact testing framework using macros:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\n/* Test framework macros */\n#define TEST(name) \\\n    static void test_##name(void); \\\n    static int test_##name##_passed = 0; \\\n    static int test_##name##_failed = 0; \\\n    static void test_##name(void)\n\n#define ASSERT_EQ(actual, expected) \\\n    do { \\\n        if ((actual) != (expected)) { \\\n            fprintf(stderr, \"FAIL: %s:%d: expected %d, got %d\\n\", \\\n                    __FILE__, __LINE__, (expected), (actual)); \\\n            test_##name##_failed++; \\\n        } else { \\\n            test_##name##_passed++; \\\n        } \\\n    } while (0)\n\n#define ASSERT_STR_EQ(actual, expected) \\\n    do { \\\n        if (strcmp(actual, expected) != 0) { \\\n            fprintf(stderr, \"FAIL: %s:%d: expected \\\"%s\\\", got \\\"%s\\\"\\n\", \\\n                    __FILE__, __LINE__, expected, actual); \\\n        } \\\n    } while (0)\n\n#define RUN_TEST(name) \\\n    do { \\\n        printf(\"Running test: %s\\n\", #name); \\\n        test_##name(); \\\n    } while (0)\n\n/* Application code */\nint factorial(int n)\n{\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\n/* Test cases */\nTEST(fact_zero)\n{\n    ASSERT_EQ(factorial(0), 1);\n}\n\nTEST(fact_positive)\n{\n    ASSERT_EQ(factorial(5), 120);\n    ASSERT_EQ(factorial(3), 6);\n    ASSERT_EQ(factorial(1), 1);\n}\n\nint main(void)\n{\n    RUN_TEST(fact_zero);\n    RUN_TEST(fact_positive);\n    printf(\"All tests completed.\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13166-api-exportimport-macros",
      children: "13.16.6 API Export/Import Macros"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* dll_export.h */\n#ifndef DLL_EXPORT_H\n#define DLL_EXPORT_H\n\n#if defined(_WIN32) || defined(_WIN64)\n    #ifdef MYLIB_BUILD\n        #define MYLIB_API __declspec(dllexport)\n    #else\n        #define MYLIB_API __declspec(dllimport)\n    #endif\n    #define MYLIB_API_CALL __stdcall\n#else\n    #define MYLIB_API __attribute__((visibility(\"default\")))\n    #define MYLIB_API_CALL\n#endif\n\nMYLIB_API int MYLIB_API_CALL mylib_function(int x);\n\n#endif /* DLL_EXPORT_H */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <file>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include system header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"file\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include project header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"myheader.h\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MACRO value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define object-like substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define PI 3.14159"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MACRO(p) body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define function-like substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX(a,b) ((a)>(b)?(a):(b))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DEBUG"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If not defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef HEADER_H"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If expression true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#if __STDC_VERSION__ >= 201112L"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Else-if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif VERSION >= 2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#error message"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop with error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#error \"Unsupported platform\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#line num file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset line number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#line 100 \"gen.c\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef MACRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#undef TEMP"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header guard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef MY_H"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MY_H"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX(a,b) (((a)>(b))?(a):(b))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debug print"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DEBUG"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define LOG(fmt,...) printf(fmt,__VA_ARGS__)"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Platform check"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef _WIN32"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif defined(__linux__)"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define ASSERT(x) if(!(x)){fprintf(stderr,\"...\");abort();}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stringify"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define STR(x) #x"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STR(hello)"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"hello\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token paste"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define CAT(a,b) a ## b"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CAT(x,1)"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comment-out"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#if 0"
            }), " ... ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty macro for flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define FEATURE_X"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define F(x) do { ... } while (0)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preprocessor Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debug builds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DEBUG"
            }), " with extra logging and asserts"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef _WIN32"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elif defined(__linux__)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inline math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MIN(a,b) (((a)<(b))?(a):(b))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API export"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef DLL_EXPORT"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__declspec(dllexport)"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version check"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#if __STDC_VERSION__ >= 201112L"
            }), " for C11 features"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            }), " to generate variable names, function names, types"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__FILE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__LINE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__DATE__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__TIME__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ASSERT()"
            }), " macro with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#cond"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX_CONNECTIONS 100"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef HAVE_PTHREADS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional compilation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#if 0"
            }), " to disable dead code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type-generic operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X macros for enum + string + value tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define DOUBLE(x) x+x"
        }), " evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DOUBLE(3)*5"
        }), " to?\nA) 30\nB) 18\nC) 15\nD) Undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `DOUBLE(3)*5` expands to `3+3*5` = `3+15` = 18 — not `(3+3)*5` = 30. This is why parentheses are essential."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which directive stops compilation with a user-defined message?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#error"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#stop"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#warning"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `#error \"message\"` stops compilation and displays the message."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of a header guard?\nA) To protect the header from being modified\nB) To prevent multiple inclusions of the same header in one translation unit\nC) To make the header read-only\nD) To secure the header against viruses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** A header guard using `#ifndef` / `#define` / `#endif` prevents the same file from being included more than once."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define STR(x) #x"
        }), " do with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STR(TEST)"
        }), "?\nA) Defines a variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TEST"
        }), "\nB) Expands to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"TEST\""
        }), " (a string)\nC) Deletes the token ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TEST"
        }), "\nD) Creates a function called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TEST"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The `#` operator stringifies the parameter, so `STR(TEST)` → `\"TEST\"`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CAT(1, 2)"
        }), " expand to with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define CAT(a, b) a ## b"
        }), "?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 2"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1##2"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "12"
        }), "\nD) Error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** The `##` operator pastes tokens: `1 ## 2` → `12` (a single integer token)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do { ... } while (0)"
        }), " used in multi-statement macros?\nA) To create an infinite loop\nB) To make the macro work correctly inside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " statements without braces\nC) To prevent the macro from being used in expressions\nD) To improve runtime performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** It wraps multiple statements into a single compound statement that requires a semicolon, preventing dangling else problems."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you define a macro recursively, like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define REC REC"
        }), "?\nA) Infinite loop in the preprocessor\nB) Preprocessor stops after one expansion\nC) Compiler crash\nD) The macro is ignored"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The preprocessor marks a macro as \"currently expanding\" and stops further expansion of the same macro, preventing infinite recursion."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include <file.h>"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include \"file.h\""
        }), "?\nA) No difference\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), " includes only system files; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), " includes only user files\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), " searches the current directory first, then system paths; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), " searches only system paths\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), " is faster than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>**C)** `#include \"file.h\"` searches the current source directory first, then falls back to system include paths. `#include ", (0,jsx_runtime.jsx)(_components.file, {
          className: "h",
          children: "` searches only system include paths."
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is NOT a predefined macro?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FUNCTION__"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__DATE__"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `__func__` (lowercase) is predefined; `__FUNCTION__` is not standard (though some compilers support it)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define FOO"
        }), " (with no replacement value) behave?\nA) Compilation error\nB) Warning, but works as empty macro\nC) Defines FOO as an empty token\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `#define FOO` defines FOO with an empty replacement. It can be used with `#ifdef FOO` and other conditional directives."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), " inserts file contents; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), " for system headers, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), " for user headers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " creates object-like and function-like macros; always parenthesize parameters and the body."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), " stringifies a parameter (turns it into a string literal); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), " pastes tokens together into one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#else"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#elif"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        }), " control conditional compilation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Header guards (", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma once"
        }), ") prevent multiple inclusion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Predefined macros (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__DATE__"
        }), ", etc.) provide compilation context."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Macros are error-prone: side effects, missing parentheses, no type safety."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enum"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inline"
        }), " functions over macros where possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma"
        }), " provides compiler-specific features; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#error"
        }), " stops compilation with a message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " resets line numbering for code generators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["X macros use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "#undef"
        }), " to generate multiple code structures from a single data table."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must macro parameters be parenthesized in the replacement text?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), " operator do in a macro? What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), " do?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a header guard and why is it necessary?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef DEBUG"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if defined(DEBUG)"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do { ... } while (0)"
        }), " used in multi-statement macros?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the advantages of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static inline"
        }), " functions over function-like macros?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the preprocessor prevent infinite recursion in macros?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " for defining constants?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma once"
        }), " vs an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), " header guard?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are X macros and what problem do they solve?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a macro ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IS_EVEN(x)"
        }), " that returns 1 if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is even and 0 otherwise. Test it with several values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a macro ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ARRAY_SIZE(arr)"
        }), " that computes the number of elements in an array. Use it to iterate over an array."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef DEBUG"
        }), " to conditionally print debugging information (filename, line number, variable values). Compile it with and without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-DDEBUG"
        }), " on the command line and observe the difference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a header file ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math_utils.h"
        }), " with a header guard. Define macros for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CUBE(x)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MIN(a,b)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAMP(x,lo,hi)"
        }), ". Include it in a program and test all macros."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#line"
        }), " to change the reported file name and line number, then uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), " to confirm the change."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create an X macro table for 5 planets (name, orbital radius, day length). Use it to generate an enum, a name array, and an orbital period array. Print all values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that uses the preprocessor to implement a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unit test framework"
      }), " with the following macros:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TEST(name)"
        }), " — begins a test case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ASSERT_EQ(actual, expected)"
        }), " — checks equality; prints file, line, and failure message if not equal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ASSERT_TRUE(expr)"
        }), " — checks that expression is true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TEST_REPORT()"
        }), " — prints summary of passed/failed tests."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use counters (static variables or object-like macros) to track the number of passed and failed tests. Write test cases for a function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "factorial"
      }), " and report the results. ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(Hint: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__LINE__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__FILE__"
        }), " in your assertion macros.)"]
      })]
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