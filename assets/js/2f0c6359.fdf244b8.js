"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[971],{

/***/ 22329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_interview_preparation_02_coding_problem_solving_md_2f0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-interview-preparation-02-coding-problem-solving-md-2f0.json
const site_docs_courses_interview_preparation_02_coding_problem_solving_md_2f0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/interview-preparation/02-coding-problem-solving","title":"Chapter 2: Coding Problem Solving","description":"Learning Objectives","source":"@site/docs/courses/interview-preparation/02-coding-problem-solving.md","sourceDirName":"courses/interview-preparation","slug":"/interview-preparation/02-coding-problem-solving","permalink":"/ai-engineering-journey/interview-preparation/02-coding-problem-solving","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-coding-problem-solving","slug":"/interview-preparation/02-coding-problem-solving","title":"Chapter 2: Coding Problem Solving","sidebar_label":"Chapter 2: Coding Problem Solving","sidebar_position":2},"sidebar":"course-interview-preparation","previous":{"title":"Chapter 1: Technical Interview — Core Computer Science Subjects","permalink":"/ai-engineering-journey/interview-preparation/01-technical-interview-core-cs"},"next":{"title":"Chapter 3: System Design Interview","permalink":"/ai-engineering-journey/interview-preparation/03-system-design-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/interview-preparation/02-coding-problem-solving.md


const frontMatter = {
	id: '02-coding-problem-solving',
	slug: '/interview-preparation/02-coding-problem-solving',
	title: 'Chapter 2: Coding Problem Solving',
	sidebar_label: 'Chapter 2: Coding Problem Solving',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Coding Problem Solving';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Problem-Solving Framework",
  "id": "problem-solving-framework",
  "level": 2
}, {
  "value": "UMPIRE Method",
  "id": "umpire-method",
  "level": 3
}, {
  "value": "Section 1: Array Problems",
  "id": "section-1-array-problems",
  "level": 2
}, {
  "value": "Problem 1: Two Sum",
  "id": "problem-1-two-sum",
  "level": 3
}, {
  "value": "Problem 2: Contains Duplicate",
  "id": "problem-2-contains-duplicate",
  "level": 3
}, {
  "value": "Problem 3: Maximum Subarray (Kadane&#39;s Algorithm)",
  "id": "problem-3-maximum-subarray-kadanes-algorithm",
  "level": 3
}, {
  "value": "Problem 4: Product of Array Except Self",
  "id": "problem-4-product-of-array-except-self",
  "level": 3
}, {
  "value": "Problem 5: Best Time to Buy and Sell Stock",
  "id": "problem-5-best-time-to-buy-and-sell-stock",
  "level": 3
}, {
  "value": "Problem 6: Move Zeroes",
  "id": "problem-6-move-zeroes",
  "level": 3
}, {
  "value": "Problem 7: Three Sum",
  "id": "problem-7-three-sum",
  "level": 3
}, {
  "value": "Problem 8: Container With Most Water",
  "id": "problem-8-container-with-most-water",
  "level": 3
}, {
  "value": "Problem 9: Find Minimum in Rotated Sorted Array",
  "id": "problem-9-find-minimum-in-rotated-sorted-array",
  "level": 3
}, {
  "value": "Problem 10: Merge Intervals",
  "id": "problem-10-merge-intervals",
  "level": 3
}, {
  "value": "Section 2: String Problems",
  "id": "section-2-string-problems",
  "level": 2
}, {
  "value": "Problem 11: Valid Palindrome",
  "id": "problem-11-valid-palindrome",
  "level": 3
}, {
  "value": "Problem 12: Longest Substring Without Repeating Characters",
  "id": "problem-12-longest-substring-without-repeating-characters",
  "level": 3
}, {
  "value": "Problem 13: Valid Anagram",
  "id": "problem-13-valid-anagram",
  "level": 3
}, {
  "value": "Problem 14: Group Anagrams",
  "id": "problem-14-group-anagrams",
  "level": 3
}, {
  "value": "Problem 15: Longest Palindromic Substring",
  "id": "problem-15-longest-palindromic-substring",
  "level": 3
}, {
  "value": "Problem 16: First Unique Character in a String",
  "id": "problem-16-first-unique-character-in-a-string",
  "level": 3
}, {
  "value": "Section 3: Linked List Problems",
  "id": "section-3-linked-list-problems",
  "level": 2
}, {
  "value": "Problem 17: Reverse a Linked List",
  "id": "problem-17-reverse-a-linked-list",
  "level": 3
}, {
  "value": "Problem 18: Detect Cycle in Linked List",
  "id": "problem-18-detect-cycle-in-linked-list",
  "level": 3
}, {
  "value": "Problem 19: Merge Two Sorted Lists",
  "id": "problem-19-merge-two-sorted-lists",
  "level": 3
}, {
  "value": "Problem 20: Remove Nth Node From End",
  "id": "problem-20-remove-nth-node-from-end",
  "level": 3
}, {
  "value": "Section 4: Tree Problems",
  "id": "section-4-tree-problems",
  "level": 2
}, {
  "value": "Problem 21: Maximum Depth of Binary Tree",
  "id": "problem-21-maximum-depth-of-binary-tree",
  "level": 3
}, {
  "value": "Problem 22: Invert Binary Tree",
  "id": "problem-22-invert-binary-tree",
  "level": 3
}, {
  "value": "Problem 23: Validate Binary Search Tree",
  "id": "problem-23-validate-binary-search-tree",
  "level": 3
}, {
  "value": "Problem 24: Binary Tree Level Order Traversal",
  "id": "problem-24-binary-tree-level-order-traversal",
  "level": 3
}, {
  "value": "Problem 25: Lowest Common Ancestor of BST",
  "id": "problem-25-lowest-common-ancestor-of-bst",
  "level": 3
}, {
  "value": "Section 5: Graph Problems",
  "id": "section-5-graph-problems",
  "level": 2
}, {
  "value": "Problem 26: Number of Islands",
  "id": "problem-26-number-of-islands",
  "level": 3
}, {
  "value": "Problem 27: Clone Graph",
  "id": "problem-27-clone-graph",
  "level": 3
}, {
  "value": "Problem 28: Course Schedule (Topological Sort)",
  "id": "problem-28-course-schedule-topological-sort",
  "level": 3
}, {
  "value": "Problem 29: Word Ladder",
  "id": "problem-29-word-ladder",
  "level": 3
}, {
  "value": "Problem 30: Rotting Oranges",
  "id": "problem-30-rotting-oranges",
  "level": 3
}, {
  "value": "Section 6: Dynamic Programming Problems",
  "id": "section-6-dynamic-programming-problems",
  "level": 2
}, {
  "value": "Problem 31: Fibonacci Number",
  "id": "problem-31-fibonacci-number",
  "level": 3
}, {
  "value": "Problem 32: Climbing Stairs",
  "id": "problem-32-climbing-stairs",
  "level": 3
}, {
  "value": "Problem 33: Coin Change",
  "id": "problem-33-coin-change",
  "level": 3
}, {
  "value": "Problem 34: Longest Increasing Subsequence (LIS)",
  "id": "problem-34-longest-increasing-subsequence-lis",
  "level": 3
}, {
  "value": "Problem 35: Maximum Product Subarray",
  "id": "problem-35-maximum-product-subarray",
  "level": 3
}, {
  "value": "Problem 36: Edit Distance (Levenshtein Distance)",
  "id": "problem-36-edit-distance-levenshtein-distance",
  "level": 3
}, {
  "value": "Problem 37: 0/1 Knapsack",
  "id": "problem-37-01-knapsack",
  "level": 3
}, {
  "value": "Problem 38: Unique Paths",
  "id": "problem-38-unique-paths",
  "level": 3
}, {
  "value": "Problem 39: Longest Common Subsequence (LCS)",
  "id": "problem-39-longest-common-subsequence-lcs",
  "level": 3
}, {
  "value": "Problem 40: House Robber",
  "id": "problem-40-house-robber",
  "level": 3
}, {
  "value": "Quick Reference: Problem-Solving Pattern Cheatsheet",
  "id": "quick-reference-problem-solving-pattern-cheatsheet",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    b: "b",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "chapter-2-coding-problem-solving",
        children: "Chapter 2: Coding Problem Solving"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master 40 solved coding problems across arrays, strings, linked lists, trees, graphs, and dynamic programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand three approaches per problem: brute force, better, and optimal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze time and space complexity for each solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write clean TypeScript implementations with proper type annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop pattern recognition to map problems to appropriate algorithms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-solving-framework",
      children: "Problem-Solving Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Read Problem] --> B[Understand Examples]\n    B --> C[Identify Pattern]\n    C --> D{Pattern Type?}\n    D -->|Arrays| E[Two Pointer / Sliding Window / Binary Search]\n    D -->|Strings| F[HashMap / Trie / Two Pointer]\n    D -->|Linked Lists| G[Fast & Slow / Recursion / Dummy Node]\n    D -->|Trees| H[BFS / DFS / Recursion]\n    D -->|Graphs| I[BFS / DFS / Dijkstra / Union Find]\n    D -->|DP| J[Subproblems / Memoization / Tabulation]\n    E --> K[Start with Brute Force]\n    F --> K\n    G --> K\n    H --> K\n    I --> K\n    J --> K\n    K --> L[Analyze Complexity]\n    L --> M[Optimize]\n    M --> N[Code & Test]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "umpire-method",
      children: "UMPIRE Method"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "U"
            }), "nderstand"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read the problem twice. Ask clarifying questions. Confirm inputs/outputs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "M"
            }), "atch"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the problem pattern. Map to known algorithms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "P"
            }), "lan"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outline the approach. Pseudocode before coding."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "mplement"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write clean, well-named code. Handle edge cases."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "eview"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk through your code with an example. Check for bugs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), "valuate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time and space complexity. Discuss trade-offs."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-array-problems",
      children: "Section 1: Array Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-two-sum",
      children: "Problem 1: Two Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of integers ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums"
      }), " and an integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target"
      }), ", return indices of two numbers that add up to target."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums = [2, 7, 11, 15], target = 9"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0, 1]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n²) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function twoSumBrute(nums: number[], target: number): number[] {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n  return [];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Better — HashMap — O(n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why HashMap works:"
      }), " For each element, we check if its complement (target - element) has been seen before. HashMap gives O(1) lookup, making this optimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-contains-duplicate",
      children: "Problem 2: Contains Duplicate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array, return true if any value appears at least twice."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 2, 3, 1]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n²)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function containsDuplicateBrute(nums: number[]): boolean {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] === nums[j]) return true;\n    }\n  }\n  return false;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Better — Sort — O(n log n)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function containsDuplicateSort(nums: number[]): boolean {\n  nums.sort((a, b) => a - b);\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] === nums[i - 1]) return true;\n  }\n  return false;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 3: Optimal — HashSet — O(n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function containsDuplicate(nums: number[]): boolean {\n  const seen = new Set<number>();\n  for (const num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-maximum-subarray-kadanes-algorithm",
      children: "Problem 3: Maximum Subarray (Kadane's Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find contiguous subarray with the largest sum."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "6"
      }), " (subarray ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[4, -1, 2, 1]"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n²)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxSubArrayBrute(nums: number[]): number {\n  let maxSum = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let current = 0;\n    for (let j = i; j < nums.length; j++) {\n      current += nums[j];\n      maxSum = Math.max(maxSum, current);\n    }\n  }\n  return maxSum;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Kadane's Algorithm — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxSubArray(nums: number[]): number {\n  let maxEndingHere = nums[0];\n  let maxSoFar = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);\n    maxSoFar = Math.max(maxSoFar, maxEndingHere);\n  }\n  return maxSoFar;\n}\n\n// Return the subarray itself\nfunction maxSubArrayWithElements(nums: number[]): number[] {\n  let maxEndingHere = nums[0];\n  let maxSoFar = nums[0];\n  let start = 0, end = 0, tempStart = 0;\n  \n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > maxEndingHere + nums[i]) {\n      maxEndingHere = nums[i];\n      tempStart = i;\n    } else {\n      maxEndingHere = maxEndingHere + nums[i];\n    }\n    \n    if (maxEndingHere > maxSoFar) {\n      maxSoFar = maxEndingHere;\n      start = tempStart;\n      end = i;\n    }\n  }\n  return nums.slice(start, end + 1);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " Kadane's algorithm realizes that a subarray ending at index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " is either just ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums[i]"
      }), " (start new) or extends the previous subarray. We track the best we've seen overall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-product-of-array-except-self",
      children: "Problem 4: Product of Array Except Self"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return array where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "answer[i]"
      }), " equals product of all elements except ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums[i]"
      }), ". Cannot use division."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 2, 3, 4]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[24, 12, 8, 6]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n²)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function productExceptSelfBrute(nums: number[]): number[] {\n  const result: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    let product = 1;\n    for (let j = 0; j < nums.length; j++) {\n      if (i !== j) product *= nums[j];\n    }\n    result.push(product);\n  }\n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Prefix/Suffix Products — O(n) time, O(1) extra space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const result = new Array<number>(n).fill(1);\n  \n  // Left products\n  let leftProduct = 1;\n  for (let i = 0; i < n; i++) {\n    result[i] = leftProduct;\n    leftProduct *= nums[i];\n  }\n  \n  // Right products (multiply into result)\n  let rightProduct = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    result[i] *= rightProduct;\n    rightProduct *= nums[i];\n  }\n  \n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " For each index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "answer[i] = product of elements before i * product of elements after i"
      }), ". Two passes compute left and right products."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-best-time-to-buy-and-sell-stock",
      children: "Problem 5: Best Time to Buy and Sell Stock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given stock prices array, find maximum profit from one buy followed by one sell."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[7, 1, 5, 3, 6, 4]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5"
      }), " (buy at 1, sell at 6)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n²)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxProfitBrute(prices: number[]): number {\n  let maxProfit = 0;\n  for (let i = 0; i < prices.length; i++) {\n    for (let j = i + 1; j < prices.length; j++) {\n      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);\n    }\n  }\n  return maxProfit;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — One Pass — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxProfit(prices: number[]): number {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  \n  for (const price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else {\n      maxProfit = Math.max(maxProfit, price - minPrice);\n    }\n  }\n  return maxProfit;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " Track the minimum price seen so far. For each day, calculate profit if we sell today. Keep the maximum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-move-zeroes",
      children: "Problem 6: Move Zeroes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Move all zeros to the end maintaining relative order of non-zero elements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0, 1, 0, 3, 12]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 3, 12, 0, 0]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Two Pointer — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function moveZeroes(nums: number[]): void {\n  let nonZeroIndex = 0;\n  \n  // Move all non-zero elements to the front\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      nums[nonZeroIndex] = nums[i];\n      nonZeroIndex++;\n    }\n  }\n  \n  // Fill remaining positions with zeros\n  for (let i = nonZeroIndex; i < nums.length; i++) {\n    nums[i] = 0;\n  }\n}\n\n// Alternate approach: Swap in place\nfunction moveZeroesSwap(nums: number[]): void {\n  let lastNonZeroFoundAt = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];\n      lastNonZeroFoundAt++;\n    }\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-three-sum",
      children: "Problem 7: Three Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find all unique triplets that sum to zero."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[-1, 0, 1, 2, -1, -4]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[-1, -1, 2], [-1, 0, 1]]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n³)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function threeSumBrute(nums: number[]): number[][] {\n  const result: number[][] = [];\n  const seen = new Set<string>();\n  \n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      for (let k = j + 1; k < nums.length; k++) {\n        if (nums[i] + nums[j] + nums[k] === 0) {\n          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);\n          const key = triplet.join(',');\n          if (!seen.has(key)) {\n            seen.add(key);\n            result.push(triplet);\n          }\n        }\n      }\n    }\n  }\n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Sort + Two Pointers — O(n²) time, O(1) space (excl. output)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function threeSum(nums: number[]): number[][] {\n  const result: number[][] = [];\n  nums.sort((a, b) => a - b);\n  \n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates\n    \n    let left = i + 1;\n    let right = nums.length - 1;\n    \n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      \n      if (sum === 0) {\n        result.push([nums[i], nums[left], nums[right]]);\n        \n        // Skip duplicates\n        while (left < right && nums[left] === nums[left + 1]) left++;\n        while (left < right && nums[right] === nums[right - 1]) right--;\n        \n        left++;\n        right--;\n      } else if (sum < 0) {\n        left++;\n      } else {\n        right--;\n      }\n    }\n  }\n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + two-pointer is the standard approach for k-sum problems after fixing k-2 elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-container-with-most-water",
      children: "Problem 8: Container With Most Water"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find two lines that together with x-axis form a container holding maximum water."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 8, 6, 2, 5, 4, 8, 3, 7]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "49"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Two Pointer — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxArea(height: number[]): number {\n  let left = 0;\n  let right = height.length - 1;\n  let maxWater = 0;\n  \n  while (left < right) {\n    const width = right - left;\n    const minHeight = Math.min(height[left], height[right]);\n    maxWater = Math.max(maxWater, width * minHeight);\n    \n    // Move the shorter line inward\n    if (height[left] < height[right]) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  \n  return maxWater;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why moving shorter line works:"
      }), " The area is limited by the shorter line. Moving the shorter line inward might find a taller line. Moving the taller line inward would only decrease width without potential height gain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-find-minimum-in-rotated-sorted-array",
      children: "Problem 9: Find Minimum in Rotated Sorted Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find minimum element in a rotated sorted array."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[3, 4, 5, 1, 2]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Binary Search — O(log n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function findMin(nums: number[]): number {\n  let left = 0;\n  let right = nums.length - 1;\n  \n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (nums[mid] > nums[right]) {\n      // Minimum is in the right half\n      left = mid + 1;\n    } else {\n      // Minimum is in the left half (including mid)\n      right = mid;\n    }\n  }\n  \n  return nums[left];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " In a rotated sorted array, the minimum is the only element smaller than its left neighbor. Binary search exploits pattern: if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums[mid] > nums[right]"
      }), ", the rotation point is in the right half."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-merge-intervals",
      children: "Problem 10: Merge Intervals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Merge all overlapping intervals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[1,3],[2,6],[8,10],[15,18]]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[1,6],[8,10],[15,18]]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Sort + Linear Scan — O(n log n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function merge(intervals: number[][]): number[][] {\n  if (intervals.length <= 1) return intervals;\n  \n  intervals.sort((a, b) => a[0] - b[0]);\n  const result: number[][] = [intervals[0]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    const [start, end] = intervals[i];\n    const last = result[result.length - 1];\n    \n    if (start <= last[1]) {\n      // Overlapping: merge\n      last[1] = Math.max(last[1], end);\n    } else {\n      // Non-overlapping: add new\n      result.push([start, end]);\n    }\n  }\n  \n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases:"
      }), " Empty array, single interval, already merged, all overlapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-string-problems",
      children: "Section 2: String Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-valid-palindrome",
      children: "Problem 11: Valid Palindrome"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return true if string is palindrome considering only alphanumeric chars, ignoring case."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"A man, a plan, a canal: Panama\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Two Pointer — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isPalindrome(s: string): boolean {\n  let left = 0;\n  let right = s.length - 1;\n  \n  while (left < right) {\n    // Skip non-alphanumeric characters\n    while (left < right && !isAlphanumeric(s[left])) left++;\n    while (left < right && !isAlphanumeric(s[right])) right--;\n    \n    if (s[left].toLowerCase() !== s[right].toLowerCase()) {\n      return false;\n    }\n    \n    left++;\n    right--;\n  }\n  \n  return true;\n}\n\nfunction isAlphanumeric(ch: string): boolean {\n  return /[a-zA-Z0-9]/.test(ch);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-longest-substring-without-repeating-characters",
      children: "Problem 12: Longest Substring Without Repeating Characters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find length of longest substring without repeating characters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abcabcbb\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3"
      }), " (substring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abc\""
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n³)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function lengthOfLongestSubstringBrute(s: string): number {\n  let maxLen = 0;\n  for (let i = 0; i < s.length; i++) {\n    for (let j = i; j < s.length; j++) {\n      const sub = s.slice(i, j + 1);\n      if (new Set(sub).size === sub.length) {\n        maxLen = Math.max(maxLen, sub.length);\n      }\n    }\n  }\n  return maxLen;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Sliding Window — O(n) time, O(min(m, n)) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function lengthOfLongestSubstring(s: string): number {\n  const charIndex = new Map<string, number>();\n  let maxLen = 0;\n  let left = 0;\n  \n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    \n    if (charIndex.has(char) && charIndex.get(char)! >= left) {\n      left = charIndex.get(char)! + 1;\n    }\n    \n    charIndex.set(char, right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  \n  return maxLen;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding window pattern:"
      }), " Expand right pointer, if duplicate found, shrink left pointer past the previous occurrence. Track max window size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-valid-anagram",
      children: "Problem 13: Valid Anagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return true if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), " is an anagram of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s = \"anagram\", t = \"nagaram\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Sort — O(n log n)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isAnagramSort(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  return s.split('').sort().join('') === t.split('').sort().join('');\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — HashMap/Frequency Counter — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  \n  const freq = new Array<number>(26).fill(0);\n  \n  for (let i = 0; i < s.length; i++) {\n    freq[s.charCodeAt(i) - 97]++;\n    freq[t.charCodeAt(i) - 97]--;\n  }\n  \n  return freq.every(count => count === 0);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-group-anagrams",
      children: "Problem 14: Group Anagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Group anagrams together from an array of strings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "HashMap + Sorted Key — O(n * k log k) time, O(nk) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function groupAnagrams(strs: string[]): string[][] {\n  const map = new Map<string, string[]>();\n  \n  for (const str of strs) {\n    const sortedKey = str.split('').sort().join('');\n    \n    if (!map.has(sortedKey)) {\n      map.set(sortedKey, []);\n    }\n    map.get(sortedKey)!.push(str);\n  }\n  \n  return Array.from(map.values());\n}\n\n// Alternative: Use character count as key (O(nk) time)\nfunction groupAnagramsOptimized(strs: string[]): string[][] {\n  const map = new Map<string, string[]>();\n  \n  for (const str of strs) {\n    const count = new Array<number>(26).fill(0);\n    for (const ch of str) {\n      count[ch.charCodeAt(0) - 97]++;\n    }\n    const key = count.join('#');\n    \n    if (!map.has(key)) {\n      map.set(key, []);\n    }\n    map.get(key)!.push(str);\n  }\n  \n  return Array.from(map.values());\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-longest-palindromic-substring",
      children: "Problem 15: Longest Palindromic Substring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return longest palindromic substring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"babad\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"bab\""
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"aba\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Brute Force — O(n³)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function longestPalindromeBrute(s: string): string {\n  let longest = '';\n  \n  for (let i = 0; i < s.length; i++) {\n    for (let j = i; j < s.length; j++) {\n      const sub = s.slice(i, j + 1);\n      if (sub === sub.split('').reverse().join('') && sub.length > longest.length) {\n        longest = sub;\n      }\n    }\n  }\n  \n  return longest;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Expand Around Center — O(n²) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function longestPalindrome(s: string): string {\n  if (s.length <= 1) return s;\n  \n  let start = 0;\n  let maxLen = 1;\n  \n  function expandAroundCenter(left: number, right: number): void {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      const currentLen = right - left + 1;\n      if (currentLen > maxLen) {\n        maxLen = currentLen;\n        start = left;\n      }\n      left--;\n      right++;\n    }\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    expandAroundCenter(i, i);     // Odd length palindrome\n    expandAroundCenter(i, i + 1); // Even length palindrome\n  }\n  \n  return s.slice(start, start + maxLen);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-first-unique-character-in-a-string",
      children: "Problem 16: First Unique Character in a String"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find first non-repeating character index; return -1 if none."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"leetcode\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " (l), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"loveleetcode\""
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2"
      }), " (v)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "HashMap — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function firstUniqChar(s: string): number {\n  const freq = new Map<string, number>();\n  \n  for (const ch of s) {\n    freq.set(ch, (freq.get(ch) || 0) + 1);\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    if (freq.get(s[i]) === 1) return i;\n  }\n  \n  return -1;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-linked-list-problems",
      children: "Section 3: Linked List Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-reverse-a-linked-list",
      children: "Problem 17: Reverse a Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Iterative — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class ListNode<T> {\n  constructor(\n    public val: T,\n    public next: ListNode<T> | null = null\n  ) {}\n}\n\nfunction reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {\n  let prev: ListNode<T> | null = null;\n  let current = head;\n  \n  while (current) {\n    const nextTemp = current.next;\n    current.next = prev;\n    prev = current;\n    current = nextTemp;\n  }\n  \n  return prev;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Recursive — O(n) time, O(n) space (call stack)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function reverseListRecursive<T>(head: ListNode<T> | null): ListNode<T> | null {\n  if (!head || !head.next) return head;\n  \n  const reversed = reverseListRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  \n  return reversed;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-detect-cycle-in-linked-list",
      children: "Problem 18: Detect Cycle in Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Floyd's Cycle Detection (Fast & Slow) — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function hasCycle<T>(head: ListNode<T> | null): boolean {\n  if (!head || !head.next) return false;\n  \n  let slow: ListNode<T> | null = head;\n  let fast: ListNode<T> | null = head;\n  \n  while (fast && fast.next) {\n    slow = slow!.next;\n    fast = fast.next.next;\n    \n    if (slow === fast) return true;\n  }\n  \n  return false;\n}\n\n// Find cycle start node\nfunction detectCycle<T>(head: ListNode<T> | null): ListNode<T> | null {\n  if (!head || !head.next) return null;\n  \n  let slow: ListNode<T> | null = head;\n  let fast: ListNode<T> | null = head;\n  \n  // Detect cycle\n  while (fast && fast.next) {\n    slow = slow!.next;\n    fast = fast.next.next;\n    if (slow === fast) break;\n  }\n  \n  if (!fast || !fast.next) return null; // No cycle\n  \n  // Find cycle start\n  slow = head;\n  while (slow !== fast) {\n    slow = slow!.next;\n    fast = fast!.next;\n  }\n  \n  return slow;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Distance from head to cycle start = Distance from meeting point to cycle start (by Floyd's algorithm)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-19-merge-two-sorted-lists",
      children: "Problem 19: Merge Two Sorted Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Iterative with Dummy Node — O(n+m) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function mergeTwoLists<T>(\n  list1: ListNode<T> | null,\n  list2: ListNode<T> | null\n): ListNode<T> | null {\n  const dummy = new ListNode<T>(null as any);\n  let current = dummy;\n  \n  while (list1 && list2) {\n    if (list1.val < list2.val) {\n      current.next = list1;\n      list1 = list1.next;\n    } else {\n      current.next = list2;\n      list2 = list2.next;\n    }\n    current = current.next;\n  }\n  \n  current.next = list1 || list2;\n  \n  return dummy.next;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Recursive — O(n+m) time, O(n+m) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function mergeTwoListsRecursive<T extends number | string>(\n  list1: ListNode<T> | null,\n  list2: ListNode<T> | null\n): ListNode<T> | null {\n  if (!list1) return list2;\n  if (!list2) return list1;\n  \n  if (list1.val < list2.val) {\n    list1.next = mergeTwoListsRecursive(list1.next, list2);\n    return list1;\n  } else {\n    list2.next = mergeTwoListsRecursive(list1, list2.next);\n    return list2;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-20-remove-nth-node-from-end",
      children: "Problem 20: Remove Nth Node From End"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Two Pass — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function removeNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {\n  const dummy = new ListNode<T>(null as any, head);\n  let length = 0;\n  let current = head;\n  \n  while (current) {\n    length++;\n    current = current.next;\n  }\n  \n  const target = length - n;\n  current = dummy;\n  for (let i = 0; i < target; i++) {\n    current = current.next!;\n  }\n  \n  current.next = current.next!.next;\n  return dummy.next;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "One Pass — Fast & Slow Pointer — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function removeNthFromEndOnePass<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {\n  const dummy = new ListNode<T>(null as any, head);\n  let fast: ListNode<T> | null = dummy;\n  let slow: ListNode<T> | null = dummy;\n  \n  // Move fast n+1 steps ahead\n  for (let i = 0; i <= n; i++) {\n    fast = fast!.next;\n  }\n  \n  // Move both until fast reaches end\n  while (fast) {\n    slow = slow!.next;\n    fast = fast.next;\n  }\n  \n  // Remove nth node\n  slow!.next = slow!.next!.next;\n  \n  return dummy.next;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-tree-problems",
      children: "Section 4: Tree Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-21-maximum-depth-of-binary-tree",
      children: "Problem 21: Maximum Depth of Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Recursive — DFS — O(n) time, O(h) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class TreeNode<T> {\n  constructor(\n    public val: T,\n    public left: TreeNode<T> | null = null,\n    public right: TreeNode<T> | null = null\n  ) {}\n}\n\nfunction maxDepth<T>(root: TreeNode<T> | null): number {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Iterative — BFS — O(n) time, O(w) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxDepthBFS<T>(root: TreeNode<T> | null): number {\n  if (!root) return 0;\n  \n  const queue: TreeNode<T>[] = [root];\n  let depth = 0;\n  \n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift()!;\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    depth++;\n  }\n  \n  return depth;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-22-invert-binary-tree",
      children: "Problem 22: Invert Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Recursive — O(n) time, O(h) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function invertTree<T>(root: TreeNode<T> | null): TreeNode<T> | null {\n  if (!root) return null;\n  \n  const left = invertTree(root.left);\n  const right = invertTree(root.right);\n  \n  root.left = right;\n  root.right = left;\n  \n  return root;\n}\n\n// Iterative\nfunction invertTreeIterative<T>(root: TreeNode<T> | null): TreeNode<T> | null {\n  if (!root) return null;\n  \n  const queue: TreeNode<T>[] = [root];\n  \n  while (queue.length > 0) {\n    const node = queue.shift()!;\n    [node.left, node.right] = [node.right, node.left];\n    if (node.left) queue.push(node.left);\n    if (node.right) queue.push(node.right);\n  }\n  \n  return root;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-23-validate-binary-search-tree",
      children: "Problem 23: Validate Binary Search Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Inorder Traversal — O(n) time, O(h) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isValidBST(root: TreeNode<number> | null): boolean {\n  const values: number[] = [];\n  \n  function inorder(node: TreeNode<number> | null): void {\n    if (!node) return;\n    inorder(node.left);\n    values.push(node.val);\n    inorder(node.right);\n  }\n  \n  inorder(root);\n  \n  for (let i = 1; i < values.length; i++) {\n    if (values[i] <= values[i - 1]) return false;\n  }\n  \n  return true;\n}\n\n// Optimal: Recursive with bounds — O(n)\nfunction isValidBSTRange(root: TreeNode<number> | null, min = -Infinity, max = Infinity): boolean {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBSTRange(root.left, min, root.val) && isValidBSTRange(root.right, root.val, max);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-24-binary-tree-level-order-traversal",
      children: "Problem 24: Binary Tree Level Order Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "BFS — O(n) time, O(w) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function levelOrder<T>(root: TreeNode<T> | null): T[][] {\n  if (!root) return [];\n  \n  const result: T[][] = [];\n  const queue: TreeNode<T>[] = [root];\n  \n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevel: T[] = [];\n    \n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift()!;\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    \n    result.push(currentLevel);\n  }\n  \n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-25-lowest-common-ancestor-of-bst",
      children: "Problem 25: Lowest Common Ancestor of BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Recursive — O(h) time, O(h) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function lowestCommonAncestor(\n  root: TreeNode<number> | null,\n  p: TreeNode<number>,\n  q: TreeNode<number>\n): TreeNode<number> | null {\n  if (!root) return null;\n  \n  if (p.val < root.val && q.val < root.val) {\n    return lowestCommonAncestor(root.left, p, q);\n  }\n  if (p.val > root.val && q.val > root.val) {\n    return lowestCommonAncestor(root.right, p, q);\n  }\n  \n  return root; // Found split point\n}\n\n// Iterative — O(h) time, O(1) space\nfunction lowestCommonAncestorIterative(\n  root: TreeNode<number> | null,\n  p: TreeNode<number>,\n  q: TreeNode<number>\n): TreeNode<number> | null {\n  let current = root;\n  \n  while (current) {\n    if (p.val < current.val && q.val < current.val) {\n      current = current.left;\n    } else if (p.val > current.val && q.val > current.val) {\n      current = current.right;\n    } else {\n      return current;\n    }\n  }\n  \n  return null;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-graph-problems",
      children: "Section 5: Graph Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-26-number-of-islands",
      children: "Problem 26: Number of Islands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count number of islands in a 2D grid ('1' = land, '0' = water)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "11110\n11010\n11000\n00000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["→ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      }), " island"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DFS — O(m*n) time, O(m*n) space (worst case)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function numIslands(grid: string[][]): number {\n  if (grid.length === 0) return 0;\n  \n  const rows = grid.length;\n  const cols = grid[0].length;\n  let count = 0;\n  \n  function dfs(r: number, c: number): void {\n    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {\n      return;\n    }\n    \n    grid[r][c] = '0'; // Mark visited by sinking\n    \n    dfs(r + 1, c);\n    dfs(r - 1, c);\n    dfs(r, c + 1);\n    dfs(r, c - 1);\n  }\n  \n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === '1') {\n        count++;\n        dfs(r, c);\n      }\n    }\n  }\n  \n  return count;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-27-clone-graph",
      children: "Problem 27: Clone Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DFS with HashMap — O(V+E) time, O(V) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class GraphNode {\n  constructor(\n    public val: number,\n    public neighbors: GraphNode[] = []\n  ) {}\n}\n\nfunction cloneGraph(node: GraphNode | null): GraphNode | null {\n  if (!node) return null;\n  \n  const visited = new Map<GraphNode, GraphNode>();\n  \n  function dfs(original: GraphNode): GraphNode {\n    if (visited.has(original)) {\n      return visited.get(original)!;\n    }\n    \n    const clone = new GraphNode(original.val);\n    visited.set(original, clone);\n    \n    for (const neighbor of original.neighbors) {\n      clone.neighbors.push(dfs(neighbor));\n    }\n    \n    return clone;\n  }\n  \n  return dfs(node);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-28-course-schedule-topological-sort",
      children: "Problem 28: Course Schedule (Topological Sort)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Can you finish all courses given prerequisites? (Detect cycle in DAG)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Kahn's Algorithm (BFS) — O(V+E) time, O(V+E) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function canFinish(numCourses: number, prerequisites: number[][]): boolean {\n  const graph = new Map<number, number[]>();\n  const inDegree = new Array<number>(numCourses).fill(0);\n  \n  // Build graph\n  for (const [course, prereq] of prerequisites) {\n    if (!graph.has(prereq)) graph.set(prereq, []);\n    graph.get(prereq)!.push(course);\n    inDegree[course]++;\n  }\n  \n  // Start with courses having no prerequisites\n  const queue: number[] = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  \n  let completed = 0;\n  \n  while (queue.length > 0) {\n    const course = queue.shift()!;\n    completed++;\n    \n    for (const neighbor of graph.get(course) || []) {\n      inDegree[neighbor]--;\n      if (inDegree[neighbor] === 0) {\n        queue.push(neighbor);\n      }\n    }\n  }\n  \n  return completed === numCourses;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-29-word-ladder",
      children: "Problem 29: Word Ladder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return length of shortest transformation sequence from beginWord to endWord."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "BFS — O(M² * N) time, O(M² * N) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  \n  const queue: string[] = [beginWord];\n  let level = 1;\n  \n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    \n    for (let i = 0; i < levelSize; i++) {\n      const word = queue.shift()!;\n      \n      if (word === endWord) return level;\n      \n      // Try changing each character\n      for (let j = 0; j < word.length; j++) {\n        for (let ch = 97; ch <= 122; ch++) {\n          const newChar = String.fromCharCode(ch);\n          const newWord = word.slice(0, j) + newChar + word.slice(j + 1);\n          \n          if (wordSet.has(newWord)) {\n            queue.push(newWord);\n            wordSet.delete(newWord); // Prevent revisiting\n          }\n        }\n      }\n    }\n    \n    level++;\n  }\n  \n  return 0;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-30-rotting-oranges",
      children: "Problem 30: Rotting Oranges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return minutes until all oranges rot, or -1 if impossible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Multi-source BFS — O(m*n) time, O(m*n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function orangesRotting(grid: number[][]): number {\n  const rows = grid.length;\n  const cols = grid[0].length;\n  const queue: [number, number][] = [];\n  let fresh = 0;\n  \n  // Count fresh oranges and add rotten ones to queue\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 2) queue.push([r, c]);\n      if (grid[r][c] === 1) fresh++;\n    }\n  }\n  \n  if (fresh === 0) return 0;\n  \n  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n  let minutes = 0;\n  \n  while (queue.length > 0 && fresh > 0) {\n    const levelSize = queue.length;\n    \n    for (let i = 0; i < levelSize; i++) {\n      const [r, c] = queue.shift()!;\n      \n      for (const [dr, dc] of dirs) {\n        const nr = r + dr;\n        const nc = c + dc;\n        \n        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          queue.push([nr, nc]);\n          fresh--;\n        }\n      }\n    }\n    \n    minutes++;\n  }\n  \n  return fresh === 0 ? minutes : -1;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-dynamic-programming-problems",
      children: "Section 6: Dynamic Programming Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-31-fibonacci-number",
      children: "Problem 31: Fibonacci Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: Recursive — O(2ⁿ) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function fibRecursive(n: number): number {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: DP — Tabulation — O(n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function fibDP(n: number): number {\n  if (n <= 1) return n;\n  const dp = new Array<number>(n + 1).fill(0);\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 3: Optimal — Two Variables — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function fib(n: number): number {\n  if (n <= 1) return n;\n  let prev = 0, curr = 1;\n  for (let i = 2; i <= n; i++) {\n    [prev, curr] = [curr, prev + curr];\n  }\n  return curr;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-32-climbing-stairs",
      children: "Problem 32: Climbing Stairs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " n steps, can climb 1 or 2 steps at a time. Count distinct ways to reach top."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function climbStairs(n: number): number {\n  if (n <= 2) return n;\n  \n  let prev2 = 1; // Ways to reach step 1\n  let prev1 = 2; // Ways to reach step 2\n  \n  for (let i = 3; i <= n; i++) {\n    const current = prev1 + prev2;\n    prev2 = prev1;\n    prev1 = current;\n  }\n  \n  return prev1;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " This is Fibonacci in disguise. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i] = dp[i-1] + dp[i-2]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-33-coin-change",
      children: "Problem 33: Coin Change"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return fewest coins needed to make up amount, or -1 if impossible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — Tabulation — O(amount * coins) time, O(amount) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function coinChange(coins: number[], amount: number): number {\n  const dp = new Array<number>(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  \n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (coin <= i) {\n        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);\n      }\n    }\n  }\n  \n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " For each amount, try every coin. The optimal substructure: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i] = 1 + dp[i - coin]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-34-longest-increasing-subsequence-lis",
      children: "Problem 34: Longest Increasing Subsequence (LIS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 1: DP — O(n²) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function lengthOfLIS(nums: number[]): number {\n  const dp = new Array<number>(nums.length).fill(1);\n  let maxLen = 1;\n  \n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) {\n        dp[i] = Math.max(dp[i], dp[j] + 1);\n      }\n    }\n    maxLen = Math.max(maxLen, dp[i]);\n  }\n  \n  return maxLen;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Approach 2: Optimal — Binary Search — O(n log n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function lengthOfLISOptimized(nums: number[]): number {\n  const piles: number[] = [];\n  \n  for (const num of nums) {\n    // Binary search: find first pile with top >= num\n    let left = 0;\n    let right = piles.length;\n    \n    while (left < right) {\n      const mid = Math.floor((left + right) / 2);\n      if (piles[mid] < num) {\n        left = mid + 1;\n      } else {\n        right = mid;\n      }\n    }\n    \n    if (left === piles.length) {\n      piles.push(num);\n    } else {\n      piles[left] = num;\n    }\n  }\n  \n  return piles.length;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition (Patience Sorting):"
      }), " Maintain piles where each pile's top is the smallest possible ending value for an increasing subsequence of that length."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-35-maximum-product-subarray",
      children: "Problem 35: Maximum Product Subarray"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — Track min and max — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function maxProduct(nums: number[]): number {\n  let maxSoFar = nums[0];\n  let minSoFar = nums[0];\n  let result = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    const current = nums[i];\n    const tempMax = Math.max(current, maxSoFar * current, minSoFar * current);\n    const tempMin = Math.min(current, maxSoFar * current, minSoFar * current);\n    \n    maxSoFar = tempMax;\n    minSoFar = tempMin;\n    result = Math.max(result, maxSoFar);\n  }\n  \n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why track min:"
      }), " A negative number multiplied by the minimum (most negative) can become the maximum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-36-edit-distance-levenshtein-distance",
      children: "Problem 36: Edit Distance (Levenshtein Distance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(m*n) time, O(m*n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function minDistance(word1: string, word2: string): number {\n  const m = word1.length;\n  const n = word2.length;\n  \n  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));\n  \n  // Base cases\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = 1 + Math.min(\n          dp[i - 1][j],     // Delete\n          dp[i][j - 1],     // Insert\n          dp[i - 1][j - 1]  // Replace\n        );\n      }\n    }\n  }\n  \n  return dp[m][n];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-37-01-knapsack",
      children: "Problem 37: 0/1 Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(n*W) time, O(n*W) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function knapsack(weights: number[], values: number[], capacity: number): number {\n  const n = weights.length;\n  const dp = Array.from({ length: n + 1 }, () => new Array<number>(capacity + 1).fill(0));\n  \n  for (let i = 1; i <= n; i++) {\n    for (let w = 1; w <= capacity; w++) {\n      if (weights[i - 1] <= w) {\n        dp[i][w] = Math.max(\n          values[i - 1] + dp[i - 1][w - weights[i - 1]],\n          dp[i - 1][w]\n        );\n      } else {\n        dp[i][w] = dp[i - 1][w];\n      }\n    }\n  }\n  \n  return dp[n][capacity];\n}\n\n// Optimized: 1D DP array\nfunction knapsackOptimized(weights: number[], values: number[], capacity: number): number {\n  const dp = new Array<number>(capacity + 1).fill(0);\n  \n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);\n    }\n  }\n  \n  return dp[capacity];\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-38-unique-paths",
      children: "Problem 38: Unique Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Robot at top-left of m×n grid, moves only right/down. Count paths to bottom-right."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(m*n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function uniquePaths(m: number, n: number): number {\n  const dp = new Array<number>(n).fill(1);\n  \n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[j] += dp[j - 1];\n    }\n  }\n  \n  return dp[n - 1];\n}\n\n// Mathematical: Combinations (m+n-2 choose m-1)\nfunction uniquePathsMath(m: number, n: number): number {\n  const total = m + n - 2;\n  const k = Math.min(m - 1, n - 1);\n  let result = 1;\n  \n  for (let i = 1; i <= k; i++) {\n    result = Math.floor(result * (total - k + i) / i);\n  }\n  \n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-39-longest-common-subsequence-lcs",
      children: "Problem 39: Longest Common Subsequence (LCS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(m*n) time, O(m*n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function longestCommonSubsequence(text1: string, text2: string): number {\n  const m = text1.length;\n  const n = text2.length;\n  \n  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  \n  return dp[m][n];\n}\n\n// Get actual LCS string\nfunction getLCS(text1: string, text2: string): string {\n  const m = text1.length;\n  const n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  \n  // Backtrack\n  let i = m, j = n;\n  let lcs = '';\n  while (i > 0 && j > 0) {\n    if (text1[i - 1] === text2[j - 1]) {\n      lcs = text1[i - 1] + lcs;\n      i--; j--;\n    } else if (dp[i - 1][j] > dp[i][j - 1]) {\n      i--;\n    } else {\n      j--;\n    }\n  }\n  \n  return lcs;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-40-house-robber",
      children: "Problem 40: House Robber"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Maximum money you can rob without alerting police (cannot rob adjacent houses)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "DP — O(n) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function rob(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  \n  let prev2 = nums[0];\n  let prev1 = Math.max(nums[0], nums[1]);\n  \n  for (let i = 2; i < nums.length; i++) {\n    const current = Math.max(prev1, prev2 + nums[i]);\n    prev2 = prev1;\n    prev1 = current;\n  }\n  \n  return prev1;\n}\n\n// House Robber II: Houses in a circle\nfunction robCircular(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  \n  const robLinear = (arr: number[]): number => {\n    let prev2 = 0, prev1 = 0;\n    for (const num of arr) {\n      const current = Math.max(prev1, prev2 + num);\n      prev2 = prev1;\n      prev1 = current;\n    }\n    return prev1;\n  };\n  \n  return Math.max(\n    robLinear(nums.slice(0, -1)), // Exclude last\n    robLinear(nums.slice(1))      // Exclude first\n  );\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-problem-solving-pattern-cheatsheet",
      children: "Quick Reference: Problem-Solving Pattern Cheatsheet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted arrays, palindrome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum II, Container Water, Valid Palindrome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous subarrays/substrings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Subarray, Longest Substring,"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted data, find element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search Rotated, Find Min, First/Last Position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast & Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list cycles, middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle Detection, Middle of LL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path, level order, unweighted graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word Ladder, Rotting Oranges, Tree Level Order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path existence, all paths, island counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of Islands, Clone Graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All permutations, combinations, subsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens, Subsets, Permutations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure, overlapping subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, Coin Change, LCS, Knapsack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local optimum = global optimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump Game, Coin Change (canonical currencies)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union Find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components, dynamic connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of Islands, Redundant Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix matching, autocomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word Search, Autocomplete System"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Course Schedule, Alien Dictionary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next greater/smaller element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next Greater Element, Largest Rectangle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered 40 coding problems across 7 categories:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problems"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Techniques"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum, Duplicate, Max Subarray, Product Except Self, Stock, Move Zeroes, Three Sum, Container Water, Rotated Min, Merge Intervals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashMap, Kadane, Two Pointer, Binary Search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome, Longest Substring, Anagram, Group Anagrams, Palindrome Substring, First Unique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window, HashMap, Center Expand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked Lists (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse, Cycle, Merge Sorted, Remove Nth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast & Slow, Dummy Node, Recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trees (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Depth, Invert, Validate BST, Level Order, LCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, DFS, Recursion, Inorder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphs (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Islands, Clone, Course Schedule, Word Ladder, Rotting Oranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS, BFS, Topological Sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, Stairs, Coin Change, LIS, Max Product, Edit Distance, Knapsack, Unique Paths, LCS, House Robber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation, Memoization, Subproblems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pattern recognition is key:"
          }), " Most problems map to a small set of patterns. Master the patterns, not individual problems."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Always start with brute force:"
          }), " Even if you know the optimal solution, mention the brute force first. This shows structured thinking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Discuss trade-offs:"
          }), " Interviewers love hearing you compare time vs. space complexity trade-offs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handle edge cases first:"
          }), " Empty input, single element, duplicates, negative numbers, overflow."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use UMPIRE:"
          }), " Understand, Match, Plan, Implement, Review, Evaluate — this framework works for every coding problem."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Practice on paper:"
          }), " In interviews, you won't have an IDE. Practice writing code on paper or a whiteboard."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verbalize your thinking:"
          }), " Talk through your approach even before you start coding. The interviewer wants to see your thought process."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimal ≠ always needed:"
          }), " Sometimes a clean O(n²) solution with good explanation scores better than a complex O(n log n) solution you can't explain."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For government exams:"
          }), " Focus on arrays, strings, recursion, and basic trees. DP and graphs are less frequently asked in PSU interviews."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "⭐ Must Know:"
          }), " Two Sum, Max Subarray, Reverse Linked List, Valid BST, Number of Islands, Coin Change, Longest Common Subsequence."]
        }), "\n"]
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