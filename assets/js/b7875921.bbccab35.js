"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94940],{

/***/ 85793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_02_arrays_md_b78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-02-arrays-md-b78.json
const site_docs_courses_data_structures_02_arrays_md_b78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/02-arrays","title":"Chapter 2: Arrays","description":"Previous Complexity Analysis | Next: Singly Linked List","source":"@site/docs/courses/data-structures/02-arrays.md","sourceDirName":"courses/data-structures","slug":"/data-structures/02-arrays","permalink":"/ai-engineering-journey/data-structures/02-arrays","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-arrays","slug":"/data-structures/02-arrays","title":"Chapter 2: Arrays","sidebar_label":"Chapter 2: Arrays","sidebar_position":2},"sidebar":"course-data-structures","previous":{"title":"Chapter 1: Complexity Analysis","permalink":"/ai-engineering-journey/data-structures/01-complexity"},"next":{"title":"Chapter 3: Singly Linked List","permalink":"/ai-engineering-journey/data-structures/03-singly-linked-list"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/02-arrays.md


const frontMatter = {
	id: '02-arrays',
	slug: '/data-structures/02-arrays',
	title: 'Chapter 2: Arrays',
	sidebar_label: 'Chapter 2: Arrays',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Arrays';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Arrays Matter",
  "id": "why-arrays-matter",
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
  "value": "1. Array ADT (Abstract Data Type)",
  "id": "1-array-adt-abstract-data-type",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Core Operations",
  "id": "core-operations",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 3
}, {
  "value": "Complexity Analysis — Why?",
  "id": "complexity-analysis--why",
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
  "value": "2. Static vs Dynamic Arrays",
  "id": "2-static-vs-dynamic-arrays",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Static Array",
  "id": "static-array",
  "level": 3
}, {
  "value": "Dynamic Array",
  "id": "dynamic-array",
  "level": 3
}, {
  "value": "Amortized Cost Analysis",
  "id": "amortized-cost-analysis",
  "level": 3
}, {
  "value": "C++ Implementation (std::vector behavior)",
  "id": "c-implementation-stdvector-behavior",
  "level": 3
}, {
  "value": "Python Implementation (simulating dynamic array)",
  "id": "python-implementation-simulating-dynamic-array",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 3
}, {
  "value": "Static vs Dynamic — Comparison",
  "id": "static-vs-dynamic--comparison",
  "level": 3
}, {
  "value": "Complexity — Why?",
  "id": "complexity--why",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "3. Array Operations: Insertion, Deletion, Traversal",
  "id": "3-array-operations-insertion-deletion-traversal",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Insertion",
  "id": "insertion",
  "level": 3
}, {
  "value": "Deletion",
  "id": "deletion",
  "level": 3
}, {
  "value": "Traversal",
  "id": "traversal",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 3
}, {
  "value": "Complexity — Why?",
  "id": "complexity--why-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "4. Array Rotation",
  "id": "4-array-rotation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Problem",
  "id": "problem",
  "level": 3
}, {
  "value": "Algorithm (Reversal Method — O(n) time, O(1) space)",
  "id": "algorithm-reversal-method--on-time-o1-space",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
  "level": 3
}, {
  "value": "Complexity — Why?",
  "id": "complexity--why-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "5. Array Reversal",
  "id": "5-array-reversal",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Algorithm (Two-Pointer Swap)",
  "id": "algorithm-two-pointer-swap",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "6. Prefix Sum",
  "id": "6-prefix-sum",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-5",
  "level": 3
}, {
  "value": "Complexity — Why?",
  "id": "complexity--why-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "2D Prefix Sum",
  "id": "2d-prefix-sum",
  "level": 3
}, {
  "value": "7. Two-Pointer Technique",
  "id": "7-two-pointer-technique",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Problem",
  "id": "problem-1",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-4",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-5",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-6",
  "level": 3
}, {
  "value": "Complexity — Why?",
  "id": "complexity--why-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "Array vs Linked List — Detailed Comparison",
  "id": "array-vs-linked-list--detailed-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Kadane&#39;s Algorithm (Maximum Subarray Sum)",
  "id": "problem-1-kadanes-algorithm-maximum-subarray-sum",
  "level": 3
}, {
  "value": "Problem 2: Trapping Rain Water",
  "id": "problem-2-trapping-rain-water",
  "level": 3
}, {
  "value": "Problem 3: Container With Most Water",
  "id": "problem-3-container-with-most-water",
  "level": 3
}, {
  "value": "Problem 4: Rotate Array (LeetCode 189)",
  "id": "problem-4-rotate-array-leetcode-189",
  "level": 3
}, {
  "value": "Problem 5: Two Sum (Unsorted — LeetCode 1)",
  "id": "problem-5-two-sum-unsorted--leetcode-1",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Image Processing (Pixel Buffers)",
  "id": "1-image-processing-pixel-buffers",
  "level": 3
}, {
  "value": "2. Dynamic Array Implementations in Language Runtimes",
  "id": "2-dynamic-array-implementations-in-language-runtimes",
  "level": 3
}, {
  "value": "3. Matrix Storage and Linear Algebra",
  "id": "3-matrix-storage-and-linear-algebra",
  "level": 3
}, {
  "value": "4. CPU Cache Line Optimization",
  "id": "4-cpu-cache-line-optimization",
  "level": 3
}, {
  "value": "5. Buffer and Stream I/O",
  "id": "5-buffer-and-stream-io",
  "level": 3
}, {
  "value": "6. Hash Table Bucket Arrays",
  "id": "6-hash-table-bucket-arrays",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Common Array Patterns",
  "id": "quick-reference-common-array-patterns",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Common Mistakes &amp; Pitfalls (GFG-Style)",
  "id": "common-mistakes--pitfalls-gfg-style",
  "level": 2
}, {
  "value": "GFG Interview Corner: TypeScript Array Patterns",
  "id": "gfg-interview-corner-typescript-array-patterns",
  "level": 2
}, {
  "value": "TypeScript Dynamic Array Implementation",
  "id": "typescript-dynamic-array-implementation",
  "level": 3
}, {
  "value": "TypeScript Prefix Sum &amp; Range Queries",
  "id": "typescript-prefix-sum--range-queries",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern",
  "level": 3
}, {
  "value": "8. Subarray Problems (Advanced Techniques)",
  "id": "8-subarray-problems-advanced-techniques",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Subarray Problem Taxonomy",
  "id": "subarray-problem-taxonomy",
  "level": 3
}, {
  "value": "Maximum Product Subarray (LeetCode 152)",
  "id": "maximum-product-subarray-leetcode-152",
  "level": 3
}, {
  "value": "TypeScript — Maximum Product Subarray",
  "id": "typescript--maximum-product-subarray",
  "level": 3
}, {
  "value": "9. Array Partitioning and Quick Select",
  "id": "9-array-partitioning-and-quick-select",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Quick Select Algorithm",
  "id": "quick-select-algorithm",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 3
}, {
  "value": "TypeScript — Quick Select",
  "id": "typescript--quick-select",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern-1",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern-1",
  "level": 3
}, {
  "value": "Complexity Master Table: Array Operations",
  "id": "complexity-master-table-array-operations",
  "level": 3
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "chapter-2-arrays",
        children: "Chapter 2: Arrays"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/01-complexity",
          children: "Chapter 1: Complexity Analysis"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/03-singly-linked-list",
          children: "Singly Linked List"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between static and dynamic arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement insertion, deletion, and traversal on arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve problems using the two-pointer technique."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulate 2D arrays and matrices."
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
        href: "../../assets/images/lessons/data-structures/02-arrays/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/02-arrays/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/02-arrays/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/02-arrays/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/02-arrays/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/02-arrays/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-arrays-matter",
      children: "Why Arrays Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a row of cinema seats numbered 0 to n-1. Each seat holds exactly one person — just like an array slot holds one element. You can instantly tell anyone to \"go to seat 7\" (O(1) random access), but if a new person needs to sit in seat 2, everyone from seat 2 onward must shift right by one (O(n) insertion). If someone leaves seat 4, everyone to the right shifts left (O(n) deletion). This trade-off — instant lookup vs. costly insertion/deletion — is the defining character of arrays and the reason they power everything from image buffers to dynamic language runtimes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
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
            children: "Static Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous memory block, fixed size at allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when element count is known and constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows by doubling when capacity exhausted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice for general-purpose sequential data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Pointer Technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two indices scan from opposite ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces pair-sum from O(n²) to O(n) on sorted arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D Arrays / Matrices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-major or column-major storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-major traversal is cache-friendly in C/C++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix Sums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precomputed running total for O(1) range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for repeated subarray-sum problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand/contract window over contiguous elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves max subarray and substring problems in O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Array Concepts] --> B[Static vs Dynamic]\n    B --> C[Basic Ops: Access, Insert, Delete]\n    C --> D[Multi-dimensional Arrays]\n    D --> E[Two-Pointer Technique]\n    E --> F[Sliding Window]\n    F --> G[Prefix Sums and Kadane]\n    G --> H[Matrix Operations]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-array-adt-abstract-data-type",
      children: "1. Array ADT (Abstract Data Type)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vending machine"
      }), " is an array of slots. Each slot has a fixed position (index 0, 1, 2, ...) and stores one item."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access"
        }), ": Press B3 → instantly get the item at slot B3 → O(1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search"
        }), ": Look at each slot until you find a Sprite → O(n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert"
        }), ": Staff adds a new item at position 2 — everything from 2 onward gets shifted right → O(n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), ": An item is sold from position 4 — everything from 4 onward shifts left → O(n)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Array ADT"
      }), " is a collection of elements of the same type stored in contiguous memory locations, providing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ordered storage"
        }), ": elements have a definite position (index 0..n-1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random access"
        }), ": any element can be accessed in O(1) using its index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Homogeneous"
        }), ": all elements are the same data type"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-operations",
      children: "Core Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return element at index i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update(i, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set arr[i] = val"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "search(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find first index of val"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(i, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert val at index i, shift right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete(i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove element at i, shift left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM read(arr, i)\n    IF i < 0 OR i ≥ length(arr) THEN\n        THROW IndexOutOfBounds\n    RETURN arr[i]\n\nALGORITHM insert(arr, i, val, n, capacity)\n    // n = current size, capacity = allocated size\n    IF n ≥ capacity THEN\n        THROW Overflow\n    IF i < 0 OR i > n THEN\n        THROW IndexOutOfBounds\n    FOR j = n DOWNTO i+1:\n        arr[j] = arr[j-1]\n    arr[i] = val\n    n = n + 1\n\nALGORITHM delete(arr, i, n)\n    IF i < 0 OR i ≥ n THEN\n        THROW IndexOutOfBounds\n    FOR j = i TO n-2:\n        arr[j] = arr[j+1]\n    n = n - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert"
      }), " — Insert value 25 at index 2 in arr = [10, 20, 30, 40, 50], n=5, capacity=6"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=5→2 : arr[5]=arr[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=4→2 : arr[4]=arr[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=3→2 : arr[3]=arr[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[2] = 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 25, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = n + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 25, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " — Delete element at index 1 from arr = [10, 20, 30, 40, 50], n=5"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=1→3 : arr[1]=arr[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=2→3 : arr[2]=arr[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift j=3→3 : arr[3]=arr[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = n - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass ArrayADT {\nprivate:\n    int* arr;\n    int n;\n    int capacity;\npublic:\n    ArrayADT(int cap) : capacity(cap), n(0) {\n        arr = new int[capacity];\n    }\n    ~ArrayADT() { delete[] arr; }\n\n    int read(int i) {\n        if (i < 0 || i >= n) throw out_of_range(\"Index out of bounds\");\n        return arr[i];\n    }\n\n    void update(int i, int val) {\n        if (i < 0 || i >= n) throw out_of_range(\"Index out of bounds\");\n        arr[i] = val;\n    }\n\n    void insert(int i, int val) {\n        if (n >= capacity) throw overflow_error(\"Array full\");\n        if (i < 0 || i > n) throw out_of_range(\"Index out of bounds\");\n        for (int j = n; j > i; --j)\n            arr[j] = arr[j - 1];\n        arr[i] = val;\n        n++;\n    }\n\n    int remove(int i) {\n        if (i < 0 || i >= n) throw out_of_range(\"Index out of bounds\");\n        int val = arr[i];\n        for (int j = i; j < n - 1; ++j)\n            arr[j] = arr[j + 1];\n        n--;\n        return val;\n    }\n\n    int search(int val) {\n        for (int i = 0; i < n; ++i)\n            if (arr[i] == val) return i;\n        return -1;\n    }\n\n    void print() {\n        for (int i = 0; i < n; ++i) cout << arr[i] << \" \";\n        cout << \"\\n\";\n    }\n};\n\nint main() {\n    ArrayADT a(6);\n    for (int i = 0; i < 5; ++i) a.insert(i, (i + 1) * 10);\n    a.print();                       // 10 20 30 40 50\n    cout << a.read(2) << \"\\n\";       // 30\n    a.insert(2, 25);\n    a.print();                       // 10 20 25 30 40 50\n    a.remove(1);\n    a.print();                       // 10 25 30 40 50\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ArrayADT:\n    def __init__(self, capacity: int):\n        self.arr = [None] * capacity\n        self.n = 0\n        self.capacity = capacity\n\n    def read(self, i: int):\n        if i < 0 or i >= self.n:\n            raise IndexError(\"Index out of bounds\")\n        return self.arr[i]\n\n    def update(self, i: int, val):\n        if i < 0 or i >= self.n:\n            raise IndexError(\"Index out of bounds\")\n        self.arr[i] = val\n\n    def insert(self, i: int, val):\n        if self.n >= self.capacity:\n            raise OverflowError(\"Array full\")\n        if i < 0 or i > self.n:\n            raise IndexError(\"Index out of bounds\")\n        for j in range(self.n, i, -1):\n            self.arr[j] = self.arr[j - 1]\n        self.arr[i] = val\n        self.n += 1\n\n    def remove(self, i: int):\n        if i < 0 or i >= self.n:\n            raise IndexError(\"Index out of bounds\")\n        val = self.arr[i]\n        for j in range(i, self.n - 1):\n            self.arr[j] = self.arr[j + 1]\n        self.n -= 1\n        return val\n\n    def search(self, val):\n        for i in range(self.n):\n            if self.arr[i] == val:\n                return i\n        return -1\n\n    def print_all(self):\n        print([self.arr[i] for i in range(self.n)])\n\narr = ArrayADT(6)\nfor i in range(5):\n    arr.insert(i, (i + 1) * 10)\narr.print_all()      # [10, 20, 30, 40, 50]\nprint(arr.read(2))   # 30\narr.insert(2, 25)\narr.print_all()      # [10, 20, 25, 30, 40, 50]\narr.remove(1)\narr.print_all()      # [10, 25, 30, 40, 50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ArrayADT {\n    private int[] arr;\n    private int n;\n    private int capacity;\n\n    public ArrayADT(int capacity) {\n        this.capacity = capacity;\n        this.n = 0;\n        this.arr = new int[capacity];\n    }\n\n    public int read(int i) {\n        if (i < 0 || i >= n) throw new IndexOutOfBoundsException();\n        return arr[i];\n    }\n\n    public void update(int i, int val) {\n        if (i < 0 || i >= n) throw new IndexOutOfBoundsException();\n        arr[i] = val;\n    }\n\n    public void insert(int i, int val) {\n        if (n >= capacity) throw new RuntimeException(\"Array full\");\n        if (i < 0 || i > n) throw new IndexOutOfBoundsException();\n        for (int j = n; j > i; j--)\n            arr[j] = arr[j - 1];\n        arr[i] = val;\n        n++;\n    }\n\n    public int remove(int i) {\n        if (i < 0 || i >= n) throw new IndexOutOfBoundsException();\n        int val = arr[i];\n        for (int j = i; j < n - 1; j++)\n            arr[j] = arr[j + 1];\n        n--;\n        return val;\n    }\n\n    public int search(int val) {\n        for (int i = 0; i < n; i++)\n            if (arr[i] == val) return i;\n        return -1;\n    }\n\n    public void print() {\n        for (int i = 0; i < n; i++) System.out.print(arr[i] + \" \");\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        ArrayADT a = new ArrayADT(6);\n        for (int i = 0; i < 5; i++) a.insert(i, (i + 1) * 10);\n        a.print();                  // 10 20 30 40 50\n        System.out.println(a.read(2)); // 30\n        a.insert(2, 25);\n        a.print();                  // 10 20 25 30 40 50\n        a.remove(1);\n        a.print();                  // 10 25 30 40 50\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--why",
      children: "Complexity Analysis — Why?"
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
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address computed directly as base + i × sizeof(element). No loops."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update(i, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same direct-address computation as read."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "search(val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case: val at last index or absent; must visit all n elements."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(i, val)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case (i=0): all n elements shift right by 1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete(i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case (i=0): all n elements shift left by 1."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
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
            children: "O(1) random access by index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity (static) or amortized-cost resize (dynamic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent cache locality — contiguous memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) insertion/deletion in middle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal memory overhead (no pointers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) search in unsorted array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, familiar interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size must be known or guessable at allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language-native in C/C++/Java/Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space when capacity > size (dynamic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array"
        }), " (n = 0) — read/delete/search on empty array throws IndexOutOfBounds or returns -1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " (n = 1) — insert at end works, delete at 0 leaves empty array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full array"
        }), " (n = capacity) — insert raises overflow; resize needed in dynamic arrays"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index out of bounds"
        }), " — insert i < 0 or i > n, delete/read i < 0 or i >= n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert at end"
        }), " (i = n) — valid, no elements shift; best-case insertion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert at front"
        }), " (i = 0) — worst case, all n elements shift right"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete from end"
        }), " (i = n-1) — valid, no elements shift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate values"
        }), " — search returns first match; insertion creates duplicates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-static-vs-dynamic-arrays",
      children: "2. Static vs Dynamic Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static array"
      }), " = a parking lot with exactly 20 painted spots. If 21 cars arrive, overflow.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic array"
      }), " = a parking lot that, when it fills up, buys the adjacent lot, doubles its spots, and moves all cars across. Each individual move costs O(n), but on average over many arrivals, each car costs O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-array",
      children: "Static Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A static array is a fixed-size block of contiguous memory. Size is set at compile time or via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new[]"
      }), " and cannot change after allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int arr[10];          // Stack-allocated, size 10, fixed forever\nint* arr2 = new int[20]; // Heap-allocated, fixed at 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-array",
      children: "Dynamic Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A dynamic array (also called ", (0,jsx_runtime.jsx)(_components.em, {
        children: "resizeable array"
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: "vector"
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: "ArrayList"
      }), ") starts with a small capacity and grows by a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "growth factor"
      }), " (typically ×2) when full."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Growth Pattern (capacity doubling):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Insertion #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (n)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resize Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy 1 element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy 2 elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy 4 elements"
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
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy 8 elements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amortized-cost-analysis",
      children: "Amortized Cost Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total copies after n insertions (where n = 2^k + 1):\n1 + 2 + 4 + 8 + ... + 2^k = 2^(k+1) - 1 ≈ 2n"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amortized cost per insertion"
      }), " = Total work / n ≈ 2n / n = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-stdvector-behavior",
      children: "C++ Implementation (std::vector behavior)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nclass DynamicArray {\nprivate:\n    T* arr;\n    int n;\n    int cap;\n    void resize() {\n        cap = cap == 0 ? 1 : cap * 2;\n        T* newArr = new T[cap];\n        for (int i = 0; i < n; ++i) newArr[i] = arr[i];\n        delete[] arr;\n        arr = newArr;\n    }\npublic:\n    DynamicArray() : arr(nullptr), n(0), cap(0) {}\n\n    void pushBack(T val) {\n        if (n >= cap) resize();\n        arr[n++] = val;\n    }\n\n    T popBack() {\n        if (n == 0) throw underflow_error(\"Empty\");\n        return arr[--n];\n    }\n\n    T& operator[](int i) { return arr[i]; }\n    int size() { return n; }\n    int capacity() { return cap; }\n};\n\nint main() {\n    DynamicArray<int> v;\n    for (int i = 0; i < 10; ++i) v.pushBack(i * 10);\n    for (int i = 0; i < v.size(); ++i) cout << v[i] << \" \";\n    cout << \"\\nSize: \" << v.size() << \", Cap: \" << v.capacity() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-simulating-dynamic-array",
      children: "Python Implementation (simulating dynamic array)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicArray:\n    def __init__(self):\n        self.arr = [None]   # start with capacity 1\n        self.n = 0\n        self.cap = 1\n\n    def _resize(self):\n        self.cap *= 2\n        new_arr = [None] * self.cap\n        for i in range(self.n):\n            new_arr[i] = self.arr[i]\n        self.arr = new_arr\n\n    def append(self, val):\n        if self.n >= self.cap:\n            self._resize()\n        self.arr[self.n] = val\n        self.n += 1\n\n    def pop(self):\n        if self.n == 0:\n            raise IndexError(\"pop from empty array\")\n        self.n -= 1\n        return self.arr[self.n]\n\n    def __getitem__(self, i):\n        if i < 0 or i >= self.n:\n            raise IndexError(\"Index out of bounds\")\n        return self.arr[i]\n\n    def __len__(self):\n        return self.n\n\n    def capacity(self):\n        return self.cap\n\nv = DynamicArray()\nfor i in range(10):\n    v.append(i * 10)\nprint([v[i] for i in range(len(v))])\nprint(f\"Size: {len(v)}, Cap: {v.capacity()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class DynamicArray<T> {\n    private Object[] arr;\n    private int n;\n    private int cap;\n\n    public DynamicArray() {\n        this.cap = 1;\n        this.n = 0;\n        this.arr = new Object[cap];\n    }\n\n    public void append(T val) {\n        if (n >= cap) {\n            cap *= 2;\n            arr = Arrays.copyOf(arr, cap);\n        }\n        arr[n++] = val;\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public T pop() {\n        if (n == 0) throw new RuntimeException(\"Empty\");\n        return (T) arr[--n];\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public T get(int i) {\n        if (i < 0 || i >= n) throw new IndexOutOfBoundsException();\n        return (T) arr[i];\n    }\n\n    public int size() { return n; }\n    public int capacity() { return cap; }\n\n    public static void main(String[] args) {\n        DynamicArray<Integer> v = new DynamicArray<>();\n        for (int i = 0; i < 10; i++) v.append(i * 10);\n        for (int i = 0; i < v.size(); i++) System.out.print(v.get(i) + \" \");\n        System.out.println();\n        System.out.println(\"Size: \" + v.size() + \", Cap: \" + v.capacity());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-vs-dynamic--comparison",
      children: "Static vs Dynamic — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed at compile/alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows on demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack or heap (once)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap (resized when full)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert end O(1)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (amortized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert end worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) during resize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cap - n unused slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known, constant size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown or growing data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity--why",
      children: "Complexity — Why?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static array: Access O(1)"
        }), " — arithmetic: base + i * sizeof(T), one multiplication, one addition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic array: push_back amortized O(1)"
        }), " — the rare O(n) resize cost is spread across all insertions. Each element is copied at most log₂(n) times during its lifetime."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic array: pop_back O(1)"
        }), " — just decrement n, no resize (some implementations shrink at cap/4)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
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
            children: "Cache-friendly contiguous layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize copies all elements (O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized O(1) end insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May waste up to 50% capacity (growth factor 2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) index access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete in middle is O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler than linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growth pauses execution during resize"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty dynamic array"
        }), ": push_back works (if cap=0, resize to 1); pop_back throws"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), ": push_back triggers first resize; pop_back leaves empty"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large growth"
        }), ": capacity doubling can cause memory exhaustion (growth factor 1.5 is more memory-efficient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shrinking"
        }), ": Repeated pop_back does not reduce capacity — some implementations shrink at n ≤ cap/4"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-array-operations-insertion-deletion-traversal",
      children: "3. Array Operations: Insertion, Deletion, Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Insertion"
      }), " = A line of people at a ticket counter. A VIP arrives and wants position 3, so everyone from position 3 onward steps back by one.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deletion"
      }), " = Person at position 5 leaves the queue, so everyone behind steps forward by one.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traversal"
      }), " = The guard walks from the first person to the last, checking each ticket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insertion",
      children: "Insertion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Insert value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "val"
      }), " at position ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pos"
      }), ", shifting all elements from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pos"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n-1"
      }), " right by one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if array is full (n ≥ capacity) — if so, report overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if pos is valid (0 ≤ pos ≤ n) — if not, report out of bounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shift all elements from index n-1 down to pos by one position right"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place val at arr[pos]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM insert(arr, n, capacity, pos, val)\n    IF n ≥ capacity THEN\n        PRINT \"Array full\"\n        RETURN\n    IF pos < 0 OR pos > n THEN\n        PRINT \"Invalid position\"\n        RETURN\n    FOR i = n DOWNTO pos + 1:\n        arr[i] = arr[i - 1]\n    arr[pos] = val\n    n = n + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Insert 25 at pos=2, arr=[10,20,30,40,50], n=5, cap=6"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[5] = arr[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[4] = arr[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[3] = arr[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[2] = 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 25, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = n + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 25, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletion",
      children: "Deletion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remove element at position ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pos"
      }), ", shifting all elements from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pos+1"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n-1"
      }), " left by one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if array is empty — if so, report underflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if pos is valid (0 ≤ pos < n) — if not, report out of bounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shift all elements from pos+1 to n-1 by one position left"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM delete(arr, n, pos)\n    IF n == 0 THEN\n        PRINT \"Array empty\"\n        RETURN NULL\n    IF pos < 0 OR pos ≥ n THEN\n        PRINT \"Invalid position\"\n        RETURN NULL\n    val = arr[pos]\n    FOR i = pos TO n - 2:\n        arr[i] = arr[i + 1]\n    n = n - 1\n    RETURN val\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Delete at pos=1, arr=[10,20,30,40,50], n=5"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[1] = arr[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[2] = arr[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[3] = arr[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = n - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 50, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traversal",
      children: "Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Visit each element from index 0 to n-1 exactly once, performing an operation (print, sum, transform, search)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize i = 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While i < n: process arr[i], then i = i + 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Done"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM traverse(arr, n)\n    FOR i = 0 TO n - 1:\n        PROCESS(arr[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Traverse arr=[10,20,30,40,50] to print each element"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 20 30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 20 30 40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 20 30 40 50"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nvoid insert(int arr[], int& n, int capacity, int pos, int val) {\n    if (n >= capacity) { cout << \"Array full\\n\"; return; }\n    if (pos < 0 || pos > n) { cout << \"Invalid position\\n\"; return; }\n    for (int i = n; i > pos; --i) arr[i] = arr[i - 1];\n    arr[pos] = val;\n    n++;\n}\n\nint remove(int arr[], int& n, int pos) {\n    if (n == 0) { cout << \"Array empty\\n\"; return -1; }\n    if (pos < 0 || pos >= n) { cout << \"Invalid position\\n\"; return -1; }\n    int val = arr[pos];\n    for (int i = pos; i < n - 1; ++i) arr[i] = arr[i + 1];\n    n--;\n    return val;\n}\n\nvoid traverse(int arr[], int n) {\n    for (int i = 0; i < n; ++i) cout << arr[i] << \" \";\n    cout << \"\\n\";\n}\n\nint main() {\n    int arr[6], n = 5, cap = 6;\n    for (int i = 0; i < n; ++i) arr[i] = (i + 1) * 10;\n    traverse(arr, n);                 // 10 20 30 40 50\n    insert(arr, n, cap, 2, 25);\n    traverse(arr, n);                 // 10 20 25 30 40 50\n    remove(arr, n, 1);\n    traverse(arr, n);                 // 10 25 30 40 50\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def insert_arr(arr, n, capacity, pos, val):\n    if n >= capacity:\n        print(\"Array full\")\n        return n\n    if pos < 0 or pos > n:\n        print(\"Invalid position\")\n        return n\n    for i in range(n, pos, -1):\n        arr[i] = arr[i - 1]\n    arr[pos] = val\n    return n + 1\n\ndef delete_arr(arr, n, pos):\n    if n == 0:\n        print(\"Array empty\")\n        return None, n\n    if pos < 0 or pos >= n:\n        print(\"Invalid position\")\n        return None, n\n    val = arr[pos]\n    for i in range(pos, n - 1):\n        arr[i] = arr[i + 1]\n    return val, n - 1\n\ndef traverse(arr, n):\n    for i in range(n):\n        print(arr[i], end=\" \")\n    print()\n\narr = [0] * 6\nn = 5\nfor i in range(n):\n    arr[i] = (i + 1) * 10\ntraverse(arr, n)               # 10 20 30 40 50\nn = insert_arr(arr, n, 6, 2, 25)\ntraverse(arr, n)               # 10 20 25 30 40 50\nval, n = delete_arr(arr, n, 1)\ntraverse(arr, n)               # 10 25 30 40 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ArrayOps {\n    static int insert(int[] arr, int n, int cap, int pos, int val) {\n        if (n >= cap) { System.out.println(\"Array full\"); return n; }\n        if (pos < 0 || pos > n) { System.out.println(\"Invalid\"); return n; }\n        for (int i = n; i > pos; i--) arr[i] = arr[i - 1];\n        arr[pos] = val;\n        return n + 1;\n    }\n\n    static int remove(int[] arr, int n, int pos) {\n        if (n == 0) { System.out.println(\"Empty\"); return n; }\n        if (pos < 0 || pos >= n) { System.out.println(\"Invalid\"); return n; }\n        for (int i = pos; i < n - 1; i++) arr[i] = arr[i + 1];\n        return n - 1;\n    }\n\n    static void traverse(int[] arr, int n) {\n        for (int i = 0; i < n; i++) System.out.print(arr[i] + \" \");\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        int[] arr = new int[6];\n        int n = 5;\n        for (int i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n        traverse(arr, n);                   // 10 20 30 40 50\n        n = insert(arr, n, 6, 2, 25);\n        traverse(arr, n);                   // 10 20 25 30 40 50\n        n = remove(arr, n, 1);\n        traverse(arr, n);                   // 10 25 30 40 50\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity--why-1",
      children: "Complexity — Why?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: "Insert at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No shifting needed; arr[n] = val"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All n elements shift right by 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On average n/2 elements shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just decrement n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All n-1 elements shift left by 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each of n elements once"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Insert/delete at end is O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete at front or middle is O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same element type enables SIMD optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resizing (dynamic) is expensive O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous memory = cache-friendly traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traversal visits all elements even when not needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert at n (end)"
        }), ": arr[n] = val, n++, O(1) — simplest case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert at 0 (front)"
        }), ": worst case, all n shift right"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete at n-1 (last)"
        }), ": just n--, O(1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert into empty array"
        }), " (n=0): pos must be 0; arr[0] = val"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete from single-element array"
        }), ": n becomes 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert when n = capacity"
        }), ": overflow — caller must resize first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete invalid index"
        }), ": pos ≥ n or pos < 0 → throw/return error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-array-rotation",
      children: "4. Array Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "revolving door"
      }), " has four compartments. When the door rotates by one position, what was in compartment 0 moves to compartment 1, 1→2, 2→3, 3→0. Rotating an array works the same way: elements cycle around."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given an array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr"
      }), " of size n and integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ", rotate the array ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left"
      }), " by k positions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Left rotation by 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[1,2,3,4,5]"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[2,3,4,5,1]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Left rotation by k is equivalent to left rotation by k % n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-reversal-method--on-time-o1-space",
      children: "Algorithm (Reversal Method — O(n) time, O(1) space)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "k = k % n (handle k ≥ n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the first k elements (0 to k-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the remaining n-k elements (k to n-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the entire array (0 to n-1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM rotateLeft(arr, n, k)\n    k = k % n\n    IF k == 0 THEN RETURN\n\n    reverse(arr, 0, k - 1)\n    reverse(arr, k, n - 1)\n    reverse(arr, 0, n - 1)\n\nALGORITHM reverse(arr, left, right)\n    WHILE left < right:\n        SWAP(arr[left], arr[right])\n        left = left + 1\n        right = right - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rotate left by k=3, arr=[1, 2, 3, 4, 5, 6, 7], n=7, k=3"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse 0..2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3, 2, 1"
            }), ", 4, 5, 6, 7]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse 3..6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[3, 2, 1, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "7, 6, 5, 4"
            }), "]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse 0..6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4, 5, 6, 7, 1, 2, 3"
            }), "]"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reversal Step 1 in detail (reverse 0..2):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap arr[i]↔arr[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ↔ 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[3"
            }), ", 2, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), ", 4, 5, 6, 7]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(i≥j, stop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 2, 1, 4, 5, 6, 7]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reversal Step 3 in detail (reverse 0..6):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap arr[i]↔arr[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ↔ 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), ", 2, 1, 7, 6, 5, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            }), "]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ↔ 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[4, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            }), ", 1, 7, 6, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), ", 3]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ↔ 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[4, 5, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            }), ", 7, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), ", 2, 3]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(i≥j, stop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 7, 1, 2, 3] ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid rotateLeft(vector<int>& arr, int k) {\n    int n = arr.size();\n    if (n == 0) return;\n    k = k % n;\n    reverse(arr.begin(), arr.begin() + k);\n    reverse(arr.begin() + k, arr.end());\n    reverse(arr.begin(), arr.end());\n}\n\nvoid rotateRight(vector<int>& arr, int k) {\n    int n = arr.size();\n    if (n == 0) return;\n    k = k % n;\n    reverse(arr.begin(), arr.end());\n    reverse(arr.begin(), arr.begin() + k);\n    reverse(arr.begin() + k, arr.end());\n}\n\nint main() {\n    vector<int> arr = {1, 2, 3, 4, 5, 6, 7};\n    rotateLeft(arr, 3);\n    for (int x : arr) cout << x << \" \";   // 4 5 6 7 1 2 3\n    cout << \"\\n\";\n    vector<int> arr2 = {1, 2, 3, 4, 5, 6, 7};\n    rotateRight(arr2, 2);\n    for (int x : arr2) cout << x << \" \";  // 6 7 1 2 3 4 5\n    cout << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reverse(arr, left, right):\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n\ndef rotate_left(arr, k):\n    n = len(arr)\n    if n == 0:\n        return\n    k %= n\n    reverse(arr, 0, k - 1)\n    reverse(arr, k, n - 1)\n    reverse(arr, 0, n - 1)\n\ndef rotate_right(arr, k):\n    n = len(arr)\n    if n == 0:\n        return\n    k %= n\n    reverse(arr, 0, n - 1)\n    reverse(arr, 0, k - 1)\n    reverse(arr, k, n - 1)\n\narr = [1, 2, 3, 4, 5, 6, 7]\nrotate_left(arr, 3)\nprint(arr)  # [4, 5, 6, 7, 1, 2, 3]\n\narr2 = [1, 2, 3, 4, 5, 6, 7]\nrotate_right(arr2, 2)\nprint(arr2)  # [6, 7, 1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class ArrayRotation {\n    static void reverse(int[] arr, int l, int r) {\n        while (l < r) {\n            int tmp = arr[l];\n            arr[l] = arr[r];\n            arr[r] = tmp;\n            l++; r--;\n        }\n    }\n\n    static void rotateLeft(int[] arr, int k) {\n        int n = arr.length;\n        if (n == 0) return;\n        k %= n;\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n        reverse(arr, 0, n - 1);\n    }\n\n    static void rotateRight(int[] arr, int k) {\n        int n = arr.length;\n        if (n == 0) return;\n        k %= n;\n        reverse(arr, 0, n - 1);\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6, 7};\n        rotateLeft(arr, 3);\n        System.out.println(Arrays.toString(arr));  // [4, 5, 6, 7, 1, 2, 3]\n\n        int[] arr2 = {1, 2, 3, 4, 5, 6, 7};\n        rotateRight(arr2, 2);\n        System.out.println(Arrays.toString(arr2)); // [6, 7, 1, 2, 3, 4, 5]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity--why-2",
      children: "Complexity — Why?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
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
            children: "Brute (shift 1 by 1, k times)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of k rotations shifts n elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy to new array at rotated positions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each element is swapped exactly twice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Juggling (GCD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle decomposition; tricky to implement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reversal method is optimal: each element is visited and swapped exactly twice (once in a partial reverse, once in the full reverse). No extra memory beyond a single temp variable for swaps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "O(n) time, O(1) space — optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not stable (relative order within segments is reversed, then restored)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant — three lines of logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modulo arithmetic complexity for beginners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works in-place without extra array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left and right rotation are inverses; easy to confuse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = 0"
        }), ": no rotation, array unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = n"
        }), ": rotation by full size returns original array (k % n = 0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k > n"
        }), ": k % n handles it; e.g., k = 10, n = 7 → k = 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array"
        }), " (n = 0): return immediately, nothing to rotate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " (n = 1): any k returns same array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative k"
        }), ": treat as right rotation = left rotation by n - |k|"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-array-reversal",
      children: "5. Array Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deck of cards"
      }), " held face-down. You flip the entire deck: the top card becomes the bottom, the second becomes second-last, etc. Array reversal is exactly this — mirror the array around its center."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-two-pointer-swap",
      children: "Algorithm (Two-Pointer Swap)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize left = 0, right = n - 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While left < right: swap arr[left] and arr[right], then left++, right--"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When left ≥ right, stop (middle element stays in place for odd n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM reverse(arr, n)\n    left = 0\n    right = n - 1\n    WHILE left < right:\n        SWAP(arr[left], arr[right])\n        left = left + 1\n        right = right - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverse arr = [1, 2, 3, 4, 5, 6]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[left]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[right]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array after swap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            }), ", 2, 3, 4, 5, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), "]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[6, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            }), ", 3, 4, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), ", 1]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[6, 5, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            }), ", 2, 1]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop (left ≥ right)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: [6, 5, 4, 3, 2, 1]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Odd-length case"
      }), " — Reverse arr = [1, 2, 3, 4, 5]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1↔5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            }), ", 2, 3, 4, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), "]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2↔4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[5, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), ", 3, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), ", 1]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2, 1]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Middle element (3) stays in place."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid reverse(vector<int>& arr) {\n    int left = 0, right = arr.size() - 1;\n    while (left < right) {\n        swap(arr[left], arr[right]);\n        left++;\n        right--;\n    }\n}\n\nint main() {\n    vector<int> arr = {1, 2, 3, 4, 5, 6};\n    reverse(arr);\n    for (int x : arr) cout << x << \" \";  // 6 5 4 3 2 1\n    cout << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reverse(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n\narr = [1, 2, 3, 4, 5, 6]\nreverse(arr)\nprint(arr)  # [6, 5, 4, 3, 2, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class ArrayReverse {\n    static void reverse(int[] arr) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int tmp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = tmp;\n            left++;\n            right--;\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6};\n        reverse(arr);\n        System.out.println(Arrays.toString(arr));  // [6, 5, 4, 3, 2, 1]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Exactly n/2 swaps, each O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two integer variables (left, right) + one temp per swap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "O(n) time, O(1) space — optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifies input array (in-place)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, intuitive logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not work on singly linked lists (bidirectional needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly sequential access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must reverse entire array; no partial-reverse shortcut"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array"
        }), ": loop not entered, returns immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), ": left = right = 0, condition false, no-op"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two elements"
        }), ": one swap, done"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Even n"
        }), ": n/2 swaps, clean pairing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Odd n"
        }), ": (n-1)/2 swaps, middle element untouched"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-prefix-sum",
      children: "6. Prefix Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cash register receipt tape"
      }), " shows running totals. If you want to know how much you spent between Tuesday and Friday, you subtract Monday's running total from Friday's. The prefix sum does the same: precompute running totals so any subarray sum is a single subtraction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prefix sum array"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefix"
      }), " is defined as:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "prefix[0] = arr[0]"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prefix[i] = prefix[i-1] + arr[i]"
        }), " for i ≥ 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Subarray sum from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "l"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "r"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sum(l, r) = prefix[r] - prefix[l-1]"
        }), " (if l > 0)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sum(0, r) = prefix[r]"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create prefix array of size n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prefix[0] = arr[0]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For i = 1 to n-1: prefix[i] = prefix[i-1] + arr[i]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query: sum(l, r) = prefix[r] - (l > 0 ? prefix[l-1] : 0)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM buildPrefixSum(arr, n)\n    prefix = new array[n]\n    prefix[0] = arr[0]\n    FOR i = 1 TO n - 1:\n        prefix[i] = prefix[i - 1] + arr[i]\n    RETURN prefix\n\nALGORITHM rangeSum(prefix, l, r)\n    IF l == 0:\n        RETURN prefix[r]\n    RETURN prefix[r] - prefix[l - 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build prefix sum for arr = [3, 1, 4, 1, 5, 9, 2, 6]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prefix[i] = prefix[i-1] + arr[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prefix array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[0] = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, _, _, _, _, _, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[1] = 3 + 1 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, _, _, _, _, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[2] = 4 + 4 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, _, _, _, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[3] = 8 + 1 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, 9, _, _, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[4] = 9 + 5 = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, 9, 14, _, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[5] = 14 + 9 = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, 9, 14, 23, _, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[6] = 23 + 2 = 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, 9, 14, 23, 25, _]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix[7] = 25 + 6 = 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 8, 9, 14, 23, 25, 31]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query: Sum of subarray [2, 5]"
      }), " = arr[2] + arr[3] + arr[4] + arr[5] = 4 + 1 + 5 + 9 = 19\n= prefix[5] - prefix[1] = 23 - 4 = 19 ✓"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query: Sum of subarray [0, 4]"
      }), " = arr[0..4] = 3 + 1 + 4 + 1 + 5 = 14\n= prefix[4] = 14 ✓"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> buildPrefixSum(const vector<int>& arr) {\n    int n = arr.size();\n    vector<int> prefix(n);\n    if (n == 0) return prefix;\n    prefix[0] = arr[0];\n    for (int i = 1; i < n; ++i)\n        prefix[i] = prefix[i - 1] + arr[i];\n    return prefix;\n}\n\nint rangeSum(const vector<int>& prefix, int l, int r) {\n    if (l == 0) return prefix[r];\n    return prefix[r] - prefix[l - 1];\n}\n\nint main() {\n    vector<int> arr = {3, 1, 4, 1, 5, 9, 2, 6};\n    vector<int> pref = buildPrefixSum(arr);\n    cout << \"Sum [2,5]: \" << rangeSum(pref, 2, 5) << \"\\n\";  // 19\n    cout << \"Sum [0,4]: \" << rangeSum(pref, 0, 4) << \"\\n\";  // 14\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def build_prefix_sum(arr):\n    n = len(arr)\n    if n == 0:\n        return []\n    prefix = [0] * n\n    prefix[0] = arr[0]\n    for i in range(1, n):\n        prefix[i] = prefix[i - 1] + arr[i]\n    return prefix\n\ndef range_sum(prefix, l, r):\n    if l == 0:\n        return prefix[r]\n    return prefix[r] - prefix[l - 1]\n\narr = [3, 1, 4, 1, 5, 9, 2, 6]\npref = build_prefix_sum(arr)\nprint(f\"Sum [2,5]: {range_sum(pref, 2, 5)}\")   # 19\nprint(f\"Sum [0,4]: {range_sum(pref, 0, 4)}\")   # 14\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-5",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class PrefixSum {\n    static int[] buildPrefixSum(int[] arr) {\n        int n = arr.length;\n        if (n == 0) return new int[0];\n        int[] prefix = new int[n];\n        prefix[0] = arr[0];\n        for (int i = 1; i < n; i++)\n            prefix[i] = prefix[i - 1] + arr[i];\n        return prefix;\n    }\n\n    static int rangeSum(int[] prefix, int l, int r) {\n        if (l == 0) return prefix[r];\n        return prefix[r] - prefix[l - 1];\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};\n        int[] pref = buildPrefixSum(arr);\n        System.out.println(\"Sum [2,5]: \" + rangeSum(pref, 2, 5)); // 19\n        System.out.println(\"Sum [0,4]: \" + rangeSum(pref, 0, 4)); // 14\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity--why-3",
      children: "Complexity — Why?"
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
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build prefix sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass through array to compute; store n values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range sum query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single subtraction prefix[r] - prefix[l-1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive range sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop from l to r each time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without prefix sums, each range query costs O(n). For q queries, total = O(n×q). With prefix sums: O(n + q)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "O(1) range sum queries after O(n) build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra O(n) space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple — one pass, one formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not handle updates well (update at i = O(n) rebuild)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extends to 2D (prefix sum matrix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix sum values can overflow for large arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array"
        }), ": return empty prefix array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), ": prefix[0] = arr[0]; rangeSum(0, 0) = prefix[0]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "l = 0"
        }), ": return prefix[r] directly (prefix[l-1] is undefined)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative numbers"
        }), ": prefix sum works fine; can be smaller than previous"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large sums"
        }), ": use long (64-bit) to avoid integer overflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2d-prefix-sum",
      children: "2D Prefix Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a matrix, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefix[i][j] = sum of all elements in submatrix (0,0) to (i,j)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "prefix[i][j] = arr[i][j]\n             + prefix[i-1][j]   // sum above\n             + prefix[i][j-1]   // sum left\n             - prefix[i-1][j-1] // overlap subtracted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-two-pointer-technique",
      children: "7. Two-Pointer Technique"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two friends on opposite ends of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted bookshelf"
      }), " want to find two books whose combined thickness equals exactly 30 mm. The left friend starts at the thinnest book, the right at the thickest. If the sum is too small, the left friend moves to a thicker book (right). If too large, the right friend moves to a thinner book (left). They converge toward the target in one pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted"
      }), " array and a target sum, find a pair (i, j) such that arr[i] + arr[j] = target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-1",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize left = 0, right = n - 1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While left < right:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "sum = arr[left] + arr[right]"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If sum == target: return (left, right)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If sum < target: left++ (need larger sum)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If sum > target: right-- (need smaller sum)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If loop ends: no pair found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM twoSumSorted(arr, n, target)\n    left = 0\n    right = n - 1\n    WHILE left < right:\n        sum = arr[left] + arr[right]\n        IF sum == target:\n            RETURN (left, right)\n        ELSE IF sum < target:\n            left = left + 1\n        ELSE:\n            right = right - 1\n    RETURN (-1, -1)     // no pair found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find pair summing to 12 in arr = [1, 3, 5, 7, 9, 11]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[left]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[right]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Found!"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quick success. Let's try target = 10:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[left]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[right]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum"
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
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum > 10 → right--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Found!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now try target = 16 with arr = [1, 2, 3, 4, 5, 6, 7]:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[left]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[right]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum"
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
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum < 16 → left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left ≥ right → stop, no pair"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-5",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\npair<int, int> twoSumSorted(const vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left < right) {\n        int sum = arr[left] + arr[right];\n        if (sum == target) return {left, right};\n        if (sum < target) ++left;\n        else --right;\n    }\n    return {-1, -1};\n}\n\nint main() {\n    vector<int> arr = {1, 3, 5, 7, 9, 11};\n    auto [i, j] = twoSumSorted(arr, 12);\n    cout << \"[\" << i << \",\" << j << \"] -> \"\n         << arr[i] << \" + \" << arr[j] << \" = 12\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum_sorted(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        curr_sum = arr[left] + arr[right]\n        if curr_sum == target:\n            return (left, right)\n        elif curr_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return (-1, -1)\n\narr = [1, 3, 5, 7, 9, 11]\ni, j = two_sum_sorted(arr, 12)\nprint(f\"[{i},{j}] -> {arr[i]} + {arr[j]} = 12\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-6",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class TwoPointer {\n    static int[] twoSumSorted(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) return new int[]{left, right};\n            if (sum < target) left++;\n            else right--;\n        }\n        return new int[]{-1, -1};\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 5, 7, 9, 11};\n        int[] res = twoSumSorted(arr, 12);\n        System.out.println(\"[\" + res[0] + \",\" + res[1] + \"] -> \"\n            + arr[res[0]] + \" + \" + arr[res[1]] + \" = 12\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity--why-4",
      children: "Complexity — Why?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Each step moves left or right by 1; at most n steps total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two integer variables (left, right)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) and not O(n²)?"
      }), " Unlike the naive nested-loop approach (for each i, try all j > i), the two-pointer technique exploits sorting: the monotonic property means we never revisit a pair. Each step excludes either an entire row or column from the search space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
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
            children: "Reduces O(n²) nested loops to O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorted array (otherwise sort first = O(n log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only for pairwise or triplet problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant and simple to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle duplicates without modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extends to 3-sum, container-with-most-water"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable for arbitrary sets (use hash map)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array"
        }), ": loop not entered, return (-1, -1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), ": left = right = 0, loop not entered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target smaller than any pair"
        }), ": left moves toward right until left ≥ right"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target larger than any pair"
        }), ": right moves toward left until left ≥ right"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exactly one pair"
        }), ": algorithm finds it; early exit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple pairs"
        }), ": returns the first (leftmost) pair found"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate values"
        }), ": works, but may return adjacent duplicates if they form the sum"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "array-vs-linked-list--detailed-comparison",
      children: "Array vs Linked List — Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory layout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scattered nodes (each with pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Random access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — compute address directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — traverse from head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert at front"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — shift all elements right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — update head pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert at middle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — shift half the array avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — update 2 pointers (if node known)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert at end"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) static / O(1) amortized dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with tail ptr, O(n) without"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete at front"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — shift all left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — update head, free node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete at middle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — update 2 pointers (if node known)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) unsorted, O(log n) sorted (binary search)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of element only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of element + pointer(s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent — sequential cache lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor — nodes scattered across heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU cache misses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (prefetch-friendly)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent (pointer chasing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (static) or doubling (dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows/shrinks one node at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (one contiguous block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (many small allocations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse traversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (index backward)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs doubly linked or O(n) reversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access, cache-sensitive, known/stable size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent front insert/delete, unknown total size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-kadanes-algorithm-maximum-subarray-sum",
      children: "Problem 1: Kadane's Algorithm (Maximum Subarray Sum)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the contiguous subarray with the largest sum in O(n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A stock trader wants the best consecutive days to buy and sell — the period with the maximum cumulative profit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic:"
      }), " Keep a running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "current_sum"
      }), ". If it drops below 0, reset to 0 (starting fresh is better than carrying negative). Track the maximum ever seen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize max_sum = arr[0], curr_sum = 0"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each element x in arr:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "curr_sum = curr_sum + x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If curr_sum > max_sum: max_sum = curr_sum"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If curr_sum < 0: curr_sum = 0"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return max_sum"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "curr_sum (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "curr_sum + x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "curr_sum (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "max_sum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "curr_sum < 0?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset to 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset to 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: max_sum = 6 (subarray [4, -1, 2, 1])"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int kadane(const vector<int>& arr) {\n    int max_sum = arr[0], curr = 0;\n    for (int x : arr) {\n        curr += x;\n        if (curr > max_sum) max_sum = curr;\n        if (curr < 0) curr = 0;\n    }\n    return max_sum;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-trapping-rain-water",
      children: "Problem 2: Trapping Rain Water"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n non-negative integers representing elevation heights, compute how much water can be trapped after rain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " After a rainstorm, water collects in valleys between mountain peaks. The water level in each column is determined by the shorter of the tallest wall to its left and right."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic (Two-Pointer):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "left = 0, right = n-1, left_max = right_max = 0, water = 0"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While left ≤ right:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If height[left] ≤ height[right]:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If height[left] ≥ left_max: update left_max"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Else: water += left_max - height[left]"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "left++"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Else:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If height[right] ≥ right_max: update right_max"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Else: water += right_max - height[right]"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "right--"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " height = [0,1,0,2,1,0,1,3,2,1,2,1]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h[l]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h[r]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "l_max"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "r_max"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Water added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left ≥ right → stop"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total water trapped = 6 ✓"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-container-with-most-water",
      children: "Problem 3: Container With Most Water"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n vertical lines where the i-th line has height height[i], find two lines that together with the x-axis form a container holding the most water."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You have wooden planks of different heights. Pick two to form a water container — capacity is limited by the shorter plank, and wider spacing increases capacity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic (Two-Pointer):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "left = 0, right = n-1, max_area = 0"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While left < right:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "area = min(height[left], height[right]) × (right - left)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "max_area = max(max_area, area)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If height[left] < height[right]: left++ (move the shorter wall)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Else: right--"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return max_area"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " height = [1,8,6,2,5,4,8,3,7]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h[l]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h[r]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "min(h)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "max_area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left++"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left ≥ right → stop"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Max area = 49 (lines at indices 1 and 8, height 8 and 7, width 7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-rotate-array-leetcode-189",
      children: "Problem 4: Rotate Array (LeetCode 189)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Rotate array right by k steps in O(1) extra space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses the same reversal method from Section 4:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rotate(arr, k):\n    n = len(arr)\n    k %= n\n    arr.reverse()\n    arr[:k] = reversed(arr[:k])\n    arr[k:] = reversed(arr[k:])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-two-sum-unsorted--leetcode-1",
      children: "Problem 5: Two Sum (Unsorted — LeetCode 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an unsorted array, find two indices such that their values sum to target."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic (Hash Map):"
      }), " Store each element's value → index. For each element, check if (target - element) exists in the map."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum(arr, target):\n    seen = {}\n    for i, val in enumerate(arr):\n        complement = target - val\n        if complement in seen:\n            return [seen[complement], i]\n        seen[val] = i\n    return [-1, -1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " arr = [2, 7, 11, 15], target = 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "complement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "In seen?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "seen before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "seen after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2: 0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2: 0, 7: 1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return [0, 1]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(n) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-image-processing-pixel-buffers",
      children: "1. Image Processing (Pixel Buffers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital images are stored as 2D arrays (matrices) of pixels. Each pixel is an RGB triple stored in a contiguous buffer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Grayscale image as 2D array — row-major stride\nstruct Image {\n    int width, height;\n    std::vector<unsigned char> pixels; // size = width × height\n\n    unsigned char& at(int row, int col) {\n        return pixels[row * width + col];\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why arrays?"
      }), " Fixed dimensions, dense data, O(1) pixel access, cache-friendly convolution kernels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-dynamic-array-implementations-in-language-runtimes",
      children: "2. Dynamic Array Implementations in Language Runtimes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Growth Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Implementation Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (MSVC), 1.5 (GCC/Clang)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees contiguous storage since C++11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ArrayList<E>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5 (rounds up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backed by Object[] array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.125 (approx.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of PyObject* pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C#"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "List<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic, typed array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-matrix-storage-and-linear-algebra",
      children: "3. Matrix Storage and Linear Algebra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dense and sparse matrices power everything from 3D graphics to machine learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Dense matrix as 2D array\nmat = [[1, 2, 3],\n       [4, 5, 6],\n       [7, 8, 9]]\n\n# Sparse matrix CSR format in Python\nclass CSRSparseMatrix:\n    def __init__(self):\n        self.values = []      # non-zero values\n        self.col_indices = [] # column of each value\n        self.row_ptr = [0]    # start index of each row\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-cpu-cache-line-optimization",
      children: "4. CPU Cache Line Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern CPUs load memory in 64-byte cache lines. Consecutive array access causes hardware prefetching to predict and load future data before it is requested — giving near-L1-cache speeds even for main-memory arrays."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache line (64 bytes) — holds 16 ints:\n| arr[0] | arr[1] | ... | arr[15] |  ← loaded in ~10ns\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Row-major traversal of a 2D array accesses adjacent memory addresses → prefetcher hits. Column-major traversal jumps by stride = row count → cache misses on every access → 10-100× slower."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-buffer-and-stream-io",
      children: "5. Buffer and Stream I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network and file I/O reads data into fixed-size byte arrays (buffers):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BUFFER_SIZE 4096\nchar buffer[BUFFER_SIZE];\nssize_t bytes = read(fd, buffer, BUFFER_SIZE);\n// Process bytes from buffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-hash-table-bucket-arrays",
      children: "6. Hash Table Bucket Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash tables use an array as the primary bucket structure — the hash function maps keys to array indices in O(1):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bucket array: [0: list, 1: list, 2: list, ..., M-1: list]\n                         ↓\n           Each bucket is a linked list (chaining)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector"
          }), " over raw arrays"]
        }), ": C++ vectors provide dynamic resizing, bounds checking in debug mode, and STL algorithm compatibility. Raw arrays are error-prone and inflexible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Row-major vs column-major traversal order"
        }), " can make a 10× performance difference on large 2D arrays due to CPU cache line behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache-friendly traversal"
        }), ": Iterate 2D arrays in row-major order (outer loop = row, inner loop = column). Column-major traversal causes cache misses that can slow access by 10-100×."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-pointer is your secret weapon"
        }), ": For sorted arrays, two pointers from opposite ends can solve pair-sum, triplet, and container-with-most-water problems in O(n) instead of O(n²)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix sums turn range queries into O(1)"
        }), ": Precompute prefix sums once (O(n)), then any subarray sum is prefix[r] - prefix[l-1]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kadane's algorithm"
        }), " is the classic O(n) solution for maximum subarray — memorize it for interviews."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The reversal method"
        }), " for rotation is the only O(1)-space approach — three reverses and you're done."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static arrays provide O(1) random access with O(n) insertion/deletion in the middle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic arrays amortize resizing cost to O(1) per push_back."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-pointer technique reduces nested loops to linear time on sorted arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Row-major order stores rows contiguously; column-major stores columns contiguously."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix sums enable constant-time subarray sum queries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window solves contiguous subarray problems in O(n)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kadane's algorithm finds max subarray sum in one pass with O(1) memory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert in middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (if node known)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (capacity > size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer per node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-common-array-patterns",
      children: "Quick Reference: Common Array Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair sum, palindrome check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max subarray, substring problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) build, O(1) query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range sum queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kadane's algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum subarray sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dutch flag partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort 3 distinct values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate array left/right"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D static array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed dimensions, dense data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game entity list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities added/removed at end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undo history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array as stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO operations on recent actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size, O(1) access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D array of booleans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graphs, O(1) edge queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array (PyObject*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, amortized O(1) append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java ArrayList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array (Object[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, growth factor 1.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static byte array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size, sequential read/write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static array of lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hash index, per-bucket chaining"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--pitfalls-gfg-style",
      children: "Common Mistakes & Pitfalls (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing static and dynamic array capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static arrays cannot grow; dynamic arrays resize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ArrayList"
            }), " when size is unknown"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one in prefix sum queries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sum(l, r) = prefix[r] - prefix[l-1]"
            }), " fails for l=0"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Handle l=0 separately: return ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prefix[r]"
            }), " directly"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that two-pointer requires sorted array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsorted arrays break the monotonic property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort first (O(n log n)) or use hash map for unsorted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying array while iterating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertions/deletions during traversal shift indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate backward or use a temporary list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assuming dynamic array ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            }), " equals ", (0,jsx_runtime.jsx)(_components.code, {
              children: "capacity()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity is allocated space; size is element count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            }), " for logical length, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "capacity()"
            }), " for allocated space"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gfg-interview-corner-typescript-array-patterns",
      children: "GFG Interview Corner: TypeScript Array Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-dynamic-array-implementation",
      children: "TypeScript Dynamic Array Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DynamicArray<T> {\n    private data: (T | undefined)[];\n    private _size: number = 0;\n    private _capacity: number;\n\n    constructor(capacity: number = 4) {\n        this._capacity = capacity;\n        this.data = new Array(capacity);\n    }\n\n    get size(): number { return this._size; }\n    get capacity(): number { return this._capacity; }\n\n    push(val: T): void {\n        if (this._size >= this._capacity) {\n            this._capacity *= 2;\n            const newData = new Array(this._capacity);\n            for (let i = 0; i < this._size; i++) newData[i] = this.data[i];\n            this.data = newData;\n        }\n        this.data[this._size++] = val;\n    }\n\n    pop(): T | undefined {\n        if (this._size === 0) return undefined;\n        return this.data[--this._size];\n    }\n\n    get(index: number): T | undefined {\n        if (index < 0 || index >= this._size) return undefined;\n        return this.data[index];\n    }\n\n    insert(index: number, val: T): void {\n        if (index < 0 || index > this._size) return;\n        if (this._size >= this._capacity) this.push(val); // triggers resize\n        for (let i = this._size; i > index; i--) this.data[i] = this.data[i - 1];\n        this.data[index] = val;\n        this._size++;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-prefix-sum--range-queries",
      children: "TypeScript Prefix Sum & Range Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PrefixSum {\n    private prefix: number[];\n\n    constructor(private arr: number[]) {\n        this.prefix = new Array(arr.length);\n        if (arr.length > 0) {\n            this.prefix[0] = arr[0];\n            for (let i = 1; i < arr.length; i++) {\n                this.prefix[i] = this.prefix[i - 1] + arr[i];\n            }\n        }\n    }\n\n    rangeSum(l: number, r: number): number | null {\n        if (l < 0 || r >= this.arr.length || l > r) return null;\n        return l === 0 ? this.prefix[r] : this.prefix[r] - this.prefix[l - 1];\n    }\n\n    // 2D prefix sum for matrices\n    static build2D(matrix: number[][]): number[][] {\n        const rows = matrix.length, cols = matrix[0].length;\n        const ps: number[][] = Array.from({ length: rows + 1 },\n            () => new Array(cols + 1).fill(0));\n        for (let i = 1; i <= rows; i++)\n            for (let j = 1; j <= cols; j++)\n                ps[i][j] = matrix[i - 1][j - 1] + ps[i - 1][j]\n                    + ps[i][j - 1] - ps[i - 1][j - 1];\n        return ps; // query: ps[r2+1][c2+1] - ps[r1][c2+1] - ps[r2+1][c1] + ps[r1][c1]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time complexity of inserting at the beginning of a dynamic array?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The prefix sum technique is most useful for:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Sorting arrays faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Answering multiple range sum queries efficiently ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Finding duplicates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Rotating arrays"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the space complexity of a 2D prefix sum matrix for an m×n input?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(m + n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(m × n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(max(m, n))"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is NOT a valid growth factor for dynamic arrays?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 1.5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 1 ✓ (no growth)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sliding window technique is most appropriate for:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Unsorted array pair sum"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Contiguous subarray problems with monotonic property ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Finding median"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Sorting"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the minimum number of swaps required to reverse an array of n elements?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) n/2 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) log n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) n²"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-b, 11-c, 12-c, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the equilibrium index"
          }), ": An index where the sum of elements to its left equals the sum to its right. Solve in O(n) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum subarray sum with at least K elements"
          }), ": Extend Kadane's algorithm to enforce a minimum subarray length of k."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sort an array of 0s, 1s, and 2s"
          }), " (Dutch National Flag): Implement the three-pointer technique in O(n) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Given an array, find the maximum j - i such that arr[j] > arr[i]"
          }), " where j > i. Solve in O(n)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest subarray with sum divisible by K"
          }), ": Use prefix sum with modulo arithmetic. O(n) solution expected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Given two sorted arrays, find their median in O(log(m+n))"
          }), " using binary search on the smaller array."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum product subarray"
          }), ": Similar to Kadane's but tracking both max and min (due to negative numbers)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the smallest subarray whose sum is ≥ target"
          }), " (minimum size subarray sum). Use sliding window."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Merge two sorted arrays without extra space"
          }), ": Use insertion-sort style merging from the end."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find all pairs with a given sum in an unsorted array"
          }), ": Use hash map for O(n) average time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subarray with given XOR"
          }), ": Use prefix XOR with hash map for O(n) solution."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-subarray-problems-advanced-techniques",
      children: "8. Subarray Problems (Advanced Techniques)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conveyor belt"
      }), " in a factory moves products past inspection stations. You want to find the longest section of the belt where every product passes quality checks. This is a subarray problem — finding a contiguous segment satisfying a property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subarray-problem-taxonomy",
      children: "Subarray Problem Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    SP[\"Subarray Problems\"] --> MaxSum[\"Maximum Sum Subarray<br/>Kadane's Algorithm<br/>O(n) time, O(1) space\"]\n    SP --> MaxLen[\"Maximum Length Subarray<br/>with Given Sum<br/>Hash Map + Prefix Sum\"]\n    SP --> MinLen[\"Minimum Length Subarray<br/>with Sum ≥ Target<br/>Sliding Window O(n)\"]\n    SP --> SubDiv[\"Subarray Sum Divisible<br/>by K<br/>Prefix Sum + Mod Hash\"]\n    SP --> SubEq[\"Subarrays with Equal<br/>0s and 1s<br/>Treat 0 as -1\"]\n    SP --> MaxProd[\"Maximum Product<br/>Subarray<br/>Track Min & Max\"]\n    \n    MaxSum --> KeyInsight1[\"Key: Discard negative<br/>prefix, restart\"]\n    MaxLen --> KeyInsight2[\"Key: prefix[j] - prefix[i] = sum\"]\n    MinLen --> KeyInsight3[\"Key: Expand right,<br/>shrink left\"]\n    SubDiv --> KeyInsight4[\"Key: Same modulo =<br/>divisible subarray\"]\n    SubEq --> KeyInsight5[\"Key: Same prefix sum =<br/>equal 0s and 1s\"]\n    MaxProd --> KeyInsight6[\"Key: Negative × negative = positive\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maximum-product-subarray-leetcode-152",
      children: "Maximum Product Subarray (LeetCode 152)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the contiguous subarray with the largest product."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic:"
      }), " Unlike Kadane's (which only tracks max), the product version must track ", (0,jsx_runtime.jsx)(_components.em, {
        children: "both"
      }), " maximum and minimum because a negative number can flip the smallest negative into the largest positive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxProd = arr[0]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "currMax = arr[0]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "currMin = arr[0]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each element ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " from index 1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " is negative, swap ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currMax"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currMin"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "currMax = max(x, currMax * x)"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "currMin = min(x, currMin * x)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maxProd = max(maxProd, currMax)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " arr = [2, 3, -2, 4]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "currMax (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "currMin (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swapped?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "currMax (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "currMin (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "maxProd"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(3, 6)=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(3, 6)=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(-2, -12)=-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(-2, -4)=-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(4, -8)=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(4, -16)=-16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(6, 4)=6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: 6 (subarray [2, 3])"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript--maximum-product-subarray",
      children: "TypeScript — Maximum Product Subarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxProduct(nums: number[]): number {\n    let maxProd = nums[0];\n    let currMax = nums[0];\n    let currMin = nums[0];\n\n    for (let i = 1; i < nums.length; i++) {\n        const x = nums[i];\n\n        // Negative flips min and max\n        if (x < 0) {\n            [currMax, currMin] = [currMin, currMax];\n        }\n\n        currMax = Math.max(x, currMax * x);\n        currMin = Math.min(x, currMin * x);\n        maxProd = Math.max(maxProd, currMax);\n    }\n\n    return maxProd;\n}\n\n// Test cases\nconsole.log(maxProduct([2, 3, -2, 4]));    // 6\nconsole.log(maxProduct([-2, 0, -1]));      // 0\nconsole.log(maxProduct([-2, 3, -4]));      // 24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-array-partitioning-and-quick-select",
      children: "9. Array Partitioning and Quick Select"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You need to find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "median"
      }), " score from 1 million exam results. Sorting all 1 million takes O(n log n), but Quick Select uses partitioning to find the k-th smallest element in O(n) average time — like repeatedly dividing a phone book in half until you reach the right page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-select-algorithm",
      children: "Quick Select Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Find the k-th smallest element in an unsorted array (where k is 0-indexed)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick a pivot element (typically the last element)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition the array so elements < pivot go left, elements > pivot go right."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If pivot's final position ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " equals ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), ", return arr[p]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k < p"
        }), ", recurse on the left partition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k > p"
        }), ", recurse on the right partition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the 3rd smallest (k=2) in arr = [7, 2, 1, 6, 8, 5, 3, 4]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subarray"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pivot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partitioned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pivotIndex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,2,1,6,8,5,3,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,1,3,4,8,5,7,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k=2 < 3 → go left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,1,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,1,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k=2 < 2 → go left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k=2 > 1 → go right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: 3rd smallest element = 3 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript--quick-select",
      children: "TypeScript — Quick Select"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function quickSelect(arr: number[], left: number, right: number, k: number): number {\n    if (left === right) return arr[left];\n\n    // Partition around last element\n    const pivot = arr[right];\n    let i = left;\n\n    for (let j = left; j < right; j++) {\n        if (arr[j] <= pivot) {\n            [arr[i], arr[j]] = [arr[j], arr[i]];\n            i++;\n        }\n    }\n    [arr[i], arr[right]] = [arr[right], arr[i]];\n    const pivotIndex = i;\n\n    if (k === pivotIndex) return arr[k];\n    if (k < pivotIndex) return quickSelect(arr, left, pivotIndex - 1, k);\n    return quickSelect(arr, pivotIndex + 1, right, k);\n}\n\nfunction findKthSmallest(arr: number[], k: number): number {\n    const copy = [...arr]; // avoid mutating original\n    return quickSelect(copy, 0, copy.length - 1, k - 1); // k is 1-indexed\n}\n\nconsole.log(findKthSmallest([7, 2, 1, 6, 8, 5, 3, 4], 3)); // 3\nconsole.log(findKthSmallest([7, 2, 1, 6], 2));              // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
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
            children: "Average case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each partition halves expected search space; recursion depth log n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad pivot choice (already sorted array, pivot is always extreme)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized (median-of-3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose pivot as median of first, middle, last elements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) average?"
      }), " The expected partition size decreases geometrically: n + n/2 + n/4 + ... = 2n = O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern-1",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "27",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum product subarray must track both max and min because:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Min values are always negative"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A negative number can flip min into new max ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The answer is always positive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Kadane's algorithm doesn't work for products"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Quick Select average time complexity is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(n log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "For an array of 1 million elements, finding the median using Quick Select vs sorting:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Quick Select is faster by ~log n factor ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Sorting is always faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both are O(n log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Quick Select is O(n²) worst-case"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the key property that makes Maximum Product Subarray different from Maximum Sum Subarray?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Multiplication is commutative"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Negative × negative yields positive ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Products grow faster than sums"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Division is not allowed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 27-b, 28-b, 29-a, 30-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern-1",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "27",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum sum subarray with at most K elements"
          }), ": Given an array of integers, find the subarray with the maximum sum whose length does not exceed K. Solve in O(n) using prefix sums with a deque."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subarray sum equals K"
          }), ": Count the number of subarrays whose sum equals a given target K. Use a hash map of prefix sums. O(n) time, O(n) space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find all subarrays with zero sum"
          }), ": Given an array, print all (i, j) pairs where sum of subarray arr[i..j] = 0. Use prefix sum + hash map of indices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "K-th largest element in an array"
          }), ": Modify Quick Select to find the k-th largest element (instead of k-th smallest). What change do you need?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sort a nearly sorted array"
          }), ": Given an array where each element is at most K positions away from its sorted position, sort it in O(n log K) time using a min-heap."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Median of two sorted arrays"
          }), ": Given two sorted arrays of sizes m and n, find their median in O(log(min(m, n))) time using binary search on the smaller array."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest increasing subsequence (LIS)"
          }), ": Find the length of the longest increasing subsequence (not necessarily contiguous) in O(n log n) using patience sorting."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-master-table-array-operations",
      children: "Complexity Master Table: Array Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array ADT"
        }), ": Abstract data type providing O(1) random access, O(n) search/insert/delete."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static vs Dynamic"
        }), ": Static arrays have fixed size; dynamic arrays grow by a factor (typically 2) when full, giving amortized O(1) push_back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operations"
        }), ": Insert/delete at end cost O(1); in the middle cost O(n) due to shifting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rotation"
        }), ": Reversal method — three reverses achieve O(n) time, O(1) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reversal"
        }), ": Two-pointer swap from ends — O(n) time, O(1) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix Sum"
        }), ": Build once (O(n)), query any range sum in O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-Pointer"
        }), ": Reduce pair-sum from O(n²) to O(n) on sorted arrays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview Corner"
        }), ": Kadane's algorithm (max subarray), trapping rain water, container with most water, rotate array, two-sum — all O(n) or O(n log n) solutions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is array access O(1)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the amortized cost of push_back on a dynamic array? Explain the math."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does row-major order affect cache performance compared to column-major traversal?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the reversal method for array rotation. Why does three reverses work?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the key invariant of the two-pointer technique? Why does it guarantee correctness?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge sorted arrays"
        }), ": Implement a function to merge two sorted arrays into one sorted array in O(n + m) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Majority element"
        }), ": Write a program to find the majority element (appears more than n/2 times) in O(n) time and O(1) space (Boyer-Moore voting algorithm)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Matrix multiplication"
        }), ": Implement a function for two m×n and n×p matrices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove duplicates from sorted array"
        }), ": Write an O(n) in-place algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move zeros to end"
        }), ": Move all zeros in an array to the end while preserving relative order of non-zero elements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum Subarray"
        }), " (Kadane's): Given an integer array, find the contiguous subarray with the largest sum. Implement in O(n) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trapping Rain Water"
        }), ": Given elevation heights, compute total trapped water. Solve in O(n) time with O(1) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First Missing Positive"
        }), ": Find the smallest positive integer not present in the array. O(n) time, O(1) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Permutation"
        }), ": Rearrange numbers into the lexicographically next greater permutation. O(n) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product of Array Except Self"
        }), ": Compute array where output[i] = product of all elements except arr[i]. O(n) time, no division."]
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