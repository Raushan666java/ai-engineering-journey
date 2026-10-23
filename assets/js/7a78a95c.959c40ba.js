"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[676],{

/***/ 7518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_08_greedy_md_7a7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-08-greedy-md-7a7.json
const site_docs_courses_coding_problems_08_greedy_md_7a7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/08-greedy","title":"Chapter 08: Greedy Algorithms","description":"Greedy algorithms make locally optimal choices at each step, hoping to reach a globally optimal solution. Not all problems can be solved greedily, but when they can, greedy solutions are often the most efficient.","source":"@site/docs/courses/coding-problems/08-greedy.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/08-greedy","permalink":"/ai-engineering-journey/coding-problems/08-greedy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-greedy","slug":"/coding-problems/08-greedy","title":"Chapter 08: Greedy Algorithms","sidebar_label":"Chapter 08: Greedy Algorithms","sidebar_position":8},"sidebar":"course-coding-problems","previous":{"title":"Chapter 07: Dynamic Programming","permalink":"/ai-engineering-journey/coding-problems/07-dynamic-programming"},"next":{"title":"Chapter 09: Backtracking","permalink":"/ai-engineering-journey/coding-problems/09-backtracking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/coding-problems/08-greedy.md


const frontMatter = {
	id: '08-greedy',
	slug: '/coding-problems/08-greedy',
	title: 'Chapter 08: Greedy Algorithms',
	sidebar_label: 'Chapter 08: Greedy Algorithms',
	sidebar_position: 8
};
const contentTitle = 'Chapter 08: Greedy Algorithms';

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
  "value": "Greedy Algorithm Patterns",
  "id": "greedy-algorithm-patterns",
  "level": 2
}, {
  "value": "Complexity Decision Tree",
  "id": "complexity-decision-tree",
  "level": 2
}, {
  "value": "Easy Problems (5)",
  "id": "easy-problems-5",
  "level": 2
}, {
  "value": "Problem 1: Assign Cookies",
  "id": "problem-1-assign-cookies",
  "level": 3
}, {
  "value": "Problem 2: Lemonade Change",
  "id": "problem-2-lemonade-change",
  "level": 3
}, {
  "value": "Problem 3: Best Time to Buy and Sell Stock II",
  "id": "problem-3-best-time-to-buy-and-sell-stock-ii",
  "level": 3
}, {
  "value": "Problem 4: Minimum Number of Arrows to Burst Balloons",
  "id": "problem-4-minimum-number-of-arrows-to-burst-balloons",
  "level": 3
}, {
  "value": "Problem 5: Maximum Units on a Truck",
  "id": "problem-5-maximum-units-on-a-truck",
  "level": 3
}, {
  "value": "Medium Problems (8)",
  "id": "medium-problems-8",
  "level": 2
}, {
  "value": "Problem 6: Activity Selection (Non-overlapping Intervals)",
  "id": "problem-6-activity-selection-non-overlapping-intervals",
  "level": 3
}, {
  "value": "Problem 7: Minimum Number of Platforms",
  "id": "problem-7-minimum-number-of-platforms",
  "level": 3
}, {
  "value": "Problem 8: Jump Game II",
  "id": "problem-8-jump-game-ii",
  "level": 3
}, {
  "value": "Problem 9: Gas Station",
  "id": "problem-9-gas-station",
  "level": 3
}, {
  "value": "Problem 10: Candy",
  "id": "problem-10-candy",
  "level": 3
}, {
  "value": "Problem 11: Queue Reconstruction by Height",
  "id": "problem-11-queue-reconstruction-by-height",
  "level": 3
}, {
  "value": "Problem 12: Task Scheduler",
  "id": "problem-12-task-scheduler",
  "level": 3
}, {
  "value": "Problem 13: Partition Labels",
  "id": "problem-13-partition-labels",
  "level": 3
}, {
  "value": "Hard Problems (2)",
  "id": "hard-problems-2",
  "level": 2
}, {
  "value": "Problem 14: Maximum Profit in Job Scheduling",
  "id": "problem-14-maximum-profit-in-job-scheduling",
  "level": 3
}, {
  "value": "Problem 15: Minimum Cost to Hire K Workers",
  "id": "problem-15-minimum-cost-to-hire-k-workers",
  "level": 3
}, {
  "value": "Additional Greedy Problems",
  "id": "additional-greedy-problems",
  "level": 3
}, {
  "value": "Problem 16: Jump Game (Greedy)",
  "id": "problem-16-jump-game-greedy",
  "level": 3
}, {
  "value": "Problem 17: Two City Scheduling",
  "id": "problem-17-two-city-scheduling",
  "level": 3
}, {
  "value": "Problem 18: Split Array into Consecutive Subsequences",
  "id": "problem-18-split-array-into-consecutive-subsequences",
  "level": 3
}, {
  "value": "Algorithm Comparison: Greedy vs DP",
  "id": "algorithm-comparison-greedy-vs-dp",
  "level": 3
}, {
  "value": "Practical Tips for Greedy Interviews",
  "id": "practical-tips-for-greedy-interviews",
  "level": 3
}, {
  "value": "Common Greedy Patterns Summary",
  "id": "common-greedy-patterns-summary",
  "level": 3
}, {
  "value": "Summary Table",
  "id": "summary-table",
  "level": 2
}, {
  "value": "How Greedy Algorithms Work",
  "id": "how-greedy-algorithms-work",
  "level": 2
}, {
  "value": "Proving Greedy Correctness",
  "id": "proving-greedy-correctness",
  "level": 3
}, {
  "value": "When to Use Greedy vs DP",
  "id": "when-to-use-greedy-vs-dp",
  "level": 3
}, {
  "value": "Common Mistakes to Avoid",
  "id": "common-mistakes-to-avoid",
  "level": 3
}, {
  "value": "Greedy Algorithm Design Template",
  "id": "greedy-algorithm-design-template",
  "level": 3
}, {
  "value": "Problem-Solving Strategy",
  "id": "problem-solving-strategy",
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
        id: "chapter-08-greedy-algorithms",
        children: "Chapter 08: Greedy Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Greedy algorithms make locally optimal choices at each step, hoping to reach a globally optimal solution. Not all problems can be solved greedily, but when they can, greedy solutions are often the most efficient."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the greedy choice property and optimal substructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize problems where greedy algorithms yield optimal solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement common greedy patterns: interval scheduling, Huffman coding, activity selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between greedy and DP: when to use each"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply exchange argument to prove correctness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-classification-flow",
      children: "Problem Classification Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Greedy Problem] --> B{Type?}\r\n    B -->|Interval| C[Schedule maximum non-overlapping intervals]\r\n    B -->|Optimization| D{Resource allocation?}\r\n    D -->|Yes| E[Minimum platforms / rooms]\r\n    D -->|No| F[Fractional knapsack / Huffman]\r\n    \r\n    B -->|Array Traversal| G{Jump pattern?}\r\n    G -->|Yes| H[Max reach / can reach end]\r\n    G -->|No| I[Gas station / candies]\r\n    \r\n    B -->|Graph| J{Spanning Tree?}\r\n    J -->|Yes| K[Kruskal / Prim MST]\r\n    J -->|No| L[Shortest Path Dijkstra]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "greedy-algorithm-patterns",
      children: "Greedy Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "mindmap\r\n  root((Greedy Patterns))\r\n    Interval Scheduling\r\n      Earliest finish time\r\n      Minimum platforms\r\n      Non-overlapping intervals\r\n    Array Greedy\r\n      Jump Game\r\n      Gas Station\r\n      Stock trading\r\n      Candy distribution\r\n    Huffman Coding\r\n      Frequency compression\r\n      Optimal prefix code\r\n    Graph\r\n      Kruskal's MST\r\n      Prim's MST\r\n      Dijkstra's shortest path\r\n    Fractional\r\n      Fractional knapsack\r\n      Job sequencing\r\n    Exchange Argument\r\n      Optimal arrangement\r\n      Minimum cost"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-decision-tree",
      children: "Complexity Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Problem] --> B{Optimal substructure?}\r\n    B -->|No| C[Try DP / Backtracking]\r\n    B -->|Yes| D{Greedy choice?}\r\n    D -->|Proven| E[Greedy algorithm]\r\n    D -->|Unknown| F[\"Try both: greedy vs DP\"]\r\n    E --> G[\"O(n log n) for sorting + O(n)\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-5",
      children: "Easy Problems (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-assign-cookies",
      children: "Problem 1: Assign Cookies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort both arrays + greedy pointer match — O(n log n + m log m) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force trying every cookie-child pairing — O(n × m)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/assign-cookies/",
        children: "Assign Cookies"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-2-lemonade-change",
        children: "Lemonade Change"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-5-maximum-units-on-a-truck",
        children: "Maximum Units on a Truck"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given children's greed factors and cookie sizes, maximize the number of content children (a child is content if cookie size ≥ greed factor). Each child gets at most one cookie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: g = [1, 2, 3], s = [1, 1]\r\nOutput: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ g.length, s.length ≤ 3 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findContentChildren(g: number[], s: number[]): number {\r\n  g.sort((a, b) => a - b);\r\n  s.sort((a, b) => a - b);\r\n\r\n  let i = 0;\r\n  for (let j = 0; i < g.length && j < s.length; j++) {\r\n    if (s[j] >= g[i]) i++;\r\n  }\r\n\r\n  return i;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findContentChildren([1, 2, 3], [1, 1])); // 1\r\nconsole.log(findContentChildren([1, 2], [1, 2, 3])); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n + m log m)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-lemonade-change",
      children: "Problem 2: Lemonade Change"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass greedy with $5/$10 bill counters — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking over bill change combinations — exponential\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/lemonade-change/",
        children: "Lemonade Change"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-1-assign-cookies",
        children: "Assign Cookies"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-9-gas-station",
        children: "Gas Station"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-11-coin-change",
        children: "Coin Change"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Each customer pays with $5, $10, or $20 for a $5 lemonade. Determine if you can provide correct change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: bills = [5, 5, 5, 10, 20]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lemonadeChange(bills: number[]): boolean {\r\n  let five = 0;\r\n  let ten = 0;\r\n\r\n  for (const bill of bills) {\r\n    if (bill === 5) {\r\n      five++;\r\n    } else if (bill === 10) {\r\n      if (five === 0) return false;\r\n      five--;\r\n      ten++;\r\n    } else {\r\n      if (ten > 0 && five > 0) {\r\n        ten--;\r\n        five--;\r\n      } else if (five >= 3) {\r\n        five -= 3;\r\n      } else {\r\n        return false;\r\n      }\r\n    }\r\n  }\r\n\r\n  return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(lemonadeChange([5, 5, 5, 10, 20])); // true\r\nconsole.log(lemonadeChange([5, 5, 10, 10, 20])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-best-time-to-buy-and-sell-stock-ii",
      children: "Problem 3: Best Time to Buy and Sell Stock II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass accumulate positive price deltas — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP over buy/sell states — O(n²), overkill when greedy suffices\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        children: "Best Time to Buy and Sell Stock II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-9-gas-station",
        children: "Gas Station"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-8-jump-game-ii",
        children: "Jump Game II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-2-best-time-to-buy-and-sell-stock",
        children: "Best Time to Buy and Sell Stock"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " You can complete as many transactions as you like (buy one and sell one share on different days). Maximize profit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: prices = [7, 1, 5, 3, 6, 4]\r\nOutput: 7\r\nExplanation: Buy@1 sell@5 (+4), buy@3 sell@6 (+3) = 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxProfitII(prices: number[]): number {\r\n  let profit = 0;\r\n\r\n  for (let i = 1; i < prices.length; i++) {\r\n    if (prices[i] > prices[i - 1]) {\r\n      profit += prices[i] - prices[i - 1];\r\n    }\r\n  }\r\n\r\n  return profit;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxProfitII([7, 1, 5, 3, 6, 4])); // 7\r\nconsole.log(maxProfitII([1, 2, 3, 4, 5])); // 4\r\nconsole.log(maxProfitII([7, 6, 4, 3, 1])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-minimum-number-of-arrows-to-burst-balloons",
      children: "Problem 4: Minimum Number of Arrows to Burst Balloons"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Sorting + Greedy\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end + greedy overlap merge — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Interval graph coloring — O(n²), overkill for counting overlaps\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        children: "Minimum Number of Arrows to Burst Balloons"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-6-activity-selection-non-overlapping-intervals",
        children: "Activity Selection (Non-overlapping Intervals)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-7-minimum-number-of-platforms",
        children: "Minimum Number of Platforms"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given balloons as intervals [x_start, x_end], shoot arrows vertically. Find minimum arrows needed to burst all balloons."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: points = [[10,16],[2,8],[1,6],[7,12]]\r\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findMinArrowShots(points: number[][]): number {\r\n  if (!points.length) return 0;\r\n\r\n  points.sort((a, b) => a[1] - b[1]);\r\n  let arrows = 1;\r\n  let end = points[0][1];\r\n\r\n  for (let i = 1; i < points.length; i++) {\r\n    if (points[i][0] > end) {\r\n      arrows++;\r\n      end = points[i][1];\r\n    }\r\n  }\r\n\r\n  return arrows;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2\r\nconsole.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-maximum-units-on-a-truck",
      children: "Problem 5: Maximum Units on a Truck"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by units-per-box desc + greedy fill — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " 0/1 knapsack DP — O(n × truckSize), overkill for a fractional-style load\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-units-on-a-truck/",
        children: "Maximum Units on a Truck"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-1-assign-cookies",
        children: "Assign Cookies"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-15-minimum-cost-to-hire-k-workers",
        children: "Minimum Cost to Hire K Workers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given box types with [numberOfBoxes, unitsPerBox] and a truck size, maximize total units loaded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4\r\nOutput: 8 (1×3 + 2×2 + 1×1 = 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maximumUnits(boxTypes: number[][], truckSize: number): number {\r\n  boxTypes.sort((a, b) => b[1] - a[1]);\r\n  let totalUnits = 0;\r\n\r\n  for (const [boxes, units] of boxTypes) {\r\n    const take = Math.min(boxes, truckSize);\r\n    totalUnits += take * units;\r\n    truckSize -= take;\r\n    if (truckSize === 0) break;\r\n  }\r\n\r\n  return totalUnits;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maximumUnits([[1,3],[2,2],[3,1]], 4)); // 8\r\nconsole.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)); // 91\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-8",
      children: "Medium Problems (8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-activity-selection-non-overlapping-intervals",
      children: "Problem 6: Activity Selection (Non-overlapping Intervals)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Interval, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Activity Selection, Sorting + Greedy\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end time + greedy selection — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP longest non-overlapping chain — O(n²), same optimum at higher cost\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/non-overlapping-intervals/",
        children: "Activity Selection (Non-overlapping Intervals)"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-4-minimum-number-of-arrows-to-burst-balloons",
        children: "Minimum Number of Arrows to Burst Balloons"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-7-minimum-number-of-platforms",
        children: "Minimum Number of Platforms"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given intervals [start, end], find the maximum number of non-overlapping intervals you can select (or the minimum number to remove to make them non-overlapping)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\r\nOutput: 1 (remove just [1,3] to make non-overlapping)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function eraseOverlapIntervals(intervals: number[][]): number {\r\n  if (!intervals.length) return 0;\r\n\r\n  intervals.sort((a, b) => a[1] - b[1]);\r\n  let count = 0;\r\n  let end = intervals[0][1];\r\n\r\n  for (let i = 1; i < intervals.length; i++) {\r\n    if (intervals[i][0] < end) {\r\n      count++;\r\n    } else {\r\n      end = intervals[i][1];\r\n    }\r\n  }\r\n\r\n  return count;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1\r\nconsole.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-minimum-number-of-platforms",
      children: "Problem 7: Minimum Number of Platforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Interval, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, Sorting + Greedy, Interval Scheduling\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort arrivals/departures + two-pointer sweep — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Checking every pair of trains for overlap — O(n²)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " No direct LC equivalent — see Related links\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-6-activity-selection-non-overlapping-intervals",
        children: "Activity Selection (Non-overlapping Intervals)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-4-minimum-number-of-arrows-to-burst-balloons",
        children: "Minimum Number of Arrows to Burst Balloons"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given arrival and departure times of trains, find the minimum number of platforms needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000]\r\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findPlatform(arr: number[], dep: number[]): number {\r\n  arr.sort((a, b) => a - b);\r\n  dep.sort((a, b) => a - b);\r\n\r\n  let platforms = 0;\r\n  let maxPlatforms = 0;\r\n  let i = 0, j = 0;\r\n\r\n  while (i < arr.length && j < dep.length) {\r\n    if (arr[i] <= dep[j]) {\r\n      platforms++;\r\n      i++;\r\n    } else {\r\n      platforms--;\r\n      j++;\r\n    }\r\n    maxPlatforms = Math.max(maxPlatforms, platforms);\r\n  }\r\n\r\n  return maxPlatforms;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findPlatform(\r\n  [900, 940, 950, 1100, 1500, 1800],\r\n  [910, 1200, 1120, 1130, 1900, 2000]\r\n)); // 3\r\nconsole.log(findPlatform([900, 1000], [910, 1010])); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-jump-game-ii",
      children: "Problem 8: Jump Game II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Track farthest reach per jump layer — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP minimum jumps — O(n²), greedy reaches the optimum in O(n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/jump-game-ii/",
        children: "Jump Game II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-16-jump-game-greedy",
        children: "Jump Game (Greedy)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-9-gas-station",
        children: "Gas Station"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-16-jump-game",
        children: "Jump Game"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array where nums[i] is max jump length, return the minimum number of jumps to reach the last index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [2, 3, 1, 1, 4]\r\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jump(nums: number[]): number {\r\n  let jumps = 0;\r\n  let currentEnd = 0;\r\n  let farthest = 0;\r\n\r\n  for (let i = 0; i < nums.length - 1; i++) {\r\n    farthest = Math.max(farthest, i + nums[i]);\r\n    if (i === currentEnd) {\r\n      jumps++;\r\n      currentEnd = farthest;\r\n    }\r\n  }\r\n\r\n  return jumps;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(jump([2, 3, 1, 1, 4])); // 2\r\nconsole.log(jump([2, 0, 0])); // 1? Actually can't reach — but constraints guarantee reachability\r\nconsole.log(jump([0])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-gas-station",
      children: "Problem 9: Gas Station"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass tank tracking with start reset — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Trying every station as a start — O(n²)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/gas-station/",
        children: "Gas Station"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-8-jump-game-ii",
        children: "Jump Game II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-10-candy",
        children: "Candy"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray (Kadane's Algorithm)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given gas[i] (gas at station i) and cost[i] (cost to travel from i to i+1), find the starting station to complete a circuit. Return -1 if impossible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]\r\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If total gas < total cost, impossible. Otherwise, track deficit; when tank < 0, reset start to next station."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function canCompleteCircuit(gas: number[], cost: number[]): number {\r\n  let total = 0;\r\n  let tank = 0;\r\n  let start = 0;\r\n\r\n  for (let i = 0; i < gas.length; i++) {\r\n    const diff = gas[i] - cost[i];\r\n    total += diff;\r\n    tank += diff;\r\n    if (tank < 0) {\r\n      start = i + 1;\r\n      tank = 0;\r\n    }\r\n  }\r\n\r\n  return total >= 0 ? start : -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3\r\nconsole.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-candy",
      children: "Problem 10: Candy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Two-pass greedy (left-to-right then right-to-left) — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force bumping candies until constraints hold — O(n²) worst\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/candy/",
        children: "Candy"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-11-queue-reconstruction-by-height",
        children: "Queue Reconstruction by Height"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-13-partition-labels",
        children: "Partition Labels"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-27-trapping-rain-water",
        children: "Trapping Rain Water"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Each child must have at least one candy. Children with higher ratings get more than their neighbors. Find the minimum total candies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: ratings = [1, 0, 2]\r\nOutput: 5 (2, 1, 2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-pass greedy: left-to-right, then right-to-left."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function candy(ratings: number[]): number {\r\n  const n = ratings.length;\r\n  const candies = new Array(n).fill(1);\r\n\r\n  for (let i = 1; i < n; i++) {\r\n    if (ratings[i] > ratings[i - 1]) {\r\n      candies[i] = candies[i - 1] + 1;\r\n    }\r\n  }\r\n\r\n  for (let i = n - 2; i >= 0; i--) {\r\n    if (ratings[i] > ratings[i + 1]) {\r\n      candies[i] = Math.max(candies[i], candies[i + 1] + 1);\r\n    }\r\n  }\r\n\r\n  return candies.reduce((sum, c) => sum + c, 0);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(candy([1, 0, 2])); // 5\r\nconsole.log(candy([1, 2, 2])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-queue-reconstruction-by-height",
      children: "Problem 11: Queue Reconstruction by Height"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by height desc + insert at k index — O(n²) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Trying all permutations of the queue — O(n!)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/queue-reconstruction-by-height/",
        children: "Queue Reconstruction by Height"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-10-candy",
        children: "Candy"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-17-two-city-scheduling",
        children: "Two City Scheduling"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given people [height, numInFront] where numInFront is number of people ≥ height in front, reconstruct the queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]\r\nOutput: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reconstructQueue(people: number[][]): number[][] {\r\n  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);\r\n  const result: number[][] = [];\r\n\r\n  for (const person of people) {\r\n    result.splice(person[1], 0, person);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));\r\n// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-task-scheduler",
      children: "Problem 12: Task Scheduler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Heap]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice, Heap/Priority Queue\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Frequency + idle-slot formula — O(n + 26 log 26) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Simulating time slots one by one — O(maxFreq × n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/task-scheduler/",
        children: "Task Scheduler"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-18-split-array-into-consecutive-subsequences",
        children: "Split Array into Consecutive Subsequences"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-15-minimum-cost-to-hire-k-workers",
        children: "Minimum Cost to Hire K Workers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-11-group-anagrams",
        children: "Group Anagrams"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given tasks and a cooldown n, find the minimum time to complete all tasks (same task must be n apart)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\r\nOutput: 8 (A→B→idle→A→B→idle→A→B)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ tasks.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function leastInterval(tasks: string[], n: number): number {\r\n  const freq = new Array(26).fill(0);\r\n  for (const task of tasks) {\r\n    freq[task.charCodeAt(0) - 65]++;\r\n  }\r\n\r\n  freq.sort((a, b) => b - a);\r\n  const maxFreq = freq[0];\r\n  let idleSlots = (maxFreq - 1) * n;\r\n\r\n  for (let i = 1; i < freq.length && freq[i] > 0; i++) {\r\n    idleSlots -= Math.min(freq[i], maxFreq - 1);\r\n  }\r\n\r\n  return tasks.length + Math.max(0, idleSlots);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(leastInterval([\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], 2)); // 8\r\nconsole.log(leastInterval([\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], 0)); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n + 26 log 26) = O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-partition-labels",
      children: "Problem 13: Partition Labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, String, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Last-occurrence map + greedy segment expansion — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Checking every substring for character containment — O(n²)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/partition-labels/",
        children: "Partition Labels"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-8-jump-game-ii",
        children: "Jump Game II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-10-candy",
        children: "Candy"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-14-minimum-window-substring",
        children: "Minimum Window Substring"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Partition a string into as many parts as possible so that each character appears in at most one part."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"ababcbacadefegdehijhklij\"\r\nOutput: [9, 7, 8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function partitionLabels(s: string): number[] {\r\n  const last = new Array(26).fill(0);\r\n  for (let i = 0; i < s.length; i++) {\r\n    last[s.charCodeAt(i) - 97] = i;\r\n  }\r\n\r\n  const result: number[] = [];\r\n  let start = 0;\r\n  let end = 0;\r\n\r\n  for (let i = 0; i < s.length; i++) {\r\n    end = Math.max(end, last[s.charCodeAt(i) - 97]);\r\n    if (i === end) {\r\n      result.push(end - start + 1);\r\n      start = i + 1;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(partitionLabels(\"ababcbacadefegdehijhklij\")); // [9, 7, 8]\r\nconsole.log(partitionLabels(\"eccbbbbdec\")); // [10]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-2",
      children: "Hard Problems (2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-maximum-profit-in-job-scheduling",
      children: "Problem 14: Maximum Profit in Job Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, DP, Binary Search, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Sorting + Greedy\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end + DP with binary search — O(n log n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Pure earliest-finish greedy — fails when profits differ\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
        children: "Maximum Profit in Job Scheduling"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-6-activity-selection-non-overlapping-intervals",
        children: "Activity Selection (Non-overlapping Intervals)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-15-minimum-cost-to-hire-k-workers",
        children: "Minimum Cost to Hire K Workers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-12-longest-increasing-subsequence",
        children: "Longest Increasing Subsequence"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given jobs with startTime, endTime, and profit, find the maximum profit with non-overlapping jobs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\r\nOutput: 120\r\nExplanation: Job 1 (1→3, $50) + Job 3 (3→5, $40) = $90? Actually Job 4 (3→6, $70) + Job 1 = $120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {\r\n  const n = startTime.length;\r\n  const jobs = startTime.map((s, i) => ({ start: s, end: endTime[i], profit: profit[i] }));\r\n  jobs.sort((a, b) => a.end - b.end);\r\n\r\n  const dp = new Array(n).fill(0);\r\n  const ends = jobs.map(j => j.end);\r\n  dp[0] = jobs[0].profit;\r\n\r\n  const findLastNonOverlapping = (index: number): number => {\r\n    let left = 0, right = index - 1;\r\n    while (left <= right) {\r\n      const mid = Math.floor((left + right) / 2);\r\n      if (ends[mid] <= jobs[index].start) {\r\n        left = mid + 1;\r\n      } else {\r\n        right = mid - 1;\r\n      }\r\n    }\r\n    return right;\r\n  };\r\n\r\n  for (let i = 1; i < n; i++) {\r\n    const include = jobs[i].profit;\r\n    const last = findLastNonOverlapping(i);\r\n    dp[i] = Math.max(dp[i - 1], include + (last >= 0 ? dp[last] : 0));\r\n  }\r\n\r\n  return dp[n - 1];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])); // 120\r\nconsole.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])); // 150\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-minimum-cost-to-hire-k-workers",
      children: "Problem 15: Minimum Cost to Hire K Workers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Heap, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Heap/Priority Queue, Sorting + Greedy\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by wage/quality ratio + max-heap of k smallest qualities — O(n log k) time, O(k) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Enumerating every size-k subset — O(C(n, k)) combinations\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
        children: "Minimum Cost to Hire K Workers"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-12-task-scheduler",
        children: "Task Scheduler"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-5-maximum-units-on-a-truck",
        children: "Maximum Units on a Truck"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-29-01-knapsack",
        children: "0/1 Knapsack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Hire exactly k workers. Each worker has wage[i] and quality[i]. Pay proportional to quality ratio. Find minimum cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: quality = [10,20,5], wage = [70,50,30], k = 2\r\nOutput: 105\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort by wage/quality ratio. Use max-heap to keep smallest k qualities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {\r\n  const n = quality.length;\r\n  const workers = Array.from({ length: n }, (_, i) => ({\r\n    ratio: wage[i] / quality[i],\r\n    quality: quality[i]\r\n  }));\r\n\r\n  workers.sort((a, b) => a.ratio - b.ratio);\r\n\r\n  let sumQuality = 0;\r\n  let minCost = Infinity;\r\n  const maxHeap: number[] = [];\r\n\r\n  const addToHeap = (val: number) => {\r\n    maxHeap.push(val);\r\n    let i = maxHeap.length - 1;\r\n    while (i > 0) {\r\n      const parent = Math.floor((i - 1) / 2);\r\n      if (maxHeap[parent] >= maxHeap[i]) break;\r\n      [maxHeap[parent], maxHeap[i]] = [maxHeap[i], maxHeap[parent]];\r\n      i = parent;\r\n    }\r\n  };\r\n\r\n  const popHeap = () => {\r\n    const max = maxHeap[0];\r\n    maxHeap[0] = maxHeap[maxHeap.length - 1];\r\n    maxHeap.pop();\r\n    let i = 0;\r\n    while (true) {\r\n      let largest = i;\r\n      const left = 2 * i + 1;\r\n      const right = 2 * i + 2;\r\n      if (left < maxHeap.length && maxHeap[left] > maxHeap[largest]) largest = left;\r\n      if (right < maxHeap.length && maxHeap[right] > maxHeap[largest]) largest = right;\r\n      if (largest === i) break;\r\n      [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];\r\n      i = largest;\r\n    }\r\n    return max;\r\n  };\r\n\r\n  for (const worker of workers) {\r\n    sumQuality += worker.quality;\r\n    addToHeap(worker.quality);\r\n\r\n    if (maxHeap.length > k) {\r\n      sumQuality -= popHeap();\r\n    }\r\n\r\n    if (maxHeap.length === k) {\r\n      minCost = Math.min(minCost, sumQuality * worker.ratio);\r\n    }\r\n  }\r\n\r\n  return minCost;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(mincostToHireWorkers([10,20,5], [70,50,30], 2)); // 105\r\nconsole.log(mincostToHireWorkers([3,1,10,10,1], [4,8,2,2,7], 3)); // 30.66667\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log k)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(k)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-greedy-problems",
      children: "Additional Greedy Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-jump-game-greedy",
      children: "Problem 16: Jump Game (Greedy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass max-reach tracking — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP reachability table — O(n²), greedy decides reachability in O(n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/jump-game/",
        children: "Jump Game"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-8-jump-game-ii",
        children: "Jump Game II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-9-gas-station",
        children: "Gas Station"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-16-jump-game",
        children: "Jump Game"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array where nums[i] is max jump length from position i, determine if you can reach the last index."]
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
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= nums.length <= 10^4"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the maximum reachable index. If at any point i > maxReach, return false."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function canJump(nums: number[]): boolean {\r\n  let maxReach = 0;\r\n  for (let i = 0; i < nums.length; i++) {\r\n    if (i > maxReach) return false;\r\n    maxReach = Math.max(maxReach, i + nums[i]);\r\n    if (maxReach >= nums.length - 1) return true;\r\n  }\r\n  return true;\r\n}\n"
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
      id: "problem-17-two-city-scheduling",
      children: "Problem 17: Two City Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by cost difference (refund) + split halves — O(n log n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Enumerating all n-of-2n city assignments — O(C(2n, n))\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/two-city-scheduling/",
        children: "Two City Scheduling"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-11-queue-reconstruction-by-height",
        children: "Queue Reconstruction by Height"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-3-best-time-to-buy-and-sell-stock-ii",
        children: "Best Time to Buy and Sell Stock II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-2-best-time-to-buy-and-sell-stock",
        children: "Best Time to Buy and Sell Stock"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A company wants to fly 2n people to two cities. cost[i][0] is cost to send to city A, cost[i][1] is cost to send to city B. Return minimum cost to send exactly n people to each city."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: costs = [[10,20],[30,200],[400,50],[30,20]]\r\nOutput: 110\r\nExplanation: Person 0 to A (10), Person 1 to A (30), Person 2 to B (50), Person 3 to B (20) = 110\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort by refund (costA - costB). Send first n to A, rest to B."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function twoCitySchedCost(costs: number[][]): number {\r\n  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));\r\n\r\n  let total = 0;\r\n  const n = costs.length / 2;\r\n\r\n  for (let i = 0; i < costs.length; i++) {\r\n    total += i < n ? costs[i][0] : costs[i][1];\r\n  }\r\n\r\n  return total;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])); // 110\r\nconsole.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])); // 1859\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-split-array-into-consecutive-subsequences",
      children: "Problem 18: Split Array into Consecutive Subsequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Heap, Hash Table]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice, Heap/Priority Queue\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Greedy chain extension with frequency/need maps — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking over all chain partitions — exponential\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/split-array-into-consecutive-subsequences/",
        children: "Split Array into Consecutive Subsequences"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-12-task-scheduler",
        children: "Task Scheduler"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/08-greedy#problem-15-minimum-cost-to-hire-k-workers",
        children: "Minimum Cost to Hire K Workers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/07-dynamic-programming#problem-12-longest-increasing-subsequence",
        children: "Longest Increasing Subsequence"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array sorted in non-decreasing order, return true if it can be split into one or more subsequences of length >= 3 with consecutive integers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 3, 3, 4, 5]\r\nOutput: true\r\nExplanation: [1, 2, 3, 4, 5] and [3] -> need length >=3, so: [1,2,3] and [3,4,5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isPossible(nums: number[]): boolean {\r\n  const freq = new Map<number, number>();\r\n  const need = new Map<number, number>();\r\n\r\n  for (const num of nums) {\r\n    freq.set(num, (freq.get(num) || 0) + 1);\r\n  }\r\n\r\n  for (const num of nums) {\r\n    if (freq.get(num) === 0) continue;\r\n\r\n    if ((need.get(num) || 0) > 0) {\r\n      need.set(num, need.get(num)! - 1);\r\n      need.set(num + 1, (need.get(num + 1) || 0) + 1);\r\n    } else if ((freq.get(num + 1) || 0) > 0 && (freq.get(num + 2) || 0) > 0) {\r\n      freq.set(num + 1, freq.get(num + 1)! - 1);\r\n      freq.set(num + 2, freq.get(num + 2)! - 1);\r\n      need.set(num + 3, (need.get(num + 3) || 0) + 1);\r\n    } else {\r\n      return false;\r\n    }\r\n\r\n    freq.set(num, freq.get(num)! - 1);\r\n  }\r\n\r\n  return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isPossible([1, 2, 3, 3, 4, 5])); // true\r\nconsole.log(isPossible([1, 2, 3, 4, 4, 5])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-comparison-greedy-vs-dp",
      children: "Algorithm Comparison: Greedy vs DP"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Optimization Problem] --> B{Subproblems overlap?}\r\n    B -->|Yes| C{Optimal substructure with greedy choice?}\r\n    C -->|Yes| D[\"Greedy Algorithm - O(n log n)\"]\r\n    C -->|No| E[\"Dynamic Programming - O(n^2)\"]\r\n    \r\n    B -->|No| F[Divide & Conquer or Simple iteration]\r\n    \r\n    D --> G[\"Examples: Activity Selection, Huffman, Dijkstra\"]\r\n    E --> H[\"Examples: Knapsack, LCS, Edit Distance\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-tips-for-greedy-interviews",
      children: "Practical Tips for Greedy Interviews"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with the simplest greedy idea"
        }), " and test on examples. Many candidates overthink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Look for sorting opportunities"
        }), " — most greedy problems require sorting the input first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep track of the invariant"
        }), " — what property must hold at every step?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test edge cases"
        }), ": empty input, single element, all equal values, maximum values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explain why greedy works"
        }), " before coding. Interviewers want to see \\x60\\x60you understand the greedy choice property."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Be prepared to switch to DP"
        }), " if the greedy approach fails on a test case."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-greedy-patterns-summary",
      children: "Common Greedy Patterns Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Earliest Finish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by end time, pick non-overlapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activity Selection, Interval Scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest/Largest First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by size/value, take extremes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign Cookies, K Largest Elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by value/weight ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack, Job Scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass Greedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward then backward pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Candy, Trapping Rain Water"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track running max/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump Game, Gas Station"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy with Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use priority queue for dynamic choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task Scheduler, Hire K Workers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Assign Cookies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n + m log m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lemonade Change"
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
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best Time to Buy/Sell II"
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
            children: "Min Arrows to Burst Balloons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum Units on Truck"
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
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-overlapping Intervals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Platforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump Game II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Station"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Candy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
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
            children: "Queue Reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task Scheduler"
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
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition Labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Profit Job Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min Cost to Hire K Workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-greedy-algorithms-work",
      children: "How Greedy Algorithms Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Greedy algorithms follow a specific problem-solving approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make a choice"
        }), " — at each step, pick the option that looks best ", (0,jsx_runtime.jsx)(_components.em, {
          children: "right now"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduce to subproblem"
        }), " — after making the choice, solve the remaining problem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " — continue until the problem is solved"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike Dynamic Programming, greedy algorithms do not reconsider past choices. This makes them faster but only applicable to problems with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greedy choice property"
      }), " (a global optimum can be reached by making locally optimal choices)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "proving-greedy-correctness",
      children: "Proving Greedy Correctness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To prove a greedy algorithm is correct, use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exchange argument"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider an optimal solution that differs from the greedy one"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that you can swap elements from the greedy solution into the optimal one without making it worse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conclude the greedy solution must also be optimal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-greedy-vs-dp",
      children: "When to Use Greedy vs DP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Characteristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Greedy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Locally optimal leads to global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not necessarily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually O(n log n) or O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often O(n^2) or more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activity selection, Huffman"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack, LCS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-to-avoid",
      children: "Common Mistakes to Avoid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assuming greedy works"
        }), " — Always verify the greedy choice property. Many problems that look greedy actually need DP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong sorting"
        }), " — The wrong sort order can break greedy solutions. Sort intervals by end time (not start) for scheduling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not considering ties"
        }), " — When two options are equally good, the greedy choice may matter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignoring edge cases"
        }), " — Empty input, single element, all equal values."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "greedy-algorithm-design-template",
      children: "Greedy Algorithm Design Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the problem and identify if greedy applies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define what \"locally optimal\" means"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort the input if needed (intervals, ratios, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize result and state variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate through sorted input, making greedy choices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update state and accumulate result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the final result\r\n`"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-solving-strategy",
      children: "Problem-Solving Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When encountering a new problem, ask:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can I sort the input to simplify the problem?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is there a natural ordering (earliest finish, highest ratio)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does the problem have \"matroid\" structure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Would making the locally optimal choice now limit future options too much?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can I prove that my greedy choice doesn't block the optimal solution?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These questions help determine if a greedy approach is appropriate or if you need a more comprehensive method like DP or backtracking."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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