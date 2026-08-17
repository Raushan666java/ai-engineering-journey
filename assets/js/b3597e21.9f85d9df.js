"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90235],{

/***/ 70846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_09_pointers_md_b35_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-09-pointers-md-b35.json
const site_docs_courses_c_programming_09_pointers_md_b35_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/09-pointers","title":"Chapter 9: Pointers","description":"Previous Structures and Unions","source":"@site/docs/courses/c-programming/09-pointers.md","sourceDirName":"courses/c-programming","slug":"/c-programming/09-pointers","permalink":"/ai-engineering-journey/c-programming/09-pointers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-pointers","slug":"/c-programming/09-pointers","title":"Chapter 9: Pointers","sidebar_label":"Chapter 9: Pointers","sidebar_position":9},"sidebar":"course-c-programming","previous":{"title":"Chapter 8: Functions","permalink":"/ai-engineering-journey/c-programming/08-functions"},"next":{"title":"Chapter 10: Structures and Unions","permalink":"/ai-engineering-journey/c-programming/10-structures-unions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/09-pointers.md


const frontMatter = {
	id: '09-pointers',
	slug: '/c-programming/09-pointers',
	title: 'Chapter 9: Pointers',
	sidebar_label: 'Chapter 9: Pointers',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Pointers';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "9.1 Pointer Declaration and Initialization",
  "id": "91-pointer-declaration-and-initialization",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
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
  "value": "Complete Code Example",
  "id": "complete-code-example",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "9.2 The &amp; (Address-of) and * (Dereference) Operators",
  "id": "92-the--address-of-and--dereference-operators",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-1",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "9.3 Pointer Arithmetic",
  "id": "93-pointer-arithmetic",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 3
}, {
  "value": "Pointer Arithmetic Rules",
  "id": "pointer-arithmetic-rules",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run Trace Table — Full Walkthrough",
  "id": "dry-run-trace-table--full-walkthrough",
  "level": 3
}, {
  "value": "Complete Code Examples",
  "id": "complete-code-examples",
  "level": 3
}, {
  "value": "Example 1: Basic arithmetic",
  "id": "example-1-basic-arithmetic",
  "level": 4
}, {
  "value": "Example 2: Pointer difference and comparison",
  "id": "example-2-pointer-difference-and-comparison",
  "level": 4
}, {
  "value": "Example 3: Traversing with pointer increment",
  "id": "example-3-traversing-with-pointer-increment",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "9.4 Array-Pointer Duality",
  "id": "94-array-pointer-duality",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
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
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-2",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-2",
  "level": 3
}, {
  "value": "The sizeof Exception",
  "id": "the-sizeof-exception",
  "level": 3
}, {
  "value": "The &amp; Exception",
  "id": "the--exception",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "9.5 Pointer to Array vs Array of Pointers",
  "id": "95-pointer-to-array-vs-array-of-pointers",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "9.5.1 Pointer to Array",
  "id": "951-pointer-to-array",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-4",
  "level": 3
}, {
  "value": "9.5.2 Array of Pointers",
  "id": "952-array-of-pointers",
  "level": 3
}, {
  "value": "Common Use: Array of Strings",
  "id": "common-use-array-of-strings",
  "level": 3
}, {
  "value": "Comparison: Pointer to Array vs Array of Pointers",
  "id": "comparison-pointer-to-array-vs-array-of-pointers",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "9.6 Pointer to Pointer (Double Pointer)",
  "id": "96-pointer-to-pointer-double-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run Trace Table — Full Dereference Chain",
  "id": "dry-run-trace-table--full-dereference-chain",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-3",
  "level": 3
}, {
  "value": "Practical Example: Allocating 2D Array",
  "id": "practical-example-allocating-2d-array",
  "level": 3
}, {
  "value": "Practical Example: Swapping Pointers",
  "id": "practical-example-swapping-pointers",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "9.7 Pointer to Function (Function Pointers)",
  "id": "97-pointer-to-function-function-pointers",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-6",
  "level": 3
}, {
  "value": "Syntax Breakdown",
  "id": "syntax-breakdown",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-4",
  "level": 3
}, {
  "value": "Dispatch Table Example",
  "id": "dispatch-table-example",
  "level": 3
}, {
  "value": "Function Pointer as Parameter (Callback)",
  "id": "function-pointer-as-parameter-callback",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "9.8 void Pointer (Generic Pointer)",
  "id": "98-void-pointer-generic-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-7",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-5",
  "level": 3
}, {
  "value": "Generic Swap Function",
  "id": "generic-swap-function",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "9.9 NULL Pointer",
  "id": "99-null-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-8",
  "level": 3
}, {
  "value": "NULL vs 0 vs &#39;\\0&#39; vs nullptr",
  "id": "null-vs-0-vs-0-vs-nullptr",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "9.10 Dangling Pointer",
  "id": "910-dangling-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "Three Types of Dangling Pointers",
  "id": "three-types-of-dangling-pointers",
  "level": 3
}, {
  "value": "Numbered Steps for Heap Dangling",
  "id": "numbered-steps-for-heap-dangling",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-6",
  "level": 3
}, {
  "value": "Prevention Techniques",
  "id": "prevention-techniques",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 3
}, {
  "value": "9.11 Wild Pointer",
  "id": "911-wild-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-9",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-7",
  "level": 3
}, {
  "value": "Prevention Rules",
  "id": "prevention-rules",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-9",
  "level": 3
}, {
  "value": "9.12 Pointer Safety",
  "id": "912-pointer-safety",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-11",
  "level": 3
}, {
  "value": "The Five Golden Rules",
  "id": "the-five-golden-rules",
  "level": 3
}, {
  "value": "Safety Checklist",
  "id": "safety-checklist",
  "level": 3
}, {
  "value": "Common Safety Violations and Fixes",
  "id": "common-safety-violations-and-fixes",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-4",
  "level": 3
}, {
  "value": "9.13 const and Pointers",
  "id": "913-const-and-pointers",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-12",
  "level": 3
}, {
  "value": "The Four Combinations",
  "id": "the-four-combinations",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "Complete Code Example",
  "id": "complete-code-example-8",
  "level": 3
}, {
  "value": "const in Function Parameters",
  "id": "const-in-function-parameters",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-10",
  "level": 3
}, {
  "value": "9.14 Three-Star Programmer",
  "id": "914-three-star-programmer",
  "level": 2
}, {
  "value": "What It Means",
  "id": "what-it-means",
  "level": 3
}, {
  "value": "When Might You Actually Need Three Stars?",
  "id": "when-might-you-actually-need-three-stars",
  "level": 3
}, {
  "value": "The Warning",
  "id": "the-warning",
  "level": 3
}, {
  "value": "9.15 Pointer Categories",
  "id": "915-pointer-categories",
  "level": 2
}, {
  "value": "Comparison Table",
  "id": "comparison-table-1",
  "level": 3
}, {
  "value": "Key Differences",
  "id": "key-differences",
  "level": 3
}, {
  "value": "9.16 Array vs Pointer — Key Differences",
  "id": "916-array-vs-pointer--key-differences",
  "level": 2
}, {
  "value": "Code to Demonstrate",
  "id": "code-to-demonstrate",
  "level": 3
}, {
  "value": "9.17 Dangling vs Wild vs NULL vs Void Pointer Comparison",
  "id": "917-dangling-vs-wild-vs-null-vs-void-pointer-comparison",
  "level": 2
}, {
  "value": "Memory Diagram",
  "id": "memory-diagram",
  "level": 3
}, {
  "value": "9.18 Pointer Arithmetic — Step-by-Step Deep Dive",
  "id": "918-pointer-arithmetic--step-by-step-deep-dive",
  "level": 2
}, {
  "value": "Step 1: Understand sizeof Scaling",
  "id": "step-1-understand-sizeof-scaling",
  "level": 3
}, {
  "value": "Step 2: Visual Memory Layout",
  "id": "step-2-visual-memory-layout",
  "level": 3
}, {
  "value": "Step 3: Pre-increment vs Post-increment on Pointers",
  "id": "step-3-pre-increment-vs-post-increment-on-pointers",
  "level": 3
}, {
  "value": "Step 4: Pointer Difference Formula",
  "id": "step-4-pointer-difference-formula",
  "level": 3
}, {
  "value": "Step 5: Comparison Operators on Pointers",
  "id": "step-5-comparison-operators-on-pointers",
  "level": 3
}, {
  "value": "9.19 Interview Corner",
  "id": "919-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between arrays and pointers in C?",
  "id": "q1-what-is-the-difference-between-arrays-and-pointers-in-c",
  "level": 3
}, {
  "value": "Q2: Should you cast the return of malloc?",
  "id": "q2-should-you-cast-the-return-of-malloc",
  "level": 3
}, {
  "value": "Q3: What is the syntax for a function pointer that takes a function pointer as a parameter?",
  "id": "q3-what-is-the-syntax-for-a-function-pointer-that-takes-a-function-pointer-as-a-parameter",
  "level": 3
}, {
  "value": "Q4: How do you implement a generic pointer? Show with void*",
  "id": "q4-how-do-you-implement-a-generic-pointer-show-with-void",
  "level": 3
}, {
  "value": "Q5: What does <em>(int</em>)ptr do when ptr is void*?",
  "id": "q5-what-does-intptr-do-when-ptr-is-void",
  "level": 3
}, {
  "value": "Q6: Explain pointer aliasing and the restrict keyword",
  "id": "q6-explain-pointer-aliasing-and-the-restrict-keyword",
  "level": 3
}, {
  "value": "Q7: What is the output of this code?",
  "id": "q7-what-is-the-output-of-this-code",
  "level": 3
}, {
  "value": "9.20 Applications in Real Systems",
  "id": "920-applications-in-real-systems",
  "level": 2
}, {
  "value": "9.20.1 Linux Kernel: linked list (list_head)",
  "id": "9201-linux-kernel-linked-list-list_head",
  "level": 3
}, {
  "value": "9.20.2 Function Pointers for Callbacks",
  "id": "9202-function-pointers-for-callbacks",
  "level": 3
}, {
  "value": "9.20.3 JIT Compilation",
  "id": "9203-jit-compilation",
  "level": 3
}, {
  "value": "9.20.4 Embedded Systems: Memory-Mapped I/O",
  "id": "9204-embedded-systems-memory-mapped-io",
  "level": 3
}, {
  "value": "9.20.5 Virtual Method Tables (Vtables) in C",
  "id": "9205-virtual-method-tables-vtables-in-c",
  "level": 3
}, {
  "value": "Common Pointer Mistakes — Expanded",
  "id": "common-pointer-mistakes--expanded",
  "level": 2
}, {
  "value": "Mistake 1: Uninitialized Pointer (Wild Pointer)",
  "id": "mistake-1-uninitialized-pointer-wild-pointer",
  "level": 3
}, {
  "value": "Mistake 2: Dangling Pointer (Use-After-Free)",
  "id": "mistake-2-dangling-pointer-use-after-free",
  "level": 3
}, {
  "value": "Mistake 3: Buffer Overflow via Pointer Arithmetic",
  "id": "mistake-3-buffer-overflow-via-pointer-arithmetic",
  "level": 3
}, {
  "value": "Mistake 4: Returning Address of Local Variable",
  "id": "mistake-4-returning-address-of-local-variable",
  "level": 3
}, {
  "value": "Mistake 5: Forgetting to Check malloc Return",
  "id": "mistake-5-forgetting-to-check-malloc-return",
  "level": 3
}, {
  "value": "Mistake 6: Off-by-One in Pointer Arithmetic",
  "id": "mistake-6-off-by-one-in-pointer-arithmetic",
  "level": 3
}, {
  "value": "Mistake 7: Confusing Pointers and Arrays with sizeof",
  "id": "mistake-7-confusing-pointers-and-arrays-with-sizeof",
  "level": 3
}, {
  "value": "Mistake 8: Type Mismatch with void*",
  "id": "mistake-8-type-mismatch-with-void",
  "level": 3
}, {
  "value": "Mistake 9: Dereferencing Incomplete Type",
  "id": "mistake-9-dereferencing-incomplete-type",
  "level": 3
}, {
  "value": "Mistake 10: Double Free",
  "id": "mistake-10-double-free",
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
}, {
  "value": "9.21 Pointer Dereference Chain — Deep Anatomy",
  "id": "921-pointer-dereference-chain--deep-anatomy",
  "level": 2
}, {
  "value": "Step-by-Step Hardware View",
  "id": "step-by-step-hardware-view",
  "level": 3
}, {
  "value": "Multi-Level Dereference Trace",
  "id": "multi-level-dereference-trace",
  "level": 3
}, {
  "value": "9.22 Pointer Alignment and Strict Aliasing",
  "id": "922-pointer-alignment-and-strict-aliasing",
  "level": 2
}, {
  "value": "Alignment",
  "id": "alignment",
  "level": 3
}, {
  "value": "Strict Aliasing Rule (C99 §6.5)",
  "id": "strict-aliasing-rule-c99-65",
  "level": 3
}, {
  "value": "9.23 Pointer Decay Deep Dive",
  "id": "923-pointer-decay-deep-dive",
  "level": 2
}, {
  "value": "Memory Layout Comparison",
  "id": "memory-layout-comparison",
  "level": 3
}, {
  "value": "sizeof(arr) vs sizeof(p) in function",
  "id": "sizeofarr-vs-sizeofp-in-function",
  "level": 3
}, {
  "value": "9.24 Complex Pointer Declarations — Decoding",
  "id": "924-complex-pointer-declarations--decoding",
  "level": 2
}, {
  "value": "The Right-Left (Spiral) Rule",
  "id": "the-right-left-spiral-rule",
  "level": 3
}, {
  "value": "Practice Decoding",
  "id": "practice-decoding",
  "level": 3
}, {
  "value": "Extended Quiz — Pointer Pitfalls",
  "id": "extended-quiz--pointer-pitfalls",
  "level": 2
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
        id: "chapter-9-pointers",
        children: "Chapter 9: Pointers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/08-functions",
          children: "Functions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/10-structures-unions",
          children: "Structures and Unions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare and initialize pointer variables with correct syntax"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " (address-of) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " (dereference) operators correctly"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform pointer arithmetic safely and interpret its scaling behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand array-pointer duality and its practical implications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between pointer to array and array of pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use double pointers (pointer to pointer) for multi-level indirection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare and use function pointers for callbacks and dispatch tables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), " for type-generic operations safely"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish NULL, dangling, wild, and void pointers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " correctly with pointers to enforce immutability guarantees"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize pointer safety rules to avoid undefined behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before studying this chapter you should be familiar with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic variable declaration and initialization (Chapter 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array declaration and indexing (Chapter 6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function declaration and parameter passing (Chapter 8)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " operator (Chapter 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Pointer Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A pointer stores the memory address of another variable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Declare with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type *ptr;"
            }), " and get an address with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr"
            }), " accesses the value at the stored address"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing an uninitialized or NULL pointer is undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding N to a pointer advances by N × sizeof(type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ptr++"
            }), " moves to the next element of the pointed-to type"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array-Pointer Duality"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array names decay to pointers; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(arr + i)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The subscript operator works via pointer arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to Array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A pointer that targets an entire array (", (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[N]"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&arr + 1"
            }), " skips the whole array, not just one element"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array of Pointers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An array whose elements are pointers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "char *arr[N]"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for string arrays, argv-style argument lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers to Pointers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "**ptr"
            }), " for multi-level indirection"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for 2D arrays, dynamic arrays of strings, modifying pointer parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers that store the address of a function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables callbacks, state machines, and dispatch tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic pointer that can hold any address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be cast before dereference; no arithmetic in standard C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer that points to nothing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (ptr != NULL)"
            }), " before dereferencing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to freed or out-of-scope memory"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set pointer to NULL after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            }), " to prevent use-after-free"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wild Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized pointer with garbage address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always initialize pointers at declaration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const with Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement determines what is immutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four combinations of const pointer vs pointer to const"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"9.1 Declaration\"] --> B[\"9.2 & and * Operators\"]\n    B --> C[\"9.3 Pointer Arithmetic\"]\n    C --> D[\"9.4 Array-Pointer Duality\"]\n    D --> E[\"9.5 Pointer to Array vs Array of Pointers\"]\n    E --> F[\"9.6 Pointer to Pointer\"]\n    F --> G[\"9.7 Function Pointers\"]\n    G --> H[\"9.8 void Pointer\"]\n    H --> I[\"9.9 NULL Pointer\"]\n    I --> J[\"9.10 Dangling Pointer\"]\n    J --> K[\"9.11 Wild Pointer\"]\n    K --> L[\"9.12 Pointer Safety\"]\n    L --> M[\"9.13 const and Pointers\"]\n    M --> N[\"9.14 Three-Star Programmer\"]\n    N --> O[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch09-pointers.png",
        alt: "C Pointers: Complete Reference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-pointer-declaration-and-initialization",
      children: "9.1 Pointer Declaration and Initialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pointer"
      }), " is a variable that stores the memory address of another variable. Instead of holding a value directly, it holds the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "location"
      }), " where a value lives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of memory as a large apartment building. Each apartment (variable) has a unique apartment number (memory address). A pointer is like a sticky note where you write down someone's apartment number. When you need to visit them, you read the sticky note and go to that apartment. Without the sticky note (NULL pointer), you cannot visit anyone. If the sticky note has an old apartment number after the person moved out (dangling pointer), you might walk into a stranger's apartment."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Counterpart"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An apartment with a resident"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address (&x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The apartment number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer (p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sticky note with the apartment number written on it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference (*p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Going to the apartment and meeting the resident"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A blank sticky note"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sticky note with an old apartment number after the resident moved out"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the target type"
        }), " — the type of data the pointer will point to (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Write the type followed by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " and the pointer name"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p;"
        }), " declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " as a pointer to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Obtain the address of a target variable"
        }), " using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " operator — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&x"
        }), " yields the memory address of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign the address to the pointer"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p = &x;"
        }), " stores the address in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optionally combine steps 2 and 4"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = &x;"
        }), " declares and initializes in one statement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;       /* Step 1: create the target variable */\nint *p;           /* Step 2: declare pointer to int */\np = &x;           /* Step 3 & 4: get address and assign */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or in one step:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nint *p = &x;      /* declare and initialize */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE x AS INTEGER WITH VALUE 42\nDECLARE p AS POINTER TO INTEGER\nSET p TO ADDRESS OF x\nPRINT \"Value of x:\" x\nPRINT \"Address of x:\" ADDRESS OF x\nPRINT \"Value at p:\" VALUE AT ADDRESS p\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is stored at address ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x1000"
      }), " and occupies bytes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x1000-0x1003"
      }), " (4-byte int). Pointer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " is stored at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x2000"
      }), " and occupies bytes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x2000-0x2007"
      }), " (8-byte pointer on 64-bit)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x (0x1000)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p (0x2000)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*p"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 42;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uninitialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory at 0x1000 contains 42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0xDEADBEEF"
            }), " (garbage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p holds whatever was at 0x2000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p = &x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x00001000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p now holds address of x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p = 100;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x00001000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference writes 100 to x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", *p);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x00001000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads 100 from x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 42;\n    int *p = &x;\n\n    printf(\"x = %d\\n\", x);\n    printf(\"&x = %p\\n\", (void*)&x);\n    printf(\"p = %p\\n\", (void*)p);\n    printf(\"*p = %d\\n\", *p);\n\n    /* Modify x through pointer */\n    *p = 100;\n    printf(\"After *p = 100, x = %d\\n\", x);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 42\n&x = 0x7fff5fbff70c\np = 0x7fff5fbff70c\n*p = 42\nAfter *p = 100, x = 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Declare pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes on 64-bit, 4 bytes on 32-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables direct memory manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of segmentation fault if NULL/uninitialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids copying large structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex syntax, especially multi-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Required for dynamic memory allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer arithmetic errors are hard to debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables arrays, strings, and data structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior on invalid access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No bounds checking in C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uninitialized pointer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p; *p = 42;"
        }), " — dereferences garbage address leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL dereference:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = NULL; *p = 42;"
        }), " — segmentation fault on most systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple declarations:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int* p, q;"
        }), " declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " as pointer, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "q"
        }), " as plain int"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct multi-declaration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p, *q;"
        }), " — both are pointers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A pointer is a variable whose value is a memory address — & gets an address, * accesses the value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-the--address-of-and--dereference-operators",
      children: "9.2 The & (Address-of) and * (Dereference) Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asking \"What is your address?\" — gives you the location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Going to that address and opening the door — gives you what is inside"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your friend lives in Apartment 5B, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&friend"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"5B\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*ptr_to_friend"
      }), " walks into Apartment 5B and sees your friend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&"
          }), ":"]
        }), " Precede any variable with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " to obtain its memory address: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = &x;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " on the left of assignment (write):"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p = new_value;"
        }), " modifies the variable p points to"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " on the right of assignment (read):"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int val = *p;"
        }), " reads the value p points to"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaining:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*&x"
        }), " is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " — the operators cancel out"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OPERATOR & (variable)\n    RETURNS the memory address of variable\n\nOPERATOR * (pointer)\n    RETURNS the value stored at the address held by pointer\n    If pointer == NULL, behavior is undefined (crash)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-1",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 10, b = 20;\nint *ptr = &a;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*ptr"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a = 10, b = 20;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
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
              children: "int *ptr = &a;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addr(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr = 99;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addr(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr = &b;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addr(b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr = 77;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addr(b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-1",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 10;\n    int *p = &x;   /* & gets address, assigns to p */\n\n    printf(\"&x  = %p\\n\", (void*)&x);\n    printf(\" p  = %p  (same as &x)\\n\", (void*)p);\n    printf(\" *p = %d  (value at address)\\n\", *p);\n\n    /* Using * on left side = write through pointer */\n    *p = 25;\n    printf(\"After *p = 25, x = %d\\n\", x);\n\n    /* & and * cancel: *&x == x */\n    printf(\"*&x = %d\\n\", *&x);   /* prints 25 */\n\n    /* Nested & and * on pointer variable */\n    int **pp = &p;\n    printf(\"&p  = %p\\n\", (void*)&p);\n    printf(\"pp  = %p  (same as &p)\\n\", (void*)pp);\n    printf(\"*pp = %p  (same as p)\\n\", (void*)*pp);\n    printf(\"**pp = %d  (same as *p)\\n\", **pp);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "&x  = 0x7fff5fbff70c\n p  = 0x7fff5fbff70c  (same as &x)\n *p = 10  (value at address)\nAfter *p = 25, x = 25\n*&x = 25\n&p  = 0x7fff5fbff710\npp  = 0x7fff5fbff710  (same as &p)\n*pp = 0x7fff5fbff70c  (same as p)\n**pp = 25  (same as *p)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Address-of (&)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time resolved for stack variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference (*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single memory read or write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chained dereference (**)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two memory reads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*NULL"
        }), " — dereferencing NULL is undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*uninitialized_pointer"
        }), " — dereferences garbage address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*cast_address"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(int*)0x1000"
        }), " assumes address is valid and accessible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&register_variable"
        }), " — cannot take address of a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " variable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&bitfield"
        }), " — cannot take address of a bit-field member"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The & operator yields the address of its operand; the * operator accesses the value at the stored address; they are inverses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-pointer-arithmetic",
      children: "9.3 Pointer Arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pointer is an apartment number on a long hallway. Adding 1 to the apartment number does not just increment by 1 — it moves to the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "next apartment"
      }), ". If each apartment is 100 square feet, moving one apartment over means advancing 100 feet down the hall, not 1 foot. Similarly, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p + 1"
      }), " advances by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(*p)"
      }), " bytes, not 1 byte."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine the base address"
        }), " stored in the pointer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the size of the pointed-to type"
        }), " using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(*p)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "To advance N elements"
        }), ", compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p + N"
        }), " which adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "N * sizeof(*p)"
        }), " bytes to the base address."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "To compute the difference"
        }), ", compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p - q"
        }), " which returns the number of elements between the two pointers (type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptrdiff_t"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always verify bounds"
        }), " — arithmetic beyond allocated memory (except one-past-the-end) is undefined behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pointer-arithmetic-rules",
      children: "Pointer Arithmetic Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " p + N   -> address = base + N * sizeof(*p)\n p - N   -> address = base - N * sizeof(*p)\n p - q   -> (address(p) - address(q)) / sizeof(type)\n p[N]    -> equivalent to *(p + N)\n ++p     -> p = p + 1 (advance by one element)\n --p     -> p = p - 1 (retreat by one element)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION advance_pointer(p, n):\n    result_address = ADDRESS(p) + n * SIZE_OF_ELEMENT(p)\n    RETURN pointer_with_address(result_address)\n\nFUNCTION pointer_difference(p, q):\n    diff_bytes = ADDRESS(p) - ADDRESS(q)\n    element_count = diff_bytes / SIZE_OF_ELEMENT(p)\n    RETURN element_count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table--full-walkthrough",
      children: "Dry Run Trace Table — Full Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int arr[] = {10, 20, 30, 40, 50}"
      }), " starting at address ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x1000"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(int) = 4"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value *(expr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = arr;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p points to arr[0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 1*4 = 0x1004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next int element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 2*4 = 0x1008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "30"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two elements ahead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 3*4 = 0x100C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x100C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "40"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three elements ahead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 4*4 = 0x1010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 5*4 = 0x1014"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1014"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Past the end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p++"
            }), " (post)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x1004"
            }), " (after)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read then advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++p"
            }), " (pre)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x1008"
            }), " (after)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "30"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advance then read"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-examples",
      children: "Complete Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-1-basic-arithmetic",
      children: "Example 1: Basic arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int *p = arr;\n\n    printf(\"Element     Address          Value\\n\");\n    printf(\"-------------------------------------\\n\");\n    for (int i = 0; i < n; i++) {\n        printf(\"arr[%d]      %p    %d\\n\",\n               i, (void*)(p + i), *(p + i));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Element     Address          Value\n-------------------------------------\narr[0]      0x7fff5fbff6e0    10\narr[1]      0x7fff5fbff6e4    20\narr[2]      0x7fff5fbff6e8    30\narr[3]      0x7fff5fbff6ec    40\narr[4]      0x7fff5fbff6f0    50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each address is 4 bytes apart (sizeof(int))."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-2-pointer-difference-and-comparison",
      children: "Example 2: Pointer difference and comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stddef.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = &arr[1];   /* points to 20 */\n    int *q = &arr[4];   /* points to 50 */\n\n    ptrdiff_t diff = q - p;\n    printf(\"q - p = %td  (elements between arr[1] and arr[4])\\n\", diff);\n\n    if (p < q) {\n        printf(\"p (arr[1]) comes before q (arr[4])\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "q - p = 3  (elements between arr[1] and arr[4])\np (arr[1]) comes before q (arr[4])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-3-traversing-with-pointer-increment",
      children: "Example 3: Traversing with pointer increment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {2, 4, 6, 8, 10};\n    int *p = arr;\n\n    while (p <= &arr[4]) {\n        printf(\"%d \", *p);\n        p++;\n    }\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2 4 6 8 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Increment pointer (p++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single add instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decrement pointer (p--)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single sub instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add offset (p + N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply by sizeof then add"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subtract pointers (p - q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtract then divide by sizeof"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index (p[N])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as *(p + N)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-1",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient sequential access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No bounds checking — out of bounds leads to UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to array indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic on different arrays is undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables low-level memory manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof scaling can be confusing for beginners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used by all standard library memory functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer overflow is not detected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out-of-bounds:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(p + 100)"
        }), " when array has only 5 elements leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-past-the-end:"
        }), " comparing against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr + 5"
        }), " (one past the last element) is allowed; dereferencing is not"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer overflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p + n"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n * sizeof(*p)"
        }), " overflows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size_t"
        }), " leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Null pointer arithmetic:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NULL + 1"
        }), " leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different array subtraction:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p_from_arrA - q_from_arrB"
        }), " leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "void pointer arithmetic:"
        }), " Not allowed in standard C (GCC extension treats it as byte-sized)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Pointer arithmetic automatically scales by sizeof(pointed-type) — p+N advances by N*sizeof(*p) bytes.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Dereferencing a pointer beyond allocated memory or performing arithmetic on pointers from different objects is undefined behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-array-pointer-duality",
      children: "9.4 Array-Pointer Duality"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An array name is like the address of a street. If you live on \"Oak Street\", the name refers to the entire street. But when you tell a taxi driver your address, you give the street name and it points to the start of the street. Similarly, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr"
      }), " in C decays to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&arr[0]"
      }), " in most contexts — it gives the starting address. Walking down the street is like pointer arithmetic: \"Oak Street + 3 houses\" gets you to the fourth house."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-3",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare an array:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[5] = {1,2,3,4,5};"
        }), " allocates 5 consecutive integers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["The array name ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr"
          }), " decays"]
        }), " to a pointer to the first element: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = arr;"
        }), " is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = &arr[0];"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use pointer notation for indexing:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[i]"
        }), " is defined by the C standard as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(arr + i)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Distinguish ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr"
          }), " from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&arr"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr"
        }), " has type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        }), " (pointer to first element), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&arr"
        }), " has type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(*)[5]"
        }), " (pointer to entire array)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply the rule:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr + 1"
        }), " advances by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(int)"
        }), " bytes; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&arr + 1"
        }), " advances by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr)"
        }), " (= 20 bytes for int[5])."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Array decay rule\narr[i] = *(arr + i)\n\n// Pointer difference\n&arr[i] - &arr[j] = i - j\n\n// Key distinction\narr + 1  -> advances by sizeof(element)\n&arr + 1 -> advances by sizeof(entire array)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-2",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int arr[3] = {10, 20, 30}"
      }), " at address ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x1000"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address Computed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dereferenced Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr + 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 1*4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr + 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 2*4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int(*)[3]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{10,20,30}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr + 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int(*)[3]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000 + 1*12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x100C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "next object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr[0]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[0]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*(arr + 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-2",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30};\n\n    printf(\"arr            = %p  (type int*)\\n\", (void*)arr);\n    printf(\"&arr           = %p  (type int(*)[3])\\n\", (void*)&arr);\n    printf(\"&arr[0]        = %p  (type int*)\\n\", (void*)&arr[0]);\n    printf(\"\\n\");\n\n    printf(\"arr + 1        = %p  (+%zu bytes)\\n\",\n           (void*)(arr + 1), sizeof(int));\n    printf(\"&arr + 1       = %p  (+%zu bytes)\\n\",\n           (void*)(&arr + 1), sizeof(arr));\n    printf(\"\\n\");\n\n    /* Proving arr[i] == *(arr + i) */\n    for (int i = 0; i < 3; i++) {\n        printf(\"arr[%d] = %d, *(arr + %d) = %d, %s\\n\",\n               i, arr[i], i, *(arr + i),\n               arr[i] == *(arr + i) ? \"SAME\" : \"DIFFERENT\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr            = 0x7fff5fbff6e0  (type int*)\n&arr           = 0x7fff5fbff6e0  (type int(*)[3])\n&arr[0]        = 0x7fff5fbff6e0  (type int*)\n\narr + 1        = 0x7fff5fbff6e4  (+4 bytes)\n&arr + 1       = 0x7fff5fbff6ec  (+12 bytes)\n\narr[0] = 10, *(arr + 0) = 10, SAME\narr[1] = 20, *(arr + 1) = 20, SAME\narr[2] = 30, *(arr + 2) = 30, SAME\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sizeof-exception",
      children: "The sizeof Exception"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The array name does NOT decay inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[10];\nprintf(\"%zu\\n\", sizeof(arr));    /* prints 40 (10 * 4) */\nprintf(\"%zu\\n\", sizeof(&arr[0])); /* prints 8 (pointer size) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the--exception",
      children: "The & Exception"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The array name does NOT decay when used with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[10];\nint (*p)[10] = &arr;   /* valid: pointer to array of 10 ints */\nint *q = arr;          /* valid: pointer to int (decayed) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Array indexing arr[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*(base + i * sizeof)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single memory access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(arr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time constant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-2",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive syntax for sequential data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array name is not a modifiable lvalue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seamless integration with pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof and & are exceptions to decay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all dynamic memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decay loses size information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero runtime overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot assign to array name"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr)"
        }), " gives array size (in bytes), not pointer size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&arr + 1"
        }), " skips the entire array, not just one element"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "arr++"
        }), " is invalid — array name is not a modifiable lvalue"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decay to pointer loses size information — must track length separately"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Function parameters declared as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[]"
        }), " are actually ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " In most contexts arr decays to &arr[0]; arr[i] is defined as *(arr + i); arr + 1 and &arr + 1 advance by different amounts.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When you pass an array to a function, its size is lost — always pass the length as a separate parameter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-pointer-to-array-vs-array-of-pointers",
      children: "9.5 Pointer to Array vs Array of Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer to array:"
        }), " A single sticky note that references an entire row of lockers. The note says \"Row B\" — you look at the row as a whole unit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array of pointers:"
        }), " A row of sticky notes, each pointing to a different locker. This is like a filing cabinet where each drawer contains a folder label pointing to the actual files stored elsewhere."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "951-pointer-to-array",
      children: "9.5.1 Pointer to Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pointer to an array"
      }), " is a pointer that targets an entire array rather than just its first element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[5] = {1, 2, 3, 4, 5};\nint (*p)[5] = &arr;   /* p is a pointer to an array of 5 ints */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Syntax breakdown: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*p)[5]"
      }), " — parentheses are required. Without them, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *p[5]"
      }), " becomes an array of 5 pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-4",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare the array:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[5] = {1,2,3,4,5};"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Take the address of the whole array:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&arr"
        }), " yields ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(*)[5]"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a pointer-to-array:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[5] = &arr;"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " points to the whole array."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access elements:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(*p)[i]"
        }), " dereferences ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " (getting the array) and indexes into it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[5] = {10, 20, 30, 40, 50};\n    int (*p)[5] = &arr;   /* pointer to array of 5 ints */\n\n    printf(\"arr[2] = %d\\n\", (*p)[2]);       /* 30 */\n    printf(\"(*p)[2] = arr[2]\\n\");\n\n    /* p + 1 advances by sizeof(arr) = 20 bytes */\n    printf(\"p      = %p\\n\", (void*)p);\n    printf(\"p + 1  = %p  (skip entire array)\\n\", (void*)(p + 1));\n    printf(\"&arr + 1 = %p\\n\", (void*)(&arr + 1));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[2] = 30\n(*p)[2] = arr[2]\np      = 0x7fff5fbff6e0\np + 1  = 0x7fff5fbff6f4  (skip entire array)\n&arr + 1 = 0x7fff5fbff6f4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "952-array-of-pointers",
      children: "9.5.2 Array of Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "array of pointers"
      }), " is an array where each element is a pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *arr[5];   /* array of 5 pointers to int */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each element ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[0]"
      }), " through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[4]"
      }), " is an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int*"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 10, b = 20, c = 30;\n    int *arr[3];            /* array of 3 pointers to int */\n\n    arr[0] = &a;\n    arr[1] = &b;\n    arr[2] = &c;\n\n    for (int i = 0; i < 3; i++) {\n        printf(\"arr[%d] = %p, *arr[%d] = %d\\n\", i, (void*)arr[i], i, *arr[i]);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[0] = 0x7fff5fbff70c, *arr[0] = 10\narr[1] = 0x7fff5fbff710, *arr[1] = 20\narr[2] = 0x7fff5fbff714, *arr[2] = 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-use-array-of-strings",
      children: "Common Use: Array of Strings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    char *fruits[] = {\"apple\", \"banana\", \"cherry\", \"date\"};\n\n    for (int i = 0; i < 4; i++) {\n        printf(\"fruits[%d] = %s\\n\", i, fruits[i]);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fruits[0] = apple\nfruits[1] = banana\nfruits[2] = cherry\nfruits[3] = date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-pointer-to-array-vs-array-of-pointers",
      children: "Comparison: Pointer to Array vs Array of Pointers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Pointer to Array ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[N]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Array of Pointers ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p[N]"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to N-element array of int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-element array of pointers to int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pointer (8 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N pointers (8*N bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Points to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single array object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple independent objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(*p)[i]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p[i]"
            }), " (then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*p[i]"
            }), " for value)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Arithmetic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p+1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advances by N*sizeof(int) bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advances by sizeof(int*) bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D array access, whole-array operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String arrays, jagged arrays, argv"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace",
      children: "Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int data[3] = {10, 20, 30};\nint (*pa)[3] = &data;   /* pointer to array */\nint *ap[3];              /* array of pointers */\nap[0] = &data[0];\nap[1] = &data[1];\nap[2] = &data[2];\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pa (int(*)[3])"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ap (int*[3])"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(*pa)[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*ap[i]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pa + 0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ap[0]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addr of data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{addr[0],?,?}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(*pa)[1]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*ap[1]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pa + 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data + 12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "out of bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Access (*p)[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference then index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access *p[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index then dereference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[N]"
        }), " is a pointer to an array of N ints; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[N]"
        }), " is an array of N pointers to int — they are fundamentally different types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-pointer-to-pointer-double-pointer",
      children: "9.6 Pointer to Pointer (Double Pointer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pointer to pointer is like a receptionist who holds a sticky note with ", (0,jsx_runtime.jsx)(_components.em, {
        children: "your"
      }), " apartment number written on it. You give the receptionist your business card (which has your address). Your friend has the receptionist's phone number. To find you:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Friend calls receptionist (dereferences first pointer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receptionist reads your business card (dereferences second pointer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Now they have your address"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**ptr"
      }), " — first ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " gets the intermediate pointer, second ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " gets the final value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-5",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a target variable:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = 42;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a pointer to x:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = &x;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a pointer to p:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int **pp = &p;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereference once:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*pp"
        }), " gives the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " — which is the address of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereference twice:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**pp"
        }), " gives the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " — which is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "42"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pp -> p -> x\n\nDECLARE x AS INTEGER = 42\nDECLARE p AS POINTER TO INTEGER = ADDRESS OF x\nDECLARE pp AS POINTER TO POINTER TO INTEGER = ADDRESS OF p\n\n// Accessing x through pp:\nREAD *pp     -> returns the address of x (same as p)\nREAD **pp    -> returns the value 42 (same as *p and x)\n\n// Modifying x through pp:\nSET **pp = 99  -> x is now 99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table--full-dereference-chain",
      children: "Dry Run Trace Table — Full Dereference Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume addresses: x at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x1000"
      }), ", p at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x2000"
      }), ", pp at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x3000"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x (0x1000)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p (0x2000)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pp (0x3000)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*p"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*pp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "**pp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 42;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = &x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int **pp = &p;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**pp = 99;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*pp = NULL;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERROR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-3",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 42;\n    int *p = &x;         /* single pointer */\n    int **pp = &p;       /* double pointer */\n    int ***ppp = &pp;    /* triple pointer (three-star) */\n\n    printf(\"x   = %d\\n\", x);\n    printf(\"&x  = %p\\n\", (void*)&x);\n\n    printf(\"\\np   = %p  (address of x)\\n\", (void*)p);\n    printf(\"*p  = %d\\n\", *p);\n\n    printf(\"\\npp  = %p  (address of p)\\n\", (void*)pp);\n    printf(\"*pp = %p  (value of p)\\n\", (void*)*pp);\n    printf(\"**pp = %d  (value of x)\\n\", **pp);\n\n    printf(\"\\nppp = %p  (address of pp)\\n\", (void*)ppp);\n    printf(\"*ppp = %p\\n\", (void*)*ppp);\n    printf(\"**ppp = %p\\n\", (void*)**ppp);\n    printf(\"***ppp = %d\\n\", ***ppp);\n\n    /* Practical use: modifying pointer through function */\n    printf(\"\\n--- Practical: Modifying pointer in function ---\\n\");\n    int *ptr = NULL;\n    printf(\"Before: ptr = %p\\n\", (void*)ptr);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x   = 42\n&x  = 0x7fff5fbff70c\n\np   = 0x7fff5fbff70c  (address of x)\n*p  = 42\n\npp  = 0x7fff5fbff710  (address of p)\n*pp = 0x7fff5fbff70c  (value of p)\n**pp = 42  (value of x)\n\nppp = 0x7fff5fbff718  (address of pp)\n*ppp = 0x7fff5fbff710\n**ppp = 0x7fff5fbff70c\n***ppp = 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-example-allocating-2d-array",
      children: "Practical Example: Allocating 2D Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    int rows = 3, cols = 4;\n    int **matrix = malloc(rows * sizeof(int*));\n\n    for (int i = 0; i < rows; i++) {\n        matrix[i] = malloc(cols * sizeof(int));\n    }\n\n    /* Fill and print */\n    int count = 1;\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            matrix[i][j] = count++;\n            printf(\"%3d \", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    /* Cleanup */\n    for (int i = 0; i < rows; i++) free(matrix[i]);\n    free(matrix);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  1   2   3   4\n  5   6   7   8\n  9  10  11  12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-example-swapping-pointers",
      children: "Practical Example: Swapping Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid swap_ptrs(int **a, int **b)\n{\n    int *tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nint main(void)\n{\n    int x = 10, y = 20;\n    int *p1 = &x, *p2 = &y;\n\n    printf(\"Before: p1->%d, p2->%d\\n\", *p1, *p2);\n    swap_ptrs(&p1, &p2);\n    printf(\"After:  p1->%d, p2->%d\\n\", *p1, *p2);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before: p1->10, p2->20\nAfter:  p1->20, p2->10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Single dereference (*p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 memory read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double dereference (**pp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 memory reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triple dereference (***ppp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 memory reads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "**pp"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pp = NULL"
        }), " — dereference NULL leads to crash"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "**pp"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*pp = NULL"
        }), " — first dereference works, second crashes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Triple pointer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "***ppp"
        }), " — possible but rarely needed beyond 2 levels"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory leak when allocating jagged arrays — must free each row individually"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A double pointer (int**) stores the address of a pointer; **pp dereferences twice to reach the original variable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-pointer-to-function-function-pointers",
      children: "9.7 Pointer to Function (Function Pointers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A function pointer is like a remote control button. You can program the \"action\" button to do different things — play music, turn on lights, or start the coffee maker. The button label stays the same, but the function it triggers changes. Similarly, a function pointer lets you decide at runtime which function to call."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-6",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the function signature:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int add(int a, int b)"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", takes two ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " parameters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the pointer syntax:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*ptr)(int, int)"
        }), " — parentheses around ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " are mandatory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign a function address:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr = add;"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr = &add;"
        }), " — the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " is optional)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Call through the pointer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result = ptr(5, 3);"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result = (*ptr)(5, 3);"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-breakdown",
      children: "Syntax Breakdown"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *f(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Function returning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*f)(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pointer to function returning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*f[5])(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array of 5 pointers to functions returning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*(*f)(int))(int)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to function returning pointer to function"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Declare function pointer type\nDECLARE operation AS POINTER TO FUNCTION(int, int) -> int\n\n// Assign\nSET operation TO ADDRESS OF add\n\n// Call\nSET result TO CALL operation(5, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-4",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b)      { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b)   { return b ? a / b : 0; }\n\nint main(void)\n{\n    /* Declare function pointer */\n    int (*operation)(int, int);\n\n    /* Assign and call */\n    operation = add;\n    printf(\"add(5, 3) = %d\\n\", operation(5, 3));\n\n    operation = subtract;\n    printf(\"sub(5, 3) = %d\\n\", operation(5, 3));\n\n    operation = multiply;\n    printf(\"mul(5, 3) = %d\\n\", operation(5, 3));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add(5, 3) = 8\nsub(5, 3) = 2\nmul(5, 3) = 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispatch-table-example",
      children: "Dispatch Table Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b)      { return a + b; }\nint sub(int a, int b)      { return a - b; }\nint mul(int a, int b)      { return a * b; }\nint divide(int a, int b)   { return b ? a / b : 0; }\nint mod(int a, int b)      { return b ? a % b : 0; }\n\nint main(void)\n{\n    int (*ops[])(int, int) = {add, sub, mul, divide, mod};\n    char *names[] = {\"add\", \"sub\", \"mul\", \"div\", \"mod\"};\n\n    printf(\"Operation    Result\\n\");\n    printf(\"--------------------\\n\");\n    for (int i = 0; i < 5; i++) {\n        printf(\"%-10s %d\\n\", names[i], ops[i](20, 6));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Operation    Result\n--------------------\nadd         26\nsub         14\nmul         120\ndiv         3\nmod         2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "function-pointer-as-parameter-callback",
      children: "Function Pointer as Parameter (Callback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid apply(int arr[], int n, int (*transform)(int))\n{\n    for (int i = 0; i < n; i++) {\n        arr[i] = transform(arr[i]);\n    }\n}\n\nint double_it(int x)  { return x * 2; }\nint square(int x)     { return x * x; }\nint negate(int x)     { return -x; }\n\nint main(void)\n{\n    int nums[] = {1, 2, 3, 4, 5};\n    int n = sizeof(nums) / sizeof(nums[0]);\n\n    apply(nums, n, double_it);\n    printf(\"Doubled: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");\n\n    apply(nums, n, square);\n    printf(\"Squared: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Doubled: 2 4 6 8 10\nSquared: 4 16 36 64 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
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
            children: "Declare function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes on 64-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assign function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call through pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as direct call (indirect branch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch table lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index into array, call through pointer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-3",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables callbacks (qsort, pthread_create)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime polymorphism without OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect call may inhibit inlining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy pattern implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety requires signature match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State machines and plugin systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging indirect calls is harder"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL function pointer:"
        }), " Calling a NULL function pointer leads to segmentation fault"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature mismatch:"
        }), " Assigning a function with wrong signature leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Returning function pointers:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*get_op(char c))(int,int)"
        }), " — readability suffers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "typedef helps:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typedef int (*op_t)(int,int);"
        }), " simplifies declarations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Function pointers store the address of a function, enabling callbacks, dispatch tables, and runtime polymorphism without OOP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-void-pointer-generic-pointer",
      children: "9.8 void Pointer (Generic Pointer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), " is a generic pointer that can hold the address of any data type. It is the mechanism for type-generic programming in C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A void pointer is like a universal mailbox key. The key fits any mailbox (can point to any type), but you need to know which mailbox you opened to know what to do with the contents (must cast before using)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-7",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a void pointer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void *ptr;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign any address:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr = &x;"
        }), " where x can be int, double, char, struct, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cast before dereferencing:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int val = *(int*)ptr;"
        }), " — the cast tells the compiler the type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use with standard functions:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort()"
        }), " all return or accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE ptr AS VOID POINTER\n\n// Store any address\nSET ptr TO ADDRESS OF any_variable\n\n// Use: must cast to actual type\nSET result TO VALUE AT (CAST ptr TO POINTER TO actual_type)\n\n// Arithmetic: NOT allowed (type size unknown)\n// ptr + 1  // COMPILER ERROR in standard C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-5",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 42;\n    double y = 3.14159;\n    char c = 'Z';\n\n    void *ptr;\n\n    /* Point to int */\n    ptr = &x;\n    printf(\"int:    %d\\n\", *(int*)ptr);\n\n    /* Point to double */\n    ptr = &y;\n    printf(\"double: %.2f\\n\", *(double*)ptr);\n\n    /* Point to char */\n    ptr = &c;\n    printf(\"char:   %c\\n\", *(char*)ptr);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int:    42\ndouble: 3.14\nchar:   Z\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-swap-function",
      children: "Generic Swap Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nvoid generic_swap(void *a, void *b, size_t size)\n{\n    char *ca = (char*)a;\n    char *cb = (char*)b;\n    char tmp;\n\n    for (size_t i = 0; i < size; i++) {\n        tmp = ca[i];\n        ca[i] = cb[i];\n        cb[i] = tmp;\n    }\n}\n\nint main(void)\n{\n    int  ix = 10, iy = 20;\n    double dx = 1.5, dy = 9.9;\n\n    generic_swap(&ix, &iy, sizeof(int));\n    printf(\"int:    %d %d\\n\", ix, iy);\n\n    generic_swap(&dx, &dy, sizeof(double));\n    printf(\"double: %.1f %.1f\\n\", dx, dy);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int:    20 10\ndouble: 9.9 1.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "void pointer arithmetic:"
        }), " Not allowed in standard C (unknown size). GCC extension allows it (treated as byte-sized)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Dereferencing void"
          }), ":"]
        }), "* Not allowed without cast — compilation error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sizeof(void):"
        }), " Not defined in standard C (GCC extension: 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Pointer to function vs void"
          }), ":"]
        }), "* The C standard does not guarantee conversion between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), " and function pointers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " void* is a type-erased pointer that can hold any address but must be cast before dereference; arithmetic on it is not standard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-null-pointer",
      children: "9.9 NULL Pointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A NULL pointer is a pointer that explicitly points to nothing. It is a defined concept used to indicate that a pointer is not currently valid."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A NULL pointer is like a business card that is intentionally left blank. It does not point to anyone. Trying to visit the person at a blank business card (dereferencing NULL) leads to confusion — you cannot visit \"nothing\". The guard will stop you (segmentation fault)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-8",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize to NULL:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = NULL;"
        }), " — the pointer intentionally stores address 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL is a macro"
        }), " defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stddef.h>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdio.h>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<string.h>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<time.h>"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check before dereferencing:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (p != NULL) { /* safe to use *p */ }"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL is falsy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (p)"
        }), " is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (p != NULL)"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (!p)"
        }), " checks for NULL."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stddef.h>\n\nint main(void)\n{\n    int *p = NULL;\n\n    /* Safety check */\n    if (p != NULL) {\n        printf(\"*p = %d\\n\", *p);   /* never reached */\n    } else {\n        printf(\"p is NULL, cannot dereference\\n\");\n    }\n\n    /* NULL is falsy */\n    if (!p) {\n        printf(\"!p is true: p is NULL\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p is NULL, cannot dereference\n!p is true: p is NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "null-vs-0-vs-0-vs-nullptr",
      children: "NULL vs 0 vs '\\0' vs nullptr"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NULL"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void*"
            }), " (or integer 0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((void*)0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer invalidity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'\\0'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null character (string terminator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            }), " (C23)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe null pointer constant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereferencing NULL:"
        }), " Undefined behavior — typically a segmentation fault"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Passing NULL to string functions:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strlen(NULL)"
        }), " leads to undefined behavior (crash)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL in pointer arithmetic:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NULL + 1"
        }), " leads to undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "free(NULL):"
        }), " Explicitly allowed by the C standard — does nothing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL function pointer:"
        }), " Calling a NULL function pointer leads to crash"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " NULL is an invalid pointer value; always check p != NULL before dereferencing p."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-dangling-pointer",
      children: "9.10 Dangling Pointer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dangling pointer"
      }), " is a pointer that continues to hold the address of memory that has been freed or has gone out of scope. Dereferencing it is undefined behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have a friend's apartment number on a sticky note. Your friend moves out and someone else moves in. The sticky note still says your old friend's apartment number — but the person living there now is a stranger. If you show up and start talking to the stranger (dereferencing a dangling pointer), the results are unpredictable and potentially dangerous."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-types-of-dangling-pointers",
      children: "Three Types of Dangling Pointers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap dangling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Memory freed with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); /* p is now dangling */"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack dangling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable goes out of scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returning address of local variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array dangling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array bounds exceeded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\\n\", p[n]);"
            }), " where n >= size"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-heap-dangling",
      children: "Numbered Steps for Heap Dangling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocate memory:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = malloc(sizeof(int)); *p = 42;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Free the memory:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free(p);"
        }), " — the memory is returned to the system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p still contains the old address"
        }), " — it is now a dangling pointer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["*", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Accessing ", (0,jsx_runtime.jsx)(_components.em, {
            children: "p is undefined behavior"
          })]
        }), " — the memory may be reused, corrupted, or cause a crash."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-6",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint* create_dangling(void)\n{\n    int local = 42;\n    return &local;   /* BUG: local goes out of scope */\n}\n\nint main(void)\n{\n    int *p = malloc(sizeof(int));\n    *p = 100;\n\n    free(p);         /* p is now dangling */\n\n    /* UNDEFINED BEHAVIOR: use-after-free */\n    /* *p = 200; */\n\n    /* Prevention: set to NULL after free */\n    p = NULL;\n\n    /* Stack dangling */\n    int *q = create_dangling();\n\n    /* Dereferencing q is undefined behavior */\n    /* printf(\"%d\\n\", *q); */\n\n    if (q == NULL) {\n        printf(\"q is NULL (hypothetical safe state)\\n\");\n    }\n\n    printf(\"p = %p (NULL, safe)\\n\", (void*)p);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-techniques",
      children: "Prevention Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    int *p = malloc(sizeof(int));\n    *p = 42;\n\n    printf(\"*p = %d\\n\", *p);\n\n    /* 1. Set to NULL immediately after free */\n    free(p);\n    p = NULL;\n\n    /* 2. Or use a macro */\n    #define FREE_SAFE(ptr) do { free(ptr); (ptr) = NULL; } while(0)\n\n    int *q = malloc(sizeof(int));\n    *q = 99;\n    FREE_SAFE(q);   /* frees and sets to NULL */\n\n    if (q == NULL) {\n        printf(\"q is now NULL (safe)\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double free:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free(p); free(p);"
        }), " — undefined behavior (heap corruption)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use after free:"
        }), " Writing to freed memory may corrupt the heap allocator's internal data structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Returning address of local variable:"
        }), " The stack frame is destroyed after the function returns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope of loop variable:"
        }), " Pointers to loop variables that go out of scope require care"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " After free() or when a variable goes out of scope, all pointers to that memory become dangling — set them to NULL immediately."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "911-wild-pointer",
      children: "9.11 Wild Pointer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wild pointer"
      }), " (also called an uninitialized pointer) is a pointer that has been declared but not initialized. Its value is whatever garbage was in memory at that location."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A wild pointer is like finding a random address on a scrap of paper in the street. You have no idea whose address it is, whether anyone lives there, or what you will find if you go there. Going to that address is dangerous — you might walk into a police station, a hospital, or someone's private home."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-9",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare a pointer without initialization:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p contains a garbage address"
        }), " — whatever bits were at that memory location."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereferencing p is undefined behavior:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p = 100;"
        }), " writes to a random memory location."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The crash may not happen immediately"
        }), " — making wild pointers extremely dangerous to debug."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-7",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int *p;          /* wild pointer — uninitialized */\n\n    /* UNDEFINED BEHAVIOR — p could point anywhere */\n    /* *p = 100; */\n\n    /* Prevention: always initialize */\n    int *q = NULL;   /* safe */\n    int x = 10;\n    int *r = &x;     /* safe */\n    int *s = malloc(sizeof(int));  /* safe */\n\n    if (s) {\n        *s = 50;\n        printf(\"*s = %d\\n\", *s);\n        free(s);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-rules",
      children: "Prevention Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* BAD — wild pointer */\nint *p;\n*p = 42;\n\n/* GOOD — initialize to NULL */\nint *p = NULL;\n\n/* GOOD — initialize with valid address */\nint x;\nint *p = &x;\n\n/* GOOD — allocate on heap */\nint *p = malloc(sizeof(int));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-9",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional initialization:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p; if (cond) { p = &x; } /* p still wild if !cond */"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial initialization in structs:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct { int *p; int *q; } s = {NULL};"
        }), " — s.q is wild"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static and global pointers:"
        }), " Zero-initialized by default — safer than local wild pointers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A wild pointer has an indeterminate value; always initialize pointers to NULL or a valid address at declaration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "912-pointer-safety",
      children: "9.12 Pointer Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-11",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pointer safety is like neighborhood safety rules for handling apartment addresses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never visit an address you found on the ground (no wild pointers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never visit an apartment whose resident moved out (no dangling pointers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never visit apartment number NULL (it does not exist)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never walk past the last apartment on the hallway (no buffer overflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always know what kind of apartment you are visiting (correct type casting)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-five-golden-rules",
      children: "The Five Golden Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always initialize"
        }), " pointers — set to NULL or a valid address at declaration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check for NULL"
        }), " before dereferencing — guard every pointer access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set to NULL after free"
        }), " — prevent dangling pointer access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never access beyond bounds"
        }), " — know the allocated size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cast correctly"
        }), " — ensure the cast type matches the actual data type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safety-checklist",
      children: "Safety Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    /* RULE 1: Initialize */\n    int *p = NULL;            /* safe */\n    int x = 42;\n    int *q = &x;              /* safe */\n    int *r = malloc(10 * sizeof(int));  /* safe */\n    if (!r) return 1;         /* always check malloc return */\n\n    /* RULE 2: Check before dereference */\n    if (p != NULL) {\n        printf(\"%d\\n\", *p);   /* never reached — p is NULL */\n    }\n\n    /* RULE 3: NULL after free */\n    free(r);\n    r = NULL;\n\n    /* RULE 4: Bounds checking */\n    int arr[5] = {1,2,3,4,5};\n    int *ap = arr;\n    int index = 3;\n    if (index >= 0 && index < 5) {\n        printf(\"arr[%d] = %d\\n\", index, ap[index]);\n    }\n\n    /* RULE 5: Correct casting */\n    void *vp = &x;\n    int val = *(int*)vp;      /* correct cast */\n    /* double bad = *(double*)vp;  WRONG — type mismatch */\n\n    printf(\"val = %d\\n\", val);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-safety-violations-and-fixes",
      children: "Common Safety Violations and Fixes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Violation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code (Bad)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code (Good)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wild pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p; *p=5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p=NULL; if(p) *p=5;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); *p=5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); p=NULL;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p[100]=5;"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["check: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if(i < size) p[i]=5;"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p=5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if(p != NULL) *p=5;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type mismatch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*(double*)p"
            }), " (p points to int)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*(int*)p"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returning stack addr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return &local;"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " or malloc"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-4",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Safety Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize to NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents wild pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional line of code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents crashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime branch overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL after free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches use-after-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defensive programming habit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds guards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents buffer overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance check on every access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Correct casts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents type confusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires programmer discipline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The five rules of pointer safety — initialize, NULL-check, NULL-after-free, bound-check, and cast correctly — prevent nearly all pointer-related bugs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "913-const-and-pointers",
      children: "9.13 const and Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-12",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " pointer is like a sealed envelope:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const int *p"
        }), " — someone gave you a sealed envelope and said \"you can look at what is inside, but you cannot change it\". You can put the envelope down and pick up a different one (change p)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "int * const p"
        }), " — someone glued the envelope to your hand. You cannot put it down (cannot change p), but you can open the envelope and change the contents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const int * const p"
        }), " — sealed envelope glued to your hand. You cannot change the contents and cannot put it down."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-four-combinations",
      children: "The Four Combinations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int  x = 10, y = 20;\n/* 1 */ const int *p1 = &x;      /* pointer to const int */\n/* 2 */ int const *p2 = &x;      /* same as above */\n/* 3 */ int * const p3 = &x;     /* const pointer to int */\n/* 4 */ const int * const p4 = &x; /* const pointer to const int */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p is"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*p is"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read cross"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write *p"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write p"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutable"
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
              children: "const int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int const *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int * const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mutable"
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
              children: "const int * const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-code-example-8",
      children: "Complete Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 10, y = 20;\n\n    /* 1. Pointer to const int (can change pointer, cannot change value) */\n    const int *p1 = &x;\n    p1 = &y;            /* OK — pointer is mutable */\n    /* *p1 = 30; — ERROR: cannot modify through const pointer */\n\n    /* 2. Const pointer to int (can change value, cannot change pointer) */\n    int * const p2 = &x;\n    *p2 = 30;           /* OK — value is mutable */\n    /* p2 = &y; — ERROR: pointer is const */\n\n    /* 3. Const pointer to const int (cannot change either) */\n    const int * const p3 = &x;\n    /* *p3 = 40; — ERROR */\n    /* p3 = &y; — ERROR */\n\n    printf(\"x = %d, y = %d\\n\", x, y);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 30, y = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "const-in-function-parameters",
      children: "const in Function Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Signals: arr is read-only */\nvoid print_array(const int *arr, size_t n)\n{\n    for (size_t i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\n/* Const correctness: passing const int* to function expecting int* is a warning */\nvoid bad_function(int *p)\n{\n    *p = 100;   /* modifies caller data */\n}\n\nint main(void)\n{\n    int nums[] = {1, 2, 3, 4, 5};\n    const int *cp = nums;\n\n    print_array(cp, 5);       /* OK — const int* to const int* */\n    /* bad_function(cp); — WARNING: discards const qualifier */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-10",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Casting away const:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(int*)const_ptr"
        }), " — technically possible but leads to undefined behavior if the original object was declared const"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "const and typedef:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typedef int* ip; const ip p;"
        }), " — this is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int * const p"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int *p"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "const correctness:"
        }), " Always mark pointer parameters as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " when the function does not modify the pointed-to data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " const int *p protects the pointed-to data; int * const p protects the pointer itself; read the declaration right-to-left to decode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "914-three-star-programmer",
      children: "9.14 Three-Star Programmer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The term ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"three-star programmer\""
      }), " (or \"three-star problem\") refers to a programmer who uses triple pointers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "int ***p"
      }), ") unnecessarily. The term originated in the \"C Puzzle Book\" and Unix kernel development circles. While double pointers are often necessary, triple pointers are rarely justified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-it-means",
      children: "What It Means"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Star Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Justified"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always justified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays, strings, heap allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int **pp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D arrays, argv, modifying pointer params"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int ***ppp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to pointer to pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme rare cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Four-star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int ****pppp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never justified in user code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-might-you-actually-need-three-stars",
      children: "When Might You Actually Need Three Stars?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Rare legitimate case: a function that allocates and returns\n   an array of strings through a parameter */\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint create_string_array(char ***out, int count, const char *prefix)\n{\n    *out = malloc(count * sizeof(char*));\n    if (!*out) return -1;\n\n    for (int i = 0; i < count; i++) {\n        char buf[32];\n        snprintf(buf, sizeof(buf), \"%s_%d\", prefix, i);\n        (*out)[i] = strdup(buf);\n        if (!(*out)[i]) {\n            /* cleanup */\n            for (int j = 0; j < i; j++) free((*out)[j]);\n            free(*out);\n            *out = NULL;\n            return -1;\n        }\n    }\n    return 0;\n}\n\nint main(void)\n{\n    char **strings = NULL;\n    if (create_string_array(&strings, 3, \"file\") == 0) {\n        for (int i = 0; i < 3; i++) {\n            printf(\"%s\\n\", strings[i]);\n            free(strings[i]);\n        }\n        free(strings);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "file_0\nfile_1\nfile_2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-warning",
      children: "The Warning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you find yourself writing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "***"
      }), " in application-level code, pause and ask:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can I use a struct to encapsulate the levels of indirection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can I use typedef to clarify the intent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is there a simpler design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Three-star programming (int***) is rarely necessary in application code — if you need triple indirection, reconsider the design."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "915-pointer-categories",
      children: "9.15 Pointer Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table-1",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "int"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(int)"
            }), " units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays, integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "char"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte units"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strings, buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "double"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(double)"
            }), " units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "void"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must cast first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed (standard C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic memory, malloc, memcpy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callbacks, dispatch tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Array ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(*p)[i]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "N * sizeof(int)"
            }), " units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D arrays, whole-array access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Struct ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct X *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p->member"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(struct X)"
            }), " units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked lists, trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "const ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int * const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (but pointer fixed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "const data ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read-only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(int)"
            }), " units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-differences",
      children: "Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "int*"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "char*"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function ptr"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(*p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p+1 advances by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can dereference directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (cast required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via call syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can do arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (type-erased)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-checked"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "916-array-vs-pointer--key-differences",
      children: "9.16 Array vs Pointer — Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Declaration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[5];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates contiguous storage for N elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates 8 bytes (64-bit) for the address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size of"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(arr)"
            }), " = N * sizeof(element)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(p)"
            }), " = 8 (or 4 on 32-bit)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be reassigned (not an lvalue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be reassigned to point elsewhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory is reserved at declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be set to a valid address before use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays to pointer in expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not decay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements stored in contiguous memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can point to single variable, array, or heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arithmetic"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implicit: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr + i"
            }), " works"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explicit: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p + i"
            }), " works"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function param"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int arr[])"
            }), " is actually ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int *arr)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int *p)"
            }), " is explicit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sizeof in param"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In function, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(arr)"
            }), " = 8 (pointer size)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In function, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(p)"
            }), " = 8"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-to-demonstrate",
      children: "Code to Demonstrate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid func(int arr[5])  /* compiler treats this as int *arr */\n{\n    printf(\"sizeof(arr) in function: %zu (pointer size!)\\n\", sizeof(arr));\n}\n\nint main(void)\n{\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *p = arr;\n\n    printf(\"sizeof(arr) = %zu  (20 = 5 * 4)\\n\", sizeof(arr));\n    printf(\"sizeof(p)   = %zu  (8 = pointer size)\\n\", sizeof(p));\n\n    func(arr);\n\n    /* arr = p; — COMPILER ERROR: array name is not a modifiable lvalue */\n    p = arr;   /* OK — pointer can be reassigned */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr) = 20  (20 = 5 * 4)\nsizeof(p)   = 8  (8 = pointer size)\nsizeof(arr) in function: 8 (pointer size!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "917-dangling-vs-wild-vs-null-vs-void-pointer-comparison",
      children: "9.17 Dangling vs Wild vs NULL vs Void Pointer Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dangling Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wild Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NULL Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "void Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Points to freed or out-of-scope memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized pointer with garbage address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intentionally points to nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-erased pointer that can hold any address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cause"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            }), " then use, or return of local address"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declared but not initialized"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explicit initialization: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p = NULL"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Declared as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard — pointer address looks valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very hard — address is random"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Easy — check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (p == NULL)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy — declared as void*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dereference result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (may crash, may corrupt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation fault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error (must cast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set to NULL after free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always initialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check before dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast before use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catch at compile time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (but tools help)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (but type mismatch caught)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catch at runtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes (ASan, Valgrind)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes (segfault)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (segfault)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Is it ever useful?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — sentinel value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — generic programming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-diagram",
      children: "Memory Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     Memory Map\n     ┌─────────────┐\n     │ Valid Data  │  ◄── Valid pointer\n     ├─────────────┤\n     │ Freed/      │  ◄── Dangling pointer (was valid, now freed)\n     │ Unmapped    │\n     ├─────────────┤\n     │ Random      │  ◄── Wild pointer (never initialized)\n     │ Garbage     │\n     ├─────────────┤\n     │ Address 0   │  ◄── NULL pointer (intentionally invalid)\n     └─────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Dangling = was valid now freed; Wild = never initialized; NULL = intentionally invalid; void = generic but requires cast."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "918-pointer-arithmetic--step-by-step-deep-dive",
      children: "9.18 Pointer Arithmetic — Step-by-Step Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-understand-sizeof-scaling",
      children: "Step 1: Understand sizeof Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char   *cp;  /* cp + 1 adds 1 byte  */\nint    *ip;  /* ip + 1 adds 4 bytes */\ndouble *dp;  /* dp + 1 adds 8 bytes */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-visual-memory-layout",
      children: "Step 2: Visual Memory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address:  0x1000  0x1001  0x1002  0x1003  0x1004  0x1005  0x1006  0x1007\nchar *cp  [  10  ] [  20  ] [  30  ] [  40  ]\nint  *ip  [    10          ] [    20          ]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int arr[] = {10, 20}"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *ip = arr"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ip"
        }), " at 0x1000 → reads bytes 0x1000-0x1003 as an int → 10"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ip + 1"
        }), " at 0x1004 → reads bytes 0x1004-0x1007 as an int → 20"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-pre-increment-vs-post-increment-on-pointers",
      children: "Step 3: Pre-increment vs Post-increment on Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30};\n    int *p = arr;\n\n    /* Post-increment: use current value, THEN advance */\n    printf(\"Post-increment:\\n\");\n    p = arr;\n    printf(\"  *p++ = %d  (before increment: %p)\\n\", *p++, (void*)(p - 1));\n    printf(\"  now p points to: %p -> %d\\n\", (void*)p, *p);\n\n    /* Pre-increment: advance first, THEN use */\n    printf(\"\\nPre-increment:\\n\");\n    p = arr;\n    printf(\"  *++p = %d  (p advanced to %p)\\n\", *++p, (void*)p);\n    printf(\"  now p points to: %p -> %d\\n\", (void*)p, *p);\n\n    /* ++*p: increment the value p points to */\n    printf(\"\\n++*p (increment value):\\n\");\n    p = arr;\n    printf(\"  *p before = %d\\n\", *p);\n    ++*p;   /* same as (*p)++ or *p = *p + 1 */\n    printf(\"  *p after ++*p = %d\\n\", *p);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Post-increment:\n  *p++ = 10  (before increment: 0x...)\n  now p points to: 0x... -> 20\n\nPre-increment:\n  *++p = 20  (p advanced to 0x...)\n  now p points to: 0x... -> 20\n\n++*p (increment value):\n  *p before = 10\n  *p after ++*p = 11\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-pointer-difference-formula",
      children: "Step 4: Pointer Difference Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Difference = (Address_of_q - Address_of_p) / sizeof(element_type)\n\nExample: p at 0x1000, q at 0x1010, sizeof(int) = 4\nq - p = (0x1010 - 0x1000) / 4 = 16 / 4 = 4 elements apart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-comparison-operators-on-pointers",
      children: "Step 5: Comparison Operators on Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {1, 2, 3, 4, 5};\n    int *p = &arr[1];  /* addr of 2 */\n    int *q = &arr[4];  /* addr of 5 */\n\n    printf(\"p < q  : %d  (lower address)\\n\", p < q);\n    printf(\"p > q  : %d  (higher address)\\n\", p > q);\n    printf(\"p == p : %d  (same address)\\n\", p == p);\n    printf(\"p == q : %d  (different address)\\n\", p == q);\n\n    /* Comparing unrelated pointers is undefined behavior */\n    int a, b;\n    int *pa = &a, *pb = &b;\n    /* printf(\"%d\\n\", pa < pb); — unspecified behavior, avoid */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p < q  : 1  (lower address)\np > q  : 0  (higher address)\np == p : 1  (same address)\np == q : 0  (different address)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "919-interview-corner",
      children: "9.19 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-arrays-and-pointers-in-c",
      children: "Q1: What is the difference between arrays and pointers in C?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates N * sizeof(type) bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates sizeof(void*) bytes (4 or 8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be reassigned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof in scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total array size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof in function param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer size (decayed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays to pointer in expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not decay"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-should-you-cast-the-return-of-malloc",
      children: "Q2: Should you cast the return of malloc?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In C, no. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), " is implicitly convertible to any pointer type without a cast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *p = malloc(sizeof(int));        /* OK in C — no cast needed */\nint *q = (int*)malloc(sizeof(int));  /* Redundant in C; needed in C++ */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you forget ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdlib.h>"
      }), ", an implicit declaration assumes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ". A cast hides this error. Without the cast, the compiler produces a warning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-syntax-for-a-function-pointer-that-takes-a-function-pointer-as-a-parameter",
      children: "Q3: What is the syntax for a function pointer that takes a function pointer as a parameter?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* A function that takes an int and returns an int */\ntypedef int (*op_t)(int);\n\n/* A function that takes op_t and an int array */\nvoid map(int *arr, size_t n, op_t transform);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The declaration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*fp)(int)"
      }), " reads: \"fp is a pointer to a function that takes an int and returns an int.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-implement-a-generic-pointer-show-with-void",
      children: "Q4: How do you implement a generic pointer? Show with void*"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nvoid *find_max(void *base, size_t n, size_t size,\n               int (*compar)(const void*, const void*))\n{\n    if (n == 0) return NULL;\n\n    char *arr = (char*)base;\n    size_t max_idx = 0;\n\n    for (size_t i = 1; i < n; i++) {\n        if (compar(arr + i * size, arr + max_idx * size) > 0) {\n            max_idx = i;\n        }\n    }\n\n    return arr + max_idx * size;\n}\n\nint cmp_int(const void *a, const void *b)\n{\n    int ia = *(const int*)a;\n    int ib = *(const int*)b;\n    return (ia > ib) - (ia < ib);\n}\n\nint main(void)\n{\n    int nums[] = {42, 7, 19, 3, 88, 55};\n    size_t n = sizeof(nums) / sizeof(nums[0]);\n\n    int *max = (int*)find_max(nums, n, sizeof(int), cmp_int);\n    printf(\"Max value: %d\\n\", *max);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Max value: 88\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-what-does-intptr-do-when-ptr-is-void",
      children: ["Q5: What does ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(int"
      }), ")ptr do when ptr is void*?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It casts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int*"
      }), " (a pointer to int), then dereferences that pointer to read an int value from the memory location. This is the standard pattern for extracting typed values from void pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-pointer-aliasing-and-the-restrict-keyword",
      children: "Q6: Explain pointer aliasing and the restrict keyword"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two pointers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alias"
      }), " when they point to the same memory location. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), " keyword (C99) tells the compiler that a pointer does not alias any other pointer in the same scope, enabling optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void copy(int *restrict dest, const int *restrict src, size_t n)\n{\n    for (size_t i = 0; i < n; i++) {\n        dest[i] = src[i];  /* compiler can optimize knowing no overlap */\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), ", the compiler must assume dest and src might overlap, preventing SIMD vectorization or loop unrolling optimizations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-output-of-this-code",
      children: "Q7: What is the output of this code?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr + 3;\n\n    printf(\"%d %d %d\\n\", p[-1], p[0], p[1]);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "30 40 50"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " points to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[3]"
      }), " (value 40), so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[-1]"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[2]"
      }), " = 30, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[0]"
      }), " = 40, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[1]"
      }), " = 50."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "920-applications-in-real-systems",
      children: "9.20 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9201-linux-kernel-linked-list-list_head",
      children: "9.20.1 Linux Kernel: linked list (list_head)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Linux kernel uses a doubly linked list through an intrusive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list_head"
      }), " structure embedded in every listable object. The list is traversed using pointer operations on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list_head.next"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list_head.prev"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simplified Linux kernel list_head */\nstruct list_head {\n    struct list_head *next, *prev;\n};\n\n/* Traverse a list — pointer-based iteration */\n#define list_for_each(pos, head) \\\n    for (pos = (head)->next; pos != (head); pos = pos->next)\n\n/* Get the containing struct from a list_head pointer */\n/* Uses pointer arithmetic: container_of macro */\n#define container_of(ptr, type, member) \\\n    ((type*)((char*)(ptr) - offsetof(type, member)))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container_of"
      }), " macro subtracts the offset of the member from the member pointer to recover the enclosing struct address — a powerful pointer arithmetic trick used throughout the kernel (drivers, process lists, file systems, network stack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9202-function-pointers-for-callbacks",
      children: "9.20.2 Function Pointers for Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C standard library uses function pointers extensively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* qsort — generic sorting */\nint cmp(const void *a, const void *b)\n{\n    return *(const int*)a - *(const int*)b;\n}\n\n/* atexit — register cleanup callback */\nvoid cleanup(void) { printf(\"Cleanup called\\n\"); }\n\n/* signal — install signal handler */\n#include <signal.h>\nvoid handler(int sig) { printf(\"Signal %d caught\\n\", sig); }\n\nint main(void)\n{\n    int arr[] = {4, 2, 5, 1, 3};\n    size_t n = sizeof(arr) / sizeof(arr[0]);\n\n    qsort(arr, n, sizeof(int), cmp);  /* function pointer parameter */\n    atexit(cleanup);                   /* register callback */\n\n    for (size_t i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5\nCleanup called\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9203-jit-compilation",
      children: "9.20.3 JIT Compilation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just-In-Time compilers allocate writable memory, write machine code to it, then change the page permissions to executable and use a function pointer to call the generated code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <sys/mman.h>\n\n/* Simplified JIT: write and call a function that returns an int */\n\ntypedef int (*jit_func)(void);\n\nint main(void)\n{\n    /* Allocate executable memory */\n    void *code = mmap(NULL, 4096, PROT_READ | PROT_WRITE | PROT_EXEC,\n                      MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);\n    if (code == MAP_FAILED) return 1;\n\n    /* Write machine code (example: mov eax, 42; ret for x86-64) */\n    unsigned char machine_code[] = {\n        0xB8, 0x2A, 0x00, 0x00, 0x00,  /* mov eax, 42 */\n        0xC3                             /* ret */\n    };\n\n    memcpy(code, machine_code, sizeof(machine_code));\n\n    /* Call the generated code through a function pointer */\n    jit_func func = (jit_func)code;\n    int result = func();\n    printf(\"JIT returned: %d\\n\", result);\n\n    munmap(code, 4096);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9204-embedded-systems-memory-mapped-io",
      children: "9.20.4 Embedded Systems: Memory-Mapped I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In embedded systems, hardware registers are accessed through pointers to specific memory addresses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Memory-mapped register access */\n#define GPIO_BASE    0x40020000\n#define GPIO_MODER   *(volatile unsigned int*)(GPIO_BASE + 0x00)\n#define GPIO_ODR     *(volatile unsigned int*)(GPIO_BASE + 0x14)\n\n/* Set pin 5 as output */\nvoid gpio_init(void)\n{\n    GPIO_MODER |= (1 << 10);   /* Set MODER[5] to output */\n}\n\n/* Toggle pin 5 */\nvoid gpio_toggle(void)\n{\n    GPIO_ODR ^= (1 << 5);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9205-virtual-method-tables-vtables-in-c",
      children: "9.20.5 Virtual Method Tables (Vtables) in C"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object-oriented behavior in C can be implemented using structs of function pointers, mimicking C++ vtable dispatch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* Interface */\ntypedef struct {\n    void (*speak)(void*);\n    void (*destroy)(void*);\n} vtable;\n\ntypedef struct {\n    vtable *vptr;\n} animal;\n\n/* Dog implementation */\ntypedef struct {\n    animal base;\n    char *name;\n} dog;\n\nvoid dog_speak(void *self)\n{\n    dog *d = (dog*)self;\n    printf(\"%s says: Woof!\\n\", d->name);\n}\n\ndog *dog_new(const char *name)\n{\n    static vtable dog_vtable = { dog_speak, free };\n    dog *d = calloc(1, sizeof(dog));\n    d->base.vptr = &dog_vtable;\n    d->name = strdup(name);\n    return d;\n}\n\nint main(void)\n{\n    dog *d = dog_new(\"Rex\");\n    animal *a = (animal*)d;\n\n    a->vptr->speak(a);    /* dynamic dispatch via function pointer */\n    a->vptr->destroy(a);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rex says: Woof!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-pointer-mistakes--expanded",
      children: "Common Pointer Mistakes — Expanded"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-uninitialized-pointer-wild-pointer",
      children: "Mistake 1: Uninitialized Pointer (Wild Pointer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *p;\n*p = 42;    /* UNDEFINED — p could point anywhere */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *p = NULL; if (p) *p = 42;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-dangling-pointer-use-after-free",
      children: "Mistake 2: Dangling Pointer (Use-After-Free)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *p = malloc(sizeof(int));\nfree(p);\n*p = 42;    /* UNDEFINED — memory may be reused */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(p); p = NULL;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-buffer-overflow-via-pointer-arithmetic",
      children: "Mistake 3: Buffer Overflow via Pointer Arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[5];\nint *p = arr;\n*(p + 10) = 100;    /* UNDEFINED — writes past array bounds */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Always verify index < array length before access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-returning-address-of-local-variable",
      children: "Mistake 4: Returning Address of Local Variable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int* bad(void) {\n    int x = 42;\n    return &x;       /* UNDEFINED — stack frame gone after return */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static int x = 42;"
      }), " or pass a pointer parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-5-forgetting-to-check-malloc-return",
      children: "Mistake 5: Forgetting to Check malloc Return"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *p = malloc(1000000000000 * sizeof(int));\n/* If malloc fails, p is NULL */\n*p = 42;    /* CRASH if malloc failed */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (!p) { /* handle error */ }"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-6-off-by-one-in-pointer-arithmetic",
      children: "Mistake 6: Off-by-One in Pointer Arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[3] = {1, 2, 3};\nint *p = arr;\n*(p + 3) = 4;    /* Writes past the end — arr[3] does not exist */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-7-confusing-pointers-and-arrays-with-sizeof",
      children: "Mistake 7: Confusing Pointers and Arrays with sizeof"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void func(int arr[])  /* arr is actually int* */\n{\n    size_t n = sizeof(arr) / sizeof(arr[0]);  /* WRONG: sizeof(arr) = 8 */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Always pass array length as a separate parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-8-type-mismatch-with-void",
      children: "Mistake 8: Type Mismatch with void*"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nvoid *vp = &x;\nprintf(\"%f\\n\", *(double*)vp);  /* WRONG: interprets int bits as double */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-9-dereferencing-incomplete-type",
      children: "Mistake 9: Dereferencing Incomplete Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "struct Node *p;\n/* p->data = 5; — ERROR if struct Node is only forward-declared */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-10-double-free",
      children: "Mistake 10: Double Free"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *p = malloc(sizeof(int));\nfree(p);\nfree(p);    /* UNDEFINED — double free corrupts heap */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Set p = NULL after free; free(NULL) is safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declare integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 stored in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = &x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next int address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addr(x) + 4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int **pp = &p;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**pp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *v = &x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of x (type-erased)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*fp)() = &func;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of func"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*pa)[5] = &arr;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of arr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *ap[5];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 pointers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declare pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type *ptr;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr = &var;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p = &x;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "value = *ptr;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int y = *p;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (ptr != NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (p) { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ptr++"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr += N"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p += 3;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr1 - ptr2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of elements between"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*fp)(int);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fp = &func;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*pa)[N];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pa = &arr;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr = malloc(n * sizeof(type));"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p = malloc(10 * sizeof(int));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deallocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(ptr);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); p = NULL;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "value = *(type*)ptr;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int v = *(int*)vp;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array of pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type *arr[N];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char *strs[5];"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *arr = malloc(n * sizeof(int));"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resizable buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct node *next;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callback systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void (*on_event)(int code, void *data);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char **argv;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command-line arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *buf; memcpy(buf, src, size);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data copying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-mapped I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile uint32_t *reg = (uint32_t*)0x4000;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded register access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JIT compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*code)() = mmap(...);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic code generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct list_head; container_of;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusive linked lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generic algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *bsearch(...); void *qsort(...);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct { void (*vfunc)(void*); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP in C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(arr + 3)"
        }), " do?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Accesses arr[3]"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Adds 3 to the pointer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Accesses arr[0] + 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Compiler error"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `*(arr + 3)` is equivalent to `arr[3]` by definition of array subscript."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = NULL; *p = 5;"
        }), " crash?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Syntax error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Dereferencing a NULL pointer is undefined behavior"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) NULL is read-only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cannot assign to a pointer"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Dereferencing NULL causes undefined behavior, typically a segmentation fault."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = 10; int *p = &x;"
        }), ", what is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*&x"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Address of x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Address of p"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Compiler error"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `&x` gets the address; `*` dereferences it — `*&x` is the same as `x`, which is 10."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%td\", q - p)"
        }), " if p points to arr[2] and q points to arr[5]?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 12 (bytes)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 5"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `q - p` returns the number of elements between them: 5 - 2 = 3."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the type of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[10]"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Pointer to array of 10 ints"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Array of 10 pointers to int"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pointer to int"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Array of 10 ints"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The `[]` binds before `*`: `p` is an array of 10 `int*` elements."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is wrong with this code: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p; *p = 5;"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Nothing — it works fine"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) p is uninitialized — dereferencing garbage address is UB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Syntax error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cannot assign through a pointer"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** p is a wild (uninitialized) pointer; dereferencing it is undefined behavior."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int *p"
        }), " protect?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The pointer p from being changed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The value *p from being changed through p"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Both the pointer and the value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Nothing — it is a warning only"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `const int *p` means p points to a const int — you cannot change *p through p, but you can change p to point elsewhere."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of these is NOT a valid operation on a void pointer in standard C?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Assigning an address to it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Comparing it to NULL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pointer arithmetic (void* + 1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Casting it to another pointer type"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** In standard C, arithmetic on void pointers is not allowed because the size of the pointed-to type is unknown."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pointer"
        }), " stores a memory address; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " gets an address, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " dereferences it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL pointers"
        }), " indicate invalidity — always check before dereferencing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer arithmetic"
        }), " advances by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(pointed_type)"
        }), " bytes; only valid within the same array."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array-pointer duality:"
        }), " arr[i] is defined as *(arr + i); arrays decay to pointers in most contexts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer to array"
        }), " (int (*p)[N]) vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "array of pointers"
        }), " (int *p[N]) are fundamentally different."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double pointers"
        }), " (int**) enable 2D arrays, dynamic string arrays, and modifying pointer parameters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function pointers"
        }), " enable callbacks, dispatch tables, and runtime polymorphism."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), " provides generic pointer storage but requires casting before use and does not support arithmetic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dangling pointers"
        }), " point to freed/out-of-scope memory; set to NULL after free."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wild pointers"
        }), " are uninitialized; always initialize at declaration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " with pointers: placement controls whether the pointer or the data is immutable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer safety"
        }), " requires: initialize, NULL-check, NULL-after-free, bound-check, correct casts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Applications:"
        }), " Linux kernel list_head, function pointer callbacks, JIT compilation, memory-mapped I/O, vtable dispatch."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = &x"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p = x"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is pointer arithmetic? If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p"
        }), " points to address 1000, what is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p + 3"
        }), " on a system with 4-byte integers?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens when you dereference a NULL pointer? What happens when you dereference an uninitialized pointer?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the type of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr + 1"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&arr + 1"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[10]"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int *p"
        }), " protect? What about ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int * const p"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[5]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[5]"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the term \"dangling pointer\". How do you prevent it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a \"three-star programmer\" and why is the term a warning?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should you set a pointer to NULL after calling free() on it?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), " keyword?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find min and max using pointers:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void find_min_max(const int *arr, int n, int *min, int *max)"
          }), " that finds the minimum and maximum values in an array using output parameters."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reverse array using pointers:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void reverse_array(int *arr, int n)"
          }), " that reverses an array in-place using only pointers (no array indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Calculator dispatch table:"
          }), " Write a program that uses an array of function pointers to implement a simple arithmetic calculator. Supported operations: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "%"
          }), ". Use a menu loop to ask for two numbers and an operator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generic my_memcpy:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void *my_memcpy(void *dest, const void *src, size_t n)"
          }), " that copies n bytes from src to dest using void pointer casting. Test with int arrays and char arrays."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key-value store with void pointers:"
          }), " Implement a simple key-value store where values are stored as void pointers. Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "put(const char *key, void *value, size_t size)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get(const char *key, void *buffer, size_t size)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "delete(const char *key)"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generic bubble sort:"
      }), " Write a program that implements a generic bubble sort function:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void bubble_sort(void *base, size_t n, size_t elem_size,\n                 int (*compar)(const void *, const void *));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The function should sort any array type using a user-supplied comparison function. Test it by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorting an array of integers (ascending)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorting an array of doubles (descending)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorting an array of strings by length"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This mirrors the interface of the standard library's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "qsort"
      }), " function. For extra credit, optimize the sort to stop early if no swaps occur during a pass."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/10-structures-unions",
          children: "Structures and Unions"
        }), " — Group related data together and create complex data types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "921-pointer-dereference-chain--deep-anatomy",
      children: "9.21 Pointer Dereference Chain — Deep Anatomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding what happens at the hardware level during a pointer dereference helps solidify the concept."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-hardware-view",
      children: "Step-by-Step Hardware View"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;     /* Assume x is at address 0x1000 */\nint *p = &x;    /* p is at address 0x2000, stores 0x1000 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["When the CPU executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%d\", *p)"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU reads p from memory address 0x2000 → gets value 0x1000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU issues a memory read at address 0x1000 → gets value 42"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU passes 42 to printf"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["When the CPU executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p = 99"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU reads p from memory address 0x2000 → gets value 0x1000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU issues a memory write at address 0x1000, writing 99"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x is now 99"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-level-dereference-trace",
      children: "Multi-Level Dereference Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int  x  = 42;           /* x at 0x1000 */\nint *p  = &x;           /* p at 0x2000, stores 0x1000 */\nint **pp = &p;          /* pp at 0x3000, stores 0x2000 */\nint ***ppp = &pp;       /* ppp at 0x4000, stores 0x3000 */\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Reads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Reads Again"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Reads Again"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Final Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["p → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x1000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*pp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pp → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x2000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**pp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pp → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x2000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x1000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "***ppp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ppp → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x3000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x3000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x2000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["at 0x2000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000"
            }), " then 0x1000 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each star adds one memory read. Three stars = three pointer chases + one value read = four memory accesses."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "922-pointer-alignment-and-strict-aliasing",
      children: "9.22 Pointer Alignment and Strict Aliasing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alignment",
      children: "Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pointers to different types have different alignment requirements. Accessing a misaligned pointer can cause a hardware exception (on some architectures) or performance penalty."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdalign.h>\n\nint main(void)\n{\n    printf(\"Alignof(int)    = %zu\\n\", alignof(int));\n    printf(\"Alignof(double) = %zu\\n\", alignof(double));\n    printf(\"Alignof(char)   = %zu\\n\", alignof(char));\n\n    /* BAD: casting a char* to int* may violate alignment */\n    char buf[8] = {0};\n    int *p = (int*)&buf[1];  /* likely misaligned */\n    /* *p = 42; — UNDEFINED if buf+1 is not aligned to sizeof(int) */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strict-aliasing-rule-c99-65",
      children: "Strict Aliasing Rule (C99 §6.5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler assumes that pointers of different types do not point to the same memory location. Violating this rule is undefined behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nfloat *fp = (float*)&x;\n/* *fp = 3.14f; — UNDEFINED: int object accessed as float */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The exception: any type can be accessed through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "signed char*"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char*"
      }), ". This is why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memcpy"
      }), " works with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), " — it casts internally to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char*"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nchar *cp = (char*)&x;\ncp[0] = 0;  /* OK: char* is exempt from strict aliasing */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "923-pointer-decay-deep-dive",
      children: "9.23 Pointer Decay Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array-to-pointer decay happens in these contexts:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = arr;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int *p)"
            }), " called with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(arr)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr + 1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array subscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(arr + i)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Does NOT decay"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(arr)"
            }), " gives array size"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Does NOT decay"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&arr"
            }), " gives ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int(*)[N]"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int**"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "sizeof"
            }), " in function param"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already decayed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int arr[])"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-layout-comparison",
      children: "Memory Layout Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array:         [0]  [1]  [2]  [3]  [4]\n              ┌────┬────┬────┬────┬────┐\n              │ 10 │ 20 │ 30 │ 40 │ 50 │\n              └────┴────┴────┴────┴────┘\nAddress:      0x0  0x4  0x8  0xC  0x10\n\nPointer:      ┌────────────┐\n              │   0x1000   │\n              └────────────┘\n              p (stores address of first element)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sizeofarr-vs-sizeofp-in-function",
      children: "sizeof(arr) vs sizeof(p) in function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid bad_sum(int arr[], size_t n)\n{\n    /* WRONG: sizeof(arr) here is sizeof(int*) = 8 */\n    size_t wrong_n = sizeof(arr) / sizeof(arr[0]);\n    printf(\"sizeof(arr) inside function: %zu\\n\", sizeof(arr));  /* 8 */\n\n    /* CORRECT: use explicit n parameter */\n    int sum = 0;\n    for (size_t i = 0; i < n; i++) sum += arr[i];\n    printf(\"sum = %d\\n\", sum);\n}\n\nint main(void)\n{\n    int arr[] = {1, 2, 3, 4, 5};\n    printf(\"sizeof(arr) in main: %zu\\n\", sizeof(arr));   /* 20 */\n    bad_sum(arr, 5);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr) in main: 20\nsizeof(arr) inside function: 8\nsum = 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "924-complex-pointer-declarations--decoding",
      children: "9.24 Complex Pointer Declarations — Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-right-left-spiral-rule",
      children: "The Right-Left (Spiral) Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To decode any C declaration, read it right-to-left (or in a spiral)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right-to-Left Reading"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p[5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is array[5] of pointer to int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 5 pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is pointer to array[5] of int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *f()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is function returning pointer to int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function returning int*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*f)()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is pointer to function returning int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *(*f[5])()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is array[5] of pointer to function returning pointer to int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 5 function pointers returning int*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is pointer to const int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to const int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int * const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is const pointer to int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const pointer to int"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practice-decoding",
      children: "Practice Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *(*(*fp)(int))[10];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*fp"
        }), " — fp is a pointer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "(*fp)(int)"
        }), " — to a function taking int"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*(*fp)(int)"
        }), " — returning a pointer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "(*(*fp)(int))[10]"
        }), " — to an array of 10"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "int *"
        }), " — pointers to int"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fp"
      }), " is a pointer to a function that takes an int and returns a pointer to an array of 10 pointers to int."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-quiz--pointer-pitfalls",
      children: "Extended Quiz — Pointer Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the output of this code?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\nint main(void) {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *p = arr + 4;\n    printf(\"%ld\\n\", p - arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 4    B) 5    C) 16    D) 20"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** 4 — p points to arr[4], arr is arr[0], so p - arr = 4 elements apart."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How many bytes does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&arr + 1"
        }), " advance past for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[5]"
        }), " on a 4-byte int system?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 4    B) 8    C) 20    D) 40"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** 20 — `&arr` is int(*)[5], so +1 adds sizeof(arr) = 5 * 4 = 20 bytes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is wrong with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p = malloc(10);"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Nothing — it works\nB) malloc takes no arguments\nC) No cast required but size should be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10 * sizeof(int)"
      }), "\nD) Cannot assign void* to int*"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** The malloc allocates only 10 bytes, not 10 integers. It should be `malloc(10 * sizeof(int))`. In C, void* converts implicitly, so no cast is needed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which of these correctly declares a pointer to a function that takes a double and returns an int?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *f(double);"
      }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*f)(double);"
      }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*f)(double*);"
      }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(int*)f(double);"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `int (*f)(double);` — parentheses around `*f` are mandatory; f is a pointer to function taking double and returning int."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the output?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\nint main(void) {\n    char s[] = \"Hello\";\n    char *p = s;\n    printf(\"%c\", *(p + 1));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) H    B) e    C) l    D) o"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `*(p + 1)` accesses the element at index 1, which is 'e'."
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