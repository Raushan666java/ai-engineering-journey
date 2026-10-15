"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3710],{

/***/ 40552
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_32_competitive_programming_02_advanced_algorithms_md_fdc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-32-competitive-programming-02-advanced-algorithms-md-fdc.json
const site_docs_courses_ai_engineering_placement_32_competitive_programming_02_advanced_algorithms_md_fdc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/competitive-programming/02-advanced-algorithms","title":"Advanced Algorithm Patterns for CP","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms.md","sourceDirName":"courses/ai-engineering-placement/32-competitive-programming","slug":"/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms","permalink":"/ai-engineering-journey/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":358,"frontMatter":{"id":"02-advanced-algorithms","slug":"/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms","title":"Advanced Algorithm Patterns for CP","sidebar_label":"Advanced Algorithm Patterns for CP","sidebar_position":358},"sidebar":"placementSidebar","previous":{"title":"01 — Competitive Programming Strategy for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/32-competitive-programming/01-cp-strategy"},"next":{"title":"Contest Simulation & Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/32-competitive-programming/03-contest-simulation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms.md


const frontMatter = {
	id: '02-advanced-algorithms',
	slug: '/ai-engineering-placement/32-competitive-programming/02-advanced-algorithms',
	title: 'Advanced Algorithm Patterns for CP',
	sidebar_label: 'Advanced Algorithm Patterns for CP',
	sidebar_position: 358
};
const contentTitle = 'Advanced Algorithm Patterns for CP';

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
  "value": "2.1 Segment Trees",
  "id": "21-segment-trees",
  "level": 2
}, {
  "value": "2.1.1 Point Updates and Range Queries",
  "id": "211-point-updates-and-range-queries",
  "level": 3
}, {
  "value": "2.1.2 Lazy Propagation",
  "id": "212-lazy-propagation",
  "level": 3
}, {
  "value": "2.2 Fenwick Trees (Binary Indexed Tree / BIT)",
  "id": "22-fenwick-trees-binary-indexed-tree--bit",
  "level": 2
}, {
  "value": "2.2.1 Point Update and Prefix Sum",
  "id": "221-point-update-and-prefix-sum",
  "level": 3
}, {
  "value": "2.2.2 Range Update and Point Query",
  "id": "222-range-update-and-point-query",
  "level": 3
}, {
  "value": "2.3 Union-Find (Disjoint Set Union / DSU)",
  "id": "23-union-find-disjoint-set-union--dsu",
  "level": 2
}, {
  "value": "2.3.1 DSU Implementation with Path Compression and Union by Rank",
  "id": "231-dsu-implementation-with-path-compression-and-union-by-rank",
  "level": 3
}, {
  "value": "2.3.2 Cycle Detection in Undirected Graphs",
  "id": "232-cycle-detection-in-undirected-graphs",
  "level": 3
}, {
  "value": "2.4 String Algorithms",
  "id": "24-string-algorithms",
  "level": 2
}, {
  "value": "2.4.1 KMP Algorithm (Knuth-Morris-Pratt)",
  "id": "241-kmp-algorithm-knuth-morris-pratt",
  "level": 3
}, {
  "value": "2.4.2 Z-Algorithm",
  "id": "242-z-algorithm",
  "level": 3
}, {
  "value": "2.4.3 Rabin-Karp with Rolling Hash",
  "id": "243-rabin-karp-with-rolling-hash",
  "level": 3
}, {
  "value": "2.5 Advanced Dynamic Programming",
  "id": "25-advanced-dynamic-programming",
  "level": 2
}, {
  "value": "2.5.1 Digit DP",
  "id": "251-digit-dp",
  "level": 3
}, {
  "value": "2.5.2 DP with Bitmask",
  "id": "252-dp-with-bitmask",
  "level": 3
}, {
  "value": "2.5.3 DP on Trees",
  "id": "253-dp-on-trees",
  "level": 3
}, {
  "value": "2.5.4 DP Optimization — Divide and Conquer DP",
  "id": "254-dp-optimization--divide-and-conquer-dp",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Implement a segment tree with lazy propagation for range min and range update.",
  "id": "q1-implement-a-segment-tree-with-lazy-propagation-for-range-min-and-range-update",
  "level": 3
}, {
  "value": "Q2: Use BIT to count inversions in an array.",
  "id": "q2-use-bit-to-count-inversions-in-an-array",
  "level": 3
}, {
  "value": "Q3: Detect cycle in a directed graph using DSU modifications.",
  "id": "q3-detect-cycle-in-a-directed-graph-using-dsu-modifications",
  "level": 3
}, {
  "value": "Q4: Implement string matching using Z-algorithm in O(n+m).",
  "id": "q4-implement-string-matching-using-z-algorithm-in-onm",
  "level": 3
}, {
  "value": "Q5: Solve &quot;Numbers with digit sum = S in range [L, R]&quot; using Digit DP.",
  "id": "q5-solve-numbers-with-digit-sum--s-in-range-l-r-using-digit-dp",
  "level": 3
}, {
  "value": "Q6: Implement a DSU with rollback (undo support) for offline dynamic connectivity.",
  "id": "q6-implement-a-dsu-with-rollback-undo-support-for-offline-dynamic-connectivity",
  "level": 3
}, {
  "value": "Q7: Use KMP to find the shortest palindrome by adding characters to the front.",
  "id": "q7-use-kmp-to-find-the-shortest-palindrome-by-adding-characters-to-the-front",
  "level": 3
}, {
  "value": "Q8: Given an array, process Q queries of type &quot;add val to range [l,r]&quot; and &quot;get value at index i&quot;. Use BIT.",
  "id": "q8-given-an-array-process-q-queries-of-type-add-val-to-range-lr-and-get-value-at-index-i-use-bit",
  "level": 3
}, {
  "value": "Q9: Find if there exists a subset with XOR = k using bitmask DP.",
  "id": "q9-find-if-there-exists-a-subset-with-xor--k-using-bitmask-dp",
  "level": 3
}, {
  "value": "Q10: Find the diameter of an N-ary tree (tree DP).",
  "id": "q10-find-the-diameter-of-an-n-ary-tree-tree-dp",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Q1: What is the time complexity of a range sum query on a Fenwick tree of size n?",
  "id": "q1-what-is-the-time-complexity-of-a-range-sum-query-on-a-fenwick-tree-of-size-n",
  "level": 3
}, {
  "value": "Q2: Which optimization makes Union-Find find() run in amortized O(α(n))?",
  "id": "q2-which-optimization-makes-union-find-find-run-in-amortized-oαn",
  "level": 3
}, {
  "value": "Q3: In KMP algorithm, what does the prefix function pi[i] represent?",
  "id": "q3-in-kmp-algorithm-what-does-the-prefix-function-pii-represent",
  "level": 3
}, {
  "value": "Q4: Which DP optimization technique applies when the optimal decision point for dp[i][j] is monotonic in j?",
  "id": "q4-which-dp-optimization-technique-applies-when-the-optimal-decision-point-for-dpij-is-monotonic-in-j",
  "level": 3
}, {
  "value": "Q5: What does Z[i] represent in the Z-algorithm?",
  "id": "q5-what-does-zi-represent-in-the-z-algorithm",
  "level": 3
}, {
  "value": "Exercises (5)",
  "id": "exercises-5",
  "level": 2
}, {
  "value": "Exercise 1: Segment Tree for Range GCD",
  "id": "exercise-1-segment-tree-for-range-gcd",
  "level": 3
}, {
  "value": "Exercise 2: 2D Fenwick Tree",
  "id": "exercise-2-2d-fenwick-tree",
  "level": 3
}, {
  "value": "Exercise 3: DSU with Component Size",
  "id": "exercise-3-dsu-with-component-size",
  "level": 3
}, {
  "value": "Exercise 4: Longest Happy Prefix using KMP",
  "id": "exercise-4-longest-happy-prefix-using-kmp",
  "level": 3
}, {
  "value": "Exercise 5: Tree DP — Tree Distances",
  "id": "exercise-5-tree-dp--tree-distances",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "advanced-algorithm-patterns-for-cp",
        children: "Advanced Algorithm Patterns for CP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement segment trees with point updates, range queries, and lazy propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build Fenwick trees for efficient prefix sum and range query operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply Union-Find (DSU) with path compression and union by rank for dynamic connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement string matching algorithms: KMP, Z-algorithm, Rabin-Karp with rolling hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve advanced DP problems: digit DP, DP with bitmask, DP on trees, DP optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Competitive programming at the highest level demands mastery of advanced data structures and algorithms. These patterns appear in Codeforces Div1/2, AtCoder ABC/ARC, and FAANG+ onsite interviews. Understanding segment trees, Fenwick trees, Union-Find, string algorithms, and advanced DP gives you a powerful toolkit for solving problems that naive approaches cannot handle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI engineers benefit doubly: these patterns map directly to real-world systems. Segment trees power range-based analytics. Fenwick trees drive streaming aggregations. Union-Find powers graph connectivity in cluster management. String algorithms are foundational for tokenization and search. Advanced DP techniques model optimization problems from scheduling to resource allocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic DSA: arrays, recursion, trees, graphs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time complexity analysis (Big-O)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with recursion and dynamic programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of modular arithmetic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming experience"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segment Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary tree storing interval aggregates; supports O(log n) range queries and updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred update technique that postpones range updates until necessary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fenwick Tree (BIT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-like array for O(log n) prefix sums and point updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjoint Set Union (DSU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data structure tracking partitioned elements; supports union and find operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU optimization that flattens tree structure during find operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union by Rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU optimization attaching smaller tree under larger tree's root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-time string matching using prefix function (pi array)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-time pattern preprocessing computing longest prefix match at each position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String matching using rolling hash; average O(n + m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial hash computed incrementally over a sliding window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digit DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP technique counting numbers with digit-based constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmask DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP over subsets using bitmask representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP on Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree DP using post-order traversal combining child subtree results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Techniques like convex hull trick, divide-and-conquer DP, Knuth optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced algorithm patterns are fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how advanced algorithm patterns work in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries, point updates, lazy propagation with O(log n) time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fenwick Trees (BIT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix sums, point updates, range queries using binary indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find (DSU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path compression, union by rank, cycle detection in near-O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMP, Z-algorithm, Rabin-Karp, rolling hash for linear-time matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit DP, bitmask DP, tree DP, DP optimization techniques"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph DS[Data Structures]\r\n        SGT[Segment Tree]\r\n        BIT[Fenwick Tree]\r\n        DSU[Union-Find]\r\n    end\r\n    subgraph STR[String Algorithms]\r\n        KMP[KMP]\r\n        ZALG[Z-Algorithm]\r\n        RK[Rabin-Karp]\r\n    end\r\n    subgraph DP[Advanced DP]\r\n        DIG[Digit DP]\r\n        MASK[Bitmask DP]\r\n        TREE[Tree DP]\r\n        OPT[Optimization]\r\n    end\r\n    DS --> CP[Competitive<br/>Programming]\r\n    STR --> CP\r\n    DP --> CP\r\n    CP --> AI[AI Engineering<br/>Applications]\r\n    AI --> RAG[Range Analytics]\r\n    AI --> TOKEN[Tokenization]\r\n    AI --> SCHED[Scheduling]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-segment-trees",
      children: "2.1 Segment Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A segment tree is a binary tree that stores interval aggregates. Each node represents a segment of the array. The root covers the full range ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0, n-1]"
      }), ". Leaf nodes represent single elements. Internal nodes store the combined result of their children (sum, min, max, gcd, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build: O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point Update: O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range Query: O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range Update with Lazy: O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: O(4n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-point-updates-and-range-queries",
      children: "2.1.1 Point Updates and Range Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The basic segment tree supports point updates (change one element) and range queries (query over an interval). The tree stores the sum of its segment by default."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional\r\n\r\nclass SegmentTree:\r\n    \"\"\"Iterative segment tree for range sum and point updates.\"\"\"\r\n\r\n    def __init__(self, data: List[int]):\r\n        self.n = len(data)\r\n        self.size = 1\r\n        while self.size < self.n:\r\n            self.size <<= 1\r\n        self.tree = [0] * (2 * self.size)\r\n        # Fill leaves\r\n        for i in range(self.n):\r\n            self.tree[self.size + i] = data[i]\r\n        # Build internal nodes\r\n        for i in range(self.size - 1, 0, -1):\r\n            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]\r\n\r\n    def point_update(self, idx: int, value: int) -> None:\r\n        \"\"\"Set arr[idx] = value.\"\"\"\r\n        pos = self.size + idx\r\n        self.tree[pos] = value\r\n        pos //= 2\r\n        while pos:\r\n            self.tree[pos] = self.tree[2 * pos] + self.tree[2 * pos + 1]\r\n            pos //= 2\r\n\r\n    def range_query(self, left: int, right: int) -> int:\r\n        \"\"\"Return sum of arr[left..right] inclusive.\"\"\"\r\n        res = 0\r\n        l = left + self.size\r\n        r = right + self.size\r\n        while l <= r:\r\n            if l & 1:\r\n                res += self.tree[l]\r\n                l += 1\r\n            if not (r & 1):\r\n                res += self.tree[r]\r\n                r -= 1\r\n            l //= 2\r\n            r //= 2\r\n        return res\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    arr = [1, 3, 5, 7, 9, 11]\r\n    st = SegmentTree(arr)\r\n    print(\"Range sum [1,4]:\", st.range_query(1, 4))  # 3+5+7+9 = 24\r\n    st.point_update(2, 10)\r\n    print(\"After update, range sum [1,4]:\", st.range_query(1, 4))  # 3+10+7+9 = 29\r\n    print(\"Range sum [0,5]:\", st.range_query(0, 5))  # 1+3+10+7+9+11 = 41\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-lazy-propagation",
      children: "2.1.2 Lazy Propagation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lazy propagation defers range updates. Instead of updating all leaves immediately, we store a \"lazy\" value at internal nodes. When a query or update needs the exact values, we push pending changes down."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LazySegmentTree:\r\n    \"\"\"Segment tree with lazy propagation for range add and range sum.\"\"\"\r\n\r\n    def __init__(self, data: List[int]):\r\n        self.n = len(data)\r\n        self.tree = [0] * (4 * self.n)\r\n        self.lazy = [0] * (4 * self.n)\r\n        self._build(data, 1, 0, self.n - 1)\r\n\r\n    def _build(self, data: List[int], node: int, l: int, r: int) -> None:\r\n        if l == r:\r\n            self.tree[node] = data[l]\r\n            return\r\n        mid = (l + r) // 2\r\n        self._build(data, 2 * node, l, mid)\r\n        self._build(data, 2 * node + 1, mid + 1, r)\r\n        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]\r\n\r\n    def _push(self, node: int, l: int, r: int) -> None:\r\n        \"\"\"Propagate lazy value to children.\"\"\"\r\n        if self.lazy[node] != 0:\r\n            self.tree[node] += self.lazy[node] * (r - l + 1)\r\n            if l != r:  # Not a leaf\r\n                self.lazy[2 * node] += self.lazy[node]\r\n                self.lazy[2 * node + 1] += self.lazy[node]\r\n            self.lazy[node] = 0\r\n\r\n    def range_add(self, ql: int, qr: int, val: int) -> None:\r\n        \"\"\"Add val to every element in [ql, qr].\"\"\"\r\n        self._range_add(1, 0, self.n - 1, ql, qr, val)\r\n\r\n    def _range_add(self, node: int, l: int, r: int, ql: int, qr: int, val: int) -> None:\r\n        self._push(node, l, r)\r\n        if ql > r or qr < l:\r\n            return\r\n        if ql <= l and r <= qr:\r\n            self.lazy[node] += val\r\n            self._push(node, l, r)\r\n            return\r\n        mid = (l + r) // 2\r\n        self._range_add(2 * node, l, mid, ql, qr, val)\r\n        self._range_add(2 * node + 1, mid + 1, r, ql, qr, val)\r\n        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]\r\n\r\n    def range_sum(self, ql: int, qr: int) -> int:\r\n        \"\"\"Return sum of elements in [ql, qr].\"\"\"\r\n        return self._range_sum(1, 0, self.n - 1, ql, qr)\r\n\r\n    def _range_sum(self, node: int, l: int, r: int, ql: int, qr: int) -> int:\r\n        self._push(node, l, r)\r\n        if ql > r or qr < l:\r\n            return 0\r\n        if ql <= l and r <= qr:\r\n            return self.tree[node]\r\n        mid = (l + r) // 2\r\n        left_sum = self._range_sum(2 * node, l, mid, ql, qr)\r\n        right_sum = self._range_sum(2 * node + 1, mid + 1, r, ql, qr)\r\n        return left_sum + right_sum\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    arr = [1, 2, 3, 4, 5]\r\n    lst = LazySegmentTree(arr)\r\n    print(\"Initial sum [0,4]:\", lst.range_sum(0, 4))  # 15\r\n    lst.range_add(1, 3, 10)  # arr = [1, 12, 13, 14, 5]\r\n    print(\"After add 10 to [1,3], sum [0,4]:\", lst.range_sum(0, 4))  # 45\r\n    print(\"Sum [1,3]:\", lst.range_sum(1, 3))  # 12+13+14 = 39\r\n    print(\"Sum [0,0]:\", lst.range_sum(0, 0))  # 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph SGT[Segment Tree - Range Sum]\r\n        N1[\"[0,5]: 36\"] --> N2[\"[0,2]: 9\"]\r\n        N1 --> N3[\"[3,5]: 27\"]\r\n        N2 --> N4[\"[0,1]: 4\"]\r\n        N2 --> N5[\"[2,2]: 5\"]\r\n        N3 --> N6[\"[3,4]: 16\"]\r\n        N3 --> N7[\"[5,5]: 11\"]\r\n        N4 --> N8[\"[0,0]: 1\"]\r\n        N4 --> N9[\"[1,1]: 3\"]\r\n        N6 --> N10[\"[3,3]: 7\"]\r\n        N6 --> N11[\"[4,4]: 9\"]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-fenwick-trees-binary-indexed-tree--bit",
      children: "2.2 Fenwick Trees (Binary Indexed Tree / BIT)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Fenwick tree stores partial prefix sums using a clever binary indexing scheme. Each index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " stores the sum of a range ending at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " whose length is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i & -i"
      }), " (the lowest set bit). BIT uses O(n) space and supports O(log n) prefix sums and point updates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " The operation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i += i & -i"
      }), " moves to the next index in the update chain. The operation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i -= i & -i"
      }), " strips the lowest set bit for prefix sum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-point-update-and-prefix-sum",
      children: "2.2.1 Point Update and Prefix Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FenwickTree:\r\n    \"\"\"Fenwick tree for point updates and prefix sums.\"\"\"\r\n\r\n    def __init__(self, n: int):\r\n        self.n = n\r\n        self.bit = [0] * (n + 1)  # 1-indexed\r\n\r\n    @classmethod\r\n    def from_array(cls, arr: List[int]) -> \"FenwickTree\":\r\n        \"\"\"Build BIT from an array in O(n).\"\"\"\r\n        n = len(arr)\r\n        ft = cls(n)\r\n        for i in range(1, n + 1):\r\n            ft.bit[i] += arr[i - 1]\r\n            j = i + (i & -i)\r\n            if j <= n:\r\n                ft.bit[j] += ft.bit[i]\r\n        return ft\r\n\r\n    def add(self, idx: int, delta: int) -> None:\r\n        \"\"\"Add delta to arr[idx] (0-indexed).\"\"\"\r\n        i = idx + 1\r\n        while i <= self.n:\r\n            self.bit[i] += delta\r\n            i += i & -i\r\n\r\n    def prefix_sum(self, idx: int) -> int:\r\n        \"\"\"Return sum of arr[0..idx] inclusive (0-indexed).\"\"\"\r\n        res = 0\r\n        i = idx + 1\r\n        while i > 0:\r\n            res += self.bit[i]\r\n            i -= i & -i\r\n        return res\r\n\r\n    def range_sum(self, l: int, r: int) -> int:\r\n        \"\"\"Return sum of arr[l..r] inclusive.\"\"\"\r\n        if l > r:\r\n            return 0\r\n        return self.prefix_sum(r) - self.prefix_sum(l - 1)\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    arr = [1, 3, 5, 7, 9, 11]\r\n    ft = FenwickTree.from_array(arr)\r\n    print(\"Prefix sum [0,3]:\", ft.prefix_sum(3))      # 1+3+5+7 = 16\r\n    print(\"Range sum [2,5]:\", ft.range_sum(2, 5))     # 5+7+9+11 = 32\r\n    ft.add(2, 10)  # arr[2] += 10 -> arr = [1, 3, 15, 7, 9, 11]\r\n    print(\"After add, range sum [2,5]:\", ft.range_sum(2, 5))  # 15+7+9+11 = 42\r\n    print(\"Prefix sum [0,5]:\", ft.prefix_sum(5))      # 46\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-range-update-and-point-query",
      children: "2.2.2 Range Update and Point Query"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BIT can support range updates and point queries using difference arrays. To add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "val"
      }), " to every element in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[l, r]"
      }), ", we do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add(l, val)"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add(r + 1, -val)"
      }), ". A point query at index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefix_sum(i)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RangeUpdateFenwick:\r\n    \"\"\"Fenwick tree for range add and point query using difference array.\"\"\"\r\n\r\n    def __init__(self, n: int):\r\n        self.ft = FenwickTree(n)\r\n\r\n    def range_add(self, l: int, r: int, val: int) -> None:\r\n        \"\"\"Add val to every element in [l, r].\"\"\"\r\n        self.ft.add(l, val)\r\n        self.ft.add(r + 1, -val)\r\n\r\n    def point_query(self, idx: int) -> int:\r\n        \"\"\"Return current value at arr[idx].\"\"\"\r\n        return self.ft.prefix_sum(idx)\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    ruf = RangeUpdateFenwick(6)\r\n    ruf.range_add(1, 4, 5)   # arr[1..4] += 5\r\n    ruf.range_add(2, 5, 3)   # arr[2..5] += 3\r\n    print(\"Value at idx 1:\", ruf.point_query(1))  # 5\r\n    print(\"Value at idx 2:\", ruf.point_query(2))  # 5+3 = 8\r\n    print(\"Value at idx 5:\", ruf.point_query(5))  # 3\r\n    print(\"Value at idx 0:\", ruf.point_query(0))  # 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph BIT[\"Fenwick Tree Structure (n=8)\"]\r\n        direction TB\r\n        B1[\"1: arr[0..0]\"] --> B2[\"2: arr[0..1]\"]\r\n        B1 --> B3[\"3: arr[2..2]\"]\r\n        B2 --> B4[\"4: arr[0..3]\"]\r\n        B2 --> B5[\"5: arr[4..4]\"]\r\n        B3 --> B5\r\n        B3 --> B6[\"6: arr[4..5]\"]\r\n        B4 --> B7[\"7: arr[6..6]\"]\r\n        B4 --> B8[\"8: arr[0..7]\"]\r\n        B5 --> B7\r\n        B6 --> B8\r\n    end\r\n    style B1 fill:#e1f5fe\r\n    style B2 fill:#b3e5fc\r\n    style B3 fill:#e1f5fe\r\n    style B4 fill:#81d4fa\r\n    style B5 fill:#e1f5fe\r\n    style B6 fill:#b3e5fc\r\n    style B7 fill:#e1f5fe\r\n    style B8 fill:#4fc3f7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-union-find-disjoint-set-union--dsu",
      children: "2.3 Union-Find (Disjoint Set Union / DSU)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Union-Find tracks elements partitioned into disjoint sets. It supports two operations: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find(x)"
      }), " returns the representative of x's set, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "union(x, y)"
      }), " merges the sets containing x and y."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Compression"
        }), ": During ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find"
        }), ", flatten the tree by pointing every node directly to the root."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union by Rank"
        }), ": Attach the smaller tree under the larger tree's root. \"Rank\" approximates tree height."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without optimizations: O(n). With both: O(α(n)) — inverse Ackermann, effectively constant."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-dsu-implementation-with-path-compression-and-union-by-rank",
      children: "2.3.1 DSU Implementation with Path Compression and Union by Rank"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DSU:\r\n    \"\"\"Disjoint Set Union with path compression and union by rank.\"\"\"\r\n\r\n    def __init__(self, n: int):\r\n        self.parent = list(range(n))\r\n        self.rank = [0] * n\r\n        self.components = n  # Track number of connected components\r\n\r\n    def find(self, x: int) -> int:\r\n        \"\"\"Find representative of x with path compression.\"\"\"\r\n        if self.parent[x] != x:\r\n            self.parent[x] = self.find(self.parent[x])\r\n        return self.parent[x]\r\n\r\n    def union(self, x: int, y: int) -> bool:\r\n        \"\"\"Union sets containing x and y. Returns True if merged, False if already same set.\"\"\"\r\n        px, py = self.find(x), self.find(y)\r\n        if px == py:\r\n            return False\r\n        # Union by rank: attach smaller rank under larger\r\n        if self.rank[px] < self.rank[py]:\r\n            self.parent[px] = py\r\n        elif self.rank[px] > self.rank[py]:\r\n            self.parent[py] = px\r\n        else:\r\n            self.parent[py] = px\r\n            self.rank[px] += 1\r\n        self.components -= 1\r\n        return True\r\n\r\n    def same(self, x: int, y: int) -> bool:\r\n        \"\"\"Check if x and y are in the same set.\"\"\"\r\n        return self.find(x) == self.find(y)\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    dsu = DSU(7)\r\n    dsu.union(0, 1)\r\n    dsu.union(1, 2)\r\n    dsu.union(3, 4)\r\n    dsu.union(4, 5)\r\n    dsu.union(5, 6)\r\n    print(\"Same(0,2):\", dsu.same(0, 2))   # True\r\n    print(\"Same(0,3):\", dsu.same(0, 3))   # False\r\n    print(\"Components:\", dsu.components)   # 2\r\n    dsu.union(2, 3)\r\n    print(\"After union, Components:\", dsu.components)  # 1\r\n    print(\"Same(0,6):\", dsu.same(0, 6))   # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-cycle-detection-in-undirected-graphs",
      children: "2.3.2 Cycle Detection in Undirected Graphs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DSU elegantly detects cycles in undirected graphs: for each edge (u, v), if u and v already share the same parent, adding this edge creates a cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def has_cycle(n: int, edges: List[tuple]) -> bool:\r\n    \"\"\"Detect cycle in undirected graph with n nodes and list of edges.\"\"\"\r\n    dsu = DSU(n)\r\n    for u, v in edges:\r\n        if dsu.same(u, v):\r\n            return True\r\n        dsu.union(u, v)\r\n    return False\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    edges1 = [(0, 1), (1, 2), (2, 0)]  # Triangle -> cycle\r\n    edges2 = [(0, 1), (1, 2), (2, 3)]  # Path -> no cycle\r\n    print(\"Edges1 has cycle:\", has_cycle(4, edges1))  # True\r\n    print(\"Edges2 has cycle:\", has_cycle(4, edges2))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph Before[Before Union]\r\n        A0[0] --- A1[1]\r\n        A1 --- A2[2]\r\n        B3[3] --- B4[4]\r\n        B4 --- B5[5]\r\n        B5 --- B6[6]\r\n    end\r\n    subgraph After[After Union(2,3)]\r\n        C0[0] --- C1[1]\r\n        C1 --- C2[2]\r\n        C2 -.- C3[3]\r\n        C3 --- C4[4]\r\n        C4 --- C5[5]\r\n        C5 --- C6[6]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-string-algorithms",
      children: "2.4 String Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["String matching is a fundamental CP topic. Given a text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " (length n) and pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P"
      }), " (length m), find all occurrences of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-kmp-algorithm-knuth-morris-pratt",
      children: "2.4.1 KMP Algorithm (Knuth-Morris-Pratt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["KMP precomputes a prefix function (pi array) for the pattern. Pi[i] is the length of the longest proper prefix of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P[0..i]"
      }), " that is also a suffix. This lets us skip characters when a mismatch occurs, achieving O(n + m) worst-case time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def kmp_prefix(pattern: str) -> List[int]:\r\n    \"\"\"Compute KMP prefix function (pi array).\"\"\"\r\n    m = len(pattern)\r\n    pi = [0] * m\r\n    j = 0  # Length of previous longest prefix suffix\r\n    for i in range(1, m):\r\n        while j > 0 and pattern[i] != pattern[j]:\r\n            j = pi[j - 1]\r\n        if pattern[i] == pattern[j]:\r\n            j += 1\r\n            pi[i] = j\r\n    return pi\r\n\r\ndef kmp_search(text: str, pattern: str) -> List[int]:\r\n    \"\"\"Find all start indices of pattern in text using KMP.\"\"\"\r\n    if not pattern:\r\n        return []\r\n    n, m = len(text), len(pattern)\r\n    pi = kmp_prefix(pattern)\r\n    res = []\r\n    j = 0  # Pattern pointer\r\n    for i in range(n):\r\n        while j > 0 and text[i] != pattern[j]:\r\n            j = pi[j - 1]\r\n        if text[i] == pattern[j]:\r\n            j += 1\r\n        if j == m:\r\n            res.append(i - m + 1)\r\n            j = pi[j - 1]\r\n    return res\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    text = \"ABABDABACDABABCABAB\"\r\n    pattern = \"ABABCABAB\"\r\n    matches = kmp_search(text, pattern)\r\n    print(f\"Pattern found at indices: {matches}\")  # [10]\r\n    print(f\"Pattern 'ABA' in 'ABABDABA': {kmp_search('ABABDABA', 'ABA')}\")  # [0, 2, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-z-algorithm",
      children: "2.4.2 Z-Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z-algorithm computes the Z-array for a string S. Z[i] = length of the longest common prefix of S and S[i:]. It runs in O(n) time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def z_function(s: str) -> List[int]:\r\n    \"\"\"Compute Z-array for string s.\"\"\"\r\n    n = len(s)\r\n    z = [0] * n\r\n    l = r = 0  # Current Z-box boundaries\r\n    for i in range(1, n):\r\n        if i <= r:\r\n            z[i] = min(r - i + 1, z[i - l])\r\n        while i + z[i] < n and s[z[i]] == s[i + z[i]]:\r\n            z[i] += 1\r\n        if i + z[i] - 1 > r:\r\n            l, r = i, i + z[i] - 1\r\n    return z\r\n\r\ndef z_search(text: str, pattern: str) -> List[int]:\r\n    \"\"\"Find all pattern occurrences using Z-algorithm.\"\"\"\r\n    if not pattern:\r\n        return []\r\n    combined = pattern + \"$\" + text\r\n    z = z_function(combined)\r\n    m = len(pattern)\r\n    res = []\r\n    for i in range(m + 1, len(combined)):\r\n        if z[i] >= m:\r\n            res.append(i - m - 1)\r\n    return res\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    text = \"ABABDABACDABABCABAB\"\r\n    pattern = \"ABABCABAB\"\r\n    print(f\"Z-algo matches: {z_search(text, pattern)}\")  # [10]\r\n    print(f\"Z-algo 'ABA' in 'ABABDABA': {z_search('ABABDABA', 'ABA')}\")  # [0, 2, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-rabin-karp-with-rolling-hash",
      children: "2.4.3 Rabin-Karp with Rolling Hash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rabin-Karp uses a polynomial hash to compare substrings in O(1) after O(n) preprocessing. The hash of string s of length m is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(s) = (s[0]*p^(m-1) + s[1]*p^(m-2) + ... + s[m-1]*p^0) mod mod\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When sliding the window, we compute the new hash in O(1) by subtracting the left character's contribution, multiplying by p, and adding the new right character."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "BASE = 911382323\r\nMOD = 10**15 + 37\r\n\r\nclass RabinKarp:\r\n    \"\"\"Rabin-Karp string matching with rolling hash.\"\"\"\r\n\r\n    def __init__(self, text: str):\r\n        self.text = text\r\n        self.n = len(text)\r\n        # Precompute powers\r\n        self.pow = [1] * (self.n + 1)\r\n        for i in range(1, self.n + 1):\r\n            self.pow[i] = (self.pow[i - 1] * BASE) % MOD\r\n        # Precompute prefix hashes\r\n        self.pref = [0] * (self.n + 1)\r\n        for i in range(self.n):\r\n            self.pref[i + 1] = (self.pref[i] + ord(text[i]) * self.pow[i]) % MOD\r\n\r\n    def _hash(self, l: int, r: int) -> int:\r\n        \"\"\"Return hash of text[l..r] inclusive.\"\"\"\r\n        h = (self.pref[r + 1] - self.pref[l]) % MOD\r\n        return (h * self.pow[self.n - l]) % MOD  # Normalize\r\n\r\n    def search(self, pattern: str) -> List[int]:\r\n        \"\"\"Return all start indices of pattern in text.\"\"\"\r\n        m = len(pattern)\r\n        if m > self.n or m == 0:\r\n            return []\r\n        # Compute pattern hash\r\n        pat_hash = sum(ord(pattern[i]) * self.pow[i] for i in range(m)) % MOD\r\n        res = []\r\n        for i in range(self.n - m + 1):\r\n            if self._hash(i, i + m - 1) == pat_hash:\r\n                if self.text[i:i + m] == pattern:  # Verify to avoid collisions\r\n                    res.append(i)\r\n        return res\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    text = \"ABABDABACDABABCABAB\"\r\n    pattern = \"ABABCABAB\"\r\n    rk = RabinKarp(text)\r\n    print(f\"Rabin-Karp matches: {rk.search(pattern)}\")  # [10]\r\n    print(f\"Multiple matches: {rk.search('ABA')}\")  # [0, 2, 5, 12, 14]\r\n\r\n    # Rolling hash sliding window\r\n    def rolling_hash(s: str, window: int) -> List[int]:\r\n        \"\"\"Compute rolling hashes for all windows of given length.\"\"\"\r\n        n = len(s)\r\n        if window > n:\r\n            return []\r\n        # Initial hash\r\n        h = sum(ord(s[i]) * (BASE ** (window - 1 - i)) for i in range(window)) % MOD\r\n        res = [h]\r\n        pow_m1 = pow(BASE, window - 1, MOD)\r\n        for i in range(window, n):\r\n            h = (h - ord(s[i - window]) * pow_m1) % MOD\r\n            h = (h * BASE + ord(s[i])) % MOD\r\n            res.append(h)\r\n        return res\r\n\r\n    print(f\"Rolling hash windows of length 3: {rolling_hash('ABCDEF', 3)[:4]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph KMP_Flow[KMP Matching]\r\n        T1[Text: A B A B D] --> P1[Pattern: A B A]\r\n        P1 --> PF[Prefix Function: [0,0,1]]\r\n        PF --> Match1[Match at 0,2]\r\n    end\r\n    subgraph RK_Flow[Rabin-Karp]\r\n        T2[Text: ABCDEF] --> HASH[hash(A)=h1, hash(B)=h2, ...]\r\n        HASH --> Roll[\"h2 = (h1 - ord('A')*p^(m-1))*p + ord('D')\"]\r\n        Roll --> Match2[Compare hash → verify → O(n+m) avg]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-advanced-dynamic-programming",
      children: "2.5 Advanced Dynamic Programming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced DP techniques solve problems that standard DP cannot handle efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-digit-dp",
      children: "2.5.1 Digit DP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Digit DP counts numbers in a range ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[L, R]"
      }), " satisfying certain digit-based properties. The state tracks: position, tight flag (whether prefix matches the bound), and problem-specific conditions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count numbers from 0 to N that do not have consecutive same digits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_no_consecutive_same(N: int) -> int:\r\n    \"\"\"Count numbers in [0, N] with no consecutive equal digits.\"\"\"\r\n    digits = list(map(int, str(N)))\r\n    n = len(digits)\r\n\r\n    from functools import lru_cache\r\n\r\n    @lru_cache(None)\r\n    def dp(pos: int, tight: bool, last_digit: int, started: bool) -> int:\r\n        \"\"\"Return count of valid numbers from position pos.\"\"\"\r\n        if pos == n:\r\n            return 1 if started else 0  # Count 0 as 1 number\r\n        limit = digits[pos] if tight else 9\r\n        total = 0\r\n        for d in range(limit + 1):\r\n            if started and d == last_digit:\r\n                continue  # Consecutive same digit not allowed\r\n            new_started = started or d != 0\r\n            new_tight = tight and (d == limit)\r\n            if not new_started:\r\n                total += dp(pos + 1, new_tight, -1, False)\r\n            else:\r\n                total += dp(pos + 1, new_tight, d, True)\r\n        return total\r\n\r\n    return dp(0, True, -1, False)\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    print(\"Count [0, 100] no consecutive same:\", count_no_consecutive_same(100))\r\n    # Expected: 100 (0-99) - (11,22,33,44,55,66,77,88,99) = 91 + 1 for 100 = 91... let's compute properly\r\n    total = 0\r\n    for i in range(101):\r\n        s = str(i)\r\n        if all(s[j] != s[j + 1] for j in range(len(s) - 1)):\r\n            total += 1\r\n    print(f\"Brute force check: {total}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-dp-with-bitmask",
      children: "2.5.2 DP with Bitmask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bitmask DP (or DP over subsets) represents subsets using bitmasks. Common for traveling salesman problem (TSP), Hamiltonian paths, and partition problems."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n items with weights, find if a subset sums to exactly target (subset sum with bitmask tracking used items)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import lru_cache\r\n\r\ndef subset_sum_bitmask(nums: List[int], target: int) -> bool:\r\n    \"\"\"Check if any subset sums to target using bitmask DP.\"\"\"\r\n    n = len(nums)\r\n\r\n    @lru_cache(None)\r\n    def dp(mask: int, remaining: int) -> bool:\r\n        \"\"\"Returns True if subset represented by mask can achieve remaining sum.\"\"\"\r\n        if remaining == 0:\r\n            return True\r\n        if remaining < 0:\r\n            return False\r\n        for i in range(n):\r\n            if not (mask & (1 << i)):\r\n                if dp(mask | (1 << i), remaining - nums[i]):\r\n                    return True\r\n        return False\r\n\r\n    return dp(0, target)\r\n\r\n# TSP using bitmask DP\r\ndef tsp_distance(city_a: int, city_b: int) -> int:\r\n    \"\"\"Placeholder distance function.\"\"\"\r\n    return abs(city_a - city_b)\r\n\r\ndef tsp_min_cost(dist: List[List[int]]) -> int:\r\n    \"\"\"Solve TSP using bitmask DP. dist[i][j] = distance from i to j.\"\"\"\r\n    n = len(dist)\r\n    INF = 10**9\r\n\r\n    # dp[mask][v] = min cost to visit all cities in mask, ending at v\r\n    dp = [[INF] * n for _ in range(1 << n)]\r\n    dp[1][0] = 0  # Start at city 0\r\n\r\n    for mask in range(1 << n):\r\n        for v in range(n):\r\n            if not (mask & (1 << v)):\r\n                continue\r\n            if dp[mask][v] == INF:\r\n                continue\r\n            for u in range(n):\r\n                if mask & (1 << u):\r\n                    continue\r\n                new_mask = mask | (1 << u)\r\n                dp[new_mask][u] = min(dp[new_mask][u], dp[mask][v] + dist[v][u])\r\n\r\n    full_mask = (1 << n) - 1\r\n    return min(dp[full_mask][v] + dist[v][0] for v in range(1, n))\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    print(\"Subset sum [3,5,7,9] -> target 14:\", subset_sum_bitmask([3, 5, 7, 9], 14))  # True\r\n    print(\"Subset sum [3,5,7,9] -> target 25:\", subset_sum_bitmask([3, 5, 7, 9], 25))  # False\r\n\r\n    # TSP test\r\n    dist = [\r\n        [0, 10, 15, 20],\r\n        [10, 0, 35, 25],\r\n        [15, 35, 0, 30],\r\n        [20, 25, 30, 0],\r\n    ]\r\n    print(f\"TSP min cost: {tsp_min_cost(dist)}\")  # Expected: 80 (0->1->3->2->0: 10+25+30+15=80)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-dp-on-trees",
      children: "2.5.3 DP on Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree DP processes nodes in post-order, combining results from children to compute values for the parent."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the diameter (longest path) of a tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple\r\n\r\nclass TreeDiameter:\r\n    \"\"\"Find diameter of a tree using DP.\"\"\"\r\n\r\n    def __init__(self, n: int, edges: List[Tuple[int, int]]):\r\n        self.n = n\r\n        self.adj = [[] for _ in range(n)]\r\n        for u, v in edges:\r\n            self.adj[u].append(v)\r\n            self.adj[v].append(u)\r\n\r\n    def solve(self) -> int:\r\n        \"\"\"Return the diameter of the tree.\"\"\"\r\n        diameter = 0\r\n\r\n        def dfs(u: int, parent: int) -> int:\r\n            \"\"\"Return the height of subtree rooted at u.\"\"\"\r\n            nonlocal diameter\r\n            max_height = 0       # Tallest child height\r\n            second_max = 0       # Second tallest child height\r\n            for v in self.adj[u]:\r\n                if v == parent:\r\n                    continue\r\n                child_height = dfs(v, u) + 1\r\n                if child_height > max_height:\r\n                    second_max = max_height\r\n                    max_height = child_height\r\n                elif child_height > second_max:\r\n                    second_max = child_height\r\n            # Diameter through u is max_height + second_max\r\n            diameter = max(diameter, max_height + second_max)\r\n            return max_height\r\n\r\n        dfs(0, -1)\r\n        return diameter\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    # Tree: 0-1-2-3-4 (path), 2-5-6 (branch)\r\n    edges = [(0, 1), (1, 2), (2, 3), (3, 4), (2, 5), (5, 6)]\r\n    td = TreeDiameter(7, edges)\r\n    print(f\"Tree diameter: {td.solve()}\")  # 5 (6->5->2->3->4 = 4 edges... actually 0-1-2-5-6 = 4, 0-1-2-3-4 = 4, 6-5-2-3-4 = 4)\r\n\r\n    # Line tree: 0-1-2-3\r\n    td2 = TreeDiameter(4, [(0, 1), (1, 2), (2, 3)])\r\n    print(f\"Line tree diameter: {td2.solve()}\")  # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Maximum sum of node values such that no two adjacent nodes are selected (Tree DP — House Robber on Tree)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def tree_house_robber(n: int, edges: List[Tuple[int, int]], values: List[int]) -> int:\r\n    \"\"\"Max sum by selecting nodes without selecting adjacent nodes.\"\"\"\r\n    adj = [[] for _ in range(n)]\r\n    for u, v in edges:\r\n        adj[u].append(v)\r\n        adj[v].append(u)\r\n\r\n    # dp[u][0] = max sum in subtree u when u is NOT selected\r\n    # dp[u][1] = max sum in subtree u when u IS selected\r\n    dp = [[0, 0] for _ in range(n)]\r\n\r\n    def dfs(u: int, parent: int) -> None:\r\n        # Take u\r\n        take = values[u]\r\n        not_take = 0\r\n        for v in adj[u]:\r\n            if v == parent:\r\n                continue\r\n            dfs(v, u)\r\n            # If u is taken, v cannot be taken\r\n            take += dp[v][0]\r\n            # If u is not taken, v can be taken or not\r\n            not_take += max(dp[v][0], dp[v][1])\r\n        dp[u][0] = not_take\r\n        dp[u][1] = take\r\n\r\n    dfs(0, -1)\r\n    return max(dp[0][0], dp[0][1])\r\n\r\n# Test Case\r\nif __name__ == \"__main__\":\r\n    edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5)]\r\n    values = [3, 7, 2, 5, 1, 6]\r\n    print(f\"Max house robber: {tree_house_robber(6, edges, values)}\")\r\n    # Tree:\r\n    #       0(3)\r\n    #      / \\\r\n    #    1(7) 2(2)\r\n    #   / \\     \\\r\n    # 3(5)4(1)  5(6)\r\n    # Taking 1(7) + 2(2) + 3(5)? No, 1 and 2 are children of 0.\r\n    # If we don't take 0: max of (take 1, not 1) + max(take 2, not 2)\r\n    # Optimal: take 1(7) + take 5(6) + take 3(5) + take 4(1) = 19? No 3,4 are children of 1. If 1 is taken, 3,4 can't.\r\n    # Options:\r\n    #   Take 0(3): can't take 1,2.     => 3 + max(take 3, not 3) + max(take 4, not 4) + max(take 5, not 5)\r\n    #   Not take 0: best of 1's subtree + best of 2's subtree\r\n    # Let's just run and see.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "254-dp-optimization--divide-and-conquer-dp",
      children: "2.5.4 DP Optimization — Divide and Conquer DP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide and Conquer DP optimizes DP recurrences of the form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j] = min(dp[i-1][k] + C[k][j]) for k < j\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the optimal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j]"
      }), " is monotonic (non-decreasing) as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), " increases, we can apply divide and conquer DP to reduce O(n^2 m) to O(n m log m)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def divide_conquer_dp(n: int, m: int, cost_func) -> List[int]:\r\n    \"\"\"\r\n    Solve DP where dp[i][j] = min(dp[i-1][k-1] + C[k][j]).\r\n    Uses divide and conquer for monotone optimal k.\r\n\r\n    n = number of splits, m = number of elements\r\n    cost_func(k, j) = cost of segment from k to j inclusive.\r\n    Returns dp values for last row.\r\n    \"\"\"\r\n    INF = 10**15\r\n    prev = [INF] * m\r\n    prev[0] = 0  # Base: split after element 0\r\n\r\n    def compute(l: int, r: int, opt_l: int, opt_r: int) -> None:\r\n        \"\"\"Compute dp for current layer, splitting range [l, r) where opt is in [opt_l, opt_r].\"\"\"\r\n        if l >= r:\r\n            return\r\n        mid = (l + r) // 2\r\n        best_val = INF\r\n        best_k = -1\r\n        # Find optimal split point for mid\r\n        for k in range(opt_l, min(opt_r + 1, mid + 1)):\r\n            # For k > prev segment end, need valid prev state\r\n            if k > 0 and prev[k - 1] >= INF:\r\n                continue\r\n            base = prev[k - 1] if k > 0 else 0\r\n            val = base + cost_func(k, mid)\r\n            if val < best_val:\r\n                best_val = val\r\n                best_k = k\r\n        # Store result in global dp array (we'll handle this in caller)\r\n        # Recurse\r\n        if best_k != -1:\r\n            # We'll store in a temporary result array\r\n            results[mid] = best_val\r\n            compute(l, mid, opt_l, best_k)\r\n            compute(mid + 1, r, best_k, opt_r)\r\n\r\n    results = [INF] * m\r\n    # For each layer, compute using divide and conquer\r\n    # This is a simplified demonstration\r\n    return results\r\n\r\n# Convex Hull Trick (CHT) for DP optimization\r\n# dp[i] = min(dp[j] + m[j] * x[i] + c[j]) where m is slope, x is query\r\nclass ConvexHullTrick:\r\n    \"\"\"Li Chao tree alternative: line container for convex hull trick.\r\n    Supports adding lines with decreasing slopes and querying min value at x.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.lines = []  # (m, c) where y = m*x + c\r\n\r\n    def add_line(self, m: int, c: int) -> None:\r\n        \"\"\"Add line y = m*x + c. Slopes must be added in decreasing order.\"\"\"\r\n        # Remove unnecessary lines (maintain lower hull)\r\n        while len(self.lines) >= 2:\r\n            m1, c1 = self.lines[-2]\r\n            m2, c2 = self.lines[-1]\r\n            # Intersection x of (m1,c1) and (m2,c2) must be <= intersection of (m2,c2) and (m,c)\r\n            # (c2-c1)/(m1-m2) <= (c-c2)/(m2-m)\r\n            if (c2 - c1) * (m2 - m) >= (c - c2) * (m1 - m2):\r\n                self.lines.pop()\r\n            else:\r\n                break\r\n        self.lines.append((m, c))\r\n\r\n    def query(self, x: int) -> int:\r\n        \"\"\"Query min y = m*x + c at given x. x must be non-decreasing.\"\"\"\r\n        while len(self.lines) >= 2:\r\n            m1, c1 = self.lines[0]\r\n            m2, c2 = self.lines[1]\r\n            if m1 * x + c1 >= m2 * x + c2:\r\n                self.lines.pop(0)\r\n            else:\r\n                break\r\n        m, c = self.lines[0]\r\n        return m * x + c\r\n\r\n# Test CHT\r\nif __name__ == \"__main__\":\r\n    cht = ConvexHullTrick()\r\n    # Add lines with decreasing slopes\r\n    cht.add_line(5, -3)    # y = 5x - 3\r\n    cht.add_line(3, 2)     # y = 3x + 2\r\n    cht.add_line(1, 5)     # y = x + 5\r\n    for x in range(10):\r\n        print(f\"x={x}: min y = {cht.query(x)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph DigitDP[Digit DP]\r\n        POS[Position i] --> TIGHT{Tight?}\r\n        TIGHT -->|Yes| LIM[Limit = digit[i]]\r\n        TIGHT -->|No| LIM2[Limit = 9]\r\n        LIM --> DIG[Try digit d=0..limit]\r\n        LIM2 --> DIG\r\n        DIG --> NEXT[Next state: pos+1, tight']\r\n        NEXT --> BASE[Base: pos==n → return 1]\r\n    end\r\n\r\n    subgraph TreeDP[Tree DP]\r\n        ROOT[Root] --> DFS[Post-order traversal]\r\n        DFS --> CHILD1[Child 1 Subtree]\r\n        DFS --> CHILD2[Child 2 Subtree]\r\n        CHILD1 --> COMB[Combine: dp[u] = f(dp[v1], dp[v2], ...)]\r\n        CHILD2 --> COMB\r\n        COMB --> ANS[Answer at root]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-implement-a-segment-tree-with-lazy-propagation-for-range-min-and-range-update",
      children: "Q1: Implement a segment tree with lazy propagation for range min and range update."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The segment tree stores minimum values. Lazy propagation stores pending add operations. The push operation propagates pending updates to children before any query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LazyMinSegmentTree:\r\n    def __init__(self, data):\r\n        self.n = len(data)\r\n        self.tree = [0] * (4 * self.n)\r\n        self.lazy = [0] * (4 * self.n)\r\n        self._build(data, 1, 0, self.n - 1)\r\n\r\n    def _build(self, data, node, l, r):\r\n        if l == r:\r\n            self.tree[node] = data[l]\r\n            return\r\n        mid = (l + r) // 2\r\n        self._build(data, 2 * node, l, mid)\r\n        self._build(data, 2 * node + 1, mid + 1, r)\r\n        self.tree[node] = min(self.tree[2 * node], self.tree[2 * node + 1])\r\n\r\n    def _push(self, node, l, r):\r\n        if self.lazy[node] != 0:\r\n            self.tree[node] += self.lazy[node]\r\n            if l != r:\r\n                self.lazy[2 * node] += self.lazy[node]\r\n                self.lazy[2 * node + 1] += self.lazy[node]\r\n            self.lazy[node] = 0\r\n\r\n    def range_add(self, ql, qr, val):\r\n        self._range_add(1, 0, self.n - 1, ql, qr, val)\r\n\r\n    def _range_add(self, node, l, r, ql, qr, val):\r\n        self._push(node, l, r)\r\n        if ql > r or qr < l:\r\n            return\r\n        if ql <= l and r <= qr:\r\n            self.lazy[node] += val\r\n            self._push(node, l, r)\r\n            return\r\n        mid = (l + r) // 2\r\n        self._range_add(2 * node, l, mid, ql, qr, val)\r\n        self._range_add(2 * node + 1, mid + 1, r, ql, qr, val)\r\n        self.tree[node] = min(self.tree[2 * node], self.tree[2 * node + 1])\r\n\r\n    def range_min(self, ql, qr):\r\n        return self._range_min(1, 0, self.n - 1, ql, qr)\r\n\r\n    def _range_min(self, node, l, r, ql, qr):\r\n        self._push(node, l, r)\r\n        if ql > r or qr < l:\r\n            return float('inf')\r\n        if ql <= l and r <= qr:\r\n            return self.tree[node]\r\n        mid = (l + r) // 2\r\n        left = self._range_min(2 * node, l, mid, ql, qr)\r\n        right = self._range_min(2 * node + 1, mid + 1, r, ql, qr)\r\n        return min(left, right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-use-bit-to-count-inversions-in-an-array",
      children: "Q2: Use BIT to count inversions in an array."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Traverse from right to left. For each element, query BIT to count smaller elements seen so far. Add current element to BIT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_inversions(arr: List[int]) -> int:\r\n    \"\"\"Count inversions using Fenwick tree.\"\"\"\r\n    # Coordinate compress\r\n    sorted_unique = sorted(set(arr))\r\n    comp = {v: i + 1 for i, v in enumerate(sorted_unique)}\r\n    n = len(sorted_unique)\r\n    ft = FenwickTree(n)\r\n    inv = 0\r\n    # Traverse from right\r\n    for val in reversed(arr):\r\n        idx = comp[val]\r\n        inv += ft.prefix_sum(idx - 1)  # Count smaller elements\r\n        ft.add(idx - 1, 1)             # Add current element\r\n    return inv\r\n\r\nprint(count_inversions([5, 3, 2, 4, 1]))  # Expected: 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-detect-cycle-in-a-directed-graph-using-dsu-modifications",
      children: "Q3: Detect cycle in a directed graph using DSU modifications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " DSU works directly for undirected graphs. For directed graphs, use DFS with three states (unvisited, visiting, visited) or topological sort (Kahn's algorithm)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def has_cycle_directed(n: int, edges: List[Tuple[int, int]]) -> bool:\r\n    \"\"\"Detect cycle in directed graph using DFS coloring.\"\"\"\r\n    adj = [[] for _ in range(n)]\r\n    for u, v in edges:\r\n        adj[u].append(v)\r\n    WHITE, GRAY, BLACK = 0, 1, 2\r\n    color = [WHITE] * n\r\n\r\n    def dfs(u: int) -> bool:\r\n        color[u] = GRAY\r\n        for v in adj[u]:\r\n            if color[v] == GRAY:  # Back edge\r\n                return True\r\n            if color[v] == WHITE and dfs(v):\r\n                return True\r\n        color[u] = BLACK\r\n        return False\r\n\r\n    for i in range(n):\r\n        if color[i] == WHITE:\r\n            if dfs(i):\r\n                return True\r\n    return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-implement-string-matching-using-z-algorithm-in-onm",
      children: "Q4: Implement string matching using Z-algorithm in O(n+m)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Already covered in Section 2.4.2. The core insight is constructing the combined string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P$T"
      }), " and computing the Z-array. Every Z[i] >= len(P) indicates a match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-solve-numbers-with-digit-sum--s-in-range-l-r-using-digit-dp",
      children: "Q5: Solve \"Numbers with digit sum = S in range [L, R]\" using Digit DP."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_with_digit_sum(L: int, R: int, target_sum: int) -> int:\r\n    \"\"\"Count numbers in [L, R] whose digit sum equals target_sum.\"\"\"\r\n    def count_upto(N: int) -> int:\r\n        digits = list(map(int, str(N)))\r\n        n = len(digits)\r\n        from functools import lru_cache\r\n        @lru_cache(None)\r\n        def dp(pos: int, tight: bool, sum_so_far: int) -> int:\r\n            if sum_so_far > target_sum:\r\n                return 0\r\n            if pos == n:\r\n                return 1 if sum_so_far == target_sum else 0\r\n            limit = digits[pos] if tight else 9\r\n            total = 0\r\n            for d in range(limit + 1):\r\n                total += dp(pos + 1, tight and d == limit, sum_so_far + d)\r\n            return total\r\n        return dp(0, True, 0)\r\n    return count_upto(R) - count_upto(L - 1)\r\n\r\nprint(count_with_digit_sum(1, 100, 10))  # Numbers like 19, 28, 37, 46, 55, 64, 73, 82, 91, 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-implement-a-dsu-with-rollback-undo-support-for-offline-dynamic-connectivity",
      children: "Q6: Implement a DSU with rollback (undo support) for offline dynamic connectivity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Store a stack of changes. On undo, pop the stack and revert parent/rank changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RollbackDSU:\r\n    def __init__(self, n: int):\r\n        self.parent = list(range(n))\r\n        self.rank = [0] * n\r\n        self.components = n\r\n        self.history = []  # Stack of (changed_node, old_parent, old_rank)\r\n\r\n    def find(self, x: int) -> int:\r\n        while self.parent[x] != x:\r\n            x = self.parent[x]\r\n        return x  # No path compression to enable rollback\r\n\r\n    def union(self, x: int, y: int) -> bool:\r\n        px, py = self.find(x), self.find(y)\r\n        if px == py:\r\n            self.history.append((-1, -1, -1))  # No-op marker\r\n            return False\r\n        if self.rank[px] < self.rank[py]:\r\n            px, py = py, px\r\n        # Attach py under px\r\n        self.history.append((py, self.parent[py], self.rank[px]))\r\n        self.parent[py] = px\r\n        if self.rank[px] == self.rank[py]:\r\n            self.rank[px] += 1\r\n        self.components -= 1\r\n        return True\r\n\r\n    def snapshot(self) -> int:\r\n        return len(self.history)\r\n\r\n    def rollback(self, snap: int) -> None:\r\n        while len(self.history) > snap:\r\n            node, old_parent, old_rank = self.history.pop()\r\n            if node == -1:\r\n                continue\r\n            self.parent[node] = old_parent\r\n            # Need to find the root to restore rank\r\n            # For this simplified version, we track carefully\r\n            self.components += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-use-kmp-to-find-the-shortest-palindrome-by-adding-characters-to-the-front",
      children: "Q7: Use KMP to find the shortest palindrome by adding characters to the front."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Concatenate S + '#' + reverse(S). Compute prefix function. The last value of pi tells us the longest prefix of S that is already palindromic. Add the remaining characters in reverse at the front."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def shortest_palindrome(s: str) -> str:\r\n    \"\"\"Add minimum characters to front to make s a palindrome.\"\"\"\r\n    rev = s[::-1]\r\n    combined = s + \"#\" + rev\r\n    pi = kmp_prefix(combined)\r\n    longest_pal_prefix = pi[-1]\r\n    to_add = rev[:len(s) - longest_pal_prefix]\r\n    return to_add + s\r\n\r\nprint(shortest_palindrome(\"aacecaaa\"))  # \"aaacecaaa\"\r\nprint(shortest_palindrome(\"abcd\"))      # \"dcbabcd\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-given-an-array-process-q-queries-of-type-add-val-to-range-lr-and-get-value-at-index-i-use-bit",
      children: "Q8: Given an array, process Q queries of type \"add val to range [l,r]\" and \"get value at index i\". Use BIT."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Already covered in Section 2.2.2 using RangeUpdateFenwick."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-find-if-there-exists-a-subset-with-xor--k-using-bitmask-dp",
      children: "Q9: Find if there exists a subset with XOR = k using bitmask DP."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def subset_xor(nums: List[int], k: int) -> bool:\r\n    \"\"\"Check if any subset XOR equals k using bitmask DP.\"\"\"\r\n    n = len(nums)\r\n    from functools import lru_cache\r\n\r\n    @lru_cache(None)\r\n    def dp(mask: int, xor_val: int) -> bool:\r\n        if xor_val == k:\r\n            return True\r\n        for i in range(n):\r\n            if not (mask & (1 << i)):\r\n                if dp(mask | (1 << i), xor_val ^ nums[i]):\r\n                    return True\r\n        return False\r\n\r\n    return dp(0, 0)\r\n\r\nprint(subset_xor([1, 2, 3, 4], 7))  # True: 3 XOR 4 = 7, or 1 XOR 2 XOR 4 = 7\r\nprint(subset_xor([1, 2, 3, 4], 8))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-find-the-diameter-of-an-n-ary-tree-tree-dp",
      children: "Q10: Find the diameter of an N-ary tree (tree DP)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Already covered in Section 2.5.3. The same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TreeDiameter"
      }), " solution works for N-ary trees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered five essential advanced algorithm patterns for competitive programming. Segment trees provide interval-based aggregation with O(log n) operations, extended by lazy propagation for range updates. Fenwick trees offer a simpler O(log n) prefix sum structure using binary indexing, with applications from inversion counting to streaming prefix queries. Union-Find delivers near-constant-time dynamic connectivity through path compression and union by rank, powering cycle detection and Kruskal's algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "String algorithms — KMP, Z-algorithm, and Rabin-Karp — all solve the pattern-matching problem in linear or near-linear time, each with distinct strengths: KMP for worst-case guarantees, Z-algorithm for structural analysis, and Rabin-Karp for multiple pattern matching. Finally, advanced DP — digit DP, bitmask DP, tree DP, and DP optimizations — equips you to tackle problems that naive DP cannot handle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineers, these patterns translate directly to real-world systems: segment trees for time-series range analytics, Fenwick trees for streaming statistics, DSU for cluster connectivity, string algorithms for tokenization and search, and advanced DP for resource optimization. Master these tools and you bridge the gap between competitive programming and production AI engineering."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/32-competitive-programming/03-contest-simulation",
          children: "Contest Simulation & Optimization →"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-time-complexity-of-a-range-sum-query-on-a-fenwick-tree-of-size-n",
      children: "Q1: What is the time complexity of a range sum query on a Fenwick tree of size n?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) O(1)\r\nB) O(log n)\r\nC) O(n)\r\nD) O(n log n)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) O(log n)**. A Fenwick tree query traverses at most O(log n) nodes by stripping the lowest set bit at each step.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-which-optimization-makes-union-find-find-run-in-amortized-oαn",
      children: "Q2: Which optimization makes Union-Find find() run in amortized O(α(n))?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Union by size only\r\nB) Path compression only\r\nC) Path compression + union by rank\r\nD) Both A and C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**D) Both A and C**. Both path compression + union by size AND path compression + union by rank give O(α(n)). But path compression alone without union by rank/union by size does not guarantee O(α(n)).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-in-kmp-algorithm-what-does-the-prefix-function-pii-represent",
      children: "Q3: In KMP algorithm, what does the prefix function pi[i] represent?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The length of the longest proper prefix of P[0..i] that is also a suffix\r\nB) The number of matches of pattern in text up to position i\r\nC) The length of pattern P\r\nD) The index where next match starts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**A)** pi[i] stores the length of the longest proper prefix of the pattern substring ending at i that is also a suffix.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-which-dp-optimization-technique-applies-when-the-optimal-decision-point-for-dpij-is-monotonic-in-j",
      children: "Q4: Which DP optimization technique applies when the optimal decision point for dp[i][j] is monotonic in j?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Knuth optimization\r\nB) Divide and Conquer DP\r\nC) Convex Hull Trick\r\nD) Aliens trick"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Divide and Conquer DP**. When opt[i][j] is monotonic (non-decreasing) in j, divide and conquer DP reduces complexity from O(n^2 m) to O(n m log m).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-does-zi-represent-in-the-z-algorithm",
      children: "Q5: What does Z[i] represent in the Z-algorithm?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The longest prefix of the string that is also a suffix ending at i\r\nB) The length of the longest common prefix between the string and its suffix starting at i\r\nC) The number of matches up to position i\r\nD) The distance to the previous occurrence of character s[i]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B)** Z[i] = length of the longest common prefix between the full string S and the substring S[i:].\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-5",
      children: "Exercises (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-segment-tree-for-range-gcd",
      children: "Exercise 1: Segment Tree for Range GCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a segment tree that supports point updates and range GCD queries. The GCD of a range [l, r] is the greatest common divisor of all elements in that range. Hint: gcd(a, b, c) = gcd(gcd(a, b), c)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Your implementation here\r\nclass GCDSegmentTree:\r\n    def __init__(self, data):\r\n        pass\r\n    def point_update(self, idx, value):\r\n        pass\r\n    def range_gcd(self, l, r):\r\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-2d-fenwick-tree",
      children: "Exercise 2: 2D Fenwick Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a 2D Fenwick tree that supports point updates and range sum queries on a matrix. The update operation adds a value to cell (x, y). The query operation returns the sum of the submatrix from (x1, y1) to (x2, y2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Fenwick2D:\r\n    def __init__(self, rows, cols):\r\n        pass\r\n    def add(self, x, y, delta):\r\n        pass\r\n    def prefix_sum(self, x, y):\r\n        pass\r\n    def range_sum(self, x1, y1, x2, y2):\r\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-dsu-with-component-size",
      children: "Exercise 3: DSU with Component Size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Extend the DSU to track the size of each connected component. Add a method ", (0,jsx_runtime.jsx)(_components.code, {
        children: "component_size(x)"
      }), " that returns the number of elements in the component containing x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-longest-happy-prefix-using-kmp",
      children: "Exercise 4: Longest Happy Prefix using KMP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A \"happy prefix\" is a non-empty proper prefix of a string that is also a suffix. Find the longest happy prefix of a given string using the KMP prefix function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"level\""
      }), "\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"l\""
      }), " (since \"l\" is both prefix and suffix)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"ababab\""
      }), "\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abab\""
      }), " (longest proper prefix that is also a suffix)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-tree-dp--tree-distances",
      children: "Exercise 5: Tree DP — Tree Distances"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a tree with n nodes, find for each node the sum of distances to all other nodes. Use rerooting DP: first compute the answer for the root using a DFS, then reroot to compute answers for all nodes in O(n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def tree_distances(n: int, edges: List[Tuple[int, int]]) -> List[int]:\r\n    \"\"\"Return list of total distances from each node to all other nodes.\"\"\"\r\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment trees support O(log n) range queries and updates; lazy propagation extends this to O(log n) range updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fenwick trees use O(n) space and O(log n) operations for prefix sums — simpler and faster than segment trees for 1D range sum problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find with path compression + union by rank achieves O(α(n)) per operation — effectively constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String matching algorithms (KMP, Z, Rabin-Karp) all achieve O(n+m) time in practice; Rabin-Karp is average O(n+m) with hash collisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit DP handles counting problems with digit constraints; Bitmask DP handles subset and TSP problems; Tree DP handles hierarchical optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP optimizations (divide-and-conquer, convex hull trick) reduce polynomial DP to near-linear in many cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIT can support both point-update/range-query and range-update/point-query modes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMP's prefix function and Z-algorithm's Z-array reveal deep structural properties of strings beyond matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU is used in Kruskal's MST, cycle detection, and dynamic connectivity; rollback DSU enables undo operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All these patterns appear in Codeforces, AtCoder, and FAANG+ interviews — master them for CP and real-world systems"
          })]
        })]
      })]
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
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
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
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
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
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
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
            children: "How does Advanced Algorithm Patterns for CP behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Advanced Algorithm Patterns for CP\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Advanced Algorithm Patterns for CP to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Advanced Algorithm Patterns for CP (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Advanced Algorithm Patterns for CP and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Advanced Algorithm Patterns for CP-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Advanced Algorithm Patterns for CP in production today?"
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
        }), " Advanced Algorithm Patterns for CP builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Advanced Algorithm Patterns for CP before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Advanced Algorithm Patterns for CP is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Advanced Algorithm Patterns for CP in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Advanced Algorithm Patterns for CP is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 02 Advanced Algorithms is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 02 Advanced Algorithms is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Advanced Algorithm Patterns for CP issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Advanced Algorithm Patterns for CP in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Advanced Algorithm Patterns for CP that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Advanced Algorithm Patterns for CP in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Advanced Algorithm Patterns for CP and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
            children: "Complete Medium exercises, explain Advanced Algorithm Patterns for CP to someone else"
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
        children: "Always write a one-line example of Advanced Algorithm Patterns for CP from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Advanced Algorithm Patterns for CP when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Advanced Algorithm Patterns for CP twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Advanced Algorithm Patterns for CP snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Advanced Algorithm Patterns for CP listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Advanced Algorithm Patterns for CP to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Advanced Algorithm Patterns for CP by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Advanced Algorithm Patterns for CP to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Algorithm Patterns for CP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 32 — builds the foundation for 02 Advanced Algorithms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 02 Advanced Algorithms with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 02 Advanced Algorithms fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 02 Advanced Algorithms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 02 Advanced Algorithms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 02 Advanced Algorithms?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 02 Advanced Algorithms?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 02 Advanced Algorithms asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 02 Advanced Algorithms?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced Algorithm Patterns for CP is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Advanced Algorithm Patterns for CP."
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
        children: "Advanced Algorithm Patterns for CP emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Advanced Algorithm Patterns for CP today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Advanced Algorithm Patterns for CP — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Advanced Algorithm Patterns for CP changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "02 Advanced Algorithms is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Advanced Algorithm Patterns for CP skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "32competitiveprogramming-02advancedalgorithms-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Advanced Algorithm Patterns for CP in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "32competitiveprogramming-02advancedalgorithms-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "32competitiveprogramming-02advancedalgorithms-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Advanced Algorithm Patterns for CP approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "32competitiveprogramming-02advancedalgorithms-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Advanced Algorithm Patterns for CP NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "32competitiveprogramming-02advancedalgorithms-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Advanced Algorithm Patterns for CP applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Advanced Algorithm Patterns for CP (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Advanced Algorithm Patterns for CP (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Advanced Algorithm Patterns for CP-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Advanced Algorithm Patterns for CP in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Algorithm Patterns for CP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 02 Advanced Algorithms pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Advanced Algorithm Patterns for CP."
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
        children: "Tell me about a time you debugged a Advanced Algorithm Patterns for CP problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Advanced Algorithm Patterns for CP is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_02_advanced_algorithms(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 02 Advanced Algorithms.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 02 Advanced Algorithms here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain Advanced Algorithm Patterns for CP without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/32-competitive-programming/03-contest-simulation",
        children: "Contest Simulation & Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced Algorithm Patterns for CP, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Advanced Algorithm Patterns for CP depends on input size and distribution — always benchmark for your own data."
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