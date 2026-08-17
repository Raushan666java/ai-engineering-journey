"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61473],{

/***/ 48422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_18_union_find_md_3e1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-18-union-find-md-3e1.json
const site_docs_courses_data_structures_18_union_find_md_3e1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/18-union-find","title":"Chapter 18: Union-Find (Disjoint Set Union)","description":"Prev Segment Tree and Fenwick Tree | Next: None","source":"@site/docs/courses/data-structures/18-union-find.md","sourceDirName":"courses/data-structures","slug":"/data-structures/18-union-find","permalink":"/ai-engineering-journey/data-structures/18-union-find","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-union-find","slug":"/data-structures/18-union-find","title":"Chapter 18: Union-Find (Disjoint Set Union)","sidebar_label":"Chapter 18: Union-Find (Disjoint Set Union)","sidebar_position":18},"sidebar":"course-data-structures","previous":{"title":"Chapter 17: Segment Tree","permalink":"/ai-engineering-journey/data-structures/17-segment-tree"},"next":{"title":"Data Structures — Complete Course","permalink":"/ai-engineering-journey/data-structures"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/18-union-find.md


const frontMatter = {
	id: '18-union-find',
	slug: '/data-structures/18-union-find',
	title: 'Chapter 18: Union-Find (Disjoint Set Union)',
	sidebar_label: 'Chapter 18: Union-Find (Disjoint Set Union)',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Union-Find (Disjoint Set Union)';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Union-Find Matters",
  "id": "why-union-find-matters",
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
  "value": "The Find Operation",
  "id": "the-find-operation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "What Does Find Do?",
  "id": "what-does-find-do",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Find Operation",
  "id": "step-by-step-dry-run-find-operation",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations",
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
  "value": "The Union Operation",
  "id": "the-union-operation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "What Does Union Do?",
  "id": "what-does-union-do",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Pseudocode (without rank optimization — basic version)",
  "id": "pseudocode-without-rank-optimization--basic-version",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Union Operation",
  "id": "step-by-step-dry-run-union-operation",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
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
  "value": "Path Compression",
  "id": "path-compression",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "What Does Path Compression Do?",
  "id": "what-does-path-compression-do",
  "level": 3
}, {
  "value": "Algorithm Steps (as part of Find)",
  "id": "algorithm-steps-as-part-of-find",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Path Compression Effect",
  "id": "step-by-step-dry-run-path-compression-effect",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
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
  "value": "Union by Rank / Union by Size",
  "id": "union-by-rank--union-by-size",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "What Do Union by Rank / Size Do?",
  "id": "what-do-union-by-rank--size-do",
  "level": 3
}, {
  "value": "Algorithm Steps (Union by Rank)",
  "id": "algorithm-steps-union-by-rank",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Union by Rank",
  "id": "step-by-step-dry-run-union-by-rank",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
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
  "value": "Complete DSU Implementation (All Optimizations)",
  "id": "complete-dsu-implementation-all-optimizations",
  "level": 2
}, {
  "value": "C++",
  "id": "c",
  "level": 3
}, {
  "value": "Python",
  "id": "python",
  "level": 3
}, {
  "value": "Java",
  "id": "java",
  "level": 3
}, {
  "value": "Cycle Detection in Undirected Graph",
  "id": "cycle-detection-in-undirected-graph",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "What Does Cycle Detection with DSU Do?",
  "id": "what-does-cycle-detection-with-dsu-do",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Cycle Detection",
  "id": "step-by-step-dry-run-cycle-detection",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
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
  "value": "Kruskal&#39;s Algorithm (Minimum Spanning Tree)",
  "id": "kruskals-algorithm-minimum-spanning-tree",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "What Does Kruskal&#39;s Algorithm Do?",
  "id": "what-does-kruskals-algorithm-do",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run: Kruskal&#39;s Algorithm",
  "id": "step-by-step-dry-run-kruskals-algorithm",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-5",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
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
  "value": "Union-Find Applications Comparison Table",
  "id": "union-find-applications-comparison-table",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Number of Islands II (Dynamic Island Counting)",
  "id": "1-number-of-islands-ii-dynamic-island-counting",
  "level": 3
}, {
  "value": "2. Longest Consecutive Sequence",
  "id": "2-longest-consecutive-sequence",
  "level": 3
}, {
  "value": "3. Accounts Merge",
  "id": "3-accounts-merge",
  "level": 3
}, {
  "value": "4. Redundant Connection",
  "id": "4-redundant-connection",
  "level": 3
}, {
  "value": "5. Detect Cycle in an Undirected Graph",
  "id": "5-detect-cycle-in-an-undirected-graph",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Kruskal&#39;s Minimum Spanning Tree — Network Design",
  "id": "1-kruskals-minimum-spanning-tree--network-design",
  "level": 3
}, {
  "value": "2. Image Segmentation — Connected Component Labeling",
  "id": "2-image-segmentation--connected-component-labeling",
  "level": 3
}, {
  "value": "3. Social Networks — Friend Circles and Recommendations",
  "id": "3-social-networks--friend-circles-and-recommendations",
  "level": 3
}, {
  "value": "4. Percolation Theory — Physics and Materials Science",
  "id": "4-percolation-theory--physics-and-materials-science",
  "level": 3
}, {
  "value": "5. Dynamic Connectivity — Database and Distributed Systems",
  "id": "5-dynamic-connectivity--database-and-distributed-systems",
  "level": 3
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
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
  "value": "Quick Reference: DSU Operations",
  "id": "quick-reference-dsu-operations",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Common Mistakes &amp; GFG Deepening",
  "id": "common-mistakes--gfg-deepening",
  "level": 2
}, {
  "value": "Common Mistakes (GFG-Style)",
  "id": "common-mistakes-gfg-style",
  "level": 3
}, {
  "value": "TypeScript Disjoint Set Union Implementation",
  "id": "typescript-disjoint-set-union-implementation",
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
  "value": "DSU Variants Comparison",
  "id": "dsu-variants-comparison",
  "level": 3
}, {
  "value": "Classic Graph Algorithms with DSU",
  "id": "classic-graph-algorithms-with-dsu",
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
  "value": "Interview-Style Problems",
  "id": "interview-style-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
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
        id: "chapter-18-union-find-disjoint-set-union",
        children: "Chapter 18: Union-Find (Disjoint Set Union)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/17-segment-tree",
        children: "Chapter 17: Segment Tree and Fenwick Tree"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Disjoint Set Union (DSU) data structure and its two core operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement find with path compression and union by rank/size in C++, Python, and Java."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze why the inverse-Ackermann amortized complexity is effectively constant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply DSU to detect cycles in undirected graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use DSU in Kruskal's algorithm to construct a Minimum Spanning Tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve classic interview problems (Number of Islands II, Accounts Merge, Redundant Connection) using DSU."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize real-world applications — social networks, image segmentation, percolation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-union-find-matters",
      children: "Why Union-Find Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you walk into a party with 100 people you've never met. You want to know: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "are these two people in the same social circle?"
      }), " Each time someone introduces themselves — \"Hi, I'm Alice, and this is my friend Bob\" — you mentally merge their groups. After enough introductions, you can answer instantly whether any two people belong to the same extended friend group."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is exactly what ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Union-Find"
      }), " does. It starts with every element in its own set (every person is their own island). As relationships arrive — (Alice, Bob), (Bob, Charlie) — it ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unions"
      }), " their sets. When you need to check connectivity — \"Is Dave in Alice's circle?\" — it ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finds"
      }), " the representative of each person's set and compares."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Union-Find is the most efficient data structure for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic connectivity"
      }), " — handling union and find queries interleaved in real time. With path compression and union by rank, both operations run in amortized ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(α(n))"
      }), ", the inverse Ackermann function — for any practical input (n ≤ 10⁶⁰⁰), α(n) ≤ 5. That's effectively ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constant time per operation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From Kruskal's MST (networks, circuit design) to social networks (\"People You May Know\"), image segmentation, and percolation theory — Union-Find is the hidden engine behind connectivity at scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DSU operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find + Union with optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-constant time per operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten tree during find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized alone, O(α(n)) with union by rank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union by rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attach smaller tree under larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits tree depth to O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combined optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path compression + union by rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized — effectively constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort edges + DSU for cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union adjacent elements in any graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n α(n)) for n elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaved union + find queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer online in near-constant time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[DSU Operations] --> B[find(x)]\n    A --> C[union(x,y)]\n    B --> D[Path Compression]\n    C --> E[Union by Rank]\n    D --> F[O(α(n)) — Inverse Ackermann]\n    E --> F\n    F --> G[Core Applications]\n    G --> H[Kruskal's MST]\n    G --> I[Cycle Detection]\n    G --> J[Connected Components]\n    G --> K[Image Segmentation]\n    G --> L[Social Networks]\n    F --> M[Interview Problems]\n    M --> N[Number of Islands II]\n    M --> O[Accounts Merge]\n    M --> P[Redundant Connection]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DSU, with path compression and union by rank, supports find and union in amortized near-constant O(α(n)) — the most efficient dynamic connectivity structure ever devised."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-find-operation",
      children: "The Find Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a corporate org chart. Every employee reports to a manager, who reports to a director, who reports to the CEO. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Find"
      }), " is the question: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Who is the ultimate boss of this person?"
      }), " You follow the chain of command until you reach the top — the person who reports to nobody (self-loop). That top person is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "representative"
      }), " of the entire set (the whole org tree)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-does-find-do",
      children: "What Does Find Do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given an element ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), ", Find returns the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "root"
      }), " (representative) of the set containing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), ". If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent[x] == x"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is a root. Otherwise, we recursively follow parent pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent[x] == x"
        }), ". If yes, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is the root — return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, recursively call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find(parent[x])"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the root found by the recursive call."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION find(x):\n    IF parent[x] != x THEN\n        parent[x] = find(parent[x])    // path compression\n    END IF\n    RETURN parent[x]\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-find-operation",
      children: "Step-by-Step Dry Run: Find Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State"
      }), " (after some unions): parent = [0, 0, 1, 2, 4] for n = 5 elements."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tree structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0 ← 1 ← 2 ← 3     4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: find(3)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[x]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[x] == x?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[1] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[2] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[3] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After find(3)"
      }), ": parent = [0, 0, 0, 0, 4]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now the tree is flat — 1, 2, 3 all point directly to root 0. That's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "path compression"
      }), " in action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0 ← 1     (parent[1]=0)\n    0 ← 2     (parent[2]=0)\n    0 ← 3     (parent[3]=0)\n    4         (alone)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nint find(int x) {\n    if (parent[x] != x) {\n        parent[x] = find(parent[x]); // path compression\n    }\n    return parent[x];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef find(self, x: int) -> int:\n    if self.parent[x] != x:\n        self.parent[x] = self.find(self.parent[x])  # path compression\n    return self.parent[x]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic int find(int x) {\n    if (parent[x] != x) {\n        parent[x] = find(parent[x]); // path compression\n    }\n    return parent[x];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Without path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree can degenerate into a linked list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With path compression only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each find flattens the path; subsequent finds are faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With both optimizations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(α(n))"
            }), " amortized"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse Ackermann function — see combined analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(α(n))?"
      }), " The inverse Ackermann function α(n) grows so slowly that for any n ≤ 10⁶⁰⁰, α(n) ≤ 5. It is the inverse of the Ackermann function A(n), which grows faster than any primitive recursive function. The proof (by Tarjan 1975) shows that the number of times path compression can improve any node's parent is bounded by the iterated logarithm, which collapses under the inverse Ackermann bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
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
            children: "Extremely fast — effectively constant per operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only operation; no built-in support for splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement (~10 lines of code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fast way to list all elements in a set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for online connectivity queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not support set deletion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well for large n (millions of elements)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without optimizations, worst-case is O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(0) → 0 immediately; parent[0] == 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Element is root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns itself immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All elements connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every find returns the same root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(x) where parent[x] == x; O(1) termination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-union-operation",
      children: "The Union Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two companies are merging. Each has its own CEO (root). To merge, the board decides which CEO stays at the top and which becomes a subordinate. That's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "union"
      }), ": pick two sets, designate one root as the new overall root, and attach the other root under it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-does-union-do",
      children: "What Does Union Do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given two elements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), ", Union merges the sets containing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), ". It finds the roots of both, and if they are different, makes one root point to the other. This reduces the total number of sets by one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the root of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX = find(x)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the root of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY = find(y)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX == rootY"
        }), ", they are already in the same set — return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX"
        }), " (or vice versa, depending on rank/size)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-without-rank-optimization--basic-version",
      children: "Pseudocode (without rank optimization — basic version)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION union(x, y):\n    rootX = find(x)\n    rootY = find(y)\n    IF rootX == rootY THEN RETURN\n    parent[rootY] = rootX        // attach Y's root under X's root\n    numSets = numSets - 1\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-union-operation",
      children: "Step-by-Step Dry Run: Union Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State"
      }), ": parent = [0, 1, 2, 3, 4], n = 5, numSets = 5."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: union(2, 4)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[] after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "numSets"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(2) = 2, find(4) = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rootX(2) ≠ rootY(4) → attach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[4] = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrement set count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 3, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next: union(1, 3)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[] after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "numSets"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(1) = 1, find(3) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 3, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rootX(1) ≠ rootY(3) → attach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[3] = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrement set count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next: union(3, 4)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[] after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "numSets"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(3) = find(1) = 1, find(4) = find(2) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rootX(1) ≠ rootY(2) → attach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[2] = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrement set count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 1, 1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final structure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0        1 ← 2 ← 4\n         ↑\n         3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets: {0}, {1, 2, 3, 4}, numSets = 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nvoid unionSets(int x, int y) {\n    int rootX = find(x);\n    int rootY = find(y);\n    if (rootX == rootY) return;\n\n    parent[rootY] = rootX; // basic: attach Y under X\n    --numSets;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef union(self, x: int, y: int) -> None:\n    root_x = self.find(x)\n    root_y = self.find(y)\n    if root_x == root_y:\n        return\n\n    self.parent[root_y] = root_x  # basic: attach Y under X\n    self.num_sets -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic void union(int x, int y) {\n    int rootX = find(x);\n    int rootY = find(y);\n    if (rootX == rootY) return;\n\n    parent[rootY] = rootX; // basic: attach Y under X\n    numSets--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (unoptimized) union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each find can traverse O(n) nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flattening reduces future traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With union by rank"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(α(n))"
            }), " amortized"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both optimizations combined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
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
            children: "Merges sets in near-constant time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot undo a union (without rollback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically maintains connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order of unions affects tree shape (unoptimized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal code overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ability to split a set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union already-connected elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(u) == find(v) → returns immediately, no change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-union (x == y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rootX == rootY — no-op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union with a root element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works identically — find returns the root immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union across large, already-compressed trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both finds are O(α(n)), union is O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "path-compression",
      children: "Path Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a large bureaucracy, every time someone asks, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Who's the CEO?\""
      }), ", the person they ask writes down the answer so nobody has to ask again. If a junior employee asks who the CEO is, they climb the chain, find the CEO, and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "everyone on the path"
      }), " now directly knows the CEO. Next time, any of them answer in one step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-does-path-compression-do",
      children: "What Does Path Compression Do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["During ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find(x)"
      }), ", after locating the root, every node visited on the path from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " to the root has its parent pointer updated to point directly to the root. This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flattens"
      }), " the tree for future operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-as-part-of-find",
      children: "Algorithm Steps (as part of Find)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively follow parent pointers until reaching the root."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On the way back from recursion, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent[current] = root"
        }), " for every node on the path."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future finds on any node in this subtree now take O(1) or near-O(1)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION find(x):\n    IF parent[x] != x THEN\n        parent[x] = find(parent[x])    // ← path compression: set parent to root\n    END IF\n    RETURN parent[x]\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-path-compression-effect",
      children: "Step-by-Step Dry Run: Path Compression Effect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before"
      }), ": parent = [0, 0, 1, 2, 3, 5] — a deep chain for elements 1-4."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0 ← 1 ← 2 ← 3 ← 4     5 (root of itself)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Call find(4)"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Recursion Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[x]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[x] after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse find(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root"
            }), ", return 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[1] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[2] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[3] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[4] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After find(4)"
      }), ": parent = [0, 0, 0, 0, 0, 5]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      0\n    ↗ ↑ ↗ ↗\n   1  2 3 4       5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now find(1), find(2), find(3), find(4) all return 0 in O(1) each. The tree was flattened from depth 4 to depth 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Path compression is implemented entirely inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find"
      }), ". See the Find Operation section above for C++, Python, Java."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Without compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked-list tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With compression only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each find flattens; Fisher's bound shows log* n amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With rank + compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal — Tarjan proved the inverse Ackermann bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No additional arrays needed — uses parent array in-place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: path compression alone is already very good (O(log n) amortized). Adding union by rank only improves it from O(log n) to O(α(n)) — a theoretical improvement that matters more for proofs than for practice."
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
            children: "Zero memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only applies during find, not during union"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatically speeds up future queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No benefit if find is never called on the same path twice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees amortized efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive implementation can stack-overflow on extremely deep trees (use iterative as fallback)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Already-flat tree (root has children)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find returns root in O(1); no compression needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No path to compress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very deep tree (n = 10⁶)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion depth = n; use iterative find to avoid stack overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root called directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[root] == root, returns immediately, no compression"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "union-by-rank--union-by-size",
      children: "Union by Rank / Union by Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When two companies merge, the smarter strategy is: the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "smaller"
      }), " company's CEO reports to the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "larger"
      }), " company's CEO. Why? Because fewer people need to update their business cards. If the 10,000-person company absorbs the 10-person startup, only 10 people change their reporting — not 10,000. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Union by rank"
      }), " does exactly this: the shorter tree is always attached under the taller tree, keeping the overall tree height minimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-do-union-by-rank--size-do",
      children: "What Do Union by Rank / Size Do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Union by rank"
      }), ": Each node stores a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "rank"
      }), " (an upper bound on its height). When merging, the root with lower rank is attached under the root with higher rank. If ranks are equal, one becomes the new root and its rank increments by 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Union by size"
      }), ": Same idea, but using ", (0,jsx_runtime.jsx)(_components.em, {
        children: "size"
      }), " (number of elements) instead of rank. The smaller set is attached under the larger set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both achieve O(log n) tree height without path compression, and O(α(n)) with path compression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-union-by-rank",
      children: "Algorithm Steps (Union by Rank)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find roots: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX = find(x)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY = find(y)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX == rootY"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rank[rootX] < rank[rootY]"
        }), ": attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY"
        }), " (parent[rootX] = rootY)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rank[rootX] > rank[rootY]"
        }), ": attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else (equal ranks): attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootY"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rootX"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rank[rootX]"
        }), " by 1."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement set count."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION union(x, y):\n    rootX = find(x)\n    rootY = find(y)\n    IF rootX == rootY THEN RETURN\n\n    IF rank[rootX] < rank[rootY] THEN\n        parent[rootX] = rootY\n    ELSE IF rank[rootX] > rank[rootY] THEN\n        parent[rootY] = rootX\n    ELSE\n        parent[rootY] = rootX\n        rank[rootX] = rank[rootX] + 1\n    END IF\n    numSets = numSets - 1\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-union-by-rank",
      children: "Step-by-Step Dry Run: Union by Rank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State"
      }), ": parent = [0, 1, 2, 3, 4, 5], rank = [0, 0, 0, 0, 0, 0], n = 6."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operation sequence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "union(0, 1)"
      }), ": roots 0 and 1, both rank 0 → equal → attach 1→0, rank[0] = 1."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "union(2, 3)"
      }), ": roots 2 and 3, both rank 0 → attach 3→2, rank[2] = 1."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "union(4, 5)"
      }), ": roots 4 and 5, both rank 0 → attach 5→4, rank[4] = 1."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
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
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "union(0, 4)"
      }), ": rootX = find(0) = 0 (rank 1), rootY = find(4) = 4 (rank 1). Equal ranks → attach 4→0, rank[0] = 2."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
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
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: 5 still points to 4 (not directly to 0), but find(5) will compress it later."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "union(2, 0)"
      }), ": rootX = find(2) = 2 (rank 1), rootY = find(0) = 0 (rank 2). rank[2] < rank[0] → attach 2→0."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rank[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
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
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final tree"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        0\n      ↗ ↑ ↗\n     1  2 4\n        ↑ ↑\n        3 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Height = 2, numSets = 1. Without union by rank, this could have been a chain of depth 5."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nvoid unionByRank(int x, int y) {\n    int rootX = find(x);\n    int rootY = find(y);\n    if (rootX == rootY) return;\n\n    if (rank[rootX] < rank[rootY]) {\n        parent[rootX] = rootY;\n    } else if (rank[rootX] > rank[rootY]) {\n        parent[rootY] = rootX;\n    } else {\n        parent[rootY] = rootX;\n        rank[rootX]++;\n    }\n    --numSets;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef union(self, x: int, y: int) -> None:\n    root_x = self.find(x)\n    root_y = self.find(y)\n    if root_x == root_y:\n        return\n\n    if self.rank[root_x] < self.rank[root_y]:\n        self.parent[root_x] = root_y\n    elif self.rank[root_x] > self.rank[root_y]:\n        self.parent[root_y] = root_x\n    else:\n        self.parent[root_y] = root_x\n        self.rank[root_x] += 1\n    self.num_sets -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic void union(int x, int y) {\n    int rootX = find(x);\n    int rootY = find(y);\n    if (rootX == rootY) return;\n\n    if (rank[rootX] < rank[rootY]) {\n        parent[rootX] = rootY;\n    } else if (rank[rootX] > rank[rootY]) {\n        parent[rootY] = rootX;\n    } else {\n        parent[rootY] = rootX;\n        rank[rootX]++;\n    }\n    numSets--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Why O(α(n)) for Combined Optimizations"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Union by rank alone"
            }), " guarantees tree height ≤ log₂(n). Each find traverses at most O(log n) nodes."]
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Path compression alone"
            }), " makes subsequent finds cheaper. Tarjan (1975) proved amortized O(α(n))."]
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Together"
            }), ", union keeps height low and find flattens aggressively. The inverse Ackermann bound emerges because the number of times a node's parent can change is bounded by the iterated logarithm, which collapses to ≤ 5 for all practical n."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition"
      }), ": α(n) grows slower than log(log(...(n)...)) for any fixed number of logs. For n = 10⁶⁰⁰, α(n) ≈ 5. Each operation is effectively O(1)."]
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
            children: "Guarantees O(log n) height even without path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires O(n) extra space for rank/size array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combined with path compression: O(α(n)) — theoretical best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union by size is slightly more intuitive but equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No complex logic — simple if-else"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not help with set enumeration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both roots have rank 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attach arbitrarily (e.g., second under first), new rank becomes 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equal ranks at any level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One becomes child, parent's rank increments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root rank never decreases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank is monotonic — only increases, never decreases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large rank difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower-rank root attached under higher-rank root; no rank change"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-dsu-implementation-all-optimizations",
      children: "Complete DSU Implementation (All Optimizations)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c",
      children: "C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class DSU {\nprivate:\n    std::vector<int> parent;\n    std::vector<int> rank;\n    int numSets;\n\npublic:\n    DSU(int n) : numSets(n) {\n        parent.resize(n);\n        rank.resize(n, 0);\n        for (int i = 0; i < n; ++i) parent[i] = i;\n    }\n\n    int find(int x) {\n        if (parent[x] != x) {\n            parent[x] = find(parent[x]); // path compression\n        }\n        return parent[x];\n    }\n\n    void unionSets(int x, int y) {\n        int rx = find(x), ry = find(y);\n        if (rx == ry) return;\n\n        if (rank[rx] < rank[ry]) {\n            parent[rx] = ry;\n        } else if (rank[rx] > rank[ry]) {\n            parent[ry] = rx;\n        } else {\n            parent[ry] = rx;\n            rank[rx]++;\n        }\n        --numSets;\n    }\n\n    bool connected(int x, int y) { return find(x) == find(y); }\n    int countSets() const { return numSets; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python",
      children: "Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DSU:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n        self.num_sets = n\n\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  # path compression\n        return self.parent[x]\n\n    def union(self, x: int, y: int) -> None:\n        rx, ry = self.find(x), self.find(y)\n        if rx == ry:\n            return\n\n        if self.rank[rx] < self.rank[ry]:\n            self.parent[rx] = ry\n        elif self.rank[rx] > self.rank[ry]:\n            self.parent[ry] = rx\n        else:\n            self.parent[ry] = rx\n            self.rank[rx] += 1\n        self.num_sets -= 1\n\n    def connected(self, x: int, y: int) -> bool:\n        return self.find(x) == self.find(y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java",
      children: "Java"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class DSU {\n    private int[] parent;\n    private int[] rank;\n    private int numSets;\n\n    public DSU(int n) {\n        numSets = n;\n        parent = new int[n];\n        rank = new int[n];\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n\n    public int find(int x) {\n        if (parent[x] != x) {\n            parent[x] = find(parent[x]); // path compression\n        }\n        return parent[x];\n    }\n\n    public void union(int x, int y) {\n        int rx = find(x), ry = find(y);\n        if (rx == ry) return;\n\n        if (rank[rx] < rank[ry]) {\n            parent[rx] = ry;\n        } else if (rank[rx] > rank[ry]) {\n            parent[ry] = rx;\n        } else {\n            parent[ry] = rx;\n            rank[rx]++;\n        }\n        numSets--;\n    }\n\n    public boolean connected(int x, int y) {\n        return find(x) == find(y);\n    }\n\n    public int countSets() { return numSets; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cycle-detection-in-undirected-graph",
      children: "Cycle Detection in Undirected Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a growing friend group, you introduce two friends to each other. If they turn out to be ", (0,jsx_runtime.jsx)(_components.em, {
        children: "already"
      }), " in the same circle through other connections, that introduction creates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "redundancy"
      }), " — a \"cycle\" in the social graph. In a computer network, adding a cable between two computers that already have a path between them creates a loop that disrupts routing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-does-cycle-detection-with-dsu-do",
      children: "What Does Cycle Detection with DSU Do?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Process each edge (u, v) in the graph. For each edge:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the roots of u and v."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If they are the same root, u and v are already connected — adding this edge would create a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cycle"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, union the two sets."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This works because DSU tracks connected components dynamically. If two endpoints of an edge already belong to the same component, the edge closes a cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a DSU with n elements (one per vertex)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each edge (u, v) in the graph:\na. Find root of u and root of v.\nb. If root(u) == root(v): return ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cycle detected"
        }), ".\nc. Otherwise: union(u, v)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If all edges processed without finding a pre-connected pair: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no cycle"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION hasCycle(n, edges):\n    DSU dsu = new DSU(n)\n    FOR each (u, v) IN edges:\n        IF dsu.find(u) == dsu.find(v) THEN\n            RETURN true    // cycle found\n        END IF\n        dsu.union(u, v)\n    END FOR\n    RETURN false           // no cycle\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-cycle-detection",
      children: "Step-by-Step Dry Run: Cycle Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph"
      }), ": vertices = 5, edges = [(0,1), (1,2), (2,3), (3,1)]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial parent: [0, 1, 2, 3, 4], rank: [0, 0, 0, 0, 0], numSets = 5."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process edge (0, 1):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle?"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(0) = 0, find(1) = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different roots → union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 2, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process edge (1, 2):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle?"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(1) = 0, find(2) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different roots → union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 0, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process edge (2, 3):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle?"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(2) = 0, find(3) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different roots → union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 0, 0, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process edge (3, 1):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle?"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(3) = 0, find(1) = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Same root!"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 0, 0, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cycle is detected because when processing (3,1), both 3 and 1 already have root 0 — they were connected via 3→0 and 1→0 through the path 1-0-2-3 (or 1-2-3). Adding edge (3,1) closes the triangle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nbool hasCycle(int n, const std::vector<std::pair<int, int>>& edges) {\n    DSU dsu(n);\n    for (const auto& [u, v] : edges) {\n        if (dsu.find(u) == dsu.find(v)) return true;\n        dsu.unionSets(u, v);\n    }\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef has_cycle(n: int, edges: list[tuple[int, int]]) -> bool:\n    dsu = DSU(n)\n    for u, v in edges:\n        if dsu.find(u) == dsu.find(v):\n            return True\n        dsu.union(u, v)\n    return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic boolean hasCycle(int n, int[][] edges) {\n    DSU dsu = new DSU(n);\n    for (int[] e : edges) {\n        if (dsu.find(e[0]) == dsu.find(e[1])) return true;\n        dsu.union(e[0], e[1]);\n    }\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSU initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create parent and rank arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each edge processed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two finds + one union, each O(α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(E α(n))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in edges, effectively O(E) for practical inputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Without DSU (DFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS per component; comparable but requires recursion/stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DSU is better for dynamic graphs"
      }), ": If edges arrive one at a time (online), DSU handles each edge in O(α(n)) without revisiting previous edges. DFS would need to re-traverse the entire graph for each new edge."]
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
            children: "Simple — no recursion, no visited arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for undirected graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles online edge additions efficiently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed cycle detection requires DFS (topological order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(E α(n)) time — effectively linear"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cannot detect ", (0,jsx_runtime.jsx)(_components.em, {
              children: "which"
            }), " edges form the cycle (just ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whether"
            }), " one exists)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty graph (no edges)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cycle — returns false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single vertex with self-loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["u == v in an edge → find(u) == find(v) → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cycle detected"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disconnected cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works per component — each component checked independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Already-fully-connected component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every new edge immediately detected as cycle-creating"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kruskals-algorithm-minimum-spanning-tree",
      children: "Kruskal's Algorithm (Minimum Spanning Tree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A city wants to lay fiber-optic cable connecting all neighborhoods. Running cable is expensive — you pay per meter. You want to connect every neighborhood (vertices) using the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "least total cable length"
      }), " (minimum total weight) without redundant loops (no cycles). You start with the cheapest cable segments and add them one by one, skipping any segment whose endpoints are already connected. This is Kruskal's algorithm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-does-kruskals-algorithm-do",
      children: "What Does Kruskal's Algorithm Do?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Builds a Minimum Spanning Tree (MST) by sorting all edges by weight, then processing them from smallest to largest. For each edge (u, v, w), if u and v are in different components (DSU find), add the edge to the MST and union their sets. The result connects all vertices with minimum total weight."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort all edges by weight (ascending)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an empty MST list and a DSU with V elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each edge (u, v, w) in sorted order:\na. Find the roots of u and v.\nb. If they are different: add edge to MST, union(u, v).\nc. If MST has V-1 edges, stop early."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return MST."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION kruskal(V, edges):\n    Sort edges by weight (ascending)\n    DSU dsu = new DSU(V)\n    MST = []\n    totalWeight = 0\n\n    FOR each (u, v, w) IN edges:\n        IF dsu.find(u) != dsu.find(v):\n            dsu.union(u, v)\n            MST.add((u, v, w))\n            totalWeight = totalWeight + w\n            IF |MST| == V - 1:\n                BREAK   // MST complete\n        END IF\n    END FOR\n\n    RETURN MST, totalWeight\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-kruskals-algorithm",
      children: "Step-by-Step Dry Run: Kruskal's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph"
      }), " (V = 5):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    (0)---4---(1)---5---(3)\n     \\       /           |\n      2     1            6\n       \\   /             |\n        (2)-------8------(4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges sorted by weight: [(1,2,1), (0,2,2), (3,4,2), (0,1,4), (1,3,5), (3,4,6), (2,4,8)]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial parent: [0, 1, 2, 3, 4], MST = [], totalWeight = 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge (u,v,w)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "find(u)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "find(v)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Same?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 1, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(1,2,1)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 1, 3, 4] → compress find(0)=0, find(2)=1 ≠"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[0]=1? No — use union by rank. Let's do basic: parent[1]=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 1, 3, 4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,4,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[4]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 1, 3, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "... + (3,4,2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,1,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(0)=0, find(1)=find(0)=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,3,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(1)=0, find(3)=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[3]=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 1, 0, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "... + (1,3,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,4,8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(2)=find(1)=0, find(4)=find(3)=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MST = {(1,2,1), (0,2,2), (3,4,2), (1,3,5)}, totalWeight = 10."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: With proper union by rank, the exact parent values may differ but the MST edges and weight remain the same. Edge (0,1,4) is skipped because 0 and 1 are already connected (0-2-1). Edge (2,4,8) is skipped because all vertices are already connected after adding (1,3,5)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nstruct Edge { int u, v, weight; };\nstd::vector<Edge> kruskal(int V, std::vector<Edge>& edges) {\n    std::sort(edges.begin(), edges.end(),\n        [](const Edge& a, const Edge& b) { return a.weight < b.weight; });\n\n    DSU dsu(V);\n    std::vector<Edge> mst;\n    for (const Edge& e : edges) {\n        if (dsu.find(e.u) != dsu.find(e.v)) {\n            dsu.unionSets(e.u, e.v);\n            mst.push_back(e);\n            if (mst.size() == V - 1) break;\n        }\n    }\n    return mst;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef kruskal(V: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\n    edges.sort(key=lambda e: e[2])  # sort by weight\n    dsu = DSU(V)\n    mst = []\n    for u, v, w in edges:\n        if dsu.find(u) != dsu.find(v):\n            dsu.union(u, v)\n            mst.append((u, v, w))\n            if len(mst) == V - 1:\n                break\n    return mst\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic List<int[]> kruskal(int V, int[][] edges) {\n    Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));\n    DSU dsu = new DSU(V);\n    List<int[]> mst = new ArrayList<>();\n    for (int[] e : edges) {\n        if (dsu.find(e[0]) != dsu.find(e[1])) {\n            dsu.union(e[0], e[1]);\n            mst.add(e);\n            if (mst.size() == V - 1) break;\n        }\n    }\n    return mst;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log E) = O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E ≤ V² for simple graphs, so log E ≈ 2 log V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSU operations per edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two finds + one union per edge processed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total DSU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E α(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All edges processed at most once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(E log V)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting dominates — DSU is effectively free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim's algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same, but with heap; better for dense graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why sorting dominates"
      }), ": For any realistic graph, sorting O(E log V) >> DSU O(E α(V)). If E = 10⁶, log V ≈ 20, but α(V) ≈ 4. Sorting is 5× more expensive than the DSU part."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
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
            children: "Simple and intuitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorting all edges first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) is optimal for sparse graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle negative-weight edges differently (works with them too)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to parallelize (sort + dsu)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less efficient for dense graphs (Prim's is better)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSU simplifies cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for directed graphs (directed MST = Chu–Liu/Edmonds)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disconnected graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns MST of the connected component containing the first vertex; not all vertices connected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No edges needed; MST is empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same-weight edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any spanning tree is an MST; Kruskal picks based on sort order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Already-a-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every edge is added; exactly V-1 edges form the MST"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "union-find-applications-comparison-table",
      children: "Union-Find Applications Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSU Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why DSU?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alternative Without DSU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union endpoints of sorted edges; skip if already connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects cycles in O(α(V)) per edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS per edge → O(E²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components labeling (image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union adjacent pixels with same color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes entire image in O(pixels)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS/DFS flood fill — O(pixels) but uses recursion stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social network friend circles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union pairs of friends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic — handles new friendships in real time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS after each new connection → O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection in undirected graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each edge, if find(u) == find(v), cycle exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online — works as edges arrive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS from scratch each time → O(V(V+E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Percolation (physics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union open sites with neighbors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answers \"does system percolate?\" in O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find is the standard approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of Islands II (dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union newly added land with adjacent land"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles incremental island addition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flood fill after each add → O(k * grid)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Consecutive Sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union consecutive numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) with hash map to track values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting → O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounts Merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union emails belonging to same person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groups accounts without building full graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS on email graph — comparable but more code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union edge endpoints; if already connected, edge is redundant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds the exact redundant edge in O(E α(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS each edge → O(E²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maze generation (randomized Kruskal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union cells connected by removed wall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generates uniform spanning tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized DFS — less uniform"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Union-Find is the secret weapon for connectivity problems in coding interviews — when you hear \"connected components\" or \"union\" in a problem, reach for DSU."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-number-of-islands-ii-dynamic-island-counting",
      children: "1. Number of Islands II (Dynamic Island Counting)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": You have a 2D grid of water (all 0s). You are given positions to add land (1s) one by one. After each addition, return the current number of islands (connected groups of 1s)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DSU?"
      }), ": Each new land cell unions with its 4-directionally adjacent land neighbors. Track island count incrementally: start a new island (+1), then for each adjacent already-land neighbor, if they are in different sets, union them and decrement count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def numIslands2(m: int, n: int, positions: list[tuple[int, int]]) -> list[int]:\n    dsu = DSU(m * n)\n    grid = [[0] * n for _ in range(m)]\n    dirs = [(0,1), (0,-1), (1,0), (-1,0)]\n    res, count = [], 0\n\n    for r, c in positions:\n        if grid[r][c] == 1:  # duplicate\n            res.append(count)\n            continue\n        grid[r][c] = 1\n        idx = r * n + c\n        count += 1  # start as new island\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                nidx = nr * n + nc\n                if dsu.find(idx) != dsu.find(nidx):\n                    dsu.union(idx, nidx)\n                    count -= 1  # merged two islands\n        res.append(count)\n    return res\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time"
      }), ": O(k α(mn)), Space: O(mn)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-longest-consecutive-sequence",
      children: "2. Longest Consecutive Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Given an unsorted array of integers, find the length of the longest consecutive elements sequence (e.g., [100, 4, 200, 1, 3, 2] → 4 for [1, 2, 3, 4])."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DSU?"
      }), ": Map each value to its index. For each value, if value-1 exists, union their indices. The size of the largest set is the answer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longestConsecutive(nums: list[int]) -> int:\n    if not nums: return 0\n    dsu = DSU(len(nums))\n    val_to_idx = {}\n\n    for i, num in enumerate(nums):\n        if num in val_to_idx: continue\n        val_to_idx[num] = i\n        if num - 1 in val_to_idx:\n            dsu.union(i, val_to_idx[num - 1])\n        if num + 1 in val_to_idx:\n            dsu.union(i, val_to_idx[num + 1])\n\n    # Count set sizes\n    sizes = [0] * len(nums)\n    for i in range(len(nums)):\n        root = dsu.find(i)\n        sizes[root] += 1\n    return max(sizes)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time"
      }), ": O(n α(n)), Space: O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-accounts-merge",
      children: "3. Accounts Merge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Given a list of accounts where each account is [name, email1, email2, ...], merge accounts belonging to the same person. Two accounts belong to the same person if they share at least one email."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DSU?"
      }), ": Treat each email as a node. For each account, union the first email with every other email in that account. Then group emails by their root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def accountsMerge(accounts: list[list[str]]) -> list[list[str]]:\n    email_to_id = {}\n    email_to_name = {}\n    dsu = DSU(10001)  # max unique emails estimate\n\n    # Assign IDs to emails and union within each account\n    idx = 0\n    for account in accounts:\n        name = account[0]\n        for email in account[1:]:\n            if email not in email_to_id:\n                email_to_id[email] = idx\n                email_to_name[email] = name\n                idx += 1\n            # Union first email with all others in this account\n            dsu.union(email_to_id[account[1]], email_to_id[email])\n\n    # Group emails by root\n    root_to_emails = {}\n    for email in email_to_id:\n        root = dsu.find(email_to_id[email])\n        root_to_emails.setdefault(root, []).append(email)\n\n    # Format output\n    return [[email_to_name[emails[0]]] + sorted(emails)\n            for emails in root_to_emails.values()]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time"
      }), ": O(N α(K)) where N = total emails, K = unique emails, Space: O(N)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-redundant-connection",
      children: "4. Redundant Connection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Given an undirected graph of n nodes labeled 1..n, and a list of edges where one edge is extra (creating a cycle), find the edge that, if removed, makes the graph a tree. If multiple, return the last one in the input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DSU?"
      }), ": Process edges in order. For each edge (u, v), if find(u) == find(v), this edge creates a cycle — it's the redundant connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    n = len(edges)\n    dsu = DSU(n + 1)  # 1-indexed\n    for u, v in edges:\n        if dsu.find(u) == dsu.find(v):\n            return [u, v]\n        dsu.union(u, v)\n    return []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time"
      }), ": O(n α(n)), Space: O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-detect-cycle-in-an-undirected-graph",
      children: "5. Detect Cycle in an Undirected Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See the Cycle Detection section above for a complete treatment. The interview pattern is always the same: DSU processes edges in O(E α(V)), returning true the moment a cycle is found."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-kruskals-minimum-spanning-tree--network-design",
      children: "1. Kruskal's Minimum Spanning Tree — Network Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telecommunications companies, power grids, and water utilities use MST algorithms to design least-cost networks. Kruskal's algorithm with DSU is the standard approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fiber-optic backbone routing"
        }), ": Laying cable to connect all cities with minimum cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit design"
        }), ": Connecting components on a PCB with minimum trace length."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transportation planning"
        }), ": Designing road networks, railway tracks, airline routes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline routing"
        }), ": Oil, gas, and water pipeline networks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DSU makes the cycle-detection step nearly free — O(α(V)) per edge — allowing Kruskal to handle graphs with millions of vertices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-image-segmentation--connected-component-labeling",
      children: "2. Image Segmentation — Connected Component Labeling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In computer vision, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "connected component labeling"
      }), " assigns a unique label to each connected region of pixels sharing the same color/intensity. DSU is the foundation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass 1"
        }), ": Scan the image left-to-right, top-to-bottom. For each pixel, union with its left and top neighbors if they have the same value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass 2"
        }), ": Assign the root of each pixel's set as its final label."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medical imaging"
        }), ": Tumor detection, organ segmentation in MRI/CT scans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OCR (Optical Character Recognition)"
        }), ": Isolating characters in a scanned document."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object detection"
        }), ": Separating foreground objects from background."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autonomous vehicles"
        }), ": Lane detection, obstacle segmentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-social-networks--friend-circles-and-recommendations",
      children: "3. Social Networks — Friend Circles and Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every major social platform (Facebook, LinkedIn, Instagram) models users as nodes and relationships as edges. DSU powers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Friend circle detection"
        }), ": How many distinct friend groups exist?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "People You May Know"
        }), ": Path-based recommendations (friends-of-friends)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutual friend counting"
        }), ": Intersection size of two users' connected components."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Community detection"
        }), ": Partitioning the network into clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph partitioning"
        }), ": Balancing load across servers by partitioning the social graph."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facebook's 2021 friend graph had ~3 billion nodes — DSU operations on this scale run in milliseconds per query with path compression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-percolation-theory--physics-and-materials-science",
      children: "4. Percolation Theory — Physics and Materials Science"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Percolation"
      }), " asks: does a path exist from the top of a system to the bottom? DSU is the standard computational tool:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Materials science"
        }), ": Does a material conduct electricity? Model as a grid of random conductive sites. Union adjacent conductive sites. If any top-row site and any bottom-row site share a root, the system percolates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oil extraction"
        }), ": Does oil flow from porous rock to a well? Model pores as open/closed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forest fire spread"
        }), ": Model trees as sites; fire spreads through adjacent burning trees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epidemiology"
        }), ": Does a disease spread from an initial infected person to the broader population?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "percolation threshold"
      }), " (critical probability where a system transitions from non-percolating to percolating) was famously studied using DSU-based Monte Carlo simulation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-dynamic-connectivity--database-and-distributed-systems",
      children: "5. Dynamic Connectivity — Database and Distributed Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP connection tracking"
        }), ": Maintaining sets of active connections in a load balancer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed consensus"
        }), ": Tracking which nodes in a cluster are reachable (connected)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filesystem inotify"
        }), ": Tracking which files/directories are affected by a change (union of dependency sets)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version control merge tracking"
        }), ": Git uses DSU-like structures to track which branches have been merged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Union by rank limits tree depth; path compression alone already gives O(log n) amortized — together they reach the theoretical best."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement union by rank OR by size"
        }), ": Both give similar theoretical guarantees. Union by size is slightly more intuitive — attach the smaller tree under the larger tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path compression alone is almost enough"
        }), ": Even without union by rank, path compression gives amortized O(log n). Adding union by rank yields the inverse Ackermann bound O(α(n))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DSU for offline queries"
        }), ": When you have a sequence of edge additions and connectivity queries, DSU can answer all queries in near-linear time. For deletions, use DSU with rollback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kruskal's algorithm + DSU is the canonical MST algorithm"
        }), ": Sort edges by weight (O(E log V)), process edges in order, union endpoints if they belong to different components. DSU detects cycles in O(α(V)) per edge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative find for safety"
        }), ": In languages with limited recursion depth (Python, Java default stack), consider an iterative find implementation to avoid stack overflow on very deep trees (n > 10⁵). The recursive version is cleaner and preferred for interviews."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DSU does not support splits"
        }), ": If you need to split a set (undo a union), use DSU with rollback (stack-based parent changes + path compression without rank)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count sets efficiently"
        }), ": Number of sets = number of elements where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent[i] == i"
        }), " (roots). Equivalent to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numSets"
        }), " variable maintained in union."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Iterative find (avoids recursion)\ndef find(self, x: int) -> int:\n    while self.parent[x] != x:\n        self.parent[x] = self.parent[self.parent[x]]  # path halving\n        x = self.parent[x]\n    return x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DSU (Union-Find) maintains disjoint sets with find and union operations in near-constant time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path compression flattens the tree during find for near-constant amortized time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Union by rank attaches smaller trees under larger trees to limit depth to O(log n)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combined optimizations yield O(α(n)) per operation, where α is the inverse Ackermann function — ≤ 5 for any practical input."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kruskal's algorithm uses DSU to find MSTs in O(E log V) by processing edges in sorted order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DSU detects cycles in undirected graphs in O(E α(V)) — simpler than DFS for online edge additions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DSU powers real-world systems: network design, image segmentation, social graphs, percolation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path Compression Only"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Union by Rank Only"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Both"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find() complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "union() complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (2 lines in find)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (add rank array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (both)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for rank array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for rank array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case tree depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical α(n) for n ≤ 10⁶⁰⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proof difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tarjan & van Leeuwen 1975"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex amortized analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-dsu-operations",
      children: "Quick Reference: DSU Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pseudocode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "makeSet(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent[x] = x; rank[x] = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if parent[x] != x: parent[x] = find(parent[x]); return parent[x]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "union(x, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rx = find(x); ry = find(y); if rx == ry: return; if rank[rx] < rank[ry]: parent[rx] = ry; else if rank[rx] > rank[ry]: parent[ry] = rx; else: parent[ry] = rx; rank[rx]++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connected(x, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return find(x) == find(y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countSets()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return numSets (maintained in union)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How DSU Is Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union endpoints of each edge; process sorted edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V + E α(V))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union adjacent nodes; count roots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of islands (static)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU on grid cells (4-dir connectivity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn α(mn))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of Islands II (dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union newly added land with 4-dir adjacent land"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k α(mn))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection (undirected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each edge: if find(u) == find(v), cycle exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E α(V))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Friend circles (social network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union connected users; count sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m α(n)) for m relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest consecutive sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union value-1 and value+1 via hash map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n α(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounts merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union emails in same account; group by root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N α(K))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union edge endpoints; find(u) == find(v) → redundant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E α(V))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maze generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Kruskal: union cells connected by removed wall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n² α(n²))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union adjacent same-color pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(pixels α(pixels))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Percolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union open sites; check top-bottom connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n² α(n²))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Forgetting path compression in find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without compression, find chains stay O(n) after many unions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "parent[x] = find(parent[x])"
            }), " during find"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union without rank/size heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always attaching the larger set under the smaller leads to tall trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use union by size or rank: attach smaller tree under larger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using only path compression without union by rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still better than naive, but union-by-rank gives optimal amortized O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use both path compression AND union by rank for inverse-Ackermann complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one in 0-indexed vs 1-indexed parent array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent array initialized with 0 or n+1 gives wrong sentinel values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
              children: "parent[i] = i"
            }), " for all valid indices; use -1 sentinel only if tracking size separately"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling the case where both elements are already in the same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-ing same set decrements component count incorrectly"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rootX === rootY"
            }), " before merging; if equal, return without decrementing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using DSU for undirected graphs only without adapting for directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU works naturally for undirected connectivity; directed requires SCC algorithms (Tarjan/Kosaraju)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DSU for undirected graphs; use SCC algorithms for directed connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not resetting DSU between test cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent array retains state from previous test case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reinitialize DSU for each test case with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new DSU(n)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing parent array index with node label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If node labels are [1..n] but array is 0-indexed, accessing parent[i] uses wrong index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use internal 0-indexing or map external labels to 0..n-1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-disjoint-set-union-implementation",
      children: "TypeScript Disjoint Set Union Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DSU {\n    private parent: number[];\n    private rank: number[];\n    private components: number;\n\n    constructor(n: number) {\n        this.parent = new Array(n).fill(0).map((_, i) => i);\n        this.rank = new Array(n).fill(0);\n        this.components = n;\n    }\n\n    find(x: number): number {\n        if (this.parent[x] !== x) {\n            this.parent[x] = this.find(this.parent[x]); // path compression\n        }\n        return this.parent[x];\n    }\n\n    findIterative(x: number): number {\n        // Iterative find with path compression\n        let root = x;\n        while (this.parent[root] !== root) root = this.parent[root];\n        // Path compression: make all nodes point to root\n        while (x !== root) {\n            const next = this.parent[x];\n            this.parent[x] = root;\n            x = next;\n        }\n        return root;\n    }\n\n    union(x: number, y: number): boolean {\n        const rootX = this.find(x);\n        const rootY = this.find(y);\n        if (rootX === rootY) return false;\n\n        // Union by rank\n        if (this.rank[rootX] < this.rank[rootY]) {\n            this.parent[rootX] = rootY;\n        } else if (this.rank[rootX] > this.rank[rootY]) {\n            this.parent[rootY] = rootX;\n        } else {\n            this.parent[rootY] = rootX;\n            this.rank[rootX]++;\n        }\n        this.components--;\n        return true;\n    }\n\n    connected(x: number, y: number): boolean {\n        return this.find(x) === this.find(y);\n    }\n\n    countComponents(): number {\n        return this.components;\n    }\n\n    // Track size instead of rank\n    getComponentSize(x: number): number {\n        const root = this.find(x);\n        // Assumes size stored in negative values; alternative implementation\n        return this.rank[root] + 1; // approximate based on rank\n    }\n}\n\n// DSU with size tracking\nclass DSUWithSize {\n    private parent: number[];\n    private size: number[];\n\n    constructor(n: number) {\n        this.parent = new Array(n).fill(0).map((_, i) => i);\n        this.size = new Array(n).fill(1);\n    }\n\n    find(x: number): number {\n        while (this.parent[x] !== x) {\n            this.parent[x] = this.parent[this.parent[x]]; // path halving\n            x = this.parent[x];\n        }\n        return x;\n    }\n\n    union(x: number, y: number): boolean {\n        let rootX = this.find(x);\n        let rootY = this.find(y);\n        if (rootX === rootY) return false;\n\n        // Union by size: attach smaller to larger\n        if (this.size[rootX] < this.size[rootY]) {\n            [rootX, rootY] = [rootY, rootX]; // ensure rootX is larger\n        }\n        this.parent[rootY] = rootX;\n        this.size[rootX] += this.size[rootY];\n        return true;\n    }\n\n    getSize(x: number): number {\n        return this.size[this.find(x)];\n    }\n}\n\n// DSU with rollback (for offline dynamic connectivity)\nclass DSUWithRollback {\n    private parent: number[];\n    private size: number[];\n    private history: { u: number; v: number; sizeU: number }[] = [];\n\n    constructor(n: number) {\n        this.parent = new Array(n).fill(0).map((_, i) => i);\n        this.size = new Array(n).fill(1);\n    }\n\n    find(x: number): number {\n        while (this.parent[x] !== x) x = this.parent[x];\n        return x;\n    }\n\n    union(x: number, y: number): boolean {\n        let rootX = this.find(x);\n        let rootY = this.find(y);\n        if (rootX === rootY) return false;\n        if (this.size[rootX] < this.size[rootY]) [rootX, rootY] = [rootY, rootX];\n        this.history.push({ u: rootX, v: rootY, sizeU: this.size[rootX] });\n        this.parent[rootY] = rootX;\n        this.size[rootX] += this.size[rootY];\n        return true;\n    }\n\n    snapshot(): number { return this.history.length; }\n\n    rollback(snap: number): void {\n        while (this.history.length > snap) {\n            const { u, v, sizeU } = this.history.pop()!;\n            this.parent[v] = v;\n            this.size[u] = sizeU;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The inverse Ackermann function α(n) for practical values of n (≤ 10⁶) is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) ≤ 5 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) ≤ 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) ≤ log₂n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) ≤ n"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time for m operations on a DSU with union by rank and path compression?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(m)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(m α(n)) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(m log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(m n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Path compression alone (without union by rank) gives amortized complexity of:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(α(n))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DSU with union by rank without path compression has height:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(α(n))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In Kruskal's algorithm, DSU is used to:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Sort the edges by weight"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Detect cycles in O(α(n)) time ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Find shortest paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Build the adjacency list"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of Islands II (LC 305): Initially all cells are water. When land appears, DSU can track islands in:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1) per operation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(α(n)) per operation ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n) per operation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²) per operation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 8-a, 9-b, 10-b, 11-b, 12-b, 13-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of provinces (LC 547)"
          }), ": Given an adjacency matrix of friend connections, find the total number of friend circles (provinces)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Accounts merge (LC 721)"
          }), ": Given a list of accounts where each account has a name and emails, merge accounts belonging to the same person. Use DSU on email indices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redundant connection (LC 684)"
          }), ": Given a graph (tree + 1 extra edge), find the edge whose removal makes it a tree. Use DSU; the first edge that connects already-connected nodes is the answer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redundant connection II (LC 685)"
          }), ": Find the redundant edge in a rooted directed graph. Same concept but with directed edges — handle cases of two parents and cycles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimum cost to connect cities (Kruskal's MST)"
          }), ": Given n cities and roads with costs, find the minimum cost to connect all cities. Use DSU + sort edges by weight."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest consecutive sequence (LC 128)"
          }), ": Given an unsorted array, find the length of the longest consecutive elements sequence. Solve in O(n) using a hash map of DSU-like intervals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of connected components in an undirected graph (LC 323)"
          }), ": Given n nodes and edges list, count connected components using DSU."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regions cut by slashes (LC 959)"
          }), ": n×n grid with slashes '/' and '\\'. Find the number of regions created. Use DSU on subdivided cells."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Evaluating division (LC 399)"
          }), ": Given equations like a/b = 2.0, evaluate queries like a/c. Use DSU with weight tracking (weighted union-find) to maintain ratios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Swim in rising water (LC 778)"
          }), ": An n×n grid with elevation values. Rain falls, water rises. Find the minimum time when there's a path from (0,0) to (n-1,n-1). Use DSU with increasing time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dsu-variants-comparison",
      children: "DSU Variants Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "find"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "union"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Additional Features"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union by rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching basics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When rank not needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union by rank + path compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union by size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size queries needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted DSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio/difference array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equations with ratios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSU with rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) (no path compression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "History stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline dynamic connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent DSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-travel queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D DSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n)) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid neighbor mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid/pixel connectivity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classic-graph-algorithms-with-dsu",
      children: "Classic Graph Algorithms with DSU"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Kruskal's MST\ntype Edge = { u: number; v: number; weight: number };\n\nfunction kruskalMST(vertices: number, edges: Edge[]): Edge[] {\n    const dsu = new DSU(vertices);\n    edges.sort((a, b) => a.weight - b.weight);\n    const mst: Edge[] = [];\n    for (const e of edges) {\n        if (dsu.union(e.u, e.v)) {\n            mst.push(e);\n            if (mst.length === vertices - 1) break;\n        }\n    }\n    return mst;\n}\n\n// Connected components after each edge addition (online)\nfunction connectedComponentsTimeline(\n    n: number, \n    edges: [number, number][]\n): number[] {\n    const dsu = new DSU(n);\n    const result: number[] = [];\n    for (const [u, v] of edges) {\n        dsu.union(u, v);\n        result.push(dsu.countComponents());\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) O(n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does path compression do?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Merges trees"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Flattens the tree during find ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Sorts edges"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Computes rank"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which algorithm uses DSU to find MSTs?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Dijkstra's"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Kruskal's ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Prim's"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Floyd's"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the inverse Ackermann function α(n) for practical n ≤ 10⁶⁰⁰?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) ~4 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) ~log n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) ~1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) ~n"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Union by rank ensures:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Smaller tree under larger ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Trees are sorted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Path is always length 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) All elements are connected"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What happens when find(u) == find(v) during Kruskal's algorithm?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Edge is added to MST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Edge is skipped (would create a cycle) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) DSU is reinitialized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) u and v are swapped"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which is NOT a valid application of DSU?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Cycle detection in undirected graph"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Finding shortest path between two nodes ✓ (use Dijkstra's)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Connected component labeling in images"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Dynamic island counting"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How does union by rank (or size) improve DSU?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It eliminates the need for path compression"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It ensures the tree height stays O(log n) without compression ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It sorts elements in the set"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It reduces memory usage"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-a, 5-a, 6-b, 7-b, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does path compression flatten the DSU tree? Draw an example showing the state before and after find(7) in a chain of 8 elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is union by rank not strictly necessary when path compression is used? What theoretical bound does it add?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the significance of the inverse Ackermann function? Why is it considered \"effectively constant\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why Kruskal's algorithm is O(E log V) and not O(E log E). What's the relationship between E and V?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can DSU be used for directed graph cycle detection? Why or why not?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement union by size instead of union by rank. Compare the resulting tree heights after a sequence of unions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use DSU to solve the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "number of islands"
        }), " problem in a binary grid (static version — all land given at once)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DSU with rollback"
        }), " — support undoing the last union operation (useful for offline dynamic connectivity). Use a stack to record changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-style-problems",
      children: "Interview-Style Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number of Islands II"
        }), ": Given an m × n grid of water, and a list of positions to add land one-by-one, return the number of islands after each addition. (See Interview Corner above.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accounts Merge"
        }), ": Given a list of accounts, merge accounts belonging to the same person by email. (See Interview Corner above.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundant Connection II"
        }), " (hard): This time the graph is a directed graph. Find the extra edge that makes it not a tree. Hint: consider three cases — a node with two parents, a cycle, or both."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Offline Dynamic Connectivity"
        }), ": Given a sequence of edge insertions and deletions, use DSU with rollback and a divide-and-conquer segment tree structure to answer connectivity queries at any point in time. The overall complexity is O(q log q log n) where q is the number of operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DSU maintains disjoint sets with find and union operations, both running in near-constant amortized O(α(n)) time with path compression and union by rank."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find"
        }), " returns the representative root of an element's set. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Path compression"
        }), " flattens the tree during find."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union"
        }), " merges two sets. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Union by rank"
        }), " keeps trees shallow by attaching smaller-rank roots under larger-rank roots."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The inverse Ackermann function α(n) grows so slowly that it is ≤ 5 for any practical input size."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kruskal's algorithm"
        }), " sorts edges by weight and uses DSU to build a minimum spanning tree in O(E log V)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycle detection"
        }), " in undirected graphs is trivially O(E α(V)) with DSU — simply check if the endpoints of each edge are already in the same set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DSU shines in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dynamic connectivity"
        }), " problems where unions and finds are interleaved online."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications span network design (MST), image segmentation, social networks, percolation physics, and database connectivity tracking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview problems leveraging DSU include Number of Islands II, Longest Consecutive Sequence, Accounts Merge, Redundant Connection, and dynamic graph connectivity."
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