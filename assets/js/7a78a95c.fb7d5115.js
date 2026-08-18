"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90676],{

/***/ 77518
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Greedy Problem] --> B{Type?}\n    B -->|Interval| C[Schedule maximum non-overlapping intervals]\n    B -->|Optimization| D{Resource allocation?}\n    D -->|Yes| E[Minimum platforms / rooms]\n    D -->|No| F[Fractional knapsack / Huffman]\n    \n    B -->|Array Traversal| G{Jump pattern?}\n    G -->|Yes| H[Max reach / can reach end]\n    G -->|No| I[Gas station / candies]\n    \n    B -->|Graph| J{Spanning Tree?}\n    J -->|Yes| K[Kruskal / Prim MST]\n    J -->|No| L[Shortest Path Dijkstra]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "greedy-algorithm-patterns",
      children: "Greedy Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "mindmap\n  root((Greedy Patterns))\n    Interval Scheduling\n      Earliest finish time\n      Minimum platforms\n      Non-overlapping intervals\n    Array Greedy\n      Jump Game\n      Gas Station\n      Stock trading\n      Candy distribution\n    Huffman Coding\n      Frequency compression\n      Optimal prefix code\n    Graph\n      Kruskal's MST\n      Prim's MST\n      Dijkstra's shortest path\n    Fractional\n      Fractional knapsack\n      Job sequencing\n    Exchange Argument\n      Optimal arrangement\n      Minimum cost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-decision-tree",
      children: "Complexity Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Problem] --> B{Optimal substructure?}\n    B -->|No| C[Try DP / Backtracking]\n    B -->|Yes| D{Greedy choice?}\n    D -->|Proven| E[Greedy algorithm]\n    D -->|Unknown| F[Try both: greedy vs DP]\n    E --> G[O(n log n) for sorting + O(n)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-5",
      children: "Easy Problems (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-assign-cookies",
      children: "Problem 1: Assign Cookies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Two Pointers\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort both arrays + greedy pointer match — O(n log n + m log m) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force trying every cookie-child pairing — O(n × m)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/assign-cookies/",
        children: "Assign Cookies"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: g = [1, 2, 3], s = [1, 1]\nOutput: 1\n"
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
        children: "function findContentChildren(g: number[], s: number[]): number {\n  g.sort((a, b) => a - b);\n  s.sort((a, b) => a - b);\n\n  let i = 0;\n  for (let j = 0; i < g.length && j < s.length; j++) {\n    if (s[j] >= g[i]) i++;\n  }\n\n  return i;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findContentChildren([1, 2, 3], [1, 1])); // 1\nconsole.log(findContentChildren([1, 2], [1, 2, 3])); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n + m log m)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-lemonade-change",
      children: "Problem 2: Lemonade Change"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass greedy with $5/$10 bill counters — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking over bill change combinations — exponential\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/lemonade-change/",
        children: "Lemonade Change"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: bills = [5, 5, 5, 10, 20]\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lemonadeChange(bills: number[]): boolean {\n  let five = 0;\n  let ten = 0;\n\n  for (const bill of bills) {\n    if (bill === 5) {\n      five++;\n    } else if (bill === 10) {\n      if (five === 0) return false;\n      five--;\n      ten++;\n    } else {\n      if (ten > 0 && five > 0) {\n        ten--;\n        five--;\n      } else if (five >= 3) {\n        five -= 3;\n      } else {\n        return false;\n      }\n    }\n  }\n\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(lemonadeChange([5, 5, 5, 10, 20])); // true\nconsole.log(lemonadeChange([5, 5, 10, 10, 20])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-best-time-to-buy-and-sell-stock-ii",
      children: "Problem 3: Best Time to Buy and Sell Stock II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass accumulate positive price deltas — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP over buy/sell states — O(n²), overkill when greedy suffices\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        children: "Best Time to Buy and Sell Stock II"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: prices = [7, 1, 5, 3, 6, 4]\nOutput: 7\nExplanation: Buy@1 sell@5 (+4), buy@3 sell@6 (+3) = 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxProfitII(prices: number[]): number {\n  let profit = 0;\n\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) {\n      profit += prices[i] - prices[i - 1];\n    }\n  }\n\n  return profit;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxProfitII([7, 1, 5, 3, 6, 4])); // 7\nconsole.log(maxProfitII([1, 2, 3, 4, 5])); // 4\nconsole.log(maxProfitII([7, 6, 4, 3, 1])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-minimum-number-of-arrows-to-burst-balloons",
      children: "Problem 4: Minimum Number of Arrows to Burst Balloons"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Sorting + Greedy\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end + greedy overlap merge — O(n log n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Interval graph coloring — O(n²), overkill for counting overlaps\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        children: "Minimum Number of Arrows to Burst Balloons"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: points = [[10,16],[2,8],[1,6],[7,12]]\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findMinArrowShots(points: number[][]): number {\n  if (!points.length) return 0;\n\n  points.sort((a, b) => a[1] - b[1]);\n  let arrows = 1;\n  let end = points[0][1];\n\n  for (let i = 1; i < points.length; i++) {\n    if (points[i][0] > end) {\n      arrows++;\n      end = points[i][1];\n    }\n  }\n\n  return arrows;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2\nconsole.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-maximum-units-on-a-truck",
      children: "Problem 5: Maximum Units on a Truck"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by units-per-box desc + greedy fill — O(n log n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " 0/1 knapsack DP — O(n × truckSize), overkill for a fractional-style load\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-units-on-a-truck/",
        children: "Maximum Units on a Truck"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4\nOutput: 8 (1×3 + 2×2 + 1×1 = 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maximumUnits(boxTypes: number[][], truckSize: number): number {\n  boxTypes.sort((a, b) => b[1] - a[1]);\n  let totalUnits = 0;\n\n  for (const [boxes, units] of boxTypes) {\n    const take = Math.min(boxes, truckSize);\n    totalUnits += take * units;\n    truckSize -= take;\n    if (truckSize === 0) break;\n  }\n\n  return totalUnits;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maximumUnits([[1,3],[2,2],[3,1]], 4)); // 8\nconsole.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)); // 91\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Interval, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Activity Selection, Sorting + Greedy\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end time + greedy selection — O(n log n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP longest non-overlapping chain — O(n²), same optimum at higher cost\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/non-overlapping-intervals/",
        children: "Activity Selection (Non-overlapping Intervals)"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1 (remove just [1,3] to make non-overlapping)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function eraseOverlapIntervals(intervals: number[][]): number {\n  if (!intervals.length) return 0;\n\n  intervals.sort((a, b) => a[1] - b[1]);\n  let count = 0;\n  let end = intervals[0][1];\n\n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] < end) {\n      count++;\n    } else {\n      end = intervals[i][1];\n    }\n  }\n\n  return count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1\nconsole.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-minimum-number-of-platforms",
      children: "Problem 7: Minimum Number of Platforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Interval, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, Sorting + Greedy, Interval Scheduling\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort arrivals/departures + two-pointer sweep — O(n log n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Checking every pair of trains for overlap — O(n²)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " No direct LC equivalent — see Related links\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000]\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findPlatform(arr: number[], dep: number[]): number {\n  arr.sort((a, b) => a - b);\n  dep.sort((a, b) => a - b);\n\n  let platforms = 0;\n  let maxPlatforms = 0;\n  let i = 0, j = 0;\n\n  while (i < arr.length && j < dep.length) {\n    if (arr[i] <= dep[j]) {\n      platforms++;\n      i++;\n    } else {\n      platforms--;\n      j++;\n    }\n    maxPlatforms = Math.max(maxPlatforms, platforms);\n  }\n\n  return maxPlatforms;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(findPlatform(\n  [900, 940, 950, 1100, 1500, 1800],\n  [910, 1200, 1120, 1130, 1900, 2000]\n)); // 3\nconsole.log(findPlatform([900, 1000], [910, 1010])); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-jump-game-ii",
      children: "Problem 8: Jump Game II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Track farthest reach per jump layer — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP minimum jumps — O(n²), greedy reaches the optimum in O(n)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/jump-game-ii/",
        children: "Jump Game II"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: nums = [2, 3, 1, 1, 4]\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jump(nums: number[]): number {\n  let jumps = 0;\n  let currentEnd = 0;\n  let farthest = 0;\n\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === currentEnd) {\n      jumps++;\n      currentEnd = farthest;\n    }\n  }\n\n  return jumps;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(jump([2, 3, 1, 1, 4])); // 2\nconsole.log(jump([2, 0, 0])); // 1? Actually can't reach — but constraints guarantee reachability\nconsole.log(jump([0])); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-gas-station",
      children: "Problem 9: Gas Station"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass tank tracking with start reset — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Trying every station as a start — O(n²)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/gas-station/",
        children: "Gas Station"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]\nOutput: 3\n"
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
        children: "function canCompleteCircuit(gas: number[], cost: number[]): number {\n  let total = 0;\n  let tank = 0;\n  let start = 0;\n\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff;\n    tank += diff;\n    if (tank < 0) {\n      start = i + 1;\n      tank = 0;\n    }\n  }\n\n  return total >= 0 ? start : -1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3\nconsole.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-candy",
      children: "Problem 10: Candy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Two-pass greedy (left-to-right then right-to-left) — O(n) time, O(n) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute force bumping candies until constraints hold — O(n²) worst\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/candy/",
        children: "Candy"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: ratings = [1, 0, 2]\nOutput: 5 (2, 1, 2)\n"
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
        children: "function candy(ratings: number[]): number {\n  const n = ratings.length;\n  const candies = new Array(n).fill(1);\n\n  for (let i = 1; i < n; i++) {\n    if (ratings[i] > ratings[i - 1]) {\n      candies[i] = candies[i - 1] + 1;\n    }\n  }\n\n  for (let i = n - 2; i >= 0; i--) {\n    if (ratings[i] > ratings[i + 1]) {\n      candies[i] = Math.max(candies[i], candies[i + 1] + 1);\n    }\n  }\n\n  return candies.reduce((sum, c) => sum + c, 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(candy([1, 0, 2])); // 5\nconsole.log(candy([1, 2, 2])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-queue-reconstruction-by-height",
      children: "Problem 11: Queue Reconstruction by Height"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by height desc + insert at k index — O(n²) time, O(n) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Trying all permutations of the queue — O(n!)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/queue-reconstruction-by-height/",
        children: "Queue Reconstruction by Height"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]\nOutput: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reconstructQueue(people: number[][]): number[][] {\n  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);\n  const result: number[][] = [];\n\n  for (const person of people) {\n    result.splice(person[1], 0, person);\n  }\n\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));\n// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-task-scheduler",
      children: "Problem 12: Task Scheduler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Heap]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice, Heap/Priority Queue\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Frequency + idle-slot formula — O(n + 26 log 26) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Simulating time slots one by one — O(maxFreq × n)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/task-scheduler/",
        children: "Task Scheduler"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\nOutput: 8 (A→B→idle→A→B→idle→A→B)\n"
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
        children: "function leastInterval(tasks: string[], n: number): number {\n  const freq = new Array(26).fill(0);\n  for (const task of tasks) {\n    freq[task.charCodeAt(0) - 65]++;\n  }\n\n  freq.sort((a, b) => b - a);\n  const maxFreq = freq[0];\n  let idleSlots = (maxFreq - 1) * n;\n\n  for (let i = 1; i < freq.length && freq[i] > 0; i++) {\n    idleSlots -= Math.min(freq[i], maxFreq - 1);\n  }\n\n  return tasks.length + Math.max(0, idleSlots);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(leastInterval([\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], 2)); // 8\nconsole.log(leastInterval([\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], 0)); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n + 26 log 26) = O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-partition-labels",
      children: "Problem 13: Partition Labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, String, Two Pointers]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Last-occurrence map + greedy segment expansion — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Checking every substring for character containment — O(n²)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/partition-labels/",
        children: "Partition Labels"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: s = \"ababcbacadefegdehijhklij\"\nOutput: [9, 7, 8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function partitionLabels(s: string): number[] {\n  const last = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    last[s.charCodeAt(i) - 97] = i;\n  }\n\n  const result: number[] = [];\n  let start = 0;\n  let end = 0;\n\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s.charCodeAt(i) - 97]);\n    if (i === end) {\n      result.push(end - start + 1);\n      start = i + 1;\n    }\n  }\n\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(partitionLabels(\"ababcbacadefegdehijhklij\")); // [9, 7, 8]\nconsole.log(partitionLabels(\"eccbbbbdec\")); // [10]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, DP, Binary Search, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Interval Scheduling, Sorting + Greedy\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by end + DP with binary search — O(n log n) time, O(n) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Pure earliest-finish greedy — fails when profits differ\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
        children: "Maximum Profit in Job Scheduling"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\nOutput: 120\nExplanation: Job 1 (1→3, $50) + Job 3 (3→5, $40) = $90? Actually Job 4 (3→6, $70) + Job 1 = $120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {\n  const n = startTime.length;\n  const jobs = startTime.map((s, i) => ({ start: s, end: endTime[i], profit: profit[i] }));\n  jobs.sort((a, b) => a.end - b.end);\n\n  const dp = new Array(n).fill(0);\n  const ends = jobs.map(j => j.end);\n  dp[0] = jobs[0].profit;\n\n  const findLastNonOverlapping = (index: number): number => {\n    let left = 0, right = index - 1;\n    while (left <= right) {\n      const mid = Math.floor((left + right) / 2);\n      if (ends[mid] <= jobs[index].start) {\n        left = mid + 1;\n      } else {\n        right = mid - 1;\n      }\n    }\n    return right;\n  };\n\n  for (let i = 1; i < n; i++) {\n    const include = jobs[i].profit;\n    const last = findLastNonOverlapping(i);\n    dp[i] = Math.max(dp[i - 1], include + (last >= 0 ? dp[last] : 0));\n  }\n\n  return dp[n - 1];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])); // 120\nconsole.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])); // 150\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-minimum-cost-to-hire-k-workers",
      children: "Problem 15: Minimum Cost to Hire K Workers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Heap, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Heap/Priority Queue, Sorting + Greedy\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by wage/quality ratio + max-heap of k smallest qualities — O(n log k) time, O(k) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Enumerating every size-k subset — O(C(n, k)) combinations\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
        children: "Minimum Cost to Hire K Workers"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: quality = [10,20,5], wage = [70,50,30], k = 2\nOutput: 105\n"
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
        children: "function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {\n  const n = quality.length;\n  const workers = Array.from({ length: n }, (_, i) => ({\n    ratio: wage[i] / quality[i],\n    quality: quality[i]\n  }));\n\n  workers.sort((a, b) => a.ratio - b.ratio);\n\n  let sumQuality = 0;\n  let minCost = Infinity;\n  const maxHeap: number[] = [];\n\n  const addToHeap = (val: number) => {\n    maxHeap.push(val);\n    let i = maxHeap.length - 1;\n    while (i > 0) {\n      const parent = Math.floor((i - 1) / 2);\n      if (maxHeap[parent] >= maxHeap[i]) break;\n      [maxHeap[parent], maxHeap[i]] = [maxHeap[i], maxHeap[parent]];\n      i = parent;\n    }\n  };\n\n  const popHeap = () => {\n    const max = maxHeap[0];\n    maxHeap[0] = maxHeap[maxHeap.length - 1];\n    maxHeap.pop();\n    let i = 0;\n    while (true) {\n      let largest = i;\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n      if (left < maxHeap.length && maxHeap[left] > maxHeap[largest]) largest = left;\n      if (right < maxHeap.length && maxHeap[right] > maxHeap[largest]) largest = right;\n      if (largest === i) break;\n      [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];\n      i = largest;\n    }\n    return max;\n  };\n\n  for (const worker of workers) {\n    sumQuality += worker.quality;\n    addToHeap(worker.quality);\n\n    if (maxHeap.length > k) {\n      sumQuality -= popHeap();\n    }\n\n    if (maxHeap.length === k) {\n      minCost = Math.min(minCost, sumQuality * worker.ratio);\n    }\n  }\n\n  return minCost;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(mincostToHireWorkers([10,20,5], [70,50,30], 2)); // 105\nconsole.log(mincostToHireWorkers([3,1,10,10,1], [4,8,2,2,7], 3)); // 30.66667\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log k)\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass max-reach tracking — O(n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DP reachability table — O(n²), greedy decides reachability in O(n)\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/jump-game/",
        children: "Jump Game"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: nums = [2, 3, 1, 1, 4]\nOutput: true\n"
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
        children: "function canJump(nums: number[]): boolean {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n    if (maxReach >= nums.length - 1) return true;\n  }\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(canJump([2, 3, 1, 1, 4])); // true\nconsole.log(canJump([3, 2, 1, 0, 4])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-two-city-scheduling",
      children: "Problem 17: Two City Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Array, Sorting]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Sorting + Greedy, Greedy Choice\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Sort by cost difference (refund) + split halves — O(n log n) time, O(1) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Enumerating all n-of-2n city assignments — O(C(2n, n))\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/two-city-scheduling/",
        children: "Two City Scheduling"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: costs = [[10,20],[30,200],[400,50],[30,20]]\nOutput: 110\nExplanation: Person 0 to A (10), Person 1 to A (30), Person 2 to B (50), Person 3 to B (20) = 110\n"
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
        children: "function twoCitySchedCost(costs: number[][]): number {\n  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));\n\n  let total = 0;\n  const n = costs.length / 2;\n\n  for (let i = 0; i < costs.length; i++) {\n    total += i < n ? costs[i][0] : costs[i][1];\n  }\n\n  return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])); // 110\nconsole.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])); // 1859\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-split-array-into-consecutive-subsequences",
      children: "Problem 18: Split Array into Consecutive Subsequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Greedy, Heap, Hash Table]\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Greedy Choice, Heap/Priority Queue\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Greedy chain extension with frequency/need maps — O(n) time, O(n) space\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Backtracking over all chain partitions — exponential\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/split-array-into-consecutive-subsequences/",
        children: "Split Array into Consecutive Subsequences"
      }), "\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "Input: nums = [1, 2, 3, 3, 4, 5]\nOutput: true\nExplanation: [1, 2, 3, 4, 5] and [3] -> need length >=3, so: [1,2,3] and [3,4,5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isPossible(nums: number[]): boolean {\n  const freq = new Map<number, number>();\n  const need = new Map<number, number>();\n\n  for (const num of nums) {\n    freq.set(num, (freq.get(num) || 0) + 1);\n  }\n\n  for (const num of nums) {\n    if (freq.get(num) === 0) continue;\n\n    if ((need.get(num) || 0) > 0) {\n      need.set(num, need.get(num)! - 1);\n      need.set(num + 1, (need.get(num + 1) || 0) + 1);\n    } else if ((freq.get(num + 1) || 0) > 0 && (freq.get(num + 2) || 0) > 0) {\n      freq.set(num + 1, freq.get(num + 1)! - 1);\n      freq.set(num + 2, freq.get(num + 2)! - 1);\n      need.set(num + 3, (need.get(num + 3) || 0) + 1);\n    } else {\n      return false;\n    }\n\n    freq.set(num, freq.get(num)! - 1);\n  }\n\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isPossible([1, 2, 3, 3, 4, 5])); // true\nconsole.log(isPossible([1, 2, 3, 4, 4, 5])); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-comparison-greedy-vs-dp",
      children: "Algorithm Comparison: Greedy vs DP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Optimization Problem] --> B{Subproblems overlap?}\n    B -->|Yes| C{Optimal substructure with greedy choice?}\n    C -->|Yes| D[Greedy Algorithm - O(n log n)]\n    C -->|No| E[Dynamic Programming - O(n^2)]\n    \n    B -->|No| F[Divide & Conquer or Simple iteration]\n    \n    D --> G[Examples: Activity Selection, Huffman, Dijkstra]\n    E --> H[Examples: Knapsack, LCS, Edit Distance]\n"
      })
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
        children: "Return the final result\n`"
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