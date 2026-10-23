"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1868],{

/***/ 9558
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_07_dynamic_programming_md_7d7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-07-dynamic-programming-md-7d7.json
const site_docs_courses_coding_problems_07_dynamic_programming_md_7d7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/07-dynamic-programming","title":"Chapter 07: Dynamic Programming","description":"Dynamic Programming is the most important algorithmic technique for coding interviews. It involves breaking problems into overlapping subproblems, solving each once, and storing results. Master DP and you master interviews.","source":"@site/docs/courses/coding-problems/07-dynamic-programming.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/07-dynamic-programming","permalink":"/ai-engineering-journey/coding-problems/07-dynamic-programming","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-dynamic-programming","slug":"/coding-problems/07-dynamic-programming","title":"Chapter 07: Dynamic Programming","sidebar_label":"Chapter 07: Dynamic Programming","sidebar_position":7},"sidebar":"course-coding-problems","previous":{"title":"Chapter 06: Graphs","permalink":"/ai-engineering-journey/coding-problems/06-graphs"},"next":{"title":"Chapter 08: Greedy Algorithms","permalink":"/ai-engineering-journey/coding-problems/08-greedy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/coding-problems/07-dynamic-programming.md


const frontMatter = {
	id: '07-dynamic-programming',
	slug: '/coding-problems/07-dynamic-programming',
	title: 'Chapter 07: Dynamic Programming',
	sidebar_label: 'Chapter 07: Dynamic Programming',
	sidebar_position: 7
};
const contentTitle = 'Chapter 07: Dynamic Programming';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Problem Classification Flow",
  "id": "problem-classification-flow",
  "level": 2
}, {
  "value": "DP Patterns Classification",
  "id": "dp-patterns-classification",
  "level": 2
}, {
  "value": "Complexity Heat Map",
  "id": "complexity-heat-map",
  "level": 2
}, {
  "value": "Easy Problems (10)",
  "id": "easy-problems-10",
  "level": 2
}, {
  "value": "Problem 1: Climbing Stairs",
  "id": "problem-1-climbing-stairs",
  "level": 3
}, {
  "value": "Problem 2: House Robber",
  "id": "problem-2-house-robber",
  "level": 3
}, {
  "value": "Problem 3: Maximum Subarray (Kadane&#39;s Algorithm)",
  "id": "problem-3-maximum-subarray-kadanes-algorithm",
  "level": 3
}, {
  "value": "Problem 4: Fibonacci Number",
  "id": "problem-4-fibonacci-number",
  "level": 3
}, {
  "value": "Problem 5: Min Cost Climbing Stairs",
  "id": "problem-5-min-cost-climbing-stairs",
  "level": 3
}, {
  "value": "Problem 6: Pascal&#39;s Triangle",
  "id": "problem-6-pascals-triangle",
  "level": 3
}, {
  "value": "Problem 7: Divisor Game",
  "id": "problem-7-divisor-game",
  "level": 3
}, {
  "value": "Problem 8: Tribonacci Number",
  "id": "problem-8-tribonacci-number",
  "level": 3
}, {
  "value": "Problem 9: Maximum Product of Three Numbers",
  "id": "problem-9-maximum-product-of-three-numbers",
  "level": 3
}, {
  "value": "Problem 10: Counting Bits",
  "id": "problem-10-counting-bits",
  "level": 3
}, {
  "value": "Medium Problems (18)",
  "id": "medium-problems-18",
  "level": 2
}, {
  "value": "Problem 11: Coin Change",
  "id": "problem-11-coin-change",
  "level": 3
}, {
  "value": "Problem 12: Longest Increasing Subsequence",
  "id": "problem-12-longest-increasing-subsequence",
  "level": 3
}, {
  "value": "Problem 13: Longest Common Subsequence",
  "id": "problem-13-longest-common-subsequence",
  "level": 3
}, {
  "value": "Problem 14: Unique Paths",
  "id": "problem-14-unique-paths",
  "level": 3
}, {
  "value": "Problem 15: Unique Paths II",
  "id": "problem-15-unique-paths-ii",
  "level": 3
}, {
  "value": "Problem 16: Jump Game",
  "id": "problem-16-jump-game",
  "level": 3
}, {
  "value": "Problem 17: Word Break",
  "id": "problem-17-word-break",
  "level": 3
}, {
  "value": "Problem 18: Decode Ways",
  "id": "problem-18-decode-ways",
  "level": 3
}, {
  "value": "Problem 19: Target Sum",
  "id": "problem-19-target-sum",
  "level": 3
}, {
  "value": "Problem 20: Partition Equal Subset Sum",
  "id": "problem-20-partition-equal-subset-sum",
  "level": 3
}, {
  "value": "Problem 21: Minimum Path Sum",
  "id": "problem-21-minimum-path-sum",
  "level": 3
}, {
  "value": "Problem 22: Maximum Length of Repeated Subarray",
  "id": "problem-22-maximum-length-of-repeated-subarray",
  "level": 3
}, {
  "value": "Problem 23: Maximum Alternating Subsequence Sum",
  "id": "problem-23-maximum-alternating-subsequence-sum",
  "level": 3
}, {
  "value": "Problem 24: Coin Change II",
  "id": "problem-24-coin-change-ii",
  "level": 3
}, {
  "value": "Problem 25: House Robber II",
  "id": "problem-25-house-robber-ii",
  "level": 3
}, {
  "value": "Problem 26: Longest Palindromic Substring (DP)",
  "id": "problem-26-longest-palindromic-substring-dp",
  "level": 3
}, {
  "value": "Problem 27: Longest Increasing Path in a Matrix (DP)",
  "id": "problem-27-longest-increasing-path-in-a-matrix-dp",
  "level": 3
}, {
  "value": "Problem 28: Best Time to Buy and Sell Stock with Cooldown",
  "id": "problem-28-best-time-to-buy-and-sell-stock-with-cooldown",
  "level": 3
}, {
  "value": "Problem 29: 0/1 Knapsack",
  "id": "problem-29-01-knapsack",
  "level": 3
}, {
  "value": "Problem 30: Edit Distance (DP)",
  "id": "problem-30-edit-distance-dp",
  "level": 3
}, {
  "value": "Hard Problems (7)",
  "id": "hard-problems-7",
  "level": 2
}, {
  "value": "Problem 31: Burst Balloons",
  "id": "problem-31-burst-balloons",
  "level": 3
}, {
  "value": "Problem 32: Regular Expression Matching",
  "id": "problem-32-regular-expression-matching",
  "level": 3
}, {
  "value": "Problem 33: Distinct Subsequences",
  "id": "problem-33-distinct-subsequences",
  "level": 3
}, {
  "value": "Problem 34: Best Time to Buy and Sell Stock IV",
  "id": "problem-34-best-time-to-buy-and-sell-stock-iv",
  "level": 3
}, {
  "value": "Problem 35: Frog Jump",
  "id": "problem-35-frog-jump",
  "level": 3
}, {
  "value": "Summary Table",
  "id": "summary-table",
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
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
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
        id: "chapter-07-dynamic-programming",
        children: "Chapter 07: Dynamic Programming"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Dynamic Programming is the most important algorithmic technique for coding interviews. It involves breaking problems into overlapping subproblems, solving each once, and storing results. Master DP and you master interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize optimal substructure and overlapping subproblems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the art of defining states and recurrence relations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement both top-down (memoization) and bottom-up (tabulation) approaches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply space optimization techniques to reduce memory complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify DP patterns: 0/1 Knapsack, LCS, LIS, matrix chain, state machine"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-classification-flow",
      children: "Problem Classification Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[DP Problem] --> B{Type?}\r\n    B -->|Sequential| C{One array?}\r\n    C -->|Yes| D[1D DP: Fibonacci, House Robber]\r\n    C -->|No| E[2D DP: Edit Distance, LCS]\r\n    \r\n    B -->|Knapsack| F{Items duplicate?}\r\n    F -->|No| G[0/1 Knapsack]\r\n    F -->|Yes| H[Unbounded Knapsack]\r\n    \r\n    B -->|Interval| I[Matrix Chain / Burst Balloons]\r\n    B -->|Tree| J[Tree DP: Diameter, Cameras]\r\n    B -->|State Machine| K[Buy/Sell Stock with cooldown]\r\n    B -->|Digit| L[Digit DP: Count numbers with property]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dp-patterns-classification",
      children: "DP Patterns Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "mindmap\r\n  root((DP Patterns))\r\n    1D DP\r\n      Fibonacci\r\n      Climbing Stairs\r\n      House Robber\r\n      Decode Ways\r\n    2D Grid\r\n      Unique Paths\r\n      Min Path Sum\r\n      Dungeon Game\r\n    Subsequence\r\n      LIS → [\"O(n log n) possible\"]\r\n      LCS → 2D DP\r\n      Edit Distance → 2D DP\r\n    Knapsack\r\n      0/1 Knapsack\r\n      Partition Equal Subset Sum\r\n      Coin Change (unbounded)\r\n    String DP\r\n      Palindromic Substrings\r\n      Distinct Subsequences\r\n      Regular Expression\r\n    Interval DP\r\n      Matrix Chain\r\n      Burst Balloons\r\n      Palindrome Partitioning\r\n    State Machine\r\n      Stock Trading\r\n      House Robber II/III"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-heat-map",
      children: "Complexity Heat Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "xychart-beta\r\n    title \"DP Time Complexity by Pattern\"\r\n    x-axis [\"1D DP\", \"LIS\", \"LCS\", \"Knapsack\", \"Edit Distance\", \"Matrix Chain\"]\r\n    y-axis \"Time\" 0 --> 100\r\n    bar [15, 25, 60, 55, 60, 80]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-10",
      children: "Easy Problems (10)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-climbing-stairs",
      children: "Problem 1: Climbing Stairs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Math, Memoization]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fibonacci-style, Memoization (Top-Down)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(2^n), TLE at n ≥ 30\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/climbing-stairs/",
        children: "Climbing Stairs"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-4-fibonacci-number",
        children: "Fibonacci Number"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-5-min-cost-climbing-stairs",
        children: "Min Cost Climbing Stairs"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 2\r\nOutput: 2\r\nExplanation: 1+1, 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ n ≤ 45"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursion:"
        }), " fib(n) = fib(n-1) + fib(n-2) — but exponential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " Bottom-up with O(n) time, O(1) space."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function climbStairs(n: number): number {\r\n  if (n <= 2) return n;\r\n\r\n  let prev2 = 1;\r\n  let prev1 = 2;\r\n\r\n  for (let i = 3; i <= n; i++) {\r\n    const curr = prev1 + prev2;\r\n    prev2 = prev1;\r\n    prev1 = curr;\r\n  }\r\n\r\n  return prev1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(climbStairs(2)); // 2\r\nconsole.log(climbStairs(3)); // 3\r\nconsole.log(climbStairs(5)); // 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-house-robber",
      children: "Problem 2: House Robber"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " 1D DP, Fibonacci-style\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (rob every other house) — fails; skipping a house for a bigger neighbor needs DP\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/house-robber/",
        children: "House Robber"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-25-house-robber-ii",
        children: "House Robber II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-23-maximum-alternating-subsequence-sum",
        children: "Maximum Alternating Subsequence Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-20-maximum-product-subarray",
        children: "Maximum Product Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of money in houses, rob the maximum amount without robbing adjacent houses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 3, 1]\r\nOutput: 4\r\nExplanation: Rob house 1 (1) + house 3 (3) = 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nums.length ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function rob(nums: number[]): number {\r\n  if (nums.length === 1) return nums[0];\r\n\r\n  let prev2 = nums[0];\r\n  let prev1 = Math.max(nums[0], nums[1]);\r\n\r\n  for (let i = 2; i < nums.length; i++) {\r\n    const curr = Math.max(prev1, prev2 + nums[i]);\r\n    prev2 = prev1;\r\n    prev1 = curr;\r\n  }\r\n\r\n  return prev1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(rob([1, 2, 3, 1])); // 4\r\nconsole.log(rob([2, 7, 9, 3, 1])); // 12\r\nconsole.log(rob([5])); // 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-maximum-subarray-kadanes-algorithm",
      children: "Problem 3: Maximum Subarray (Kadane's Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [LinkedIn]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array, Divide and Conquer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " 1D DP (Kadane's), Greedy-as-alternative\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation (Kadane's) — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Divide and Conquer — O(n log n), correct but slower than Kadane\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-subarray/",
        children: "Maximum Subarray"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray (Kadane's Algorithm)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-20-maximum-product-subarray",
        children: "Maximum Product Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the contiguous subarray with the largest sum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\r\nOutput: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kadane's: dp[i] = max(nums[i], dp[i-1] + nums[i])"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxSubArray(nums: number[]): number {\r\n  let current = nums[0];\r\n  let maxVal = nums[0];\r\n\r\n  for (let i = 1; i < nums.length; i++) {\r\n    current = Math.max(nums[i], current + nums[i]);\r\n    maxVal = Math.max(maxVal, current);\r\n  }\r\n\r\n  return maxVal;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6\r\nconsole.log(maxSubArray([1])); // 1\r\nconsole.log(maxSubArray([-1])); // -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-fibonacci-number",
      children: "Problem 4: Fibonacci Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Math, Recursion]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fibonacci-style, Memoization (Top-Down)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(2^n), recomputes overlapping subproblems\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/fibonacci-number/",
        children: "Fibonacci Number"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-1-climbing-stairs",
        children: "Climbing Stairs"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-8-tribonacci-number",
        children: "Tribonacci Number"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the nth Fibonacci number."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 4\r\nOutput: 3 (0, 1, 1, 2, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fib(n: number): number {\r\n  if (n <= 1) return n;\r\n\r\n  let prev2 = 0;\r\n  let prev1 = 1;\r\n\r\n  for (let i = 2; i <= n; i++) {\r\n    const curr = prev1 + prev2;\r\n    prev2 = prev1;\r\n    prev1 = curr;\r\n  }\r\n\r\n  return prev1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(fib(2)); // 1\r\nconsole.log(fib(4)); // 3\r\nconsole.log(fib(10)); // 55\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-min-cost-climbing-stairs",
      children: "Problem 5: Min Cost Climbing Stairs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fibonacci-style, 1D DP\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (always take the cheaper immediate step) — fails; local choices ignore future costs\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/min-cost-climbing-stairs/",
        children: "Min Cost Climbing Stairs"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-1-climbing-stairs",
        children: "Climbing Stairs"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-18-decode-ways",
        children: "Decode Ways"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array where cost[i] is the cost of stepping on stair i, find the minimum cost to reach the top. You can start from step 0 or 1, and climb 1 or 2 steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: cost = [10, 15, 20]\r\nOutput: 15\r\nExplanation: Start at 1, pay 15, climb 2 to top.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minCostClimbingStairs(cost: number[]): number {\r\n  let prev2 = cost[0];\r\n  let prev1 = cost[1];\r\n\r\n  for (let i = 2; i < cost.length; i++) {\r\n    const curr = cost[i] + Math.min(prev1, prev2);\r\n    prev2 = prev1;\r\n    prev1 = curr;\r\n  }\r\n\r\n  return Math.min(prev1, prev2);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minCostClimbingStairs([10, 15, 20])); // 15\r\nconsole.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-pascals-triangle",
      children: "Problem 6: Pascal's Triangle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Tabulation (Bottom-Up), Grid DP\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n²) time, O(n²) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Combinatorics per cell (nCr) — O(n²) factorial computations with overflow risk\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/pascals-triangle/",
        children: "Pascal's Triangle"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-14-unique-paths",
        children: "Unique Paths"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-12-product-of-array-except-self",
        children: "Product of Array Except Self"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Generate the first numRows of Pascal's triangle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: numRows = 5\r\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function generate(numRows: number): number[][] {\r\n  const result: number[][] = [];\r\n\r\n  for (let i = 0; i < numRows; i++) {\r\n    const row: number[] = new Array(i + 1).fill(1);\r\n    for (let j = 1; j < i; j++) {\r\n      row[j] = result[i - 1][j - 1] + result[i - 1][j];\r\n    }\r\n    result.push(row);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(generate(5));\r\n// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n²)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-divisor-game",
      children: "Problem 7: Divisor Game"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Math]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Math Insight, Fibonacci-style (game DP)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Math shortcut (even n always wins) — O(1) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Full game DP — O(n²) time, O(n) space; overkill when the parity insight exists\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/divisor-game/",
        children: "Divisor Game"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-4-fibonacci-number",
        children: "Fibonacci Number"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-6-missing-number",
        children: "Missing Number"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Alice and Bob take turns. On each turn, choose x where 0 < x < n and n % x == 0, replace n with n - x. If a player cannot move, they lose. Alice starts. Return true if she wins with optimal play."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 2\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mathematical insight: even numbers always win (dp[n] = !dp[n-1] or just n % 2 === 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or DP: dp[i] = any j where i % j == 0 and !dp[i - j]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function divisorGame(n: number): boolean {\r\n  return n % 2 === 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(divisorGame(2)); // true\r\nconsole.log(divisorGame(3)); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(1)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-tribonacci-number",
      children: "Problem 8: Tribonacci Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Math]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fibonacci-style\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(3^n), TLE at n ≥ 30\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/n-th-tribonacci-number/",
        children: "N-th Tribonacci Number"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-4-fibonacci-number",
        children: "Fibonacci Number"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-1-climbing-stairs",
        children: "Climbing Stairs"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " T₀ = 0, T₁ = 1, T₂ = 1, Tₙ = Tₙ₋₁ + Tₙ₋₂ + Tₙ₋₃. Return Tₙ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 4\r\nOutput: 4\r\nExplanation: 0,1,1,2,4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function tribonacci(n: number): number {\r\n  if (n === 0) return 0;\r\n  if (n <= 2) return 1;\r\n\r\n  let t0 = 0, t1 = 1, t2 = 1;\r\n  for (let i = 3; i <= n; i++) {\r\n    const curr = t0 + t1 + t2;\r\n    t0 = t1;\r\n    t1 = t2;\r\n    t2 = curr;\r\n  }\r\n  return t2;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(tribonacci(4)); // 4\r\nconsole.log(tribonacci(25)); // 1389537\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-maximum-product-of-three-numbers",
      children: "Problem 9: Maximum Product of Three Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Array, Math]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting, Greedy-as-alternative\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort and check two candidates — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute-force triple loop — O(n³), TLE at n ≥ 1000\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
        children: "Maximum Product of Three Numbers"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-20-maximum-product-subarray",
        children: "Maximum Product Subarray"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray (Kadane's Algorithm)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the maximum product of any three numbers from the array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 3]\r\nOutput: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort or track 3 max and 2 min (for negative * negative)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maximumProduct(nums: number[]): number {\r\n  nums.sort((a, b) => a - b);\r\n  const n = nums.length;\r\n  return Math.max(\r\n    nums[n - 1] * nums[n - 2] * nums[n - 3],\r\n    nums[0] * nums[1] * nums[n - 1]\r\n  );\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maximumProduct([1, 2, 3])); // 6\r\nconsole.log(maximumProduct([-100, -98, 1, 2, 3, 4])); // 39200\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-counting-bits",
      children: "Problem 10: Counting Bits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Bit Manipulation]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Tabulation (Bottom-Up), Bit Manipulation\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " DP recurrence ans[i] = ans[i >> 1] + (i & 1) — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Popcount per number — O(n log n), recomputes bits from scratch\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/counting-bits/",
        children: "Counting Bits"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-4-fibonacci-number",
        children: "Fibonacci Number"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-8-single-number",
        children: "Single Number"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n, return an array of length n+1 where ans[i] is the number of 1 bits in binary representation of i."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 2\r\nOutput: [0, 1, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DP: ans[i] = ans[i >> 1] + (i & 1). Or ans[i] = ans[i & (i-1)] + 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countBits(n: number): number[] {\r\n  const ans = new Array(n + 1).fill(0);\r\n\r\n  for (let i = 1; i <= n; i++) {\r\n    ans[i] = ans[i >> 1] + (i & 1);\r\n  }\r\n\r\n  return ans;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(countBits(2)); // [0, 1, 1]\r\nconsole.log(countBits(5)); // [0, 1, 1, 2, 1, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-18",
      children: "Medium Problems (18)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-coin-change",
      children: "Problem 11: Coin Change"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, BFS, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Unbounded Knapsack, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n × amount) time, O(amount) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (largest coin first) — fails: coins [1, 3, 4], amount 6 → 3 coins (4+1+1) vs optimal 2 (3+3)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/coin-change/",
        children: "Coin Change"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-24-coin-change-ii",
        children: "Coin Change II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given coins of different denominations and a total amount, return the fewest coins needed to make that amount. Return -1 if impossible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: coins = [1, 2, 5], amount = 11\r\nOutput: 3 (5 + 5 + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ coins.length ≤ 12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ amount ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function coinChange(coins: number[], amount: number): number {\r\n  const dp = new Array(amount + 1).fill(Infinity);\r\n  dp[0] = 0;\r\n\r\n  for (let i = 1; i <= amount; i++) {\r\n    for (const coin of coins) {\r\n      if (coin <= i) {\r\n        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);\r\n      }\r\n    }\r\n  }\r\n\r\n  return dp[amount] === Infinity ? -1 : dp[amount];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(coinChange([1, 2, 5], 11)); // 3\r\nconsole.log(coinChange([2], 3)); // -1\r\nconsole.log(coinChange([1], 0)); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n × amount)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(amount)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-longest-increasing-subsequence",
      children: "Problem 12: Longest Increasing Subsequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Binary Search]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " LIS, Tabulation (Bottom-Up), Binary Search\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Patience sorting (tails + binary search) — O(n log n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " O(n²) tabulation — correct but TLE at n ≥ 10⁵\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/longest-increasing-subsequence/",
        children: "Longest Increasing Subsequence"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-13-longest-common-subsequence",
        children: "Longest Common Subsequence"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-30-count-of-smaller-numbers-after-self",
        children: "Count of Smaller Numbers After Self"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the length of the longest strictly increasing subsequence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]\r\nOutput: 4 ([2, 3, 7, 101])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nums.length ≤ 2500"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " dp[i] = 1 + max(dp[j]) for j < i and nums[j] < nums[i]. O(n²)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Patience Sorting):"
        }), " Maintain tails array, binary search. O(n log n)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lengthOfLIS(nums: number[]): number {\r\n  const tails: number[] = [];\r\n\r\n  for (const num of nums) {\r\n    let left = 0;\r\n    let right = tails.length;\r\n\r\n    while (left < right) {\r\n      const mid = Math.floor((left + right) / 2);\r\n      if (tails[mid] < num) {\r\n        left = mid + 1;\r\n      } else {\r\n        right = mid;\r\n      }\r\n    }\r\n\r\n    if (left === tails.length) {\r\n      tails.push(num);\r\n    } else {\r\n      tails[left] = num;\r\n    }\r\n  }\r\n\r\n  return tails.length;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4\r\nconsole.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4\r\nconsole.log(lengthOfLIS([7, 7, 7, 7])); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-longest-common-subsequence",
      children: "Problem 13: Longest Common Subsequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " LCS / String DP, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation — O(m × n) time, O(min(m, n)) space (rolling rows)\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(2^(m+n)), TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/longest-common-subsequence/",
        children: "Longest Common Subsequence"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-30-edit-distance-dp",
        children: "Edit Distance"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-26-longest-palindromic-substring-dp",
        children: "Longest Palindromic Substring"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-22-edit-distance",
        children: "Edit Distance"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings, find the length of their longest common subsequence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: text1 = \"abcde\", text2 = \"ace\"\r\nOutput: 3 (\"ace\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ text1.length, text2.length ≤ 1000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestCommonSubsequence(text1: string, text2: string): number {\r\n  const m = text1.length;\r\n  const n = text2.length;\r\n  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\r\n\r\n  for (let i = 1; i <= m; i++) {\r\n    for (let j = 1; j <= n; j++) {\r\n      if (text1[i - 1] === text2[j - 1]) {\r\n        dp[i][j] = dp[i - 1][j - 1] + 1;\r\n      } else {\r\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\r\n      }\r\n    }\r\n  }\r\n\r\n  return dp[m][n];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(longestCommonSubsequence(\"abcde\", \"ace\")); // 3\r\nconsole.log(longestCommonSubsequence(\"abc\", \"abc\")); // 3\r\nconsole.log(longestCommonSubsequence(\"abc\", \"def\")); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m × n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-unique-paths",
      children: "Problem 14: Unique Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Math, Combinatorics]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Grid DP, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 1D rolling Tabulation — O(m × n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursive DFS — O(2^(m+n)), TLE at m, n ≥ 30\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/unique-paths/",
        children: "Unique Paths"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-15-unique-paths-ii",
        children: "Unique Paths II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-21-minimum-path-sum",
        children: "Minimum Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-19-shortest-path-in-binary-matrix",
        children: "Shortest Path in Binary Matrix"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A robot is at top-left of an m×n grid. It can only move down or right. How many unique paths to bottom-right?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: m = 3, n = 7\r\nOutput: 28\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ m, n ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " dp[i][j] = dp[i-1][j] + dp[i][j-1]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Math:"
        }), " C(m+n-2, m-1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function uniquePaths(m: number, n: number): number {\r\n  const dp: number[] = new Array(n).fill(1);\r\n\r\n  for (let i = 1; i < m; i++) {\r\n    for (let j = 1; j < n; j++) {\r\n      dp[j] += dp[j - 1];\r\n    }\r\n  }\r\n\r\n  return dp[n - 1];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(uniquePaths(3, 7)); // 28\r\nconsole.log(uniquePaths(3, 2)); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-unique-paths-ii",
      children: "Problem 15: Unique Paths II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Matrix]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Grid DP, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 1D rolling Tabulation — O(m × n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursive DFS without memoization — O(2^(m+n)), TLE with obstacles\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/unique-paths-ii/",
        children: "Unique Paths II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-14-unique-paths",
        children: "Unique Paths"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-21-minimum-path-sum",
        children: "Minimum Path Sum"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Same as Unique Paths but with obstacles (1 = obstacle)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]\r\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function uniquePathsWithObstacles(obstacleGrid: number[][]): number {\r\n  const m = obstacleGrid.length;\r\n  const n = obstacleGrid[0].length;\r\n  const dp = new Array(n).fill(0);\r\n  dp[0] = 1 - obstacleGrid[0][0];\r\n\r\n  for (let i = 0; i < m; i++) {\r\n    for (let j = 0; j < n; j++) {\r\n      if (obstacleGrid[i][j] === 1) {\r\n        dp[j] = 0;\r\n      } else if (j > 0) {\r\n        dp[j] += dp[j - 1];\r\n      }\r\n    }\r\n  }\r\n\r\n  return dp[n - 1];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 2\r\nconsole.log(uniquePathsWithObstacles([[0,1],[0,0]])); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-jump-game",
      children: "Problem 16: Jump Game"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Greedy, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy-as-alternative, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Greedy (max reach) — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " 1D DP — O(n²) time, O(n) space; correct but slower than greedy\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/jump-game/",
        children: "Jump Game"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-16-jump-game-greedy",
        children: "Jump Game (Greedy)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-24-jump-game-ii",
        children: "Jump Game II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array where nums[i] is max jump length, determine if you can reach the last index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [2, 3, 1, 1, 4]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " dp[i] = true if any dp[j] where j + nums[j] >= i."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greedy:"
        }), " Track max reachable index."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function canJump(nums: number[]): boolean {\r\n  let maxReach = 0;\r\n\r\n  for (let i = 0; i < nums.length; i++) {\r\n    if (i > maxReach) return false;\r\n    maxReach = Math.max(maxReach, i + nums[i]);\r\n    if (maxReach >= nums.length - 1) return true;\r\n  }\r\n\r\n  return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canJump([2, 3, 1, 1, 4])); // true\r\nconsole.log(canJump([3, 2, 1, 0, 4])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-word-break",
      children: "Problem 17: Word Break"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Trie, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, Tabulation (Bottom-Up), Memoization (Top-Down)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n² × m) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking without memoization — O(2^n) segmentations, TLE at n = 300\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/word-break/",
        children: "Word Break"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-18-decode-ways",
        children: "Decode Ways"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/09-backtracking#problem-11-palindrome-partitioning",
        children: "Palindrome Partitioning"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s and a dictionary of words, return true if s can be segmented into dictionary words."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"leetcode\", wordDict = [\"leet\", \"code\"]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 300"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function wordBreak(s: string, wordDict: string[]): boolean {\r\n  const wordSet = new Set(wordDict);\r\n  const dp = new Array(s.length + 1).fill(false);\r\n  dp[0] = true;\r\n\r\n  for (let i = 1; i <= s.length; i++) {\r\n    for (let j = 0; j < i; j++) {\r\n      if (dp[j] && wordSet.has(s.substring(j, i))) {\r\n        dp[i] = true;\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  return dp[s.length];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(wordBreak(\"leetcode\", [\"leet\", \"code\"])); // true\r\nconsole.log(wordBreak(\"applepenapple\", [\"apple\", \"pen\"])); // true\r\nconsole.log(wordBreak(\"catsandog\", [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n² × m) where m = max word length\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-decode-ways",
      children: "Problem 18: Decode Ways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, Fibonacci-style\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(2^n), TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/decode-ways/",
        children: "Decode Ways"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-1-climbing-stairs",
        children: "Climbing Stairs"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-17-word-break",
        children: "Word Break"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A message containing A-Z can be encoded to numbers ('A' → 1 ... 'Z' → 26). Count the number of ways to decode a digit string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"226\"\r\nOutput: 3 (BZ, VF, BBF)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function numDecodings(s: string): number {\r\n  if (!s || s[0] === '0') return 0;\r\n\r\n  const n = s.length;\r\n  const dp = new Array(n + 1).fill(0);\r\n  dp[0] = 1;\r\n  dp[1] = 1;\r\n\r\n  for (let i = 2; i <= n; i++) {\r\n    const oneDigit = parseInt(s.substring(i - 1, i));\r\n    const twoDigits = parseInt(s.substring(i - 2, i));\r\n\r\n    if (oneDigit >= 1) dp[i] += dp[i - 1];\r\n    if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];\r\n  }\r\n\r\n  return dp[n];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(numDecodings(\"12\")); // 2\r\nconsole.log(numDecodings(\"226\")); // 3\r\nconsole.log(numDecodings(\"06\")); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-19-target-sum",
      children: "Problem 19: Target Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, DFS, Memoization]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Knapsack (0/1), Memoization (Top-Down)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 0/1 Knapsack Tabulation (subset-sum transform) — O(n × sum) time, O(sum) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS without memoization — O(2^n), TLE at n ≥ 20\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/target-sum/",
        children: "Target Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-20-partition-equal-subset-sum",
        children: "Partition Equal Subset Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of integers and a target, assign + or - signs to each element to reach the target sum. Count number of such assignments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 1, 1, 1, 1], target = 3\r\nOutput: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert to subset sum: sum(P) - sum(N) = target → sum(P) = (target + totalSum) / 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findTargetSumWays(nums: number[], target: number): number {\r\n  const totalSum = nums.reduce((s, n) => s + n, 0);\r\n\r\n  if (Math.abs(target) > totalSum || (totalSum + target) % 2 !== 0) return 0;\r\n\r\n  const sum = (totalSum + target) / 2;\r\n  const dp = new Array(sum + 1).fill(0);\r\n  dp[0] = 1;\r\n\r\n  for (const num of nums) {\r\n    for (let s = sum; s >= num; s--) {\r\n      dp[s] += dp[s - num];\r\n    }\r\n  }\r\n\r\n  return dp[sum];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5\r\nconsole.log(findTargetSumWays([1], 1)); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n × sum)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(sum)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-20-partition-equal-subset-sum",
      children: "Problem 20: Partition Equal Subset Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Knapsack (0/1), Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 0/1 Knapsack Tabulation — O(n × target) time, O(target) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (sort and assign largest first) — fails: [1, 5, 11, 5] needs subset choice, not greedy pairing\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/partition-equal-subset-sum/",
        children: "Partition Equal Subset Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-19-target-sum",
        children: "Target Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array, return true if it can be partitioned into two subsets with equal sum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 5, 11, 5]\r\nOutput: true ([1, 5, 5] and [11])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nums.length ≤ 200"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function canPartition(nums: number[]): boolean {\r\n  const total = nums.reduce((s, n) => s + n, 0);\r\n  if (total % 2 !== 0) return false;\r\n\r\n  const target = total / 2;\r\n  const dp = new Array(target + 1).fill(false);\r\n  dp[0] = true;\r\n\r\n  for (const num of nums) {\r\n    for (let s = target; s >= num; s--) {\r\n      if (dp[s - num]) dp[s] = true;\r\n    }\r\n  }\r\n\r\n  return dp[target];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canPartition([1, 5, 11, 5])); // true\r\nconsole.log(canPartition([1, 2, 3, 5])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n × target)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(target)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-21-minimum-path-sum",
      children: "Problem 21: Minimum Path Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Grid]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Grid DP, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 1D rolling Tabulation — O(m × n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursive DFS — O(2^(m+n)) paths, TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-path-sum/",
        children: "Minimum Path Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-14-unique-paths",
        children: "Unique Paths"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-15-unique-paths-ii",
        children: "Unique Paths II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the minimum path sum from top-left to bottom-right, moving only down or right."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: grid = [[1,3,1],[1,5,1],[4,2,1]]\r\nOutput: 7 (1→3→1→1→1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minPathSum(grid: number[][]): number {\r\n  const m = grid.length;\r\n  const n = grid[0].length;\r\n  const dp = [...grid[0]];\r\n\r\n  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\r\n\r\n  for (let i = 1; i < m; i++) {\r\n    dp[0] += grid[i][0];\r\n    for (let j = 1; j < n; j++) {\r\n      dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);\r\n    }\r\n  }\r\n\r\n  return dp[n - 1];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7\r\nconsole.log(minPathSum([[1,2,3],[4,5,6]])); // 12\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-22-maximum-length-of-repeated-subarray",
      children: "Problem 22: Maximum Length of Repeated Subarray"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array, Binary Search]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " LCS / String DP (longest common substring), Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation — O(m × n) time, O(min(m, n)) space (rolling rows)\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force all start pairs — O(m × n × min(m, n)), TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
        children: "Maximum Length of Repeated Subarray"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-13-longest-common-subsequence",
        children: "Longest Common Subsequence"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-22-edit-distance",
        children: "Edit Distance"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the maximum length of a subarray that appears in both arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7]\r\nOutput: 3 ([3, 2, 1])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findLength(nums1: number[], nums2: number[]): number {\r\n  const m = nums1.length;\r\n  const n = nums2.length;\r\n  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\r\n  let maxLen = 0;\r\n\r\n  for (let i = 1; i <= m; i++) {\r\n    for (let j = 1; j <= n; j++) {\r\n      if (nums1[i - 1] === nums2[j - 1]) {\r\n        dp[i][j] = dp[i - 1][j - 1] + 1;\r\n        maxLen = Math.max(maxLen, dp[i][j]);\r\n      }\r\n    }\r\n  }\r\n\r\n  return maxLen;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m × n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-23-maximum-alternating-subsequence-sum",
      children: "Problem 23: Maximum Alternating Subsequence Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " State Machine, 1D DP\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " State-machine Tabulation (even/odd) — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " O(n²) subsequence DP — correct but slow; state machine collapses it to O(n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-alternating-subsequence-sum/",
        children: "Maximum Alternating Subsequence Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-28-best-time-to-buy-and-sell-stock-with-cooldown",
        children: "Best Time to Buy and Sell Stock with Cooldown"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-3-best-time-to-buy-and-sell-stock-ii",
        children: "Best Time to Buy and Sell Stock II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the maximum sum of an alternating subsequence (a[index] - a[index+1] + a[index+2] - ...)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [4, 2, 5, 3]\r\nOutput: 7 (4 - 2 + 5 = 7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxAlternatingSum(nums: number[]): number {\r\n  let even = nums[0];\r\n  let odd = 0;\r\n\r\n  for (let i = 1; i < nums.length; i++) {\r\n    even = Math.max(even, odd + nums[i]);\r\n    odd = Math.max(odd, even - nums[i]);\r\n  }\r\n\r\n  return even;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxAlternatingSum([4, 2, 5, 3])); // 7\r\nconsole.log(maxAlternatingSum([5, 6, 7, 8])); // 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-24-coin-change-ii",
      children: "Problem 24: Coin Change II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Unbounded Knapsack, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Unbounded Knapsack Tabulation (coin-outer loop) — O(n × amount) time, O(amount) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Coin Change I loop order (amount-outer) — counts permutations instead of combinations\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/coin-change-ii/",
        children: "Coin Change II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-11-coin-change",
        children: "Coin Change"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count the number of combinations that make up a given amount."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: amount = 5, coins = [1, 2, 5]\r\nOutput: 4 (5, 2+2+1, 2+1+1+1, 1+1+1+1+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function change(amount: number, coins: number[]): number {\r\n  const dp = new Array(amount + 1).fill(0);\r\n  dp[0] = 1;\r\n\r\n  for (const coin of coins) {\r\n    for (let i = coin; i <= amount; i++) {\r\n      dp[i] += dp[i - coin];\r\n    }\r\n  }\r\n\r\n  return dp[amount];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(change(5, [1, 2, 5])); // 4\r\nconsole.log(change(3, [2])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n × amount)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(amount)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-25-house-robber-ii",
      children: "Problem 25: House Robber II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " 1D DP, State Machine (circular), Fibonacci-style\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation on two ranges — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy — fails; circular adjacency breaks local choices, needs DP on both slices\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/house-robber-ii/",
        children: "House Robber II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-2-house-robber",
        children: "House Robber"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-23-maximum-alternating-subsequence-sum",
        children: "Maximum Alternating Subsequence Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-20-maximum-product-subarray",
        children: "Maximum Product Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Houses are arranged in a circle. You cannot rob adjacent houses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [2, 3, 2]\r\nOutput: 3\r\nExplanation: Rob house 1 (3) only.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function robII(nums: number[]): number {\r\n  if (nums.length === 1) return nums[0];\r\n\r\n  const robRange = (start: number, end: number): number => {\r\n    let prev2 = 0, prev1 = 0;\r\n    for (let i = start; i <= end; i++) {\r\n      const curr = Math.max(prev1, prev2 + nums[i]);\r\n      prev2 = prev1;\r\n      prev1 = curr;\r\n    }\r\n    return prev1;\r\n  };\r\n\r\n  return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(robII([2, 3, 2])); // 3\r\nconsole.log(robII([1, 2, 3, 1])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-26-longest-palindromic-substring-dp",
      children: "Problem 26: Longest Palindromic Substring (DP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, Matrix DP (interval), Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Tabulation (interval) — O(n²) time, O(n²) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force all substrings + palindrome check — O(n³), TLE at n ≥ 5000\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/longest-palindromic-substring/",
        children: "Longest Palindromic Substring"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-10-longest-palindromic-substring",
        children: "Longest Palindromic Substring"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-15-palindromic-substrings",
        children: "Palindromic Substrings"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the longest palindromic substring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"babad\"\r\nOutput: \"bab\" or \"aba\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach (DP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dp[i][j] = true if s[i..j] is palindrome. dp[i][j] = s[i]==s[j] && (j-i<3 || dp[i+1][j-1])."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestPalindrome(s: string): string {\r\n  const n = s.length;\r\n  const dp: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));\r\n  let start = 0;\r\n  let maxLen = 1;\r\n\r\n  for (let i = 0; i < n; i++) dp[i][i] = true;\r\n\r\n  for (let len = 2; len <= n; len++) {\r\n    for (let i = 0; i <= n - len; i++) {\r\n      const j = i + len - 1;\r\n      if (s[i] === s[j] && (len <= 2 || dp[i + 1][j - 1])) {\r\n        dp[i][j] = true;\r\n        if (len > maxLen) {\r\n          maxLen = len;\r\n          start = i;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return s.substring(start, start + maxLen);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(longestPalindrome(\"babad\")); // \"bab\" or \"aba\"\r\nconsole.log(longestPalindrome(\"cbbd\")); // \"bb\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n²)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-27-longest-increasing-path-in-a-matrix-dp",
      children: "Problem 27: Longest Increasing Path in a Matrix (DP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, DFS, Memoization, Graph]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Matrix DP, Memoization (Top-Down), DFS\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " DFS + Memoization — O(m × n) time, O(m × n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Plain DFS without memoization — O(4^(m×n)) worst case, TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
        children: "Longest Increasing Path in a Matrix"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-24-longest-increasing-path-in-a-matrix",
        children: "Longest Increasing Path in a Matrix"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-12-longest-increasing-subsequence",
        children: "Longest Increasing Subsequence"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the length of the longest increasing path in a matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Located in Graphs chapter, Problem 24. DP solution uses memoization.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-28-best-time-to-buy-and-sell-stock-with-cooldown",
      children: "Problem 28: Best Time to Buy and Sell Stock with Cooldown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, State Machine, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " State Machine, 1D DP\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " State-machine Tabulation (sold/held/cooled) — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (sell on every rise) — violates the cooldown constraint, needs state tracking\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
        children: "Best Time to Buy and Sell Stock with Cooldown"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-34-best-time-to-buy-and-sell-stock-iv",
        children: "Best Time to Buy and Sell Stock IV"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-2-best-time-to-buy-and-sell-stock",
        children: "Best Time to Buy and Sell Stock"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-3-best-time-to-buy-and-sell-stock-ii",
        children: "Best Time to Buy and Sell Stock II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " You can complete unlimited transactions, but after selling you must wait one day before buying again."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: prices = [1, 2, 3, 0, 2]\r\nOutput: 3 (buy@1, sell@2, cool, buy@0, sell@2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxProfitCooldown(prices: number[]): number {\r\n  let sold = 0, held = -Infinity, cooled = 0;\r\n\r\n  for (const price of prices) {\r\n    const prevSold = sold;\r\n    sold = held + price;\r\n    held = Math.max(held, cooled - price);\r\n    cooled = Math.max(cooled, prevSold);\r\n  }\r\n\r\n  return Math.max(sold, cooled);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxProfitCooldown([1, 2, 3, 0, 2])); // 3\r\nconsole.log(maxProfitCooldown([1])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-29-01-knapsack",
      children: "Problem 29: 0/1 Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Knapsack (0/1), Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 0/1 Knapsack Tabulation (reverse loop) — O(n × capacity) time, O(capacity) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy by value/weight ratio — fails; items can't be split, ratio ranking misses optimal combos\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " No direct LC equivalent — see Related links\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-20-partition-equal-subset-sum",
        children: "Partition Equal Subset Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-19-target-sum",
        children: "Target Sum"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given weights and values of n items, and a knapsack capacity, find the maximum value you can fit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: weights = [1, 3, 4, 5], values = [1, 4, 5, 7], capacity = 7\r\nOutput: 9 (items with weights 1+5=6, values 1+7=8? Actually optimal: 3+4=7, values 4+5=9)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function knapsack(weights: number[], values: number[], capacity: number): number {\r\n  const n = weights.length;\r\n  const dp = new Array(capacity + 1).fill(0);\r\n\r\n  for (let i = 0; i < n; i++) {\r\n    for (let w = capacity; w >= weights[i]; w--) {\r\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\r\n    }\r\n  }\r\n\r\n  return dp[capacity];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7)); // 9\r\nconsole.log(knapsack([2, 3, 5, 7], [1, 4, 5, 7], 10)); // 12\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n × capacity)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(capacity)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-30-edit-distance-dp",
      children: "Problem 30: Edit Distance (DP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, LCS-family, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation — O(m × n) time, O(min(m, n)) space (rolling rows)\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursion without memoization — O(3^(m+n)), TLE\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/edit-distance/",
        children: "Edit Distance"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-22-edit-distance",
        children: "Edit Distance"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-13-longest-common-subsequence",
        children: "Longest Common Subsequence"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings, find the minimum number of operations (insert, delete, replace) to convert one to the other."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Also listed in Strings chapter, Problem 22.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-7",
      children: "Hard Problems (7)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-31-burst-balloons",
      children: "Problem 31: Burst Balloons"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Divide and Conquer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Partition DP, Interval DP, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Interval DP on the last balloon burst — O(n³) time, O(n²) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (burst smallest balloon first) — fails; burst order interacts, needs interval DP\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/burst-balloons/",
        children: "Burst Balloons"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-26-longest-palindromic-substring-dp",
        children: "Longest Palindromic Substring"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/09-backtracking#problem-11-palindrome-partitioning",
        children: "Palindrome Partitioning"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n balloons (each with a coin value), bursting balloon i earns nums[i-1] * nums[i] * nums[i+1]. Find the maximum coins you can collect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [3, 1, 5, 8]\r\nOutput: 167\r\nExplanation: nums = [3,1,5,8] → [3,5,8] → [3,8] → [8] → []. Coins: 3*1*5 + 3*5*8 + 3*8*1 + 1*8*1 = 167\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ n ≤ 300"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxCoins(nums: number[]): number {\r\n  const n = nums.length;\r\n  const arr = [1, ...nums, 1];\r\n  const dp: number[][] = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));\r\n\r\n  for (let len = 1; len <= n; len++) {\r\n    for (let left = 1; left <= n - len + 1; left++) {\r\n      const right = left + len - 1;\r\n      for (let last = left; last <= right; last++) {\r\n        const coins = arr[left - 1] * arr[last] * arr[right + 1];\r\n        dp[left][right] = Math.max(\r\n          dp[left][right],\r\n          coins + dp[left][last - 1] + dp[last + 1][right]\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  return dp[1][n];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxCoins([3, 1, 5, 8])); // 167\r\nconsole.log(maxCoins([1, 5])); // 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n³)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n²)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-32-regular-expression-matching",
      children: "Problem 32: Regular Expression Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String, Backtracking]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, Tabulation (Bottom-Up), Memoization (Top-Down)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation — O(m × n) time, O(m × n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking without memoization — O(2^(m+n)); 'x*' branches explode on repeated patterns\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/regular-expression-matching/",
        children: "Regular Expression Matching"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-21-regular-expression-matching",
        children: "Regular Expression Matching"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-33-distinct-subsequences",
        children: "Distinct Subsequences"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement regex matching with '.' and '*'."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Detailed solution in Strings chapter, Problem 21.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-33-distinct-subsequences",
      children: "Problem 33: Distinct Subsequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " String DP, LCS-family, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation — O(m × n) time, O(n) space (rolling rows)\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Enumerate all subsequences — O(2^m), TLE at m ≥ 20\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/distinct-subsequences/",
        children: "Distinct Subsequences"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-13-longest-common-subsequence",
        children: "Longest Common Subsequence"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-23-distinct-subsequences",
        children: "Distinct Subsequences"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-30-edit-distance-dp",
        children: "Edit Distance"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count the number of distinct subsequences of s that equal t."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Detailed solution in Strings chapter, Problem 23.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-34-best-time-to-buy-and-sell-stock-iv",
      children: "Problem 34: Best Time to Buy and Sell Stock IV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Array, State Machine]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " State Machine, Tabulation (Bottom-Up)\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " 2D Tabulation (k × n) — O(k × n) time, O(k × n) space; greedy fallback when k ≥ n/2\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking over buy/sell states without memoization — O(2^n) paths, TLE at n ≥ 30\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
        children: "Best Time to Buy and Sell Stock IV"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-28-best-time-to-buy-and-sell-stock-with-cooldown",
        children: "Best Time to Buy and Sell Stock with Cooldown"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-2-best-time-to-buy-and-sell-stock",
        children: "Best Time to Buy and Sell Stock"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-3-best-time-to-buy-and-sell-stock-ii",
        children: "Best Time to Buy and Sell Stock II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " You can complete at most k transactions. Find maximum profit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: k = 2, prices = [3, 2, 6, 5, 0, 3]\r\nOutput: 7 (buy@2, sell@6, buy@0, sell@3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxProfitIV(k: number, prices: number[]): number {\r\n  const n = prices.length;\r\n  if (k >= n / 2) {\r\n    let profit = 0;\r\n    for (let i = 1; i < n; i++) {\r\n      if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\r\n    }\r\n    return profit;\r\n  }\r\n\r\n  const dp: number[][] = Array.from({ length: k + 1 }, () => new Array(n).fill(0));\r\n\r\n  for (let t = 1; t <= k; t++) {\r\n    let maxDiff = -prices[0];\r\n    for (let d = 1; d < n; d++) {\r\n      dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxDiff);\r\n      maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);\r\n    }\r\n  }\r\n\r\n  return dp[k][n - 1];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxProfitIV(2, [3, 2, 6, 5, 0, 3])); // 7\r\nconsole.log(maxProfitIV(2, [2, 4, 1])); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(k × n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(k × n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-35-frog-jump",
      children: "Problem 35: Frog Jump"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [DP, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Memoization (Top-Down), Hash Map DP\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " DFS + memo (stone → reachable jump sizes) — O(n²) time, O(n²) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Greedy (always jump the max) — fails; must explore k-1, k, k+1 from every stone\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/frog-jump/",
        children: "Frog Jump"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-24-jump-game-ii",
        children: "Jump Game II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-1-climbing-stairs",
        children: "Climbing Stairs"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A frog starts at stone 0 and can jump k units. After jumping k units, it can jump k-1, k, or k+1 units. Determine if it can reach the last stone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: stones = [0, 1, 3, 5, 6, 8, 12, 17]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function canCross(stones: number[]): boolean {\r\n  const map = new Map<number, Set<number>>();\r\n  for (const stone of stones) map.set(stone, new Set());\r\n  map.get(0)!.add(0);\r\n\r\n  for (const stone of stones) {\r\n    for (const jump of map.get(stone)!) {\r\n      for (const nextJump of [jump - 1, jump, jump + 1]) {\r\n        if (nextJump > 0 && map.has(stone + nextJump)) {\r\n          map.get(stone + nextJump)!.add(nextJump);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return map.get(stones[stones.length - 1])!.size > 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17])); // true\r\nconsole.log(canCross([0, 1, 2, 3, 4, 8, 9, 11])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n²)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Companies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Climbing Stairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "House Robber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum Subarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci Number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min Cost Climbing Stairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pascal's Triangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisor Game"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tribonacci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Product of Three"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×amt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(amt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Increasing Subseq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Common Subseq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique Paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique Paths II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump Game"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word Break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²×m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decode Ways"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×sum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(sum)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition Equal Subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×target)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(target)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Path Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Length Repeated Subarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Alternating Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×amt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(amt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "House Robber II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Palindromic Substr (DP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Increasing Path Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock with Cooldown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×cap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(cap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burst Balloons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinct Subsequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best Time to Buy/Sell IV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k×n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frog Jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        })]
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



/***/ }

}]);