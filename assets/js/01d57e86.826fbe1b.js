"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41765],{

/***/ 61326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_05_two_pointers_md_01d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-05-two-pointers-md-01d.json
const site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_05_two_pointers_md_01d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/05-two-pointers","title":"Two Pointers","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"id":"05-two-pointers","slug":"/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers","title":"Two Pointers","sidebar_label":"Two Pointers","sidebar_position":39},"sidebar":"coursesSidebar","previous":{"title":"Sliding Window","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/04-sliding-window"},"next":{"title":"Hash Maps and Sets","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers.md


const frontMatter = {
	id: '05-two-pointers',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers',
	title: 'Two Pointers',
	sidebar_label: 'Two Pointers',
	sidebar_position: 39
};
const contentTitle = 'Two Pointers';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "5.1 Opposite-Direction Pointers",
  "id": "51-opposite-direction-pointers",
  "level": 2
}, {
  "value": "Pair Sum in a Sorted Array",
  "id": "pair-sum-in-a-sorted-array",
  "level": 3
}, {
  "value": "Container With Most Water",
  "id": "container-with-most-water",
  "level": 3
}, {
  "value": "Comparison: Brute-Force vs. Two-Pointer",
  "id": "comparison-brute-force-vs-two-pointer",
  "level": 3
}, {
  "value": "5.2 Same-Direction Pointers",
  "id": "52-same-direction-pointers",
  "level": 2
}, {
  "value": "Remove Duplicates from Sorted Array",
  "id": "remove-duplicates-from-sorted-array",
  "level": 3
}, {
  "value": "Move Zeroes",
  "id": "move-zeroes",
  "level": 3
}, {
  "value": "Same-Direction Variants",
  "id": "same-direction-variants",
  "level": 3
}, {
  "value": "5.3 Fast-Slow Pointers",
  "id": "53-fast-slow-pointers",
  "level": 2
}, {
  "value": "Cycle Detection in a Linked List",
  "id": "cycle-detection-in-a-linked-list",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Find the Middle of a Linked List",
  "id": "find-the-middle-of-a-linked-list",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "Find the Start of the Cycle",
  "id": "find-the-start-of-the-cycle",
  "level": 3
}, {
  "value": "Fast-Slow Pointers Summary",
  "id": "fast-slow-pointers-summary",
  "level": 3
}, {
  "value": "5.4 N-Sum Problems",
  "id": "54-n-sum-problems",
  "level": 2
}, {
  "value": "Three Sum",
  "id": "three-sum",
  "level": 3
}, {
  "value": "Four Sum",
  "id": "four-sum",
  "level": 3
}, {
  "value": "N-Sum Complexity Table",
  "id": "n-sum-complexity-table",
  "level": 3
}, {
  "value": "5.5 Partitioning and In-Place Operations",
  "id": "55-partitioning-and-in-place-operations",
  "level": 2
}, {
  "value": "Dutch National Flag Problem",
  "id": "dutch-national-flag-problem",
  "level": 3
}, {
  "value": "Partition Array by Pivot",
  "id": "partition-array-by-pivot",
  "level": 3
}, {
  "value": "In-Place Modification Patterns",
  "id": "in-place-modification-patterns",
  "level": 3
}, {
  "value": "5.6 Advanced Combinations",
  "id": "56-advanced-combinations",
  "level": 2
}, {
  "value": "Two Pointers with Hash Map",
  "id": "two-pointers-with-hash-map",
  "level": 3
}, {
  "value": "Two Pointers with Binary Search",
  "id": "two-pointers-with-binary-search",
  "level": 3
}, {
  "value": "Trapping Rain Water",
  "id": "trapping-rain-water",
  "level": 3
}, {
  "value": "Two-Pointer Problem Selection Guide",
  "id": "two-pointer-problem-selection-guide",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Opposite-Direction: Pair Sum",
  "id": "opposite-direction-pair-sum",
  "level": 3
}, {
  "value": "Same-Direction: Remove Duplicates",
  "id": "same-direction-remove-duplicates",
  "level": 3
}, {
  "value": "Fast-Slow: Cycle Detection",
  "id": "fast-slow-cycle-detection",
  "level": 3
}, {
  "value": "Three Sum",
  "id": "three-sum-1",
  "level": 3
}, {
  "value": "TypeScript Type Safety Benefits",
  "id": "typescript-type-safety-benefits",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Exercise 2 (Medium): Squares of a Sorted Array",
  "id": "exercise-2-medium-squares-of-a-sorted-array",
  "level": 3
}, {
  "value": "Exercise 3 (Medium): Partition Labels",
  "id": "exercise-3-medium-partition-labels",
  "level": 3
}, {
  "value": "Exercise 4 (Hard): Longest Substring with At Most K Distinct Characters",
  "id": "exercise-4-hard-longest-substring-with-at-most-k-distinct-characters",
  "level": 3
}, {
  "value": "Exercise 5 (Hard): Minimum Window Substring",
  "id": "exercise-5-hard-minimum-window-substring",
  "level": 3
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    details: "details",
    div: "div",
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
        id: "two-pointers",
        children: "Two Pointers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand the two-pointer technique and its three main variants: opposite-direction, same-direction, and fast-slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve pair-sum and triplet problems on sorted arrays using opposite-end pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement in-place array modifications (remove duplicates, partition) using same-direction pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply fast-slow pointers for cycle detection in linked lists and finding the middle node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognize problems where the two-pointer pattern yields O(n) time and O(1) space solutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine two-pointer with binary search, hash maps, and sorting for complex optimization problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The two-pointer technique is a powerful pattern for solving array and linked list problems efficiently. By using two indices that move intelligently, you can solve many problems in O(n) time that would otherwise require O(n²)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time complexity analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding two pointers is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how two pointers works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite-Direction Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pointers starting at ends, moving inward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-Direction Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both pointers moving forward at different speeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast-Slow Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pointer moves twice as fast as the other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-Sum Problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extending two pointers to three-sum, four-sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning & In-Place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dutch national flag, quicksort partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pointers with hash maps, binary search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Two Pointers] --> B[Opposite Direction]\n    A --> C[Same Direction]\n    A --> D[Fast-Slow]\n    B --> E[Pair Sum Sorted]\n    B --> F[Container Water]\n    C --> G[Remove Duplicates]\n    C --> H[Move Zeroes]\n    D --> I[Cycle Detection]\n    D --> J[Middle of List]\n    B --> K[N-Sum Problems]\n    C --> L[Partitioning]\n    D --> M[Advanced Patterns]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-opposite-direction-pointers",
      children: "5.1 Opposite-Direction Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The opposite-direction (or converging) two-pointer technique places one pointer at the start and the other at the end of an array. The pointers move toward each other until they meet. This pattern works best on sorted arrays or.\nwhen the problem involves finding a pair of elements that satisfy a condition."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pair-sum-in-a-sorted-array",
      children: "Pair Sum in a Sorted Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a sorted array and a target sum, find whether any pair of elements adds up to the target. The brute-force O(n^2) approach checks every pair. With two opposite-direction pointers, we achieve O(n) time and O(1) space."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def pair_sum_sorted(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        current = arr[left] + arr[right]\n        if current == target:\n            return (arr[left], arr[right])\n        elif current < target:\n            left += 1\n        else:\n            right -= 1\n    return None\n\narr = [1, 2, 3, 4, 5, 6, 7]\nprint(pair_sum_sorted(arr, 10))  # (3, 7)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this works:"
      }), " Since the array is sorted, moving the left pointer forward increases the sum, and moving the right pointer backward decreases the sum. This guarantees we find the pair (or determine none exists) in a single pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-with-most-water",
      children: "Container With Most Water"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are given an array of heights. Each index represents a vertical line. Find two lines that together with the x-axis form a container that holds the most water."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def max_area(heights):\n    left, right = 0, len(heights) - 1\n    max_water = 0\n    while left < right:\n        width = right - left\n        height = min(heights[left], heights[right])\n        max_water = max(max_water, width * height)\n        if heights[left] < heights[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water\n\nheights = [1, 8, 6, 2, 5, 4, 8, 3, 7]\nprint(max_area(heights))  # 49\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The intuition: starting with the widest container, we move the pointer pointing to the shorter line inward. Since the width decreases, the only way to get more water is to find a taller line. This eliminates n-1 options per step, giving O(n) total."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-brute-force-vs-two-pointer",
      children: "Comparison: Brute-Force vs. Two-Pointer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lines of Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer (sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-same-direction-pointers",
      children: "5.2 Same-Direction Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same-direction pointers both start at the beginning of the array and move forward, usually at different speeds or with one pointer lagging behind the other. This pattern is ideal for in-place modifications where we need to track a \"write\" position separately from a \"read\" position."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove-duplicates-from-sorted-array",
      children: "Remove Duplicates from Sorted Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def remove_duplicates(arr):\n    if not arr:\n        return 0\n    write = 1\n    for read in range(1, len(arr)):\n        if arr[read] != arr[write - 1]:\n            arr[write] = arr[read]\n            write += 1\n    return write\n\narr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]\nk = remove_duplicates(arr)\nprint(arr[:k])  # [0, 1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "write"
      }), " pointer tracks where the next unique element should go. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read"
      }), " pointer scans the array. When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[read]"
      }), " differs from the last written element, we copy it to the write position. This keeps the first k elements as the unique set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "move-zeroes",
      children: "Move Zeroes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move all zeros in an array to the end while maintaining the relative order of non-zero elements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def move_zeroes(nums):\n    write = 0\n    for read in range(len(nums)):\n        if nums[read] != 0:\n            nums[write], nums[read] = nums[read], nums[write]\n            write += 1\n    return nums\n\nnums = [0, 1, 0, 3, 12]\nprint(move_zeroes(nums))  # [1, 3, 12, 0, 0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "same-direction-variants",
      children: "Same-Direction Variants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Roles"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-Read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write lags behind read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates, move zeroes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow-Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both advance, slow conditionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find kth from end, remove element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right expands, left contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-fast-slow-pointers",
      children: "5.3 Fast-Slow Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast-slow pointers (also called Floyd's algorithm or the tortoise and hare) use two pointers where one moves twice as fast as the other. This pattern is especially useful for linked list problems and cycle detection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cycle-detection-in-a-linked-list",
      children: "Cycle Detection in a Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False\n\n# Create a linked list with a cycle\na = ListNode(3)\nb = ListNode(2)\nc = ListNode(0)\nd = ListNode(-4)\na.next = b; b.next = c; c.next = d; d.next = b  # cycle back to b\n\nprint(has_cycle(a))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " If there is no cycle, the fast pointer reaches the end (null). If there is a cycle, the fast pointer eventually laps the slow pointer and.\nthey meet. The proof relies on modular arithmetic: after k steps, the distance between them modulo the cycle length shrinks by 1 each step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "find-the-middle-of-a-linked-list",
      children: "Find the Middle of a Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def middle_node(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow.val\n\n## 1 -> 2 -> 3 -> 4 -> 5\nhead = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))\nprint(middle_node(head))  # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When fast reaches the end, slow is at the middle. This works in one pass without knowing the list length."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "find-the-start-of-the-cycle",
      children: "Find the Start of the Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def detect_cycle_start(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            slow = head\n            while slow != fast:\n                slow = slow.next\n                fast = fast.next\n            return slow.val\n    return None\n\na = ListNode(3); b = ListNode(2); c = ListNode(0); d = ListNode(-4)\na.next = b; b.next = c; c.next = d; d.next = b\nprint(detect_cycle_start(a))  # 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the first meeting, reset one pointer to the head. Both now move at the same speed. They meet at the cycle start. This is a classic interview question that tests deep understanding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-slow-pointers-summary",
      children: "Fast-Slow Pointers Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fast Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slow Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meeting Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Has cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anywhere in cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middle node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle when fast ends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 steps, then 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset then cycle entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Happy number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next squared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next squared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 or cycle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-n-sum-problems",
      children: "5.4 N-Sum Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The two-pointer technique solves two-sum on sorted arrays elegantly. By extension, it solves three-sum, four-sum, and more complex N-sum problems by nesting the two-pointer pattern inside loops."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-sum",
      children: "Three Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find all unique triplets in an array that sum to zero."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def three_sum(nums):\n    nums.sort()\n    result = []\n    n = len(nums)\n    for i in range(n - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        left, right = i + 1, n - 1\n        while left < right:\n            total = nums[i] + nums[left] + nums[right]\n            if total == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                left += 1\n                right -= 1\n                while left < right and nums[left] == nums[left - 1]:\n                    left += 1\n                while left < right and nums[right] == nums[right + 1]:\n                    right -= 1\n            elif total < 0:\n                left += 1\n            else:\n                right -= 1\n    return result\n\nnums = [-1, 0, 1, 2, -1, -4]\nprint(three_sum(nums))  # [[-1, -1, 2], [-1, 0, 1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key details:"
      }), " The outer loop fixes one element. The inner two-pointer scans the rest. Sorting is O(n log n). The duplicates are skipped after each match. Total complexity: O(n^2)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "four-sum",
      children: "Four Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def four_sum(nums, target):\n    nums.sort()\n    result = []\n    n = len(nums)\n    for i in range(n - 3):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        for j in range(i + 1, n - 2):\n            if j > i + 1 and nums[j] == nums[j - 1]:\n                continue\n            left, right = j + 1, n - 1\n            while left < right:\n                total = nums[i] + nums[j] + nums[left] + nums[right]\n                if total == target:\n                    result.append([nums[i], nums[j], nums[left], nums[right]])\n                    left += 1\n                    right -= 1\n                    while left < right and nums[left] == nums[left - 1]:\n                        left += 1\n                    while left < right and nums[right] == nums[right + 1]:\n                        right -= 1\n                elif total < target:\n                    left += 1\n                else:\n                    right -= 1\n    return result\n\nnums = [1, 0, -1, 0, -2, 2]\nprint(four_sum(nums, 0))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "n-sum-complexity-table",
      children: "N-Sum Complexity Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Outer Loops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Two-Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum (sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Four Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^(k-1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-partitioning-and-in-place-operations",
      children: "5.5 Partitioning and In-Place Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same-direction pointer technique is powerful for partitioning arrays without extra memory. The key insight is maintaining multiple regions of the array using boundary pointers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dutch-national-flag-problem",
      children: "Dutch National Flag Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sort an array containing only 0s, 1s, and 2s in-place."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sort_colors(nums):\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1\n            mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1\n    return nums\n\nnums = [2, 0, 2, 1, 1, 0]\nprint(sort_colors(nums))  # [0, 0, 1, 1, 2, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Three pointers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "low"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mid"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "high"
      }), ") maintain three regions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[0, low-1]"
        }), ": all 0s"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[low, mid-1]"
        }), ": all 1s"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[high+1, end]"
        }), ": all 2s"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[mid, high]"
        }), ": yet to be processed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partition-array-by-pivot",
      children: "Partition Array by Pivot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def partition_by_pivot(arr, pivot):\n    write = 0\n    for read in range(len(arr)):\n        if arr[read] < pivot:\n            arr[write], arr[read] = arr[read], arr[write]\n            write += 1\n    for read in range(write, len(arr)):\n        if arr[read] == pivot:\n            arr[write], arr[read] = arr[read], arr[write]\n            write += 1\n    return arr\n\narr = [9, 4, 7, 2, 5, 6, 3]\nprint(partition_by_pivot(arr, 5))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-place-modification-patterns",
      children: "In-Place Modification Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write lag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "write, read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove element, dedup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low, mid, high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dutch flag, quicksort partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swap-to-end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "write, read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move zeroes, remove val"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-advanced-combinations",
      children: "5.6 Advanced Combinations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two pointers combine naturally with other techniques to solve more complex problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-pointers-with-hash-map",
      children: "Two Pointers with Hash Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find two numbers in an unsorted array that sum to a target. While the classic two-pointer needs a sorted array, combining it with a hash map works on unsorted data O(n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum_unsorted(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return None\n\nnums = [2, 7, 11, 15]\nprint(two_sum_unsorted(nums, 9))  # [0, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-pointers-with-binary-search",
      children: "Two Pointers with Binary Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For problems where conditional movement is ambiguous, binary search can determine how far to move a pointer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def find_closest_elements(arr, k, x):\n    left, right = 0, len(arr) - k\n    while left < right:\n        mid = (left + right) // 2\n        if x - arr[mid] > arr[mid + k] - x:\n            left = mid + 1\n        else:\n            right = mid\n    return arr[left:left + k]\n\narr = [1, 2, 3, 4, 5]\nprint(find_closest_elements(arr, 4, 3))  # [1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trapping-rain-water",
      children: "Trapping Rain Water"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An advanced two-pointer problem combining opposite-direction iteration with running maximums."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def trap_rain_water(height):\n    left, right = 0, len(height) - 1\n    left_max = right_max = 0\n    water = 0\n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max:\n                left_max = height[left]\n            else:\n                water += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max:\n                right_max = height[right]\n            else:\n                water += right_max - height[right]\n            right -= 1\n    return water\n\nheight = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]\nprint(trap_rain_water(height))  # 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At each step, we process the smaller of the two outer heights. We maintain the maximum seen from each side. Any height lower than its side's max contributes that difference to trapped water."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-pointer-problem-selection-guide",
      children: "Two-Pointer Problem Selection Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pair sum equals target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite-direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-direction (write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested opposite-direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any + sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast-slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trapping rain water"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite + running max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container most water"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite-direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move zeroes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-direction (write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middle of list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast-slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The two-pointer technique is equally powerful in TypeScript. The same patterns apply with static typing for safety."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opposite-direction-pair-sum",
      children: "Opposite-Direction: Pair Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function pairSumSorted(arr: number[], target: number): [number, number] | null {\n    let left = 0;\n    let right = arr.length - 1;\n    while (left < right) {\n        const sum = arr[left] + arr[right];\n        if (sum === target) return [arr[left], arr[right]];\n        else if (sum < target) left++;\n        else right--;\n    }\n    return null;\n}\n\nconsole.log(pairSumSorted([1, 2, 3, 4, 5, 6, 7], 10)); // [3, 7]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "same-direction-remove-duplicates",
      children: "Same-Direction: Remove Duplicates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function removeDuplicates(nums: number[]): number {\n    if (nums.length === 0) return 0;\n    let write = 1;\n    for (let read = 1; read < nums.length; read++) {\n        if (nums[read] !== nums[write - 1]) {\n            nums[write] = nums[read];\n            write++;\n        }\n    }\n    return write;\n}\n\nconst nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];\nconst k = removeDuplicates(nums);\nconsole.log(nums.slice(0, k)); // [0, 1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-slow-cycle-detection",
      children: "Fast-Slow: Cycle Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ListNode {\n    constructor(public val: number = 0, public next: ListNode | null = null) {}\n}\n\nfunction hasCycle(head: ListNode | null): boolean {\n    let slow = head;\n    let fast = head;\n    while (fast !== null && fast.next !== null) {\n        slow = slow!.next;\n        fast = fast.next.next;\n        if (slow === fast) return true;\n    }\n    return false;\n}\n\n// Create a linked list with a cycle\nconst a = new ListNode(3);\nconst b = new ListNode(2);\nconst c = new ListNode(0);\nconst d = new ListNode(-4);\na.next = b; b.next = c; c.next = d; d.next = b;\n\nconsole.log(hasCycle(a)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-sum-1",
      children: "Three Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function threeSum(nums: number[]): number[][] {\n    nums.sort((a, b) => a - b);\n    const result: number[][] = [];\n    const n = nums.length;\n    for (let i = 0; i < n - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        let left = i + 1;\n        let right = n - 1;\n        while (left < right) {\n            const sum = nums[i] + nums[left] + nums[right];\n            if (sum === 0) {\n                result.push([nums[i], nums[left], nums[right]]);\n                left++;\n                right--;\n                while (left < right && nums[left] === nums[left - 1]) left++;\n                while (left < right && nums[right] === nums[right + 1]) right--;\n            } else if (sum < 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    return result;\n}\n\nconsole.log(threeSum([-1, 0, 1, 2, -1, -4]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-type-safety-benefits",
      children: "TypeScript Type Safety Benefits"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duck typing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: ": number[]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[number, number] | null"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always allowed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "readonly"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In-place ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sort()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".sort()"
            }), " needs comparator"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-pointer techniques reduce time complexity from O(n^2) to O(n) for many array and linked list problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opposite-direction pointers start at the ends and converge inward, ideal for sorted arrays and pair-sum problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same-direction pointers start together with one lagging, perfect for in-place array modifications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast-slow pointers detect cycles and find middle nodes in linked lists in one pass."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The N-sum pattern fixes k-2 elements in nested loops and uses two pointers for the inner search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three-pointer partitioning (Dutch flag) sorts arrays with three distinct values in O(n) time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combining two pointers with hash maps or binary search extends their applicability to unsorted data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-pointer solutions typically use O(1) extra space, making them memory-efficient."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trapping rain water and container with most water are classic opposite-direction problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The technique transfers seamlessly to TypeScript with additional type safety guarantees."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problem"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start with opposite ends for sorted pair search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any sorted array + target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum II"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use write-read for in-place filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing or rearranging elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove Duplicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast-slow for one-pass linked list traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection, middle finding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked List Cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort first then two-pointer for N-sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triplets and quadruplets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three Sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three pointers for three-value partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting with limited distinct values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort Colors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with hash map for unsorted pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsorted arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with binary search for complex bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array with unknown split point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find Closest Elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running max on both sides for water trapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevation or histogram problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trapping Rain Water"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1: When should I use two pointers over a hash map?"
        })
      }), "\nUse two pointers when the array is sorted or can be sorted, and when O(1) space is required. Use a hash map when the array is unsorted and.\nO(n) space is acceptable. Two pointers are more memory-efficient but require ordering. Hash maps work on any input but use extra memory. If the problem asks for.\nindices (not values), a hash map is preferred on unsorted data since sorting changes indices.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2: How do I avoid duplicates in three-sum?"
        })
      }), "\nSort the array first. In the outer loop, skip `nums[i]` if it equals `nums[i-1]`. In the inner two-pointer loop, after finding a match,.\nskip `nums[left]` if it equals `nums[left-1]` and skip `nums[right]` if it equals `nums[right+1]`. This ensures each unique triplet appears exactly once. The sorting step makes duplicate detection straightforward through adjacency.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q3: Why does Floyd's cycle detection algorithm work?"
        })
      }), "\nImagine two runners on a circular track. The fast runner moves at 2x speed. If there is no cycle, the fast runner reaches the finish line (null). If there is a cycle,.\nthe fast runner eventually laps the slow runner. Formally, after k steps past cycle entry, the distance between them modulo the cycle length decreases by 1 each step,.\nguaranteeing they meet within cycle steps. The math: if cycle length is L, after m steps, positions differ by m mod L. When m is a multiple of L,.\nthey coincide.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q4: How do I find the cycle start in a linked list?"
        })
      }), "\nAfter the first meeting point in Floyd's algorithm, reset one pointer to the head. Move both at the same speed (one step each). They will meet at the cycle start. Proof: Let distance from head to cycle start be a,.\ncycle start to meeting point be b, cycle length be c. Slow traveled a+b. Fast traveled a+b+kc for some integer k = 2(a+b). So a+b = kc,.\nmeaning a = kc - b. Starting from head (distance 0) and from meeting point, they meet at distance a from head — the cycle start.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q5: What is the space complexity advantage of two pointers?"
        })
      }), "\nTwo pointers use O(1) extra space — just a few integer variables tracking array indices or node references. This is significantly better than hash-map-based approaches that may use O(n) space. For.\nlarge datasets (millions of elements), the constant memory footprint makes two-pointer solutions more scalable and cache-friendly. Some interviewers explicitly ask for.\nO(1) space, making two pointers the only viable approach.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q6: How do I handle the container with most water problem?"
        })
      }), "\nUse opposite-direction pointers. Start left = 0, right = n-1. At each step, compute area = min(height[left], height[right]) * (right - left). Track the maximum. Move the pointer pointing to the shorter line inward. Reason: the width always decreases,.\nso the only way to increase area is to find a taller line. Moving the taller pointer inward reduces both width and.\nheight (or keeps height same), so it can never improve the area. Moving the shorter pointer might find a taller line,.\npotentially increasing area despite narrower width.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q7: Can I use two pointers on an unsorted array?"
        })
      }), "\nYes, but only for certain patterns. Same-direction (write-read) works on any array since it only reads forward. Fast-slow works on linked lists regardless of ordering. Opposite-direction typically requires sorted data because the comparison logic depends on knowing whether the sum is too large or.\ntoo small. For unsorted arrays, sort first (O(n log n)) then apply two-pointer, or use a hash map instead. Trapping rain water uses opposite-direction on unsorted data,.\nbut compares heights, not values against a target.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q8: How is the three-pointer (Dutch flag) technique different?"
        })
      }), "\nStandard two pointers create two regions (processed left, processed right). Three pointers create three regions: low (0s), mid (1s), high (2s). The mid pointer scans unknown territory. When it sees a 0,.\nit swaps with the low region boundary and advances both low and mid. When it sees a 2, it swaps with the high region boundary and.\ndecrements high. When it sees a 1, it just advances. This classifies each element in O(n) with a single pass and.\nO(1) space.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q9: What is the sliding window relationship to two pointers?"
        })
      }), "\nSliding window uses two same-direction pointers (left and right) to define a subarray window. As the right pointer expands the window and.\nthe left pointer contracts it, both advance monotonically. The key difference: in two-pointer problems, each pointer moves in response to a condition comparing values at both positions. In sliding window,.\npointers respond to a constraint on the window's contents (e.g., sum, character set). Sliding window is a specialization of the same-direction pattern for.\ncontiguous subarray problems.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q10: How do I choose the right two-pointer variant?"
        })
      }), "\nAnswer these questions: (1) Is the data sorted? If yes, consider opposite-direction. (2) Is it an in-place modification? Use same-direction with a write pointer. (3) Is it a linked list? Use fast-slow. (4) Is it a subarray with a constraint?.\nUse sliding window (same-direction). (5) Do you need all pairs / triplets? Sort-first then nested opposite-direction. (6) Do you need O(1) space? Two pointers is often the only option. The decision tree maps cleanly to the problem's constraints and.\ndata structure.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q11: What edge cases commonly break two-pointer solutions?"
        })
      }), "\n(1) Empty arrays or single-element arrays — check early. (2) Arrays with all identical elements — duplicate skipping logic fails if not careful. (3) Target sum requiring the same element twice — ensure left != right. (4) Integer overflow for.\nlarge sums or areas — use 64-bit intermediates. (5) Off-by-one in pointer movement conditions — test with exactly one matching pair. (6) Three-sum where all triplets are valid — skipping duplicates is critical for.\nperformance. (7) Linked lists with odd/even length parity — the fast pointer may be null at different points.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q12: How do I solve trapping rain water optimally?"
        })
      }), "\nUse the dual-running-maximum approach with opposite-direction pointers. Maintain leftMax and rightMax as you move inward. At each step, process the smaller of height[left] and.\nheight[right]. If the current height is less than its side's max, it traps that difference in water. Otherwise, update the max. This works because the water trapped at any position is determined by the lower of the two maximums on either side. The two-pointer approach achieves O(n) time and.\nO(1) space, which is optimal since you must at least scan the entire array.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1:"
        }), " What is the time complexity of two-sum on a sorted array using two pointers?"]
      }), "\n  a) O(log n)   b) O(n)   c) O(n log n)   d) O(n^2)\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) O(n)"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  Each pointer moves at most n steps total, and they never move backward. The loop runs at most n iterations.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2:"
        }), " In Floyd's cycle detection, when does the slow pointer meet the fast pointer for the first time?"]
      }), "\n  a) At the cycle start   b) Somewhere inside the cycle   c) At the head   d) At the tail\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Somewhere inside the cycle"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  The pointers meet inside the cycle, not necessarily at the cycle start. A second phase (resetting one pointer to head) finds the exact cycle entry point.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q5:"
        }), " Which two-pointer variant is best for removing duplicates from a sorted array?"]
      }), "\n  a) Opposite-direction   b) Same-direction (write-read)   c) Fast-slow   d) Three-pointer\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Same-direction (write-read)"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  A write pointer lags behind a read pointer. When the read pointer finds a new unique value, it writes it at the write position and advances both.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q6:"
        }), " What is the time complexity of three-sum using the two-pointer approach?"]
      }), "\n  a) O(n)   b) O(n log n)   c) O(n^2)   d) O(n^3)\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) O(n^2)"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  Sorting takes O(n log n). The outer loop runs O(n) times, and the inner two-pointer runs O(n) per iteration, giving O(n^2) total.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q7:"
        }), " In the container with most water problem, why do we move the pointer at the shorter line?"]
      }), "\n  a) To keep the code simple   b) The taller line might form a bigger container elsewhere   c) To reduce width   d) Because the shorter line limits the height\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: d) Because the shorter line limits the height"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  The container height is determined by the shorter line. Moving it inward might find a taller line, potentially increasing area despite narrower width. Moving the taller line inward can never increase area.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not sorting the array first when required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moving only one pointer when both should move"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not handling the case where pointers cross"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to check for duplicates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not considering the two-pointer vs sliding window distinction### Exercise 1 (Easy): Two Sum Less Than K"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given an array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums"
      }), " of integers and an integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ", find the maximum sum of any two elements that is less than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ". Return -1 if no such pair exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum_less_than_k(nums, k):\n    nums.sort()\n    left, right = 0, len(nums) - 1\n    max_sum = -1\n    while left < right:\n        total = nums[left] + nums[right]\n        if total < k:\n            max_sum = max(max_sum, total)\n            left += 1\n        else:\n            right -= 1\n    return max_sum\n\nprint(two_sum_less_than_k([34, 23, 1, 24, 75, 33, 54, 8], 60))  # 58\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-medium-squares-of-a-sorted-array",
      children: "Exercise 2 (Medium): Squares of a Sorted Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given an integer array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums"
      }), " sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. Solve in O(n) time using two pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sorted_squares(nums):\n    n = len(nums)\n    result = [0] * n\n    left, right = 0, n - 1\n    for i in range(n - 1, -1, -1):\n        if abs(nums[left]) > abs(nums[right]):\n            result[i] = nums[left] ** 2\n            left += 1\n        else:\n            result[i] = nums[right] ** 2\n            right -= 1\n    return result\n\nprint(sorted_squares([-7, -3, 2, 3, 11]))  # [4, 9, 9, 49, 121]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-medium-partition-labels",
      children: "Exercise 3 (Medium): Partition Labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You are given a string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), ". Partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of lengths of each part."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def partition_labels(s):\n    last = {c: i for i, c in enumerate(s)}\n    result = []\n    start = end = 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            result.append(end - start + 1)\n            start = i + 1\n    return result\n\nprint(partition_labels(\"ababcbacadefegdehijhklij\"))  # [9, 7, 8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-hard-longest-substring-with-at-most-k-distinct-characters",
      children: "Exercise 4 (Hard): Longest Substring with At Most K Distinct Characters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " and an integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ", find the length of the longest substring that contains at most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " distinct characters. Use the sliding window (same-direction two-pointer) approach."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longest_substring_k_distinct(s, k):\n    if k == 0 or not s:\n        return 0\n    char_count = {}\n    left = max_len = 0\n    for right in range(len(s)):\n        char_count[s[right]] = char_count.get(s[right], 0) + 1\n        while len(char_count) > k:\n            char_count[s[left]] -= 1\n            if char_count[s[left]] == 0:\n                del char_count[s[left]]\n            left += 1\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\nprint(longest_substring_k_distinct(\"eceba\", 2))  # 3 (substring \"ece\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-hard-minimum-window-substring",
      children: "Exercise 5 (Hard): Minimum Window Substring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given two strings ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), ", return the minimum window substring of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " that contains all characters of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), ". Use two pointers with a sliding window and frequency counting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def min_window(s, t):\n    if not s or not t:\n        return \"\"\n    target = {}\n    for c in t:\n        target[c] = target.get(c, 0) + 1\n    required = len(target)\n    left = formed = 0\n    window_counts = {}\n    ans = float(\"inf\"), None, None\n    for right in range(len(s)):\n        c = s[right]\n        window_counts[c] = window_counts.get(c, 0) + 1\n        if c in target and window_counts[c] == target[c]:\n            formed += 1\n        while left <= right and formed == required:\n            c = s[left]\n            if right - left + 1 < ans[0]:\n                ans = (right - left + 1, left, right)\n            window_counts[c] -= 1\n            if c in target and window_counts[c] < target[c]:\n                formed -= 1\n            left += 1\n    return \"\" if ans[0] == float(\"inf\") else s[ans[1]:ans[2] + 1]\n\ns = \"ADOBECODEBANC\"\nt = \"ABC\"\nprint(min_window(s, t))  # \"BANC\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/04-sliding-window",
        children: "? Previous: Sliding Window"
      }), " | [Next: Hash Maps & Sets ?](06-hash-maps-and"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two pointers: opposite ends or same direction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opposite ends for sorted array problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same direction for partitioning problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast/slow for cycle detection and middle finding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often combined with sorting for O(n log n) solutions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Two Pointers in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Two Pointers."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Two Pointers. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Two Pointers from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Two Pointers with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Two Pointers."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Two Pointers behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Two Pointers run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Two Pointers that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Two Pointers explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Two Pointers\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Two Pointers to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Two Pointers (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Two Pointers and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Two Pointers-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Two Pointers interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Two Pointers in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Two Pointers builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Two Pointers before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Two Pointers is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Two Pointers in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Two Pointers chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Two Pointers is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Two Pointers is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Two Pointers is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Two Pointers issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Two Pointers in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Two Pointers that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Two Pointers is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Two Pointers in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Two Pointers and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Two Pointers on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Two Pointers to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Two Pointers from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Two Pointers when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Two Pointers twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Two Pointers snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Two Pointers listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Two Pointers to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Two Pointers by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Two Pointers to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Two Pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Two Pointers (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Two Pointers problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Two Pointers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Two Pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Two Pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Two Pointers fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Two Pointers is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Two Pointers is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Two Pointers, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Two Pointers asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two Pointers is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Two Pointers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two Pointers emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Two Pointers today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Two Pointers — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Two Pointers changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Two Pointers."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two Pointers appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Two Pointers helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Two Pointers concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Two Pointers skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Two Pointers to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two Pointers is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Two Pointers skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "03datastructuresalgorithms-05twopointers-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Two Pointers in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "03datastructuresalgorithms-05twopointers-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "03datastructuresalgorithms-05twopointers-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Two Pointers approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "03datastructuresalgorithms-05twopointers-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Two Pointers NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "03datastructuresalgorithms-05twopointers-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Two Pointers applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Two Pointers (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Two Pointers (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Two Pointers-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Two Pointers in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Two Pointers code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Two Pointers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Two Pointers code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Two Pointers example code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Two Pointers in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Two Pointers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Two Pointers problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Two Pointers is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Two Pointers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Two Pointers logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Two Pointers without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Two Pointers daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Two Pointers patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Two Pointers principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Two Pointers shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Two Pointers to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets",
        children: "Hash Maps and Sets"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two Pointers, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Two Pointers depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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