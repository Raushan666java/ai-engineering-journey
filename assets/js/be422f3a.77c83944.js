"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4266],{

/***/ 7613
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_09_stl_containers_md_be4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-09-stl-containers-md-be4.json
const site_docs_courses_oop_cpp_09_stl_containers_md_be4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/09-stl-containers","title":"Chapter 9: STL Containers -- In-Depth Mastery","description":"Previous 10-stl-algorithms","source":"@site/docs/courses/oop-cpp/09-stl-containers.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/09-stl-containers","permalink":"/ai-engineering-journey/oop-cpp/09-stl-containers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-stl-containers","slug":"/oop-cpp/09-stl-containers","title":"Chapter 9: STL Containers -- In-Depth Mastery","sidebar_label":"Chapter 9: STL Containers -- In-Depth Mastery","sidebar_position":9},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 8: Exception Handling","permalink":"/ai-engineering-journey/oop-cpp/08-exceptions"},"next":{"title":"Chapter 10: STL Algorithms — Master the C++ Standard Template Library","permalink":"/ai-engineering-journey/oop-cpp/10-stl-algorithms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/oop-cpp/09-stl-containers.md


const frontMatter = {
	id: '09-stl-containers',
	slug: '/oop-cpp/09-stl-containers',
	title: 'Chapter 9: STL Containers -- In-Depth Mastery',
	sidebar_label: 'Chapter 9: STL Containers -- In-Depth Mastery',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: STL Containers -- In-Depth Mastery';

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
  "value": "9.1 Introduction to STL Containers",
  "id": "91-introduction-to-stl-containers",
  "level": 2
}, {
  "value": "What Are STL Containers?",
  "id": "what-are-stl-containers",
  "level": 3
}, {
  "value": "Container Taxonomy Overview",
  "id": "container-taxonomy-overview",
  "level": 3
}, {
  "value": "Why Container Choice Matters",
  "id": "why-container-choice-matters",
  "level": 3
}, {
  "value": "The Iterator Layer",
  "id": "the-iterator-layer",
  "level": 3
}, {
  "value": "9.2 Sequence Containers -- Deep Dive",
  "id": "92-sequence-containers----deep-dive",
  "level": 2
}, {
  "value": "9.2.1 std::vector -- The Dynamic Array",
  "id": "921-stdvector----the-dynamic-array",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation",
  "level": 4
}, {
  "value": "9.2.2 std::deque -- Double-Ended Queue",
  "id": "922-stddeque----double-ended-queue",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-1",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why-1",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-1",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-1",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-1",
  "level": 4
}, {
  "value": "<strong>Key difference from vector:</strong> deque push_front/push_back invalidates ALL iterators (because the central map pointer array may be reallocated), but not references to existing elements (because elements themselves never move). Vector invalidates both on reallocation.",
  "id": "key-difference-from-vector-deque-push_frontpush_back-invalidates-all-iterators-because-the-central-map-pointer-array-may-be-reallocated-but-not-references-to-existing-elements-because-elements-themselves-never-move-vector-invalidates-both-on-reallocation",
  "level": 2
}, {
  "value": "9.2.3 std::list -- Doubly-Linked List",
  "id": "923-stdlist----doubly-linked-list",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-2",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why-2",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-2",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-2",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-2",
  "level": 4
}, {
  "value": "9.2.4 std::forward_list -- Singly-Linked List",
  "id": "924-stdforward_list----singly-linked-list",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-3",
  "level": 4
}, {
  "value": "Time Complexity",
  "id": "time-complexity",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-3",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-3",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-3",
  "level": 4
}, {
  "value": "9.2.5 std::array -- Fixed-Size Array",
  "id": "925-stdarray----fixed-size-array",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-4",
  "level": 4
}, {
  "value": "Time Complexity",
  "id": "time-complexity-1",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-4",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-4",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-4",
  "level": 4
}, {
  "value": "9.3 Associative Containers (Ordered)",
  "id": "93-associative-containers-ordered",
  "level": 2
}, {
  "value": "9.3.1 std::set -- Unique Sorted Keys",
  "id": "931-stdset----unique-sorted-keys",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 4
}, {
  "value": "Internal Implementation: Red-Black Tree",
  "id": "internal-implementation-red-black-tree",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why-3",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-5",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-5",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-5",
  "level": 4
}, {
  "value": "9.3.2 std::multiset -- Sorted Set Allowing Duplicates",
  "id": "932-stdmultiset----sorted-set-allowing-duplicates",
  "level": 3
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-5",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-6",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-6",
  "level": 4
}, {
  "value": "9.3.3 std::map -- Sorted Key-Value Dictionary",
  "id": "933-stdmap----sorted-key-value-dictionary",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-6",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why-4",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-7",
  "level": 4
}, {
  "value": "The operator[] Pitfall",
  "id": "the-operator-pitfall",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-6",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-7",
  "level": 4
}, {
  "value": "9.3.4 std::multimap -- Sorted Map Allowing Duplicate Keys",
  "id": "934-stdmultimap----sorted-map-allowing-duplicate-keys",
  "level": 3
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-8",
  "level": 4
}, {
  "value": "9.4 Unordered Containers",
  "id": "94-unordered-containers",
  "level": 2
}, {
  "value": "9.4.1 std::unordered_set -- Hash-Based Unique Set",
  "id": "941-stdunordered_set----hash-based-unique-set",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 4
}, {
  "value": "Internal Implementation: Hash Table with Chaining",
  "id": "internal-implementation-hash-table-with-chaining",
  "level": 4
}, {
  "value": "Time Complexity with WHY",
  "id": "time-complexity-with-why-5",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-9",
  "level": 4
}, {
  "value": "Memory Overhead",
  "id": "memory-overhead-7",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-8",
  "level": 4
}, {
  "value": "9.4.2 std::unordered_map -- Hash Table Key-Value Dictionary",
  "id": "942-stdunordered_map----hash-table-key-value-dictionary",
  "level": 3
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-10",
  "level": 4
}, {
  "value": "Custom Hash and Key Equality",
  "id": "custom-hash-and-key-equality",
  "level": 4
}, {
  "value": "Hash Quality and Performance",
  "id": "hash-quality-and-performance",
  "level": 4
}, {
  "value": "Iterator Invalidation",
  "id": "iterator-invalidation-9",
  "level": 4
}, {
  "value": "Same as unordered_set: insert may invalidate all iterators if rehash occurs; erase invalidates only the erased element; rehash and reserve invalidate all.",
  "id": "same-as-unordered_set-insert-may-invalidate-all-iterators-if-rehash-occurs-erase-invalidates-only-the-erased-element-rehash-and-reserve-invalidate-all",
  "level": 2
}, {
  "value": "9.5 Container Adapters",
  "id": "95-container-adapters",
  "level": 2
}, {
  "value": "9.5.1 std::stack -- LIFO (Last-In, First-Out)",
  "id": "951-stdstack----lifo-last-in-first-out",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-7",
  "level": 4
}, {
  "value": "Time Complexity",
  "id": "time-complexity-2",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-11",
  "level": 4
}, {
  "value": "9.5.2 std::queue -- FIFO (First-In, First-Out)",
  "id": "952-stdqueue----fifo-first-in-first-out",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-8",
  "level": 4
}, {
  "value": "Time Complexity",
  "id": "time-complexity-3",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-12",
  "level": 4
}, {
  "value": "9.5.3 std::priority_queue -- Max-Heap",
  "id": "953-stdpriority_queue----max-heap",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 4
}, {
  "value": "Internal Implementation",
  "id": "internal-implementation-9",
  "level": 4
}, {
  "value": "Time Complexity",
  "id": "time-complexity-4",
  "level": 4
}, {
  "value": "C++ Code with Output",
  "id": "c-code-with-output-13",
  "level": 4
}, {
  "value": "Changing Priority Container",
  "id": "changing-priority-container",
  "level": 4
}, {
  "value": "9.6 Container Selection Guide",
  "id": "96-container-selection-guide",
  "level": 2
}, {
  "value": "Decision Flow",
  "id": "decision-flow",
  "level": 3
}, {
  "value": "When to Use Each Container",
  "id": "when-to-use-each-container",
  "level": 3
}, {
  "value": "Performance Decision Matrix",
  "id": "performance-decision-matrix",
  "level": 3
}, {
  "value": "9.7 Iterator Invalidation Rules -- Complete Reference",
  "id": "97-iterator-invalidation-rules----complete-reference",
  "level": 2
}, {
  "value": "Master Invalidation Table",
  "id": "master-invalidation-table",
  "level": 3
}, {
  "value": "Reference Invalidation vs Iterator Invalidation",
  "id": "reference-invalidation-vs-iterator-invalidation",
  "level": 3
}, {
  "value": "Common Pitfalls and Correct Patterns",
  "id": "common-pitfalls-and-correct-patterns",
  "level": 3
}, {
  "value": "Pitfall 1: Erasing in a Loop",
  "id": "pitfall-1-erasing-in-a-loop",
  "level": 4
}, {
  "value": "Pitfall 2: Using Iterator After Container Mutation",
  "id": "pitfall-2-using-iterator-after-container-mutation",
  "level": 4
}, {
  "value": "Pitfall 3: Inserting While Iterating",
  "id": "pitfall-3-inserting-while-iterating",
  "level": 4
}, {
  "value": "Pitfall 4: Assuming Deque push_back Leaves Iterators Valid",
  "id": "pitfall-4-assuming-deque-push_back-leaves-iterators-valid",
  "level": 4
}, {
  "value": "Pitfall 5: Invalidation in unordered_map During Insert",
  "id": "pitfall-5-invalidation-in-unordered_map-during-insert",
  "level": 4
}, {
  "value": "Safe Erase Idiom Reference",
  "id": "safe-erase-idiom-reference",
  "level": 3
}, {
  "value": "9.8 Deep Comparisons",
  "id": "98-deep-comparisons",
  "level": 2
}, {
  "value": "9.8.1 Sequence vs Associative vs Unordered Containers",
  "id": "981-sequence-vs-associative-vs-unordered-containers",
  "level": 3
}, {
  "value": "9.8.2 std::vector vs std::deque vs std::list",
  "id": "982-stdvector-vs-stddeque-vs-stdlist",
  "level": 3
}, {
  "value": "Head-to-Head Comparison Matrix",
  "id": "head-to-head-comparison-matrix",
  "level": 4
}, {
  "value": "Detailed Analysis",
  "id": "detailed-analysis",
  "level": 4
}, {
  "value": "9.8.3 std::map vs std::unordered_map",
  "id": "983-stdmap-vs-stdunordered_map",
  "level": 3
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 4
}, {
  "value": "Empirical Performance",
  "id": "empirical-performance",
  "level": 4
}, {
  "value": "9.9 Memory Overhead Comparison",
  "id": "99-memory-overhead-comparison",
  "level": 2
}, {
  "value": "Per-Element Overhead (for int on 64-bit Linux)",
  "id": "per-element-overhead-for-int-on-64-bit-linux",
  "level": 3
}, {
  "value": "1 Million ints -- Total Memory Estimate",
  "id": "1-million-ints----total-memory-estimate",
  "level": 3
}, {
  "value": "Container Size (sizeof the container object itself)",
  "id": "container-size-sizeof-the-container-object-itself",
  "level": 3
}, {
  "value": "9.10 Applications in Real Systems",
  "id": "910-applications-in-real-systems",
  "level": 2
}, {
  "value": "std::vector: The Universal Sequence",
  "id": "stdvector-the-universal-sequence",
  "level": 3
}, {
  "value": "std::unordered_map: The Fast Dictionary",
  "id": "stdunordered_map-the-fast-dictionary",
  "level": 3
}, {
  "value": "std::map: When Order Matters",
  "id": "stdmap-when-order-matters",
  "level": 3
}, {
  "value": "std::deque: The Double-Ended Workhorse",
  "id": "stddeque-the-double-ended-workhorse",
  "level": 3
}, {
  "value": "std::priority_queue: Priority-Based Processing",
  "id": "stdpriority_queue-priority-based-processing",
  "level": 3
}, {
  "value": "9.11 Interview Corner",
  "id": "911-interview-corner",
  "level": 2
}, {
  "value": "Q1: &quot;Why is std::vector usually preferred over std::list?&quot;",
  "id": "q1-why-is-stdvector-usually-preferred-over-stdlist",
  "level": 3
}, {
  "value": "Q2: &quot;When would you choose std::map over std::unordered_map?&quot;",
  "id": "q2-when-would-you-choose-stdmap-over-stdunordered_map",
  "level": 3
}, {
  "value": "Q3: &quot;Explain iterator invalidation. Give examples for vector and list.&quot;",
  "id": "q3-explain-iterator-invalidation-give-examples-for-vector-and-list",
  "level": 3
}, {
  "value": "Q4: &quot;Implement a thread-safe frequency counter using STL containers. Which container would you use and why?&quot;",
  "id": "q4-implement-a-thread-safe-frequency-counter-using-stl-containers-which-container-would-you-use-and-why",
  "level": 3
}, {
  "value": "Q5: &quot;What happens when a vector&#39;s capacity is exceeded during push_back? Walk through the steps.&quot;",
  "id": "q5-what-happens-when-a-vectors-capacity-is-exceeded-during-push_back-walk-through-the-steps",
  "level": 3
}, {
  "value": "Q6: &quot;What is the erase-remove idiom and why is it necessary?&quot;",
  "id": "q6-what-is-the-erase-remove-idiom-and-why-is-it-necessary",
  "level": 3
}, {
  "value": "Q7: &quot;Compare the performance of deque vs vector for a producer-consumer scenario.&quot;",
  "id": "q7-compare-the-performance-of-deque-vs-vector-for-a-producer-consumer-scenario",
  "level": 3
}, {
  "value": "9.12 Summary",
  "id": "912-summary",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Chapter Exercises",
  "id": "chapter-exercises",
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
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-9-stl-containers----in-depth-mastery",
        children: "Chapter 9: STL Containers -- In-Depth Mastery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/08-exceptions",
          children: "08-exceptions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/10-stl-algorithms",
          children: "10-stl-algorithms"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify STL containers into sequence, associative, unordered, and adapter categories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the internal implementation of each container (dynamic array, RB-tree, hash table, chunked array)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the optimal container for any given problem using complexity analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write correct code that respects iterator invalidation rules for every container"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare containers head-to-head on time complexity, memory overhead, and use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions about STL container internals and trade-offs with confidence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Container Taxonomy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence, associative, unordered, adapters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match container to access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array, contiguous memory, O(1) index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default container; reserve() when size known"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::deque"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunked blocks, O(1) push/pop both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for FIFO; not contiguous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly-linked nodes, O(1) insert at iterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-heavy; measure before using"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::forward_list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly-linked, minimal memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When only forward traversal needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size stack array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead, compile-time size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::set/map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree, O(log n) sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order matters; range queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::unordered_set/map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table, average O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed matters; order irrelevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Container Adaptors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stack, queue, priority_queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted interface over sequence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator Invalidation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies by container and operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for correctness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[STL Containers] --> B[Sequence]\r\n    A --> C[Associative Ordered]\r\n    A --> D[Associative Unordered]\r\n    A --> E[Container Adaptors]\r\n    B --> B1[vector]\r\n    B --> B2[deque]\r\n    B --> B3[list]\r\n    B --> B4[forward_list]\r\n    B --> B5[array]\r\n    C --> C1[set / multiset]\r\n    C --> C2[map / multimap]\r\n    D --> D1[unordered_set]\r\n    D --> D2[unordered_map]\r\n    E --> E1[stack]\r\n    E --> E2[queue]\r\n    E --> E3[priority_queue]\r\n    C1 --> F[\"Red-Black Tree O(log n)\"]\r\n    D1 --> G[\"Hash Table O(1) avg\"]\r\n    B1 --> H[Dynamic Array]\r\n    B2 --> I[Chunked Blocks]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-introduction-to-stl-containers",
      children: "9.1 Introduction to STL Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-stl-containers",
      children: "What Are STL Containers?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STL containers are generic data structures that store collections of objects. They manage memory automatically, provide uniform access through iterators, and offer guaranteed time complexities defined by the C++ Standard. The STL separates data storage (containers) from algorithms via iterators -- this decoupling is the heart of generic programming in C++."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every STL container provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "begin() / end()"
        }), " iterators for traversal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "size() / empty()"
        }), " for capacity queries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "insert() / erase()"
        }), " for mutation (exact signatures vary)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "swap()"
        }), " for constant-time exchange (most containers)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-taxonomy-overview",
      children: "Container Taxonomy Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C++ standard divides containers into four families:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lookup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal Structure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, deque, list, forward_list, array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous / linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered Associative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set, multiset, map, multimap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key order (operator<)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-Black tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered Associative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_set, unordered_map, unordered_multiset, unordered_multimap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table with chaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Adaptors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stack, queue, priority_queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO / FIFO / heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraps sequence container"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-container-choice-matters",
      children: "Why Container Choice Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A wrong container choice can degrade performance by 10x-1000x. Common mistakes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vector"
        }), " suffices (cache misses kill performance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unordered_map"
        }), " works (extra log n factor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vector"
        }), " for a queue (O(n) pop_front instead of O(1))"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not reserving ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vector"
        }), " capacity (repeated reallocation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Start with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unordered_map"
      }), ". Only switch when you have measured and proven a bottleneck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-iterator-layer",
      children: "The Iterator Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterators are the glue between containers and algorithms. Each container exposes iterator types:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, deque, array, string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "it+n"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it-n"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it[n]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it1-it2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list, set, map, multiset, multimap"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++it"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--it"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forward_list, unordered_set/map"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++it"
            }), " only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input/Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(stream iterators)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-pass read/write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-sequence-containers----deep-dive",
      children: "9.2 Sequence Containers -- Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence containers store elements in a linear order determined by insertion. Each offers different trade-offs among insertion speed, lookup speed, memory overhead, and iterator capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "921-stdvector----the-dynamic-array",
      children: "9.2.1 std::vector -- The Dynamic Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An apartment building with numbered units. The building (memory block) holds tenants (elements) in adjacent rooms. When all rooms are full, management builds a new larger building and moves everyone -- this is costly but happens rarely. You can instantly access any apartment by its number (O(1) index). Adding a tenant at the end is usually fast unless a new building is needed. Adding in the middle requires shifting all subsequent tenants down the hall."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " manages three pointers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_start"
        }), " -- beginning of allocated storage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_finish"
        }), " -- one past the last constructed element"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_end_of_storage"
        }), " -- one past the end of allocated memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[_start]                            [_finish]    [_end_of_storage]\r\n   |                                     |             |\r\n   v                                     v             v\r\n+-----+-----+-----+-----+-----+-----+-----+-----+\r\n|  10 |  20 |  30 |  40 |  50 |     |     |     |\r\n+-----+-----+-----+-----+-----+-----+-----+-----+\r\n  size = 5                       capacity = 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_back"
      }), " is called:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size < capacity"
        }), ": construct element at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_finish"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_finish"
        }), ". O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size == capacity"
        }), ": allocate new block (1.5x-2x larger), move all elements, destroy old, adjust pointers. O(n) -- but amortized O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The growth factor is implementation-defined:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GCC libstdc++: 2x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLVM libc++: 2x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MSVC: 1.5x"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pointer arithmetic: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(start + index)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "at()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as [] plus bounds check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference start/end-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually O(1); occasional reallocation O(n) averages out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroy last element, decrement _finish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(pos, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift all elements after pos by 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift all elements after pos by 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "capacity()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer subtraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reserve(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate and move if n > capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shrink_to_fit()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reallocate to exactly fit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is push_back amortized O(1)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a sequence of N push_back operations. Capacity grows geometrically (e.g., 1, 2, 4, 8, 16...). Total copy cost = sum of capacities at each reallocation = 1 + 2 + 4 + ... + N/2 + N = 2N - 1. Spread over N operations: (2N - 1) / N = 2 - 1/N ≈ O(1) per operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is insert in the middle O(n)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Because vector stores elements contiguously. Inserting at position ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " requires moving elements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[i, size)"
      }), " one position right via memmove or element-wise assignment. In the worst case (insert at front), this copies all N elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\r\n#include <iostream>\r\n#include <string>\r\n\r\nvoid print_vec(const std::vector<int>& v, const std::string& label) {\r\n    std::cout << label << \" [size=\" << v.size()\r\n              << \", cap=\" << v.capacity() << \"]: \";\r\n    for (int x : v) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n}\r\n\r\nint main() {\r\n    // Default construction\r\n    std::vector<int> v;\r\n    print_vec(v, \"empty\");\r\n\r\n    // push_back -- grows dynamically\r\n    v.push_back(10);\r\n    v.push_back(20);\r\n    v.push_back(30);\r\n    print_vec(v, \"after 3 pushes\");\r\n\r\n    // reserve to avoid reallocation\r\n    v.reserve(20);\r\n    std::cout << \"after reserve(20): capacity=\" << v.capacity() << \"\\n\";\r\n\r\n    // insert in the middle\r\n    v.insert(v.begin() + 1, 15);   // inserts 15 before index 1\r\n    print_vec(v, \"after insert at pos 1\");\r\n\r\n    // erase in the middle\r\n    v.erase(v.begin() + 3);        // removes index 3 (was 30)\r\n    print_vec(v, \"after erase at pos 3\");\r\n\r\n    // pop_back\r\n    v.pop_back();                   // removes last element\r\n    print_vec(v, \"after pop_back\");\r\n\r\n    // random access\r\n    std::cout << \"v[0]=\" << v[0] << \", v[2]=\" << v[2] << \"\\n\";\r\n\r\n    // bounds-checked access\r\n    try {\r\n        int x = v.at(100);           // throws std::out_of_range\r\n    } catch (const std::out_of_range& e) {\r\n        std::cout << \"at(100) threw: \" << e.what() << \"\\n\";\r\n    }\r\n\r\n    // assign / fill constructor\r\n    std::vector<int> filled(5, 42);\r\n    print_vec(filled, \"filled(5, 42)\");\r\n\r\n    // range constructor\r\n    std::vector<int> copied(filled.begin(), filled.end());\r\n    print_vec(copied, \"range-constructed\");\r\n\r\n    // initializer list\r\n    std::vector<int> init{1, 2, 3, 4, 5};\r\n    print_vec(init, \"init list\");\r\n\r\n    // emplace_back -- constructs in-place, avoids copy\r\n    std::vector<std::pair<int, std::string>> pairs;\r\n    pairs.emplace_back(1, \"one\");    // constructs pair<int,string> in place\r\n    pairs.emplace_back(2, \"two\");\r\n    std::cout << \"emplace_back: pairs[0]=(\" << pairs[0].first\r\n              << \", \" << pairs[0].second << \")\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "empty [size=0, cap=0]:\r\nafter 3 pushes [size=3, cap=3]: 10 20 30\r\nafter reserve(20): capacity=20\r\nafter insert at pos 1 [size=4, cap=20]: 10 15 20 30\r\nafter erase at pos 3 [size=3, cap=20]: 10 15 20\r\nafter pop_back [size=2, cap=20]: 10 15\r\nv[0]=10, v[2]=20\r\nat(100) threw: vector::_M_range_check: __n (which is 100) >= this->size() (which is 2)\r\nfilled(5, 42) [size=5, cap=5]: 42 42 42 42 42\r\nrange-constructed [size=5, cap=5]: 42 42 42 42 42\r\ninit list [size=5, cap=5]: 1 2 3 4 5\r\nemplace_back: pairs[0]=(1, one)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " itself is 3 pointers on the stack (24 bytes on 64-bit). The heap allocation is exactly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "capacity * sizeof(T)"
      }), " bytes -- no per-element overhead. This is the most memory-efficient dynamic container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(vector<int>) = 24 bytes (stack)\r\nHeap: capacity * sizeof(int) = capacity * 4 bytes (exactly)\r\nTotal per element: sizeof(T) with zero overhead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation",
      children: "Iterator Invalidation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vector Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator/Reference Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "emplace_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if reallocation occurs; none otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To the popped element only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "emplace()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All after insertion point; all if reallocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At and after erased position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reserve()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if reallocation occurs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resize()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if reallocation occurs; else past-old-end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (iterators refer to new container)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "922-stddeque----double-ended-queue",
      children: "9.2.2 std::deque -- Double-Ended Queue"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A train with multiple carriages. Each carriage is a fixed-size block of seats. The train can add or remove carriages at either end (O(1)). You can walk between carriages to reach any seat, but jumping from seat 0 in carriage 1 to seat 0 in carriage 2 requires crossing the coupling -- slightly more work than a single contiguous hallway."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-1",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::deque"
      }), " is implemented as a sequence of fixed-size blocks (typically 512 bytes of element storage) managed by a central map (pointer array to blocks):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Central Map (array of block pointers):\r\n+-------+-------+-------+-------+-------+\r\n|  ptr  |  ptr  |  ptr  |  ptr  |  ptr  |\r\n+-------+-------+-------+-------+-------+\r\n    |       |       |       |       |\r\n    v       v       v       v       v\r\n+------+ +------+ +------+ +------+ +------+\r\n| 0..63 | |64..127| |128..191| |192..255| |256..319|\r\n+------+ +------+ +------+ +------+ +------+\r\n Block0   Block1   Block2   Block3   Block4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key design features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks are fixed-size chunks (typically 64 elements of int, or 512 bytes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The central map grows/shrinks as blocks are added/removed at ends"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Indexing: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deque[i] = block[i / block_size][i % block_size]"
        }), " -- two dereferences"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No reallocation of existing elements when growing at ends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why-1",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer dereference: block + offset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate new block or use existing space in front block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as push_front but at tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrement front pointer; free block if empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same at end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            }), " middle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift elements within blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            }), " middle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct block pointer access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why are push_front and push_back both O(1)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because deque maintains spare capacity at both ends. The central map is a circular buffer of block pointers. Adding at the front either: (a) uses a free slot in the existing front block, or (b) allocates a new block and adds its pointer to the central map. Both are O(1). No existing elements are ever moved."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is deque random access slightly slower than vector?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Because indexing requires an extra division and modulo: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block_offset = index / block_size; slot = index % block_size; return map[block_offset][slot]"
      }), ". Vector is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*(start + index)"
      }), ". The two operations are both O(1), but deque's has a higher constant factor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-1",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <deque>\r\n#include <iostream>\r\n\r\nvoid print_deque(const std::deque<int>& d, const std::string& label) {\r\n    std::cout << label << \" [size=\" << d.size() << \"]: \";\r\n    for (int x : d) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n}\r\n\r\nint main() {\r\n    std::deque<int> d;\r\n\r\n    // push_back\r\n    d.push_back(20);\r\n    d.push_back(30);\r\n    print_deque(d, \"after push_back 20,30\");\r\n\r\n    // push_front\r\n    d.push_front(10);\r\n    d.push_front(5);\r\n    print_deque(d, \"after push_front 10,5\");\r\n\r\n    // random access\r\n    std::cout << \"d[0]=\" << d[0] << \" d[2]=\" << d[2] << \"\\n\";\r\n\r\n    // pop_front and pop_back\r\n    d.pop_front();        // removes 5\r\n    d.pop_back();         // removes 30\r\n    print_deque(d, \"after pop_front + pop_back\");\r\n\r\n    // insert in the middle (expensive)\r\n    auto it = d.begin() + 1;\r\n    d.insert(it, 99);\r\n    print_deque(d, \"after insert at position 1\");\r\n\r\n    // range-for iteration\r\n    std::cout << \"iteration: \";\r\n    for (auto it = d.begin(); it != d.end(); ++it)\r\n        std::cout << *it << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // large deque to demonstrate block allocation\r\n    std::deque<int> large;\r\n    for (int i = 0; i < 1000; ++i)\r\n        large.push_back(i);\r\n    std::cout << \"large deque size: \" << large.size()\r\n              << \", front=\" << large.front()\r\n              << \", back=\" << large.back() << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "after push_back 20,30 [size=2]: 20 30\r\nafter push_front 10,5 [size=4]: 5 10 20 30\r\nd[0]=5 d[2]=20\r\nafter pop_front + pop_back [size=2]: 10 20\r\nafter insert at position 1 [size=3]: 10 99 20\r\niteration: 10 99 20\r\nlarge deque size: 1000, front=0, back=999\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-1",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deque allocates memory in fixed-size blocks. It has some internal overhead:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Central map: one pointer per block (~8 bytes per 64 elements = 0.125 bytes/element)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block padding: if elements don't fill a block exactly, some space is wasted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-element storage: exactly sizeof(T)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compared to vector:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slightly more overhead due to block indirection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never needs to copy elements on growth (unlike vector reallocation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory is not contiguous -- blocks may be scattered in heap"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-1",
      children: "Iterator Invalidation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Deque Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator/Reference Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "push_front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iterators invalidated (central map may shift); references to other elements stay valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iterators invalidated; references to other elements stay valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            }), " middle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iterators and references invalidated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            }), " middle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iterators and references invalidated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            }), " front/back"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element invalidated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resize()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if resize changes size; references valid if not"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "key-difference-from-vector-deque-push_frontpush_back-invalidates-all-iterators-because-the-central-map-pointer-array-may-be-reallocated-but-not-references-to-existing-elements-because-elements-themselves-never-move-vector-invalidates-both-on-reallocation",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference from vector:"
      }), " deque push_front/push_back invalidates ALL iterators (because the central map pointer array may be reallocated), but not references to existing elements (because elements themselves never move). Vector invalidates both on reallocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "923-stdlist----doubly-linked-list",
      children: "9.2.3 std::list -- Doubly-Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A treasure hunt where each clue tells you where to find the next AND previous clue. You follow the chain forward or backward. To find the 100th clue, you must walk from the first clue all the way to the 100th -- no shortcut. Adding a new clue between two existing ones is easy: just rewrite two clue cards and the neighbor references."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-2",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::list"
      }), " is a doubly-linked circular list with a sentinel (dummy) node:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " Sentinel Node (end marker)\r\n+-----------+\r\n| prev | next| ---+\r\n+-----------+    |\r\n  ^              |\r\n  |              v\r\n+-----------+  +-----------+  +-----------+\r\n| prev | next|  | prev | next|  | prev | next|\r\n| val: 10   |  | val: 20   |  | val: 30   |\r\n+-----------+  +-----------+  +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node contains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A pointer to the previous node (8 bytes on 64-bit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A pointer to the next node (8 bytes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The element itself (sizeof(T))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The sentinel node's next points to the first element, and prev points to the last element, forming a circular structure. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end()"
      }), " returns an iterator to the sentinel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why-2",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentinel->next, Sentinel->prev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "push_front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite 4 pointers (2 neighbors + node)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite 2 pointers, deallocate node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(iterator, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given iterator, rewrite 4 pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(iterator)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given iterator, unlink node, deallocate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse from head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "splice()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just reassign pointers between lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sort()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort (list cannot use std::sort)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remove(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse entire list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) in C++11, O(1) in C++23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11 mandated O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is insert at iterator O(1)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before:\r\n  [A] <--> [B] <--> [C]\r\n            ^it\r\n\r\nInsert X at it:\r\n  Step 1: X.next = B\r\n  Step 2: X.prev = A\r\n  Step 3: A.next = X\r\n  Step 4: B.prev = X\r\n\r\nAfter:\r\n  [A] <--> [X] <--> [B] <--> [C]\r\n\r\nOnly 4 pointer assignments, regardless of list size.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why does list lack O(1) random access?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because nodes are scattered in memory. There is no arithmetic relationship between the address of node 0 and node 100. You must follow 100 \"next\" pointers to reach node 100."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-2",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <list>\r\n#include <iostream>\r\n#include <algorithm>\r\n\r\nvoid print_list(const std::list<int>& lst, const std::string& label) {\r\n    std::cout << label << \" [size=\" << lst.size() << \"]: \";\r\n    for (int x : lst) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n}\r\n\r\nint main() {\r\n    std::list<int> lst;\r\n\r\n    // push_front and push_back\r\n    lst.push_front(20);\r\n    lst.push_back(40);\r\n    lst.push_front(10);\r\n    lst.push_back(50);\r\n    print_list(lst, \"initial\");\r\n\r\n    // O(1) insert at iterator position\r\n    auto it = std::find(lst.begin(), lst.end(), 20);\r\n    if (it != lst.end())\r\n        lst.insert(it, 15);    // insert 15 before 20\r\n    print_list(lst, \"after insert 15 before 20\");\r\n\r\n    // splice -- move all elements from another list (O(1))\r\n    std::list<int> other{100, 200, 300};\r\n    auto splice_pos = lst.begin();\r\n    std::advance(splice_pos, 2);  // O(n) advance, but splice itself is O(1)\r\n    lst.splice(splice_pos, other); // move all of other into lst\r\n    std::cout << \"after splice (other empty=\" << other.empty() << \"): \";\r\n    for (int x : lst) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // erase at position (O(1))\r\n    auto to_erase = lst.begin();\r\n    std::advance(to_erase, 3);\r\n    lst.erase(to_erase);\r\n    print_list(lst, \"after erase pos 3\");\r\n\r\n    // pop_front and pop_back (O(1))\r\n    lst.pop_front();\r\n    lst.pop_back();\r\n    print_list(lst, \"after pop_front + pop_back\");\r\n\r\n    // merge two sorted lists\r\n    std::list<int> sorted_a{1, 3, 5, 7};\r\n    std::list<int> sorted_b{2, 4, 6, 8};\r\n    sorted_a.merge(sorted_b);   // both must be sorted\r\n    std::cout << \"merged: \";\r\n    for (int x : sorted_a) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // unique -- removes consecutive duplicates\r\n    std::list<int> dup{1, 1, 2, 2, 2, 3, 4, 4, 5};\r\n    dup.unique();\r\n    std::cout << \"after unique: \";\r\n    for (int x : dup) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initial [size=4]: 10 20 40 50\r\nafter insert 15 before 20 [size=5]: 10 15 20 40 50\r\nafter splice (other empty=true): 10 15 100 200 300 20 40 50\r\nafter erase pos 3 [size=7]: 10 15 100 300 20 40 50\r\nafter pop_front + pop_back [size=5]: 15 100 300 20 40\r\nmerged: 1 2 3 4 5 6 7 8\r\nafter unique: 1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-2",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "list has the highest per-element overhead of any standard container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node (64-bit):\r\n  next pointer:  8 bytes\r\n  prev pointer:  8 bytes\r\n  element value: sizeof(T) bytes\r\n  alignment padding: variable\r\n  ---\r\n  Total per node: sizeof(T) + 16 + padding\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list<int>"
      }), ": 4 + 16 = 20 bytes per element (400% overhead).\r\nFor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list<LargeStruct>"
      }), " (say 1000 bytes): 1000 + 16 = 1016 (1.6% overhead)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The memory allocator's overhead (block headers, alignment) adds more on top."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-2",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List iterators are the most stable in the STL:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "List Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator/Reference Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "push_front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the popped element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (node is linked in)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "splice()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (iterators transfer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "merge()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (nodes are relinked)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sort()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (relinks, not moves)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove_if()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only removed elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only removed elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resize()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased elements (if shrinking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Only the iterators pointing to the erased element are invalidated."
      }), " All others remain valid. This is the strongest invalidation guarantee in the STL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "924-stdforward_list----singly-linked-list",
      children: "9.2.4 std::forward_list -- Singly-Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A one-way treasure hunt where each clue only tells you where the NEXT clue is. You can only go forward. To insert a clue between two others, you need the clue BEFORE the insertion point (you must walk from the start to find it). Forward traversal is fast, but you can never go backward."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-3",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Identical to list but with only a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next"
      }), " pointer per node:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+     +-----------+     +-----------+\r\n| val: 10   |     | val: 20   |     | val: 30   |\r\n| next:  ---+---> | next:  ---+---> | next: null|\r\n+-----------+     +-----------+     +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Because it lacks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prev"
      }), " pointers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push_back()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop_back()"
        }), " (can't reach the tail from the head in O(1))"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size()"
        }), " -- computing size is O(n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "insert_after()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "erase_after()"
        }), " instead of insert/erase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Requires an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "before_begin()"
        }), " iterator for front operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity",
      children: "Time Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly-linked head insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly-linked head remove"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert_after()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given iterator before insertion point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase_after()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given iterator before erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk from head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "splice_after()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer reassignment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-3",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <forward_list>\r\n#include <iostream>\r\n\r\nvoid print_flist(const std::forward_list<int>& fl, const std::string& label) {\r\n    std::cout << label << \": \";\r\n    for (int x : fl) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n}\r\n\r\nint main() {\r\n    std::forward_list<int> fl;\r\n\r\n    // push_front (no push_back!)\r\n    fl.push_front(30);\r\n    fl.push_front(20);\r\n    fl.push_front(10);\r\n    print_flist(fl, \"initial\");\r\n\r\n    // insert_after\r\n    auto it = fl.begin();\r\n    fl.insert_after(it, 15);    // insert 15 after first element\r\n    print_flist(fl, \"after insert_after begin\");\r\n\r\n    // erase_after\r\n    auto prev = fl.begin();\r\n    fl.erase_after(prev);       // erase second element\r\n    print_flist(fl, \"after erase_after begin\");\r\n\r\n    // before_begin allows insert at front after construction\r\n    auto bb = fl.before_begin();\r\n    fl.insert_after(bb, 5);     // insert at very beginning\r\n    print_flist(fl, \"after insert_after before_begin\");\r\n\r\n    // no size() -- compute manually\r\n    int count = 0;\r\n    for (auto it = fl.begin(); it != fl.end(); ++it) ++count;\r\n    std::cout << \"computed size: \" << count << \"\\n\";\r\n\r\n    // sort and unique\r\n    std::forward_list<int> data{5, 3, 1, 4, 2, 3, 5, 1};\r\n    data.sort();\r\n    data.unique();\r\n    print_flist(data, \"sorted + unique\");\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initial: 10 20 30\r\nafter insert_after begin: 10 15 20 30\r\nafter erase_after begin: 10 20 30\r\nafter insert_after before_begin: 5 10 20 30\r\ncomputed size: 4\r\nsorted + unique: 1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-3",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node (64-bit):\r\n  next pointer:  8 bytes\r\n  element value: sizeof(T) bytes\r\n  ---\r\n  Total per node: sizeof(T) + 8 + padding\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Forward_list halves the pointer overhead of list: one pointer instead of two. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "forward_list<int>"
      }), ": 4 + 8 = 12 bytes (300% overhead vs vector's 4 bytes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-3",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same guarantees as list: only erased elements are invalidated. However, because forward_list is singly-linked, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insert_after"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "erase_after"
      }), " require an iterator to the element BEFORE the target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "925-stdarray----fixed-size-array",
      children: "9.2.5 std::array -- Fixed-Size Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A parking lot with a fixed number of spaces, assigned when the lot is built. You know exactly how many cars it can hold. No expansion is possible. Access is instant by space number."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-4",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::array<T, N>"
      }), " is a thin wrapper around a C-style array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T[N]"
      }), ". It contains no pointers, no heap allocation -- the data is stored directly inside the array object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory layout (on stack or as struct member):\r\n+-----+-----+-----+-----+\r\n|  0  |  1  |  2  |  ...|  N-1\r\n+-----+-----+-----+-----+\r\nsizeof(array<T,N>) = N * sizeof(T) (zero overhead)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The size must be a compile-time constant (template parameter)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-1",
      children: "Time Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) -- direct pointer arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "back()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fill(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) -- actually swaps elements (unlike vector's pointer swap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) -- compile-time constant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-4",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <array>\r\n#include <iostream>\r\n#include <algorithm>\r\n\r\nint main() {\r\n    // Construction with initializer\r\n    std::array<int, 5> arr{10, 20, 30, 40, 50};\r\n\r\n    // operator[]\r\n    std::cout << \"arr[2] = \" << arr[2] << \"\\n\";\r\n\r\n    // at() with bounds checking\r\n    try {\r\n        arr.at(10) = 100;\r\n    } catch (const std::out_of_range& e) {\r\n        std::cout << \"at(10) exception: \" << e.what() << \"\\n\";\r\n    }\r\n\r\n    // iteration\r\n    std::cout << \"elements: \";\r\n    for (int x : arr) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // fill\r\n    arr.fill(99);\r\n    std::cout << \"after fill(99): \";\r\n    for (int x : arr) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // size is compile-time constant\r\n    std::cout << \"size: \" << arr.size()\r\n              << \" (compile-time constant)\\n\";\r\n\r\n    // Get underlying C array (pointer)\r\n    int* raw = arr.data();\r\n    raw[0] = 42;\r\n    std::cout << \"after modifying via data(): arr[0]=\" << arr[0] << \"\\n\";\r\n\r\n    // array supports algorithms\r\n    std::array<int, 6> values{3, 1, 4, 1, 5, 9};\r\n    std::sort(values.begin(), values.end());\r\n    std::cout << \"sorted: \";\r\n    for (int x : values) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[2] = 30\r\nat(10) exception: array::at: __n (which is 10) >= _Nm (which is 5)\r\nelements: 10 20 30 40 50\r\nafter fill(99): 99 99 99 99 99\r\nsize: 5 (compile-time constant)\r\nafter modifying via data(): arr[0]=42\r\nsorted: 1 1 3 4 5 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-4",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zero. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(array<T,N>) == N * sizeof(T)"
      }), ". No heap allocation, no pointer indirection, no metadata. The array object IS the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-4",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since array has fixed size and no insert/erase operations, its iterators are always valid (unless the array object itself is destroyed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-associative-containers-ordered",
      children: "9.3 Associative Containers (Ordered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ordered associative containers store elements sorted by key using a comparison function (default: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator<"
      }), "). They are implemented as balanced binary search trees (typically Red-Black trees), guaranteeing O(log n) insert, erase, and find."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "931-stdset----unique-sorted-keys",
      children: "9.3.1 std::set -- Unique Sorted Keys"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A library filing system where books are arranged alphabetically on shelves. Every title appears at most once. To find a book, you use the alphabetically organized catalog, making about log2(N) comparisons for N books. When you add a book, it must be shelved in the correct position to maintain alphabetical order."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-red-black-tree",
      children: "Internal Implementation: Red-Black Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Red-Black tree is a self-balancing binary search tree with these properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every node is either red or black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The root is always black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Red nodes cannot have red children (no two reds in a row)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every path from root to leaf has the same number of black nodes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        (black) 30\r\n        /          \\\r\n   (red) 20      (red) 40\r\n    /    \\         /    \\\r\n(black)10 (black)25 (black)35 (black)50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These properties guarantee O(log n) height (max depth ≤ 2 * log2(n+1))."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree node structure (libstdc++):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "_Rb_tree_node:\r\n  _color:       1 byte (enum: _S_red, _S_black)\r\n  _parent:      8 bytes\r\n  _left:        8 bytes\r\n  _right:       8 bytes\r\n  padding:      ~7 bytes alignment\r\n  _M_storage:   sizeof(T) bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why-3",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse tree height h = ~log2(n), then recolor/rotate O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find node O(log n), then splice children O(1), recolor O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare at each level, go left/right, max log2(n) steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lower_bound()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree descent with floor tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "upper_bound()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as lower bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "equal_range()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound + upper_bound = 2*log(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "begin()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost node (cached)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must destroy and deallocate each node"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is set sorted?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Because insertion respects ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator<"
      }), ". When you insert 3, 1, 4:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "insert 3:   3(black)\r\ninsert 1:   3(black)\r\n           1(red)        // red child of 3\r\n            -- recolor: both children red? no -> rotate\r\n            1(black)\r\n              3(red)     // fix: root must be black\r\n            1(black)\r\n              3(red)\r\ninsert 4:   1(black)\r\n              3(red)\r\n                4(red)   // two reds in a row -> rotate\r\n            1(black)\r\n              4(black)\r\n            3(red)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In-order traversal always visits nodes in sorted order: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1, 3, 4"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-5",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <set>\r\n#include <iostream>\r\n\r\nint main() {\r\n    // Default construction (empty set)\r\n    std::set<int> s;\r\n\r\n    // insert (returns pair<iterator, bool>)\r\n    auto [it1, inserted1] = s.insert(30);\r\n    std::cout << \"insert 30: \" << (inserted1 ? \"inserted\" : \"already exists\") << \"\\n\";\r\n\r\n    auto [it2, inserted2] = s.insert(10);\r\n    std::cout << \"insert 10: \" << (inserted2 ? \"inserted\" : \"already exists\") << \"\\n\";\r\n\r\n    auto [it3, inserted3] = s.insert(20);\r\n    std::cout << \"insert 20: \" << (inserted3 ? \"inserted\" : \"already exists\") << \"\\n\";\r\n\r\n    auto [it4, inserted4] = s.insert(20);  // duplicate!\r\n    std::cout << \"insert 20 again: \" << (inserted4 ? \"inserted\" : \"already exists\") << \"\\n\";\r\n\r\n    // iteration is always sorted\r\n    std::cout << \"set contents (sorted): \";\r\n    for (int x : s) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // find\r\n    auto f = s.find(20);\r\n    if (f != s.end())\r\n        std::cout << \"found: \" << *f << \"\\n\";\r\n\r\n    // count (0 or 1 for set, can be >1 for multiset)\r\n    std::cout << \"count of 20: \" << s.count(20) << \"\\n\";\r\n    std::cout << \"count of 99: \" << s.count(99) << \"\\n\";\r\n\r\n    // lower_bound / upper_bound\r\n    std::set<int> data{1, 3, 5, 7, 9, 11, 13};\r\n    auto lb = data.lower_bound(6);   // first >= 6\r\n    auto ub = data.upper_bound(10);  // first > 10\r\n    std::cout << \"lower_bound(6) = \" << *lb << \"\\n\";\r\n    std::cout << \"upper_bound(10) = \" << *ub << \"\\n\";\r\n\r\n    // range query: all elements in [4, 10)\r\n    auto lo = data.lower_bound(4);\r\n    auto hi = data.upper_bound(10);\r\n    std::cout << \"elements in [4, 10): \";\r\n    for (auto it = lo; it != hi; ++it)\r\n        std::cout << *it << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // erase\r\n    data.erase(7);                     // by value (returns count of erased)\r\n    std::cout << \"after erase(7): \";\r\n    for (int x : data) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // initializer list constructor\r\n    std::set<int> init{9, 5, 1, 7, 3, 5, 1};  // duplicates ignored\r\n    std::cout << \"init list set: \";\r\n    for (int x : init) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // custom comparator (descending order)\r\n    std::set<int, std::greater<int>> desc{3, 1, 4, 1, 5, 9};\r\n    std::cout << \"descending set: \";\r\n    for (int x : desc) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "insert 30: inserted\r\ninsert 10: inserted\r\ninsert 20: inserted\r\ninsert 20 again: already exists\r\nset contents (sorted): 10 20 30\r\nfound: 20\r\ncount of 20: 1\r\ncount of 99: 0\r\nlower_bound(6) = 7\r\nupper_bound(10) = 11\r\nelements in [4, 10): 5 7 9\r\nafter erase(7): 1 3 5 9 11 13\r\ninit list set: 1 3 5 7 9\r\ndescending set: 9 5 4 3 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-5",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Per-node overhead (set<int> on 64-bit):\r\n  _Rb_tree_color:  1 byte (enum)\r\n  _Rb_tree_parent: 8 bytes (pointer)\r\n  _Rb_tree_left:   8 bytes (pointer)\r\n  _Rb_tree_right:  8 bytes (pointer)\r\n  padding:         7 bytes (alignment)\r\n  value:           4 bytes (int)\r\n  ---\r\n  Total per node:  ~36 bytes\r\n  For 1,000,000 ints:  36 MB (vs 4 MB for vector)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set has the highest memory overhead of any commonly used container. Each element carries ~32 bytes of tree pointers and coloring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-5",
      children: "Iterator Invalidation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Set Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator/Reference Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (tree structure unchanged for existing iterators)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(iter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the erased element(s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "find()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lower_bound()"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never invalidate iterators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "932-stdmultiset----sorted-set-allowing-duplicates",
      children: "9.3.2 std::multiset -- Sorted Set Allowing Duplicates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::multiset"
      }), " is identical to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::set"
      }), " but allows duplicate keys. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insert()"
      }), " always succeeds, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count()"
      }), " can return > 1, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equal_range()"
      }), " returns the range of all matching elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-5",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same Red-Black tree as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::set"
      }), ". libstdc++ stores duplicates in the tree (right child goes into the right subtree on equality). The tree stores ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " nodes for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " elements even if values repeat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-6",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <set>\r\n#include <iostream>\r\n\r\nint main() {\r\n    std::multiset<int> ms;\r\n\r\n    // Insert duplicates\r\n    ms.insert(10);\r\n    ms.insert(20);\r\n    ms.insert(10);        // allowed!\r\n    ms.insert(30);\r\n    ms.insert(10);        // allowed!\r\n    ms.insert(20);\r\n\r\n    std::cout << \"multiset contents: \";\r\n    for (int x : ms) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // count shows duplicates\r\n    std::cout << \"count(10) = \" << ms.count(10) << \"\\n\";\r\n    std::cout << \"count(20) = \" << ms.count(20) << \"\\n\";\r\n    std::cout << \"count(30) = \" << ms.count(30) << \"\\n\";\r\n\r\n    // equal_range\r\n    auto [lo, hi] = ms.equal_range(10);\r\n    std::cout << \"equal_range(10): \";\r\n    for (auto it = lo; it != hi; ++it)\r\n        std::cout << *it << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // erase(value) erases ALL occurrences\r\n    ms.erase(10);\r\n    std::cout << \"after erase(10): \";\r\n    for (int x : ms) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // erase(iterator) erases only one occurrence\r\n    ms.insert(10);\r\n    ms.insert(10);\r\n    auto it = ms.find(20);\r\n    ms.erase(it);                      // erases only one 20\r\n    std::cout << \"after single erase: \";\r\n    for (int x : ms) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "multiset contents: 10 10 10 20 20 30\r\ncount(10) = 3\r\ncount(20) = 2\r\ncount(30) = 1\r\nequal_range(10): 10 10 10\r\nafter erase(10): 20 20 30\r\nafter single erase: 10 10 20 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-6",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same as set: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insert()"
      }), " does not invalidate existing iterators; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "erase()"
      }), " invalidates only erased elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "933-stdmap----sorted-key-value-dictionary",
      children: "9.3.3 std::map -- Sorted Key-Value Dictionary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A physical dictionary (word → definition). Words are organized alphabetically. You can look up any word in O(log n) time using the book's index (binary search through dictionary pages). Adding a new word requires inserting it in the correct alphabetical position. Iterating through the dictionary gives words in alphabetical order."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-6",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::map<K, V>"
      }), " uses a Red-Black tree where each node stores a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::pair<const K, V>"
      }), ". The tree is ordered by key using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator<"
      }), " (or a custom comparator)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node:\r\n  +-----------------------------+\r\n  |  RB-tree metadata          |\r\n  |  (color, parent, left,     |\r\n  |   right)                   |\r\n  |  pair<const Key, Value>    |\r\n  +-----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " has special behavior:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key exists: returns reference to existing value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key does NOT exist: value-inserts a new pair (key, Value{}) and returns reference"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This means ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map[non_existent_key]"
        }), " always modifies the map!"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why-4",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find-or-create: tree descent to find key, insert if missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "at(key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree descent to find key; throws if missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert({k,v})"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree descent + balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find(key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare at each level, descend left/right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find + splice + balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "begin()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost node cached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached count"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-7",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <map>\r\n#include <iostream>\r\n#include <string>\r\n\r\nint main() {\r\n    // Default map\r\n    std::map<std::string, int> ages;\r\n\r\n    // Insert via operator[]\r\n    ages[\"Alice\"] = 30;\r\n    ages[\"Bob\"] = 25;\r\n    ages[\"Charlie\"] = 35;\r\n\r\n    // Insert via insert()\r\n    auto [it, ok] = ages.insert({\"David\", 28});\r\n    std::cout << \"David inserted: \" << (ok ? \"yes\" : \"no\") << \"\\n\";\r\n\r\n    // operator[] on existing key (no insertion)\r\n    ages[\"Alice\"] = 31;    // updates Alice to 31\r\n\r\n    // Iteration is sorted by key (alphabetical)\r\n    std::cout << \"\\nAll entries (sorted by key):\\n\";\r\n    for (const auto& [name, age] : ages)\r\n        std::cout << \"  \" << name << \": \" << age << \"\\n\";\r\n\r\n    // find\r\n    auto f = ages.find(\"Bob\");\r\n    if (f != ages.end())\r\n        std::cout << \"\\nFound Bob: age=\" << f->second << \"\\n\";\r\n\r\n    // at() -- safe lookup with exception\r\n    try {\r\n        int age = ages.at(\"Unknown\");\r\n    } catch (const std::out_of_range& e) {\r\n        std::cout << \"at(Unknown) threw: \" << e.what() << \"\\n\";\r\n    }\r\n\r\n    // operator[] inserts default if missing\r\n    int eveAge = ages[\"Eve\"];   // inserts Eve with value 0\r\n    std::cout << \"Eve's age (after default insert): \" << eveAge << \"\\n\";\r\n\r\n    // Check if operator[] modified the map\r\n    std::cout << \"Eve exists: \" << (ages.find(\"Eve\") != ages.end() ? \"yes\" : \"no\") << \"\\n\";\r\n\r\n    // lower_bound / upper_bound for range queries\r\n    std::map<int, std::string> scores;\r\n    scores[75] = \"C\";\r\n    scores[85] = \"B\";\r\n    scores[95] = \"A\";\r\n    scores[60] = \"D\";\r\n    scores[50] = \"F\";\r\n\r\n    auto lo = scores.lower_bound(70);   // first grade >= 70\r\n    auto hi = scores.upper_bound(90);   // first grade > 90\r\n    std::cout << \"\\nScores in [70, 90]:\\n\";\r\n    for (auto it = lo; it != hi; ++it)\r\n        std::cout << \"  \" << it->first << \" -> \" << it->second << \"\\n\";\r\n\r\n    // erase by key\r\n    scores.erase(60);\r\n    std::cout << \"\\nAfter erasing 60:\\n\";\r\n    for (const auto& [score, grade] : scores)\r\n        std::cout << \"  \" << score << \" -> \" << grade << \"\\n\";\r\n\r\n    // Custom comparator: descending order\r\n    std::map<std::string, int, std::greater<std::string>> desc;\r\n    desc[\"zebra\"] = 1;\r\n    desc[\"apple\"] = 2;\r\n    desc[\"mango\"] = 3;\r\n    std::cout << \"\\nDescending map:\\n\";\r\n    for (const auto& [k, v] : desc)\r\n        std::cout << \"  \" << k << \": \" << v << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "David inserted: yes\r\n\r\nAll entries (sorted by key):\r\n  Alice: 31\r\n  Bob: 25\r\n  Charlie: 35\r\n  David: 28\r\n\r\nFound Bob: age=25\r\nat(Unknown) threw: map::at:  key not found\r\nEve's age (after default insert): 0\r\nEve exists: yes\r\n\r\nScores in [70, 90]:\r\n  75 -> C\r\n  85 -> B\r\n\r\nAfter erasing 60:\r\n  50 -> F\r\n  75 -> C\r\n  85 -> B\r\n  95 -> A\r\n\r\nDescending map:\r\n  zebra: 1\r\n  mango: 3\r\n  apple: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-operator-pitfall",
      children: "The operator[] Pitfall"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::map<std::string, std::vector<int>> m;\r\nif (m[\"nonexistent\"].empty()) {   // BUG: inserts empty vector\r\n    // do something\r\n}\r\nstd::cout << m.size();    // 1 -- the map now has an entry!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a common source of logic bugs. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "at()"
      }), " when you want to check existence without modifying the map."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-6",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Per-node overhead is identical to set, plus the value:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Per-node (map<int, double> on 64-bit):\r\n  RB-tree metadata:   25 bytes (color + 3 pointers + padding)\r\n  pair<int,double>:   12 bytes (4 + 8)\r\n  ---\r\n  Total per node:     ~40 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-7",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same as set: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insert()"
      }), " does not invalidate existing iterators; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "erase()"
      }), " invalidates only erased element. References to elements are stable (not invalidated by insert or erase of other elements)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "934-stdmultimap----sorted-map-allowing-duplicate-keys",
      children: "9.3.4 std::multimap -- Sorted Map Allowing Duplicate Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::multimap"
      }), " allows multiple entries with the same key. It lacks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " (ambiguous -- which value would be returned?). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equal_range()"
      }), " to get all values for a key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-8",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <map>\r\n#include <iostream>\r\n#include <string>\r\n\r\nint main() {\r\n    std::multimap<std::string, int> inventory;\r\n\r\n    // insert multiple items with same key\r\n    inventory.insert({\"apple\", 10});\r\n    inventory.insert({\"banana\", 5});\r\n    inventory.insert({\"apple\", 3});    // another apple entry\r\n    inventory.insert({\"apple\", 7});    // and another\r\n    inventory.insert({\"cherry\", 1});\r\n\r\n    std::cout << \"All inventory:\\n\";\r\n    for (const auto& [item, qty] : inventory)\r\n        std::cout << \"  \" << item << \": \" << qty << \"\\n\";\r\n\r\n    // Count\r\n    std::cout << \"\\napple entries: \" << inventory.count(\"apple\") << \"\\n\";\r\n    std::cout << \"banana entries: \" << inventory.count(\"banana\") << \"\\n\";\r\n\r\n    // equal_range\r\n    auto [lo, hi] = inventory.equal_range(\"apple\");\r\n    std::cout << \"\\nAll apple quantities: \";\r\n    int total = 0;\r\n    for (auto it = lo; it != hi; ++it) {\r\n        std::cout << it->second << \" \";\r\n        total += it->second;\r\n    }\r\n    std::cout << \"(total: \" << total << \")\\n\";\r\n\r\n    // erase by key erases ALL matching entries\r\n    inventory.erase(\"apple\");\r\n    std::cout << \"\\nAfter erasing all apples:\\n\";\r\n    for (const auto& [item, qty] : inventory)\r\n        std::cout << \"  \" << item << \": \" << qty << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "All inventory:\r\n  apple: 10\r\n  apple: 3\r\n  apple: 7\r\n  banana: 5\r\n  cherry: 1\r\n\r\napple entries: 3\r\nbanana entries: 1\r\n\r\nAll apple quantities: 10 3 7 (total: 20)\r\n\r\nAfter erasing all apples:\r\n  banana: 5\r\n  cherry: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-unordered-containers",
      children: "9.4 Unordered Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unordered containers use hash tables for average O(1) lookup. They were introduced in C++11 and are the go-to choice when element ordering is irrelevant."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "941-stdunordered_set----hash-based-unique-set",
      children: "9.4.1 std::unordered_set -- Hash-Based Unique Set"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A locker room where each person has a numbered locker. The number is computed by a hash function (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(name) % num_lockers"
      }), "). Most lockers have 0 or 1 items. Sometimes two people hash to the same locker -- they share it using a chain (each person holds onto the next). When lockers get too crowded, we build a bigger room with more lockers (rehash) and reassign everyone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-hash-table-with-chaining",
      children: "Internal Implementation: Hash Table with Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bucket array:\r\n+------+\r\n| idx0 | --> null\r\n+------+\r\n| idx1 | --> [hash(\"cat\")=1, val=5] --> [hash(\"bat\")=1, val=3] --> null\r\n+------+\r\n| idx2 | --> [hash(\"dog\")=2, val=8] --> null\r\n+------+\r\n| idx3 | --> null\r\n+------+\r\n| idx4 | --> [hash(\"eel\")=4, val=2] --> null\r\n+------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket array"
        }), ": contiguous array of bucket pointers (or singly-linked list heads)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash function"
        }), ": maps a key to a size_t value: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size_t h = hash<K>{}(key)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket index"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h % bucket_count()"
        }), " determines which bucket the element goes into"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load factor"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size() / bucket_count()"
        }), ". When it exceeds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_load_factor()"
        }), " (default 1.0), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rehash"
        }), " occurs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaining"
        }), ": elements in the same bucket form a singly-linked list"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-with-why-5",
      children: "Time Complexity with WHY"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default: hash and place; worst: all collide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash to bucket, walk short chain; worst: one bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as find + unlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rehash(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuild bucket array, redistribute all elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            }), " (unordered_map)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find or insert default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "begin()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find first non-empty bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached count"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why average O(1)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The hash function distributes keys uniformly across buckets. With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size / bucket_count ≈ 1.0"
      }), " (default max load factor), the expected chain length is 0-2 elements. Finding an element means: compute hash (constant time), index into bucket array (constant time), walk a chain of expected length ≤ 2 (constant time)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why worst-case O(n)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A poor hash function (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(x) = 0"
      }), " for all x) puts all elements in bucket 0, making every operation degenerate to a linked list traversal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-9",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <unordered_set>\r\n#include <iostream>\r\n#include <string>\r\n\r\nint main() {\r\n    std::unordered_set<int> us;\r\n\r\n    // insert\r\n    us.insert(30);\r\n    us.insert(10);\r\n    us.insert(20);\r\n    us.insert(40);\r\n\r\n    // size and bucket_count\r\n    std::cout << \"size: \" << us.size()\r\n              << \", bucket_count: \" << us.bucket_count()\r\n              << \", load_factor: \" << us.load_factor() << \"\\n\";\r\n\r\n    // iteration (order is unspecified!)\r\n    std::cout << \"elements: \";\r\n    for (int x : us) std::cout << x << \" \";\r\n    std::cout << \"\\n\";\r\n\r\n    // which elements are in which buckets\r\n    for (int x : us)\r\n        std::cout << \"  \" << x << \" -> bucket \" << us.bucket(x) << \"\\n\";\r\n\r\n    // find\r\n    auto it = us.find(20);\r\n    if (it != us.end())\r\n        std::cout << \"Found \" << *it << \"\\n\";\r\n\r\n    // insert duplicate\r\n    auto [it2, inserted] = us.insert(20);\r\n    std::cout << \"Re-insert 20: \" << (inserted ? \"inserted\" : \"already present\") << \"\\n\";\r\n\r\n    // reserve to avoid rehash\r\n    us.reserve(100);\r\n    std::cout << \"after reserve(100): bucket_count=\" << us.bucket_count() << \"\\n\";\r\n\r\n    // erase\r\n    us.erase(10);\r\n    std::cout << \"after erase(10): size=\" << us.size() << \"\\n\";\r\n\r\n    // Custom hash for user-defined types\r\n    struct Person {\r\n        std::string name;\r\n        int age;\r\n        bool operator==(const Person& o) const {\r\n            return name == o.name && age == o.age;\r\n        }\r\n    };\r\n\r\n    struct PersonHash {\r\n        std::size_t operator()(const Person& p) const {\r\n            return std::hash<std::string>{}(p.name) ^\r\n                   (std::hash<int>{}(p.age) << 1);\r\n        }\r\n    };\r\n\r\n    std::unordered_set<Person, PersonHash> people;\r\n    people.insert({\"Alice\", 30});\r\n    people.insert({\"Bob\", 25});\r\n    std::cout << \"custom hash set size: \" << people.size() << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output (order may vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size: 4, bucket_count: 8, load_factor: 0.5\r\nelements: 40 20 10 30\r\n  40 -> bucket 0\r\n  20 -> bucket 4\r\n  10 -> bucket 2\r\n  30 -> bucket 6\r\nFound 20\r\nRe-insert 20: already present\r\nafter reserve(100): bucket_count=113\r\nafter erase(10): size=3\r\ncustom hash set size: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-overhead-7",
      children: "Memory Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "unordered_set<int> overhead (64-bit):\r\n  Bucket array: bucket_count * 8 bytes (one pointer per bucket)\r\n  Node:\r\n    next pointer:      8 bytes\r\n    hash value:        8 bytes (cached, used during rehash)\r\n    element:           4 bytes\r\n    ---\r\n    Total per node:   20 bytes + bucket array amortized (~8 bytes/element at load=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unordered containers have moderate overhead: bucket array + per-node pointers. Less than RB-tree (no color, parent, left/right), more than vector."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-8",
      children: "Iterator Invalidation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "unordered_set Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator/Reference Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iterators if rehash occurs (load_factor > max_load_factor); none otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "emplace()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rehash()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reserve()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (same as rehash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical rule:"
      }), " If you insert an element that triggers a rehash, ALL iterators are invalidated because the bucket array is reallocated and all nodes are redistributed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "942-stdunordered_map----hash-table-key-value-dictionary",
      children: "9.4.2 std::unordered_map -- Hash Table Key-Value Dictionary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Identical to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unordered_set"
      }), " but stores ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pair<const K, V>"
      }), ". Provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "at()"
      }), " for key-based access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-10",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <unordered_map>\r\n#include <iostream>\r\n#include <string>\r\n\r\nint main() {\r\n    std::unordered_map<std::string, int> freq;\r\n\r\n    // operator[]\r\n    freq[\"apple\"] = 3;\r\n    freq[\"banana\"] = 2;\r\n    freq[\"cherry\"] = 5;\r\n\r\n    // at() -- safe access\r\n    std::cout << \"freq[apple] = \" << freq[\"apple\"] << \"\\n\";\r\n    std::cout << \"freq[banana] = \" << freq.at(\"banana\") << \"\\n\";\r\n\r\n    // operator[] difference from map: creates default if missing\r\n    int n = freq[\"durian\"];      // inserts durian with value 0\r\n    std::cout << \"freq[durian] = \" << n\r\n              << \" (size now: \" << freq.size() << \")\\n\";\r\n\r\n    // find\r\n    auto it = freq.find(\"banana\");\r\n    if (it != freq.end())\r\n        std::cout << \"Found: \" << it->first << \"=\" << it->second << \"\\n\";\r\n\r\n    // Iteration -- order is unspecified\r\n    std::cout << \"\\nAll entries (unspecified order):\\n\";\r\n    for (const auto& [fruit, count] : freq)\r\n        std::cout << \"  \" << fruit << \": \" << count << \"\\n\";\r\n\r\n    // Check bucket distribution\r\n    std::cout << \"\\nBucket stats:\\n\";\r\n    std::cout << \"  bucket_count: \" << freq.bucket_count() << \"\\n\";\r\n    std::cout << \"  load_factor: \" << freq.load_factor() << \"\\n\";\r\n    for (const auto& [fruit, count] : freq)\r\n        std::cout << \"  \" << fruit << \" -> bucket \" << freq.bucket(fruit) << \"\\n\";\r\n\r\n    // Insert with hint\r\n    freq.insert({\"elderberry\", 1});\r\n\r\n    // Erase by key\r\n    freq.erase(\"cherry\");\r\n\r\n    // Erase by iterator\r\n    auto del = freq.find(\"durian\");\r\n    if (del != freq.end())\r\n        freq.erase(del);\r\n\r\n    std::cout << \"\\nAfter modifications:\\n\";\r\n    for (const auto& [fruit, count] : freq)\r\n        std::cout << \"  \" << fruit << \": \" << count << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output (order may vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "freq[apple] = 3\r\nfreq[banana] = 2\r\nfreq[durian] = 0 (size now: 4)\r\n\r\nAll entries (unspecified order):\r\n  durian: 0\r\n  cherry: 5\r\n  banana: 2\r\n  apple: 3\r\n\r\nBucket stats:\r\n  bucket_count: 8\r\n  load_factor: 0.5\r\n  durian -> bucket 1\r\n  cherry -> bucket 3\r\n  banana -> bucket 2\r\n  apple -> bucket 5\r\n\r\nAfter modifications:\r\n  elderberry: 1\r\n  banana: 2\r\n  apple: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-hash-and-key-equality",
      children: "Custom Hash and Key Equality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For user-defined types as keys, you must provide:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A hash function (can be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::hash"
        }), " specialization or a functor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An equality comparator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator=="
        }), " or a functor)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Point {\r\n    int x, y;\r\n    bool operator==(const Point& o) const {\r\n        return x == o.x && y == o.y;\r\n    }\r\n};\r\n\r\n// Option 1: specialize std::hash\r\nnamespace std {\r\n    template<> struct hash<Point> {\r\n        size_t operator()(const Point& p) const {\r\n            return hash<int>{}(p.x) ^ (hash<int>{}(p.y) << 1);\r\n        }\r\n    };\r\n}\r\n\r\nstd::unordered_map<Point, std::string> point_map;\r\n\r\n// Option 2: pass as template arguments (alternative)\r\nstruct PointHash {\r\n    size_t operator()(const Point& p) const {\r\n        return std::hash<int>{}(p.x) ^ (std::hash<int>{}(p.y) << 1);\r\n    }\r\n};\r\n\r\nstd::unordered_map<Point, std::string, PointHash> point_map2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hash-quality-and-performance",
      children: "Hash Quality and Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A good hash function spreads keys uniformly to minimize collisions. Common issues:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::hash<int>"
        }), " is identity (returns the int itself) -- fine for random ints, but sequential keys cluster"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::hash<std::string>"
        }), " in MSVC uses FNV-1a (fast, good distribution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::hash<std::string>"
        }), " in libstdc++ uses MurmurHash2 (excellent)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load factor tuning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower (0.5): fewer collisions, more memory, faster lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher (1.0): more collisions, less memory, slower lookups"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default is 1.0; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_load_factor(0.75)"
        }), " for more speed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-invalidation-9",
      children: "Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "same-as-unordered_set-insert-may-invalidate-all-iterators-if-rehash-occurs-erase-invalidates-only-the-erased-element-rehash-and-reserve-invalidate-all",
      children: "Same as unordered_set: insert may invalidate all iterators if rehash occurs; erase invalidates only the erased element; rehash and reserve invalidate all."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-container-adapters",
      children: "9.5 Container Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container adapters provide restricted interfaces over an underlying sequence container. They do NOT implement their own data structures -- they wrap vector, deque, or list and expose a minimal API."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "951-stdstack----lifo-last-in-first-out",
      children: "9.5.1 std::stack -- LIFO (Last-In, First-Out)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A stack of cafeteria trays. You can only add a tray on top, and you can only remove the top tray. The last tray placed is the first one removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-7",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default underlying container: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::deque"
      }), ". Can be changed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::list"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deque is the default because it provides O(1) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_back"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop_back"
      }), " (vector also provides these, but vector's reallocation pattern can cause occasional pauses; deque never reallocates existing elements). List also works but has higher per-element overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stack<int> (wrapping deque<int>):\r\n  deque<int> c;    // 'c' is the protected underlying container\r\n\r\n  push(x): c.push_back(x)\r\n  pop():   c.pop_back()\r\n  top():   c.back()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-2",
      children: "Time Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::push_back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::pop_back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "top()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "empty()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-11",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <stack>\r\n#include <iostream>\r\n#include <vector>\r\n\r\nint main() {\r\n    // Default: stack wraps deque\r\n    std::stack<int> s;\r\n\r\n    s.push(10);\r\n    s.push(20);\r\n    s.push(30);\r\n\r\n    std::cout << \"top: \" << s.top() << \"\\n\";     // 30\r\n    std::cout << \"size: \" << s.size() << \"\\n\";    // 3\r\n\r\n    s.pop();   // removes 30\r\n    std::cout << \"after pop, top: \" << s.top() << \"\\n\";  // 20\r\n\r\n    // Pop all elements (standard pattern)\r\n    while (!s.empty()) {\r\n        std::cout << \"popping: \" << s.top() << \"\\n\";\r\n        s.pop();\r\n    }\r\n\r\n    // Stack with vector as underlying container\r\n    std::stack<int, std::vector<int>> vec_stack;\r\n    vec_stack.push(100);\r\n    vec_stack.push(200);\r\n    std::cout << \"vec_stack top: \" << vec_stack.top() << \"\\n\";\r\n\r\n    // Real-world use: parenthesis matching\r\n    std::string expr = \"({[]})\";\r\n    std::stack<char> parens;\r\n    bool balanced = true;\r\n    for (char ch : expr) {\r\n        if (ch == '(' || ch == '{' || ch == '[') {\r\n            parens.push(ch);\r\n        } else {\r\n            if (parens.empty()) { balanced = false; break; }\r\n            char top = parens.top();\r\n            if ((ch == ')' && top == '(') ||\r\n                (ch == '}' && top == '{') ||\r\n                (ch == ']' && top == '[')) {\r\n                parens.pop();\r\n            } else {\r\n                balanced = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    balanced = balanced && parens.empty();\r\n    std::cout << \"expression \\\"\" << expr << \"\\\" balanced: \"\r\n              << (balanced ? \"yes\" : \"no\") << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "top: 30\r\nsize: 3\r\nafter pop, top: 20\r\npopping: 20\r\npopping: 10\r\nvec_stack top: 200\r\nexpression \"({[]})\" balanced: yes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "952-stdqueue----fifo-first-in-first-out",
      children: "9.5.2 std::queue -- FIFO (First-In, First-Out)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A line at a supermarket checkout. The first person in line is the first person served. New arrivals join at the back."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-8",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default underlying container: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::deque"
      }), ". Requires a container with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_back"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop_front"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "front"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "back"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "queue<int> (wrapping deque<int>):\r\n  deque<int> c;\r\n\r\n  push(x): c.push_back(x)\r\n  pop():   c.pop_front()\r\n  front(): c.front()\r\n  back():  c.back()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-3",
      children: "Time Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::push_back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::pop_front"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::front"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque::back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "empty()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-12",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <queue>\r\n#include <iostream>\r\n#include <list>\r\n\r\nint main() {\r\n    // Default queue\r\n    std::queue<int> q;\r\n\r\n    q.push(10);\r\n    q.push(20);\r\n    q.push(30);\r\n\r\n    std::cout << \"front: \" << q.front() << \"\\n\";   // 10\r\n    std::cout << \"back: \" << q.back() << \"\\n\";     // 30\r\n    std::cout << \"size: \" << q.size() << \"\\n\";     // 3\r\n\r\n    q.pop();    // removes 10\r\n    std::cout << \"after pop, front: \" << q.front() << \"\\n\";  // 20\r\n\r\n    // Drain queue\r\n    while (!q.empty()) {\r\n        std::cout << \"dequeuing: \" << q.front() << \"\\n\";\r\n        q.pop();\r\n    }\r\n\r\n    // Queue with list as underlying container\r\n    std::queue<int, std::list<int>> list_queue;\r\n    list_queue.push(100);\r\n    list_queue.push(200);\r\n    std::cout << \"list_queue front: \" << list_queue.front() << \"\\n\";\r\n\r\n    // Real-world: BFS traversal\r\n    auto bfs = [](int start, int target) -> int {\r\n        std::queue<int> q;\r\n        bool visited[100] = {false};\r\n        int distance[100] = {0};\r\n\r\n        q.push(start);\r\n        visited[start] = true;\r\n\r\n        // Simulated graph: each node i connects to i+1, i-1, i*2\r\n        while (!q.empty()) {\r\n            int node = q.front();\r\n            q.pop();\r\n\r\n            if (node == target)\r\n                return distance[node];\r\n\r\n            int neighbors[] = {node - 1, node + 1, node * 2};\r\n            for (int next : neighbors) {\r\n                if (next >= 0 && next < 100 && !visited[next]) {\r\n                    visited[next] = true;\r\n                    distance[next] = distance[node] + 1;\r\n                    q.push(next);\r\n                }\r\n            }\r\n        }\r\n        return -1;\r\n    };\r\n\r\n    std::cout << \"BFS shortest steps 0->12: \" << bfs(0, 12) << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "front: 10\r\nback: 30\r\nsize: 3\r\nafter pop, front: 20\r\ndequeuing: 20\r\ndequeuing: 30\r\nlist_queue front: 100\r\nBFS shortest steps 0->12: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "953-stdpriority_queue----max-heap",
      children: "9.5.3 std::priority_queue -- Max-Heap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An emergency room triage system. Patients with the most critical conditions are treated first, regardless of arrival order. The triage nurse assigns a priority, and the highest-priority patient is always next."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-implementation-9",
      children: "Internal Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default underlying container: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), ". Uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::make_heap"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_heap"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop_heap"
      }), " internally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "priority_queue<int> (max-heap):\r\n\r\n  Binary heap stored in vector<int>:\r\n  Index:   0   1   2   3   4   5\r\n  Value:  100  50  70  20  30  10\r\n\r\n          100\r\n        /     \\\r\n       50      70\r\n      /  \\    /  \\\r\n     20  30  10\r\n\r\n  push(x):\r\n    c.push_back(x)\r\n    push_heap(c.begin(), c.end())   // sift-up: O(log n)\r\n\r\n  pop():\r\n    pop_heap(c.begin(), c.end())    // swap top with last, sift-down\r\n    c.pop_back()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A binary heap is a complete binary tree stored in an array where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parent of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(i-1) / 2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Left child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2*i + 1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Right child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2*i + 2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invariant: parent >= children (max-heap)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-4",
      children: "Time Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at end, sift-up along tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap root with last, sift-down along height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "top()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root is at index 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "empty()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n) for push/pop?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The heap is a complete binary tree with height ⌊log2(n)⌋. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_heap"
      }), " (sift-up) moves the new element up the tree, comparing with its parent at each level -- at most log2(n) comparisons. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop_heap"
      }), " (sift-down) moves the root down the tree, comparing with larger child -- also O(log n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-code-with-output-13",
      children: "C++ Code with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <queue>\r\n#include <iostream>\r\n#include <vector>\r\n#include <functional>\r\n\r\nint main() {\r\n    // Default: max-heap (largest element on top)\r\n    std::priority_queue<int> pq;\r\n\r\n    pq.push(30);\r\n    pq.push(10);\r\n    pq.push(50);\r\n    pq.push(20);\r\n    pq.push(40);\r\n\r\n    std::cout << \"top: \" << pq.top() << \"\\n\";    // 50 (largest)\r\n    std::cout << \"size: \" << pq.size() << \"\\n\";\r\n\r\n    pq.pop();    // removes 50\r\n    std::cout << \"after pop, top: \" << pq.top() << \"\\n\";  // 40\r\n\r\n    // Drain in priority order\r\n    std::cout << \"drain (descending): \";\r\n    while (!pq.empty()) {\r\n        std::cout << pq.top() << \" \";\r\n        pq.pop();\r\n    }\r\n    std::cout << \"\\n\";\r\n\r\n    // Min-heap using greater comparator\r\n    std::priority_queue<int, std::vector<int>, std::greater<int>> min_pq;\r\n    min_pq.push(30);\r\n    min_pq.push(10);\r\n    min_pq.push(50);\r\n    min_pq.push(20);\r\n\r\n    std::cout << \"min-heap top: \" << min_pq.top() << \"\\n\";  // 10\r\n\r\n    std::cout << \"drain (ascending): \";\r\n    while (!min_pq.empty()) {\r\n        std::cout << min_pq.top() << \" \";\r\n        min_pq.pop();\r\n    }\r\n    std::cout << \"\\n\";\r\n\r\n    // Custom comparator for custom types\r\n    struct Task {\r\n        std::string name;\r\n        int priority;\r\n        bool operator<(const Task& o) const {\r\n            return priority < o.priority;  // max-heap by priority\r\n        }\r\n    };\r\n\r\n    std::priority_queue<Task> task_queue;\r\n    task_queue.push({\"Write code\", 3});\r\n    task_queue.push({\"Fix bug\", 5});\r\n    task_queue.push({\"Docs\", 1});\r\n    task_queue.push({\"Deploy\", 4});\r\n\r\n    std::cout << \"\\nTask queue (priority order):\\n\";\r\n    while (!task_queue.empty()) {\r\n        auto t = task_queue.top();\r\n        std::cout << \"  \" << t.name << \" (prio=\" << t.priority << \")\\n\";\r\n        task_queue.pop();\r\n    }\r\n\r\n    // Real-world: compute median in streaming data\r\n    auto running_median = [](const std::vector<int>& data) {\r\n        std::priority_queue<int> lowers;   // max-heap\r\n        std::priority_queue<int, std::vector<int>, std::greater<int>> highers;  // min-heap\r\n\r\n        for (int x : data) {\r\n            if (lowers.empty() || x <= lowers.top())\r\n                lowers.push(x);\r\n            else\r\n                highers.push(x);\r\n\r\n            // Rebalance\r\n            if (lowers.size() > highers.size() + 1) {\r\n                highers.push(lowers.top());\r\n                lowers.pop();\r\n            } else if (highers.size() > lowers.size()) {\r\n                lowers.push(highers.top());\r\n                highers.pop();\r\n            }\r\n        }\r\n\r\n        if (lowers.size() == highers.size())\r\n            return (lowers.top() + highers.top()) / 2.0;\r\n        else\r\n            return (double)lowers.top();\r\n    };\r\n\r\n    std::vector<int> stream{5, 3, 8, 1, 9, 2, 7};\r\n    double median = running_median(stream);\r\n    std::cout << \"\\nMedian of {5,3,8,1,9,2,7}: \" << median << \"\\n\";\r\n\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "top: 50\r\nsize: 5\r\nafter pop, top: 40\r\ndrain (descending): 40 30 20 10\r\nmin-heap top: 10\r\ndrain (ascending): 10 20 30 50\r\n\r\nTask queue (priority order):\r\n  Fix bug (prio=5)\r\n  Deploy (prio=4)\r\n  Write code (prio=3)\r\n  Docs (prio=1)\r\n\r\nMedian of {5,3,8,1,9,2,7}: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "changing-priority-container",
      children: "Changing Priority Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Min-heap on strings (reverse lexicographic)\r\nstd::priority_queue<std::string,\r\n                    std::vector<std::string>,\r\n                    std::greater<std::string>> min_str_pq;\r\n\r\n// Custom comparator via lambda (C++20)\r\nauto cmp = [](int a, int b) { return a > b; };  // min-heap\r\nstd::priority_queue<int, std::vector<int>, decltype(cmp)> custom_pq(cmp);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-container-selection-guide",
      children: "9.6 Container Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-flow",
      children: "Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Need a container?\r\n|\r\n+-- Fixed size known at compile time?\r\n|   --> std::array (zero overhead)\r\n|\r\n+-- Need FIFO / double-ended operations?\r\n|   --> std::deque (queue-like workload)\r\n|\r\n+-- Need LIFO behavior only?\r\n|   --> std::stack adaptor\r\n|\r\n+-- Need FIFO with only front/back access?\r\n|   --> std::queue adaptor\r\n|\r\n+-- Need priority ordering?\r\n|   --> std::priority_queue adaptor\r\n|\r\n+-- Need sorted iteration / range queries?\r\n|   +-- Unique keys?\r\n|   |   +-- Key-value pairs?  --> std::map\r\n|   |   +-- Just keys?        --> std::set\r\n|   +-- Duplicate keys allowed?\r\n|       +-- Key-value pairs?  --> std::multimap\r\n|       +-- Just keys?        --> std::multiset\r\n|\r\n+-- Need fast O(1) average lookup (no ordering)?\r\n|   +-- Unique keys?\r\n|   |   +-- Key-value pairs?  --> std::unordered_map\r\n|   |   +-- Just keys?        --> std::unordered_set\r\n|   +-- Duplicates allowed?\r\n|       +-- Key-value pairs?  --> std::unordered_multimap\r\n|       +-- Just keys?        --> std::unordered_multiset\r\n|\r\n+-- Default (linear sequence)?\r\n    +-- Frequent insert/erase at known positions?\r\n    |   +-- Forward-only traversal?  --> std::forward_list\r\n    |   +-- Bidirectional needed?    --> std::list (measure first!)\r\n    +-- Mostly push_back / random access?\r\n        --> std::vector (the universal default)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each-container",
      children: "When to Use Each Container"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Secondary Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal sequence; cache-friendly iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (with vector adapter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent middle insert/erase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "deque"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO queue; balanced front/back ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo buffer with both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous memory needed (use vector)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent middle insert/erase with iterators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splice-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access; cache performance matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "forward_list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal memory linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table chain management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward traversal needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size stack data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time constant sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-variable size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique sorted unique values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical set operations (union, intersection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-only lookups (use unordered_set)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "multiset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted multiset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram buckets by key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered multiset (use unordered_multiset)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted key-value dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering irrelevant (use unordered_map)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "multimap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted KV with duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index where one key maps to many values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-key aggregation (consider map<K, vector<V>>)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "unordered_set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast membership testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache for deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered iteration needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "unordered_map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency counters, caches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries needed; order matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo, parsing (parentheses, expressions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-LIFO access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "queue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, task queues, buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority ordering (use priority_queue)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "priority_queue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority-sorted access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra, scheduling, median"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO ordering (use queue)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-decision-matrix",
      children: "Performance Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100K elements, sequential iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous cache prefetch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100K pushes, no iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector with reserve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) push_front + pop_back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10 elements, frequent middle insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) insertion with iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10K elements, frequent middle insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector + batch erase/insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list is cache-oblivious"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find by exact key, 10K entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) vs O(log n) for map"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find by exact key, 100 entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) ~7 steps; RB-tree overhead small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range query by key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound/upper_bound in O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map / set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order tree traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector (via stack adapter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than deque default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-bound environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero per-element overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-safe reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readers need no synchronization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-iterator-invalidation-rules----complete-reference",
      children: "9.7 Iterator Invalidation Rules -- Complete Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Iterator invalidation is one of the most common sources of bugs in C++ STL code. An invalidated iterator points to memory that may have been deallocated or reassigned -- dereferencing it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "master-invalidation-table",
      children: "Master Invalidation Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "emplace"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "erase"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_back"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_front"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop_front"
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "reserve"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "rehash"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if realloc; after pos otherwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased and after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if realloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if realloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "deque"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (any insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (any erase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iter; not refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iter; not refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iter; not refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iter; not refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "forward_list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "set/map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "multiset/multimap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "unordered_set/map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legend:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"All\" = all iterators/references to the container are invalidated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Erased only\" = only iterators/references to the specific erased element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"All if realloc/rehash\" = all invalidated only when memory reallocation occurs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"None\" = all iterators remain valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"N/A\" = operation does not exist for this container"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reference-invalidation-vs-iterator-invalidation",
      children: "Reference Invalidation vs Iterator Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Important: some operations invalidate iterators but NOT references (or vice versa):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "deque push_back/push_front/pop_back/pop_front"
        }), ": invalidates ALL iterators (central map may reallocate), but references to remaining elements remain valid (elements themselves never move)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vector push_back on reallocation"
        }), ": invalidates BOTH iterators and references (all elements move to new memory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "set/map/unordered_set/unordered_map insert/erase of other elements"
        }), ": neither iterators nor references to elements not directly affected are invalidated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls-and-correct-patterns",
      children: "Common Pitfalls and Correct Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pitfall-1-erasing-in-a-loop",
      children: "Pitfall 1: Erasing in a Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BUG: it is invalidated by erase\r\nstd::vector<int> vec{1, 2, 3, 4, 5};\r\nfor (auto it = vec.begin(); it != vec.end(); ++it) {\r\n    if (*it % 2 == 0)\r\n        vec.erase(it);    // undefined behavior!\r\n}\r\n\r\n// CORRECT: use erase-remove idiom\r\nvec.erase(std::remove_if(vec.begin(), vec.end(),\r\n    [](int x) { return x % 2 == 0; }), vec.end());\r\n\r\n// CORRECT: use erase's return value\r\nfor (auto it = vec.begin(); it != vec.end(); ) {\r\n    if (*it % 2 == 0)\r\n        it = vec.erase(it);   // erase returns next iterator\r\n    else\r\n        ++it;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pitfall-2-using-iterator-after-container-mutation",
      children: "Pitfall 2: Using Iterator After Container Mutation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v{1, 2, 3, 4, 5};\r\nauto it = v.begin() + 2;   // points to 3\r\nv.push_back(6);             // may reallocate -- it is invalidated!\r\n// std::cout << *it;        // undefined behavior!\r\n\r\n// CORRECT (for vector with no realloc):\r\nv.reserve(10);             // ensure capacity\r\nauto it = v.begin() + 2;\r\nv.push_back(6);            // no reallocation -- it remains valid\r\nstd::cout << *it;          // OK: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pitfall-3-inserting-while-iterating",
      children: "Pitfall 3: Inserting While Iterating"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BUG: insert invalidates all iterators in deque\r\nstd::deque<int> d{1, 2, 3};\r\nauto it = d.begin();\r\nd.insert(it + 1, 99);   // all iterators invalidated (deque)\r\n// std::cout << *it;     // undefined behavior!\r\n\r\n// SAFE: list (insert does not invalidate)\r\nstd::list<int> lst{1, 2, 3};\r\nauto lit = lst.begin();\r\nstd::advance(lit, 1);\r\nlst.insert(lit, 99);    // no iterators invalidated\r\nstd::cout << *lit;       // OK: points to 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pitfall-4-assuming-deque-push_back-leaves-iterators-valid",
      children: "Pitfall 4: Assuming Deque push_back Leaves Iterators Valid"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::deque<int> d{1, 2, 3};\r\nauto it = d.begin();       // valid iterator\r\nd.push_back(4);            // ALL deque iterators invalidated!\r\n// *it;                    // undefined behavior!\r\n\r\n// References DO remain valid (unless erase/insert middle)\r\nstd::deque<int> d2{1, 2, 3};\r\nint& ref = d2[0];          // reference to first element\r\nd2.push_back(4);           // ref to 1 remains valid!\r\nstd::cout << ref;          // OK: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pitfall-5-invalidation-in-unordered_map-during-insert",
      children: "Pitfall 5: Invalidation in unordered_map During Insert"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::unordered_map<int, std::string> um;\r\num.reserve(10);\r\nauto it = um.begin();   // valid, but points to nothing if um is empty\r\n\r\n// After some inserts (no rehash)\r\num[1] = \"one\";\r\num[2] = \"two\";\r\nauto it1 = um.find(1);   // valid\r\n\r\n// Insert that triggers rehash:\r\num[100] = \"hundred\";     // may trigger rehash -- all iterators invalidated\r\n// auto x = it1->second; // undefined behavior if rehash occurred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safe-erase-idiom-reference",
      children: "Safe Erase Idiom Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// vector / deque: erase-remove idiom\r\nv.erase(std::remove(v.begin(), v.end(), value), v.end());\r\n\r\n// list: member remove\r\nlst.remove(value);              // removes all matching values\r\n\r\n// associative: erase by key\r\nm.erase(key);                    // returns count of erased\r\n\r\n// unordered: erase by iterator (returns next)\r\nauto it = us.begin();\r\nwhile (it != us.end()) {\r\n    if (condition(*it))\r\n        it = us.erase(it);       // unordered erase returns next\r\n    else\r\n        ++it;\r\n}\r\n\r\n// set/map: erase by iterator (returns next in C++17)\r\nauto it = s.begin();\r\nwhile (it != s.end()) {\r\n    if (condition(*it))\r\n        it = s.erase(it);        // C++17: associative erase returns next\r\n    else\r\n        ++it;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-deep-comparisons",
      children: "9.8 Deep Comparisons"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "981-sequence-vs-associative-vs-unordered-containers",
      children: "9.8.1 Sequence vs Associative vs Unordered Containers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ordered Associative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unordered Associative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key order (sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Organization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear arrangement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table (buckets)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup by value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup by position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) for vector/deque, O(n) list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized (vector end), O(1) list pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not efficient (must scan)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorted iteration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort first (O(n log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order (O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy and sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous or linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree nodes (high overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buckets + nodes (moderate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator category"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random/Forward/Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to choose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General linear data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted access needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast hash lookup needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "982-stdvector-vs-stddeque-vs-stdlist",
      children: "9.8.2 std::vector vs std::deque vs std::list"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "head-to-head-comparison-matrix",
      children: "Head-to-Head Comparison Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "deque"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "list"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory layout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single contiguous block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunked blocks (non-contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scattered nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Random access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), direct pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), two dereferences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n), must walk pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "push_back"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "push_front"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (shift all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pop_back"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pop_front"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "insert(position)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) shift within blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (given iterator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "erase(position)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) shift within blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (given iterator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero per-element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.125 bytes/element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16 bytes/node (64-bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator category"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator invalidation (insert)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All if realloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator invalidation (erase)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After erased pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (any erase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erased only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (block-local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sort()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) via std::sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) via std::sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) member sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supports C API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (data())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sizeof(container)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 bytes (3 ptrs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~64 bytes (multiple ptrs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 bytes (3 ptrs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-ended queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent splice/cut"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailed-analysis",
      children: "Detailed Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is vector usually faster than list, even for \"list operations\"?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contrary to intuition, vector often outperforms list for operations like insert/erase in the middle when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The container size is small (< 1000 elements) -- memmove is incredibly fast on modern CPUs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The elements are small (int, double, pointers) -- copying is cheap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The insertion/erasure count is small relative to the total elements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// This is often faster with vector than list:\r\nstd::vector<int> vec(100, 0);\r\nvec.insert(vec.begin() + 50, 42);   // moves 50 elements via memmove\r\n\r\nstd::list<int> lst(100, 0);\r\nauto it = lst.begin();\r\nstd::advance(it, 50);               // O(n) just to find position!\r\nlst.insert(it, 42);                  // O(1) insert, but preceded by O(n) advance\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The list's O(n) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::advance"
      }), " to find the insertion position often dominates, and even the O(n) shift in vector is extremely fast due to vectorized memory moves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When does list actually win?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Very large objects (copying is expensive compared to pointer swaps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterators must remain valid through modifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frequent splicing operations between lists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You already have iterators to the insertion/erasure points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deque as a compromise:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deque occupies a middle ground:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(1) random access (with higher constant than vector)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(1) push/pop at BOTH ends (unlike vector)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does not invalidate references on push/pop (unlike vector's reallocation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory is not contiguous (cannot pass to C APIs expecting arrays)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "983-stdmap-vs-stdunordered_map",
      children: "9.8.3 std::map vs std::unordered_map"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::map"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::unordered_map"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-Black tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table with chaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average, O(n) worst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average, O(n) worst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iteration order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted by key (ascending)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified (essentially random)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32-40 bytes overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16-20 bytes + bucket array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lower bound / range query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported (must scan all)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stability of iterators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert does not invalidate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert may invalidate (rehash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "begin() complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (leftmost cached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(bucket_count) (find first non-empty)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates default if missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom key requirements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "operator< (or comparator)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash function + operator=="
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-node allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket array + per-node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (tree nodes scattered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (bucket array is contiguous; chains are scattered)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefer map when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to iterate in sorted order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need range queries (lower_bound, upper_bound)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The number of elements is small (< 100) -- O(log n) and O(1) are similar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your hash function is slow or poorly distributed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterator stability matters (insert never invalidates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefer unordered_map when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You only need exact-key lookup (no range queries, no ordered iteration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have many elements (100K+) -- the log n factor becomes significant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys are expensive to compare (e.g., long strings) -- O(1) hash < O(log n) string compare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have a good hash function"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "empirical-performance",
      children: "Empirical Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 1 million insert/find operations on a modern CPU:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "map:              ~180 ms (20 log2(1M) ≈ 20 comparisons per op)\r\nunordered_map:    ~80 ms (good hash, load factor 0.75)\r\nunordered_map:   ~300 ms (bad hash, all collide)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The difference grows with container size. For 10 million elements:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "map:              ~2,400 ms\r\nunordered_map:    ~900 ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 100 elements:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Both:  < 1 ms  (difference is noise)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-memory-overhead-comparison",
      children: "9.9 Memory Overhead Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding memory overhead is crucial for memory-constrained systems and large containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "per-element-overhead-for-int-on-64-bit-linux",
      children: "Per-Element Overhead (for int on 64-bit Linux)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Element bytes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead bytes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total per element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio to vector"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.125 (amortized blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.03x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forward_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (next ptr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 (prev + next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 (next + hash) + bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 (parent + left + right + color + pad)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+4 (pair)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 (next + hash) + bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5x (8 bytes value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+4 (pair)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 (tree metadata)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.0x (8 bytes value)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-million-ints----total-memory-estimate",
      children: "1 Million ints -- Total Memory Estimate"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "array (1M stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x (but stack overflow!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4.13 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.03x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forward_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~24 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~28 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.0x (for 1M pairs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0x (for 1M pairs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-size-sizeof-the-container-object-itself",
      children: "Container Size (sizeof the container object itself)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sizeof (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vector<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "array<T,N>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N * sizeof(T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The data itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deque<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~64-80 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central map pointers, block size, metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "list<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentinel node (2 pointers + size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forward_list<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pointer to head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set/map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree root + node count + comparator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_set/map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~56-64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buckets ptr + size + load factor + hash + eq"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The sizeof the container object is trivially small for all containers. The actual memory is on the heap (or in the data segment for static globals)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-applications-in-real-systems",
      children: "9.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdvector-the-universal-sequence",
      children: "std::vector: The Universal Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vector is the most widely used container in C++ codebases. It appears in virtually every domain:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Game Engines (Unreal, Unity):"
        }), " Entity component arrays, vertex buffers, animation keyframes. Cache-friendly sequential iteration is critical for 60 FPS rendering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Servers (NGINX, Envoy):"
        }), " HTTP header storage, connection pools, request buffers. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data()"
        }), " provides direct C-array access for system calls like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendfile()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databases (SQLite, RocksDB):"
        }), " Page caches, B-tree node vectors, WAL buffers. Vector's contiguous storage mirrors on-disk page layouts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compilers (LLVM, GCC):"
        }), " AST node storage, symbol table vectors, optimization pass queues. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SmallVector"
        }), " (LLVM) extends vector with inline storage for zero-allocation small cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finance (QuantLib, KDB+):"
        }), " Time series data, order book snapshots, risk calculation arrays. Vectorization (SIMD) over contiguous arrays is essential for low-latency trading."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUI Frameworks (Qt, wxWidgets):"
        }), " Widget children lists, layout calculations, event dispatch queues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine Learning (TensorFlow C++ API, ONNX Runtime):"
        }), " Tensor shape vectors, batch data containers, gradient storage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real pattern:"
      }), " Many systems replace std::vector with a custom small-buffer-optimized vector (like LLVM's SmallVector or Boost's static_vector) for hot paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdunordered_map-the-fast-dictionary",
      children: "std::unordered_map: The Fast Dictionary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Browsers (Chromium):"
        }), " HTTP header key-value store, cookie cache, DOM attribute storage. O(1) lookup is critical for page load performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databases (LevelDB, RocksDB):"
        }), " Block cache indexes, in-memory table hash indices. Bloom filters often precede unordered_map lookups for negative caching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interpreters (V8, CPython):"
        }), " Object property dictionaries (though V8 uses its own inline cache + hash table hybrid). Namespace lookups must be sub-microsecond."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Game Engines:"
        }), " Resource caches (textures, meshes, shaders keyed by name/path). Asset loading systems use unordered_map for O(1) material lookups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compilers:"
        }), " Symbol tables for reserved words, operator precedence tables, pragma/keyword lookup. Fast lexing depends on hash-based keyword recognition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network stacks (DPDK, eBPF):"
        }), " Flow tables, connection tracking maps. eBPF's BPF_MAP_TYPE_HASH is used in production for packet classification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdmap-when-order-matters",
      children: "std::map: When Order Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration systems:"
        }), " Application settings parsed from JSON/YAML/XML are typically stored in a sorted structure for deterministic behavior and diff-able serialization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text editors (VS Code, Emacs):"
        }), " Line-number-to-position mappings, sorted by line number for range operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Command-line argument parsers:"
        }), " Option-to-value mappings where help text is printed in alphabetical order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time-series databases:"
        }), " In-memory timestamp-indexed data stored in map for range queries (memory-limited cases -- B-trees are more common on disk)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduling systems:"
        }), " Job queues ordered by next-run-time. Red-black tree provides both insertion and sorted traversal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stddeque-the-double-ended-workhorse",
      children: "std::deque: The Double-Ended Workhorse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread pools (Intel TBB, Folly):"
        }), " Work-stealing deques. Each thread pushes/pops from its own deque's end and steals from other deques' fronts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network stacks (Linux kernel sk_buff, DPDK):"
        }), " Packet buffer queues. Deque-like behavior for enqueue/dequeue at opposite ends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audio processing (JUCE, PortAudio):"
        }), " Sample ring buffers. Deque-like behavior for real-time audio input/output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undo systems:"
        }), " Text editor undo/redo buffers. Operations at both ends (new undo at back, redo from front)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdpriority_queue-priority-based-processing",
      children: "std::priority_queue: Priority-Based Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dijkstra's algorithm (OSPF, IS-IS routers):"
        }), " Open Shortest Path First routing uses a priority queue for the frontier set. Each router iteration extracts the minimum-distance node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task schedulers (Linux CFS, Boost.ASIO):"
        }), " Runnable task queues ordered by priority or deadline. The highest-priority task runs next."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-driven simulations (ns-3, OMNeT++):"
        }), " Future event sets ordered by timestamp. Priority queue extracts the next event by simulation time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Huffman coding (compressors: gzip, zstd):"
        }), " Build frequency-ordered Huffman trees using a min-heap priority queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Median tracking in streaming data:"
        }), " Two priority queues (max-heap for lower half, min-heap for upper half) track running median in O(log n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K-way merge (external sorting):"
        }), " Merging K sorted files uses a min-heap to always emit the next smallest element."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "911-interview-corner",
      children: "9.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following Q&As cover the most frequently asked STL container questions in C++ interviews at companies like Google, Microsoft, Amazon, and Bloomberg."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-why-is-stdvector-usually-preferred-over-stdlist",
      children: "Q1: \"Why is std::vector usually preferred over std::list?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Four reasons, ordered by importance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache locality:"
          }), " Vector stores elements contiguously in memory. Modern CPUs prefetch sequential memory into L1/L2 cache. A vector iteration hits L1 cache ~90% of the time. List nodes are heap-scattered, causing a cache miss per element -- 50-100x slower for iteration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lower memory overhead:"
          }), " Vector has zero per-element overhead (just ", (0,jsx_runtime.jsx)(_components.code, {
            children: "capacity * sizeof(T)"
          }), "). List adds 16-24 bytes per element for prev/next pointers. For 1 million ints: vector = 4 MB, list = 20+ MB."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "O(1) random access:"
          }), " Vector provides constant-time indexing. List requires O(n) traversal to reach position."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Faster bulk operations:"
          }), " Even for \"list-friendly\" operations like middle insertion, vector's memmove can outperform list's pointer walk + insert for small-to-medium sizes (< 1000 elements). The constant factor of memmove is extremely low."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// People think list is faster here. Often wrong:\r\nstd::list<int> lst(10000, 42);\r\nauto it = lst.begin();\r\nstd::advance(it, 5000);        // O(5000) pointer walk\r\nlst.insert(it, 99);             // O(1) insertion\r\n\r\nstd::vector<int> vec(10000, 42);\r\nvec.insert(vec.begin() + 5000, 99);  // O(n) shift via memmove\r\n\r\n// On modern hardware, vector is often 2-10x faster\r\n// because: (a) advance on list is 5000 cache misses,\r\n// and (b) vector's shift is a single memmove call\r\n// that runs at ~30 GB/s on DDR5.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to actually use list:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Very large objects (copy cost >> pointer manipulation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You already have iterators to insertion/erasure points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frequent splice operations between lists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterators must survive insertions (strong guarantee)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-when-would-you-choose-stdmap-over-stdunordered_map",
      children: "Q2: \"When would you choose std::map over std::unordered_map?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::map"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ordered iteration matters:"
          }), " You need to traverse elements in key order (e.g., printing a sorted report)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Range queries:"
          }), " You need ", (0,jsx_runtime.jsx)(_components.code, {
            children: "lower_bound"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "upper_bound"
          }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "equal_range"
          }), " -- e.g., \"find all users whose names start with 'A' through 'M'\"."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::map<std::string, User> users;\r\nauto start = users.lower_bound(\"Alice\");\r\nauto end = users.upper_bound(\"Mike\");\r\nfor (auto it = start; it != end; ++it)\r\n    process(it->second);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Small N:"
          }), " For < 100 elements, O(log n) and O(1) are practically identical, and map's cache behavior is more predictable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stable iterators:"
          }), " Map insert never invalidates existing iterators. unordered_map insert can trigger a rehash that invalidates all iterators."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory predictable:"
          }), " No rehash spikes. Map allocates one node at a time. unordered_map can have sudden O(n) rehash pauses."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Weak hash function:"
          }), " If keys hash poorly (causing collisions), unordered_map degenerates to O(n). Map is always O(log n)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::unordered_map"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You only need exact-key lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large N (100K+) where O(log n) matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good hash function available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order is irrelevant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-iterator-invalidation-give-examples-for-vector-and-list",
      children: "Q3: \"Explain iterator invalidation. Give examples for vector and list.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterator invalidation occurs when a container modification makes existing iterators point to invalid memory. Using an invalidated iterator is undefined behavior -- the program may crash, produce wrong results, or appear to work (making it particularly dangerous)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// VECTOR: push_back with reallocation invalidates ALL iterators\r\nstd::vector<int> v{1, 2, 3};\r\nint* ptr = &v[0];          // pointer to vector's internal array\r\nauto it = v.begin();       // iterator to first element\r\nv.push_back(4);            // if reallocation occurs:\r\n// ptr is now dangling, it is now invalidated\r\n// *ptr = 10;              // UNDEFINED BEHAVIOR\r\n// *it = 10;               // UNDEFINED BEHAVIOR\r\n\r\n// LIST: insert never invalidates existing iterators\r\nstd::list<int> lst{1, 2, 3};\r\nauto lit = lst.begin();    // points to 1\r\nlst.push_back(4);          // no invalidation\r\nlst.insert(lst.end(), 5);  // no invalidation\r\n*lit = 99;                 // OK: list's iterators survive modifications\r\nstd::cout << lst.front();  // 99\r\n\r\n// VECTOR: erase invalidates from erased element onward\r\nstd::vector<int> v2{10, 20, 30, 40, 50};\r\nauto it1 = v2.begin();     // points to 10\r\nauto it2 = v2.begin() + 2; // points to 30\r\nv2.erase(v2.begin() + 1);  // erases 20\r\n// it1 is still valid (points to 10, same address)\r\n// it2 is INVALIDATED (30 shifted left to index 1, but iterator still points to old location)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The single most important rule:"
      }), " After every container modification, assume ALL iterators are potentially invalid, unless you know the specific invalidation rules for that container and operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-implement-a-thread-safe-frequency-counter-using-stl-containers-which-container-would-you-use-and-why",
      children: "Q4: \"Implement a thread-safe frequency counter using STL containers. Which container would you use and why?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <unordered_map>\r\n#include <mutex>\r\n#include <string>\r\n#include <vector>\r\n#include <iostream>\r\n#include <algorithm>\r\n\r\nclass ThreadSafeFrequencyCounter {\r\n    std::unordered_map<std::string, size_t> freq_;\r\n    mutable std::mutex mtx_;\r\n\r\npublic:\r\n    void add(const std::string& word) {\r\n        std::lock_guard<std::mutex> lock(mtx_);\r\n        ++freq_[word];           // operator[] inserts with 0 if missing, then increments\r\n    }\r\n\r\n    size_t count(const std::string& word) const {\r\n        std::lock_guard<std::mutex> lock(mtx_);\r\n        auto it = freq_.find(word);\r\n        return it != freq_.end() ? it->second : 0;\r\n    }\r\n\r\n    std::vector<std::pair<std::string, size_t>> top_k(size_t k) const {\r\n        std::lock_guard<std::mutex> lock(mtx_);\r\n        // Copy to vector for sorting (map iteration is too slow for sort)\r\n        std::vector<std::pair<std::string, size_t>> entries(freq_.begin(), freq_.end());\r\n        // Partial sort: top k by frequency (descending), then by key ascending (tiebreaker)\r\n        auto cmp = [](const auto& a, const auto& b) {\r\n            if (a.second != b.second) return a.second > b.second;\r\n            return a.first < b.first;\r\n        };\r\n        if (k >= entries.size()) {\r\n            std::sort(entries.begin(), entries.end(), cmp);\r\n            return entries;\r\n        }\r\n        std::partial_sort(entries.begin(), entries.begin() + k, entries.end(), cmp);\r\n        entries.resize(k);\r\n        return entries;\r\n    }\r\n\r\n    size_t unique_words() const {\r\n        std::lock_guard<std::mutex> lock(mtx_);\r\n        return freq_.size();\r\n    }\r\n\r\n    size_t total_words() const {\r\n        std::lock_guard<std::mutex> lock(mtx_);\r\n        size_t total = 0;\r\n        for (const auto& [_, count] : freq_)\r\n            total += count;\r\n        return total;\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why unordered_map?"
      }), " O(1) average insert/lookup beats map's O(log n) for frequency counting where ordering is irrelevant. The dominant operations (increment on each word, look up existing count) are all exact-key operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not map?"
      }), " No need for sorted iteration during live updates. We sort only on demand via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top_k()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-happens-when-a-vectors-capacity-is-exceeded-during-push_back-walk-through-the-steps",
      children: "Q5: \"What happens when a vector's capacity is exceeded during push_back? Walk through the steps.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v;\r\nv.reserve(4);               // capacity = 4\r\nfor (int i = 0; i < 4; ++i)\r\n    v.push_back(i * 10);    // size = 4, capacity = 4\r\n\r\n// The 5th push_back triggers reallocation:\r\nv.push_back(50);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check capacity:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "size == capacity"
          }), " (4 == 4), so growth is needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Allocate new block:"
          }), " Allocate new memory of size ", (0,jsx_runtime.jsx)(_components.code, {
            children: "capacity * growth_factor"
          }), " elements. GCC uses 2x → new capacity = 8 → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "8 * sizeof(int) = 32 bytes"
          }), " allocated via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "operator new"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Move (or copy) elements:"
          }), " Move each existing element from old block to new block."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (trivially copyable): single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memmove"
            }), " call copies all 4 ints."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For non-trivial types: each element is move-constructed. If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            }), " move constructor is available, elements are moved; otherwise copied (exception safety guarantee)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Destroy old elements:"
          }), " Call destructor on each element in the old block (for ints: no-op; for complex types: frees resources)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deallocate old block:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "operator delete"
          }), " on the old memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update pointers:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_start"
          }), " → new block start, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_finish"
          }), " → new block start + old_size + 1, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_end_of_storage"
          }), " → new block start + new_capacity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Construct new element:"
          }), " Construct argument in-place at ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_finish - 1"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception safety:"
      }), " If element construction throws during step 3, old elements remain intact in old storage (vector is unchanged). If moving and a move constructor throws (noexcept guarantees prevent this for standard types), vector falls back to copy to maintain the strong exception guarantee."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Growth factor"
      }), " is implementation-defined and represents a space-time tradeoff:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2x: amortized O(1), but wastes up to 50% memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1.5x: wastes up to 33% memory, better memory reuse across reallocations (GCC/MSVC choose 1.5-2x range)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Golden ratio (~1.618): theoretical sweet spot for memory fragmentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-erase-remove-idiom-and-why-is-it-necessary",
      children: "Q6: \"What is the erase-remove idiom and why is it necessary?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The erase-remove idiom is the correct way to remove elements from a sequence container (vector, deque, string) that satisfy a condition."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// PROBLEM: Wrong -- has O(n^2) complexity and undefined behavior\r\nstd::vector<int> v{1, 2, 3, 4, 5, 6};\r\nfor (auto it = v.begin(); it != v.end(); ++it) {\r\n    if (*it % 2 == 0) {\r\n        v.erase(it);   // BUG: it invalidated, and subsequent ++it is UB\r\n    }\r\n}\r\n\r\n// SOLUTION: erase-remove idiom\r\n// Step 1: std::remove (or remove_if) \"removes\" elements by shifting\r\n//         survivors left. Returns iterator to new logical end.\r\n// Step 2: vector::erase removes the tail.\r\n\r\nv.erase(std::remove_if(v.begin(), v.end(),\r\n    [](int x) { return x % 2 == 0; }),\r\n    v.end());\r\n\r\n// What std::remove actually does (pseudocode):\r\n// template<class ForwardIt, class T>\r\n// ForwardIt remove(ForwardIt first, ForwardIt last, const T& value) {\r\n//     first = std::find(first, last, value);\r\n//     if (first != last)\r\n//         for (ForwardIt i = first; ++i != last; )\r\n//             if (!(*i == value))\r\n//                 *first++ = std::move(*i);\r\n//     return first;\r\n// }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it's necessary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive loop-erase is O(n^2) -- each erase shifts subsequent elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "erase-remove is O(n) -- one pass to shift, one pass to destroy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is the only correct way to erase multiple elements from a sequence without UB"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For list, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list::remove_if"
        }), " (member function) instead, which is also O(n) but handles node unlinking directly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-compare-the-performance-of-deque-vs-vector-for-a-producer-consumer-scenario",
      children: "Q7: \"Compare the performance of deque vs vector for a producer-consumer scenario.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a single producer, single consumer queue:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// REQUIREMENTS:\r\n// - Producer adds elements to back\r\n// - Consumer removes elements from front\r\n// - No concurrent access (or mutex-guarded)\r\n\r\n// OPTION 1: deque\r\nstd::deque<int> dq;\r\n// producer: dq.push_back(val);\r\n// consumer: val = dq.front(); dq.pop_front();\r\n\r\n// OPTION 2: vector (reverse -- push_back, pop_back as stack)\r\nstd::vector<int> vec;\r\n// producer: vec.push_back(val);\r\n// consumer: need to access front... vec.pop_front() O(n)\r\n\r\n// OPTION 3: vector + manual ring buffer\r\nstruct RingBuffer {\r\n    std::vector<int> data;\r\n    size_t head = 0, tail = 0;\r\n    // add at tail, read at head -- no shifting\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Winner: deque"
      }), ", because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "push_back"
        }), " is O(1) amortized (same as vector)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pop_front"
        }), " is O(1) (vs O(n) for vector)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No reallocation of existing elements (vs vector reallocation on growth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference stability: elements never move"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector can win if the producer-consumer pattern is LIFO (stack):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both operations are O(1) amortized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better cache behavior (contiguous)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Much lower memory overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use a dedicated ring buffer instead of deque:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixed-capacity bounded queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No dynamic allocation allowed (embedded systems)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need contiguous memory for batch operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deque's block structure adds ~8% overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "912-summary",
      children: "9.12 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STL containers form the backbone of C++ data structure programming. The key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "std::vector is the default container."
          }), " It offers contiguous memory, O(1) random access, and amortized O(1) push_back. Reserve capacity when you know the size in advance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Choose by access pattern, not by name."
          }), " Do not default to \"linked list\" for frequent insertions -- measure first. Cache miss penalties dominate modern CPU performance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ordered vs unordered tradeoff is log(n) vs average O(1)."
          }), " Use ordered (map/set) when you need range queries or sorted iteration. Use unordered for pure lookup workloads with a good hash function."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Container adapters restrict, not implement."
          }), " Stack, queue, and priority_queue are thin wrappers over sequence containers. They simplify interfaces but inherit the underlying container's behavior and performance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Iterator invalidation is a correctness landmine."
          }), " Every container type and operation has specific invalidation rules. After modifying a container, assume all iterators are invalid unless you have verified otherwise. The erase-remove idiom is the correct way to remove elements from a sequence."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory overhead varies dramatically."
          }), " vector adds zero overhead; set adds ~32-40 bytes per element. For large containers, this can mean the difference between fitting in cache and thrashing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unordered containers are not magical."
          }), " They require good hash functions, operator==, and careful load factor management. Rehashing is O(n) and can cause latency spikes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Erase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) mid, O(1) amort back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous, zero overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realloc: all; erase: after"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunked blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) mid, O(1) ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) mid, O(1) ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.125 byte/elem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All iter, not refs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly-linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with iter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with iter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes/node overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forward_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly-linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with iter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with iter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes/node overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed C array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero, on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (no mutators)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set/map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-Black tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32-40 bytes/node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiset/multimap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-Black tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32-40 bytes/node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only erased element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unordered_set/map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table + chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16-28 bytes/node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash: all; erase: only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "top O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on underlying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as underlying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deque (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front/back O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on underlying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as underlying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority_queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "top O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on underlying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as underlying"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-exercises",
      children: "Chapter Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the three major categories of STL containers? Give two examples of each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the internal implementation of deque. Why does it provide O(1) push_front when vector does not?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between reference invalidation and iterator invalidation in deque. When are references valid but iterators are not?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is the growth factor of vector typically 1.5x-2x? What happens with a growth factor of 1.1x? What about 10x?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List the conditions under which list outperforms vector. Be specific about element size, count, and operation patterns."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the load factor of an unordered container? How does changing max_load_factor affect performance and memory usage?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does std::set maintain sorted order? What rotation types does a Red-Black tree use?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why does std::map::operator[] have different semantics than std::unordered_map::at()? What's the performance implication?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the asymptotic complexity of erasing all elements that satisfy a predicate from a vector? From a set? From an unordered_set?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe a scenario where std::forward_list would be preferred over std::list."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word Frequency Analyzer:"
          }), " Write a program that reads a text file, counts word frequencies using an unordered_map, and prints the top 20 words sorted by frequency descending (use vector of pairs + partial_sort)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LRU Cache:"
          }), " Implement an LRU cache using unordered_map (for O(1) lookup) and list (for O(1) move-to-front). Support get(key) and put(key, value) operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Undo/Redo System:"
          }), " Implement an undo/redo system using two stacks (vector-based). Each operation should support execute, undo (move to redo stack), and redo (move back to undo stack)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Matrix Class:"
          }), " Implement a simple sparse matrix class using std::map<std::pair<int,int>, double>. Support operator(), addition, and multiplication. Compare performance against a dense vector<vector<double>>."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BFS Shortest Path:"
          }), " Implement BFS on a grid using std::queue. Each cell is a pair<int,int>. Track visited cells using unordered_set with a custom hash for pairs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Allocator Experiment:"
          }), " Write a program that creates vector<int>, list<int>, and deque<int> each with 10 million elements. Measure memory usage (via task manager / getrusage) and iteration time. Compare against expected theoretical values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Job Scheduler:"
          }), " Implement a simple job scheduler using priority_queue. Each job has a priority and a function to execute. Extract jobs in priority order and execute them."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bidirectional Map (Bimap):"
          }), " Implement a bidirectional map using two unordered_maps internally: one mapping keys to values, the other mapping values to keys. Support insert, lookup_by_key, lookup_by_value, erase_by_key, erase_by_value. Ensure consistency between both maps on all operations. Handle the case where multiple keys map to the same value."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Skip List Implementation:"
          }), " Implement a skip list (probabilistic balanced data structure) using forward_list as the base layer. Compare performance against std::set for insert, find, and erase."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash Table From Scratch:"
          }), " Implement a simple hash table with chaining using vector<forward_list<pair<K,V>>>. Support insert, find, erase, rehash, and load factor tracking. Compare correctness and performance against std::unordered_map."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Container Benchmark Suite:"
          }), " Write a benchmarking program that measures:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Insert time (front, middle, back) across vector, deque, list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Iteration time (sequential, random access) across all sequence containers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find time (unordered_map vs map) at various N (100, 10K, 1M)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Memory usage at each size\r\nGenerate formatted tables comparing all containers."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lock-Free Ring Buffer:"
          }), " Implement a single-producer, single-consumer lock-free ring buffer using std::array or std::vector with atomic head/tail indices. Compare throughput against std::deque with mutex."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["cppreference.com: Standard library containers -- ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.cppreference.com/w/cpp/container",
          children: "https://en.cppreference.com/w/cpp/container"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISO C++ Standard (C++17/20): [container.requirements] section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Effective STL\" by Scott Meyers -- Items 1 through 18 cover container selection and best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The C++ Standard Library (2nd Edition)\" by Nicolai M. Josuttis -- Comprehensive container reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/08-exceptions",
          children: "08-exceptions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/10-stl-algorithms",
          children: "10-stl-algorithms"
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



/***/ }

}]);