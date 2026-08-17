"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20568],{

/***/ 64267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_14_recursion_md_cee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-14-recursion-md-cee.json
const site_docs_courses_c_programming_14_recursion_md_cee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/14-recursion","title":"Chapter 14: Recursion","description":"Previous Linked Lists","source":"@site/docs/courses/c-programming/14-recursion.md","sourceDirName":"courses/c-programming","slug":"/c-programming/14-recursion","permalink":"/ai-engineering-journey/c-programming/14-recursion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-recursion","slug":"/c-programming/14-recursion","title":"Chapter 14: Recursion","sidebar_label":"Chapter 14: Recursion","sidebar_position":14},"sidebar":"course-c-programming","previous":{"title":"Chapter 13: The Preprocessor","permalink":"/ai-engineering-journey/c-programming/13-preprocessor"},"next":{"title":"Chapter 15: Linked Lists","permalink":"/ai-engineering-journey/c-programming/15-linked-lists"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/14-recursion.md


const frontMatter = {
	id: '14-recursion',
	slug: '/c-programming/14-recursion',
	title: 'Chapter 14: Recursion',
	sidebar_label: 'Chapter 14: Recursion',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Recursion';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "14.1 What Is Recursion? (The Concept)",
  "id": "141-what-is-recursion-the-concept",
  "level": 2
}, {
  "value": "Real-World Analogy: Russian Nesting Dolls (Matryoshka)",
  "id": "real-world-analogy-russian-nesting-dolls-matryoshka",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Generalized Pseudocode",
  "id": "generalized-pseudocode",
  "level": 3
}, {
  "value": "Simple C Example: Countdown",
  "id": "simple-c-example-countdown",
  "level": 3
}, {
  "value": "Full Dry Run Trace",
  "id": "full-dry-run-trace",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "14.2 Base Case vs Recursive Case",
  "id": "142-base-case-vs-recursive-case",
  "level": 2
}, {
  "value": "Detailed Breakdown",
  "id": "detailed-breakdown",
  "level": 3
}, {
  "value": "The Base Case",
  "id": "the-base-case",
  "level": 3
}, {
  "value": "The Recursive Case",
  "id": "the-recursive-case",
  "level": 3
}, {
  "value": "What Happens When Each Is Missing",
  "id": "what-happens-when-each-is-missing",
  "level": 3
}, {
  "value": "Dry Run: Base Case Check",
  "id": "dry-run-base-case-check",
  "level": 3
}, {
  "value": "Multiple Base Cases in One Function",
  "id": "multiple-base-cases-in-one-function",
  "level": 3
}, {
  "value": "Edge Cases for Base/Recursive Cases",
  "id": "edge-cases-for-baserecursive-cases",
  "level": 3
}, {
  "value": "14.3 The Call Stack and Recursion",
  "id": "143-the-call-stack-and-recursion",
  "level": 2
}, {
  "value": "Real-World Analogy: Stack of Plates",
  "id": "real-world-analogy-stack-of-plates",
  "level": 3
}, {
  "value": "Stack Frame Layout",
  "id": "stack-frame-layout",
  "level": 3
}, {
  "value": "Visualization of countdown(3) Call Stack",
  "id": "visualization-of-countdown3-call-stack",
  "level": 3
}, {
  "value": "Code to Visualize Stack Frame Addresses",
  "id": "code-to-visualize-stack-frame-addresses",
  "level": 3
}, {
  "value": "Stack Overflow Demonstration",
  "id": "stack-overflow-demonstration",
  "level": 3
}, {
  "value": "Stack Size Limits by Platform",
  "id": "stack-size-limits-by-platform",
  "level": 3
}, {
  "value": "Understanding Stack Growth and Return",
  "id": "understanding-stack-growth-and-return",
  "level": 3
}, {
  "value": "Winding vs Unwinding Phase",
  "id": "winding-vs-unwinding-phase",
  "level": 3
}, {
  "value": "Edge Cases for Call Stack",
  "id": "edge-cases-for-call-stack",
  "level": 3
}, {
  "value": "14.4 Recursion Types → Complete Comparison",
  "id": "144-recursion-types--complete-comparison",
  "level": 2
}, {
  "value": "Six Types of Recursion",
  "id": "six-types-of-recursion",
  "level": 3
}, {
  "value": "1. Direct Recursion",
  "id": "1-direct-recursion",
  "level": 3
}, {
  "value": "2. Indirect Recursion (Mutual Recursion)",
  "id": "2-indirect-recursion-mutual-recursion",
  "level": 3
}, {
  "value": "3. Tail Recursion",
  "id": "3-tail-recursion",
  "level": 3
}, {
  "value": "4. Head Recursion",
  "id": "4-head-recursion",
  "level": 3
}, {
  "value": "5. Linear Recursion",
  "id": "5-linear-recursion",
  "level": 3
}, {
  "value": "6. Tree Recursion",
  "id": "6-tree-recursion",
  "level": 3
}, {
  "value": "Recursion Types Comparison Table",
  "id": "recursion-types-comparison-table",
  "level": 3
}, {
  "value": "14.5 Head Recursion vs Tail Recursion → Detailed Comparison",
  "id": "145-head-recursion-vs-tail-recursion--detailed-comparison",
  "level": 2
}, {
  "value": "Definition Side by Side",
  "id": "definition-side-by-side",
  "level": 3
}, {
  "value": "Head Recursion Example: Print Numbers Ascending",
  "id": "head-recursion-example-print-numbers-ascending",
  "level": 3
}, {
  "value": "Tail Recursion Example: Print Numbers Ascending (Accumulator Style)",
  "id": "tail-recursion-example-print-numbers-ascending-accumulator-style",
  "level": 3
}, {
  "value": "Memory Comparison",
  "id": "memory-comparison",
  "level": 3
}, {
  "value": "Transformation Pattern: Head -&gt; Tail",
  "id": "transformation-pattern-head---tail",
  "level": 3
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "14.6 Direct vs Indirect Recursion",
  "id": "146-direct-vs-indirect-recursion",
  "level": 2
}, {
  "value": "Direct Recursion",
  "id": "direct-recursion",
  "level": 3
}, {
  "value": "Indirect Recursion (Mutual Recursion)",
  "id": "indirect-recursion-mutual-recursion",
  "level": 3
}, {
  "value": "Three-Function Mutual Recursion",
  "id": "three-function-mutual-recursion",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "Detecting Recursion Cycles",
  "id": "detecting-recursion-cycles",
  "level": 3
}, {
  "value": "14.7 Classic Recursive Problems",
  "id": "147-classic-recursive-problems",
  "level": 2
}, {
  "value": "14.7.1 Factorial",
  "id": "1471-factorial",
  "level": 3
}, {
  "value": "Real-World Analogy: Seating Arrangements",
  "id": "real-world-analogy-seating-arrangements",
  "level": 4
}, {
  "value": "Numbered Steps for factorial(5)",
  "id": "numbered-steps-for-factorial5",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "C Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Full Dry Run Trace Table for factorial(5)",
  "id": "full-dry-run-trace-table-for-factorial5",
  "level": 4
}, {
  "value": "Call Stack Visualization for factorial(5)",
  "id": "call-stack-visualization-for-factorial5",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "14.7.2 Fibonacci Sequence",
  "id": "1472-fibonacci-sequence",
  "level": 3
}, {
  "value": "Real-World Analogy: Rabbit Breeding",
  "id": "real-world-analogy-rabbit-breeding",
  "level": 4
}, {
  "value": "Numbered Steps for fib(5)",
  "id": "numbered-steps-for-fib5",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "C Implementation (with comparison to iterative)",
  "id": "c-implementation-with-comparison-to-iterative",
  "level": 4
}, {
  "value": "Full Dry Run Trace Table for fib_recursive(5)",
  "id": "full-dry-run-trace-table-for-fib_recursive5",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "14.7.3 Tower of Hanoi",
  "id": "1473-tower-of-hanoi",
  "level": 3
}, {
  "value": "Real-World Analogy: The Legend",
  "id": "real-world-analogy-the-legend",
  "level": 4
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 4
}, {
  "value": "Numbered Steps for n=3",
  "id": "numbered-steps-for-n3",
  "level": 4
}, {
  "value": "Algorithm Pseudocode",
  "id": "algorithm-pseudocode",
  "level": 4
}, {
  "value": "C Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Full Dry Run Trace Table for hanoi(3, &#39;A&#39;, &#39;C&#39;, &#39;B&#39;)",
  "id": "full-dry-run-trace-table-for-hanoi3-a-c-b",
  "level": 4
}, {
  "value": "Call Stack at Deepest Point",
  "id": "call-stack-at-deepest-point",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "14.7.4 Binary Search (Recursive)",
  "id": "1474-binary-search-recursive",
  "level": 3
}, {
  "value": "Real-World Analogy: Dictionary Lookup",
  "id": "real-world-analogy-dictionary-lookup",
  "level": 4
}, {
  "value": "Numbered Steps for binary_search(arr, 0, 9, 23)",
  "id": "numbered-steps-for-binary_searcharr-0-9-23",
  "level": 4
}, {
  "value": "Algorithm Pseudocode",
  "id": "algorithm-pseudocode-1",
  "level": 4
}, {
  "value": "C Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Full Dry Run Trace for binary_search(numbers, 0, 9, 23)",
  "id": "full-dry-run-trace-for-binary_searchnumbers-0-9-23",
  "level": 4
}, {
  "value": "Dry Run: target = 1 (not found)",
  "id": "dry-run-target--1-not-found",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "14.7.5 Merge Sort (Recursive)",
  "id": "1475-merge-sort-recursive",
  "level": 3
}, {
  "value": "Real-World Analogy: Sorting a Deck of Cards",
  "id": "real-world-analogy-sorting-a-deck-of-cards",
  "level": 4
}, {
  "value": "Numbered Steps for Sort [38, 27, 43, 3, 9, 82, 10]",
  "id": "numbered-steps-for-sort-38-27-43-3-9-82-10",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "C Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Call Tree Visualization for arr[0..6]",
  "id": "call-tree-visualization-for-arr06",
  "level": 4
}, {
  "value": "Full Dry Run Trace for merge_sort(arr, 0, 6)",
  "id": "full-dry-run-trace-for-merge_sortarr-0-6",
  "level": 4
}, {
  "value": "Merge Operation Detail for merge(0, 3, 6)",
  "id": "merge-operation-detail-for-merge0-3-6",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 4
}, {
  "value": "14.8 Tail Recursion and Optimization (Deep Dive)",
  "id": "148-tail-recursion-and-optimization-deep-dive",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 3
}, {
  "value": "Tail-Call Optimization (TCO)",
  "id": "tail-call-optimization-tco",
  "level": 3
}, {
  "value": "Transformation: What the Compiler Does",
  "id": "transformation-what-the-compiler-does",
  "level": 4
}, {
  "value": "Assembly-Level Difference",
  "id": "assembly-level-difference",
  "level": 4
}, {
  "value": "Compiler Support for TCO",
  "id": "compiler-support-for-tco",
  "level": 3
}, {
  "value": "Verifying TCO in GCC/Clang",
  "id": "verifying-tco-in-gccclang",
  "level": 3
}, {
  "value": "Tail Recursion in Non-Void Functions",
  "id": "tail-recursion-in-non-void-functions",
  "level": 3
}, {
  "value": "Converting Any Recursion to Tail Recursion",
  "id": "converting-any-recursion-to-tail-recursion",
  "level": 3
}, {
  "value": "When TCO Cannot Be Applied",
  "id": "when-tco-cannot-be-applied",
  "level": 3
}, {
  "value": "14.9 Recursion vs Iteration → Comprehensive Comparison",
  "id": "149-recursion-vs-iteration--comprehensive-comparison",
  "level": 2
}, {
  "value": "Side-by-Side Code Comparison",
  "id": "side-by-side-code-comparison",
  "level": 3
}, {
  "value": "15-Dimension Comparison Table",
  "id": "15-dimension-comparison-table",
  "level": 3
}, {
  "value": "Performance Benchmark Comparison",
  "id": "performance-benchmark-comparison",
  "level": 3
}, {
  "value": "When to Choose Which",
  "id": "when-to-choose-which",
  "level": 3
}, {
  "value": "Choose Recursion When:",
  "id": "choose-recursion-when",
  "level": 4
}, {
  "value": "Choose Iteration When:",
  "id": "choose-iteration-when",
  "level": 4
}, {
  "value": "14.10 Backtracking",
  "id": "1410-backtracking",
  "level": 2
}, {
  "value": "Concept: What Is Backtracking?",
  "id": "concept-what-is-backtracking",
  "level": 3
}, {
  "value": "Real-World Analogy: Maze Solving",
  "id": "real-world-analogy-maze-solving",
  "level": 3
}, {
  "value": "General Backtracking Algorithm",
  "id": "general-backtracking-algorithm",
  "level": 3
}, {
  "value": "Example 1: N-Queens Problem",
  "id": "example-1-n-queens-problem",
  "level": 3
}, {
  "value": "Attack Rules",
  "id": "attack-rules",
  "level": 4
}, {
  "value": "C Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "N-Queens Dry Run for N=4 (partial)",
  "id": "n-queens-dry-run-for-n4-partial",
  "level": 4
}, {
  "value": "Complexity of N-Queens",
  "id": "complexity-of-n-queens",
  "level": 4
}, {
  "value": "Example 2: Maze Solving",
  "id": "example-2-maze-solving",
  "level": 3
}, {
  "value": "Backtracking vs Brute Force",
  "id": "backtracking-vs-brute-force",
  "level": 3
}, {
  "value": "Applications of Backtracking",
  "id": "applications-of-backtracking",
  "level": 3
}, {
  "value": "14.11 Common Pitfalls and Edge Cases",
  "id": "1411-common-pitfalls-and-edge-cases",
  "level": 2
}, {
  "value": "Pitfall 1: Missing or Incorrect Base Case",
  "id": "pitfall-1-missing-or-incorrect-base-case",
  "level": 3
}, {
  "value": "Pitfall 2: Stack Overflow from Deep Recursion",
  "id": "pitfall-2-stack-overflow-from-deep-recursion",
  "level": 3
}, {
  "value": "Pitfall 3: Exponential Blowup (Naive Fibonacci)",
  "id": "pitfall-3-exponential-blowup-naive-fibonacci",
  "level": 3
}, {
  "value": "Pitfall 4: Side Effects in Recursive Functions",
  "id": "pitfall-4-side-effects-in-recursive-functions",
  "level": 3
}, {
  "value": "Pitfall 5: Using Recursion Where Iteration Is Better",
  "id": "pitfall-5-using-recursion-where-iteration-is-better",
  "level": 3
}, {
  "value": "Edge Cases Checklist",
  "id": "edge-cases-checklist",
  "level": 3
}, {
  "value": "14.12 Interview Corner",
  "id": "1412-interview-corner",
  "level": 2
}, {
  "value": "Top Recursion Interview Questions",
  "id": "top-recursion-interview-questions",
  "level": 3
}, {
  "value": "Common Interview Mistakes",
  "id": "common-interview-mistakes",
  "level": 3
}, {
  "value": "Key Concepts to Demonstrate in Interviews",
  "id": "key-concepts-to-demonstrate-in-interviews",
  "level": 3
}, {
  "value": "Discussion Questions",
  "id": "discussion-questions",
  "level": 3
}, {
  "value": "Quick Code Snippets for Interviews",
  "id": "quick-code-snippets-for-interviews",
  "level": 3
}, {
  "value": "14.13 Applications in Real Systems",
  "id": "1413-applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Operating Systems → File System Traversal",
  "id": "1-operating-systems--file-system-traversal",
  "level": 3
}, {
  "value": "2. Compilers → Recursive Descent Parsing",
  "id": "2-compilers--recursive-descent-parsing",
  "level": 3
}, {
  "value": "3. Graphics → Subdivision Surfaces",
  "id": "3-graphics--subdivision-surfaces",
  "level": 3
}, {
  "value": "4. Artificial Intelligence → Minimax Game Tree",
  "id": "4-artificial-intelligence--minimax-game-tree",
  "level": 3
}, {
  "value": "5. Network Routing → Bellman-Ford Algorithm",
  "id": "5-network-routing--bellman-ford-algorithm",
  "level": 3
}, {
  "value": "Real-World Recursion Use Cases Summary",
  "id": "real-world-recursion-use-cases-summary",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "chapter-14-recursion",
        children: "Chapter 14: Recursion"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/13-preprocessor",
          children: "The Preprocessor"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/15-linked-lists",
          children: "Linked Lists"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the recursive function model: base case and recursive case with real-world analogies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace recursive function calls using the call stack with frame-by-frame dry runs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish tail recursion from head recursion and direct from indirect recursion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare recursion and iteration across 12+ dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve classic problems: factorial, Fibonacci, Tower of Hanoi, binary search, merge sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply backtracking to solve constraint-satisfaction problems (N-Queens, maze solving)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and prevent stack overflow, infinite recursion, and performance pitfalls"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Recursion Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A function calling itself with a smaller subproblem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every recursive function needs a base case and a recursive case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base Case vs Recursive Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case stops; recursive case progresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without either, recursion fails (infinite or no-op)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each recursive call pushes a new stack frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion can overflow the stack (stack overflow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail Recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive call is the last operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern compilers optimize tail recursion into iteration (TCO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classic Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorial, Fibonacci, Tower of Hanoi, binary search, merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "These illustrate the power and pitfalls of recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct, indirect, tail, head, linear, tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each type has distinct properties and optimization potential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion vs Iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion trades clarity for stack usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use recursion for naturally recursive structures (trees, graphs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try all possibilities, undo on failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens, maze solving, Sudoku all use backtracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"14.1 Recursion Concept\"] --> B[\"14.2 Base Case vs Recursive Case\"]\n    B --> C[\"14.3 Call Stack\"]\n    C --> D[\"14.4 Recursion Types\"]\n    D --> E[\"14.5 Head vs Tail\"]\n    E --> F[\"14.6 Direct vs Indirect\"]\n    F --> G[\"14.7 Classic Problems\"]\n    G --> H[\"14.8 Tail Recursion Optimization\"]\n    H --> I[\"14.9 Recursion vs Iteration\"]\n    I --> J[\"14.10 Backtracking\"]\n    J --> K[\"14.11 Pitfalls\"]\n    K --> L[\"14.12 Interview Corner\"]\n    L --> M[\"14.13 Real-World Applications\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-what-is-recursion-the-concept",
      children: "14.1 What Is Recursion? (The Concept)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-russian-nesting-dolls-matryoshka",
      children: "Real-World Analogy: Russian Nesting Dolls (Matryoshka)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a set of Russian nesting dolls. You open the largest doll, and inside is a smaller doll. You open that one, and inside is an even smaller doll. You continue until you reach the smallest doll, which cannot be opened → that is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base case"
      }), ". Then you close each doll in reverse order."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy Part"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open the outer doll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter the recursive function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find a smaller doll inside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call the same function with a smaller input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat until smallest doll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep recursing until base case reached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close the smallest doll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case returns without further calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close each larger doll in turn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each recursive call returns to its caller"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursion follows the exact same pattern: a function calls itself on a smaller version of the problem until it reaches a trivial case, then returns values back up the chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive function"
      }), " is one that calls itself, directly or indirectly, to solve a smaller instance of the same problem. Every recursive function consists of two mandatory parts:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base case"
        }), " → a condition under which the function returns without recursing (the \"smallest doll\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive case"
        }), " → the function calls itself with modified arguments that move toward the base case"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generalized-pseudocode",
      children: "Generalized Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function recursive(input):\n    if base_condition(input) is TRUE:    // base case\n        return base_value\n\n    // transformation: prepare smaller input\n    smaller = transform(input)\n\n    // recursive call\n    result = recursive(smaller)\n\n    // optional: combine result with current work\n    return combine(current_work, result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "simple-c-example-countdown",
      children: "Simple C Example: Countdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid countdown(int n)\n{\n    if (n <= 0) {                    /* base case */\n        printf(\"Go!\\n\");\n        return;\n    }\n\n    printf(\"%d... \", n);             /* action before recursion */\n    countdown(n - 1);                /* recursive case: n-1 moves toward 0 */\n    printf(\"[%d] \", n);              /* action after recursion */\n}\n\nint main(void)\n{\n    printf(\"Countdown from 3:\\n\");\n    countdown(3);\n    printf(\"\\nLiftoff!\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Countdown from 3:\n3... 2... 1... Go! [1] [2] [3]\nLiftoff!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run-trace",
      children: "Full Dry Run Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base Case?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Call / Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "countdown(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"3... \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls countdown(2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "countdown(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"2... \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls countdown(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "countdown(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"1... \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls countdown(0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "countdown(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"Go!\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns to call 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(resumed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"[1]\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns to call 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(resumed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"[2]\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns to call 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(resumed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print \"[3]\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns to main()"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observation:"
      }), " The prints happening ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " the recursive call execute in forward order (3, 2, 1). The prints happening ", (0,jsx_runtime.jsx)(_components.em, {
        children: "after"
      }), " execute in reverse (1, 2, 3) because they run during the unwinding phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call reduces n by 1; n+1 total calls for input n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n+1 stack frames active simultaneously at peak depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auxiliary space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra data structures beyond local variables per frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advantage: Clarity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive code mirrors the mathematical definition of the problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advantage: Maintainability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less code, easier to reason about for naturally recursive problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advantage: Divide & Conquer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally supports divide-and-conquer strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disadvantage: Stack overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call uses ~24-48 bytes for frame; deep recursion crashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disadvantage: Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call overhead vs simple jump in iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disadvantage: Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack traces can be deep and confusing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate base case, no recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure base case handles minimum input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One recursive step, then base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify boundary works correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If n is negative and base is n <= 0, base triggers immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decide if negative input is valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large n (10,000+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow on most systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iteration or tail recursion with TCO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion until stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always verify base case exists for all paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-base-case-vs-recursive-case",
      children: "14.2 Base Case vs Recursive Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-breakdown",
      children: "Detailed Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every recursive function must have precisely these two components. One without the other is broken."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-base-case",
      children: "The Base Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base case"
      }), " is the condition that stops the recursion. It:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does NOT make a recursive call"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Returns a simple, known result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typically handles the smallest possible input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be one or multiple conditions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Single base case */\nint factorial(int n)\n{\n    if (n <= 1) return 1;    /* base case */\n    return n * factorial(n - 1);\n}\n\n/* Multiple base cases */\nint fibonacci(int n)\n{\n    if (n == 0) return 0;    /* base case 1 */\n    if (n == 1) return 1;    /* base case 2 */\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-recursive-case",
      children: "The Recursive Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive case"
      }), " is the part where the function calls itself. It must:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call the same function (direct recursion) or another function that eventually calls back (indirect)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass modified arguments that move toward the base case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally combine the result of the recursive call with current work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Recursive case with post-processing */\nint sum(int n)\n{\n    if (n <= 0) return 0;           /* base case */\n    return n + sum(n - 1);           /* recursive case: n + result of sum(n-1) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-happens-when-each-is-missing",
      children: "What Happens When Each Is Missing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing base case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void inf(int n) { inf(n + 1); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion → stack overflow → crash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing recursive case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int bad(int n) { if (n==0) return 0; return 1; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not recursive at all (no self-call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Base case never reached"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int bad(int n) { if (n==0) return 0; return n + bad(n + 1); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion (moves away from base)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-base-case-check",
      children: "Dry Run: Base Case Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sum(3)"
      }), " with implementation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (n <= 0) return 0; else return n + sum(n - 1);"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test n <= 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sum(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return 3 + sum(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 + 3 = 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sum(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return 2 + sum(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 + 1 = 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sum(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return 1 + sum(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 0 = 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sum(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-base-cases-in-one-function",
      children: "Multiple Base Cases in One Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint tribonacci(int n)\n{\n    if (n == 0) return 0;            /* base case 1 */\n    if (n == 1) return 0;            /* base case 2 */\n    if (n == 2) return 1;            /* base case 3 */\n    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);\n}\n\nint main(void)\n{\n    for (int i = 0; i <= 10; i++) {\n        printf(\"trib(%d) = %d\\n\", i, tribonacci(i));\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "trib(0) = 0\ntrib(1) = 0\ntrib(2) = 1\ntrib(3) = 1\ntrib(4) = 2\ntrib(5) = 4\ntrib(6) = 7\ntrib(7) = 13\ntrib(8) = 24\ntrib(9) = 44\ntrib(10) = 81\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-baserecursive-cases",
      children: "Edge Cases for Base/Recursive Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base case too permissive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (n < 0) return 0;"
            }), " combined with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rec(n-1)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative input works but large positive fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base case too restrictive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (n == 0) return 0;"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rec(n-2)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Odd inputs skip base case entirely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive case doesn't shrink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return n + rec(n);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion → argument never changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive case grows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return n + rec(n+1);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion → moves away from base"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-the-call-stack-and-recursion",
      children: "14.3 The Call Stack and Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-stack-of-plates",
      children: "Real-World Analogy: Stack of Plates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a spring-loaded stack of cafeteria plates. You can only:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push"
        }), " a plate onto the top (function call)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop"
        }), " a plate from the top (function return)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The last plate pushed is always the first plate popped → this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LIFO"
      }), " (Last In, First Out). Recursion uses the call stack the same way."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-frame-layout",
      children: "Stack Frame Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each function call creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack frame"
      }), " containing:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (typical)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where to resume after the call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (64-bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saved base pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Previous frame's base pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All automatic variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function arguments (or register copies)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saved registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callee-saved register values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on ABI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visualization-of-countdown3-call-stack",
      children: "Visualization of countdown(3) Call Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      HIGH ADDRESSES (top of stack)\n      +--------------------------+  <-- stack top\n      |                          |\n      | [free stack space]       |\n      |                          |\n      +--------------------------+\n      | countdown(0) frame       |\n      | n = 0                    |\n      | ret addr = countdown+42  |\n      +--------------------------+  <-- RSP after 4th call\n      | countdown(1) frame       |\n      | n = 1                    |\n      | ret addr = countdown+42  |\n      +--------------------------+\n      | countdown(2) frame       |\n      | n = 2                    |\n      | ret addr = countdown+42  |\n      +--------------------------+\n      | countdown(3) frame       |\n      | n = 3                    |\n      | ret addr = main+16       |\n      +--------------------------+\n      | main() frame             |\n      | ...                      |\n      +--------------------------+\n      LOW ADDRESSES (bottom of stack)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-to-visualize-stack-frame-addresses",
      children: "Code to Visualize Stack Frame Addresses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid recurse(int depth)\n{\n    printf(\"Depth %d: &depth = %p, frame ~ %p\\n\",\n           depth, (void*)&depth, (void*)(&depth - 4));\n\n    if (depth < 5) {\n        recurse(depth + 1);\n    }\n\n    printf(\"Depth %d: returning, &depth = %p\\n\", depth, (void*)&depth);\n}\n\nint main(void)\n{\n    recurse(1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses will vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Depth 1: &depth = 0x7fff5fbff6dc, frame ~ 0x7fff5fbff6cc\nDepth 2: &depth = 0x7fff5fbff6bc, frame ~ 0x7fff5fbff6ac\nDepth 3: &depth = 0x7fff5fbff69c, frame ~ 0x7fff5fbff68c\nDepth 4: &depth = 0x7fff5fbff67c, frame ~ 0x7fff5fbff66c\nDepth 5: &depth = 0x7fff5fbff65c, frame ~ 0x7fff5fbff64c\nDepth 5: returning, &depth = 0x7fff5fbff65c\nDepth 4: returning, &depth = 0x7fff5fbff67c\nDepth 3: returning, &depth = 0x7fff5fbff69c\nDepth 2: returning, &depth = 0x7fff5fbff6bc\nDepth 1: returning, &depth = 0x7fff5fbff6dc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each recursive call pushes a new frame at a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lower"
        }), " address (stack grows downward on x86/x64)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The addresses decrease by ~32 bytes per frame (the size of one stack frame for this function)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frames are popped in reverse order (depth 5 returns first)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The local variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "depth"
        }), " has a different address in each frame"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-overflow-demonstration",
      children: "Stack Overflow Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* WARNING: This will crash -- run at your own risk */\nvoid blow_stack(int n)\n{\n    char buffer[1024];             /* 1 KB local array per call */\n    printf(\"Depth %d\\n\", n);\n    blow_stack(n + 1);             /* no base case */\n}\n\nint main(void)\n{\n    /* Reduce stack size via setrlimit to fail faster */\n    blow_stack(1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (Linux, typical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Depth 1\nDepth 2\n...\nDepth 261873\nSegmentation fault (core dumped)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-size-limits-by-platform",
      children: "Stack Size Limits by Platform"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Stack Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Safe Recursion Depth (~32 byte frames)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux (pthread default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~262,000 calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "macOS (main thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~262,000 calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32,000 calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded (ARM Cortex-M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-64 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32-2,000 calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESP32 (FreeRTOS task)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-10 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-300 calls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-stack-growth-and-return",
      children: "Understanding Stack Growth and Return"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Demonstrate the \"winding\" and \"unwinding\" phases */\nvoid unwind_demo(int n)\n{\n    printf(\"WINDING: entering frame n=%d\\n\", n);\n\n    if (n > 0) {\n        unwind_demo(n - 1);\n    }\n\n    printf(\"UNWINDING: leaving frame n=%d\\n\", n);\n}\n\nint main(void)\n{\n    unwind_demo(3);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WINDING: entering frame n=3\nWINDING: entering frame n=2\nWINDING: entering frame n=1\nWINDING: entering frame n=0\nUNWINDING: leaving frame n=0\nUNWINDING: leaving frame n=1\nUNWINDING: leaving frame n=2\nUNWINDING: leaving frame n=3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "winding-vs-unwinding-phase",
      children: "Winding vs Unwinding Phase"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Winding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward (n=3 -> 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushing frames, executing code before recursive call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unwinding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward (n=0 -> 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popping frames, executing code after recursive call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-call-stack",
      children: "Edge Cases for Call Stack"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion (n=100,000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow on most platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large local arrays per frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each frame consumes more stack; overflow with fewer calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endless recursion (no base)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash regardless of stack size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handlers + recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double fault if signal handler recurses and overflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive mutex lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock if same thread tries to lock non-recursive mutex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-recursion-types--complete-comparison",
      children: "14.4 Recursion Types → Complete Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "six-types-of-recursion",
      children: "Six Types of Recursion"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls itself directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() { f(); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls another function that calls the first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() { g(); } void g() { f(); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive call is the very last operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return f(n-1);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Head"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive call is the first operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(n-1); return n;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linear"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each invocation makes at most one recursive call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorial, binary search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each invocation makes multiple recursive calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, merge sort"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-direct-recursion",
      children: "1. Direct Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The function calls itself directly within its own body."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int factorial(int n)\n{\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);   /* direct call */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Call graph:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "factorial -> factorial -> factorial -> ..."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-indirect-recursion-mutual-recursion",
      children: "2. Indirect Recursion (Mutual Recursion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function A calls function B, which calls function A again."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdbool.h>\n\n/* Check if a number is even using mutual recursion */\nbool is_even(int n);\nbool is_odd(int n);\n\nbool is_even(int n)\n{\n    if (n == 0) return true;\n    return is_odd(n - 1);        /* indirect: calls is_odd */\n}\n\nbool is_odd(int n)\n{\n    if (n == 0) return false;\n    return is_even(n - 1);       /* indirect: calls is_even */\n}\n\nint main(void)\n{\n    for (int i = 0; i <= 10; i++) {\n        printf(\"%d is %s\\n\", i, is_even(i) ? \"even\" : \"odd\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 is even\n1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd\n6 is even\n7 is odd\n8 is even\n9 is odd\n10 is even\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Call graph for is_even(4):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "is_even(4) -> is_odd(3) -> is_even(2) -> is_odd(1) -> is_even(0) -> true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-tail-recursion",
      children: "3. Tail Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recursive call is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "last statement"
      }), " executed, and its return value is directly returned without further computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int tail_fact(int n, int acc)\n{\n    if (n <= 1) return acc;            /* base: return accumulator */\n    return tail_fact(n - 1, n * acc);  /* tail call: nothing after */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Property:"
      }), " With tail-call optimization (TCO), the compiler reuses the current frame → O(1) stack space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-head-recursion",
      children: "4. Head Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recursive call is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first statement"
      }), " before any other processing. All work happens during the unwinding phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void head_print(int n)\n{\n    if (n == 0) return;\n    head_print(n - 1);          /* recursive call first */\n    printf(\"%d \", n);           /* work happens after */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output for head_print(5):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare with non-head version:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void non_head_print(int n)\n{\n    if (n == 0) return;\n    printf(\"%d \", n);           /* work happens before */\n    non_head_print(n - 1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output for non_head_print(5):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5 4 3 2 1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-linear-recursion",
      children: "5. Linear Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each invocation makes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "at most one"
      }), " recursive call. The call tree is a straight line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int linear_sum(int n)\n{\n    if (n <= 0) return 0;\n    return n + linear_sum(n - 1);   /* exactly one recursive call */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Call shape:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "linear_sum(5) -> linear_sum(4) -> linear_sum(3) -> linear_sum(2) -> linear_sum(1) -> linear_sum(0)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time complexity:"
      }), " O(n) → linear in input size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-tree-recursion",
      children: "6. Tree Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each invocation makes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple"
      }), " recursive calls. The call graph branches like a tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int tree_fib(int n)\n{\n    if (n <= 1) return n;\n    return tree_fib(n - 1) + tree_fib(n - 2);  /* TWO recursive calls */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Call shape for tree_fib(4):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    fib(4)\n                   /      \\\n              fib(3)      fib(2)\n             /     \\      /    \\\n        fib(2)   fib(1) fib(1) fib(0)\n        /    \\\n    fib(1)  fib(0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time complexity:"
      }), " O(2^n) → exponential."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursion-types-comparison-table",
      children: "Recursion Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Self-Calls per Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tail Call Optimization Possible?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Debugging Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if tail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (via another function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with TCO, else O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (work after call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if tail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (multiple calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(branches^depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-head-recursion-vs-tail-recursion--detailed-comparison",
      children: "14.5 Head Recursion vs Tail Recursion → Detailed Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-side-by-side",
      children: "Definition Side by Side"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Head Recursion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tail Recursion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First operation in function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last operation in function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Work timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work done during unwinding (returns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work done during winding (calls)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must keep all frames (work after call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can reuse frame (if TCO supported)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCO possible?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse-order processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward-accumulation algorithms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "head-recursion-example-print-numbers-ascending",
      children: "Head Recursion Example: Print Numbers Ascending"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid print_ascending(int n)\n{\n    if (n <= 0) return;\n    print_ascending(n - 1);     /* head: recursive call first */\n    printf(\"%d \", n);           /* work after */\n}\n\nint main(void)\n{\n    printf(\"Ascending from 5: \");\n    print_ascending(5);\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ascending from 5: 1 2 3 4 5"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack After Call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls print_ascending(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5 pending]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls print_ascending(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4 pending]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls print_ascending(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3 pending]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls print_ascending(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2 pending]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calls print_ascending(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2, 1 pending]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns (base)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"1 \", returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"2 \", returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"3 \", returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"4 \", returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "print_ascending(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"5 \", returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tail-recursion-example-print-numbers-ascending-accumulator-style",
      children: "Tail Recursion Example: Print Numbers Ascending (Accumulator Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Tail-recursive: print numbers in ascending using an accumulator */\nvoid print_range(int start, int current, int end)\n{\n    if (current > end) return;                /* base case */\n    printf(\"%d \", current);                   /* work first */\n    print_range(start, current + 1, end);     /* tail call */\n}\n\nint main(void)\n{\n    printf(\"Range 1 to 5: \");\n    print_range(1, 1, 5);\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Range 1 to 5: 1 2 3 4 5"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-comparison",
      children: "Memory Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* HEAD recursion → prints 1..n */\nunsigned long long head_sum(int n)\n{\n    if (n <= 0) return 0;\n    unsigned long long sub = head_sum(n - 1);  /* must keep frame */\n    return n + sub;                             /* work after call */\n}\n\n/* TAIL recursion → prints 1..n */\nunsigned long long tail_sum(int n, unsigned long long acc)\n{\n    if (n <= 0) return acc;                     /* return accumulated */\n    return tail_sum(n - 1, acc + n);            /* tail: nothing remains */\n}\n\nunsigned long long tail_sum_wrapper(int n)\n{\n    return tail_sum(n, 0);\n}\n\nint main(void)\n{\n    printf(\"head_sum(100) = %llu\\n\", head_sum(100));\n    printf(\"tail_sum(100) = %llu\\n\", tail_sum_wrapper(100));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Both produce 5050. The difference is in stack behavior:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "head_sum(100000)"
        }), " will overflow the stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tail_sum(100000)"
        }), " with TCO uses O(1) stack and succeeds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transformation-pattern-head---tail",
      children: "Transformation Pattern: Head -> Tail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original (head recursion):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int factorial(int n)\n{\n    if (n <= 1) return 1;\n    int sub = factorial(n - 1);    /* recursive call first (conceptually) */\n    return n * sub;                /* then combine */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transformed (tail recursion with accumulator):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fact_tail(int n, int acc)\n{\n    if (n <= 1) return acc;        /* return accumulated result */\n    return fact_tail(n - 1, n * acc);  /* tail call */\n}\n\nint factorial(int n)\n{\n    return fact_tail(n, 1);         /* wrapper with initial accumulator */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preferred Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process list from tail to head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work after base case provides natural reversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulate running result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tail recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCO eliminates stack growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse tree (post-order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head (conceptually)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit children first, then node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse tree (pre-order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tail (conceptually)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process node first, then children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large input (n > 10,000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tail recursion (with TCO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) stack vs O(n) stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical induction proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both work; tail often cleaner"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-direct-vs-indirect-recursion",
      children: "14.6 Direct vs Indirect Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "direct-recursion",
      children: "Direct Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function A calls function A. Simple, traceable, most common."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void direct(int n)\n{\n    if (n <= 0) return;\n    printf(\"%d \", n);\n    direct(n - 1);          /* direct self-call */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Call chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "direct(5) -> direct(4) -> direct(3) -> direct(2) -> direct(1) -> direct(0) -> return\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indirect-recursion-mutual-recursion",
      children: "Indirect Recursion (Mutual Recursion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function A calls function B, which calls function A again. Creates a cycle across 2+ functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid function_a(int n);\nvoid function_b(int n);\n\nvoid function_a(int n)\n{\n    if (n <= 0) {\n        printf(\"Base A\\n\");\n        return;\n    }\n    printf(\"A(%d) calling B\\n\", n);\n    function_b(n - 1);         /* indirect: calls B */\n}\n\nvoid function_b(int n)\n{\n    if (n <= 0) {\n        printf(\"Base B\\n\");\n        return;\n    }\n    printf(\"B(%d) calling A\\n\", n);\n    function_a(n / 2);         /* indirect: calls A */\n}\n\nint main(void)\n{\n    function_a(10);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A(10) calling B\nB(9) calling A\nA(4) calling B\nB(3) calling A\nA(1) calling B\nB(0) calling A   -> actually calls function_a(0)\nBase A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-function-mutual-recursion",
      children: "Three-Function Mutual Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid step1(int n);\nvoid step2(int n);\nvoid step3(int n);\n\nvoid step1(int n)\n{\n    if (n <= 0) { printf(\"Done!\\n\"); return; }\n    printf(\"Step1: %d\\n\", n);\n    step2(n - 1);\n}\n\nvoid step2(int n)\n{\n    if (n <= 0) { printf(\"Done!\\n\"); return; }\n    printf(\"Step2: %d\\n\", n);\n    step3(n - 1);\n}\n\nvoid step3(int n)\n{\n    if (n <= 0) { printf(\"Done!\\n\"); return; }\n    printf(\"Step3: %d\\n\", n);\n    step1(n - 1);\n}\n\nint main(void)\n{\n    step1(5);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step1: 5\nStep2: 4\nStep3: 3\nStep1: 2\nStep2: 1\nStep3: 0\nDone!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct Recursion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Indirect Recursion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls another function that calls back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 or more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy → single function to watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder → must track multiple functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base case location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside the function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any of the participating functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorial, Fibonacci, tree traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State machines, parity checking, alternating patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) same function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) across N functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-recursion-cycles",
      children: "Detecting Recursion Cycles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indirect recursion can create subtle cycles. A compiler must detect these to avoid infinite loops. In practice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward declarations"
        }), " are required (C requires prototypes before use)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycle detection"
        }), " is compiler's responsibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Human debugging"
        }), " benefits from call-graph visualization tools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Forward declarations required for mutual recursion */\nint is_even(int n);    /* forward declaration */\nint is_odd(int n);     /* forward declaration */\n\nint is_even(int n) {\n    if (n == 0) return 1;\n    return is_odd(n - 1);\n}\n\nint is_odd(int n) {\n    if (n == 0) return 0;\n    return is_even(n - 1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-classic-recursive-problems",
      children: "14.7 Classic Recursive Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1471-factorial",
      children: "14.7.1 Factorial"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-seating-arrangements",
      children: "Real-World Analogy: Seating Arrangements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have n people to seat in n chairs. The first person can sit in any of n chairs. Once seated, the remaining (n-1) people need to be arranged in (n-1) chairs → which is exactly (n-1)! possibilities. So n! = n x (n-1)!."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-factorial5",
      children: "Numbered Steps for factorial(5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: is 5 <= 1? No. Compute 5 x factorial(4)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: is 4 <= 1? No. Compute 4 x factorial(3)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: is 3 <= 1? No. Compute 3 x factorial(2)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: is 2 <= 1? No. Compute 2 x factorial(1)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check: is 1 <= 1? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Yes."
        }), " Return 1."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back in step 4: return 2 x 1 = 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back in step 3: return 3 x 2 = 6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back in step 2: return 4 x 6 = 24."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back in step 1: return 5 x 24 = 120."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function factorial(n):\n    if n <= 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nunsigned long long factorial(int n)\n{\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nint main(void)\n{\n    for (int i = 0; i <= 20; i++) {\n        printf(\"%2d! = %llu\\n\", i, factorial(i));\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " 0! = 1\n 1! = 1\n 2! = 2\n 3! = 6\n 4! = 24\n 5! = 120\n 6! = 720\n 7! = 5040\n 8! = 40320\n 9! = 362880\n10! = 3628800\n11! = 39916800\n12! = 479001600\n13! = 6227020800\n14! = 87178291200\n15! = 1307674368000\n16! = 20922789888000\n17! = 355687428096000\n18! = 6402373705728000\n19! = 121645100408832000\n20! = 2432902008176640000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-trace-table-for-factorial5",
      children: "Full Dry Run Trace Table for factorial(5)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n <= 1?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value Calculated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 x factorial(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 x 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 x factorial(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 x 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 x factorial(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 x 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 x factorial(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 x 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "call-stack-visualization-for-factorial5",
      children: "Call Stack Visualization for factorial(5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1 (winding):                Step 2 (unwinding):\n+------------------+             +------------------+\n| fact(5): n=5     |             | fact(5): n=5      | -> returns 120\n+------------------+             +------------------+\n| fact(4): n=4     |        ^    | fact(4): n=4      | -> returns 24\n+------------------+        |    +------------------+\n| fact(3): n=3     |        |    | fact(3): n=3      | -> returns 6\n+------------------+   5 frames  +------------------+\n| fact(2): n=2     |    deep     | fact(2): n=2      | -> returns 2\n+------------------+        |    +------------------+\n| fact(1): n=1     |        |    | fact(1): n=1      | -> returns 1\n+------------------+        v    +------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly n+1 function calls for input n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n+1 stack frames active simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auxiliary space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only local variable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n"
            }), " per frame"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) and not O(1)?"
      }), " Because the multiplication ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n * factorial(n-1)"
      }), " cannot happen until the recursive call returns. The frame must be preserved, so we cannot reuse it. This makes factorial a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear"
      }), " but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-tail"
      }), " recursive function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table",
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
            children: "Code exactly matches mathematical definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow for large n (n > 10,000 typically fails)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very concise (3 lines of logic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call overhead vs iterative version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to prove correct by induction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication after return prevents TCO"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct by definition (0! = 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case triggers immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative input treated as base case → may be incorrect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same issue → consider ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n < 0) return 0;"
            }), " for invalid"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2,432,902,008,176,640,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fits in 64-bit unsigned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceeds 64-bit range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too deep for default stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1472-fibonacci-sequence",
      children: "14.7.2 Fibonacci Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-rabbit-breeding",
      children: "Real-World Analogy: Rabbit Breeding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting with one pair of rabbits: each pair produces one new pair every month, and a new pair takes one month to mature. The number of pairs after n months is fib(n). This is Fibonacci's original problem from 1202."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-fib5",
      children: "Numbered Steps for fib(5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(5) = fib(4) + fib(3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(4) = fib(3) + fib(2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(3) = fib(2) + fib(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(2) = fib(1) + fib(0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(1) = 1 (base case)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fib(0) = 0 (base case)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute back up: fib(2) = 1+0 = 1, fib(3) = 1+1 = 2, fib(4) = 2+1 = 3, fib(5) = 3+2 = 5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function fib(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fib(n-1) + fib(n-2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-with-comparison-to-iterative",
      children: "C Implementation (with comparison to iterative)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Naive recursive → O(2^n) time, O(n) stack */\nunsigned long long fib_recursive(int n)\n{\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return fib_recursive(n - 1) + fib_recursive(n - 2);\n}\n\n/* Iterative → O(n) time, O(1) space */\nunsigned long long fib_iterative(int n)\n{\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n\n    unsigned long long a = 0, b = 1, temp;\n    for (int i = 2; i <= n; i++) {\n        temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;\n}\n\n/* Memoized recursive → O(n) time, O(n) space */\n#define MAX_MEMO 1000\nunsigned long long memo[MAX_MEMO];\n\nvoid init_memo(void)\n{\n    for (int i = 0; i < MAX_MEMO; i++) {\n        memo[i] = (unsigned long long)-1;\n    }\n}\n\nunsigned long long fib_memoized(int n)\n{\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    if (memo[n] != (unsigned long long)-1) {\n        return memo[n];\n    }\n    memo[n] = fib_memoized(n - 1) + fib_memoized(n - 2);\n    return memo[n];\n}\n\nint main(void)\n{\n    printf(\"Recursive Fibonacci (n=0..10):\\n\");\n    for (int i = 0; i <= 10; i++) {\n        printf(\"fib(%d) = %llu\\n\", i, fib_recursive(i));\n    }\n\n    printf(\"\\nIterative Fibonacci (n=0..40):\\n\");\n    for (int i = 0; i <= 40; i++) {\n        printf(\"fib(%d) = %llu\\n\", i, fib_iterative(i));\n    }\n\n    init_memo();\n    printf(\"\\nMemoized Fibonacci (n=0..90):\\n\");\n    for (int i = 0; i <= 90; i++) {\n        if (i % 10 == 0) printf(\"fib(%d) = %llu\\n\", i, fib_memoized(i));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Recursive Fibonacci (n=0..10):\nfib(0) = 0\nfib(1) = 1\nfib(2) = 1\nfib(3) = 2\nfib(4) = 3\nfib(5) = 5\nfib(6) = 8\nfib(7) = 13\nfib(8) = 21\nfib(9) = 34\nfib(10) = 55\n\nIterative Fibonacci (n=0..40):\nfib(0) = 0\nfib(1) = 1\nfib(2) = 1\nfib(3) = 2\nfib(4) = 3\nfib(5) = 5\nfib(6) = 8\nfib(7) = 13\nfib(8) = 21\nfib(9) = 34\nfib(10) = 55\nfib(11) = 89\nfib(12) = 144\nfib(13) = 233\nfib(14) = 377\nfib(15) = 610\nfib(16) = 987\nfib(17) = 1597\nfib(18) = 2584\nfib(19) = 4181\nfib(20) = 6765\nfib(21) = 10946\nfib(22) = 17711\nfib(23) = 28657\nfib(24) = 46368\nfib(25) = 75025\nfib(26) = 121393\nfib(27) = 196418\nfib(28) = 317811\nfib(29) = 514229\nfib(30) = 832040\nfib(31) = 1346269\nfib(32) = 2178309\nfib(33) = 3524578\nfib(34) = 5702887\nfib(35) = 9227465\nfib(36) = 14930352\nfib(37) = 24157817\nfib(38) = 39088169\nfib(39) = 63245986\nfib(40) = 102334155\n\nMemoized Fibonacci (n=0..90):\nfib(0) = 0\nfib(10) = 55\nfib(20) = 6765\nfib(30) = 832040\nfib(40) = 102334155\nfib(50) = 12586269025\nfib(60) = 1548008755920\nfib(70) = 190392490709135\nfib(80) = 23416728348467685\nfib(90) = 2880067194370816120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-trace-table-for-fib_recursive5",
      children: "Full Dry Run Trace Table for fib_recursive(5)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(4) + fib(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 + 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(3) + fib(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(3) [L1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(2) + fib(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(2) [L1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) + fib(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) [L1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(0) [L1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(2) [L2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) + fib(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) [L2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(0) [L2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(3) [L2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(2) + fib(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(2) [L3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) + fib(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) [L3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(0) [L3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fib(1) [L4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " fib(3) is computed twice, fib(2) three times, fib(1) five times. This explosion is why naive recursive Fibonacci is O(2^n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call makes 2 more calls; depth is n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single loop, fixed variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoized recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each n computed once; memo stores n values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(2^n)?"
      }), " Each call to fib(n) generates two calls: fib(n-1) and fib(n-2). The recursion tree has 2^n nodes at the bottom level. For n=50, that's ~1.125 quadrillion calls → impossible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) for memoized?"
      }), " Each value of n from 0 to input is computed exactly once. The recursive structure ensures memo[n] is filled on first access; subsequent accesses are O(1) lookup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-1",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest code, matches math definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential time; useless for n > 40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time, O(1) space, fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More code; doesn't look like the definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoized recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time, still recursive structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) space; needs global/external storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case → correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case → correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined; naive version recurses infinitely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2,971,215,073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 32-bit signed int range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12,200,160,415,121,874,738"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fits in 64-bit unsigned; fib(94) overflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50 (naive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Would take ~1000 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential complexity makes it infeasible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1473-tower-of-hanoi",
      children: "14.7.3 Tower of Hanoi"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-the-legend",
      children: "Real-World Analogy: The Legend"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the Temple of Benares, priests move 64 golden disks between three diamond needles. The prophecy says the world will end when they complete the task. With 2^64 - 1 moves required at one move per second, that's about 585 billion years → the recursion naturally matches the problem structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given three pegs (A, B, C) and n disks of different sizes stacked on peg A in decreasing size (largest at bottom), move all disks to peg C following these rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only one disk can be moved at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only the top disk on a peg can be moved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A larger disk can never be placed on a smaller disk"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-n3",
      children: "Numbered Steps for n=3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 1 from A to C (smallest disk, direct move because C is empty)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 2 from A to B (can't put on C because disk 1 is there)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 1 from C to B (smallest on top of disk 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 3 from A to C (largest disk, destination is C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 1 from B to A (clear B for next move)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 2 from B to C (onto the largest disk)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move disk 1 from A to C (completes the stack)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-pseudocode",
      children: "Algorithm Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hanoi(n, source, destination, auxiliary):\n    if n == 1:\n        move disk 1 from source to destination\n        return\n\n    hanoi(n-1, source, auxiliary, destination)\n    move disk n from source to destination\n    hanoi(n-1, auxiliary, destination, source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nlong long move_count = 0;\n\nvoid hanoi(int n, char from, char to, char aux)\n{\n    if (n == 1) {\n        printf(\"Move disk 1 from %c to %c\\n\", from, to);\n        move_count++;\n        return;\n    }\n\n    hanoi(n - 1, from, aux, to);              /* move n-1 to auxiliary */\n    printf(\"Move disk %d from %c to %c\\n\", n, from, to);\n    move_count++;\n    hanoi(n - 1, aux, to, from);              /* move n-1 from aux to dest */\n}\n\nint main(void)\n{\n    int n = 4;\n    printf(\"Tower of Hanoi → %d disks:\\n\\n\", n);\n    hanoi(n, 'A', 'C', 'B');\n    printf(\"\\nTotal moves: %lld (2^%d - 1 = %lld)\\n\",\n           move_count, n, (1LL << n) - 1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tower of Hanoi → 4 disks:\n\nMove disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C\nMove disk 3 from A to B\nMove disk 1 from C to A\nMove disk 2 from C to B\nMove disk 1 from A to B\nMove disk 4 from A to C\nMove disk 1 from B to C\nMove disk 2 from B to A\nMove disk 1 from C to A\nMove disk 3 from B to C\nMove disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C\n\nTotal moves: 15 (2^4 - 1 = 15)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-trace-table-for-hanoi3-a-c-b",
      children: "Full Dry Run Trace Table for hanoi(3, 'A', 'C', 'B')"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "aux"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(3, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(2, A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(1, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(1, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base: prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 1 from A to C\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 2 from A to B\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(1, C, B, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(1, C, B, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base: prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 1 from C to B\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(3, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 3 from A to C\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(3, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(2, B, C, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, B, C, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(1, B, A, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(1, B, A, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base: prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 1 from B to A\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, B, C, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 2 from B to C\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(2, B, C, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls hanoi(1, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hanoi(1, A, C, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base: prints move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move disk 1 from A to C\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "call-stack-at-deepest-point",
      children: "Call Stack at Deepest Point"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                hanoi(3, A, C, B)\n                     |\n         +-----------+-----------+\n         |                       |\n    hanoi(2, A, B, C)     hanoi(2, B, C, A)   [later]\n         |\n    +----+----+\n    |         |\n hanoi(1,  hanoi(1,\n  A, C, B)  C, B, A)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "At deepest:"
      }), " 3 frames (for n=3), 64 frames for n=64."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call generates 2 more; T(n) = 2T(n-1) + 1, solves to 2^n - 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum n frames active simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moves required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^n - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 disks -> 7 moves, 4 disks -> 15 moves, 64 disks -> 1.8 x 10^19 moves"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(2^n)?"
      }), " Recurrence relation: T(n) = 2T(n-1) + 1. Expanding: T(n) = 2(2T(n-2)+1)+1 = 4T(n-2)+2+1 = ... = 2^k T(n-k) + (2^k - 1). When k=n: T(n) = 2^n x T(0) + (2^n - 1) = 2^n x 0 + 2^n - 1 = 2^n - 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) space?"
      }), " The recursion is linear (each frame makes one recursive call at a time before the second, not simultaneously). The deepest chain is n frames deep."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-2",
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
            children: "Code exactly mirrors the recursive definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential time → infeasible for large n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely concise (3 lines of logic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding requires tracing many calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes to n pegs (Reve's puzzle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not useful for practical computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 moves (no output)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No disks to move → edge case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial case: direct move"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest non-trivial case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8 x 10^19 moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Would take 585 billion years at 1 move/sec"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1474-binary-search-recursive",
      children: "14.7.4 Binary Search (Recursive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-dictionary-lookup",
      children: "Real-World Analogy: Dictionary Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To find a word in a dictionary, you don't start at page 1. You open to the middle. If the word comes before the page's words, you search the left half. If after, you search the right half. Repeat until found."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-binary_searcharr-0-9-23",
      children: "Numbered Steps for binary_search(arr, 0, 9, 23)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "left=0, right=9. mid = 0+(9-0)/2 = 4. arr[4]=16 < 23. Search right: left=5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "left=5, right=9. mid = 5+(9-5)/2 = 7. arr[7]=45 > 23. Search left: right=6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "left=5, right=6. mid = 5+(6-5)/2 = 5. arr[5]=23 == 23. Found at index 5."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-pseudocode-1",
      children: "Algorithm Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function binary_search(arr, left, right, target):\n    if left > right:\n        return -1                     // not found\n\n    mid = left + (right - left) / 2   // avoid overflow\n\n    if arr[mid] == target:\n        return mid\n    else if arr[mid] < target:\n        return binary_search(arr, mid + 1, right, target)\n    else:\n        return binary_search(arr, left, mid - 1, target)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint binary_search(const int arr[], int left, int right, int target)\n{\n    if (left > right) {\n        return -1;                      /* base case: not found */\n    }\n\n    int mid = left + (right - left) / 2;  /* avoids overflow of (left+right)/2 */\n\n    if (arr[mid] == target) {\n        return mid;                     /* base case: found */\n    } else if (arr[mid] < target) {\n        return binary_search(arr, mid + 1, right, target);  /* search right */\n    } else {\n        return binary_search(arr, left, mid - 1, target);   /* search left */\n    }\n}\n\nint main(void)\n{\n    int numbers[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};\n    int n = sizeof(numbers) / sizeof(numbers[0]);\n\n    printf(\"Array: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", numbers[i]);\n    printf(\"\\n\\n\");\n\n    int targets[] = {23, 1, 72, 45, 16};\n    for (int i = 0; i < 5; i++) {\n        int idx = binary_search(numbers, 0, n - 1, targets[i]);\n        if (idx >= 0) {\n            printf(\"%d found at index %d\\n\", targets[i], idx);\n        } else {\n            printf(\"%d not found\\n\", targets[i]);\n        }\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array: 2 5 8 12 16 23 38 45 56 72\n\n23 found at index 5\n1 not found\n72 found at index 9\n45 found at index 7\n16 found at index 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-trace-for-binary_searchnumbers-0-9-23",
      children: "Full Dry Run Trace for binary_search(numbers, 0, 9, 23)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[mid]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[mid] vs 23"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 0, 9, 23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 < 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurs on right (mid+1, right)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 5, 9, 23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 > 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurs on left (left, mid-1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 5, 6, 23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "23 == 23"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total calls:"
      }), " 3 (for array of size 10). With linear search, worst case would be 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-target--1-not-found",
      children: "Dry Run: target = 1 (not found)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[mid]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 0, 9, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 > 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left, mid-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 0, 3, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 > 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left, mid-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 0, 0, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 > 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left, mid-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bs(arr, 0, -1, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left > right -> return -1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target is at the first mid point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call halves the search space; log2(n) levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (average)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as worst case for binary search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One frame per level; log2(n) frames max"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n)?"
      }), " The recurrence is T(n) = T(n/2) + O(1). At each level, the array size halves. By the Master Theorem: T(n) = aT(n/b) + f(n) where a=1, b=2, f(n)=O(1). Since n^(log_b a) = n^0 = 1 and f(n) = O(1), case 2 applies: T(n) = O(log n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-3",
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
            children: "Optimal O(log n) search for sorted arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorted input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very concise recursive implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack depth O(log n) → minimal for any practical n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any random-access data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for linked lists (requires O(1) mid access)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=0, right=-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case triggers immediately, returns -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=0, right=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks mid=0; found or returns -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target at ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[0] or arr[n-1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full search to converge to endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target not present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventually left > right, returns -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 2, 2, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns one occurrence (not guaranteed which)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^31 elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mid = (left+right)/2 could overflow; using left + (right-left)/2 prevents this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1475-merge-sort-recursive",
      children: "14.7.5 Merge Sort (Recursive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-sorting-a-deck-of-cards",
      children: "Real-World Analogy: Sorting a Deck of Cards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Split the deck in half, sort each half recursively, then merge the two sorted halves. The base case? A single card is always sorted. This is exactly merge sort."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-for-sort-38-27-43-3-9-82-10",
      children: "Numbered Steps for Sort [38, 27, 43, 3, 9, 82, 10]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Split: [38, 27, 43, 3] | [9, 82, 10]\nStep 2: Split: [38, 27] | [43, 3] || [9, 82] | [10]\nStep 3: Split: [38]|[27] || [43]|[3] ||| [9]|[82] || [10]\nStep 4: Merge: [27, 38] | [3, 43] || [9, 82] | [10]\nStep 5: Merge: [3, 27, 38, 43] | [9, 10, 82]\nStep 6: Merge: [3, 9, 10, 27, 38, 43, 82]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function merge_sort(arr, left, right):\n    if left >= right:\n        return                              // base case: 0 or 1 element\n\n    mid = (left + right) / 2\n\n    merge_sort(arr, left, mid)              // sort left half\n    merge_sort(arr, mid + 1, right)         // sort right half\n    merge(arr, left, mid, right)            // merge sorted halves\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid merge(int arr[], int left, int mid, int right)\n{\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n\n    int L[n1], R[n2];\n\n    for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n\n    int i = 0, j = 0, k = left;\n\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) {\n            arr[k++] = L[i++];\n        } else {\n            arr[k++] = R[j++];\n        }\n    }\n\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n}\n\nvoid merge_sort(int arr[], int left, int right)\n{\n    if (left >= right) {\n        return;                         /* base case: 0 or 1 element */\n    }\n\n    int mid = left + (right - left) / 2;\n\n    merge_sort(arr, left, mid);          /* sort left half */\n    merge_sort(arr, mid + 1, right);     /* sort right half */\n    merge(arr, left, mid, right);        /* merge sorted halves */\n}\n\nvoid print_array(const int arr[], int n)\n{\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint main(void)\n{\n    int arr[] = {38, 27, 43, 3, 9, 82, 10};\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    printf(\"Original: \");\n    print_array(arr, n);\n\n    merge_sort(arr, 0, n - 1);\n\n    printf(\"Sorted:   \");\n    print_array(arr, n);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: 38 27 43 3 9 82 10\nSorted:   3 9 10 27 38 43 82\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "call-tree-visualization-for-arr06",
      children: "Call Tree Visualization for arr[0..6]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         ms(0,6)\n                       /        \\\n                  ms(0,3)      ms(4,6)\n                 /       \\     /      \\\n            ms(0,1)   ms(2,3) ms(4,5) ms(6,6)\n            /    \\     /    \\   /    \\\n        ms(0,0) ms(1,1) ms(2,2) ms(3,3) ms(4,4) ms(5,5)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total levels:"
      }), " ceil(log2(7)) ~ 3 levels of splits + 3 levels of merges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-trace-for-merge_sortarr-0-6",
      children: "Full Dry Run Trace for merge_sort(arr, 0, 6)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(0,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split at 3, call ms(0,3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(0,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split at 1, call ms(0,1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split at 0, call ms(0,0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(0,0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base (left==right), return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base (left==right), return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge(0,0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [38] and [27] -> [27, 38]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split at 2, call ms(2,2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(2,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base, return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(3,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base, return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge(2,2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [43] and [3] -> [3, 43]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge(0,1,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [27,38] and [3,43] -> [3,27,38,43]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms(4,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split at 5"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Similar pattern for right half)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge(0,3,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [3,27,38,43] and [9,10,82] -> [3,9,10,27,38,43,82]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "merge-operation-detail-for-merge0-3-6",
      children: "Merge Operation Detail for merge(0, 3, 6)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Left subarray (L):"
      }), " [3, 27, 38, 43]\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Right subarray (R):"
      }), " [9, 10, 82]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "L[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Take"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 <= 9: true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L[0] -> arr[0]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27 <= 9: false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R[0] -> arr[1]=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27 <= 10: false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R[1] -> arr[2]=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27 <= 82: true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L[1] -> arr[3]=27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38 <= 82: true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L[2] -> arr[4]=38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43 <= 82: true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L[3] -> arr[5]=43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(done)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L exhausted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy R[2] -> arr[6]=82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (all cases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + O(n). Master Theorem: a=2, b=2, f(n)=O(n). n^(log_b a) = n^1 = n. Case 2: T(n) = O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (auxiliary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need temp arrays L and R of total size n during merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion depth is log2(n); ~30 for n=1 billion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal elements maintain original order (<= comparison)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why always O(n log n)?"
      }), " Unlike quicksort which depends on pivot choice, merge sort always divides exactly in half. Every input, sorted or not, follows the same T(n) = 2T(n/2) + O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-4",
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
            children: "Guaranteed O(n log n) for all inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) extra space for merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable sorting algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not-in-place: requires temporary arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally parallelizable (split independently)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive overhead for small arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable performance (no worst-case pivot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than quicksort in practice for average cases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case (left > right), no sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case (left == right), no sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Already sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still does all splits and merges → O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 3, 2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same performance as sorted → O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 7, 7, 7]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge handles correctly; stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~24 levels of recursion, ~230 MB temp space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "148-tail-recursion-and-optimization-deep-dive",
      children: "14.8 Tail Recursion and Optimization (Deep Dive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tail-recursive"
      }), " if the recursive call is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "final operation"
      }), " performed, and the function returns the result of that call directly → with no pending computation after it returns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* NOT tail-recursive: multiplication waits for recursive result */\nint fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);  /* n * pending result */\n}\n\n/* TAIL-recursive: no pending computation */\nint fact_tail(int n, int acc) {\n    if (n <= 1) return acc;\n    return fact_tail(n - 1, n * acc);  /* result returned directly */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tail-call-optimization-tco",
      children: "Tail-Call Optimization (TCO)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With TCO, the compiler transforms the recursive call into a jump, reusing the current stack frame."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "transformation-what-the-compiler-does",
      children: "Transformation: What the Compiler Does"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Source code (tail-recursive):\nint fact_tail(int n, int acc) {\n    if (n <= 1) return acc;\n    return fact_tail(n - 1, n * acc);\n}\n\n// After TCO (conceptually transformed by compiler):\nint fact_tail_optimized(int n, int acc) {\n    start:                     // label instead of function entry\n    if (n <= 1) return acc;\n    // Instead of pushing new frame, just update and jump:\n    acc = n * acc;\n    n = n - 1;\n    goto start;                // jump to function start → no stack growth\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "assembly-level-difference",
      children: "Assembly-Level Difference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Without TCO"
      }), " (ARM64 assembly for non-tail factorial):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-assembly",
        children: "factorial:\n    cmp w0, #1\n    b.le .Lbase\n    stp x29, x30, [sp, -32]!   // push frame\n    sub w0, w0, #1\n    bl factorial                // function call → new frame\n    ldp x29, x30, [sp], 32     // pop frame\n    mul w0, w0, w1             // multiply after return\n    ret\n.Lbase:\n    mov w0, #1\n    ret\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "With TCO"
      }), " (tail-recursive factorial):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-assembly",
        children: "fact_tail:\n    cmp w0, #1\n    b.le .Lbase\n    mul w1, w0, w1             // update accumulator\n    sub w0, w0, #1             // update n\n    b fact_tail                 // jump (not call) → same frame!\n.Lbase:\n    mov w0, w1\n    ret\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference:"
      }), " The tail version uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " (branch/jump) instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bl"
      }), " (branch-and-link/call). No stack frame is created."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compiler-support-for-tco",
      children: "Compiler Support for TCO"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TCO Enabled?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-O1, -O2, -O3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With -foptimize-sibling-calls (included in -O1+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-O0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No optimization at all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clang"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-O1, -O2, -O3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always performs TCO at -O1+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clang"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-O0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default: no TCO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/Ox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited TCO; depends on calling convention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/O2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not optimize certain indirect tail calls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verifying-tco-in-gccclang",
      children: "Verifying TCO in GCC/Clang"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Tail recursive → GCC should optimize this */\nint tail_sum(int n, int acc)\n{\n    if (n <= 0) return acc;\n    return tail_sum(n - 1, acc + n);\n}\n\nint main(void)\n{\n    /* If TCO works, this won't overflow */\n    printf(\"Sum 1..100000 = %d\\n\", tail_sum(100000, 0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compile and test:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -O2 -o tail_test tail_test.c && ./tail_test\n# Output: Sum 1..100000 = 705082704\n\ngcc -O0 -o tail_test tail_test.c && ./tail_test\n# Output: Segmentation fault (stack overflow!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tail-recursion-in-non-void-functions",
      children: "Tail Recursion in Non-Void Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recursive call must be in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tail position"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The return statement must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return func(args);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NOT ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return 1 + func(args);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NOT ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return func(args) + 1;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NOT ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = func(args); return x;"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "converting-any-recursion-to-tail-recursion",
      children: "Converting Any Recursion to Tail Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Add an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accumulator parameter"
      }), " that carries the partial result."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Tail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tail Version"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factorial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return n * fact(n-1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return fact(n-1, n*acc)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return n + sum(n-1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return sum(n-1, n+acc)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return base * pow(base, exp-1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return pow(base, exp-1, base*acc)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse first, then append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse with accumulator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-tco-cannot-be-applied",
      children: "When TCO Cannot Be Applied"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple recursive calls"
        }), " (tree recursion): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return fib(n-1) + fib(n-2)"
        }), " → can't tail-optimize both calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work after recursion"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = f(n-1); return x + n"
        }), " → work after call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursion in non-tail context"
        }), ": Ternary with branching around recursive call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function pointer recursion"
        }), ": Compiler can't prove self-call at compile time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "149-recursion-vs-iteration--comprehensive-comparison",
      children: "14.9 Recursion vs Iteration → Comprehensive Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "side-by-side-code-comparison",
      children: "Side-by-Side Code Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Factorial:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Recursive\nunsigned long long fact_rec(int n) {\n    if (n <= 1) return 1;\n    return n * fact_rec(n - 1);\n}\n\n// Iterative\nunsigned long long fact_iter(int n) {\n    unsigned long long result = 1;\n    for (int i = 2; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Recursive\nint bs_rec(int arr[], int l, int r, int t) {\n    if (l > r) return -1;\n    int m = l + (r - l) / 2;\n    if (arr[m] == t) return m;\n    if (arr[m] < t) return bs_rec(arr, m+1, r, t);\n    return bs_rec(arr, l, m-1, t);\n}\n\n// Iterative\nint bs_iter(int arr[], int n, int t) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (arr[m] == t) return m;\n        if (arr[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-dimension-comparison-table",
      children: "15-Dimension Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop constructs (for, while, do-while)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually shorter, more concise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually longer, more explicit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for recursive structures (trees, divide-and-conquer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for linear, sequential operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth) stack frames → risk of overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) stack → single frame reused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (stack frames per level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (fixed overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call overhead (push/pop frame)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (jump instruction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Termination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case condition checked each call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop condition checked each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow (eventual crash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop (runs forever, no crash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex stack traces; hard to inspect deep state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, linear execution flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization potential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCO can transform to iteration (limited compiler support)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mathematical fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches inductive definitions and proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches imperative step-by-step operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data structures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for trees, graphs, recursive structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for arrays, lists, linear structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer splits work naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop parallelization requires explicit constructs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit state via stack frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit state via local variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack is contiguous; overflow is catastrophic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap allocation (if needed) is more flexible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-benchmark-comparison",
      children: "Performance Benchmark Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <time.h>\n\n/* Recursive factorial */\nunsigned long long fact_rec(int n)\n{\n    if (n <= 1) return 1;\n    return n * fact_rec(n - 1);\n}\n\n/* Iterative factorial */\nunsigned long long fact_iter(int n)\n{\n    unsigned long long r = 1;\n    for (int i = 2; i <= n; i++) r *= i;\n    return r;\n}\n\nint main(void)\n{\n    clock_t start, end;\n    double time_rec, time_iter;\n    volatile unsigned long long result;  /* prevent optimization */\n\n    /* Warm up */\n    fact_rec(20);\n    fact_iter(20);\n\n    /* Benchmark recursive */\n    start = clock();\n    for (int i = 0; i < 1000000; i++) {\n        result = fact_rec(20);\n    }\n    end = clock();\n    time_rec = (double)(end - start) / CLOCKS_PER_SEC;\n\n    /* Benchmark iterative */\n    start = clock();\n    for (int i = 0; i < 1000000; i++) {\n        result = fact_iter(20);\n    }\n    end = clock();\n    time_iter = (double)(end - start) / CLOCKS_PER_SEC;\n\n    printf(\"Recursive: %f sec (per call: %f ns)\\n\",\n           time_rec, (time_rec / 1000000) * 1e9);\n    printf(\"Iterative: %f sec (per call: %f ns)\\n\",\n           time_iter, (time_iter / 1000000) * 1e9);\n    printf(\"Speedup: %.2fx\\n\", time_rec / time_iter);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Recursive: 0.089 sec (per call: 89 ns)\nIterative: 0.012 sec (per call: 12 ns)\nSpeedup: 7.42x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-choose-which",
      children: "When to Choose Which"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "choose-recursion-when",
      children: "Choose Recursion When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The problem is naturally recursive (tree traversal, divide-and-conquer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The recursive solution is significantly clearer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input size is bounded and small enough to avoid stack overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The data structure is itself recursive (linked lists, trees)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need backtracking (N-Queens, maze solving)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst-case depth is O(log n) or less (balanced trees, binary search)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "choose-iteration-when",
      children: "Choose Iteration When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The problem is simple repetition (count to n, sum elements)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input size is large or unpredictable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance is critical (function call overhead matters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack space is limited (embedded systems, kernel code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The recursive solution would require excessive parameter passing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1410-backtracking",
      children: "14.10 Backtracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-what-is-backtracking",
      children: "Concept: What Is Backtracking?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backtracking"
      }), " is a systematic trial-and-error approach to solving constraint-satisfaction problems. It incrementally builds candidates and abandons them (\"backtracks\") as soon as it determines the candidate cannot lead to a valid solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-maze-solving",
      children: "Real-World Analogy: Maze Solving"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You walk through a maze. At each intersection, you choose a path. If you hit a dead end, you retrace your steps to the last intersection and try a different path. This retracing is backtracking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-backtracking-algorithm",
      children: "General Backtracking Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function backtrack(candidate):\n    if candidate is a complete solution:\n        record/output solution\n        return\n\n    for each possible move from candidate:\n        if move is valid (constraints satisfied):\n            make the move\n            backtrack(extended_candidate)\n            undo the move    // BACKTRACK → critical step\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-n-queens-problem",
      children: "Example 1: N-Queens Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Place N queens on an NxN chessboard so that no two queens attack each other."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attack-rules",
      children: "Attack Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same column"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same diagonal (top-left to bottom-right)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same anti-diagonal (top-right to bottom-left)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdbool.h>\n#include <stdlib.h>\n\n#define N 8\n\nint solutions_count = 0;\n\n/* Check if placing queen at (row, col) is safe */\nbool is_safe(int board[], int row, int col)\n{\n    for (int i = 0; i < row; i++) {\n        /* Same column */\n        if (board[i] == col) return false;\n\n        /* Same diagonal (top-left to bottom-right): row - col == i - board[i] */\n        if (row - col == i - board[i]) return false;\n\n        /* Same anti-diagonal (top-right to bottom-left): row + col == i + board[i] */\n        if (row + col == i + board[i]) return false;\n    }\n    return true;\n}\n\nvoid print_board(int board[])\n{\n    printf(\"Solution #%d:\\n\", ++solutions_count);\n    for (int i = 0; i < N; i++) {\n        for (int j = 0; j < N; j++) {\n            printf(\"%c \", board[i] == j ? 'Q' : '.');\n        }\n        printf(\"\\n\");\n    }\n    printf(\"\\n\");\n}\n\nvoid solve_nqueens(int board[], int row)\n{\n    if (row == N) {                      /* all queens placed → solution found */\n        print_board(board);\n        return;\n    }\n\n    for (int col = 0; col < N; col++) {  /* try each column in this row */\n        if (is_safe(board, row, col)) {\n            board[row] = col;            /* place queen */\n            solve_nqueens(board, row + 1);  /* recurse to next row */\n            /* board[row] is overwritten on next iteration → implicit backtrack */\n        }\n    }\n}\n\nint main(void)\n{\n    int board[N];\n\n    printf(\"Solving %d-Queens problem...\\n\\n\", N);\n    solve_nqueens(board, 0);\n\n    if (solutions_count == 0) {\n        printf(\"No solutions found.\\n\");\n    } else {\n        printf(\"Total solutions: %d\\n\", solutions_count);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (first few solutions):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Solving 8-Queens problem...\n\nSolution #1:\nQ . . . . . . .\n. . . . Q . . .\n. . . . . . . Q\n. . . . . Q . .\n. . Q . . . . .\n. . . . . . Q .\n. Q . . . . . .\n. . . Q . . . .\n\nSolution #2:\nQ . . . . . . .\n. . . . . Q . .\n. . . . . . . Q\n. . Q . . . . .\n. . . . . . Q .\n. . . Q . . . .\n. Q . . . . . .\n. . . . Q . . .\n\n...\n\nTotal solutions: 92\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "n-queens-dry-run-for-n4-partial",
      children: "N-Queens Dry Run for N=4 (partial)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tries col"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Board State (row->col)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place, recurse row 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (col 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (diag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place, recurse row 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (col 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (diag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (col 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (diag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No valid column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 2]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Backtrack"
            }), " to row 1"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (diag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No valid column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Backtrack"
            }), " to row 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place, recurse row 1"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continues..."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-of-n-queens",
      children: "Complexity of N-Queens"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upper bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First row: N choices, each subsequent row: fewer by constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical (with pruning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~O(N!) in worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning reduces but doesn't change worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One frame per row, N total"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-maze-solving",
      children: "Example 2: Maze Solving"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdbool.h>\n\n#define ROWS 5\n#define COLS 5\n\n/* Maze: 1 = wall, 0 = path */\nint maze[ROWS][COLS] = {\n    {0, 1, 0, 0, 0},\n    {0, 1, 0, 1, 0},\n    {0, 0, 0, 1, 0},\n    {0, 1, 1, 1, 0},\n    {0, 0, 0, 0, 0}\n};\n\nint solution[ROWS][COLS] = {0};\n\nbool is_valid(int x, int y)\n{\n    return (x >= 0 && x < ROWS && y >= 0 && y < COLS\n            && maze[x][y] == 0 && solution[x][y] == 0);\n}\n\nbool solve_maze(int x, int y, int dest_x, int dest_y)\n{\n    if (x == dest_x && y == dest_y) {\n        solution[x][y] = 1;              /* reached destination */\n        return true;\n    }\n\n    if (is_valid(x, y)) {\n        solution[x][y] = 1;              /* mark as visited */\n\n        /* Try: down, right, up, left */\n        if (solve_maze(x + 1, y, dest_x, dest_y)) return true;\n        if (solve_maze(x, y + 1, dest_x, dest_y)) return true;\n        if (solve_maze(x - 1, y, dest_x, dest_y)) return true;\n        if (solve_maze(x, y - 1, dest_x, dest_y)) return true;\n\n        solution[x][y] = 0;              /* backtrack: unmark */\n        return false;\n    }\n\n    return false;\n}\n\nvoid print_solution(void)\n{\n    for (int i = 0; i < ROWS; i++) {\n        for (int j = 0; j < COLS; j++) {\n            printf(\"%c \", solution[i][j] ? 'P' : (maze[i][j] ? '#' : '.'));\n        }\n        printf(\"\\n\");\n    }\n}\n\nint main(void)\n{\n    printf(\"Maze (#=wall, .=path):\\n\");\n    for (int i = 0; i < ROWS; i++) {\n        for (int j = 0; j < COLS; j++) {\n            printf(\"%c \", maze[i][j] ? '#' : '.');\n        }\n        printf(\"\\n\");\n    }\n\n    printf(\"\\nSolving from (0,0) to (4,4)...\\n\\n\");\n    if (solve_maze(0, 0, 4, 4)) {\n        printf(\"Path found (P=path):\\n\");\n        print_solution();\n    } else {\n        printf(\"No path exists.\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Maze (#=wall, .=path):\n. # . . .\n. # . # .\n. . . # .\n. # # # .\n. . . . .\n\nSolving from (0,0) to (4,4)...\n\nPath found (P=path):\nP # . . .\nP # . # .\nP P . # .\n. # # # .\n. . . P P\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backtracking-vs-brute-force",
      children: "Backtracking vs Brute Force"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backtracking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Brute Force"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try, check, abandon early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate all, then check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prunes dead ends early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All combinations checked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth) for recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Might need storage for all candidates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints prune many candidates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Candidate space is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens prunes by checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate all 64!/(56!8!) placements for 8-Queens"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-of-backtracking",
      children: "Applications of Backtracking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place row by row, check column/diagonal conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try numbers 1-9 in each empty cell, check row/col/box"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maze solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try directions recursively, mark visited, backtrack on dead end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign colors to vertices, check no adjacent same color"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include/exclude each element, backtrack if sum exceeds target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hamiltonian path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try paths, backtrack if vertex visited or no edges remain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knight's tour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move knight on board, backtrack if no valid moves left"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1411-common-pitfalls-and-edge-cases",
      children: "14.11 Common Pitfalls and Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-1-missing-or-incorrect-base-case",
      children: "Pitfall 1: Missing or Incorrect Base Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* PITFALL: No base case → infinite recursion */\nvoid infinite_recursion(int n)\n{\n    printf(\"%d\\n\", n);\n    infinite_recursion(n + 1);    /* NEVER STOPS */\n}\n\n/* PITFALL: Base case condition never met */\nint wrong_base(int n)\n{\n    if (n == 0) return 0;         /* base is n==0 */\n    return n + wrong_base(n - 2); /* if n is odd, n-2 never reaches 0 */\n    /* wrong_base(5): 5 -> 3 -> 1 -> -1 -> -3 -> ... infinite */\n}\n\n/* FIX: Use <= comparison for inclusive base */\nint fixed_base(int n)\n{\n    if (n <= 0) return 0;\n    return n + fixed_base(n - 2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-2-stack-overflow-from-deep-recursion",
      children: "Pitfall 2: Stack Overflow from Deep Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WARNING: factorial(100000) will crash */\nunsigned long long factorial(int n)\n{\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);    /* 100,000 frames! */\n}\n\n/* SOLUTION: Use iteration or tail recursion with TCO */\nunsigned long long factorial_iter(int n)\n{\n    unsigned long long result = 1;\n    for (int i = 2; i <= n; i++) result *= i;\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-3-exponential-blowup-naive-fibonacci",
      children: "Pitfall 3: Exponential Blowup (Naive Fibonacci)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* fib(50) requires ~2^50 ~ 10^15 operations */\nint fib(int n)\n{\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);  /* EACH call makes 2 more calls */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Call count for fib(n):"
      }), " fib(10) -> 177 calls; fib(20) -> 21,891 calls; fib(30) -> 2.7M calls; fib(50) -> ~40 trillion calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-4-side-effects-in-recursive-functions",
      children: "Pitfall 4: Side Effects in Recursive Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* PITFALL: Modifying global state inside recursion */\nint count = 0;\nint bad_recursion(int n)\n{\n    if (n <= 0) return 0;\n    count++;                    /* side effect */\n    return n + bad_recursion(n - 1);\n}\n/* count will be n after call → but value depends on call order */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-5-using-recursion-where-iteration-is-better",
      children: "Pitfall 5: Using Recursion Where Iteration Is Better"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* BAD: Iterating through array with recursion */\nint sum_array(int arr[], int n)\n{\n    if (n <= 0) return 0;\n    return arr[n - 1] + sum_array(arr, n - 1);\n}\n\n/* GOOD: Simple iterative sum */\nint sum_array_iter(int arr[], int n)\n{\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-checklist",
      children: "Edge Cases Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Potential Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preventive Measure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case may not handle it"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n <= 0)"
            }), " not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n == 0)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero (if applicable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for zero before operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum input size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate depth; switch to iteration if needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum input size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case should handle trivially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test with smallest valid input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer overflow in return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use appropriate types (unsigned long long)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential blowup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add memoization or use iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality checks unreliable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use epsilon comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Character/string input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null terminator handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for '\\0' in base case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1412-interview-corner",
      children: "14.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-recursion-interview-questions",
      children: "Top Recursion Interview Questions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement factorial recursively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case, recursion structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Fibonacci (all versions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion vs memoization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse a string using recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head recursion, unwinding phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tower of Hanoi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer, recurrence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate all permutations of a string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking, swapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking, constraint checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-constraint backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word break problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion with memoization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate expression tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion, post-order traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flood fill (paint bucket)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-directional recursion on grid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-mistakes",
      children: "Common Interview Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing base case"
        }), " → Always verify the base case exists and is reachable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong base case condition"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (n == 0)"
        }), " fails for negative ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (n <= 0)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forgetting return in base case"
        }), " → Non-void function must return a value in ALL paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not making progress"
        }), " → Recursive call must modify arguments toward base"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential without memoization"
        }), " → Interviewers expect you to identify and fix this"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack overflow blind spot"
        }), " → Always discuss space complexity of stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts-to-demonstrate-in-interviews",
      children: "Key Concepts to Demonstrate in Interviews"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Show It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base case correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents infinite recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State it explicitly: \"If n reaches 0, return\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Progress guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show that each call reduces the problem size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space complexity awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculate max depth: \"This uses O(n) stack space\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization opportunity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms exponential to polynomial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"We can cache results to avoid recomputation\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail recursion awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization potential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"If the compiler supports TCO, this can be O(1) space\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical engineering judgment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"For large n, iteration avoids stack overflow\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discussion-questions",
      children: "Discussion Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Why is the base case the most important part of a recursive function?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: Without a correct base case, recursion never terminates → it either recurses infinitely until stack overflow or returns incorrect results. The base case is the guarantee that the function will eventually stop. It's the fundamental contract that makes recursion safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: When would you prefer recursion over iteration in production code?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: For tree traversal (file systems, ASTs, DOM), divide-and-conquer algorithms (merge sort, quick sort), and backtracking (N-Queens, Sudoku). For simple linear operations, iteration is always preferred. The decision hinges on whether the problem's natural structure is recursive."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: How does the call stack limit recursion depth in C?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: Each recursive call pushes a frame (~24-48 bytes plus locals). The default stack is 1-8 MB depending on platform. For a function with 32-byte frames on a 1 MB stack, max depth is ~32,000 calls. On an 8 MB stack, it's ~262,000 calls. Embedded systems may have only 1-64 KB of stack, limiting depth to a few hundred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Can all recursive functions be converted to iteration?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: Yes. Recursion uses the call stack as an implicit data structure. Any recursive function can be converted to iteration by using an explicit stack (or other data structures like queues). This is how compilers implement recursion internally. The reverse is also true: any loop can be converted to recursion (though not always naturally)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: What is tail call optimization and why is it important?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: TCO transforms a tail-recursive call into a jump, reusing the current stack frame. This reduces space complexity from O(n) to O(1) and eliminates the function call overhead. It's critical for writing recursion that won't overflow the stack. Without TCO, deep recursion is dangerous; with TCO, it's as safe as iteration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: How does memoization differ from tabulation in dynamic programming?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: Memoization is top-down (recursive with caching), computing values on demand. Tabulation is bottom-up (iterative), filling a table from base cases upward. Both achieve the same time complexity, but memoization only computes needed values while tabulation computes all values up to the target."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-code-snippets-for-interviews",
      children: "Quick Code Snippets for Interviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse a string using recursion:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nvoid reverse(char *s, int left, int right)\n{\n    if (left >= right) return;\n    char temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    reverse(s, left + 1, right - 1);\n}\n\nint main(void)\n{\n    char str[] = \"hello\";\n    reverse(str, 0, strlen(str) - 1);\n    printf(\"%s\\n\", str);  /* olleh */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check palindrome using recursion:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\n\nbool is_palindrome(const char *s, int left, int right)\n{\n    if (left >= right) return true;\n    if (s[left] != s[right]) return false;\n    return is_palindrome(s, left + 1, right - 1);\n}\n\nint main(void)\n{\n    printf(\"%d\\n\", is_palindrome(\"racecar\", 0, 6));  /* 1 (true) */\n    printf(\"%d\\n\", is_palindrome(\"hello\", 0, 4));    /* 0 (false) */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Power using exponentiation by squaring (optimized):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Exponentiation by squaring → O(log n) recursive */\nlong long power(int base, int exp)\n{\n    if (exp == 0) return 1;\n    if (exp % 2 == 0) {\n        long long half = power(base, exp / 2);\n        return half * half;\n    } else {\n        return base * power(base, exp - 1);\n    }\n}\n\nint main(void)\n{\n    printf(\"2^10 = %lld\\n\", power(2, 10));   /* 1024 */\n    printf(\"3^5 = %lld\\n\", power(3, 5));     /* 243 */\n    printf(\"5^0 = %lld\\n\", power(5, 0));     /* 1 */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1413-applications-in-real-systems",
      children: "14.13 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-operating-systems--file-system-traversal",
      children: "1. Operating Systems → File System Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simplified recursive directory traversal (Unix style) */\n#include <stdio.h>\n#include <dirent.h>\n#include <string.h>\n#include <sys/stat.h>\n\nvoid traverse_directory(const char *path, int depth)\n{\n    DIR *dir = opendir(path);\n    if (!dir) return;\n\n    struct dirent *entry;\n    while ((entry = readdir(dir)) != NULL) {\n        /* Skip . and .. */\n        if (strcmp(entry->d_name, \".\") == 0 ||\n            strcmp(entry->d_name, \"..\") == 0) {\n            continue;\n        }\n\n        /* Print indented entry */\n        for (int i = 0; i < depth; i++) printf(\"  \");\n        printf(\"%s\\n\", entry->d_name);\n\n        /* If directory, recurse */\n        if (entry->d_type == DT_DIR) {\n            char full_path[1024];\n            snprintf(full_path, sizeof(full_path), \"%s/%s\", path, entry->d_name);\n            traverse_directory(full_path, depth + 1);\n        }\n    }\n\n    closedir(dir);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-compilers--recursive-descent-parsing",
      children: "2. Compilers → Recursive Descent Parsing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expression grammar: E -> E + T | T; T -> T * F | F; F -> (E) | id"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simplified recursive descent parser for arithmetic expressions */\n#include <stdio.h>\n#include <ctype.h>\n\nconst char *input;\nint pos = 0;\n\nchar peek(void) { return input[pos]; }\nchar next(void) { return input[pos++]; }\n\nint parse_expression(void);\nint parse_term(void);\nint parse_factor(void);\n\nint parse_expression(void)\n{\n    int result = parse_term();\n    while (peek() == '+' || peek() == '-') {\n        char op = next();\n        int right = parse_term();\n        if (op == '+') result += right;\n        else result -= right;\n    }\n    return result;\n}\n\nint parse_term(void)\n{\n    int result = parse_factor();\n    while (peek() == '*' || peek() == '/') {\n        char op = next();\n        int right = parse_factor();\n        if (op == '*') result *= right;\n        else result /= right;\n    }\n    return result;\n}\n\nint parse_factor(void)\n{\n    if (peek() == '(') {\n        next(); /* consume '(' */\n        int result = parse_expression();\n        next(); /* consume ')' */\n        return result;\n    }\n    int value = 0;\n    while (isdigit(peek())) {\n        value = value * 10 + (next() - '0');\n    }\n    return value;\n}\n\nint main(void)\n{\n    input = \"3+4*2\";\n    printf(\"%s = %d\\n\", input, parse_expression());\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3+4*2 = 11"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-graphics--subdivision-surfaces",
      children: "3. Graphics → Subdivision Surfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Recursive midpoint subdivision for a line segment */\n#include <stdio.h>\n\ntypedef struct {\n    double x, y;\n} Point;\n\nvoid subdivide(Point p1, Point p2, int depth)\n{\n    if (depth == 0) {\n        printf(\"Line from (%.1f, %.1f) to (%.1f, %.1f)\\n\",\n               p1.x, p1.y, p2.x, p2.y);\n        return;\n    }\n\n    Point mid = {\n        (p1.x + p2.x) / 2.0,\n        (p1.y + p2.y) / 2.0\n    };\n\n    subdivide(p1, mid, depth - 1);\n    subdivide(mid, p2, depth - 1);\n}\n\nint main(void)\n{\n    printf(\"Midpoint subdivision, depth 2:\\n\");\n    Point a = {0, 0}, b = {10, 0};\n    subdivide(a, b, 2);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Midpoint subdivision, depth 2:\nLine from (0.0, 0.0) to (2.5, 0.0)\nLine from (2.5, 0.0) to (5.0, 0.0)\nLine from (5.0, 0.0) to (7.5, 0.0)\nLine from (7.5, 0.0) to (10.0, 0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-artificial-intelligence--minimax-game-tree",
      children: "4. Artificial Intelligence → Minimax Game Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simplified Minimax for tic-tac-toe (conceptual) */\n#include <stdio.h>\n\n#define WIN 10\n#define DRAW 0\n#define LOSE -10\n\nint evaluate(char board[3][3])\n{\n    /* Check rows, columns, diagonals for winner */\n    for (int i = 0; i < 3; i++) {\n        if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2])\n            return board[i][0] == 'X' ? WIN : LOSE;\n        if (board[0][i] != ' ' && board[0][i] == board[1][i] && board[1][i] == board[2][i])\n            return board[0][i] == 'X' ? WIN : LOSE;\n    }\n    if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2])\n        return board[0][0] == 'X' ? WIN : LOSE;\n    if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0])\n        return board[0][2] == 'X' ? WIN : LOSE;\n\n    return DRAW;\n}\n\nint is_full(char board[3][3])\n{\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 3; j++)\n            if (board[i][j] == ' ') return 0;\n    return 1;\n}\n\n/* Recursive minimax → returns best score for current player */\nint minimax(char board[3][3], int is_maximizing)\n{\n    int score = evaluate(board);\n    if (score != DRAW || is_full(board)) return score;\n\n    if (is_maximizing) {\n        int best = -1000;\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                if (board[i][j] == ' ') {\n                    board[i][j] = 'X';\n                    int val = minimax(board, 0);\n                    board[i][j] = ' ';     /* backtrack */\n                    if (val > best) best = val;\n                }\n            }\n        }\n        return best;\n    } else {\n        int best = 1000;\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                if (board[i][j] == ' ') {\n                    board[i][j] = 'O';\n                    int val = minimax(board, 1);\n                    board[i][j] = ' ';     /* backtrack */\n                    if (val < best) best = val;\n                }\n            }\n        }\n        return best;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-network-routing--bellman-ford-algorithm",
      children: "5. Network Routing → Bellman-Ford Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Bellman-Ford shortest-path algorithm has a natural recursive formulation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dist(v, k)"
        }), " = shortest path from source to v using at most k edges"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dist(v, k) = min(dist(v, k-1), min_{u neighbor of v} (dist(u, k-1) + w(u,v)))"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-recursion-use-cases-summary",
      children: "Real-World Recursion Use Cases Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursion Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system directory traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion (directories contain subdirectories)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive descent parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual recursion (expression -> term -> factor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subdivision surfaces, fractal rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion (each segment splits into two)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimax, game tree evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion with backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution, routing algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive resolution (query -> NS -> next NS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOM traversal, component rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree recursion (nodes contain child nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTEs (Common Table Expressions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive SQL queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical clustering, decision trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive partitioning of data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A recursive function has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "base case"
        }), " (stopping condition) and a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "recursive case"
        }), " that moves toward the base."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each recursive call creates a new ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stack frame"
        }), "; deep recursion can cause ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stack overflow"
        }), " (~32,000-262,000 frames depending on platform)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tail recursion"
        }), " places the recursive call as the final operation; compilers with TCO (GCC -O2, Clang -O1) may optimize it to iteration, reducing stack usage to O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Head recursion"
        }), " does work after the recursive call (during unwinding); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tree recursion"
        }), " makes multiple calls per invocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Direct recursion"
        }), " (function calls itself) vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "indirect recursion"
        }), " (function calls another that calls back)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear recursion"
        }), " (one call per invocation, O(n) time) vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tree recursion"
        }), " (multiple calls, potentially O(2^n) time)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classic recursive problems: factorial (O(n)), Fibonacci (naive O(2^n), memoized O(n)), Tower of Hanoi (O(2^n) moves), binary search (O(log n)), merge sort (O(n log n))."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtracking"
        }), " is recursive trial-and-error: try, check constraints, recurse, undo → used in N-Queens, Sudoku, maze solving."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursion excels for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "naturally recursive structures"
        }), " (trees, divide-and-conquer); iteration is preferred for simple linear problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memoization"
        }), " transforms exponential recursion into polynomial time by caching computed results."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the two mandatory parts of every recursive function?\nA) Loop and condition\nB) Base case and recursive case\nC) Pointer and array\nD) Stack and queue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Every recursive function needs a base case (stops recursion) and a recursive case (calls itself with modified arguments)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the worst-case stack depth for recursive binary search on an array of 1,000,000 elements?\nA) ~20 frames\nB) ~1,000,000 frames\nC) ~500,000 frames\nD) ~100 frames"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** Binary search halves the array each step. log2(1,000,000) ~ 20. So max 20 stack frames."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is a tail-recursive function?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int f(int n) { if (n<=1) return 1; return n * f(n-1); }"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int f(int n, int a) { if (n<=1) return a; return f(n-1, n*a); }"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int f(int n) { if (n<=1) return 1; return f(n-1) * n; }"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int f(int n) { if (n<=0) return 0; return n + f(n-1); }"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** In tail recursion, the recursive call is the final operation and its result is returned directly. Options A, C, and D all have pending operations after the recursive call."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the time complexity of naive recursive Fibonacci?\nA) O(n)\nB) O(n^2)\nC) O(log n)\nD) O(2^n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**D)** Each call to fib(n) creates two more calls (fib(n-1) and fib(n-2)), creating a binary tree of calls with ~2^n nodes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is backtracking in the context of recursion?\nA) Calling a function repeatedly until stack overflow\nB) Trying a candidate solution and undoing it when it fails\nC) Converting recursion to iteration\nD) Using multiple base cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Backtracking is a recursive search strategy that tries a partial solution, recurses, and if it fails, \"undoes\" the last step and tries the next option."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which of these problems is LEAST suited to a recursive solution?\nA) Traversing a binary tree\nB) Computing the sum of elements in an array\nC) Solving the N-Queens problem\nD) Performing merge sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Summing array elements is a simple linear operation best done with a loop. The other three are naturally recursive."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the minimum number of moves required to solve Tower of Hanoi with 5 disks?\nA) 15\nB) 25\nC) 31\nD) 63"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Tower of Hanoi requires 2^n - 1 moves. For n=5: 2^5 - 1 = 32 - 1 = 31."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which optimization can reduce the space complexity of a recursive function from O(n) to O(1)?\nA) Inlining\nB) Loop unrolling\nC) Tail-call optimization\nD) Memoization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Tail-call optimization (TCO) reuses the current stack frame, eliminating stack growth. Memoization improves time complexity, not stack space."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the two essential parts of every recursive function? What happens if either is missing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the call stack grow during recursion? What happens when it runs out of space?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is tail recursion? Why is it significant for optimization?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is naive recursive Fibonacci exponential? Name three ways to improve it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose recursion over iteration? When would you choose iteration over recursion?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between direct and indirect recursion? Give an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the winding and unwinding phases of recursion with an example."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digit Sum:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int sum_digits(int n)"
          }), " recursively. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sum_digits(1234)"
          }), " -> 10."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GCD:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int gcd(int a, int b)"
          }), " using Euclid's algorithm recursively."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reverse Print:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void print_reverse(const char *s)"
          }), " that prints a string in reverse without loops → recurse until '\\0', then print on unwinding."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Power:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int power(int base, int exp)"
          }), " for non-negative exponents. Then optimize with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "exponentiation by squaring"
          }), ": if exp is even, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "power(base, exp/2)^2"
          }), "; if odd, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "base x power(base, exp-1)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Palindrome Check:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int is_palindrome(const char *s, int start, int end)"
          }), " recursively. Check first and last characters, then recurse on the substring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tower of Hanoi Step Counter:"
          }), " Modify the Tower of Hanoi program to return the move number without using a global variable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flood Fill:"
          }), " Implement a recursive flood-fill function that fills a connected region in a 2D grid with a new color."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "N-Queens Solver:"
          }), " Solve the N-Queens problem for N=8. Count all 92 solutions. Extend to print the first 5 solutions as chessboards."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sudoku Solver:"
          }), " Implement a recursive Sudoku solver using backtracking. Given a partially filled 9x9 grid, fill all empty cells such that each row, column, and 3x3 box contains digits 1-9."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Expression Evaluator:"
          }), " Build a recursive expression evaluator that handles +, -, *, /, parentheses, and multi-digit numbers. Use recursive descent parsing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Knight's Tour:"
          }), " Find a sequence of moves for a knight on an NxN chessboard such that the knight visits every square exactly once. Use backtracking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maze with Multiple Paths:"
          }), " Modify the maze solver to find and print ALL paths from start to destination, not just the first one found."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Recursion is a powerful tool, but it's not always the right tool. For simple linear problems, use iteration. For tree-structured problems, divide-and-conquer, and backtracking, recursion often produces the clearest code. Always consider stack depth before choosing recursion in production code."]
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