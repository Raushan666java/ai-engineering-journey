"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61903],{

/***/ 43916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_11_dma_md_076_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-11-dma-md-076.json
const site_docs_courses_c_programming_11_dma_md_076_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/11-dma","title":"Chapter 11: Dynamic Memory Allocation","description":"Previous File Handling","source":"@site/docs/courses/c-programming/11-dma.md","sourceDirName":"courses/c-programming","slug":"/c-programming/11-dma","permalink":"/ai-engineering-journey/c-programming/11-dma","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-dma","slug":"/c-programming/11-dma","title":"Chapter 11: Dynamic Memory Allocation","sidebar_label":"Chapter 11: Dynamic Memory Allocation","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Structures and Unions","permalink":"/ai-engineering-journey/c-programming/10-structures-unions"},"next":{"title":"Chapter 12: File Handling","permalink":"/ai-engineering-journey/c-programming/12-file-handling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/11-dma.md


const frontMatter = {
	id: '11-dma',
	slug: '/c-programming/11-dma',
	title: 'Chapter 11: Dynamic Memory Allocation',
	sidebar_label: 'Chapter 11: Dynamic Memory Allocation',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Dynamic Memory Allocation';

const assets = {

};

/*End Image Gallery*/


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
  "level": 3
}, {
  "value": "11.1 Static vs Dynamic Memory Allocation",
  "id": "111-static-vs-dynamic-memory-allocation",
  "level": 2
}, {
  "value": "Real-World Analogy: Library vs Warehouse",
  "id": "real-world-analogy-library-vs-warehouse",
  "level": 3
}, {
  "value": "What Is Static Allocation?",
  "id": "what-is-static-allocation",
  "level": 3
}, {
  "value": "What Is Automatic Allocation?",
  "id": "what-is-automatic-allocation",
  "level": 3
}, {
  "value": "What Is Dynamic Allocation?",
  "id": "what-is-dynamic-allocation",
  "level": 3
}, {
  "value": "Numbered Steps for Dynamic Memory Management",
  "id": "numbered-steps-for-dynamic-memory-management",
  "level": 3
}, {
  "value": "Pseudocode for Dynamic Allocation",
  "id": "pseudocode-for-dynamic-allocation",
  "level": 3
}, {
  "value": "Dry Run: Dynamic Array Lifecycle",
  "id": "dry-run-dynamic-array-lifecycle",
  "level": 3
}, {
  "value": "Static vs Dynamic Allocation → Comparison",
  "id": "static-vs-dynamic-allocation--comparison",
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
  "value": "11.2 Stack vs Heap",
  "id": "112-stack-vs-heap",
  "level": 2
}, {
  "value": "Real-World Analogy: Hotel vs Warehouse",
  "id": "real-world-analogy-hotel-vs-warehouse",
  "level": 3
}, {
  "value": "Stack: Fast, Automatic, Fixed-Size",
  "id": "stack-fast-automatic-fixed-size",
  "level": 3
}, {
  "value": "Heap: Flexible, Manual, Potentially Large",
  "id": "heap-flexible-manual-potentially-large",
  "level": 3
}, {
  "value": "Stack vs Heap → Full Comparison",
  "id": "stack-vs-heap--full-comparison",
  "level": 3
}, {
  "value": "Stack Allocation: Numbered Steps",
  "id": "stack-allocation-numbered-steps",
  "level": 3
}, {
  "value": "Heap Allocation: Numbered Steps",
  "id": "heap-allocation-numbered-steps",
  "level": 3
}, {
  "value": "Dry Run: Stack vs Heap Timeline",
  "id": "dry-run-stack-vs-heap-timeline",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "11.3 Memory Layout of a C Program",
  "id": "113-memory-layout-of-a-c-program",
  "level": 2
}, {
  "value": "Segment Details",
  "id": "segment-details",
  "level": 3
}, {
  "value": "Code Example: Observing the Memory Layout",
  "id": "code-example-observing-the-memory-layout",
  "level": 3
}, {
  "value": "Why the Separation Matters",
  "id": "why-the-separation-matters",
  "level": 3
}, {
  "value": "Dry Run: Address Verification",
  "id": "dry-run-address-verification",
  "level": 3
}, {
  "value": "11.4 <code>malloc</code> → Memory Allocation",
  "id": "114-malloc--memory-allocation",
  "level": 2
}, {
  "value": "Real-World Analogy: Warehouse Pallet Reservation",
  "id": "real-world-analogy-warehouse-pallet-reservation",
  "level": 3
}, {
  "value": "Signature",
  "id": "signature",
  "level": 3
}, {
  "value": "Numbered Steps to Use malloc",
  "id": "numbered-steps-to-use-malloc",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Basic Example",
  "id": "basic-example",
  "level": 3
}, {
  "value": "Allocating for Any Type",
  "id": "allocating-for-any-type",
  "level": 3
}, {
  "value": "malloc(0) → What Happens?",
  "id": "malloc0--what-happens",
  "level": 3
}, {
  "value": "Dry Run: malloc Tracking",
  "id": "dry-run-malloc-tracking",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of malloc",
  "id": "advantages-and-disadvantages-of-malloc",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "Integer Overflow Prevention",
  "id": "integer-overflow-prevention",
  "level": 3
}, {
  "value": "11.5 <code>calloc</code> → Contiguous Allocation",
  "id": "115-calloc--contiguous-allocation",
  "level": 2
}, {
  "value": "Real-World Analogy: Clean Pallet",
  "id": "real-world-analogy-clean-pallet",
  "level": 3
}, {
  "value": "Signature",
  "id": "signature-1",
  "level": 3
}, {
  "value": "Numbered Steps to Use calloc",
  "id": "numbered-steps-to-use-calloc",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Basic Example",
  "id": "basic-example-1",
  "level": 3
}, {
  "value": "calloc vs malloc + memset",
  "id": "calloc-vs-malloc--memset",
  "level": 3
}, {
  "value": "Why Zero-Initialization Matters",
  "id": "why-zero-initialization-matters",
  "level": 3
}, {
  "value": "calloc for Struct Arrays",
  "id": "calloc-for-struct-arrays",
  "level": 3
}, {
  "value": "Dry Run: calloc Allocation",
  "id": "dry-run-calloc-allocation",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-1",
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
  "value": "11.6 <code>realloc</code> → Resizing Memory",
  "id": "116-realloc--resizing-memory",
  "level": 2
}, {
  "value": "Real-World Analogy: Expanding a Warehouse Pallet",
  "id": "real-world-analogy-expanding-a-warehouse-pallet",
  "level": 3
}, {
  "value": "Signature",
  "id": "signature-2",
  "level": 3
}, {
  "value": "The Critical Rule: Always Use a Temporary Pointer",
  "id": "the-critical-rule-always-use-a-temporary-pointer",
  "level": 3
}, {
  "value": "Numbered Steps to Use realloc",
  "id": "numbered-steps-to-use-realloc",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Basic Example: Growing and Shrinking",
  "id": "basic-example-growing-and-shrinking",
  "level": 3
}, {
  "value": "realloc with NULL (Acts Like malloc)",
  "id": "realloc-with-null-acts-like-malloc",
  "level": 3
}, {
  "value": "Dry Run: realloc In-Place vs Move",
  "id": "dry-run-realloc-in-place-vs-move",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-2",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "Detecting realloc Move",
  "id": "detecting-realloc-move",
  "level": 3
}, {
  "value": "11.7 <code>free</code> → Deallocating Memory",
  "id": "117-free--deallocating-memory",
  "level": 2
}, {
  "value": "Real-World Analogy: Returning the Warehouse Pallet",
  "id": "real-world-analogy-returning-the-warehouse-pallet",
  "level": 3
}, {
  "value": "Signature",
  "id": "signature-3",
  "level": 3
}, {
  "value": "Numbered Steps to Use free",
  "id": "numbered-steps-to-use-free",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Basic Example",
  "id": "basic-example-2",
  "level": 3
}, {
  "value": "Safe Free Macro",
  "id": "safe-free-macro",
  "level": 3
}, {
  "value": "What Happens Inside free?",
  "id": "what-happens-inside-free",
  "level": 3
}, {
  "value": "Memory Header Layout",
  "id": "memory-header-layout",
  "level": 3
}, {
  "value": "Dry Run: Free and Coalesce",
  "id": "dry-run-free-and-coalesce",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-3",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 3
}, {
  "value": "11.8 malloc vs calloc vs realloc → Full Comparison",
  "id": "118-malloc-vs-calloc-vs-realloc--full-comparison",
  "level": 2
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "Decision Flowchart",
  "id": "decision-flowchart",
  "level": 3
}, {
  "value": "Code: Three Functions Side by Side",
  "id": "code-three-functions-side-by-side",
  "level": 3
}, {
  "value": "When to Use What",
  "id": "when-to-use-what",
  "level": 3
}, {
  "value": "Complexity Comparison",
  "id": "complexity-comparison",
  "level": 3
}, {
  "value": "Advantages and Disadvantages Summary",
  "id": "advantages-and-disadvantages-summary",
  "level": 3
}, {
  "value": "11.9 Memory Leak",
  "id": "119-memory-leak",
  "level": 2
}, {
  "value": "Real-World Analogy: Library Book Never Returned",
  "id": "real-world-analogy-library-book-never-returned",
  "level": 3
}, {
  "value": "What Is a Memory Leak?",
  "id": "what-is-a-memory-leak",
  "level": 3
}, {
  "value": "Causes of Memory Leaks",
  "id": "causes-of-memory-leaks",
  "level": 3
}, {
  "value": "Leak Example: Every Call Loses Memory",
  "id": "leak-example-every-call-loses-memory",
  "level": 3
}, {
  "value": "Leak Detection via Free List Tracking",
  "id": "leak-detection-via-free-list-tracking",
  "level": 3
}, {
  "value": "Impact of Memory Leaks",
  "id": "impact-of-memory-leaks",
  "level": 3
}, {
  "value": "How to Prevent Memory Leaks",
  "id": "how-to-prevent-memory-leaks",
  "level": 3
}, {
  "value": "Detecting Leaks with Address Sanitizer",
  "id": "detecting-leaks-with-address-sanitizer",
  "level": 3
}, {
  "value": "11.10 Dangling Pointer",
  "id": "1110-dangling-pointer",
  "level": 2
}, {
  "value": "Real-World Analogy: Expired Library Card",
  "id": "real-world-analogy-expired-library-card",
  "level": 3
}, {
  "value": "What Is a Dangling Pointer?",
  "id": "what-is-a-dangling-pointer",
  "level": 3
}, {
  "value": "Three Ways to Create a Dangling Pointer",
  "id": "three-ways-to-create-a-dangling-pointer",
  "level": 3
}, {
  "value": "Types of Dangling Pointers",
  "id": "types-of-dangling-pointers",
  "level": 3
}, {
  "value": "Prevention Techniques",
  "id": "prevention-techniques",
  "level": 3
}, {
  "value": "Dry Run: Dangling Pointer Lifecycle",
  "id": "dry-run-dangling-pointer-lifecycle",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-4",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "11.11 Memory Corruption",
  "id": "1111-memory-corruption",
  "level": 2
}, {
  "value": "Real-World Analogy: Writing in the Wrong Ledger",
  "id": "real-world-analogy-writing-in-the-wrong-ledger",
  "level": 3
}, {
  "value": "Types of Memory Corruption",
  "id": "types-of-memory-corruption",
  "level": 3
}, {
  "value": "Buffer Overflow Example",
  "id": "buffer-overflow-example",
  "level": 3
}, {
  "value": "Heap Metadata Corruption",
  "id": "heap-metadata-corruption",
  "level": 3
}, {
  "value": "Double Free Exploitation",
  "id": "double-free-exploitation",
  "level": 3
}, {
  "value": "Detecting Memory Corruption at Free Time",
  "id": "detecting-memory-corruption-at-free-time",
  "level": 3
}, {
  "value": "Prevention and Detection",
  "id": "prevention-and-detection",
  "level": 3
}, {
  "value": "Using Address Sanitizer",
  "id": "using-address-sanitizer",
  "level": 3
}, {
  "value": "11.12 Dynamic Arrays (Growable Arrays)",
  "id": "1112-dynamic-arrays-growable-arrays",
  "level": 2
}, {
  "value": "Real-World Analogy: Expanding Waiting List",
  "id": "real-world-analogy-expanding-waiting-list",
  "level": 3
}, {
  "value": "Dynamic Array Implementation",
  "id": "dynamic-array-implementation",
  "level": 3
}, {
  "value": "Dry Run: Dynamic Array Growth",
  "id": "dry-run-dynamic-array-growth",
  "level": 3
}, {
  "value": "Complexity of Dynamic Array Operations",
  "id": "complexity-of-dynamic-array-operations",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-6",
  "level": 3
}, {
  "value": "11.13 Detecting Memory Leaks with Valgrind",
  "id": "1113-detecting-memory-leaks-with-valgrind",
  "level": 2
}, {
  "value": "What Is Valgrind?",
  "id": "what-is-valgrind",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "Leaky Program Example",
  "id": "leaky-program-example",
  "level": 3
}, {
  "value": "Clean Program (No Leaks)",
  "id": "clean-program-no-leaks",
  "level": 3
}, {
  "value": "Detecting Use-After-Free with Valgrind",
  "id": "detecting-use-after-free-with-valgrind",
  "level": 3
}, {
  "value": "Valgrind Options",
  "id": "valgrind-options",
  "level": 3
}, {
  "value": "Understanding Leak Types",
  "id": "understanding-leak-types",
  "level": 3
}, {
  "value": "Integrating Valgrind into Your Workflow",
  "id": "integrating-valgrind-into-your-workflow",
  "level": 3
}, {
  "value": "11.14 Best Practices",
  "id": "1114-best-practices",
  "level": 2
}, {
  "value": "The Golden Rules of Dynamic Memory",
  "id": "the-golden-rules-of-dynamic-memory",
  "level": 3
}, {
  "value": "Best Practice Examples",
  "id": "best-practice-examples",
  "level": 3
}, {
  "value": "Practice Checklist",
  "id": "practice-checklist",
  "level": 3
}, {
  "value": "11.15 Complete Comparison Tables",
  "id": "1115-complete-comparison-tables",
  "level": 2
}, {
  "value": "11.15.1 malloc vs calloc vs realloc vs free",
  "id": "11151-malloc-vs-calloc-vs-realloc-vs-free",
  "level": 3
}, {
  "value": "11.15.2 Static vs Automatic vs Dynamic Allocation",
  "id": "11152-static-vs-automatic-vs-dynamic-allocation",
  "level": 3
}, {
  "value": "11.15.3 Stack vs Heap → Detailed",
  "id": "11153-stack-vs-heap--detailed",
  "level": 3
}, {
  "value": "11.15.4 Memory Error Types",
  "id": "11154-memory-error-types",
  "level": 3
}, {
  "value": "11.16 Interview Corner",
  "id": "1116-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between <code>malloc</code> and <code>calloc</code>?",
  "id": "q1-what-is-the-difference-between-malloc-and-calloc",
  "level": 3
}, {
  "value": "Q2: Why must you use a temporary pointer with <code>realloc</code>?",
  "id": "q2-why-must-you-use-a-temporary-pointer-with-realloc",
  "level": 3
}, {
  "value": "Q3: What causes a memory leak? How do you prevent one?",
  "id": "q3-what-causes-a-memory-leak-how-do-you-prevent-one",
  "level": 3
}, {
  "value": "Q4: What is a dangling pointer and how do you prevent it?",
  "id": "q4-what-is-a-dangling-pointer-and-how-do-you-prevent-it",
  "level": 3
}, {
  "value": "Q5: How does <code>realloc</code> handle failure?",
  "id": "q5-how-does-realloc-handle-failure",
  "level": 3
}, {
  "value": "Q6: Can you do pointer arithmetic on <code>void*</code>?",
  "id": "q6-can-you-do-pointer-arithmetic-on-void",
  "level": 3
}, {
  "value": "Q7: What is the memory layout of a C program?",
  "id": "q7-what-is-the-memory-layout-of-a-c-program",
  "level": 3
}, {
  "value": "Q8: What is the difference between stack and heap allocation?",
  "id": "q8-what-is-the-difference-between-stack-and-heap-allocation",
  "level": 3
}, {
  "value": "Q9: What happens when <code>free</code> is called with a pointer that was not returned by <code>malloc</code>?",
  "id": "q9-what-happens-when-free-is-called-with-a-pointer-that-was-not-returned-by-malloc",
  "level": 3
}, {
  "value": "Q10: How do you detect memory leaks at runtime?",
  "id": "q10-how-do-you-detect-memory-leaks-at-runtime",
  "level": 3
}, {
  "value": "Q11: What is memory fragmentation? Why is it bad?",
  "id": "q11-what-is-memory-fragmentation-why-is-it-bad",
  "level": 3
}, {
  "value": "Q12: How does <code>malloc</code> manage memory internally?",
  "id": "q12-how-does-malloc-manage-memory-internally",
  "level": 3
}, {
  "value": "Q13: What is the difference between <code>free</code> and <code>delete</code>?",
  "id": "q13-what-is-the-difference-between-free-and-delete",
  "level": 3
}, {
  "value": "Q14: What does <code>sizeof(*ptr)</code> vs <code>sizeof(type)</code> give you when <code>ptr</code> is a <code>NULL</code> pointer?",
  "id": "q14-what-does-sizeofptr-vs-sizeoftype-give-you-when-ptr-is-a-null-pointer",
  "level": 3
}, {
  "value": "Q15: Implement a safe <code>malloc</code> wrapper with error reporting.",
  "id": "q15-implement-a-safe-malloc-wrapper-with-error-reporting",
  "level": 3
}, {
  "value": "Q16: How do you implement a dynamically growing array in C?",
  "id": "q16-how-do-you-implement-a-dynamically-growing-array-in-c",
  "level": 3
}, {
  "value": "Q17: What is the difference between <code>int *p = malloc(10 * sizeof(int))</code> and <code>int p[10]</code>?",
  "id": "q17-what-is-the-difference-between-int-p--malloc10--sizeofint-and-int-p10",
  "level": 3
}, {
  "value": "Q18: What is the &quot;N+1&quot; problem with dynamic string allocation?",
  "id": "q18-what-is-the-n1-problem-with-dynamic-string-allocation",
  "level": 3
}, {
  "value": "Q19: How does the OS handle a <code>malloc</code> request for a very large block?",
  "id": "q19-how-does-the-os-handle-a-malloc-request-for-a-very-large-block",
  "level": 3
}, {
  "value": "Q20: What is a pool (arena) allocator and why use one?",
  "id": "q20-what-is-a-pool-arena-allocator-and-why-use-one",
  "level": 3
}, {
  "value": "11.17 Applications in Real Systems",
  "id": "1117-applications-in-real-systems",
  "level": 2
}, {
  "value": "11.17.1 Linux Kernel <code>kmalloc</code>",
  "id": "11171-linux-kernel-kmalloc",
  "level": 3
}, {
  "value": "11.17.2 Embedded <code>malloc</code> Implementations",
  "id": "11172-embedded-malloc-implementations",
  "level": 3
}, {
  "value": "11.17.3 Dynamic String Duplication",
  "id": "11173-dynamic-string-duplication",
  "level": 3
}, {
  "value": "11.17.4 Dynamic Array of Strings (e.g., Reading File Lines)",
  "id": "11174-dynamic-array-of-strings-eg-reading-file-lines",
  "level": 3
}, {
  "value": "11.17.5 Linked List Node Allocation",
  "id": "11175-linked-list-node-allocation",
  "level": 3
}, {
  "value": "11.17.6 Resizable Hash Table (Chaining)",
  "id": "11176-resizable-hash-table-chaining",
  "level": 3
}, {
  "value": "11.18 Summary and Exercises",
  "id": "1118-summary-and-exercises",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}, {
  "value": "Common Pitfalls Checklist",
  "id": "common-pitfalls-checklist",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 3
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 4
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 4
}, {
  "value": "Challenge Problem: Arena (Pool) Allocator",
  "id": "challenge-problem-arena-pool-allocator",
  "level": 4
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
        id: "chapter-11-dynamic-memory-allocation",
        children: "Chapter 11: Dynamic Memory Allocation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/10-structures-unions",
          children: "Structures and Unions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/12-file-handling",
          children: "File Handling"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between static, automatic, and dynamic memory allocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the complete memory layout of a C program (text, data, BSS, heap, stack)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocate memory at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release memory with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), " to prevent leaks"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect and avoid memory leaks, dangling pointers, double-free errors, and memory corruption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Valgrind to verify memory correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on dynamic memory with confidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize real-world allocation patterns in systems programming"
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
        href: "../../assets/images/lessons/c-programming/11-dma/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/11-dma/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/11-dma/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/11-dma/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/11-dma/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/11-dma/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Covered"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers (address-of, dereference, pointer arithmetic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/c-programming/09-pointers",
              children: "Chapter 9"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays (declaration, indexing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/c-programming/06-arrays",
              children: "Chapter 6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions (pass by value, return types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/c-programming/08-functions",
              children: "Chapter 8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " operator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/c-programming/06-arrays",
              children: "Chapter 6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/c-programming/10-structures-unions",
              children: "Chapter 10"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Static vs Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static: fixed at compile time; Dynamic: runtime-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack for small/fixed; Heap for large/variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text(Code) + Data + BSS + Heap + Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap grows up, Stack grows down → collision = stack overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "malloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates uninitialized raw bytes from heap"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void *"
            }), " or NULL; always check return"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates + zero-initializes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safer for arrays; slightly slower due to zeroing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resizes existing allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May relocate → use temp pointer to avoid leak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns memory to heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set pointer to NULL after free to prevent dangling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocated memory with no remaining reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every malloc must have matching free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to freed memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL after free; never trust a freed pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing outside allocated bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds-check all array accesses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"11.1 Static vs Dynamic\"] --> B[\"11.2 Stack vs Heap\"]\n    B --> C[\"11.3 Memory Layout\"]\n    C --> D[\"11.4 malloc\"]\n    D --> E[\"11.5 calloc\"]\n    E --> F[\"11.6 realloc\"]\n    F --> G[\"11.7 free\"]\n    G --> H[\"11.8 Comparison Tables\"]\n    H --> I[\"11.9 Memory Leak\"]\n    I --> J[\"11.10 Dangling Pointer\"]\n    J --> K[\"11.11 Memory Corruption\"]\n    K --> L[\"11.12 Dynamic Arrays\"]\n    L --> M[\"11.13 Valgrind\"]\n    M --> N[\"11.14 Best Practices\"]\n    N --> O[\"11.15 Interview Corner\"]\n    O --> P[\"11.16 Applications\"]\n    P --> Q[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-11-dma.png",
        alt: "C Dynamic Memory Allocation: malloc, calloc, realloc, free and Common Errors"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-static-vs-dynamic-memory-allocation",
      children: "11.1 Static vs Dynamic Memory Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-library-vs-warehouse",
      children: "Real-World Analogy: Library vs Warehouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library"
      }), " (static allocation) vs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "warehouse"
      }), " (dynamic allocation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library"
      }), " has fixed shelves built into the walls. Before the library opens, the architect decides exactly how many shelves are needed, where they go, and what they hold. You cannot add a new shelf in the middle of the day → the entire structure is fixed at construction time. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static memory"
      }), ": the compiler (the architect) decides the size and lifetime of every variable before the program runs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "warehouse"
      }), " is different. When inventory arrives, you call the warehouse manager, reserve a pallet location, use it, and return it when done. If more inventory arrives tomorrow, you reserve a different spot. The warehouse can handle arbitrary amounts of material → as long as space exists. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic memory"
      }), ": you request memory at runtime, use it, and release it explicitly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-static-allocation",
      children: "What Is Static Allocation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Static allocation means the compiler determines the size and lifetime of a variable at compile time. Global variables and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), " local variables are statically allocated. Their memory is reserved in the data or BSS segment for the entire program lifetime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint global_var = 42;          /* Static → lives in .data segment */\nstatic int file_static = 10;  /* Static → file scope, .data segment */\n\nvoid func(void) {\n    static int call_count = 0; /* Static → retains value across calls */\n    call_count++;\n    printf(\"Called %d times\\n\", call_count);\n}\n\nint main(void) {\n    int local = 5;             /* Automatic → lives on stack */\n    func();\n    func();\n    func();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Called 1 times\nCalled 2 times\nCalled 3 times\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-automatic-allocation",
      children: "What Is Automatic Allocation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Local variables (declared inside a function without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), ") are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatic"
      }), ". Memory is allocated on the stack when the function is entered and freed when the function returns. The size must be known at compile time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void example(void) {\n    int arr[100];    /* Automatic → 100 ints on stack (400 bytes) */\n    /* arr is freed when example() returns */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-dynamic-allocation",
      children: "What Is Dynamic Allocation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dynamic allocation requests memory from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap"
      }), " at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), ". The programmer controls when memory is allocated and freed. The size does not need to be known at compile time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n;\n    printf(\"How many integers? \");\n    scanf(\"%d\", &n);\n\n    int *arr = (int*)malloc(n * sizeof(int));  /* Dynamic → size known only at runtime */\n    if (arr == NULL) {\n        fprintf(stderr, \"malloc failed\\n\");\n        return 1;\n    }\n\n    for (int i = 0; i < n; i++) arr[i] = i;\n    printf(\"Last element: %d\\n\", arr[n - 1]);\n\n    free(arr);   /* Must free explicitly */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "How many integers? 10\nLast element: 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-dynamic-memory-management",
      children: "Numbered Steps for Dynamic Memory Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Determine the size needed (use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " to remain portable).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " with the computed size.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Check the return value → NULL means allocation failed.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Use the allocated memory (read/write via the pointer).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " when done to return memory to the heap.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Set the pointer to NULL to prevent use-after-free."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-dynamic-allocation",
      children: "Pseudocode for Dynamic Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION allocate_array(count):\n    ptr <- malloc(count * sizeof(element))\n    IF ptr == NULL:\n        PRINT \"Allocation failed\"\n        RETURN NULL\n    END IF\n    FOR i FROM 0 TO count-1:\n        ptr[i] <- initial_value\n    END FOR\n    RETURN ptr\nEND FUNCTION\n\nFUNCTION safe_free(ptr):\n    IF ptr != NULL:\n        free(ptr)\n        ptr <- NULL\n    END IF\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-dynamic-array-lifecycle",
      children: "Dry Run: Dynamic Array Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial state:\n  heap: [empty]\n  stack: [main()]\n\nStep 1 → int n = 3;\n  stack: [main(): n = 3]\n\nStep 2 → int *arr = malloc(3 * sizeof(int));\n  heap:  [0x1000: ??, ??, ??]\n  stack: [main(): n = 3, arr = 0x1000]\n\nStep 3 → arr[0] = 10; arr[1] = 20; arr[2] = 30;\n  heap:  [0x1000: 10, 20, 30]\n\nStep 4 → free(arr); arr = NULL;\n  heap:  [0x1000: (freed)]\n  stack: [main(): n = 3, arr = NULL]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-vs-dynamic-allocation--comparison",
      children: "Static vs Dynamic Allocation → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Allocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automatic (Stack) Allocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic (Heap) Allocation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When allocated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (explicit call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When freed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function return"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            }), " call"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size known"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until freed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resizeable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via realloc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (no runtime overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (stack pointer adjust)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (system call, freelist search)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small–medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (KB–MB, stack size limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (up to virtual memory limit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaks, fragmentation, dangling pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static int x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(n)"
            })
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
            children: "Static allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) compile-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No runtime cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack pointer adjustment → nanosecond scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic allocation (malloc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freelist search; may involve brk/sbrk syscall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic deallocation (free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns block to freelist; may coalesce"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static/Automatic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant → no runtime overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower → heap management overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic lifetime management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual → leaks and dangling pointers are easy to introduce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size → cannot grow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can grow, shrink, and be freed at will"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack limited (typically 1–8 MB per thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap limited by system RAM + swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → compiler manages everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control over lifetime"
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
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow (infinite recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program crashes with segfault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use heap for deep recursion; increase stack size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Static array too large (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int a[10000000]"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program may not link or may crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use heap for large allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak → program consumes memory until OOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure every malloc has matching free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → heap corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ptr to NULL after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "malloc(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (may return NULL or unique ptr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid allocating zero bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-stack-vs-heap",
      children: "11.2 Stack vs Heap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-hotel-vs-warehouse",
      children: "Real-World Analogy: Hotel vs Warehouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hotel"
      }), ". Guests (functions) check in (are called), occupy a room (stack frame), and check out (return). The front desk knows exactly who is in which room at any moment. Rooms are assigned in strict order → the last guest to check out frees the newest room. Everything is neat, predictable, and automatic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "warehouse"
      }), ". You reserve a pallet slot (allocate), use it for as long as you need, and tell the warehouse manager when you are done (free). Different parts of the warehouse are used at different times, possibly in any order. Keeping track of what is reserved and what is free is the programmer's job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-fast-automatic-fixed-size",
      children: "Stack: Fast, Automatic, Fixed-Size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The stack is a LIFO (Last-In-First-Out) data structure. Each function call pushes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack frame"
      }), " containing local variables, return address, and saved registers. Returning pops the frame."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid baz(int x) {\n    int z = x + 1;   /* Lives in baz's stack frame */\n    printf(\"%d\\n\", z);\n}\n\nvoid bar(void) {\n    int y = 10;      /* Lives in bar's stack frame */\n    baz(y);\n}\n\nvoid foo(void) {\n    int x = 5;       /* Lives in foo's stack frame */\n    bar();\n}\n\nint main(void) {\n    foo();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack state during execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "main() called:     [main frame]\nfoo() called:      [main frame] -> [foo frame: x=5]\nbar() called:      [main frame] -> [foo frame: x=5] -> [bar frame: y=10]\nbaz() called:      [main frame] -> [foo frame: x=5] -> [bar frame: y=10] -> [baz frame: z=11]\nbaz() returns:     [main frame] -> [foo frame: x=5] -> [bar frame: y=10]\nbar() returns:     [main frame] -> [foo frame: x=5]\nfoo() returns:     [main frame]\nmain() returns:    (empty)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-flexible-manual-potentially-large",
      children: "Heap: Flexible, Manual, Potentially Large"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The heap is a pool of memory managed by the allocator (", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), "). Blocks can be allocated and freed in any order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *a = (int*)malloc(sizeof(int));    /* Allocate on heap */\n    int *b = (int*)malloc(sizeof(int));\n    *a = 10;\n    *b = 20;\n    printf(\"a=%d b=%d\\n\", *a, *b);\n    free(a);   /* Free in any order → not LIFO */\n    free(b);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Heap state:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "After malloc(a):  heap: [a_block: 10][free space...]\nAfter malloc(b):  heap: [a_block: 10][b_block: 20][free space...]\nAfter free(a):    heap: [FREE][b_block: 20][free space...]\nAfter free(b):    heap: [FREE][FREE][free space...]  (may coalesce)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-vs-heap--full-comparison",
      children: "Stack vs Heap → Full Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (1–8 MB default per thread on Linux/Windows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (up to virtual address space → GB on 64-bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast → single instruction to adjust stack pointer (~ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow → freelist search, possible syscall (~μs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic → variable dies when function returns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual → variable lives until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler-managed (push/pop frames)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmer-managed (malloc/free)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → LIFO ensures contiguous frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External fragmentation → freed blocks scatter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time known size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-determined size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downward (toward lower addresses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upward (toward higher addresses)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-thread (each thread has its own stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared → needs synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard → cannot return pointer to local variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy → pointers persist across functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow (deep recursion, large locals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leaks, dangling pointers, heap corruption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-allocation-numbered-steps",
      children: "Stack Allocation: Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Function is called.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Stack pointer (SP) decrements by frame size.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Return address and saved registers are pushed.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Local variables occupy fixed offsets from SP.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Function executes, using locals.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Function returns → SP is restored to pre-call value (all locals freed instantly)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-allocation-numbered-steps",
      children: "Heap Allocation: Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(n)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Allocator searches freelist for a block >= n bytes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " If found, block is removed from freelist; metadata header is written.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " If not found, allocator calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sbrk"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "brk"
      }), " (Unix) or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VirtualAlloc"
      }), " (Windows) to grow the heap.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Pointer past the header is returned to the caller.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Caller uses the memory.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(ptr)"
      }), " → allocator looks up header, returns block to freelist, may coalesce adjacent free blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-stack-vs-heap-timeline",
      children: "Dry Run: Stack vs Heap Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[main()]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[main()][func(): n=5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void func(int n)"
            }), " called"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[main()][func(): n=5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000: [malloc'd block, 20 bytes]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = malloc(n * sizeof(int))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[main()][func(): n=5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000: [1,2,3,4,5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop fills array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[main()]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x1000: (freed)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "free(p);"
            }), " function returns"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → SP adjustment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized → freelist best-fit/worst-fit search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → SP restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized → coalesce neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → SP + offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → pointer dereference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-1",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower by orders of magnitude"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convenience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual → error-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic size at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severely limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System memory limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → function-scope only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (contiguous, cached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scattered blocks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow → segfault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works fine (if each frame allocates separately)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large local array (int a[1000000])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow (~4 MB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works fine on heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returning pointer to local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer → UB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (heap memory persists)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multithreading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each thread has its own stack (fixed size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap is shared → must synchronize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow → immediate crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc returns NULL → checkable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-memory-layout-of-a-c-program",
      children: "11.3 Memory Layout of a C Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A running C program's memory is divided into five segments. Understanding this layout is essential for debugging, optimizing, and avoiding memory errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "High address (0xFFFFFFFF on 32-bit / 0x7FFFFFFF on Linux x86-64)\n+------------------+\n|      Stack       |  ← grows downward (local variables, function frames)\n|        ↓         |\n|                  |\n|        ↑         |\n|      Heap        |  → grows upward (dynamic allocations)\n+------------------+\n|      BSS         |  Uninitialized static variables (zero-filled at load)\n+------------------+\n|      Data        |  Initialized static variables (read/write)\n+------------------+\n|      Text (Code) |  Program instructions (read-only, often shared)\n+------------------+\n Low address (0x00400000 on 32-bit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "segment-details",
      children: "Segment Details"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read/Write?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text (Code)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only (usually)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program lifetime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int main(void) { ... }"
            }), " compiled code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialized global/static variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program lifetime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 42;"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static char buf[100] = \"hello\";"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BSS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized global/static variables (Block Started by Symbol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program lifetime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[1000];"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static int count;"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamically allocated memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(100)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables, function frames, return addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int local;"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double d;"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-observing-the-memory-layout",
      children: "Code Example: Observing the Memory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* Text segment: compiled code of functions lives here */\n\n/* Data segment: initialized globals */\nint global_init = 100;\nstatic int static_init = 200;\n\n/* BSS segment: uninitialized globals (zero-filled) */\nint global_uninit;\nstatic int static_uninit;\n\nint main(void) {\n    /* Stack segment: local variables */\n    int local = 10;\n    static int local_static = 300;  /* Data segment → not stack! */\n    const char *str = \"Hello\";      /* str is on stack; \"Hello\" literal is in .rodata (text) */\n\n    /* Heap segment */\n    int *heap_var = (int*)malloc(sizeof(int));\n    if (heap_var == NULL) return 1;\n    *heap_var = 50;\n\n    printf(\"Address ranges (approximate):\\n\");\n    printf(\"  Text (main):   %p\\n\", (void*)main);\n    printf(\"  Data (init):   %p  (global_init=%d)\\n\", (void*)&global_init, global_init);\n    printf(\"  Data (static): %p  (static_init=%d)\\n\", (void*)&static_init, static_init);\n    printf(\"  BSS (uninit):  %p\\n\", (void*)&global_uninit);\n    printf(\"  BSS (static):  %p\\n\", (void*)&static_uninit);\n    printf(\"  Stack (local): %p  (local=%d)\\n\", (void*)&local, local);\n    printf(\"  Stack (str):   %p  (str=%s)\\n\", (void*)&str, str);\n    printf(\"  Heap:          %p  (*heap_var=%d)\\n\", (void*)heap_var, *heap_var);\n\n    free(heap_var);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical on Linux x86-64 → addresses will vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address ranges (approximate):\n  Text (main):   0x401126\n  Data (init):   0x40401c  (global_init=100)\n  Data (static): 0x404020  (static_init=200)\n  BSS (uninit):  0x404040\n  BSS (static):  0x404044\n  Stack (local): 0x7fffffffde4c  (local=10)\n  Stack (str):   0x7fffffffde50  (str=Hello)\n  Heap:          0x5555555592a0  (*heap_var=50)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observe the pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text"
        }), " is at the lowest address (~0x40...)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data/BSS"
        }), " is above text (~0x40...)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap"
        }), " is at a much higher address (~0x555...)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack"
        }), " is at the highest user address (~0x7fff...), growing downward."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-the-separation-matters",
      children: "Why the Separation Matters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevent code corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text is read-only → accidental writes to code cause segfaults immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Share code"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Text can be shared between processes → only one copy of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "libc.so"
            }), " in RAM"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-fill BSS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized globals don't take space in the executable → only their size is recorded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap collision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If heap grows into stack (or vice versa), the program crashes → \"out of memory\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer overflow detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack canaries and guard pages protect against writes beyond local arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-address-verification",
      children: "Dry Run: Address Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume a Linux process with this approximate layout:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0x400000 → 0x401000: Text segment (code)\n0x404000 → 0x405000: Data segment (initialized globals)\n0x405000 → 0x406000: BSS segment (uninitialized globals)\n0x1000000 → 0x2000000: Heap (grows upward)\n0x7ffffffde000 → 0x7fffffffffff: Stack (grows downward)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main()"
            }), " function code"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000–0x4000ff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~256 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "global_init = 100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x404000–0x404003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "global_uninit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x405000–0x405003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p = malloc(1000)"
            }), " → p"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000100–0x10004e7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1008 bytes (8 header + 1000 data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "local = 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x7ffffffde040–0x7ffffffde043"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "114-malloc--memory-allocation",
      children: ["11.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " → Memory Allocation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-warehouse-pallet-reservation",
      children: "Real-World Analogy: Warehouse Pallet Reservation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You walk into a warehouse and tell the manager: \"I need a pallet that can hold 400 kg.\" The manager finds an empty spot, writes the address on a slip of paper, and hands it to you. The pallet may have leftover scraps from the last shipment → it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not cleaned"
      }), ". You must clear it yourself before putting your items on it. When you are done, you return the slip and the manager marks the spot as available again."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " is that manager. It finds a free block, returns its address, and does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " clean (initialize) the memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature",
      children: "Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void *malloc(size_t size);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), ": number of bytes to allocate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Returns"
        }), ": pointer to the first byte of the allocated block, or NULL on failure."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The returned pointer is aligned to at least 16 bytes (on 64-bit systems) so it can hold any data type."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-use-malloc",
      children: "Numbered Steps to Use malloc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Compute the total bytes needed using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(type) * count"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(total_bytes)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Check if the return is NULL → if so, handle the error.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Optionally cast the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), " to the desired type (required in C++, optional in C).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Use the memory (initialize it first → it is uninitialized!).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(ptr)"
      }), " when done."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION malloc_safe(size):\n    ptr <- malloc(size)\n    IF ptr == NULL:\n        PRINT \"malloc of\", size, \"bytes failed\"\n        EXIT or return NULL\n    END IF\n    RETURN ptr\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-example",
      children: "Basic Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n\n    if (arr == NULL) {\n        fprintf(stderr, \"malloc failed for %d integers\\n\", n);\n        return 1;\n    }\n\n    /* Initialize → malloc returns uninitialized memory */\n    for (int i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n\n    printf(\"Array contents: \");\n    for (int i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array contents: 10 20 30 40 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "allocating-for-any-type",
      children: "Allocating for Any Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main(void) {\n    /* Allocate a single struct */\n    struct Point *p = (struct Point*)malloc(sizeof(struct Point));\n    if (p == NULL) return 1;\n    p->x = 10;\n    p->y = 20;\n    printf(\"Point: (%d, %d)\\n\", p->x, p->y);\n    free(p);\n\n    /* Allocate an array of structs */\n    struct Point *points = (struct Point*)malloc(3 * sizeof(struct Point));\n    if (points == NULL) return 1;\n    for (int i = 0; i < 3; i++) {\n        points[i].x = i * 5;\n        points[i].y = i * 10;\n    }\n    for (int i = 0; i < 3; i++) {\n        printf(\"points[%d]: (%d, %d)\\n\", i, points[i].x, points[i].y);\n    }\n    free(points);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Point: (10, 20)\npoints[0]: (0, 0)\npoints[1]: (5, 10)\npoints[2]: (10, 20)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "malloc0--what-happens",
      children: "malloc(0) → What Happens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    void *p = malloc(0);\n    printf(\"malloc(0) returned: %p\\n\", p);\n    /* p may be NULL or a unique non-NULL pointer */\n    free(p);  /* free(NULL) is safe; free(unique_ptr) is also safe */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (implementation-defined):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(0) returned: 0x5555555592a0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C standard says ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(0)"
      }), " may return NULL ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "or"
      }), " a valid non-NULL pointer that cannot be dereferenced. Both are conforming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-malloc-tracking",
      children: "Dry Run: malloc Tracking"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[FREE: 0x1000–0x1FFF (4 KB available)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *a = malloc(4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[BLOCK: 0x1000–0x1007 (8 bytes: 4 hdr + 4 data)] [FREE: remainder]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocator rounds up, adds header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*a = 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[BLOCK: a=42] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *b = malloc(8)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[BLOCK: a=42] [BLOCK: b: 0x1008–0x1017 (8 hdr+8 data)] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[FREE: 0x1000–0x1007] [BLOCK: b] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a's block returned to freelist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *c = malloc(4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[BLOCK: c: 0x1000 (reused)] [BLOCK: b] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freelist block reused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(b); free(c)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[FREE: 0x1000–0x1017 (coalesced)] [FREE: remainder]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent blocks coalesced"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) + O(1) header overhead"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Freelist search; may trigger ", (0,jsx_runtime.jsx)(_components.code, {
              children: "brk"
            }), " syscall"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Access ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr[i]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Free ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ptr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coalescing adjacent free blocks is O(1) with boundary tags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocation from freelist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(freelist size) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-fit may scan entire freelist; segregated lists are O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-malloc",
      children: "Advantages and Disadvantages of malloc"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate any size at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead: each allocation has a metadata header (8–16 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persists until freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual management → easy to forget free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reusability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freed blocks are reused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation → free blocks may be too small for future allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard C library → everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call overhead for initial heap growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns pointers aligned for any type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space if you allocate many tiny objects (each has header)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "malloc returns NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocation failed → out of memory"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Always check"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (ptr == NULL) handle_error();"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "malloc(0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May return NULL or unique non-NULL pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid allocating 0 bytes; treat as error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "malloc(SIZE_MAX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always fails (impossible allocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for overflow when computing size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dereferencing NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segfault (undefined behavior)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never dereference without NULL check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integer overflow in size"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(n * sizeof(int))"
            }), " where n is huge → wraps around"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use calloc (checks overflow) or check manually: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n > SIZE_MAX / sizeof(int)) error;"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "malloc very large size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May succeed (overcommit), crash on access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check return; handle gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reading uninitialized memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage values (undefined behavior)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize after malloc (or use calloc)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integer-overflow-prevention",
      children: "Integer Overflow Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <stdint.h>\n\nint main(void) {\n    size_t n = 1000000000;  /* 1 billion */\n    size_t elem_size = sizeof(int);  /* 4 bytes */\n\n    /* Manual overflow check */\n    if (n > SIZE_MAX / elem_size) {\n        fprintf(stderr, \"Integer overflow → allocation too large\\n\");\n        return 1;\n    }\n\n    int *arr = (int*)malloc(n * elem_size);\n    if (arr == NULL) {\n        fprintf(stderr, \"malloc failed\\n\");\n        return 1;\n    }\n\n    printf(\"Successfully allocated %zu bytes\\n\", n * elem_size);\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Successfully allocated 4000000000 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " performs this overflow check internally → another reason to prefer it for arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "115-calloc--contiguous-allocation",
      children: ["11.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " → Contiguous Allocation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-clean-pallet",
      children: "Real-World Analogy: Clean Pallet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " is like getting a pallet that still has dirt from the previous shipment → you must sweep it before use. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " is like requesting a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clean pallet"
      }), " → the warehouse manager washes it before giving it to you. You pay a small time penalty for the cleaning, but you know exactly what you are getting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature-1",
      children: "Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void *calloc(size_t count, size_t element_size);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "count"
        }), ": number of elements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "element_size"
        }), ": size of each element in bytes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Returns"
        }), ": pointer to zero-initialized memory, or NULL on failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total size"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count * element_size"
        }), ". calloc checks for overflow during multiplication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-use-calloc",
      children: "Numbered Steps to Use calloc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Decide how many elements of a given type you need.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc(count, sizeof(type))"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Check if the return is NULL.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " All bytes are guaranteed to be zero → no separate initialization needed.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Use the memory.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(ptr)"
      }), " when done."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION calloc_safe(count, element_size):\n    ptr <- calloc(count, element_size)\n    IF ptr == NULL:\n        PRINT \"calloc failed for\", count, \"elements of size\", element_size\n        RETURN NULL\n    END IF\n    RETURN ptr\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-example-1",
      children: "Basic Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *arr = (int*)calloc(n, sizeof(int));\n\n    if (arr == NULL) {\n        fprintf(stderr, \"calloc failed\\n\");\n        return 1;\n    }\n\n    /* Already zero-initialized → no need to set to 0 manually */\n    for (int i = 0; i < n; i++) {\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n\n    /* Fill with values */\n    for (int i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 5;\n    }\n\n    for (int i = 0; i < n; i++) {\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[0] = 0\narr[1] = 0\narr[2] = 0\narr[3] = 0\narr[4] = 0\narr[0] = 5\narr[1] = 10\narr[2] = 15\narr[3] = 20\narr[4] = 25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calloc-vs-malloc--memset",
      children: "calloc vs malloc + memset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(void) {\n    int n = 1000000;\n\n    /* Method 1: malloc + memset (two passes over memory) */\n    int *arr1 = (int*)malloc(n * sizeof(int));\n    if (arr1 == NULL) return 1;\n    memset(arr1, 0, n * sizeof(int));  /* O(n) zeroing pass */\n\n    /* Method 2: calloc (single pass, may use virtual-memory tricks) */\n    int *arr2 = (int*)calloc(n, sizeof(int));\n    if (arr2 == NULL) { free(arr1); return 1; }\n\n    /* Note: calloc may be faster for large allocations because the OS\n       can provide zero-filled pages without actually touching them\n       (demand-paging). malloc + memset forces every page to be committed. */\n\n    printf(\"arr1[0] = %d, arr2[0] = %d\\n\", arr1[0], arr2[0]);\n\n    free(arr1);\n    free(arr2);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr1[0] = 0, arr2[0] = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-zero-initialization-matters",
      children: "Why Zero-Initialization Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predictability"
        }), " → No garbage values to surprise you."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), " → Sensitive data left by previous allocations is wiped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default values"
        }), " → Structs with zero defaults work correctly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash tables"
        }), " → Zero often means \"empty slot.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bitmaps and flags"
        }), " → All bits start cleared."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calloc-for-struct-arrays",
      children: "calloc for Struct Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int id;\n    char name[32];\n    double salary;\n} Employee;\n\nint main(void) {\n    int n = 3;\n    Employee *emps = (Employee*)calloc(n, sizeof(Employee));\n\n    if (emps == NULL) return 1;\n\n    /* All fields are zero-initialized */\n    printf(\"Before assignment:\\n\");\n    for (int i = 0; i < n; i++) {\n        printf(\"  emps[%d]: id=%d, name=\\\"%s\\\", salary=%.2f\\n\",\n               i, emps[i].id, emps[i].name, emps[i].salary);\n    }\n\n    /* Assign values */\n    emps[0].id = 101;\n    snprintf(emps[0].name, sizeof(emps[0].name), \"Alice\");\n    emps[0].salary = 75000.0;\n\n    emps[1].id = 102;\n    snprintf(emps[1].name, sizeof(emps[1].name), \"Bob\");\n    emps[1].salary = 82000.0;\n\n    emps[2].id = 103;\n    snprintf(emps[2].name, sizeof(emps[2].name), \"Charlie\");\n    emps[2].salary = 95000.0;\n\n    for (int i = 0; i < n; i++) {\n        printf(\"  emps[%d]: id=%d, name=\\\"%s\\\", salary=%.2f\\n\",\n               i, emps[i].id, emps[i].name, emps[i].salary);\n    }\n\n    free(emps);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before assignment:\n  emps[0]: id=0, name=\"\", salary=0.00\n  emps[1]: id=0, name=\"\", salary=0.00\n  emps[2]: id=0, name=\"\", salary=0.00\n  emps[0]: id=101, name=\"Alice\", salary=75000.00\n  emps[1]: id=102, name=\"Bob\", salary=82000.00\n  emps[2]: id=103, name=\"Charlie\", salary=95000.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-calloc-allocation",
      children: "Dry Run: calloc Allocation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *a = calloc(3, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates 12 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeroing pass sets all 12 bytes to 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`[0x1000: 00 00 00 00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00 00 00 00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[0] = 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`[0x1000: 0A 00 00 00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00 00 00 00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[1] = 20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`[0x1000: 0A 00 00 00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 00 00 00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block returned to freelist"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-1",
      children: "Complexity"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc(n, size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (zeroing) + O(1) (allocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeroing is O(n) → visible for large allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc vs malloc + memset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal asymptotically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calloc may be faster for large blocks (OS-level zero pages)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-2",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All bytes are zero → predictable initial state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower than malloc due to zeroing pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convenience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No separate memset needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill if you immediately overwrite all bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow check"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calloc checks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count * size"
            }), " for overflow"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc + manual multiply may overflow silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large calloc gets zero pages from OS without touching them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small calloc still zeros memory the same way"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc(0, 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May return NULL or unique non-NULL pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid allocating zero elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc(SIZE_MAX, 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL (overflow) → never succeeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc(1000, 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid zero element size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overwriting calloc'd memory immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waste → you zero then overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use malloc if you write every byte anyway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calloc for large struct with padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding bytes are zeroed too"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for determinism; slight overhead for large structs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "116-realloc--resizing-memory",
      children: ["11.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " → Resizing Memory"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-expanding-a-warehouse-pallet",
      children: "Real-World Analogy: Expanding a Warehouse Pallet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You have a pallet that holds 10 boxes. Suddenly you need space for 20 boxes. You call the warehouse manager: \"I need to expand my pallet.\" The manager checks if there is empty space ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "right after"
      }), " your pallet. If yes, he extends the same pallet. If no, he finds a larger spot elsewhere, moves all your boxes to the new spot, and tells you the new address. The old spot is freed automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), ", the old pointer may be dead → always use the new pointer returned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature-2",
      children: "Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void *realloc(void *ptr, size_t new_size);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ptr"
        }), ": pointer to previously allocated block (or NULL to behave like malloc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "new_size"
        }), ": desired new size in bytes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Returns"
        }), ": pointer to the resized block (possibly at a new address), or NULL on failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr"
        }), " is NULL, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), " behaves like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc(new_size)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_size"
        }), " is 0, behavior is implementation-defined (often like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free(ptr)"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), " fails (returns NULL), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "the original block is still valid"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-critical-rule-always-use-a-temporary-pointer",
      children: "The Critical Rule: Always Use a Temporary Pointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WRONG → leaks original block if realloc fails */\narr = (int*)realloc(arr, new_size * sizeof(int));\n\n/* CORRECT → temporary pointer preserves original on failure */\nint *temp = (int*)realloc(arr, new_size * sizeof(int));\nif (temp == NULL) {\n    /* arr still points to the original block → handle error */\n    free(arr);\n    return 1;\n}\narr = temp;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-use-realloc",
      children: "Numbered Steps to Use realloc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Compute the new size.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc(ptr, new_size)"
      }), " and assign the result to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "temporary"
      }), " pointer.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Check if the temporary is NULL → original block is still intact.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " On success, the original ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " is now invalid → use the temporary going forward.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " On failure, free the original pointer if you cannot proceed.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Continue using the resized block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION safe_realloc(ptr, new_size):\n    temp <- realloc(ptr, new_size)\n    IF temp == NULL:\n        PRINT \"realloc failed → original data preserved\"\n        RETURN ptr    // caller can free later\n    END IF\n    RETURN temp\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-example-growing-and-shrinking",
      children: "Basic Example: Growing and Shrinking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    /* Start with 3 elements */\n    int *arr = (int*)malloc(3 * sizeof(int));\n    if (arr == NULL) return 1;\n\n    arr[0] = 10;\n    arr[1] = 20;\n    arr[2] = 30;\n\n    printf(\"Original (3 elements): %d %d %d\\n\", arr[0], arr[1], arr[2]);\n    printf(\"Address: %p\\n\", (void*)arr);\n\n    /* Grow to 6 elements */\n    int *temp = (int*)realloc(arr, 6 * sizeof(int));\n    if (temp == NULL) {\n        printf(\"realloc failed\\n\");\n        free(arr);\n        return 1;\n    }\n    arr = temp;\n\n    arr[3] = 40;\n    arr[4] = 50;\n    arr[5] = 60;\n\n    printf(\"Expanded (6 elements):\");\n    for (int i = 0; i < 6; i++) printf(\" %d\", arr[i]);\n    printf(\"\\nNew address: %p\\n\", (void*)arr);\n\n    /* Shrink back to 4 elements */\n    temp = (int*)realloc(arr, 4 * sizeof(int));\n    if (temp == NULL) {\n        /* On shrink failure, we usually still have the original → rare */\n        printf(\"Shrink realloc failed → continuing with original\\n\");\n    } else {\n        arr = temp;\n    }\n\n    printf(\"Shrunk (4 elements):\");\n    for (int i = 0; i < 4; i++) printf(\" %d\", arr[i]);\n    printf(\"\\n\");\n\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original (3 elements): 10 20 30\nAddress: 0x5555555592a0\nExpanded (6 elements): 10 20 30 40 50 60\nNew address: 0x555555559600\nShrunk (4 elements): 10 20 30 40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realloc-with-null-acts-like-malloc",
      children: "realloc with NULL (Acts Like malloc)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    /* realloc(NULL, size) is equivalent to malloc(size) */\n    int *arr = (int*)realloc(NULL, 5 * sizeof(int));\n    if (arr == NULL) return 1;\n\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 10 20 30 40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-realloc-in-place-vs-move",
      children: "Dry Run: realloc In-Place vs Move"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 1: In-place expansion (no move needed)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before:\n  [BLOCK A: 32 bytes at 0x1000] [FREE: 64 bytes at 0x1020]\n  \nrealloc(A, 64):\n  Allocator checks block after A → 64 bytes free, enough for 32 more\n  Expands A in-place: [BLOCK A: 64 bytes at 0x1000]\n  Returns same address 0x1000\n  Data at 0x1000–0x101F preserved, 0x1020–0x103F now also part of block\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 2: Move (no room after)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before:\n  [BLOCK A: 32 bytes at 0x1000] [BLOCK B: 32 bytes at 0x1020] [FREE: rest]\n\nrealloc(A, 64):\n  Block B occupies 0x1020 → cannot expand in place\n  Searches freelist for 64+ byte block\n  Finds free block at 0x2000\n  Copies 32 bytes from 0x1000 to 0x2000\n  Frees old block A (adds to freelist)\n  Returns new address 0x2000\n  arr must be updated to new address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr = malloc(12)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[arr: 12 bytes at 0x1000] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fill 10, 20, 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[arr: 10,20,30 at 0x1000] [FREE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "temp = realloc(arr, 24)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Searches → block at 0x1010 is occupied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "realloc moves data to 0x2000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[FREE: 0x1000] [other block] [arr: 10,20,30,", (0,jsx_runtime.jsx)(_components.strong, {
              children: ","
            }), " at 0x2000]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr = temp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fill arr[3], arr[4], arr[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[arr: 10,20,30,40,50,60 at 0x2000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-2",
      children: "Complexity"
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
            children: "realloc (in-place expansion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(new_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data copying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realloc (move)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(old_size) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(new_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must memcpy old data to new location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realloc (shrink in-place)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(new_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncates; may release memory to OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realloc(NULL, size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as malloc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-3",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convenience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single call resizes and preserves data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides complexity → programmer may forget old pointer is dead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place expansion avoids copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move requires O(n) copy of old data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can grow, shrink, or start fresh (NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure handling requires temporary pointer pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory savings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinking releases unused memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not actually release to OS (held in process heap)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc returns NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original block is preserved → NOT freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use temp pointer pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc(ptr, 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (often frees ptr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid → use free explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc(NULL, size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as malloc(size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for first allocation in generic code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc with invalid ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (corruption or crash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure ptr came from malloc/calloc/realloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc shrinking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excess bytes are freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinking may not release memory to OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc very large size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May fail (return NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle failure gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc of freed pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (double free equivalent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never realloc after free"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-realloc-move",
      children: "Detecting realloc Move"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *arr = (int*)malloc(4 * sizeof(int));\n    if (arr == NULL) return 1;\n    printf(\"Initial address: %p\\n\", (void*)arr);\n\n    /* Repeatedly grow and check if address changed */\n    for (int cap = 4; cap <= 1024; cap *= 2) {\n        int *temp = (int*)realloc(arr, cap * sizeof(int));\n        if (temp == NULL) { free(arr); return 1; }\n        if (temp != arr) {\n            printf(\"Moved at capacity %d: %p -> %p\\n\", cap / 2, (void*)arr, (void*)temp);\n        }\n        arr = temp;\n    }\n\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial address: 0x5555555592a0\nMoved at capacity 4: 0x5555555592a0 -> 0x555555559600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "117-free--deallocating-memory",
      children: ["11.7 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " → Deallocating Memory"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-returning-the-warehouse-pallet",
      children: "Real-World Analogy: Returning the Warehouse Pallet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have finished using your warehouse pallet. You call the manager and say: \"I'm done with pallet at location A12.\" The manager marks the spot as available and may merge it with adjacent empty spots. If you try to use the pallet after returning it, you may find someone else's boxes there → or the spot may have been reassigned entirely."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " tells the heap manager: \"I'm done with this block.\" After calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ", the pointer is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dangling"
      }), " → dereferencing it is undefined behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature-3",
      children: "Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void free(void *ptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ptr"
        }), ": pointer previously returned by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr"
        }), " is NULL, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), " does nothing (safe call)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), ", the pointer is invalid. Using it causes undefined behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-use-free",
      children: "Numbered Steps to Use free"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Ensure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " is non-NULL (safe → free(NULL) is a no-op).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(ptr)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr = NULL"
      }), " to prevent accidental reuse (use-after-free prevention).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Do NOT use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " after freeing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION safe_free(ptr_pointer):\n    // ptr_pointer is a pointer to the pointer (double pointer)\n    IF *ptr_pointer != NULL:\n        free(*ptr_pointer)\n        *ptr_pointer <- NULL\n    END IF\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-example-2",
      children: "Basic Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *p = (int*)malloc(sizeof(int));\n    if (p == NULL) return 1;\n\n    *p = 42;\n    printf(\"Before free: %d\\n\", *p);\n\n    free(p);       /* Return memory to heap */\n    /* p is now a dangling pointer → do NOT dereference */\n\n    /* Best practice: nullify after free */\n    p = NULL;\n\n    /* Later in the code... */\n    if (p != NULL) {\n        *p = 99;  /* This code is never reached → safe */\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before free: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safe-free-macro",
      children: "Safe Free Macro"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n#define SAFE_FREE(ptr) do { free(ptr); (ptr) = NULL; } while(0)\n\nint main(void) {\n    int *a = (int*)malloc(sizeof(int));\n    int *b = (int*)malloc(sizeof(int));\n    if (!a || !b) return 1;\n\n    *a = 10; *b = 20;\n\n    SAFE_FREE(a);  /* frees and sets a = NULL */\n    SAFE_FREE(b);\n\n    /* SAFE_FREE is safe to call again (free(NULL) is no-op) */\n    SAFE_FREE(a);\n    SAFE_FREE(b);\n\n    printf(\"Freed successfully\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Freed successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-happens-inside-free",
      children: "What Happens Inside free?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free(ptr)"
      }), ", the heap manager:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Looks up the block metadata (stored just before the returned pointer)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks for corruption (e.g., has the metadata been overwritten?)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds the block back to the freelist."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks if adjacent blocks are also free → if so, coalesces them into a larger free block."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(Optionally) releases large free blocks at the end of the heap back to the OS via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sbrk"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "munmap"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-header-layout",
      children: "Memory Header Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Pointer returned to caller →► +----------+\n                                |  user     |\n                                |  data     |\n                                |  ...      |\n   Block start →► +----------+  +----------+\n                  |  size    |  ← metadata (4–16 bytes)\n                  |  flags   |\n                  |  prev/next| (for freelist linking)\n                  +----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " does not need a size parameter → the size is stored in the metadata header before the returned pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-free-and-coalesce",
      children: "Dry Run: Free and Coalesce"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before free:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[BLOCK A: 32 bytes at 0x1000] [BLOCK B: 32 bytes at 0x1020] [FREE: 64 bytes at 0x1040]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "free(BLOCK B):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Allocator gets pointer to B's data (0x1020)\nReads metadata at 0x1018: size=32, in-use\nMarks block as free\nChecks neighbors:\n  A is in-use → no coalesce left\n  C is free → coalesce right!\nCombined: [BLOCK A: 32] [FREE: 96 bytes at 0x1020 (contiguous)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After free and coalesce:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[BLOCK A: 32 bytes at 0x1000] [FREE: 96 bytes at 0x1020]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-3",
      children: "Complexity"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(ptr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ O(1) for coalescing adjacent free blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coalescing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary tags (Knuth) enable O(1) coalesce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No-op → safe to call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-4",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simplicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single parameter → libc tracks size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in safety → dangling pointers are easy to create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coalescing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent free blocks merge automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot control when memory returns to OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free(NULL) is a no-op → always safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many programmers forget to nullify after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent free + malloc causes fragmentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → heap corruption, crash, or security hole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ptr = NULL after each free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free of non-malloc pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → corrupts allocator metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only free pointers from malloc/calloc/realloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free of stack variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → typically immediate crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never free what you did not malloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use-after-free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → may work, may crash, may corrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL the pointer; never dereference after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Free of partial pointer"
            }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr + 1"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → metadata lookup fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only free the exact pointer returned by malloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free(NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe → no-op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for cleanup code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free in signal handler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generally unsafe (malloc is not async-signal-safe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid; set a flag instead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Mistake 1: Double free */\nvoid double_free(void) {\n    int *p = malloc(sizeof(int));\n    free(p);\n    free(p);  /* UNDEFINED BEHAVIOR → heap corruption */\n}\n\n/* Mistake 2: Free of stack variable */\nvoid free_stack(void) {\n    int x = 42;\n    int *p = &x;\n    free(p);  /* UNDEFINED BEHAVIOR → p was not from malloc */\n}\n\n/* Mistake 3: Free of pointer arithmetic offset */\nvoid free_offset(void) {\n    int *arr = malloc(10 * sizeof(int));\n    free(arr + 5);  /* UNDEFINED BEHAVIOR → not the address malloc returned */\n}\n\n/* Mistake 4: Use after free */\nvoid use_after_free(void) {\n    int *p = malloc(sizeof(int));\n    *p = 42;\n    free(p);\n    *p = 100;  /* UNDEFINED BEHAVIOR → writing to freed memory */\n}\n\n/* Mistake 5: Forgetting to free (memory leak) */\nvoid memory_leak(void) {\n    int *p = malloc(1000);\n    /* no free → 1000 bytes leaked every call */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-malloc-vs-calloc-vs-realloc--full-comparison",
      children: "11.8 malloc vs calloc vs realloc → Full Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "realloc"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate raw memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate + zero-initialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize existing allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arguments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(size_t count, size_t elem_size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(void *ptr, size_t new_size)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized (garbage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-filled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves old data (up to min(old,new))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → must check manually"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes → checks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count * elem_size"
            }), " overflow"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → must check manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL on failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (original block preserved)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (allocation only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (allocation + zeroing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends (may copy data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays, bitmaps, structs with default-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic arrays, buffer resizing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can fail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory (original kept)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ptr can be NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (N receives size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → acts like malloc(new_size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "new_size = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (often free)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-allocation (8–16 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as malloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same + possible copy cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-flowchart",
      children: "Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Need dynamic memory?\n├── Need zero-initialization?\n│   ├── Yes → calloc\n│   └── No  → malloc\n├── Resizing existing block?\n│   └── Yes → realloc\n└── Size unknown at compile time?\n    └── Yes → malloc or calloc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-three-functions-side-by-side",
      children: "Code: Three Functions Side by Side"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(void) {\n    int n = 5;\n\n    /* malloc → uninitialized */\n    int *a = (int*)malloc(n * sizeof(int));\n    if (a == NULL) return 1;\n    for (int i = 0; i < n; i++) a[i] = (i + 1) * 10;\n\n    /* calloc → zero-initialized */\n    int *b = (int*)calloc(n, sizeof(int));\n    if (b == NULL) { free(a); return 1; }\n\n    /* realloc → resize existing (grow) */\n    int *tmp = (int*)realloc(a, 10 * sizeof(int));\n    if (tmp == NULL) {\n        free(a);\n        free(b);\n        return 1;\n    }\n    a = tmp;\n\n    printf(\"malloc (a):  \");\n    for (int i = 0; i < 10; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n\n    printf(\"calloc (b):  \");\n    for (int i = 0; i < n; i++) printf(\"%d \", b[i]);\n    printf(\"\\n\");\n\n    free(a);\n    free(b);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc (a):  10 20 30 40 50 0 0 0 0 0\ncalloc (b):  0 0 0 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[5]"
      }), " through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[9]"
      }), " are 0 because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " zeroes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new"
      }), " bytes (not guaranteed by the standard, but glibc does this for security)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-what",
      children: "When to Use What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array of unknown size at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, no unnecessary zeroing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array that must start all-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One call instead of malloc + memset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growing buffer (e.g., reading unknown input)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "realloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves existing content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap or flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All bits start 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Struct with many fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All fields zero-initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large allocation (MB+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May get zero pages from OS without touching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent small allocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less overhead than calloc (no zeroing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatedly reallocating same pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use temp pointer pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent leak on failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-comparison",
      children: "Complexity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) + metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc(c, s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) amortized (zeroing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c*s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeroing cost scales with size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "realloc(p, n)"
            }), " in-place"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "realloc(p, n)"
            }), " move"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(old_size) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must memcpy old data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-summary",
      children: "Advantages and Disadvantages Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "malloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, simple, ubiquitous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized → must manually init; no overflow check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initialized, overflow check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower due to zeroing; overkill if overwriting all bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "realloc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves data, can grow/shrink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old pointer invalid on move; must use temp pointer pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-memory-leak",
      children: "11.9 Memory Leak"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-library-book-never-returned",
      children: "Real-World Analogy: Library Book Never Returned"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You borrow a book from the library (malloc). You read it, put it on your shelf, and forget about it. When you move out, the book stays behind. Nobody knows you have it, so nobody can return it. Over time, the library loses all its books."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In programming terms: you allocate memory, lose all references to it, and can never call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ". That memory is gone until the program exits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-memory-leak",
      children: "What Is a Memory Leak?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A memory leak occurs when dynamically allocated memory is no longer reachable (no pointer points to it), so it can never be freed. The memory remains allocated for the program's lifetime → it is \"leaked.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void leak_example(void) {\n    int *p = malloc(100 * sizeof(int));\n    /* p goes out of scope → no way to free this memory */\n    /* 400 bytes leaked */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "causes-of-memory-leaks",
      children: "Causes of Memory Leaks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lost pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p = malloc(100); p = malloc(200);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First allocation has no remaining reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function return without free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function allocates, returns without freeing (and does not return the pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller has no way to access the memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception / early return"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (error) return; free(p);"
            }), " never reached"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard all early returns with proper cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circular reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two structs pointing to each other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference counting fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Container not freed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freeing the array of pointers but not the pointed-to objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep free required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Realloc failure without cleanup"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ptr = realloc(ptr, n);"
            }), " on failure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original pointer lost if realloc returns NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global accumulator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulating data in a global linked list without cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory grows unbounded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leak-example-every-call-loses-memory",
      children: "Leak Example: Every Call Loses Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid process_data(int size) {\n    int *buf = (int*)malloc(size * sizeof(int));\n    if (buf == NULL) return;\n    /* Do some work with buf */\n    /* FORGET to free(buf) → 4000 bytes leaked per call */\n}\n\nint main(void) {\n    for (int i = 0; i < 1000; i++) {\n        process_data(1000);\n    }\n    /* After 1000 calls: 1000 * 4000 = 4,000,000 bytes leaked */\n    printf(\"Done → but memory is leaking\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leak-detection-via-free-list-tracking",
      children: "Leak Detection via Free List Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* Simple leak tracker → counts alive allocations */\nstatic int alloc_count = 0;\nstatic size_t alloc_bytes = 0;\n\nvoid *tracked_malloc(size_t size) {\n    void *p = malloc(size);\n    if (p) {\n        alloc_count++;\n        alloc_bytes += size;\n    }\n    return p;\n}\n\nvoid tracked_free(void *p) {\n    if (p) {\n        alloc_count--;\n        /* We can't easily track freed bytes without metadata */\n    }\n    free(p);\n}\n\nvoid print_leak_report(void) {\n    if (alloc_count > 0) {\n        fprintf(stderr, \"LEAK: %d allocations still alive (%zu bytes)\\n\",\n                alloc_count, alloc_bytes);\n    } else {\n        printf(\"No leaks detected\\n\");\n    }\n}\n\nint main(void) {\n    int *a = (int*)tracked_malloc(100);\n    int *b = (int*)tracked_malloc(200);\n    tracked_free(a);\n    /* Forgot to free b */\n\n    print_leak_report();\n    /* Should report 1 allocation still alive */\n\n    tracked_free(b);\n    print_leak_report();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LEAK: 1 allocations still alive (200 bytes)\nNo leaks detected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact-of-memory-leaks",
      children: "Impact of Memory Leaks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reduced available memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaked memory reduces the pool for other allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance degradation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS starts swapping to disk as RAM runs low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOM (Out of Memory) kill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux OOM killer terminates the process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascading failures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other processes cannot allocate memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denial of Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running server exhausts memory → all clients affected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-prevent-memory-leaks",
      children: "How to Prevent Memory Leaks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match every malloc with a free"
        }), " → create a mental pair."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use RAII-like patterns"
        }), " → allocate in constructor, free in destructor (in C++)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize pointers to NULL"
        }), " → only free if non-NULL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Valgrind"
        }), " → test regularly for leaks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Free in reverse order of allocation"
        }), " → reduces fragmentation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set pointers to NULL after free"
        }), " → prevents double-free and use-after-free."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use tools"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-fsanitize=address"
        }), " for Clang/GCC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-leaks-with-address-sanitizer",
      children: "Detecting Leaks with Address Sanitizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -g -fsanitize=address -o program program.c\n./program\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AddressSanitizer (ASan) reports leaks at program exit with stack traces for unfreed allocations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1110-dangling-pointer",
      children: "11.10 Dangling Pointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-expired-library-card",
      children: "Real-World Analogy: Expired Library Card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You return a book to the library (free). But you still have the checkout slip that says \"Book at shelf A12.\" If you go to shelf A12, the book may be gone. Another patron may have borrowed it. If you write your name in that spot, you are corrupting someone else's book."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The checkout slip is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dangling pointer"
      }), " → a pointer that holds an address to memory that has been freed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-dangling-pointer",
      children: "What Is a Dangling Pointer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A dangling pointer is a pointer that references memory that has been freed. Dereferencing a dangling pointer causes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-ways-to-create-a-dangling-pointer",
      children: "Three Ways to Create a Dangling Pointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* Type 1: Free then use */\nvoid dangling_free(void) {\n    int *p = (int*)malloc(sizeof(int));\n    *p = 42;\n    free(p);\n    *p = 100;  /* Dangling pointer → UB */\n}\n\n/* Type 2: Return address of local variable */\nint *dangling_return(void) {\n    int x = 42;\n    return &x;  /* Dangling → x is on stack, gone after return */\n}\n\n/* Type 3: Pointer to deallocated block (via realloc move) */\nvoid dangling_realloc(void) {\n    int *arr = (int*)malloc(4 * sizeof(int));\n    int *old = arr;\n    arr = (int*)realloc(arr, 100 * sizeof(int));\n    /* old may now be a dangling pointer if realloc moved the block */\n    old[0] = 10;  /* Potential UB → old may point to freed memory */\n}\n\nint main(void) {\n    /* Test type 2 */\n    int *d = dangling_return();\n    printf(\"%d\\n\", *d);  /* Undefined behavior → may print 42, may crash */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-dangling-pointers",
      children: "Types of Dangling Pointers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Created"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Danger Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free-and-use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); *p = x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high → immediate corruption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack-return"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&local"
            }), " from function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → stack reused by next call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Realloc-move"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old pointer after realloc moved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → depends on allocator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope-escape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to block that went out of scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → similar to stack return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double-free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); free(p);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high → heap corruption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-techniques",
      children: "Prevention Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* Technique 1: NULL after free */\nvoid safe_free(void) {\n    int *p = (int*)malloc(sizeof(int));\n    *p = 42;\n    free(p);\n    p = NULL;  /* Now safe → dereferencing NULL crashes immediately instead of corrupting silently */\n    /* if (p) *p = 99; → never reached */\n}\n\n/* Technique 2: Use static for returned local (not thread-safe!) */\nint *safe_return_static(void) {\n    static int x = 42;\n    return &x;  /* Safe → static lives forever */\n}\n\n/* Technique 3: Pass pointer to pointer for allocation */\nvoid allocate_int(int **pp, int value) {\n    *pp = (int*)malloc(sizeof(int));\n    if (*pp == NULL) return;\n    **pp = value;\n}\n\nint main(void) {\n    int *p = NULL;\n    allocate_int(&p, 42);\n    if (p) {\n        printf(\"%d\\n\", *p);\n        free(p);\n        p = NULL;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-dangling-pointer-lifecycle",
      children: "Dry Run: Dangling Pointer Lifecycle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p = malloc(4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap: [BLOCK at 0x1000: ??]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p = 0x1000 (valid)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p = 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap: [BLOCK at 0x1000: 42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p = 0x1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap: [FREE at 0x1000]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["p = 0x1000 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "(DANGLING)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p = 100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap: some other allocation may now occupy 0x1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UB → data corruption or crash"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p = NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p = NULL (safe)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-4",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL-after-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer detection (Valgrind)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime slowdown 10–20x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased memory usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can lead to arbitrary code execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-5",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL after free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, prevents access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one level → double-pointer indirection still dangerous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds many cases at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to obvious patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind/ASan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches all use-after-free at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slows program 2–20x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart pointers (C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic lifetime management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language feature → not available in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool/arena allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freed all at once → no individual dangling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires architectural change"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double free via two pointers to same block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p and q both point to same malloc; free(p); free(q) double-frees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only free once; NULL both after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free of small block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocator reuses the memory immediately → subtle corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Valgrind in debug builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free of large block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS unmaps the page → immediate segfault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same → always NULL after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to middle of allocated block"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "free(p + offset)"
            }), " → UB (not the exact malloc address)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only free the exact returned address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free across function calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free in one function, use in another → hard to spot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track ownership explicitly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1111-memory-corruption",
      children: "11.11 Memory Corruption"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-writing-in-the-wrong-ledger",
      children: "Real-World Analogy: Writing in the Wrong Ledger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An accountant has 10 ledgers in a cabinet. You ask for ledger 3. The accountant opens ledger 3, and you write in it. But if you write past page 100 (the ledger only has 100 pages), you start writing in ledger 4. The accountant does not check your page number → that is your responsibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory corruption is when you write data past the allocated boundary and overwrite adjacent memory (metadata, other allocations, or even code)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-memory-corruption",
      children: "Types of Memory Corruption"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing past allocated buffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[10] = 0"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr"
            }), " has 5 elements"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer underflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing before allocated buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[-1] = 0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing past heap block → corrupts metadata or adjacent block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(8); p[8] = 0;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhausting stack space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-after-free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing to freed memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); *p = 42;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freeing same block twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(p); free(p);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wild pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing uninitialized pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p; *p = 42;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Off-by-one"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One element past the end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i <= n; i++) arr[i]"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer-overflow-example",
      children: "Buffer Overflow Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    if (arr == NULL) return 1;\n\n    /* Fill with values */\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n\n    /* OFF-BY-ONE: write past end */\n    arr[5] = 999;  /* Undefined behavior → corrupts heap metadata or adjacent allocation */\n\n    printf(\"arr[5] = %d\\n\", arr[5]);  /* May print 999, may crash */\n\n    free(arr);  /* May crash here → heap metadata was corrupted */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-metadata-corruption",
      children: "Heap Metadata Corruption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each malloc'd block has a metadata header (typically 8–16 bytes) just before the returned pointer. Overwriting this header corrupts the heap:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory before free:\n  [HEADER: size=32, flags=in_use, prev_size, next] [USER DATA: 32 bytes]\n                                                          ▲\n                                                      returned pointer\n\nIf user writes past 32 bytes:\n  [HEADER: size=32, flags=in_use] [USER DATA: 32 bytes] [OVERFLOW: corrupts next block's header]\n\nfree() then reads corrupted metadata:\n  - May crash (segfault)\n  - May corrupt freelist\n  - May be exploitable (heap exploitation → e.g., unsafe unlink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "double-free-exploitation",
      children: "Double Free Exploitation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n/* DANGEROUS → demonstrates why double free is a security risk */\nint main(void) {\n    int *p = (int*)malloc(8 * sizeof(int));\n    if (p == NULL) return 1;\n\n    free(p);   /* Block goes to freelist */\n    free(p);   /* DOUBLE FREE → block is already free */\n    /* Allocator may add the same block twice to the freelist */\n    /* Future malloc may return the same block twice → aliasing pointers! */\n\n    int *a = (int*)malloc(8 * sizeof(int));  /* May get same block as p */\n    int *b = (int*)malloc(8 * sizeof(int));  /* May also get same block! */\n\n    *a = 42;\n    *b = 100;  /* Overwrites *a → two \"different\" pointers to same memory */\n\n    printf(\"a=%d b=%d\\n\", *a, *b);\n\n    free(a);\n    free(b);   /* DOUBLE FREE again → crash */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-memory-corruption-at-free-time",
      children: "Detecting Memory Corruption at Free Time"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many allocators (glibc, jemalloc, tcmalloc) attempt to detect corruption when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is called:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    char *p = (char*)malloc(10);\n    if (p == NULL) return 1;\n\n    /* Corrupt the metadata (overwrite the size field) */\n    *(int*)(p - 8) = 0xDEADBEEF;  /* Undefined behavior → corrupting allocator's header */\n\n    free(p);  /* May abort: \"free(): corrupted unsorted chunk\" or similar */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (glibc with debugging enabled):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "*** Error in `./a.out': free(): corrupted unsorted chunk\nAborted (core dumped)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-and-detection",
      children: "Prevention and Detection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bounds checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always verify indices before accessing arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → prevents overflow at source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Sanitizer"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-fsanitize=address"
            }), " → detects overflow, use-after-free"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high → catches ~95% of bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valgrind memcheck"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs binary on synthetic CPU, checks every access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high → 2–20x slowdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Canary values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place known values at buffer boundaries; check for corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → detects overflow but not at runtime by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Static analysis"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "clang --analyze"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cppcheck"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → finds obvious patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safe allocators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElectricFence, Guard pages around allocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → immediate segfault on overflow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-address-sanitizer",
      children: "Using Address Sanitizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    arr[5] = 100;  /* Out-of-bounds write */\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile and run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -g -fsanitize=address -o asan_test asan_test.c\n./asan_test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASan output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=================================================================\n==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000000034\nWRITE of size 4 at 0x602000000034 thread T0\n    #0 0x401126 in main /tmp/asan_test.c:6\n    #1 0x7f1234567890 in __libc_start_main ...\n0x602000000034 is located 0 bytes after 20-byte region [0x602000000020,0x602000000034)\nallocated by thread T0 here:\n    #0 0x4010a0 in malloc /usr/lib/gcc/.../libsanitizer/asan/asan_malloc_linux.cpp\n    #1 0x401116 in main /tmp/asan_test.c:5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1112-dynamic-arrays-growable-arrays",
      children: "11.12 Dynamic Arrays (Growable Arrays)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-expanding-waiting-list",
      children: "Real-World Analogy: Expanding Waiting List"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A restaurant has a waiting list. They start with a small clipboard that holds 10 names. When the list fills up, they get a bigger clipboard that holds 20 names and copy all the names over. They throw away the old clipboard."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A dynamic array works the same way: start with a small capacity, double when full, and copy elements to the new buffer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-array-implementation",
      children: "Dynamic Array Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *data;\n    size_t size;      /* Number of elements currently stored */\n    size_t capacity;  /* Allocated capacity (size <= capacity) */\n} DynArray;\n\n/* Initialize (empty) */\nvoid da_init(DynArray *da) {\n    da->data = NULL;\n    da->size = 0;\n    da->capacity = 0;\n}\n\n/* Append element → doubles capacity when full */\nint da_append(DynArray *da, int value) {\n    if (da->size >= da->capacity) {\n        /* Grow: 0 -> 4, then double each time */\n        size_t new_cap = da->capacity == 0 ? 4 : da->capacity * 2;\n        int *temp = (int*)realloc(da->data, new_cap * sizeof(int));\n        if (temp == NULL) {\n            fprintf(stderr, \"DynArray: realloc failed\\n\");\n            return -1;\n        }\n        da->data = temp;\n        da->capacity = new_cap;\n    }\n    da->data[da->size++] = value;\n    return 0;\n}\n\n/* Get element at index */\nint da_get(DynArray *da, size_t index) {\n    if (index >= da->size) {\n        fprintf(stderr, \"DynArray: index %zu out of bounds (size %zu)\\n\",\n                index, da->size);\n        return 0;\n    }\n    return da->data[index];\n}\n\n/* Set element at index */\nvoid da_set(DynArray *da, size_t index, int value) {\n    if (index >= da->size) return;\n    da->data[index] = value;\n}\n\n/* Free all memory */\nvoid da_free(DynArray *da) {\n    free(da->data);\n    da->data = NULL;\n    da->size = 0;\n    da->capacity = 0;\n}\n\nint main(void) {\n    DynArray arr;\n    da_init(&arr);\n\n    /* Append 20 elements → triggers several reallocs */\n    for (int i = 0; i < 20; i++) {\n        da_append(&arr, i * 10);\n    }\n\n    printf(\"Size: %zu, Capacity: %zu\\n\", arr.size, arr.capacity);\n    printf(\"Elements: \");\n    for (size_t i = 0; i < arr.size; i++) {\n        printf(\"%d \", arr.data[i]);\n    }\n    printf(\"\\n\");\n\n    /* Modify middle element */\n    da_set(&arr, 5, 999);\n    printf(\"After set: arr[5] = %d\\n\", da_get(&arr, 5));\n\n    da_free(&arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Size: 20, Capacity: 32\nElements: 0 10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190\nAfter set: arr[5] = 999\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-dynamic-array-growth",
      children: "Dry Run: Dynamic Array Growth"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Realloc?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc(16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (init)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20,30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20,30,40]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20,30,40,50,__]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (double)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20,30,40,50,60]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(growing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (double)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(first ~20 appends without resize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (double)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-of-dynamic-array-operations",
      children: "Complexity of Dynamic Array Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amortized Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append (no resize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple write and increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append (resize needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy all elements to new buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access by index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set by index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must shift elements right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must shift elements left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single free call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-6",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous → cache-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reallocation copies all elements (O(n) worst case)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) random access → fastest data structure for lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete at arbitrary positions is O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Growth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling achieves O(1) amortized append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May waste up to 50% of capacity (if size = capacity/2 + 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simplicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple API: init, append, get, set, free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in bounds checking → programmer must verify indices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1113-detecting-memory-leaks-with-valgrind",
      children: "11.13 Detecting Memory Leaks with Valgrind"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-valgrind",
      children: "What Is Valgrind?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Valgrind is a programming tool for memory debugging, memory leak detection, and profiling. It runs your program on a synthetic CPU and intercepts every memory allocation and deallocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ubuntu/Debian\nsudo apt-get install valgrind\n\n# Fedora/RHEL\nsudo dnf install valgrind\n\n# macOS\nbrew install valgrind\n\n# Verify\nvalgrind --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Compile with debug symbols (-g)\ngcc -g -o program program.c\n\n# Run under Valgrind\nvalgrind --leak-check=full ./program\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leaky-program-example",
      children: "Leaky Program Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* leaky.c → intentionally leaks memory */\n#include <stdio.h>\n#include <stdlib.h>\n\nvoid leak(void) {\n    int *p = (int*)malloc(100 * sizeof(int));\n    if (p == NULL) return;\n    p[0] = 42;   /* Use it, then leak it */\n    /* No free(p) here */\n}\n\nint main(void) {\n    leak();\n    leak();\n    leak();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile and run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -g -o leaky leaky.c\nvalgrind --leak-check=full --show-leak-kinds=all ./leaky\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valgrind output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "==12345== Memcheck, a memory error detector\n==12345== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.\n==12345== Using Valgrind-3.22.0 and LibVEX; rerun with -h for copyright info\n==12345== Command: ./leaky\n==12345==\n==12345== HEAP SUMMARY:\n==12345==     in use at exit: 1,200 bytes in 3 blocks\n==12345==   total heap usage: 3 allocs, 0 frees, 1,200 bytes allocated\n==12345==\n==12345== 1,200 (400 direct, 800 indirect) bytes in 3 blocks are definitely lost\n==12345==    in loss record 3 of 3\n==12345==    at 0x4845868: malloc (vg_replace_malloc.c:381)\n==12345==    by 0x10915B: leak (leaky.c:6)\n==12345==    by 0x109177: main (leaky.c:14)\n==12345==\n==12345== LEAK SUMMARY:\n==12345==    definitely lost: 1,200 bytes in 3 blocks\n==12345==    indirectly lost: 0 bytes in 0 blocks\n==12345==      possibly lost: 0 bytes in 0 blocks\n==12345==    still reachable: 0 bytes in 0 blocks\n==12345==         suppressed: 0 bytes in 0 blocks\n==12345==\n==12345== For lists of detected and suppressed errors, rerun with: -s\n==12345== ERROR SUMMARY: 3 errors from 3 contexts (suppressed: 0 from 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clean-program-no-leaks",
      children: "Clean Program (No Leaks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* clean.c → no leaks */\n#include <stdio.h>\n#include <stdlib.h>\n\nvoid no_leak(void) {\n    int *p = (int*)malloc(100 * sizeof(int));\n    if (p == NULL) return;\n    p[0] = 42;\n    free(p);   /* Proper cleanup */\n}\n\nint main(void) {\n    no_leak();\n    no_leak();\n    no_leak();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valgrind output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "==12346== HEAP SUMMARY:\n==12346==     in use at exit: 0 bytes in 0 blocks\n==12346==   total heap usage: 3 allocs, 3 frees, 1,200 bytes allocated\n==12346==\n==12346== All heap blocks were freed -- no leaks are possible\n==12346==\n==12346== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-use-after-free-with-valgrind",
      children: "Detecting Use-After-Free with Valgrind"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* uaf.c → use-after-free */\n#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *p = (int*)malloc(sizeof(int));\n    if (p == NULL) return 1;\n    *p = 42;\n    free(p);\n    *p = 100;   /* Use-after-free */\n    printf(\"%d\\n\", *p);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -g -o uaf uaf.c\nvalgrind ./uaf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valgrind output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "==12347== Invalid write of size 4\n==12347==    at 0x10917F: main (uaf.c:9)\n==12347==  Address 0x4a5e040 is 0 bytes inside a block of size 4 free'd\n==12347==    at 0x484626F: free (vg_replace_malloc.c:535)\n==12347==    by 0x10917A: main (uaf.c:8)\n==12347==  Block was alloc'd at\n==12347==    at 0x4845868: malloc (vg_replace_malloc.c:381)\n==12347==    by 0x10916B: main (uaf.c:6)\n==12347==\n==12347== Invalid read of size 4\n==12347==    at 0x10918B: main (uaf.c:10)\n==12347==  Address 0x4a5e040 is 0 bytes inside a block of size 4 free'd\n==12347==    at 0x484626F: free (vg_replace_malloc.c:535)\n==12347==    by 0x10917A: main (uaf.c:8)\n==12347==  Block was alloc'd at\n==12347==    at 0x4845868: malloc (vg_replace_malloc.c:381)\n==12347==    by 0x10916B: main (uaf.c:6)\n==12347==\n==12347== HEAP SUMMARY:\n==12347==     in use at exit: 0 bytes in 0 blocks\n==12347==   total heap usage: 1 allocs, 1 frees, 4 bytes allocated\n==12347==\n==12347== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valgrind-options",
      children: "Valgrind Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--leak-check=full"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show details of each leaked block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--show-leak-kinds=all"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show all leak types (definite, indirect, possible, still reachable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--track-origins=yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track uninitialized value origins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--vgdb=yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow GDB attachment for interactive debugging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--suppressions=file.supp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suppress known leaks (e.g., from libc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--log-file=valgrind.log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write output to file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show summary of suppressed errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--num-callers=20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show more stack frames per error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-leak-types",
      children: "Understanding Leak Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Leak Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definitely lost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No pointer to the block exists → cannot be freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must fix → add missing free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indirectly lost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers to this block exist only inside other lost blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix the definitely lost that owns these"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Possibly lost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer may point to interior of the block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigate → often a real bug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Still reachable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer still exists but was not freed on exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually harmless (global), but fix for cleanliness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suppressed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suppressed by user's suppression file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify suppression is appropriate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integrating-valgrind-into-your-workflow",
      children: "Integrating Valgrind into Your Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Quick check\nvalgrind --leak-check=full ./program\n\n# Comprehensive check\nvalgrind --leak-check=full --show-leak-kinds=all --track-origins=yes -s ./program\n\n# Check with specific input\nvalgrind --leak-check=full ./program < test_input.txt\n\n# Run under Valgrind with GDB\nvalgrind --vgdb=yes --vgdb-error=0 ./program\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1114-best-practices",
      children: "11.14 Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-golden-rules-of-dynamic-memory",
      children: "The Golden Rules of Dynamic Memory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check return values"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), " can fail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every malloc has a matching free"
        }), " → create mental pairs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL after free"
        }), " → prevents use-after-free and double-free."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use temp pointer for realloc"
        }), " → never assign directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer calloc for arrays"
        }), " → overflow check + zero-initialization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document ownership"
        }), " → who allocates, who frees? Write it in comments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["*", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Use sizeof(", (0,jsx_runtime.jsx)(_components.em, {
            children: "ptr) not sizeof(type)"
          })]
        }), " → type-safe; survives code changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Free in allocation scope"
        }), " → minimize lifetime."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use tools"
        }), " → Valgrind, AddressSanitizer, static analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Avoid void"
          }), " arithmetic"]
        }), "* → not allowed in standard C (GCC extension allows it)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practice-examples",
      children: "Best Practice Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n/* GOOD: sizeof(*ptr) pattern */\ntypedef struct { int id; char name[32]; } Record;\n\nRecord *create_record(int id, const char *name) {\n    Record *r = (Record*)malloc(sizeof(*r));  /* sizeof(*r) not sizeof(Record) */\n    if (r == NULL) return NULL;\n\n    r->id = id;\n    snprintf(r->name, sizeof(r->name), \"%s\", name);\n    return r;\n    /* Caller owns the memory → must free */\n}\n\n/* GOOD: Clear ownership documentation */\n/** \n * Reads a file into a dynamically allocated buffer.\n * Returns a pointer to the buffer (caller must free).\n * Sets *out_len to the number of bytes read.\n * Returns NULL on failure.\n */\nchar *read_file(const char *filename, size_t *out_len) {\n    FILE *f = fopen(filename, \"rb\");\n    if (!f) return NULL;\n\n    fseek(f, 0, SEEK_END);\n    long len = ftell(f);\n    if (len <= 0) { fclose(f); return NULL; }\n\n    char *buf = (char*)malloc((size_t)len + 1);\n    if (buf == NULL) { fclose(f); return NULL; }\n\n    size_t bytes_read = fread(buf, 1, (size_t)len, f);\n    fclose(f);\n\n    if (bytes_read != (size_t)len) {\n        free(buf);\n        return NULL;\n    }\n\n    buf[bytes_read] = '\\0';\n    if (out_len) *out_len = bytes_read;\n    return buf;\n    /* Caller MUST free(buf) */\n}\n\n/* GOOD: Cleanup with goto → centralizes error handling */\nint process_file(const char *filename) {\n    char *buf = NULL;\n    FILE *f = NULL;\n    int result = -1;\n\n    f = fopen(filename, \"rb\");\n    if (!f) goto cleanup;\n\n    buf = (char*)malloc(1024);\n    if (!buf) goto cleanup;\n\n    size_t n = fread(buf, 1, 1024, f);\n    if (n == 0) goto cleanup;\n\n    /* ... process buf ... */\n    result = 0;\n\ncleanup:\n    free(buf);\n    if (f) fclose(f);\n    return result;\n}\n\nint main(void) {\n    Record *r = create_record(1, \"Alice\");\n    if (r) {\n        printf(\"Record: %d, %s\\n\", r->id, r->name);\n        free(r);  /* Ownership fulfilled */\n    }\n\n    size_t len;\n    char *content = read_file(\"test.txt\", &len);\n    if (content) {\n        printf(\"Read %zu bytes: %s\\n\", len, content);\n        free(content);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practice-checklist",
      children: "Practice Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every allocation checked for NULL?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every malloc has matching free?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer set to NULL after free?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realloc uses temp pointer?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size computed with sizeof, not hardcoded?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer overflow in size calculation prevented?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ownership documented?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind passes with 0 errors?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array accesses bounds-checked?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calloc used when zero-initialization is needed?"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1115-complete-comparison-tables",
      children: "11.15 Complete Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11151-malloc-vs-calloc-vs-realloc-vs-free",
      children: "11.15.1 malloc vs calloc vs realloc vs free"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "realloc"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *malloc(size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *calloc(size_t,size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *realloc(void*,size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void free(void*)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initializes?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (zero)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves old data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can fail?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (returns NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (returns NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (returns NULL, old kept)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always succeeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow check?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (product)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL ptr?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acts like malloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (no-op)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero size?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impl-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impl-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impl-defined (often free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays, structs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (zeroing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends (may copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header + copy buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11152-static-vs-automatic-vs-dynamic-allocation",
      children: "11.15.2 Static vs Automatic vs Dynamic Allocation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data/BSS segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size known"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By loader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By malloc/calloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deallocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (exit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (return)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (free)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default init"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable size limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack size (~8 MB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resizeable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (realloc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slowest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11153-stack-vs-heap--detailed",
      children: "11.15.3 Stack vs Heap → Detailed"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–8 MB per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GB (virtual address space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1–3 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–300 ns (small block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deallocation time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 ns (SP adjust)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20–100 ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until explicit free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary (freelist)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scattered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-thread (inherent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (needs lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow (crash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leaks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11154-memory-error-types",
      children: "11.15.4 Memory Error Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write past allocated boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata corruption, crash, exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, ASan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer underflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write before allocated boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, ASan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use-after-free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference freed pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data corruption, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, ASan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free same block twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap corruption, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, ASan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never free allocated block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind (leak check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wild pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference uninitialized pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random corruption, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, ASan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dangling pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to freed or out-of-scope memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaust stack space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash (segfault)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ulimit, runtime check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integer overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow in size argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller allocation than expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check manually, use calloc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1116-interview-corner",
      children: "11.16 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q1-what-is-the-difference-between-malloc-and-calloc",
      children: ["Q1: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(size)"
      }), " allocates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size"
      }), " bytes of uninitialized memory. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc(count, size)"
      }), " allocates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count * size"
      }), " bytes and initializes every byte to zero. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " also checks for integer overflow in the multiplication ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count * size"
      }), ". In terms of performance, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " is faster because it skips the zeroing pass. For large allocations, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " can be faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memset"
      }), " because the OS can provide already-zeroed pages without actually touching them (demand-paging optimization). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " when you will immediately overwrite the memory; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), " when you need a predictable zero state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-why-must-you-use-a-temporary-pointer-with-realloc",
      children: ["Q2: Why must you use a temporary pointer with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " fails (returns NULL), the original memory block is still valid and unmodified. If you assign directly → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr = realloc(ptr, new_size)"
      }), " → and realloc fails, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " becomes NULL and you lose the reference to the original block, causing a memory leak. Always use: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *temp = realloc(ptr, new_size); if (temp) ptr = temp; else handle_error();"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-causes-a-memory-leak-how-do-you-prevent-one",
      children: "Q3: What causes a memory leak? How do you prevent one?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A memory leak occurs when dynamically allocated memory has no remaining pointer reference, making it impossible to free. Common causes: losing the pointer through reassignment (", (0,jsx_runtime.jsx)(_components.code, {
        children: "p = malloc(100); p = malloc(200);"
      }), "), returning from a function without freeing, and forgetting to free in error paths. Prevention: match every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ", use tools like Valgrind, set pointers to NULL after freeing, use RAII in C++ (smart pointers), and establish ownership conventions in C (document who allocates and who frees)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-a-dangling-pointer-and-how-do-you-prevent-it",
      children: "Q4: What is a dangling pointer and how do you prevent it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A dangling pointer is a pointer that references memory that has been freed. Dereferencing it is undefined behavior. Three common causes: (1) freeing memory and not nullifying the pointer, (2) returning the address of a stack-allocated local variable, and (3) using the old pointer after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " moved the block. Prevention: set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr = NULL"
      }), " immediately after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ", never return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&local_var"
      }), " from a function, and use the pointer returned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), ", not the old one."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-how-does-realloc-handle-failure",
      children: ["Q5: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " handle failure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " On failure, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " returns NULL and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preserves the original block unchanged"
      }), ". This is why using a temporary pointer is critical → the original pointer remains valid and can be freed or retried with a smaller size. Never do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr = realloc(ptr, n)"
      }), " → that loses the original on failure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-can-you-do-pointer-arithmetic-on-void",
      children: ["Q6: Can you do pointer arithmetic on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In standard C, no → pointer arithmetic requires the size of the pointed-to type, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " has no size. GCC and some compilers allow it as an extension (treating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void*"
      }), " as byte-sized). For portable code, cast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char*"
      }), " before arithmetic: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(char*)ptr + offset"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-memory-layout-of-a-c-program",
      children: "Q7: What is the memory layout of a C program?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " From low to high address: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text"
      }), " (read-only machine code), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data"
      }), " (initialized global/static variables), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BSS"
      }), " (uninitialized global/static → zero-filled at load), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Heap"
      }), " (grows upward → dynamic allocations), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack"
      }), " (grows downward → local variables, function frames). The heap and stack grow toward each other; if they collide, the program runs out of memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-difference-between-stack-and-heap-allocation",
      children: "Q8: What is the difference between stack and heap allocation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Stack allocation is fast (single instruction to adjust stack pointer), automatic (compiler manages), and limited in size (~1–8 MB). Heap allocation is slower (freelist search, potential syscall), manual (programmer must free), and can be very large (up to virtual address limits). Stack variables are LIFO and have function scope; heap variables have arbitrary lifetime."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-what-happens-when-free-is-called-with-a-pointer-that-was-not-returned-by-malloc",
      children: ["Q9: What happens when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is called with a pointer that was not returned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Undefined behavior. The allocator's metadata lookup will read garbage, likely causing heap corruption and a crash. The only safe pointer to pass to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is one returned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " (or NULL, which is a safe no-op)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-detect-memory-leaks-at-runtime",
      children: "Q10: How do you detect memory leaks at runtime?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valgrind"
      }), " (runs on synthetic CPU, intercepts all alloc/free → 2–20x slowdown) or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AddressSanitizer"
      }), " (compiler instrumentation via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-fsanitize=address"
      }), " → ~2x slowdown, ~2x memory). Valgrind catches leaks, use-after-free, and uninitialized reads. ASan catches buffer overflows, use-after-free, and leaks. For production, you can implement a simple wrapper that tracks outstanding allocations (see 11.9.3)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-memory-fragmentation-why-is-it-bad",
      children: "Q11: What is memory fragmentation? Why is it bad?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fragmentation occurs when freed blocks of memory are scattered among in-use blocks, so the total free memory is sufficient but no single free block can satisfy a large allocation. Example: after malloc(100), free(ptr) interleaved with smaller allocations can leave the heap with many small free gaps. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external fragmentation"
      }), ". Types: external (holes between blocks) and internal (wasted space within a block due to alignment/padding)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q12-how-does-malloc-manage-memory-internally",
      children: ["Q12: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " manage memory internally?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " typically uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "freelist"
      }), " of free blocks. When you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc(n)"
      }), ", it searches for a free block >= n bytes (first-fit, best-fit, or segregated-fit depending on implementation). The block is split if it is much larger than n. Each block has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "metadata header"
      }), " (size, flags, sometimes linked-list pointers) stored just before the returned pointer. When you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ", the block is returned to the freelist and adjacent free blocks are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "coalesced"
      }), " into a larger free block. Large allocations (>= 128 KB on glibc) use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mmap"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "brk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q13-what-is-the-difference-between-free-and-delete",
      children: ["Q13: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is a C library function that deallocates memory allocated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "calloc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), " is a C++ operator that calls the destructor of an object and then deallocates memory allocated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), ". In C++, you must ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), " what was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), "'d and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " what was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "'d → mixing them is undefined behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q14-what-does-sizeofptr-vs-sizeoftype-give-you-when-ptr-is-a-null-pointer",
      children: ["Q14: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(*ptr)"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(type)"
      }), " give you when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NULL"
      }), " pointer?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(*ptr)"
      }), " evaluates the size of the pointed-to type at compile time without dereferencing the pointer. Even if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " is NULL, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(*ptr)"
      }), " is safe and returns the correct size. This is the recommended pattern for malloc: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr = malloc(sizeof(*ptr))"
      }), " → it survives changes to the type of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q15-implement-a-safe-malloc-wrapper-with-error-reporting",
      children: ["Q15: Implement a safe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " wrapper with error reporting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid *safe_malloc(size_t size, const char *file, int line) {\n    void *p = malloc(size);\n    if (p == NULL) {\n        fprintf(stderr, \"MEMORY ERROR: malloc(%zu) failed at %s:%d\\n\",\n                size, file, line);\n        exit(EXIT_FAILURE);\n    }\n    return p;\n}\n\n#define SAFE_MALLOC(size) safe_malloc((size), __FILE__, __LINE__)\n\nint main(void) {\n    int *arr = (int*)SAFE_MALLOC(10 * sizeof(int));\n    /* On failure, program exits with error message showing file and line */\n    free(arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-implement-a-dynamically-growing-array-in-c",
      children: "Q16: How do you implement a dynamically growing array in C?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use a struct with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " pointer, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size"
      }), " (elements used), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "capacity"
      }), " (elements allocated). On append, if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size >= capacity"
      }), ", double capacity using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), ". Doubling achieves O(1) amortized append time. Example: see section 11.12."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q17-what-is-the-difference-between-int-p--malloc10--sizeofint-and-int-p10",
      children: ["Q17: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *p = malloc(10 * sizeof(int))"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int p[10]"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int p[10]"
      }), " allocates 10 ints on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack"
      }), " → memory is freed automatically when the function returns. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *p = malloc(10 * sizeof(int))"
      }), " allocates 10 ints on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap"
      }), " → memory persists until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is called. The array version (", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[10]"
      }), ") cannot be resized and cannot be returned from the function (it is automatic). The malloc version can be resized with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realloc"
      }), " and can be safely returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-what-is-the-n1-problem-with-dynamic-string-allocation",
      children: "Q18: What is the \"N+1\" problem with dynamic string allocation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When allocating memory for a string, you must allocate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strlen(s) + 1"
      }), " bytes → the +1 is for the null terminator. Forgetting the +1 is the most common string memory bug and leads to buffer overflow when the terminator is written past the allocated region."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *s = \"hello\";\nchar *copy = (char*)malloc(strlen(s) + 1);  /* +1 for '\\0' */\nstrcpy(copy, s);  /* safe */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q19-how-does-the-os-handle-a-malloc-request-for-a-very-large-block",
      children: ["Q19: How does the OS handle a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " request for a very large block?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For large allocations (typically >= 128 KB on glibc), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mmap"
      }), " to allocate a new anonymous memory mapping instead of extending the heap via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "brk"
      }), ". This has two benefits: (1) the memory is released back to the OS when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), " is called (not just returned to the process heap), and (2) it reduces heap fragmentation since large blocks are isolated. The downside is a higher per-allocation overhead (syscall cost, page-aligned)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-what-is-a-pool-arena-allocator-and-why-use-one",
      children: "Q20: What is a pool (arena) allocator and why use one?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A pool allocator pre-allocates a large block of memory (an arena) and serves smaller allocations by incrementing a pointer within that block. It is extremely fast (O(1) allocation, no freelist search) and eliminates fragmentation for same-sized objects. The downside: individual objects cannot be freed independently → the entire pool is freed at once. Pool allocators are common in real-time systems, game engines, and embedded systems where allocation speed and predictability matter more than individual deallocation. See the challenge problem in section 11.18 for an implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1117-applications-in-real-systems",
      children: "11.17 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11171-linux-kernel-kmalloc",
      children: ["11.17.1 Linux Kernel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kmalloc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Linux kernel provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kmalloc"
      }), " for allocating physically contiguous memory in kernel space. It is similar to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " but uses the kernel's slab allocator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <linux/slab.h>\n\nvoid *kmalloc(size_t size, gfp_t flags);\nvoid kfree(const void *ptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kmalloc"
        }), " returns physically contiguous memory (important for DMA)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GFP_KERNEL"
        }), " → normal allocation (may sleep)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GFP_ATOMIC"
        }), " → allocation from interrupt context (never sleeps)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The kernel uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "slab allocators"
        }), " → caches of fixed-size objects (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kmalloc-32"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kmalloc-64"
        }), ") to avoid fragmentation and speed up allocation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11172-embedded-malloc-implementations",
      children: ["11.17.2 Embedded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " Implementations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedded systems often use custom allocators optimized for limited memory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simple embedded malloc: fixed-block pool */\n#include <stdio.h>\n#include <stdint.h>\n#include <stdbool.h>\n\n#define POOL_SIZE 16\n#define BLOCK_SIZE 32\n\nstatic uint8_t pool[POOL_SIZE][BLOCK_SIZE];\nstatic bool used[POOL_SIZE];\n\nvoid *embedded_malloc(size_t size) {\n    if (size > BLOCK_SIZE) return NULL;\n    for (int i = 0; i < POOL_SIZE; i++) {\n        if (!used[i]) {\n            used[i] = true;\n            return pool[i];\n        }\n    }\n    return NULL;  /* Out of pool memory */\n}\n\nvoid embedded_free(void *ptr) {\n    if (ptr == NULL) return;\n    uintptr_t addr = (uintptr_t)ptr;\n    uintptr_t pool_start = (uintptr_t)pool;\n    uintptr_t pool_end = pool_start + sizeof(pool);\n\n    if (addr < pool_start || addr >= pool_end) return;  /* Not our pointer */\n\n    int index = (int)((addr - pool_start) / BLOCK_SIZE);\n    if ((addr - pool_start) % BLOCK_SIZE != 0) return;  /* Not block-aligned */\n\n    used[index] = false;\n}\n\nint main(void) {\n    char *a = (char*)embedded_malloc(10);\n    char *b = (char*)embedded_malloc(20);\n    if (a && b) {\n        snprintf(a, 10, \"hello\");\n        snprintf(b, 20, \"embedded world\");\n        printf(\"a=%s b=%s\\n\", a, b);\n    }\n    embedded_free(a);\n    embedded_free(b);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a=hello b=embedded world\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11173-dynamic-string-duplication",
      children: "11.17.3 Dynamic String Duplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n/* Portable strdup implementation (POSIX provides strdup, C standard does not) */\nchar *my_strdup(const char *s) {\n    if (s == NULL) return NULL;\n    size_t len = strlen(s);\n    char *copy = (char*)malloc(len + 1);\n    if (copy == NULL) return NULL;\n    memcpy(copy, s, len + 1);  /* Copy including null terminator */\n    return copy;\n}\n\nint main(void) {\n    const char *original = \"Hello, Dynamic World!\";\n    char *dup = my_strdup(original);\n    if (dup == NULL) return 1;\n\n    printf(\"Original: \\\"%s\\\"\\n\", original);\n    printf(\"Duplicate: \\\"%s\\\"\\n\", dup);\n\n    /* Modify the copy → original is unchanged */\n    dup[0] = 'h';\n    dup[7] = 'd';\n    printf(\"Modified:  \\\"%s\\\"\\n\", dup);\n    printf(\"Original:  \\\"%s\\\"\\n\", original);\n\n    free(dup);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: \"Hello, Dynamic World!\"\nDuplicate: \"Hello, Dynamic World!\"\nModified:  \"hello, dynamic World!\"\nOriginal:  \"Hello, Dynamic World!\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11174-dynamic-array-of-strings-eg-reading-file-lines",
      children: "11.17.4 Dynamic Array of Strings (e.g., Reading File Lines)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_LINE 1024\n\ntypedef struct {\n    char **data;\n    size_t size;\n    size_t capacity;\n} StringArray;\n\nvoid sa_init(StringArray *sa) {\n    sa->data = NULL;\n    sa->size = 0;\n    sa->capacity = 0;\n}\n\nint sa_append(StringArray *sa, const char *str) {\n    if (sa->size >= sa->capacity) {\n        size_t new_cap = sa->capacity == 0 ? 4 : sa->capacity * 2;\n        char **temp = (char**)realloc(sa->data, new_cap * sizeof(char*));\n        if (temp == NULL) return -1;\n        sa->data = temp;\n        sa->capacity = new_cap;\n    }\n\n    sa->data[sa->size] = (char*)malloc(strlen(str) + 1);\n    if (sa->data[sa->size] == NULL) return -1;\n    strcpy(sa->data[sa->size], str);\n    sa->size++;\n    return 0;\n}\n\nvoid sa_free(StringArray *sa) {\n    for (size_t i = 0; i < sa->size; i++) {\n        free(sa->data[i]);  /* Free each string */\n    }\n    free(sa->data);          /* Free the pointer array */\n    sa->data = NULL;\n    sa->size = 0;\n    sa->capacity = 0;\n}\n\nint main(void) {\n    /* Simulate reading lines from a file */\n    const char *lines[] = {\"First line\", \"Second line\", \"Third line\", \"Fourth line\"};\n    int num_lines = 4;\n\n    StringArray sa;\n    sa_init(&sa);\n\n    for (int i = 0; i < num_lines; i++) {\n        if (sa_append(&sa, lines[i]) != 0) {\n            fprintf(stderr, \"Failed to append line %d\\n\", i);\n            sa_free(&sa);\n            return 1;\n        }\n    }\n\n    printf(\"Read %zu lines:\\n\", sa.size);\n    for (size_t i = 0; i < sa.size; i++) {\n        printf(\"  %zu: %s\\n\", i, sa.data[i]);\n    }\n\n    sa_free(&sa);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read 4 lines:\n  0: First line\n  1: Second line\n  2: Third line\n  3: Fourth line\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11175-linked-list-node-allocation",
      children: "11.17.5 Linked List Node Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nNode *node_create(int data) {\n    Node *n = (Node*)malloc(sizeof(*n));\n    if (n == NULL) return NULL;\n    n->data = data;\n    n->next = NULL;\n    return n;\n}\n\nvoid list_free(Node *head) {\n    while (head) {\n        Node *next = head->next;\n        free(head);\n        head = next;\n    }\n}\n\nint main(void) {\n    Node *head = node_create(10);\n    head->next = node_create(20);\n    head->next->next = node_create(30);\n\n    printf(\"List: \");\n    for (Node *cur = head; cur; cur = cur->next) {\n        printf(\"%d \", cur->data);\n    }\n    printf(\"\\n\");\n\n    list_free(head);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List: 10 20 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11176-resizable-hash-table-chaining",
      children: "11.17.6 Resizable Hash Table (Chaining)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct Entry {\n    char *key;\n    int value;\n    struct Entry *next;\n} Entry;\n\ntypedef struct {\n    Entry **buckets;\n    size_t size;\n    size_t count;\n} HashTable;\n\n#define HT_INITIAL_SIZE 4\n\nEntry *entry_create(const char *key, int value) {\n    Entry *e = (Entry*)malloc(sizeof(*e));\n    if (e == NULL) return NULL;\n    e->key = (char*)malloc(strlen(key) + 1);\n    if (e->key == NULL) { free(e); return NULL; }\n    strcpy(e->key, key);\n    e->value = value;\n    e->next = NULL;\n    return e;\n}\n\nvoid entry_free(Entry *e) {\n    free(e->key);\n    free(e);\n}\n\nvoid ht_init(HashTable *ht) {\n    ht->buckets = (Entry**)calloc(HT_INITIAL_SIZE, sizeof(Entry*));\n    ht->size = HT_INITIAL_SIZE;\n    ht->count = 0;\n}\n\nunsigned int hash(const char *key, size_t size) {\n    unsigned int h = 0;\n    while (*key) {\n        h = h * 31 + (unsigned char)*key++;\n    }\n    return h % size;\n}\n\nint ht_insert(HashTable *ht, const char *key, int value) {\n    unsigned int idx = hash(key, ht->size);\n    Entry *e = entry_create(key, value);\n    if (e == NULL) return -1;\n    e->next = ht->buckets[idx];\n    ht->buckets[idx] = e;\n    ht->count++;\n    return 0;\n}\n\nint ht_get(HashTable *ht, const char *key, int *out_value) {\n    unsigned int idx = hash(key, ht->size);\n    for (Entry *e = ht->buckets[idx]; e; e = e->next) {\n        if (strcmp(e->key, key) == 0) {\n            *out_value = e->value;\n            return 0;\n        }\n    }\n    return -1;  /* Not found */\n}\n\nvoid ht_free(HashTable *ht) {\n    for (size_t i = 0; i < ht->size; i++) {\n        Entry *e = ht->buckets[i];\n        while (e) {\n            Entry *next = e->next;\n            entry_free(e);\n            e = next;\n        }\n    }\n    free(ht->buckets);\n    ht->buckets = NULL;\n    ht->size = 0;\n    ht->count = 0;\n}\n\nint main(void) {\n    HashTable ht;\n    ht_init(&ht);\n\n    ht_insert(&ht, \"apple\", 5);\n    ht_insert(&ht, \"banana\", 3);\n    ht_insert(&ht, \"cherry\", 10);\n\n    int val;\n    const char *keys[] = {\"apple\", \"banana\", \"cherry\", \"grape\"};\n    for (int i = 0; i < 4; i++) {\n        if (ht_get(&ht, keys[i], &val) == 0) {\n            printf(\"%s -> %d\\n\", keys[i], val);\n        } else {\n            printf(\"%s -> not found\\n\", keys[i]);\n        }\n    }\n\n    ht_free(&ht);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apple -> 5\nbanana -> 3\ncherry -> 10\ngrape -> not found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1118-summary-and-exercises",
      children: "11.18 Summary and Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Static memory"
          }), " is allocated at compile time, lives for the program duration, and is zero-initialized. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic memory"
          }), " (stack) is allocated at function entry, freed at function exit, and is not initialized. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic memory"
          }), " (heap) is allocated at runtime via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "malloc"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "calloc"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "realloc"
          }), ", persists until ", (0,jsx_runtime.jsx)(_components.code, {
            children: "free"
          }), ", and must be managed manually."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory layout"
          }), " of a C program: Text (code), Data (initialized globals), BSS (uninitialized globals), Heap (dynamic → grows up), Stack (locals → grows down)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "malloc"
          }), " allocates uninitialized memory. Always check for NULL return. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sizeof"
          }), " for portability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "calloc"
          }), " allocates and zero-initializes. It checks for integer overflow in the size multiplication. Prefer for arrays and structs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "realloc"
          }), " resizes an existing allocation. It may move the block. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Always use a temporary pointer"
          }), " → on failure, the original block is preserved."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "free"
          }), " returns memory to the heap. After free, the pointer is dangling. Set it to NULL. Never double-free or free non-malloc'd memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory leaks"
          }), " occur when allocated memory becomes unreachable. Every ", (0,jsx_runtime.jsx)(_components.code, {
            children: "malloc"
          }), " must have a matching ", (0,jsx_runtime.jsx)(_components.code, {
            children: "free"
          }), ". Use Valgrind to detect leaks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dangling pointers"
          }), " point to freed memory. Set pointers to NULL after free. Never return pointers to local variables."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory corruption"
          }), " (buffer overflow, use-after-free, double free) is undefined behavior → it can crash, corrupt data, or introduce security vulnerabilities. Use AddressSanitizer during development."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic arrays"
          }), " achieve O(1) amortized append by doubling capacity. They are the foundation of growable collections."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls-checklist",
      children: "Common Pitfalls Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting NULL check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash on OOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check malloc/calloc/realloc return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer overflow in size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate too little memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use calloc for arrays; check before multiply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using uninitialized memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use calloc or memset after malloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one in array access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupt adjacent data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds-check all indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak, OOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match every malloc with a free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freeing non-malloc pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only free what you malloc'd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap corruption, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set ptr to NULL after free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use after free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data corruption, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL after free; never dereference freed pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct realloc assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak on realloc failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use temp pointer pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returning stack address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate on heap if data must survive return"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate int array of n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *arr = malloc(n * sizeof(int));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate and zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *arr = calloc(n, sizeof(int));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *tmp = realloc(arr, new_n * sizeof(int)); if (tmp) arr = tmp;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(arr); arr = NULL;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct Point *p = malloc(sizeof(*p));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!ptr) { fprintf(stderr, \"malloc failed\\n\"); exit(1); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe free macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define SAFE_FREE(p) do { free(p); (p) = NULL; } while(0)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocation Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growable array (dynamic array)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "realloc"
            }), " doubling on overflow"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "da_free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list node"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), " per node on insertion"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "list_free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(strlen(s) + 1); strcpy(dst, s);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until caller frees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D dynamic array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int **m = malloc(r * sizeof(int*));"
            }), " then each row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until caller frees each row then the array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large buffer (10MB+)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(BIG)"
            }), " → stack cannot handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc(n, sizeof(Entry*))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ht_free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read file into memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(filesize + 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until caller frees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single large malloc, sub-allocated"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arena_destroy"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic string array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char*"
            }), " with per-string malloc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sa_free"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), "? When would you prefer each?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why must you use a temporary pointer with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), "? What happens if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), " fails?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a dangling pointer? List three ways to create one and how to prevent each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a memory leak and a use-after-free bug?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does Valgrind report and why is it useful?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is memory fragmentation? How does the allocator mitigate it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the memory layout of a C program. What lives in each segment?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), " safer than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memset"
        }), " for array allocation?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic Integer Array:"
          }), " Write a program that reads an unknown number of integers from the user (until EOF or a negative number), dynamically growing an array as needed. Print the sum, average, and all values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sorted Merge:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int *merge(const int *a, int na, const int *b, int nb)"
          }), " that allocates a new array and merges two sorted arrays into one sorted array. Return the pointer (caller must free it)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "2D Matrix with calloc:"
          }), " Write a program using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "calloc"
          }), " to create a 2D matrix of doubles. Ask the user for rows and columns. Fill with random values, compute the sum of each row, and print the matrix. Free all memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Growing String Buffer:"
          }), " Write a program that reads characters one at a time (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fgetc"
          }), ") into a dynamically growing buffer. Start with capacity 10, double when full. Print the final string."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "String Splitter:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "char **split(const char *str, char delim, int *count)"
          }), " that splits a string by a delimiter and returns a dynamically allocated array of dynamically allocated strings. The caller must free all returned memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic Stack:"
          }), " Implement a dynamic stack (LIFO) using a dynamic array. Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "push"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pop"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "peek"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is_empty"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "free"
          }), " operations. Test with 100 elements."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Student Records:"
          }), " Define a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Student"
          }), " struct (name, ID, GPA). Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "calloc"
          }), " to create an array of students. Read data from the user. Print all students sorted by GPA (use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "qsort"
          }), "). Free all memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Matrix Transpose:"
          }), " Write a function that takes a dynamically allocated matrix and returns its transpose (new dynamic allocation). The caller must free both the original and the transpose."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "challenge-problem-arena-pool-allocator",
      children: "Challenge Problem: Arena (Pool) Allocator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a simple arena allocator: a struct that holds a large ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), "'d block and a current offset. Provide:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Arena *arena_create(size_t capacity)"
        }), " → allocate a new arena."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "void *arena_alloc(Arena *a, size_t size)"
        }), " → return a pointer to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), " bytes within the arena (advances the offset; no individual free)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "void arena_reset(Arena *a)"
        }), " → reset the offset to 0 (does not call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "void arena_destroy(Arena *a)"
        }), " → free the entire arena block."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Demonstrate that arena allocation is faster than many individual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " calls by timing both approaches for allocating 100,000 small blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\ntypedef struct {\n    char *memory;\n    size_t capacity;\n    size_t offset;\n} Arena;\n\nArena *arena_create(size_t capacity) {\n    Arena *a = (Arena*)malloc(sizeof(*a));\n    if (a == NULL) return NULL;\n    a->memory = (char*)malloc(capacity);\n    if (a->memory == NULL) { free(a); return NULL; }\n    a->capacity = capacity;\n    a->offset = 0;\n    return a;\n}\n\nvoid *arena_alloc(Arena *a, size_t size) {\n    /* Align to 8 bytes */\n    size_t aligned = (size + 7) & ~7;\n    if (a->offset + aligned > a->capacity) return NULL;\n    void *ptr = a->memory + a->offset;\n    a->offset += aligned;\n    return ptr;\n}\n\nvoid arena_reset(Arena *a) {\n    a->offset = 0;\n}\n\nvoid arena_destroy(Arena *a) {\n    if (a) {\n        free(a->memory);\n        free(a);\n    }\n}\n\nint main(void) {\n    const int NUM_ALLOCS = 100000;\n    clock_t start, end;\n\n    /* Arena allocation */\n    Arena *arena = arena_create(1024 * 1024);  /* 1 MB arena */\n    if (arena == NULL) return 1;\n\n    start = clock();\n    for (int i = 0; i < NUM_ALLOCS; i++) {\n        int *p = (int*)arena_alloc(arena, sizeof(int));\n        if (p == NULL) { printf(\"Arena exhausted at iteration %d\\n\", i); break; }\n        *p = i;\n    }\n    end = clock();\n    double arena_time = (double)(end - start) / CLOCKS_PER_SEC;\n    arena_destroy(arena);\n\n    /* Individual malloc allocation */\n    start = clock();\n    for (int i = 0; i < NUM_ALLOCS; i++) {\n        int *p = (int*)malloc(sizeof(int));\n        if (p == NULL) break;\n        *p = i;\n        free(p);\n    }\n    end = clock();\n    double malloc_time = (double)(end - start) / CLOCKS_PER_SEC;\n\n    printf(\"Arena allocator: %.6f seconds for %d allocations\\n\",\n           arena_time, NUM_ALLOCS);\n    printf(\"malloc + free:   %.6f seconds for %d allocations\\n\",\n           malloc_time, NUM_ALLOCS);\n    printf(\"Speedup: %.2fx\\n\", malloc_time / arena_time);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Arena allocator: 0.000231 seconds for 100000 allocations\nmalloc + free:   0.048922 seconds for 100000 allocations\nSpeedup: 211.78x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 11: Dynamic Memory Allocation"
        }), " → End of chapter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This chapter covered the complete depth of C dynamic memory management: static vs dynamic allocation, stack vs heap, the full memory layout, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), " with analogies, dry runs, complexity analysis, and edge cases. It covered memory leaks, dangling pointers, memory corruption, dynamic arrays, Valgrind detection, comparison tables, 20 interview Q&As, and real-world applications including arena allocators, linked lists, hash tables, and embedded pool allocators. The unifying theme: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "every allocation must be matched with a free → the heap is not a garbage collector."
        })]
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