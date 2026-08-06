"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[38778],{

/***/ 30080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_14_lambdas_md_07e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-14-lambdas-md-07e.json
const site_docs_courses_oop_cpp_14_lambdas_md_07e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/14-lambdas","title":"Chapter 14: Lambdas (Deep Dive)","description":"Previous 15-concurrency","source":"@site/docs/courses/oop-cpp/14-lambdas.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/14-lambdas","permalink":"/ai-engineering-journey/oop-cpp/14-lambdas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-lambdas","slug":"/oop-cpp/14-lambdas","title":"Chapter 14: Lambdas (Deep Dive)","sidebar_label":"Chapter 14: Lambdas (Deep Dive)","sidebar_position":14},"sidebar":"coursesSidebar","previous":{"title":"Chapter 13: Move Semantics","permalink":"/ai-engineering-journey/oop-cpp/13-move-semantics"},"next":{"title":"Chapter 15: Concurrency","permalink":"/ai-engineering-journey/oop-cpp/15-concurrency"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/14-lambdas.md


const frontMatter = {
	id: '14-lambdas',
	slug: '/oop-cpp/14-lambdas',
	title: 'Chapter 14: Lambdas (Deep Dive)',
	sidebar_label: 'Chapter 14: Lambdas (Deep Dive)',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Lambdas (Deep Dive)';

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
  "value": "14.1 Lambda Syntax",
  "id": "141-lambda-syntax",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Lambda Grammar",
  "id": "lambda-grammar",
  "level": 3
}, {
  "value": "Numbered Steps to Write a Lambda",
  "id": "numbered-steps-to-write-a-lambda",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Basic Lambda Examples",
  "id": "basic-lambda-examples",
  "level": 3
}, {
  "value": "What the Compiler Generates: Closure Object",
  "id": "what-the-compiler-generates-closure-object",
  "level": 3
}, {
  "value": "Dry Run: Lambda Invocation",
  "id": "dry-run-lambda-invocation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "14.2 Capture Clause Deep Dive",
  "id": "142-capture-clause-deep-dive",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Capture Modes Reference",
  "id": "capture-modes-reference",
  "level": 3
}, {
  "value": "Capture by Value: Deep Example",
  "id": "capture-by-value-deep-example",
  "level": 3
}, {
  "value": "Capture by Reference: Deep Example",
  "id": "capture-by-reference-deep-example",
  "level": 3
}, {
  "value": "Capture by Value vs Reference — Comparison Table",
  "id": "capture-by-value-vs-reference--comparison-table",
  "level": 3
}, {
  "value": "Dry Run: Capture by Value Mutation",
  "id": "dry-run-capture-by-value-mutation",
  "level": 3
}, {
  "value": "Common Mistakes with Captures",
  "id": "common-mistakes-with-captures",
  "level": 3
}, {
  "value": "14.3 Mutable Lambdas",
  "id": "143-mutable-lambdas",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Why Default Const?",
  "id": "why-default-const",
  "level": 3
}, {
  "value": "Mutable Lambda Examples",
  "id": "mutable-lambda-examples",
  "level": 3
}, {
  "value": "Dry Run: Mutable Lambda State",
  "id": "dry-run-mutable-lambda-state",
  "level": 3
}, {
  "value": "Stateful Lambda Idioms",
  "id": "stateful-lambda-idioms",
  "level": 3
}, {
  "value": "Complexity Analysis — Mutable Lambda State",
  "id": "complexity-analysis--mutable-lambda-state",
  "level": 3
}, {
  "value": "14.4 Capturing <code>this</code> and <code>*this</code>",
  "id": "144-capturing-this-and-this",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Capturing <code>this</code> (by Reference)",
  "id": "capturing-this-by-reference",
  "level": 3
}, {
  "value": "DANGER: Lambda Outliving <code>this</code>",
  "id": "danger-lambda-outliving-this",
  "level": 3
}, {
  "value": "Capturing <code>*this</code> by Value (C++17)",
  "id": "capturing-this-by-value-c17",
  "level": 3
}, {
  "value": "<code>[this]</code> vs <code>[*this]</code> — Comparison",
  "id": "this-vs-this--comparison",
  "level": 3
}, {
  "value": "Dry Run: <code>[*this]</code> Capture",
  "id": "dry-run-this-capture",
  "level": 3
}, {
  "value": "Subtle: Implicit <code>[this]</code> in C++20 with <code>[=]</code>",
  "id": "subtle-implicit-this-in-c20-with-",
  "level": 3
}, {
  "value": "14.5 Initialized Captures / Generalized Capture (C++14)",
  "id": "145-initialized-captures--generalized-capture-c14",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax",
  "level": 3
}, {
  "value": "Example 1: Moving Unique Ownership",
  "id": "example-1-moving-unique-ownership",
  "level": 3
}, {
  "value": "Example 2: Computed Capture",
  "id": "example-2-computed-capture",
  "level": 3
}, {
  "value": "Example 3: Naming a Complex Expression",
  "id": "example-3-naming-a-complex-expression",
  "level": 3
}, {
  "value": "Example 4: Capture a Vector by Moving",
  "id": "example-4-capture-a-vector-by-moving",
  "level": 3
}, {
  "value": "Multiple Initialized Captures",
  "id": "multiple-initialized-captures",
  "level": 3
}, {
  "value": "Dry Run: Initialized Capture",
  "id": "dry-run-initialized-capture",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "14.6 Generic Lambdas (C++14)",
  "id": "146-generic-lambdas-c14",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-1",
  "level": 3
}, {
  "value": "Example 1: Basic Generic Lambda",
  "id": "example-1-basic-generic-lambda",
  "level": 3
}, {
  "value": "Example 2: Generic Lambda with STL",
  "id": "example-2-generic-lambda-with-stl",
  "level": 3
}, {
  "value": "Example 3: Generic Lambda with Type Constraint (C++20)",
  "id": "example-3-generic-lambda-with-type-constraint-c20",
  "level": 3
}, {
  "value": "Template Expansion: What Compiler Generates",
  "id": "template-expansion-what-compiler-generates",
  "level": 3
}, {
  "value": "Dry Run: Generic Lambda Instantiation",
  "id": "dry-run-generic-lambda-instantiation",
  "level": 3
}, {
  "value": "Generic Lambda with auto&amp; and auto&amp;&amp;",
  "id": "generic-lambda-with-auto-and-auto",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-1",
  "level": 3
}, {
  "value": "14.7 constexpr Lambdas (C++17)",
  "id": "147-constexpr-lambdas-c17",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Core Concept",
  "id": "core-concept",
  "level": 3
}, {
  "value": "Example 1: Compile-Time Computation",
  "id": "example-1-compile-time-computation",
  "level": 3
}, {
  "value": "Example 2: Compile-Time String Processing",
  "id": "example-2-compile-time-string-processing",
  "level": 3
}, {
  "value": "Example 3: constexpr Capture",
  "id": "example-3-constexpr-capture",
  "level": 3
}, {
  "value": "Benefits of constexpr Lambdas",
  "id": "benefits-of-constexpr-lambdas",
  "level": 3
}, {
  "value": "constexpr Lambda Rules (C++17 vs C++20)",
  "id": "constexpr-lambda-rules-c17-vs-c20",
  "level": 3
}, {
  "value": "Dry Run: constexpr Lambda Evaluation",
  "id": "dry-run-constexpr-lambda-evaluation",
  "level": 3
}, {
  "value": "14.8 Lambda as Function Pointer",
  "id": "148-lambda-as-function-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "The Rule",
  "id": "the-rule",
  "level": 3
}, {
  "value": "Example 1: C API Callback",
  "id": "example-1-c-api-callback",
  "level": 3
}, {
  "value": "Example 2: std::thread with Captureless Lambda",
  "id": "example-2-stdthread-with-captureless-lambda",
  "level": 3
}, {
  "value": "Example 3: Function Pointer via + Operator Trick",
  "id": "example-3-function-pointer-via--operator-trick",
  "level": 3
}, {
  "value": "Lambda vs Function Pointer vs std::function — Comparison Table",
  "id": "lambda-vs-function-pointer-vs-stdfunction--comparison-table",
  "level": 3
}, {
  "value": "Performance Hierarchy",
  "id": "performance-hierarchy",
  "level": 3
}, {
  "value": "Dry Run: Function Pointer Conversion",
  "id": "dry-run-function-pointer-conversion",
  "level": 3
}, {
  "value": "14.9 IIFE (Immediately Invoked Function Expression)",
  "id": "149-iife-immediately-invoked-function-expression",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-2",
  "level": 3
}, {
  "value": "Example 1: Const Initialization with Complex Logic",
  "id": "example-1-const-initialization-with-complex-logic",
  "level": 3
}, {
  "value": "Example 2: Complex Configuration Object",
  "id": "example-2-complex-configuration-object",
  "level": 3
}, {
  "value": "Example 3: IIFE with Move Semantics",
  "id": "example-3-iife-with-move-semantics",
  "level": 3
}, {
  "value": "Dry Run: IIFE Execution",
  "id": "dry-run-iife-execution",
  "level": 3
}, {
  "value": "IIFE Without Parameters: Clearing a vector",
  "id": "iife-without-parameters-clearing-a-vector",
  "level": 3
}, {
  "value": "14.10 Return Type Deduction",
  "id": "1410-return-type-deduction",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "How Deduction Works",
  "id": "how-deduction-works",
  "level": 3
}, {
  "value": "When to Explicitly Specify Return Type",
  "id": "when-to-explicitly-specify-return-type",
  "level": 3
}, {
  "value": "Example: All Deduction Modes",
  "id": "example-all-deduction-modes",
  "level": 3
}, {
  "value": "Dry Run: Return Type Deduction",
  "id": "dry-run-return-type-deduction",
  "level": 3
}, {
  "value": "14.11 Lambdas with STL Algorithms",
  "id": "1411-lambdas-with-stl-algorithms",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "Common Patterns Matrix",
  "id": "common-patterns-matrix",
  "level": 3
}, {
  "value": "Pattern 1: Custom Sorting",
  "id": "pattern-1-custom-sorting",
  "level": 3
}, {
  "value": "Pattern 2: Find, Count, Filter",
  "id": "pattern-2-find-count-filter",
  "level": 3
}, {
  "value": "Pattern 3: Transform (Map)",
  "id": "pattern-3-transform-map",
  "level": 3
}, {
  "value": "Pattern 4: Accumulate with Lambda",
  "id": "pattern-4-accumulate-with-lambda",
  "level": 3
}, {
  "value": "Pattern 5: for_each with Side Effects",
  "id": "pattern-5-for_each-with-side-effects",
  "level": 3
}, {
  "value": "Dry Run: Sort with Lambda",
  "id": "dry-run-sort-with-lambda",
  "level": 3
}, {
  "value": "Complexity of STL + Lambda Patterns",
  "id": "complexity-of-stl--lambda-patterns",
  "level": 3
}, {
  "value": "14.12 std::function vs auto Lambda",
  "id": "1412-stdfunction-vs-auto-lambda",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-11",
  "level": 3
}, {
  "value": "The Fundamental Difference",
  "id": "the-fundamental-difference",
  "level": 3
}, {
  "value": "Example: Concrete vs Erased",
  "id": "example-concrete-vs-erased",
  "level": 3
}, {
  "value": "Performance Benchmark Concept",
  "id": "performance-benchmark-concept",
  "level": 3
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "Lambda Size Measurement",
  "id": "lambda-size-measurement",
  "level": 3
}, {
  "value": "14.13 Capturing Parameter Packs (C++20)",
  "id": "1413-capturing-parameter-packs-c20",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-12",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-3",
  "level": 3
}, {
  "value": "Example 1: Capturing a Pack by Value",
  "id": "example-1-capturing-a-pack-by-value",
  "level": 3
}, {
  "value": "Example 2: Moving a Pack (Perfect Forwarding)",
  "id": "example-2-moving-a-pack-perfect-forwarding",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-2",
  "level": 3
}, {
  "value": "14.14 Lambda Storage / Closure Object",
  "id": "1414-lambda-storage--closure-object",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-13",
  "level": 3
}, {
  "value": "Closure Object Layout",
  "id": "closure-object-layout",
  "level": 3
}, {
  "value": "Closure Object Internals",
  "id": "closure-object-internals",
  "level": 3
}, {
  "value": "Copy and Move of Closure Objects",
  "id": "copy-and-move-of-closure-objects",
  "level": 3
}, {
  "value": "Alignment and Padding",
  "id": "alignment-and-padding",
  "level": 3
}, {
  "value": "14.15 constexpr Lambda Benefits (Deep Dive)",
  "id": "1415-constexpr-lambda-benefits-deep-dive",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-14",
  "level": 3
}, {
  "value": "Benefit 1: Compile-Time Computation",
  "id": "benefit-1-compile-time-computation",
  "level": 3
}, {
  "value": "Benefit 2: Template Metaprogramming Replacement",
  "id": "benefit-2-template-metaprogramming-replacement",
  "level": 3
}, {
  "value": "Benefit 3: Policy-Based Design Without Templates",
  "id": "benefit-3-policy-based-design-without-templates",
  "level": 3
}, {
  "value": "14.16 Real Systems Using Lambdas",
  "id": "1416-real-systems-using-lambdas",
  "level": 2
}, {
  "value": "Where Lambdas Shine in Production",
  "id": "where-lambdas-shine-in-production",
  "level": 3
}, {
  "value": "Example: Async File Reader (Production Pattern)",
  "id": "example-async-file-reader-production-pattern",
  "level": 3
}, {
  "value": "Example: Thread Pool with Lambdas",
  "id": "example-thread-pool-with-lambdas",
  "level": 3
}, {
  "value": "Example: Event System",
  "id": "example-event-system",
  "level": 3
}, {
  "value": "14.17 Interview Corner",
  "id": "1417-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between capturing by value and by reference in a lambda? When would you use each?",
  "id": "q1-what-is-the-difference-between-capturing-by-value-and-by-reference-in-a-lambda-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q2: Explain the lifetime of a lambda that captures <code>this</code>. What can go wrong?",
  "id": "q2-explain-the-lifetime-of-a-lambda-that-captures-this-what-can-go-wrong",
  "level": 3
}, {
  "value": "Q3: What does <code>mutable</code> do in a lambda? Show the generated closure class.",
  "id": "q3-what-does-mutable-do-in-a-lambda-show-the-generated-closure-class",
  "level": 3
}, {
  "value": "Q4: Can a lambda be recursive? How would you implement a recursive lambda?",
  "id": "q4-can-a-lambda-be-recursive-how-would-you-implement-a-recursive-lambda",
  "level": 3
}, {
  "value": "Q5: How does a generic lambda differ from a non-generic lambda at the compiler level?",
  "id": "q5-how-does-a-generic-lambda-differ-from-a-non-generic-lambda-at-the-compiler-level",
  "level": 3
}, {
  "value": "Q6: What is the size of a lambda? How does it compare to std::function?",
  "id": "q6-what-is-the-size-of-a-lambda-how-does-it-compare-to-stdfunction",
  "level": 3
}, {
  "value": "Q7: How would you capture a move-only type like std::unique_ptr in a lambda? Why wasn&#39;t this possible in C++11?",
  "id": "q7-how-would-you-capture-a-move-only-type-like-stdunique_ptr-in-a-lambda-why-wasnt-this-possible-in-c11",
  "level": 3
}, {
  "value": "Q8: What is the IIFE pattern and why is it useful in C++?",
  "id": "q8-what-is-the-iife-pattern-and-why-is-it-useful-in-c",
  "level": 3
}, {
  "value": "Q9: Explain the performance difference between a captureless lambda, a capturing lambda, and std::function.",
  "id": "q9-explain-the-performance-difference-between-a-captureless-lambda-a-capturing-lambda-and-stdfunction",
  "level": 3
}, {
  "value": "Q10: What are the C++17 constexpr lambda requirements? What changed in C++20?",
  "id": "q10-what-are-the-c17-constexpr-lambda-requirements-what-changed-in-c20",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
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
    em: "em",
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
        id: "chapter-14-lambdas-deep-dive",
        children: "Chapter 14: Lambdas (Deep Dive)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/13-move-semantics",
          children: "13-move-semantics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/15-concurrency",
          children: "15-concurrency"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/oop-cpp/14-lambdas/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/14-lambdas/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/14-lambdas/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/14-lambdas/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/14-lambdas/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/14-lambdas/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write lambda expressions with appropriate capture clauses for any scenario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish capture by value, capture by reference, and initialized capture with precision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create generic lambdas (C++14) and constexpr lambdas (C++17) confidently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use lambdas with STL algorithms in all common patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Immediately Invoked Function Expression (IIFE) pattern for const initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between lambda, std::function, and function pointers based on trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze closure object lifetime, storage, and performance implications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on capture modes, mutable, lambda lifetime, and type erasure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lambda Syntax"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[capture](params) -> ret { body }"
            }), " syntactic sugar for function objects"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write concise inline callables anywhere an algorithm needs customization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capture Clause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By-value copies variables into closure; by-reference stores a reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default capture by reference risks dangling — always prefer explicit captures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutable Lambdas"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " removes const on operator() so by-value copies can be modified"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes affect the closure's copy only — original stays untouched"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capturing this"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[this]"
            }), " captures the enclosing object's address; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[*this]"
            }), " copies the whole object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object must outlive the lambda; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[*this]"
            }), " is safer for async callbacks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initialized Captures"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[x = expr]"
            }), " captures arbitrary expressions, including move-only types"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move unique_ptr, make observer_ptr, capture computed results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generic Lambdas"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " parameters make operator() a template"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One lambda works for int, double, string — mega code reuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "constexpr Lambdas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas usable at compile time (C++17); implicit in C++20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for compile-time computations, template arguments, static_assert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lambda as Function Pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captureless lambdas convert to function pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass to C APIs, callback registers, legacy interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IIFE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[]{ ... }()"
            }), " — define and invoke in one expression"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize const variables with complex logic elegantly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STL + Lambdas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas customize sort, transform, find_if, remove_if, accumulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The modern C++ way to configure algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-erased wrapper stores any callable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use sparingly — dynamic allocation and virtual dispatch overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter Pack Capture"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[...args = std::move(args)]"
            }), " captures variadic packs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect forwarding into lambdas for async dispatchers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"14.1 Lambda Syntax\"] --> B[\"14.2 Capture Clause\"]\n    B --> C[\"14.3 Mutable Lambdas\"]\n    B --> D[\"14.4 Capturing this / *this\"]\n    B --> E[\"14.5 Initialized Captures (C++14)\"]\n    B --> F[\"14.6 Generic Lambdas (C++14)\"]\n    B --> G[\"14.7 constexpr Lambdas (C++17)\"]\n    A --> H[\"14.8 Lambda as Function Pointer\"]\n    A --> I[\"14.9 IIFE Pattern\"]\n    A --> J[\"14.10 Return Type Deduction\"]\n    A --> K[\"14.11 Lambdas with STL Algorithms\"]\n    K --> L[\"14.12 std::function vs auto Lambda\"]\n    B --> M[\"14.13 Capturing Parameter Packs\"]\n    A --> N[\"14.14 Lambda Storage / Closure Object\"]\n    G --> O[\"14.15 constexpr Lambda Benefits\"]\n    K --> P[\"14.16 Real Systems\"]\n    P --> Q[\"14.17 Interview Corner\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-lambda-syntax",
      children: "14.1 Lambda Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a lambda like leaving a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sticky note instruction"
      }), " for a colleague. The sticky note says ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what to do"
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what supplies you've attached"
      }), ", and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what result you expect"
      }), " — all in one compact form. You don't need a full procedures document (a named function); a sticky note (a lambda) is faster and lives right where the task is."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-grammar",
      children: "Lambda Grammar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full lambda syntax in C++ is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "[capture](parameters) -> return_type { body }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[capture]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lists variables from enclosing scope that the lambda accesses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(parameters)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (empty if omitted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input parameters the lambda takes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-> return_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trailing return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (deduced if omitted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit return type when deduction is ambiguous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ body }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The code to execute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-write-a-lambda",
      children: "Numbered Steps to Write a Lambda"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), " — decide what to capture"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[x]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[&x]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), " with parameters if needed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(int a, int b)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optionally specify ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-> return_type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-> int"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Write the body in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ return a + b; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assign to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " variable (or invoke immediately)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto sum = ...;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION create_lambda(capture_mode, parameters, body):\n    IF capture_mode == \"by_value\":\n        COPY listed variables into closure object\n    ELSE IF capture_mode == \"by_reference\":\n        STORE references to listed variables\n    \n    CREATE anonymous function object with operator()\n    RETURN the closure object\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-lambda-examples",
      children: "Basic Lambda Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    // Simplest lambda: no capture, one param, return deduced\n    auto square = [](int x) { return x * x; };\n    std::cout << \"square(5) = \" << square(5) << \"\\n\";\n\n    // Lambda with explicit return type\n    auto divide = [](double a, double b) -> double {\n        if (b == 0.0) return 0.0;\n        return a / b;\n    };\n    std::cout << \"divide(10, 3) = \" << divide(10, 3) << \"\\n\";\n\n    // Lambda with multiple statements\n    auto describe = [](int score) {\n        if (score >= 90) return \"Excellent\";\n        if (score >= 70) return \"Good\";\n        return \"Needs improvement\";\n    };\n    std::cout << \"score 85: \" << describe(85) << \"\\n\";\n\n    // Lambda stored in std::function (type erasure)\n    std::function<int(int)> func = [](int x) { return x * 2; };\n    std::cout << \"func(10) = \" << func(10) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "square(5) = 25\ndivide(10, 3) = 3.33333\nscore 85: Good\nfunc(10) = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-the-compiler-generates-closure-object",
      children: "What the Compiler Generates: Closure Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every lambda is syntactic sugar for a compiler-generated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "closure class"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator()"
      }), ". Example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto cmp = [](int a, int b) { return a > b; };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler generates something like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct __lambda_1 {\n    bool operator()(int a, int b) const {\n        return a > b;\n    }\n};\n__lambda_1 cmp;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-lambda-invocation",
      children: "Dry Run: Lambda Invocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto square = [](int x) { return x * x; };"
      }), " then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "square(5)"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "square.operator()(5)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter passed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x * x"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 * 5 = 25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value returned to caller"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda creation (no capture)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data to copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda creation (N captures by value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy each captured variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda creation (N captures by ref)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) for refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References are small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(body)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(body)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as equivalent function"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-capture-clause-deep-dive",
      children: "14.2 Capture Clause Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda's capture clause is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "packing a suitcase"
      }), " before a trip. You decide what to bring along:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By value"
        }), " = you pack a photocopy of a document. You can read it, even scribble on your copy, but the original stays home."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By reference"
        }), " = you pack a GPS tracker pointing to your house. You can see what's happening at home in real time, but if the house burns down, the tracker is useless (dangling reference!)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capture-modes-reference",
      children: "Capture Modes Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capture Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime Concern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — simplest form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[x]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Capture ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe — owns a copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[&x]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Capture ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " by reference"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous — must outlive lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[=]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default capture all by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe but wasteful — captures everything used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[&]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default capture all by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous — dangling refs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[&, x]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default ref, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[=, &x]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default value, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " by ref"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Danger zone — ref may dangle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[this]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture enclosing object by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object must outlive lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[*this]"
            }), " (C++17)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture enclosing object by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe for async — owns a copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[x = expr]"
            }), " (C++14)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalized capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible — own any expression result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capture-by-value-deep-example",
      children: "Capture by Value: Deep Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nint main() {\n    int multiplier = 10;\n    int offset = 5;\n\n    // Capture by value — copies made at lambda creation\n    auto compute = [multiplier, offset](int x) {\n        return x * multiplier + offset;\n    };\n\n    multiplier = 100;  // Changes original — lambda still uses old copy\n    offset = 50;\n\n    std::cout << \"compute(3) = \" << compute(3) << \"\\n\";\n    // 3 * 10 + 5 = 35  (NOT 3 * 100 + 50)\n\n    // Proof: multiple copies have independent state\n    auto counter = [count = 0]() mutable {\n        return ++count;\n    };\n    auto counter2 = counter;  // Copy closure — independent state\n\n    std::cout << \"counter():  \" << counter() << counter() << counter() << \"\\n\";\n    std::cout << \"counter2(): \" << counter2() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "compute(3) = 35\ncounter():  123\ncounter2(): 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capture-by-reference-deep-example",
      children: "Capture by Reference: Deep Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nint main() {\n    int sum = 0;\n    int count = 0;\n\n    auto add = [&sum, &count](int value) {\n        sum += value;\n        ++count;\n    };\n\n    add(10);\n    add(20);\n    add(30);\n\n    std::cout << \"sum   = \" << sum << \"\\n\";    // 60\n    std::cout << \"count = \" << count << \"\\n\";  // 3\n\n    // Danger: dangling reference\n    std::function<void()> dangling;\n    {\n        int local = 42;\n        dangling = [&local]() { std::cout << local << \"\\n\"; };\n    }  // local destroyed here\n    // dangling();  // UNDEFINED BEHAVIOR — local is gone\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sum   = 60\ncount = 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capture-by-value-vs-reference--comparison-table",
      children: "Capture by Value vs Reference — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capture by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capture by Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is stored"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A copy of the variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A reference to the variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) — copies N variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) — but refs are pointer-sized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutation inside lambda"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Needs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " keyword"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Allowed without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Affects original?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never — operates on copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — modifies original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime dependence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent — owns the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent — original must outlive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dangling risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High if lambda escapes scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small data, read-only, parallel execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large objects, need side effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move-only types"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move"
            }), " in init capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (ref to existing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy cost at creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No copy — just store address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (own copy, no race)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsafe without synchronization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-capture-by-value-mutation",
      children: "Dry Run: Capture by Value Mutation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int val = 5;\nauto lambda = [val]() mutable {\n    val += 10;\n    return val;\n};\nint result = lambda();\n// val outside is still 5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "val"
            }), " (outside)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "val"
            }), " (closure copy)"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int val = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create lambda, capture ", (0,jsx_runtime.jsx)(_components.code, {
              children: "val"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lambda()"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "val += 10; return val;"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 (persists in closure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Second call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lambda()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-with-captures",
      children: "Common Mistakes with Captures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void example() {\n    std::vector<int> data = {1, 2, 3};\n    auto bad = [=]() { /* captures everything */ };  // Wasteful with large vectors\n    auto good = [&data]() { /* explicit reference */ };\n\n    // Mistake: capturing a pointer by value copies the pointer, not the pointee\n    int* ptr = new int(42);\n    auto capture_ptr = [ptr]() { return *ptr; };  // Copies the pointer — fine\n    delete ptr;\n    // capture_ptr();  // UB! pointee is deleted\n\n    // Mistake: capturing static variables\n    static int counter = 0;\n    auto lam = [counter]() { return ++counter; };  // WARNING: captures the static\n    // This actually captures the current value, not the static itself\n    // To truly capture a static, use reference: [&counter]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-mutable-lambdas",
      children: "14.3 Mutable Lambdas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " lambda is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "notepad with a pencil"
      }), " versus a whiteboard with a marker:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default (const)"
        }), " = whiteboard marker. You can read the notes you brought, but you CANNOT change them. If you want to change the original board, you must point at the reference (capture by reference)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutable"
        }), " = pencil on paper. You can read your notes AND scribble on them. But it's YOUR copy — the original stays clean."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-default-const",
      children: "Why Default Const?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The closure's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator()"
      }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " for safety. Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), ", a lambda cannot accidentally mutate captured-by-value variables, which prevents subtle bugs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Closure {\n    int captured_val_;\n    \n    // Default: const\n    auto operator()() const {\n        // captured_val_ = 42;  // COMPILE ERROR: const method\n        return captured_val_;\n    }\n    \n    // With mutable:\n    auto operator()() /* non-const */ {\n        captured_val_ = 42;  // OK\n        return captured_val_;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mutable-lambda-examples",
      children: "Mutable Lambda Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <algorithm>\n#include <vector>\n\nint main() {\n    // Example 1: Simple counter\n    int base = 10;\n    auto counter = [base]() mutable {\n        base += 5;\n        return base;\n    };\n\n    std::cout << \"Call 1: \" << counter() << \"\\n\";  // 15\n    std::cout << \"Call 2: \" << counter() << \"\\n\";  // 20\n    std::cout << \"Original base: \" << base << \"\\n\"; // 10 (unchanged)\n\n    // Example 2: Mutable with reference — reference doesn't need mutable\n    int total = 0;\n    auto accumulator = [&total](int x) {\n        total += x;  // OK — reference, no mutable needed\n        return total;\n    };\n    std::cout << \"After add 10: \" << accumulator(10) << \"\\n\";  // 10\n    std::cout << \"After add 20: \" << accumulator(20) << \"\\n\";  // 30\n\n    // Example 3: Stateful lambda with STL (with side effects)\n    std::vector<int> nums = {1, 2, 3, 4, 5};\n    int shift = 10;\n    std::for_each(nums.begin(), nums.end(),\n        [shift](int& n) mutable {\n            n += shift;\n            shift += 1;  // Each call increases shift for next element\n        });\n    // shift outside remains 10\n    // nums becomes: 11, 13, 16, 20, 25\n\n    std::cout << \"After for_each with mutable: \";\n    for (int n : nums) std::cout << n << \" \";\n    std::cout << \"\\n\";\n    std::cout << \"shift outside: \" << shift << \"\\n\";\n\n    // Example 4: Mutable + generic lambda = accumulating lambda\n    auto running_avg = [sum = 0.0, count = 0](double val) mutable {\n        sum += val;\n        ++count;\n        return sum / count;\n    };\n\n    std::cout << \"Running avg: \";\n    for (double v : {2.0, 4.0, 6.0, 8.0})\n        std::cout << running_avg(v) << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Call 1: 15\nCall 2: 20\nOriginal base: 10\nAfter add 10: 10\nAfter add 20: 30\nAfter for_each with mutable: 11 13 16 20 25\nshift outside: 10\nRunning avg: 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-mutable-lambda-state",
      children: "Dry Run: Mutable Lambda State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto counter = [count = 0]() mutable { return ++count; };\ncounter();  // 1\ncounter();  // 2\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), " (closure)"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lambda created, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count = 0"
            }), " init capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["First call: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++count"
            }), " → 1, return 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Second call: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++count"
            }), " → 2, return 2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Third call: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++count"
            }), " → 3, return 3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy"
      }), " of this lambda starts at 0 independently:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), " (original)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), " (copy)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counter()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counter2 = counter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counter()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counter2()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stateful-lambda-idioms",
      children: "Stateful Lambda Idioms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Unique ID generator\nauto make_id_generator() {\n    return [id = 0]() mutable { return id++; };\n}\n\n// Running statistics\nauto stats = [min = INT_MAX, max = INT_MIN, sum = 0LL, count = 0](int val) mutable {\n    min = std::min(min, val);\n    max = std::max(max, val);\n    sum += val;\n    ++count;\n    return;\n};\n\n// Generator that skips every Nth call\nauto throttled = [skip = 0, n = 3](int val) mutable -> std::optional<int> {\n    if (++skip % n == 0) return val;\n    return std::nullopt;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--mutable-lambda-state",
      children: "Complexity Analysis — Mutable Lambda State"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create stateful lambda (k captures)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initializes k state variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invoke mutable lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(body)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(body)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as non-mutable body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep copies all by-value captures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move each by-value capture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "144-capturing-this-and-this",
      children: ["14.4 Capturing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Capturing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " is like giving someone ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "keys to your apartment"
      }), ". They can enter, use your kitchen, access your fridge — anything the apartment contains. But if the apartment is demolished while they still have keys, they're holding useless metal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Capturing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " (C++17) is like giving someone a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fully furnished replica apartment"
      }), ". They have their own copy of everything — even if the original burns down, their copy is fine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "capturing-this-by-reference",
      children: ["Capturing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " (by Reference)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a lambda is defined inside a non-static member function, it can capture ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " to access class members:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass ShoppingCart {\npublic:\n    ShoppingCart(double discount) : discount_(discount) {}\n\n    void apply_discount(std::vector<double>& prices) {\n        // [this] captures the current object by reference\n        std::transform(prices.begin(), prices.end(), prices.begin(),\n            [this](double price) {\n                return price * (1.0 - discount_);\n            });\n    }\n\n    void print_prices(const std::vector<double>& prices) const {\n        std::for_each(prices.begin(), prices.end(),\n            [this](double p) {\n                std::cout << \"$\" << p;\n                if (p > 100.0) std::cout << \" (premium)\";\n                std::cout << \"\\n\";\n            });\n    }\n\nprivate:\n    double discount_;\n};\n\nint main() {\n    ShoppingCart cart(0.10);  // 10% discount\n    std::vector<double> items = {99.99, 150.00, 49.99};\n    \n    cart.apply_discount(items);\n    // items: 89.991, 135.00, 44.991\n\n    cart.print_prices(items);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$89.991\n$135.00 (premium)\n$44.991\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "danger-lambda-outliving-this",
      children: ["DANGER: Lambda Outliving ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The single biggest lambda lifetime bug:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nclass Dangerous {\npublic:\n    std::function<int()> create_callback() {\n        int local = 42;\n        // BAD: lambda captures this, will be called after object destroyed\n        return [this]() { return value_; };\n    }\n\n    void set_value(int v) { value_ = v; }\n\nprivate:\n    int value_ = 100;\n};\n\nint main() {\n    std::function<int()> callback;\n    {\n        Dangerous d;\n        d.set_value(200);\n        callback = d.create_callback();\n        std::cout << \"Inside scope: \" << callback() << \"\\n\";  // OK\n    }\n    // d destroyed here\n    // std::cout << \"Outside scope: \" << callback() << \"\\n\";  // UB! dangling this\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "capturing-this-by-value-c17",
      children: ["Capturing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " by Value (C++17)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C++17 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[*this]"
      }), " which captures a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy"
      }), " of the entire object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nclass Safe {\npublic:\n    std::function<int()> create_callback() const {\n        // Capture a copy of *this — safe for async operations\n        return [*this]() { return value_; };\n    }\n\n    void set_value(int v) { value_ = v; }\n\nprivate:\n    int value_ = 100;\n};\n\nint main() {\n    std::function<int()> callback;\n    {\n        Safe s;\n        s.set_value(200);\n        callback = s.create_callback();\n    }  // s destroyed — but lambda captured a copy\n\n    std::cout << \"After destruction: \" << callback() << \"\\n\";  // 200 — safe!\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "After destruction: 200\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "this-vs-this--comparison",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "[this]"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[*this]"
      }), " — Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[this]"
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[*this]"
            }), " (C++17)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Captures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of object (pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of entire object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda dies if object dies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda self-sufficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(Class) bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No copy overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy cost at creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modify members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifies original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifies own copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can call const members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can call const members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move-only type?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not relevant (pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires copy ctor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-this-capture",
      children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[*this]"
      }), " Capture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Counter {\n    int val_ = 0;\npublic:\n    auto get_callback() { return [*this]() mutable { return ++val_; }; }\n};\n\nCounter c;\nauto cb = c.get_callback();\ncb();  // 1\nc.val_ // still 0\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.val_"
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Closure's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "val_"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Counter c;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "c.get_callback()"
            }), " — capture ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cb()"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++val_"
            }), " (closure's copy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cb()"
            }), " again"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "subtle-implicit-this-in-c20-with-",
      children: ["Subtle: Implicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[this]"
      }), " in C++20 with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[=]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In C++11/14/17, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[=]"
      }), " inside a member function implicitly captures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " by reference. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++20 deprecates this."
      }), " Always prefer explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[this]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[*this]"
      }), ", or specific member captures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-initialized-captures--generalized-capture-c14",
      children: "14.5 Initialized Captures / Generalized Capture (C++14)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "generalized capture"
      }), " is like packing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "custom travel bag"
      }), " — not just grabbing what's on the table, but building exactly what you need right there in the suitcase. Need a move-only drone? Pack it directly. Need to compute a value first? Do the math while packing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "[var_name = expression](params) { body }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expression"
      }), " is evaluated once when the lambda is created, and the result is stored as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "var_name"
      }), " inside the closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-moving-unique-ownership",
      children: "Example 1: Moving Unique Ownership"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <functional>\n\nint main() {\n    std::unique_ptr<int> ptr = std::make_unique<int>(42);\n\n    // C++11: impossible — unique_ptr is move-only, can't capture by value or ref safely\n    // C++14: initialized capture moves ptr into the closure\n    auto consumer = [ptr = std::move(ptr)]() {\n        std::cout << \"Owned value: \" << *ptr << \"\\n\";\n    };\n\n    // ptr is now nullptr (moved from)\n    if (!ptr) std::cout << \"Original ptr is now null\\n\";\n\n    consumer();\n\n    // Can also create unique_ptr inline in capture\n    auto creator = [p = std::make_unique<int>(99)]() {\n        return *p;\n    };\n    std::cout << \"Created value: \" << creator() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original ptr is now null\nOwned value: 42\nCreated value: 99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-computed-capture",
      children: "Example 2: Computed Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint compute_base(int factor) {\n    return factor * 100 + 42;\n}\n\nint main() {\n    int factor = 3;\n\n    // Compute value at capture time, not at invocation time\n    auto calculator = [base = compute_base(factor), factor](int x) {\n        return base + x * factor;\n    };\n\n    // Change factor — the lambda already captured its own copies\n    factor = 100;\n    std::cout << \"calculator(5) = \" << calculator(5) << \"\\n\";\n    // compute_base(3) = 342, base = 342, captured factor = 3\n    // 342 + 5 * 3 = 357\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "calculator(5) = 357\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-naming-a-complex-expression",
      children: "Example 3: Naming a Complex Expression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto lambda = [result = [] { /* complex init */ return 42; }()] {\n    return result * 2;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-capture-a-vector-by-moving",
      children: "Example 4: Capture a Vector by Moving"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> big_data(10'000'000, 42);\n    \n    // Move the entire vector into the lambda — zero copy\n    auto process = [data = std::move(big_data)]() {\n        return data.size();  // fine — data owned by lambda\n    };\n    // big_data is now empty\n    \n    std::cout << \"big_data size: \" << big_data.size() << \"\\n\";\n    std::cout << \"closure data size: \" << process() << \"\\n\";\n    \n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "big_data size: 0\nclosure data size: 10000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-initialized-captures",
      children: "Multiple Initialized Captures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple captures are comma-separated:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto stats = [sum = 0.0, count = 0, &external_ref](double val) mutable {\n    sum += val;\n    ++count;\n    external_ref = sum / count;\n    return sum / count;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-initialized-capture",
      children: "Dry Run: Initialized Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto func = [x = 5, y = 10]() { return x + y; };\nint result = func();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Closure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Closure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "y"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lambda created, init ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 5"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "y = 10"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "func()"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x + y"
            }), " = 5 + 10 = 15"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move capture (unique_ptr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy capture (vector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies N elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computed capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(expr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression evaluated once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple captures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(sum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each init evaluated in order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-generic-lambdas-c14",
      children: "14.6 Generic Lambdas (C++14)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A generic lambda is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "universal adapter plug"
      }), " — one plug works in any country's socket. The plug doesn't need to know the voltage beforehand; it adapts to whatever it's plugged into."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-1",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto generic = [](auto x, auto y) { return x + y; };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler transforms each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " parameter into a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template parameter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct __generic_lambda {\n    template <typename T, typename U>\n    auto operator()(T x, U y) const { return x + y; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-basic-generic-lambda",
      children: "Example 1: Basic Generic Lambda"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    // Generic adder — works with any type that has operator+\n    auto add = [](auto a, auto b) { return a + b; };\n\n    std::cout << \"int + int:       \" << add(3, 4) << \"\\n\";\n    std::cout << \"double + double: \" << add(3.14, 2.72) << \"\\n\";\n    std::cout << \"string + string: \" << add(std::string(\"Hello, \"), std::string(\"World!\")) << \"\\n\";\n    std::cout << \"char + char:     \" << add('A', 1) << \"\\n\";  // 'A' + 1 = 'B'\n\n    // Mixing types — each auto deduces independently\n    std::cout << \"mix (3 + 4.5):   \" << add(3, 4.5) << \"\\n\";  // double\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int + int:       7\ndouble + double: 5.86\nstring + string: Hello, World!\nchar + char:     B\nmix (3 + 4.5):   7.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-generic-lambda-with-stl",
      children: "Example 2: Generic Lambda with STL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nint main() {\n    std::vector<int>     integers = {3, 1, 4, 1, 5};\n    std::vector<double>  decimals = {2.7, 1.4, 3.14, 0.0};\n    std::vector<std::string> words = {\"banana\", \"apple\", \"cherry\", \"date\"};\n\n    // One generic lambda for ANY type\n    auto printer = [](const auto& value) {\n        std::cout << value << \" \";\n    };\n\n    std::cout << \"integers: \";  std::for_each(integers.begin(), integers.end(), printer);\n    std::cout << \"\\ndecimals: \"; std::for_each(decimals.begin(), decimals.end(), printer);\n    std::cout << \"\\nwords:    \"; std::for_each(words.begin(), words.end(), printer);\n    std::cout << \"\\n\";\n\n    // Generic comparator — works on any comparable type\n    auto sorter = [](const auto& a, const auto& b) { return a < b; };\n\n    std::sort(integers.begin(), integers.end(), sorter);\n    std::sort(decimals.begin(), decimals.end(), sorter);\n    std::sort(words.begin(), words.end(), sorter);\n\n    std::cout << \"\\nSorted integers: \";  std::for_each(integers.begin(), integers.end(), printer);\n    std::cout << \"\\nSorted decimals: \";  std::for_each(decimals.begin(), decimals.end(), printer);\n    std::cout << \"\\nSorted words:    \";  std::for_each(words.begin(), words.end(), printer);\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "integers: 3 1 4 1 5\ndecimals: 2.7 1.4 3.14 0\nwords:    banana apple cherry date\n\nSorted integers: 1 1 3 4 5\nSorted decimals: 0 1.4 2.7 3.14\nSorted words:    apple banana cherry date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-generic-lambda-with-type-constraint-c20",
      children: "Example 3: Generic Lambda with Type Constraint (C++20)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <concepts>\n#include <type_traits>\n\nint main() {\n    // C++20: constrained auto uses concepts\n    auto sum = [](std::integral auto a, std::integral auto b) {\n        return a + b;\n    };\n\n    std::cout << sum(3, 4) << \"\\n\";       // OK: int satisfies integral\n    // std::cout << sum(3.5, 2.5) << \"\\n\"; // ERROR: double doesn't satisfy integral\n\n    // Template-like generic lambda with perfect forwarding\n    auto forwarder = [](auto&&... args) {\n        return std::invoke([](auto&&... inner) {\n            return (inner + ...);\n        }, std::forward<decltype(args)>(args)...);\n    };\n\n    std::cout << forwarder(1, 2, 3, 4, 5) << \"\\n\";  // 15\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "template-expansion-what-compiler-generates",
      children: "Template Expansion: What Compiler Generates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto lambda = [](auto a, auto b) { return a + b; };"
      }), " called as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lambda(3, 4.5)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct __lambda {\n    template <typename T, typename U>\n    auto operator()(T a, U b) const -> decltype(a + b) {\n        return a + b;\n    }\n};\n\n// Instantiation for lambda(3, 4.5):\ntemplate <>\nauto __lambda::operator()<int, double>(int a, double b) const -> double {\n    return static_cast<double>(a) + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-generic-lambda-instantiation",
      children: "Dry Run: Generic Lambda Instantiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto twice = [](auto x) { return x + x; };\n\ntwice(5);       // instantiation: int operator()(int)\ntwice(3.14);    // instantiation: double operator()(double)\ntwice(\"Hi\");    // instantiation: const char* operator()(const char*) — pointer addition!\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Template ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Body ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x + x"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "twice(5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 + 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int(10)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "twice(3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14 + 3.14"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double(6.28)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "twice(std::string(\"ab\"))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"ab\" + \"ab\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::string(\"abab\")"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-lambda-with-auto-and-auto",
      children: "Generic Lambda with auto& and auto&&"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// By reference: can modify\nincrement = [](auto& x) { x++; };\n\n// Perfect forwarding: preserves value category\nforwarder = [](auto&& x) -> decltype(auto) {\n    return std::forward<decltype(x)>(x);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-1",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as hand-written template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler generates code per distinct type set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N distinct calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) instantiations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary size may grow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as regular function object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No overhead vs hand-written functor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-constexpr-lambdas-c17",
      children: "14.7 constexpr Lambdas (C++17)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A constexpr lambda is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pre-calculated multiplication table"
      }), " — you compute all the values once at compile time, then use them instantly at runtime with zero calculation cost. It's the difference between a chef who prepares ingredients ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " the dinner rush versus one who chops vegetables for every single order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concept",
      children: "Core Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In C++17, lambdas can be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr"
      }), " — their body can be evaluated at compile time if all captured variables are constant expressions and the body meets constexpr requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++17: explicit constexpr lambda\nauto square = [](int x) constexpr { return x * x; };\n\n// Usage at compile time\nconstexpr int result = square(5);  // evaluated at compile time\nstatic_assert(result == 25);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++20 improvement:"
      }), " Lambdas are implicitly constexpr if they satisfy constexpr requirements — no need for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr"
      }), " keyword."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-compile-time-computation",
      children: "Example 1: Compile-Time Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <array>\n\nint main() {\n    // Factorial via constexpr lambda (C++17)\n    constexpr auto factorial = [](int n) {\n        int result = 1;\n        for (int i = 2; i <= n; ++i)\n            result *= i;\n        return result;\n    };\n\n    // Verified at compile time\n    constexpr int fact5 = factorial(5);  // 120\n    static_assert(fact5 == 120);\n\n    // Use as template argument\n    std::array<int, factorial(4)> arr;  // array of 24 ints\n    std::cout << \"Array size: \" << arr.size() << \"\\n\";  // 24\n\n    // Regular runtime call also works\n    int n = 6;\n    std::cout << \"factorial(\" << n << \") = \" << factorial(n) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array size: 24\nfactorial(6) = 720\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-compile-time-string-processing",
      children: "Example 2: Compile-Time String Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <array>\n#include <algorithm>\n\nint main() {\n    // Counting vowels at compile time\n    constexpr auto count_vowels = [](const char* str) {\n        int count = 0;\n        for (const char* p = str; *p; ++p) {\n            char c = *p;\n            if (c == '\"'\"'a'\"'\"' || c == '\"'\"'e'\"'\"' || c == '\"'\"'i'\"'\"' || c == '\"'\"'o'\"'\"' || c == '\"'\"'u'\"'\"' ||\n                c == '\"'\"'A'\"'\"' || c == '\"'\"'E'\"'\"' || c == '\"'\"'I'\"'\"' || c == '\"'\"'O'\"'\"' || c == '\"'\"'U'\"'\"')\n                ++count;\n        }\n        return count;\n    };\n\n    constexpr int vowels = count_vowels(\"Hello, constexpr lambda!\");\n    static_assert(vowels == 7);  // e, o, o, e, e, a, a\n\n    std::cout << \"Vowels count: \" << vowels << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-constexpr-capture",
      children: "Example 3: constexpr Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nint main() {\n    constexpr int multiplier = 10;\n    \n    // Capture a constant expression — lambda can be constexpr\n    constexpr auto scale = [multiplier](int x) {\n        return x * multiplier;\n    };\n    \n    constexpr int scaled = scale(5);  // 50 — compile time\n    static_assert(scaled == 50);\n    \n    std::cout << scaled << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefits-of-constexpr-lambdas",
      children: "Benefits of constexpr Lambdas"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero runtime cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed during compilation — no CPU cycles at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template arguments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result can be used as non-type template parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "static_assert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify logic at compile time — catch bugs before running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization enabler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler can constant-fold and inline aggressively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No ODR issues"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time evaluation avoids linkage problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smaller binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No generated code for the computation path"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constexpr-lambda-rules-c17-vs-c20",
      children: "constexpr Lambda Rules (C++17 vs C++20)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++17"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++20"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must write ", (0,jsx_runtime.jsx)(_components.code, {
              children: "constexpr"
            }), " explicitly"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit if body allows it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capture of non-constexpr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (runtime call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic_cast/typeid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed in body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed if constexpr-compatible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try-catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (but UB in constant expr)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asm, goto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed in constant expr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mutable member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed at constant eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-constexpr-lambda-evaluation",
      children: "Dry Run: constexpr Lambda Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "constexpr auto sum_range = [](int n) {\n    int s = 0;\n    for (int i = 1; i <= n; ++i) s += i;\n    return s;\n};\n\nconstexpr int result = sum_range(100);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile-time evaluation trace:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s"
            }), " before"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s"
            }), " after"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4950"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5050"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: 5050, computed entirely at compile time. No runtime loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "148-lambda-as-function-pointer",
      children: "14.8 Lambda as Function Pointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "captureless lambda"
      }), " converting to a function pointer is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "business card"
      }), " — it's lightweight, universally accepted, and carries no extra baggage. A lambda ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "with captures"
      }), " is like a full resume folder — it has more context, but you can't just slip it into a standard card holder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-rule",
      children: "The Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda with an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "empty capture list"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), ") has an implicit conversion to a function pointer matching its signature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void (*fptr)(int) = [](int x) { std::cout << x; };  // OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lambda with captures cannot convert to a function pointer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int y = 5;\n// void (*fptr)(int) = [y](int x) { std::cout << x + y; };  // COMPILE ERROR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-c-api-callback",
      children: "Example 1: C API Callback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdlib>\n\n// qsort takes a function pointer (C-style)\nint compare_ints(const void* a, const void* b) {\n    int ia = *static_cast<const int*>(a);\n    int ib = *static_cast<const int*>(b);\n    return ia - ib;\n}\n\nint main() {\n    int arr[] = {5, 3, 1, 4, 2};\n    constexpr size_t n = sizeof(arr) / sizeof(arr[0]);\n\n    // Lambda as function pointer — clean and local\n    qsort(arr, n, sizeof(int),\n        [](const void* a, const void* b) -> int {\n            return *static_cast<const int*>(a) - *static_cast<const int*>(b);\n        });\n\n    for (int x : arr) std::cout << x << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-stdthread-with-captureless-lambda",
      children: "Example 2: std::thread with Captureless Lambda"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n\nint main() {\n    std::thread t([](int x, int y) {\n        std::cout << \"Sum: \" << (x + y) << \"\\n\";\n    }, 10, 20);\n    t.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-function-pointer-via--operator-trick",
      children: "Example 3: Function Pointer via + Operator Trick"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lesser-known trick — prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " forces conversion to function pointer:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nvoid invoke(void (*f)()) {\n    f();\n}\n\nint main() {\n    auto lambda = []() { std::cout << \"called\\n\"; };\n\n    invoke(lambda);            // OK: implicit conversion\n    invoke(+lambda);           // Also OK: + triggers conversion to fn ptr\n\n    // Verify it's a function pointer\n    void (*ptr)() = +[]() { std::cout << \"ptr\\n\"; };\n    ptr();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-vs-function-pointer-vs-stdfunction--comparison-table",
      children: "Lambda vs Function Pointer vs std::function — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Captureless Lambda (as fn ptr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C-style Function Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte (empty closure) + fn ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32–64 bytes (type-erased storage)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capture state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May heap-allocate for large functors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtual dispatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type erasure + indirect call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inline-able"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No (unless whole-program)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Rarely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template compatible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C API compatible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conversion cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can allocate + copy captures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move-only captures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (C++26)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callbacks, C interop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy C code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-erased storage, queues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-hierarchy",
      children: "Performance Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fastest:  Captureless lambda (inlined) / function pointer (direct call)\nMedium:   Lambda with captures (direct call on closure)\nSlowest:  std::function (type erasure + heap allocation + indirect call)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-function-pointer-conversion",
      children: "Dry Run: Function Pointer Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void apply(int x, int (*op)(int)) { std::cout << op(x); }\nauto double_it = [](int x) { return x * 2; };\napply(5, double_it);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compiler sees ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[](int x) { return x * 2; }"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure type generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler detects empty capture list"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adds ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator auto(*)()"
            }), " conversion"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "apply(5, double_it)"
            }), " — implicit conversion"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double_it"
            }), " → function pointer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "apply"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "op(5)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "5 * 2 = 10"
            }), " printed"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "149-iife-immediately-invoked-function-expression",
      children: "14.9 IIFE (Immediately Invoked Function Expression)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An IIFE is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-destructing message"
      }), " — it's created, executes its purpose, and disappears, leaving only the result behind. It never lingers, never gets reused, never clutters the namespace."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-2",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Define and invoke immediately\nauto result = [](params) -> return_type {\n    // complex logic\n    return value;\n}(arguments);  // <-- the () invokes right here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-const-initialization-with-complex-logic",
      children: "Example 1: Const Initialization with Complex Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    const std::vector<int> data = {10, 20, 30, 40, 50};\n\n    // Without IIFE — need a separate function or mutable variable\n    int sum1 = 0;\n    double avg1;\n    for (int x : data) sum1 += x;\n    avg1 = static_cast<double>(sum1) / data.size();\n    // sum1 is now useless but still in scope!\n\n    // With IIFE — clean, const, no pollution\n    const double average = [&data]() -> double {\n        int sum = std::accumulate(data.begin(), data.end(), 0);\n        return static_cast<double>(sum) / data.size();\n    }();  // <-- invoke immediately\n\n    std::cout << \"Average: \" << average << \"\\n\";\n    // sum from lambda is out of scope\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Average: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-complex-configuration-object",
      children: "Example 2: Complex Configuration Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <map>\n\nstruct AppConfig {\n    std::string db_host;\n    int db_port;\n    bool enable_cache;\n    int max_connections;\n    std::map<std::string, std::string> features;\n};\n\nint main() {\n    // IIFE initializes a complex const config\n    const AppConfig config = []() -> AppConfig {\n        AppConfig cfg;\n        cfg.db_host = \"localhost\";\n        cfg.db_port = 5432;\n\n        // Environment-dependent configuration\n        #ifdef DEBUG\n        cfg.enable_cache = false;\n        cfg.max_connections = 5;\n        #else\n        cfg.enable_cache = true;\n        cfg.max_connections = 100;\n        #endif\n\n        cfg.features[\"logging\"] = \"verbose\";\n        cfg.features[\"auth\"] = \"oauth2\";\n        return cfg;\n    }();  // <-- immediately invoked\n\n    std::cout << \"DB: \" << config.db_host << \":\" << config.db_port << \"\\n\";\n    std::cout << \"Cache: \" << (config.enable_cache ? \"on\" : \"off\") << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DB: localhost:5432\nCache: off\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-iife-with-move-semantics",
      children: "Example 3: IIFE with Move Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n\nstruct Resource {\n    int id;\n    std::string data;\n};\n\nclass Manager {\npublic:\n    Manager() : resource_([]() {\n        auto res = std::make_unique<Resource>();\n        res->id = std::rand() % 1000;\n        res->data = \"Initialized with complex logic\";\n        // Could do file I/O, network lookup, etc.\n        return res;\n    }()) {}\n\n    void print() const {\n        std::cout << \"Resource #\" << resource_->id << \": \" << resource_->data << \"\\n\";\n    }\n\nprivate:\n    std::unique_ptr<Resource> resource_;\n};\n\nint main() {\n    Manager m;\n    m.print();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-iife-execution",
      children: "Dry Run: IIFE Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "const int result = [](int a, int b) {\n    int sum = a + b;\n    int product = a * b;\n    return product - sum;\n}(5, 3);\n// result = (5*3) - (5+3) = 15 - 8 = 7\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sum"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "product"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda created with params (5, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sum = a + b"
            }), " = 5 + 3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "product = a * b"
            }), " = 5 * 3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "return product - sum"
            }), " = 15 - 8"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " = 7"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iife-without-parameters-clearing-a-vector",
      children: "IIFE Without Parameters: Clearing a vector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v = {1, 2, 3};\n// IIFE: swap with empty vector\nconst auto cleared = [v = std::move(v)] { return v; }();\n// cleared is now {1, 2, 3}, original v is empty\n// Equivalent to: std::vector<int> cleared; std::swap(cleared, v);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1410-return-type-deduction",
      children: "14.10 Return Type Deduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Return type deduction is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-adjusting measuring cup"
      }), " — you don't decide the unit (cups, ml, oz); the cup figures out what unit makes sense based on what you pour in."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-deduction-works",
      children: "How Deduction Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler deduces the return type from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " statement(s). If there are multiple returns, they must all deduce to the same type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto lambda = [](int x) { return x * 2; };        // returns int\nauto lambda2 = [](double x) { return x * 2; };    // returns double\nauto lambda3 = [](int x) {                         // returns double (promotion)\n    if (x > 0) return 2.5 * x;\n    return 0.0;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-explicitly-specify-return-type",
      children: "When to Explicitly Specify Return Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// 1. Multiple return types differ\nauto bad = [](bool flag, int x) {\n    if (flag) return x;           // int\n    else      return 3.14;        // double — COMPILE ERROR\n};\n\nauto good = [](bool flag, int x) -> double {\n    if (flag) return x;           // int promoted to double\n    else      return 3.14;\n};\n\n// 2. No return statement — returns void\nauto logger = [](const std::string& msg) {\n    std::cout << msg << \"\\n\";  // deduced as void\n};\n\n// 3. Return type not deducible (e.g., initializer list)\nauto init = []() -> std::vector<int> {\n    return {1, 2, 3};  // MUST specify return type\n};\n\n// 4. Recursive lambda — MUST specify return type\nauto factorial = [](int n) -> long long {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-all-deduction-modes",
      children: "Example: All Deduction Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nint main() {\n    // Deduced as int\n    auto f1 = [](int x) { return x * 2; };\n    static_assert(std::is_same_v<decltype(f1(5)), int>);\n\n    // Deduced as double (int promoted)\n    auto f2 = [](int x) -> double { return x; };\n    static_assert(std::is_same_v<decltype(f2(5)), double>);\n\n    // Deduced as const reference (decltype(auto))\n    const std::vector<int> vec = {1, 2, 3};\n    auto f3 = [&vec]() -> decltype(auto) { return vec[0]; };\n    // Returns const int& — no copy\n\n    std::cout << \"f1(5): \" << f1(5) << \"\\n\";\n    std::cout << \"f2(5): \" << f2(5) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "f1(5): 10\nf2(5): 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-return-type-deduction",
      children: "Dry Run: Return Type Deduction"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deduced Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[](int x) { return x + 1; }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x + 1"
            }), " (int)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple int expression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[](double d) { return d; }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "d"
            }), " (double)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[](int x) { if (x>0) return x; return -x; }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both return ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All paths return int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]() -> std::vector<int> { return {1,2,3}; }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{1,2,3}"
            }), " (init list)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be explicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init list has no type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[](auto x) -> decltype(auto) { return x; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect forwarding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1411-lambdas-with-stl-algorithms",
      children: "14.11 Lambdas with STL Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lambdas with STL algorithms are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interchangeable tool bits for a power drill"
      }), ". The drill (STL algorithm) provides the motor and mechanism; the bit (lambda) determines the exact shape and cut. You can swap bits to drill, screw, grind, or polish → all using the same drill."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-patterns-matrix",
      children: "Common Patterns Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lambda Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T, T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::find_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search by condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::count_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional counting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::remove_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::transform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::for_each"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects per element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::accumulate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BinaryOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(U, T) -> U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::copy_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::all_of / any_of / none_of"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::partial_sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T, T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-N ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::unique"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BinaryPredicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T, T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom dedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::equal_range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(T, T) -> bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range in sorted data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-custom-sorting",
      children: "Pattern 1: Custom Sorting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nstruct Employee {\n    std::string name;\n    int age;\n    double salary;\n};\n\nint main() {\n    std::vector<Employee> employees = {\n        {\"Alice\",   30, 75000},\n        {\"Bob\",     25, 65000},\n        {\"Charlie\", 35, 85000},\n        {\"Diana\",   28, 72000},\n        {\"Eve\",     35, 80000}\n    };\n\n    // Sort by age ascending, then by name\n    std::sort(employees.begin(), employees.end(),\n        [](const Employee& a, const Employee& b) {\n            if (a.age != b.age) return a.age < b.age;\n            return a.name < b.name;\n        });\n\n    std::cout << \"Sorted by age, then name:\\n\";\n    for (const auto& e : employees)\n        std::cout << \"  \" << e.name << \", \" << e.age << \", $\" << e.salary << \"\\n\";\n\n    // Sort by salary descending\n    std::sort(employees.begin(), employees.end(),\n        [](const Employee& a, const Employee& b) {\n            return a.salary > b.salary;\n        });\n\n    std::cout << \"\\nSorted by salary (desc):\\n\";\n    for (const auto& e : employees)\n        std::cout << \"  \" << e.name << \", $\" << e.salary << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sorted by age, then name:\n  Bob, 25, $65000\n  Diana, 28, $72000\n  Alice, 30, $75000\n  Charlie, 35, $85000\n  Eve, 35, $80000\n\nSorted by salary (desc):\n  Charlie, $85000\n  Eve, $80000\n  Alice, $75000\n  Diana, $72000\n  Bob, $65000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-find-count-filter",
      children: "Pattern 2: Find, Count, Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nint main() {\n    std::vector<int> scores = {45, 82, 91, 67, 55, 73, 88, 94, 50, 79};\n\n    // find_if: first score >= 90\n    auto it = std::find_if(scores.begin(), scores.end(),\n        [](int s) { return s >= 90; });\n    if (it != scores.end())\n        std::cout << \"First score >= 90: \" << *it << \"\\n\";\n\n    // count_if: count failing scores (< 60)\n    int failing = std::count_if(scores.begin(), scores.end(),\n        [](int s) { return s < 60; });\n    std::cout << \"Failing scores: \" << failing << \"\\n\";\n\n    // all_of / any_of / none_of\n    bool all_pass = std::all_of(scores.begin(), scores.end(),\n        [](int s) { return s >= 50; });\n    bool any_excellent = std::any_of(scores.begin(), scores.end(),\n        [](int s) { return s >= 95; });\n    bool none_perfect = std::none_of(scores.begin(), scores.end(),\n        [](int s) { return s == 100; });\n\n    std::cout << \"All >= 50:  \" << (all_pass ? \"yes\" : \"no\") << \"\\n\";\n    std::cout << \"Any >= 95:  \" << (any_excellent ? \"yes\" : \"no\") << \"\\n\";\n    std::cout << \"None 100:   \" << (none_perfect ? \"yes\" : \"no\") << \"\\n\";\n\n    // remove_if with erase → erase-remove idiom\n    scores.erase(\n        std::remove_if(scores.begin(), scores.end(),\n            [](int s) { return s < 60; }),\n        scores.end());\n\n    std::cout << \"After removing failing: \";\n    for (int s : scores) std::cout << s << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "First score >= 90: 91\nFailing scores: 3\nAll >= 50:  no\nAny >= 95:  no\nNone 100:   yes\nAfter removing failing: 82 91 67 73 88 94 79\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-transform-map",
      children: "Pattern 3: Transform (Map)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n#include <cctype>\n\nint main() {\n    std::vector<std::string> words = {\"hello\", \"world\", \"lambda\", \"stl\"};\n\n    // Transform to uppercase\n    std::vector<std::string> upper(words.size());\n    std::transform(words.begin(), words.end(), upper.begin(),\n        [](const std::string& s) {\n            std::string result;\n            result.resize(s.size());\n            std::transform(s.begin(), s.end(), result.begin(),\n                [](unsigned char c) { return std::toupper(c); });\n            return result;\n        });\n\n    std::cout << \"Uppercase: \";\n    for (const auto& w : upper) std::cout << w << \" \";\n    std::cout << \"\\n\";\n\n    // Transform: extract lengths\n    std::vector<size_t> lengths(words.size());\n    std::transform(words.begin(), words.end(), lengths.begin(),\n        [](const std::string& s) { return s.length(); });\n\n    std::cout << \"Lengths: \";\n    for (size_t len : lengths) std::cout << len << \" \";\n    std::cout << \"\\n\";\n\n    // transform with two input ranges: zip with sum\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {10, 20, 30, 40, 50};\n    std::vector<int> sum(a.size());\n\n    std::transform(a.begin(), a.end(), b.begin(), sum.begin(),\n        [](int x, int y) { return x + y; });\n\n    std::cout << \"Zipped sums: \";\n    for (int s : sum) std::cout << s << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uppercase: HELLO WORLD LAMBDA STL\nLengths: 5 5 6 3\nZipped sums: 11 22 33 44 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-4-accumulate-with-lambda",
      children: "Pattern 4: Accumulate with Lambda"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <numeric>\n#include <string>\n\nint main() {\n    std::vector<double> prices = {19.99, 29.99, 4.99, 49.99, 12.99};\n\n    // Sum with discount\n    double discount = 0.10;\n    double total = std::accumulate(prices.begin(), prices.end(), 0.0,\n        [discount](double acc, double price) {\n            return acc + price * (1.0 - discount);\n        });\n    std::cout << \"Total after \" << discount * 100 << \"% discount: $\"\n              << total << \"\\n\";\n\n    // Concatenate strings\n    std::vector<std::string> words = {\"Lambda\", \"is\", \"awesome\"};\n    std::string sentence = std::accumulate(words.begin(), words.end(),\n        std::string(),\n        [](const std::string& acc, const std::string& word) {\n            return acc.empty() ? word : acc + \" \" + word;\n        });\n    std::cout << \"Sentence: \\\"\" << sentence << \"\\\"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total after 10% discount: $104.355\nSentence: \"Lambda is awesome\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-5-for_each-with-side-effects",
      children: "Pattern 5: for_each with Side Effects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n\n    // for_each with stateful lambda via reference capture\n    int result_min = data[0], result_max = data[0];\n    long long result_sum = 0;\n\n    std::for_each(data.begin(), data.end(),\n        [&](int x) {\n            result_min = std::min(result_min, x);\n            result_max = std::max(result_max, x);\n            result_sum += x;\n        });\n\n    double result_avg = static_cast<double>(result_sum) / data.size();\n\n    std::cout << \"Range: [\" << result_min << \", \" << result_max << \"]\\n\";\n    std::cout << \"Sum: \" << result_sum << \"\\n\";\n    std::cout << \"Avg: \" << result_avg << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Range: [1, 10]\nSum: 55\nAvg: 5.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-sort-with-lambda",
      children: "Dry Run: Sort with Lambda"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v = {4, 1, 3, 2};\nstd::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compare"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
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
              children: "4 > 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1 > 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap -> {4, 3, 1, 2}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4 > 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1 > 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap -> {4, 3, 2, 1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(sorting continues)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{4, 3, 2, 1}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-of-stl--lambda-patterns",
      children: "Complexity of STL + Lambda Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lambda Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda inline-able"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::find_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit on match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::count_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::remove_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable partition-like"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::transform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output may overlap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::for_each"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side-effect safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::accumulate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left fold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::copy_if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1412-stdfunction-vs-auto-lambda",
      children: "14.12 std::function vs auto Lambda"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-11",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " for a lambda is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "buying a specific car model"
      }), " -- you know exactly what you have, the engine size, the fuel type. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "calling a taxi"
      }), " -- you just need a vehicle that takes you from A to B; you don't care what make or model shows up."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fundamental-difference",
      children: "The Fundamental Difference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " lambda"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique closure type (concrete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-erased wrapper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statically known size on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May heap-allocate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies the closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type erasure -- may slice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inlining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler can inline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect call through vtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 indirections per call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit from lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit from any callable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move-only types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported via init capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not until C++26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must capture self via std::function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can recurse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return from function"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C++14 allows ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " return"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Member of class"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Need ", (0,jsx_runtime.jsx)(_components.code, {
              children: "decltype"
            }), " or template"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct member"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-concrete-vs-erased",
      children: "Example: Concrete vs Erased"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nint main() {\n    // Concrete type -- known at compile time\n    auto square = [](int x) { return x * x; };\n    // Type of 'square' is: __lambda_1 (unique, compiler-generated)\n    // sizeof(square) = 1 byte (empty closure)\n\n    // Type-erased -- any callable matching int(int)\n    std::function<int(int)> func = [](int x) { return x * x; };\n    // sizeof(func) is typically 32 or 64 bytes\n\n    // func can store ANYTHING with matching signature:\n    func = [](int x) { return x + x; };     // Different lambda type\n    func = [factor = 10](int x) { return x * factor; };  // With capture\n\n    // auto cannot change type\n    // square = [](int x) { return x + x; };  // COMPILE ERROR: different type\n\n    std::cout << \"square(5): \" << square(5) << \"\\n\";\n    std::cout << \"func(5):   \" << func(5) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "square(5): 25\nfunc(5):   50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-benchmark-concept",
      children: "Performance Benchmark Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n#include <chrono>\n#include <vector>\n\ntemplate <typename F>\nlong long bench_auto(F f, int iterations) {\n    auto start = std::chrono::steady_clock::now();\n    for (int i = 0; i < iterations; ++i)\n        f(i);\n    auto end = std::chrono::steady_clock::now();\n    return std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();\n}\n\nlong long bench_function(const std::function<int(int)>& f, int iterations) {\n    auto start = std::chrono::steady_clock::now();\n    for (int i = 0; i < iterations; ++i)\n        f(i);\n    auto end = std::chrono::steady_clock::now();\n    return std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();\n}\n\nint main() {\n    constexpr int ITER = 10'000'000;\n    int factor = 3;\n\n    auto lam = [factor](int x) { return x * factor + x / factor; };\n    long long t1 = bench_auto(lam, ITER);\n\n    std::function<int(int)> func = lam;\n    long long t2 = bench_function(func, ITER);\n\n    std::cout << \"auto lambda:    \" << t1 << \" ns\\n\";\n    std::cout << \"std::function:  \" << t2 << \" ns\\n\";\n    std::cout << \"ratio:          \" << (t2 / double(t1)) << \"x\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto lambda:    45000000 ns\nstd::function:  125000000 ns\nratio:          2.78x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " (concrete type)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            }), " (type-erased)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass lambda to template (STL algorithm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store callables in a container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use lambda locally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass callback across API boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement observer pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return lambda from function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erase type for heterogeneous callables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move-only captures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive lambdas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-determined callable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-size-measurement",
      children: "Lambda Size Measurement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n\nint main() {\n    auto empty       = [](){};                         // 1 byte (empty closure)\n    auto capture_int = [x = 42]() { return x; };       // 4 bytes\n    auto capture_big = [x = 42, y = 3.14, z = 'a'](){};// 20 bytes (4+8+1+padding)\n    auto capture_ref = [&x = std::as_const(x)](){};    // 8 bytes (pointer)\n\n    std::cout << \"sizeof(empty):       \" << sizeof(empty) << \"\\n\";\n    std::cout << \"sizeof(capture_int): \" << sizeof(capture_int) << \"\\n\";\n    std::cout << \"sizeof(std::function<void()>): \" << sizeof(std::function<void()>) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(empty):       1\nsizeof(capture_int): 4\nsizeof(capture_big): 20\nsizeof(std::function<void()>): 32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1413-capturing-parameter-packs-c20",
      children: "14.13 Capturing Parameter Packs (C++20)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-12",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Capturing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parameter pack"
      }), " is like having a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "net that catches every fish in a pond"
      }), " at once -- you don't name each fish; you just know you caught them all. Then you can selectively work with each one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-3",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename... Args>\nauto make_dispatcher(Args... args) {\n    return [...args = std::move(args)] {\n        // use args...\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "..."
      }), " before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "args"
      }), " means \"capture each element of the pack with this pattern.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-capturing-a-pack-by-value",
      children: "Example 1: Capturing a Pack by Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename... Args>\nauto capture_all(Args... args) {\n    return [args...]() {\n        ((std::cout << args << \" \"), ...);  // fold expression\n        std::cout << \"\\n\";\n    };\n}\n\nint main() {\n    auto func = capture_all(1, 2.5, \"hello\", 'X');\n    func();  // prints: 1 2.5 hello X\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2.5 hello X\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-moving-a-pack-perfect-forwarding",
      children: "Example 2: Moving a Pack (Perfect Forwarding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <tuple>\n\ntemplate <typename... Args>\nauto make_async_task(Args&&... args) {\n    return [args = std::make_tuple(std::forward<Args>(args)...)]() {\n        std::cout << \"Task captured \" << sizeof...(Args) << \" args\\n\";\n        std::apply([](const auto&... items) {\n            ((std::cout << items << \" \"), ...);\n        }, args);\n        std::cout << \"\\n\";\n    };\n}\n\nint main() {\n    auto task = make_async_task(10, 3.14, std::string(\"pack capture\"));\n    task();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Task captured 3 args\n10 3.14 pack capture\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-2",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capture N elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) copies or moves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invocation with fold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) -- one operation per element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closure size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of sizeof each captured element"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1414-lambda-storage--closure-object",
      children: "14.14 Lambda Storage / Closure Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-13",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "closure object"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lunchbox with compartments"
      }), ". Each captured variable is a compartment. An empty lambda (no captures) is just the lunchbox itself -- one byte. A lambda capturing an int is a lunchbox with one small compartment. A lambda capturing a vector is a lunchbox with a large built-in cooler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closure-object-layout",
      children: "Closure Object Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto empty = [](){};                          // sizeof = 1 byte\nauto by_val = [x = 42](){ return x; };        // sizeof = 4 bytes (int member)\nauto by_ref = [&x](){ return x; };            // sizeof = 8 bytes (pointer)\nauto mixed = [x = 42, &y](){ return x + y; };// sizeof = 12+ bytes (int + ptr + padding)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n#include <string>\n#include <vector>\n\nint main() {\n    int a = 1;\n    double b = 3.14;\n    std::string c = \"hello\";\n    std::vector<int> d = {1, 2, 3, 4, 5};\n\n    auto lambda1 = [](){};                                   // 1 byte\n    auto lambda2 = [a]() { return a; };                      // 4 bytes\n    auto lambda3 = [&a]() { return a; };                     // 8 bytes (pointer)\n    auto lambda4 = [a, b]() { return a + b; };               // 16 bytes (4+8+padding)\n    auto lambda5 = [a, &b, &c]() { return a + b + c.size(); };// 24+ bytes\n    auto lambda6 = [d = std::move(d)]() { return d.size(); }; // 24 bytes (vector has 3 ptrs)\n\n    std::cout << \"lambda1 (empty):         \" << sizeof(lambda1) << \"\\n\";\n    std::cout << \"lambda2 (int by val):    \" << sizeof(lambda2) << \"\\n\";\n    std::cout << \"lambda3 (int by ref):    \" << sizeof(lambda3) << \"\\n\";\n    std::cout << \"lambda4 (int+double):    \" << sizeof(lambda4) << \"\\n\";\n    std::cout << \"lambda5 (int+2 refs):    \" << sizeof(lambda5) << \"\\n\";\n    std::cout << \"lambda6 (vector moved):  \" << sizeof(lambda6) << \"\\n\";\n    std::cout << \"std::function<void()>:   \" << sizeof(std::function<void()>) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lambda1 (empty):         1\nlambda2 (int by val):    4\nlambda3 (int by ref):    8\nlambda4 (int+double):    16\nlambda5 (int+2 refs):    24\nlambda6 (vector moved):  24\nstd::function<void()>:   32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closure-object-internals",
      children: "Closure Object Internals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto lam = [x = 42, y = 3.14]() { return x + y; };"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// What the compiler generates (conceptually):\nstruct __lambda_42 {\n    int x;      // from capture [x = 42]\n    double y;   // from capture [y = 3.14]\n\n    // Constructor\n    __lambda_42(int x_, double y_) : x(x_), y(y_) {}\n\n    auto operator()() const {\n        return x + y;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copy-and-move-of-closure-objects",
      children: "Copy and Move of Closure Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nint main() {\n    auto counter = [count = 0]() mutable { return ++count; };\n    \n    std::cout << \"counter():  \" << counter() << counter() << counter() << \"\\n\";  // 123\n\n    auto counter_copy = counter;  // Copy closure -- independent state\n    std::cout << \"counter():    \" << counter() << \"\\n\";    // 4\n    std::cout << \"counter_copy():\" << counter_copy() << \"\\n\";  // 4 (started from 3)\n\n    auto counter_move = std::move(counter);  // Move closure\n    std::cout << \"counter_move():\" << counter_move() << \"\\n\";  // 5\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "counter():  123\ncounter():    4\ncounter_copy():4\ncounter_move():5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alignment-and-padding",
      children: "Alignment and Padding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nint main() {\n    char c = 'A';\n    int i = 42;\n    double d = 3.14;\n\n    auto lam = [c, i, d]() { return c + i + d; };\n    \n    // Layout (on x64 with typical ABI):\n    // offset 0: char c (1 byte)\n    // offset 1: padding (3 bytes for int alignment)\n    // offset 4: int i (4 bytes)\n    // offset 8: double d (8 bytes)\n    // total: 16 bytes\n\n    std::cout << \"sizeof:        \" << sizeof(lam) << \"\\n\";\n    std::cout << \"alignment:     \" << alignof(decltype(lam)) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof:        16\nalignment:     8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1415-constexpr-lambda-benefits-deep-dive",
      children: "14.15 constexpr Lambda Benefits (Deep Dive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-14",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using constexpr lambdas is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pre-fabricating building components"
      }), " in a factory versus building everything on-site. Factory production (compile time) is faster, more precise, and costs less per unit. On-site assembly (runtime) is flexible but slow and expensive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefit-1-compile-time-computation",
      children: "Benefit 1: Compile-Time Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <array>\n\nint main() {\n    constexpr auto sum_n = [](int n) {\n        int total = 0;\n        for (int i = 1; i <= n; ++i) total += i;\n        return total;\n    };\n\n    constexpr int s100 = sum_n(100);   // 5050 -- computed at compile time\n    constexpr int s50  = sum_n(50);    // 1275 -- computed at compile time\n\n    std::array<int, sum_n(10)> arr;    // array of 55 elements -- template arg\n\n    std::cout << \"sum(100) = \" << s100 << \"\\n\";\n    std::cout << \"sum(50)  = \" << s50 << \"\\n\";\n    std::cout << \"Array size: \" << arr.size() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sum(100) = 5050\nsum(50)  = 1275\nArray size: 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefit-2-template-metaprogramming-replacement",
      children: "Benefit 2: Template Metaprogramming Replacement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <type_traits>\n#include <limits>\n\nint main() {\n    constexpr auto is_integral = []<typename T>() {\n        return std::is_integral_v<T>;\n    };\n\n    static_assert(is_integral.template operator()<int>());\n    static_assert(!is_integral.template operator()<double>());\n\n    constexpr auto numeric_limits = []<typename T>() {\n        if constexpr (std::is_integral_v<T>) {\n            return static_cast<double>(std::numeric_limits<T>::max());\n        } else {\n            return std::numeric_limits<T>::max();\n        }\n    };\n\n    constexpr double int_max = numeric_limits.template operator()<int>();\n    constexpr double dbl_max = numeric_limits.template operator()<double>();\n\n    std::cout << \"int max:    \" << int_max << \"\\n\";\n    std::cout << \"double max: \" << dbl_max << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int max:    2.14748e+09\ndouble max: 1.79769e+308\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefit-3-policy-based-design-without-templates",
      children: "Benefit 3: Policy-Based Design Without Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    constexpr auto descending = [](auto a, auto b) { return a > b; };\n\n    constexpr auto sort_policy = [](auto& container, auto policy) {\n        std::sort(container.begin(), container.end(), policy);\n    };\n\n    std::vector<int> data = {3, 1, 4, 1, 5, 9};\n    sort_policy(data, descending);\n\n    for (int x : data) std::cout << x << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1416-real-systems-using-lambdas",
      children: "14.16 Real Systems Using Lambdas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-lambdas-shine-in-production",
      children: "Where Lambdas Shine in Production"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System/Project"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Lambdas Are Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chromium"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callbacks for async I/O, thread pool tasks, event dispatching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LLVM/Clang"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AST visitors, pass managers, instruction selection predicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unreal Engine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegates, event handlers, async loading, blueprint callbacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boost.Asio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completion handlers, strand executors, timer callbacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Qt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect signals to slots via lambdas, thread workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update loops, collision callbacks, animation curves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database drivers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async query callbacks, connection pool tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web servers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route handlers, middleware, response transformers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TensorFlow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Op kernels, gradient computation closures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RocksDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compaction filters, merge operators, iterator predicates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-async-file-reader-production-pattern",
      children: "Example: Async File Reader (Production Pattern)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <functional>\n#include <future>\n#include <thread>\n#include <string>\n#include <fstream>\n#include <sstream>\n\nclass AsyncFileReader {\npublic:\n    using Callback = std::function<void(std::string)>;\n\n    void read_async(const std::string& path, Callback on_done) {\n        std::thread([path, on_done]() {\n            std::ifstream file(path);\n            if (!file) {\n                on_done({});\n                return;\n            }\n            std::stringstream buffer;\n            buffer << file.rdbuf();\n            on_done(buffer.str());\n        }).detach();\n    }\n\n    std::future<std::string> read_future(const std::string& path) {\n        return std::async(std::launch::async, [path]() -> std::string {\n            std::ifstream file(path);\n            if (!file) return {};\n            std::stringstream buffer;\n            buffer << file.rdbuf();\n            return buffer.str();\n        });\n    }\n};\n\nint main() {\n    AsyncFileReader reader;\n\n    reader.read_async(\"test.txt\", [](std::string content) {\n        if (content.empty())\n            std::cout << \"File not found or empty\\n\";\n        else\n            std::cout << \"Read \" << content.size() << \" bytes\\n\";\n    });\n\n    auto future = reader.read_future(\"test.txt\");\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-thread-pool-with-lambdas",
      children: "Example: Thread Pool with Lambdas"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <thread>\n#include <queue>\n#include <functional>\n#include <mutex>\n#include <condition_variable>\n\nclass ThreadPool {\npublic:\n    ThreadPool(size_t n) {\n        for (size_t i = 0; i < n; ++i)\n            workers_.emplace_back([this, i] {\n                while (true) {\n                    std::function<void()> task;\n                    {\n                        std::unique_lock lock(mutex_);\n                        cv_.wait(lock, [this] { \n                            return stop_ || !tasks_.empty(); \n                        });\n                        if (stop_ && tasks_.empty()) return;\n                        task = std::move(tasks_.front());\n                        tasks_.pop();\n                    }\n                    task();\n                }\n            });\n    }\n\n    void enqueue(std::function<void()> task) {\n        {\n            std::lock_guard lock(mutex_);\n            tasks_.push(std::move(task));\n        }\n        cv_.notify_one();\n    }\n\n    ~ThreadPool() {\n        {\n            std::lock_guard lock(mutex_);\n            stop_ = true;\n        }\n        cv_.notify_all();\n        for (auto& t : workers_) t.join();\n    }\n\nprivate:\n    std::vector<std::thread> workers_;\n    std::queue<std::function<void()>> tasks_;\n    std::mutex mutex_;\n    std::condition_variable cv_;\n    bool stop_ = false;\n};\n\nint main() {\n    ThreadPool pool(4);\n\n    for (int i = 0; i < 8; ++i) {\n        pool.enqueue([i] {\n            std::cout << \"Task \" << i << \" running on thread \"\n                      << std::this_thread::get_id() << \"\\n\";\n        });\n    }\n\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-event-system",
      children: "Example: Event System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <functional>\n#include <string>\n#include <map>\n\nclass EventBus {\npublic:\n    using Handler = std::function<void(const std::string&)>;\n\n    void subscribe(const std::string& event, Handler handler) {\n        handlers_[event].push_back(std::move(handler));\n    }\n\n    void publish(const std::string& event, const std::string& data) {\n        auto it = handlers_.find(event);\n        if (it != handlers_.end()) {\n            for (const auto& handler : it->second)\n                handler(data);\n        }\n    }\n\nprivate:\n    std::map<std::string, std::vector<Handler>> handlers_;\n};\n\nint main() {\n    EventBus bus;\n\n    std::string module_name = \"Logger\";\n    bus.subscribe(\"user_login\", [module_name](const std::string& user) {\n        std::cout << \"[\" << module_name << \"] User logged in: \" << user << \"\\n\";\n    });\n\n    int login_count = 0;\n    bus.subscribe(\"user_login\", [&login_count](const std::string& user) {\n        ++login_count;\n        std::cout << \"  Total logins: \" << login_count << \"\\n\";\n    });\n\n    bus.subscribe(\"user_logout\", [](const std::string& user) {\n        std::cout << \"User logged out: \" << user << \"\\n\";\n    });\n\n    bus.publish(\"user_login\", \"Alice\");\n    bus.publish(\"user_login\", \"Bob\");\n    bus.publish(\"user_logout\", \"Alice\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Logger] User logged in: Alice\n  Total logins: 1\n[Logger] User logged in: Bob\n  Total logins: 2\nUser logged out: Alice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1417-interview-corner",
      children: "14.17 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-capturing-by-value-and-by-reference-in-a-lambda-when-would-you-use-each",
      children: "Q1: What is the difference between capturing by value and by reference in a lambda? When would you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "By Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "By Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closure stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference to variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent -- owns the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent -- original must outlive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Needs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " keyword"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Allowed without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect on original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifies original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small data, read-only, parallel tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large objects, side effects needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By value:"
        }), " Small (int, double, bool), capture for async that may outlive scope, read-only access, parallel algorithms (no data races)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By reference:"
        }), " Large objects (don't want to copy), need to modify original, when lambda is called within the same scope (no lifetime concern)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Prefer explicit capture by value for small types; use reference for large objects or when mutation is needed. Avoid default captures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[=]"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[&]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-explain-the-lifetime-of-a-lambda-that-captures-this-what-can-go-wrong",
      children: ["Q2: Explain the lifetime of a lambda that captures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), ". What can go wrong?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda that captures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[this]"
      }), " stores a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pointer to the enclosing object"
      }), ". If the object is destroyed before the lambda is invoked, the lambda holds a dangling pointer -- invoking it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::function<int()> bad_callback;\n{\n    Widget w;\n    bad_callback = [this]() { return value_; };  // captures this\n}  // w destroyed -- this pointer dangles\nbad_callback();  // UB!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure object outlives the lambda (synchronous use within member function)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[*this]"
        }), " (C++17) to capture a copy of the object (safe for async)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::shared_ptr"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[weak_this = std::weak_ptr(shared_from_this())]"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-what-does-mutable-do-in-a-lambda-show-the-generated-closure-class",
      children: ["Q3: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " do in a lambda? Show the generated closure class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " removes the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " qualifier from the closure's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator()"
      }), ", allowing by-value captures to be modified inside the lambda body. The modifications affect the closure's copies, not the original variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int count = 0;\nauto counter = [count]() mutable { return ++count; };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generated closure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct __lambda {\n    int count;  // copy of outer count\n\n    auto operator()() /* non-const! */ {\n        return ++count;  // modifies the closure's copy\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct __lambda {\n    int count;\n    \n    auto operator()() const {\n        // return ++count;  // COMPILE ERROR: can't modify in const\n        return count;       // OK: read-only\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-can-a-lambda-be-recursive-how-would-you-implement-a-recursive-lambda",
      children: "Q4: Can a lambda be recursive? How would you implement a recursive lambda?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lambda cannot directly call itself because it doesn't have a name within its own body. There are several workarounds:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: std::function (simplest, some overhead)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::function<int(int)> factorial;\nfactorial = [&](int n) -> int {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Generic lambda + auto self parameter (C++14, no overhead)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto factorial = [](auto&& self, int n) -> int {\n    return n <= 1 ? 1 : n * self(self, n - 1);\n};\n// Call: factorial(factorial, 5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: Y-combinator (advanced, generic)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename F>\nstruct YCombinator {\n    F f;\n    template <typename... Args>\n    auto operator()(Args&&... args) {\n        return f(*this, std::forward<Args>(args)...);\n    }\n};\n\nYCombinator factorial{[](auto& self, int n) -> int {\n    return n <= 1 ? 1 : n * self(n - 1);\n}};\n// Call: factorial(5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-a-generic-lambda-differ-from-a-non-generic-lambda-at-the-compiler-level",
      children: "Q5: How does a generic lambda differ from a non-generic lambda at the compiler level?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A generic lambda uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " parameters, which makes the compiler generate a ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["templated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator()"
        })]
      }), ". Each distinct set of argument types causes a separate template instantiation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto gen = [](auto a, auto b) { return a + b; };\n// Generated:\nstruct __gen_lambda {\n    template <typename T, typename U>\n    auto operator()(T a, U b) const { return a + b; }\n};\n\n// vs non-generic:\nauto spec = [](int a, int b) { return a + b; };\n// Generated:\nstruct __spec_lambda {\n    int operator()(int a, int b) const { return a + b; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generic lambda's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator()"
        }), " is a template -- multiple instantiations possible"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-generic lambda has a fixed type signature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generic lambda can accept unrelated types; non-generic has concrete types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generic lambda may bloat binary size if used with many different type pairs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-size-of-a-lambda-how-does-it-compare-to-stdfunction",
      children: "Q6: What is the size of a lambda? How does it compare to std::function?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda's size equals the sum of its captured variables (plus padding for alignment). An empty capture ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), " lambda is typically ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 byte"
      }), " (no members, but objects must have positive size in C++)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto empty = []{};                            // 1 byte\nauto one_int = [x = 5]{};                     // 4 bytes\nauto two_ints = [x = 5, y = 10]{};            // 8 bytes\nauto ref = [&x]{};                            // 8 bytes (pointer)\nauto mixed = [x = 5, &y, z = 3.14]{};         // 24 bytes (4+pad+8+8)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), " is typically ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "32-64 bytes"
      }), " regardless of captured data because it uses small-buffer optimization (SBO) and stores the callable either in a small internal buffer or on the heap."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-would-you-capture-a-move-only-type-like-stdunique_ptr-in-a-lambda-why-wasnt-this-possible-in-c11",
      children: "Q7: How would you capture a move-only type like std::unique_ptr in a lambda? Why wasn't this possible in C++11?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "initialized capture"
      }), " (C++14):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto ptr = std::make_unique<int>(42);\nauto lambda = [p = std::move(ptr)]() { return *p; };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not possible in C++11:"
      }), "\nC++11 only supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[x]"
      }), " (capture by value, which copies) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[&x]"
      }), " (capture by reference). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::unique_ptr"
      }), " is move-only -- cannot be copied. Initialized capture ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[p = std::move(ptr)]"
      }), " was introduced in C++14 to allow arbitrary expressions in the capture list, enabling moves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-iife-pattern-and-why-is-it-useful-in-c",
      children: "Q8: What is the IIFE pattern and why is it useful in C++?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IIFE"
      }), " (Immediately Invoked Function Expression) defines and invokes a lambda in one expression:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "const int value = [](int x, int y) { \n    return x > y ? x : y; \n}(10, 20);  // value = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize const variables"
        }), " with complex logic (if, for, try-catch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limit scope"
        }), " of temporary variables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid mutable intermediate state"
        }), " in initialization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improve clarity"
        }), " -- initialization logic lives right where the variable is declared"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Without IIFE:\nint temp = compute_something();\nconst int result = temp * 2;  // temp pollutes scope\n\n// With IIFE:\nconst int result = [] {\n    int t = compute_something();\n    return t * 2;\n}();  // temp is scoped inside the lambda\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-explain-the-performance-difference-between-a-captureless-lambda-a-capturing-lambda-and-stdfunction",
      children: "Q9: Explain the performance difference between a captureless lambda, a capturing lambda, and std::function."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inline-able?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Captureless lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as regular function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capturing lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct call on closure object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as hand-written functor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type erasure + indirect call + potential heap alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3x slower, 32-64 byte SBO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), " performs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type erasure"
      }), " (stores any callable with matching signature). Each invocation goes through a virtual dispatch or function pointer indirect call. The compiler loses type information, so inlining is prevented -- capturing lambdas are always faster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " (concrete type) where possible. Only use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), " when you need runtime polymorphism (storing heterogeneous callables, implementing callback registries)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-are-the-c17-constexpr-lambda-requirements-what-changed-in-c20",
      children: "Q10: What are the C++17 constexpr lambda requirements? What changed in C++20?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["C++17 requirements (explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "constexpr"
        }), " keyword):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Body must satisfy constexpr function requirements (no dynamic_cast, no asm, no goto, no try-catch, no non-literal types, no virtual calls)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All implicitly captured variables must be constant expressions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++20 changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lambdas are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implicitly constexpr"
        }), " if they satisfy the requirements -- no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "constexpr"
        }), " keyword needed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can include try-catch blocks (UB if evaluated at compile time and exception is thrown)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic_cast and typeid allowed in constant expressions (with limitations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant evaluation can modify mutable members"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++20 -- no constexpr keyword needed:\nauto square = [](int x) { return x * x; };  // implicitly constexpr\nconstexpr int result = square(5);            // OK in C++20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-Liner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda Syntax"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[capture](params) -> ret { body }"
            }), " defines an anonymous function object"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture Clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose by value (copy, safe) or by reference (lightweight, risky)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable Lambdas"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " allows modification of by-value captures"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capturing this"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[this]"
            }), " captures pointer; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[*this]"
            }), " captures copy (C++17, async-safe)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialized Captures"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[x = expr]"
            }), " captures arbitrary expressions, enables move-only types"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic Lambdas"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " params make templated operator() -- one lambda, many types"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constexpr Lambdas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time evaluation -- zero runtime cost (C++17 explicit, C++20 implicit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda as Function Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captureless lambdas convert to function pointers -- for C interop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IIFE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define + invoke in one step -- perfect for const init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return Type Deduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-deduced unless multiple types; explicit when needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STL + Lambdas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas customize sort, transform, find_if, etc. idiomatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::function vs auto"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " = concrete, fast; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            }), " = type-erased, flexible"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter Pack Capture"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[args...]"
            }), " captures variadic packs for async dispatchers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size = sum of captured variables; 1 byte for empty lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constexpr Benefits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time computation, template args, static_assert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas everywhere -- Chromium, LLVM, Unreal, Boost.Asio, game engines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Basic lambda\nauto square = [](int x) { return x * x; };\n\n// Capture by value\nint y = 5;\nauto lam = [y](int x) { return x + y; };\n\n// Capture by reference\nauto inc = [&y]() { ++y; };\n\n// Mutable -- modifies copy\nauto counter = [c = 0]() mutable { return ++c; };\n\n// Generic lambda\nauto add = [](auto a, auto b) { return a + b; };\n\n// constexpr lambda (C++17)\nconstexpr auto fact = [](int n) { \n    int r = 1; for (int i = 2; i <= n; ++i) r *= i; return r; \n};\n\n// IIFE\nconst int v = [] { return 42; }();\n\n// init capture\nauto ptr = std::make_unique<int>(5);\nauto lam = [p = std::move(ptr)]() { return *p; };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[=]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[&]"
        }), " capture defaults? Why are both considered bad practice?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When must a lambda use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mutable"
        }), "? What happens to the original variable?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a generic lambda differ from a non-generic one at the template instantiation level?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is an IIFE and when is it particularly useful?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can a lambda with an empty capture list be converted to a function pointer, but a capturing lambda cannot?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[*this]"
        }), " do differently from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[this]"
        }), "? When would you use each?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), " differ from an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto"
        }), "-typed lambda in terms of performance and storage?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sort by custom criteria:"
          }), " Write a lambda that sorts a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<std::string>"
          }), " by string length (ascending), with ties broken alphabetically. Test with a list of words."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Temperature conversion:"
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::transform"
          }), " with a lambda to convert a vector of temperatures in Celsius to Fahrenheit. Use a second lambda with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::count_if"
          }), " to count how many are above a given threshold."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency analysis:"
          }), " Use a stateful lambda with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::for_each"
          }), " to count character frequencies in a string. Return a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::map<char, int>"
          }), " of the results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipeline with IIFE:"
          }), " Create a string processing pipeline that trims whitespace, converts to lowercase, and splits on commas -- all within a single IIFE returning a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<std::string>"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expression evaluator with lambdas:"
        }), " Implement a simple expression parser and evaluator: given a string like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"x * 3 + 2\""
        }), ", parse it, and return a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function<double(double)>"
        }), " that evaluates the expression for a given ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ". Use lambdas as the building blocks for each AST node (constant, variable, addition, multiplication). Store the result in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::vector<std::function<double(double)>>"
        }), " to demonstrate type erasure."]
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