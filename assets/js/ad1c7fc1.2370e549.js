"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[431],{

/***/ 3067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_15_b_trees_md_ad1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-15-b-trees-md-ad1.json
const site_docs_courses_data_structures_15_b_trees_md_ad1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/15-b-trees","title":"Chapter 15: B-Trees and B+ Trees","description":"Prev Red-Black Trees | Next Trie (Prefix Tree)","source":"@site/docs/courses/data-structures/15-b-trees.md","sourceDirName":"courses/data-structures","slug":"/data-structures/15-b-trees","permalink":"/ai-engineering-journey/data-structures/15-b-trees","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-b-trees","slug":"/data-structures/15-b-trees","title":"Chapter 15: B-Trees and B+ Trees","sidebar_label":"Chapter 15: B-Trees and B+ Trees","sidebar_position":15},"sidebar":"course-data-structures","previous":{"title":"Chapter 14: Red-Black Trees","permalink":"/ai-engineering-journey/data-structures/14-red-black"},"next":{"title":"Chapter 16: Trie (Prefix Tree)","permalink":"/ai-engineering-journey/data-structures/16-trie"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/data-structures/15-b-trees.md


const frontMatter = {
	id: '15-b-trees',
	slug: '/data-structures/15-b-trees',
	title: 'Chapter 15: B-Trees and B+ Trees',
	sidebar_label: 'Chapter 15: B-Trees and B+ Trees',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: B-Trees and B+ Trees';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why B-Trees Matter",
  "id": "why-b-trees-matter",
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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "B-Tree Definition and Properties",
  "id": "b-tree-definition-and-properties",
  "level": 3
}, {
  "value": "Formal Definition",
  "id": "formal-definition",
  "level": 4
}, {
  "value": "Properties",
  "id": "properties",
  "level": 4
}, {
  "value": "Height Bound — Why It Matters",
  "id": "height-bound--why-it-matters",
  "level": 3
}, {
  "value": "Search Operation",
  "id": "search-operation",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run: Search for key 55 in order-5 B-tree",
  "id": "dry-run-search-for-key-55-in-order-5-b-tree",
  "level": 4
}, {
  "value": "Dry Run: Search for key 70",
  "id": "dry-run-search-for-key-70",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Insertion Operation",
  "id": "insertion-operation",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Dry Run: Insert keys 10, 20, 30, 40, 50 into order-5 B-tree",
  "id": "dry-run-insert-keys-10-20-30-40-50-into-order-5-b-tree",
  "level": 4
}, {
  "value": "Dry Run: Insert 5, 6, 7, 8, 9 into order-5 (continuing)",
  "id": "dry-run-insert-5-6-7-8-9-into-order-5-continuing",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "C++ Implementation (Insertion)",
  "id": "c-implementation-insertion",
  "level": 4
}, {
  "value": "Python Implementation (Insertion)",
  "id": "python-implementation-insertion",
  "level": 4
}, {
  "value": "Java Implementation (Insertion)",
  "id": "java-implementation-insertion",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages (Insertion)",
  "id": "advantages--disadvantages-insertion",
  "level": 4
}, {
  "value": "Deletion Operation",
  "id": "deletion-operation",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run: Deletion from B-tree of order 5 (min keys = 2)",
  "id": "dry-run-deletion-from-b-tree-of-order-5-min-keys--2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "C++ Implementation (Deletion)",
  "id": "c-implementation-deletion",
  "level": 4
}, {
  "value": "Python Implementation (Deletion)",
  "id": "python-implementation-deletion",
  "level": 4
}, {
  "value": "Java Implementation (Deletion)",
  "id": "java-implementation-deletion",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages (Deletion)",
  "id": "advantages--disadvantages-deletion",
  "level": 4
}, {
  "value": "B+ Trees",
  "id": "b-trees",
  "level": 3
}, {
  "value": "B+ Tree Properties",
  "id": "b-tree-properties",
  "level": 4
}, {
  "value": "Algorithm: B+ Tree Search",
  "id": "algorithm-b-tree-search",
  "level": 4
}, {
  "value": "B+ Tree vs B-Tree Comparison Table",
  "id": "b-tree-vs-b-tree-comparison-table",
  "level": 4
}, {
  "value": "Dry Run: B+ Tree Range Query",
  "id": "dry-run-b-tree-range-query",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "C++ B+ Tree Skeleton",
  "id": "c-b-tree-skeleton",
  "level": 4
}, {
  "value": "Python B+ Tree Skeleton",
  "id": "python-b-tree-skeleton",
  "level": 4
}, {
  "value": "Java B+ Tree Skeleton",
  "id": "java-b-tree-skeleton",
  "level": 4
}, {
  "value": "B+ Tree Advantages &amp; Disadvantages",
  "id": "b-tree-advantages--disadvantages",
  "level": 4
}, {
  "value": "B-Tree vs B+ Tree: When to Use What",
  "id": "b-tree-vs-b-tree-when-to-use-what",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: Why are B-trees used for disk-based storage instead of BSTs or AVL trees?",
  "id": "q1-why-are-b-trees-used-for-disk-based-storage-instead-of-bsts-or-avl-trees",
  "level": 3
}, {
  "value": "Q2: B+ tree vs B-tree for range queries — explain the difference.",
  "id": "q2-b-tree-vs-b-tree-for-range-queries--explain-the-difference",
  "level": 3
}, {
  "value": "Q3: How do you choose the order m of a B-tree?",
  "id": "q3-how-do-you-choose-the-order-m-of-a-b-tree",
  "level": 3
}, {
  "value": "Q4: What happens when you insert into a B-tree in sorted order (ascending)?",
  "id": "q4-what-happens-when-you-insert-into-a-b-tree-in-sorted-order-ascending",
  "level": 3
}, {
  "value": "Q5: What is fill factor and why does it matter?",
  "id": "q5-what-is-fill-factor-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q6: How do concurrent B-trees work (latching)?",
  "id": "q6-how-do-concurrent-b-trees-work-latching",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Deeper Dive: Database Indexing",
  "id": "deeper-dive-database-indexing",
  "level": 3
}, {
  "value": "Quick Reference: B-Tree Order and Height",
  "id": "quick-reference-b-tree-order-and-height",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
  "value": "TypeScript B-Tree Implementation (simplified)",
  "id": "typescript-b-tree-implementation-simplified",
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
  "value": "B-Tree Variants Comparison",
  "id": "b-tree-variants-comparison",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
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
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
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
        id: "chapter-15-b-trees-and-b-trees",
        children: "Chapter 15: B-Trees and B+ Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/14-red-black",
        children: "Chapter 14: Red-Black Trees"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/16-trie",
        children: "Chapter 16: Trie (Prefix Tree)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " B-trees achieve extremely shallow trees by using multi-way nodes that match disk block sizes, making them ideal for database indexing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define B-tree order, properties, and structure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement search, insertion, and deletion in B-trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe B+ trees and their advantages for databases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze B-tree height and complexity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-b-trees-matter",
      children: "Why B-Trees Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine a library with 1 million books. A binary-search approach would require ~20 trips between shelves (each decision halves the search space). Now imagine you could grab an entire shelf of 500 books at once — each trip gives you 500 choices instead of 2. A B-tree is exactly that: instead of binary decisions, each \"shelf\" (node) holds hundreds of keys, so finding any book among 1 billion takes only 3-4 trips. This is why databases use B-trees — disk reads are slow, so maximizing keys-per-read minimizes I/O."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional BSTs and AVL trees have branching factor 2 — each node has 1 key and 2 children. For 1 billion keys, an AVL tree has height ~30-45. Each level = one disk read. At 10ms per disk seek, that's 300-450ms per query. A B-tree of order 1000 has height ≤ 3 — that's 30ms. B-trees are not just \"better balanced trees\"; they are the bridge between algorithmic efficiency and physical storage reality."
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
            children: "Order m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max children per node = m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher order → shallower trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node occupancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least ⌈m/2⌉ children, at most m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents degenerate trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full node splits in two, middle key rises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation may reach root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underfull node borrows or merges with sibling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains occupancy invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log_{⌈m/2⌉} n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order 1000 → height ≤ 3 for billions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree leaves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list of data pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient range scans"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[B-Tree Concepts] --> B{Order m}\r\n    B --> C[Node with m children max]\r\n    C --> D[Insert Key]\r\n    D --> E{Node Full?}\r\n    E --> F[No → Insert in sorted order]\r\n    E --> G[Yes → Split Node]\r\n    G --> H[Middle key → parent]\r\n    H --> I{Parent Full?}\r\n    I --> G\r\n    I --> J[Done]\r\n    F --> J\r\n    J --> K[Search: O(log n)]\r\n    J --> L[B+ Tree: Linked Leaves]\r\n    L --> M[Range Queries Efficient]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " B-trees minimize disk I/O by packing hundreds of keys per node, so even massive databases need only 3-4 levels of traversal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-tree-definition-and-properties",
      children: "B-Tree Definition and Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Organization Chart):"
      }), " A multinational corporation has a CEO (root), regional VPs (internal nodes), and team leads (leaves). No VP reports to a lower-level manager than their peers — all leaves are at the same depth. Each executive manages between a minimum and maximum number of direct reports to avoid both underutilization and overload. This is exactly the B-tree invariant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "formal-definition",
      children: "Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A B-tree of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order m"
      }), " is a balanced search tree satisfying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-way branching:"
        }), " Every node has at most ( m ) children (and thus at most ( m-1 ) keys)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum occupancy:"
        }), " Every internal node (except the root) has at least ( \\lceil m/2 \\rceil ) children."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root leniency:"
        }), " The root has at least 2 children if it is not a leaf (or at least 1 key)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leaf uniformity:"
        }), " All leaves appear at the same level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key-child relationship:"
        }), " A non-leaf node with ( k ) children contains exactly ( k-1 ) keys."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (order 5):"
      }), " Internal nodes have 2-4 keys and 3-5 children. If any node drops below 2 keys, it must borrow or merge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [30, 60, 90]                    ← root (3 keys, 4 children)\r\n       /    |    |    \\\r\n[10,20]  [40,50] [70,80] [100,110]      ← internal/leaf nodes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "properties",
      children: "Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max keys per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(m-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines node size → matches disk block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min keys (non-root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\lceil m/2 \\rceil - 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents degenerate trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min children (non-root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\lceil m/2 \\rceil)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures ≥50% space utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log_{\\lceil m/2 \\rceil} n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees logarithmic performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "height-bound--why-it-matters",
      children: "Height Bound — Why It Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The height ( h ) of a B-tree of order ( m ) with ( n ) keys satisfies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ h \\le \\log_{\\lceil m/2 \\rceil} \\frac{n+1}{2} ]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof intuition:"
      }), " At minimum occupancy, each node has at least (\\lceil m/2 \\rceil) children. Level 0 (root) has 1 node, level 1 has at least 2, level 2 has at least (2\\lceil m/2 \\rceil), level 3 has at least (2\\lceil m/2 \\rceil^2), and so on. Summing the geometric series gives the bound above."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Order (m)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height for (10^9) keys"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk reads per query"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (degenerate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search-operation",
      children: "Search Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Dictionary with Guide Tabs):"
      }), " A dictionary has guide words at the top of each page. To find \"elephant\", you flip to the section where guide words span \"eagle–emerald\", then narrow within that page. B-tree search is identical: at each node, you scan the keys (guide words) to pick the correct child pointer (page section)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at root node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the node's keys left-to-right to find the position where the search key fits (between two adjacent keys, or before first, or after last)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the current key matches the search key, return success (key + position)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the node is a leaf and key not found, return failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, follow the child pointer at that position and repeat from step 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION B_TREE_SEARCH(node, key):\r\n    i = 0\r\n    WHILE i < node.numKeys AND key > node.keys[i]:\r\n        i = i + 1\r\n\r\n    IF i < node.numKeys AND key == node.keys[i]:\r\n        RETURN (node, i)   // Found\r\n\r\n    IF node.isLeaf:\r\n        RETURN NULL        // Not found\r\n\r\n    RETURN B_TREE_SEARCH(node.children[i], key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-search-for-key-55-in-order-5-b-tree",
      children: "Dry Run: Search for key 55 in order-5 B-tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [30, 60, 90]\r\n       /    |    |    \\\r\n[10,20]  [40,50] [70,80] [100,110]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keys Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30,60,90]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30,60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55 < 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow child[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[40,50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40,50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55 not in leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not found"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Key 55 not found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-search-for-key-70",
      children: "Dry Run: Search for key 70"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keys Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30,60,90]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30,60,90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 > 60 but < 90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow child[2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[70,80]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key == 70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found at node[2], pos[0]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Key 70 found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound — each level narrows by branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/Os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node access = 1 disk read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU (within node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan within a node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as worst — tree is always balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum occupancy still gives logarithmic height"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(log₂ n)?"
      }), " In a BST, branching factor is 2, so height = log₂ n. In a B-tree of order 1000, branching factor is ~500, so height = log₅₀₀ n. For n = 10⁹: BST = 30 levels, B-tree = 3 levels. The logarithmic base matters enormously for disk-bound systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns false immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-node tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Searches within root only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key smaller than all keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 0, follow child[0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key larger than all keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = numKeys, follow child[numKeys]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed in standard B-trees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n\r\nconst int ORDER = 5;  // max children = 5, max keys = 4\r\n\r\nstruct BTreeNode {\r\n    std::vector<int> keys;\r\n    std::vector<BTreeNode*> children;\r\n    bool isLeaf;\r\n    int numKeys;\r\n\r\n    BTreeNode(bool leaf) : isLeaf(leaf), numKeys(0) {\r\n        keys.resize(ORDER - 1);\r\n        children.resize(ORDER);\r\n    }\r\n};\r\n\r\nclass BTree {\r\nprivate:\r\n    BTreeNode* root;\r\n\r\n    bool search(BTreeNode* node, int key, BTreeNode*& resultNode, int& pos) const {\r\n        if (!node) return false;\r\n        int i = 0;\r\n        while (i < node->numKeys && key > node->keys[i]) ++i;\r\n        if (i < node->numKeys && key == node->keys[i]) {\r\n            resultNode = node; pos = i; return true;\r\n        }\r\n        if (node->isLeaf) return false;\r\n        return search(node->children[i], key, resultNode, pos);\r\n    }\r\n\r\npublic:\r\n    BTree() : root(nullptr) {}\r\n\r\n    bool search(int key) const {\r\n        BTreeNode* node = nullptr;\r\n        int pos;\r\n        return search(root, key, node, pos);\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BTreeNode:\r\n    def __init__(self, leaf=True):\r\n        self.leaf = leaf\r\n        self.keys = []\r\n        self.children = []\r\n\r\nclass BTree:\r\n    def __init__(self, order=5):\r\n        self.root = None\r\n        self.order = order\r\n\r\n    def search(self, key, node=None):\r\n        if node is None:\r\n            node = self.root\r\n        if node is None:\r\n            return None\r\n\r\n        i = 0\r\n        while i < len(node.keys) and key > node.keys[i]:\r\n            i += 1\r\n\r\n        if i < len(node.keys) and key == node.keys[i]:\r\n            return (node, i)\r\n\r\n        if node.leaf:\r\n            return None\r\n\r\n        return self.search(key, node.children[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class BTreeNode {\r\n    int[] keys;\r\n    BTreeNode[] children;\r\n    boolean isLeaf;\r\n    int numKeys;\r\n    int order;\r\n\r\n    BTreeNode(int order, boolean isLeaf) {\r\n        this.order = order;\r\n        this.isLeaf = isLeaf;\r\n        this.keys = new int[order - 1];\r\n        this.children = new BTreeNode[order];\r\n        this.numKeys = 0;\r\n    }\r\n}\r\n\r\nclass BTree {\r\n    private BTreeNode root;\r\n    private int order;\r\n\r\n    public BTree(int order) {\r\n        this.order = order;\r\n        this.root = null;\r\n    }\r\n\r\n    public boolean search(int key) {\r\n        return search(root, key);\r\n    }\r\n\r\n    private boolean search(BTreeNode node, int key) {\r\n        if (node == null) return false;\r\n        int i = 0;\r\n        while (i < node.numKeys && key > node.keys[i]) i++;\r\n        if (i < node.numKeys && key == node.keys[i]) return true;\r\n        if (node.isLeaf) return false;\r\n        return search(node.children[i], key);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Very shallow height (3-4 for billions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation vs BST/AVL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk-I/O optimized (node = block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead from partially-filled nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion complexity is high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good cache locality within node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion can cascade splits to root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports range queries (B+ tree variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not ideal for in-memory-only workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insertion-operation",
      children: "Insertion Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Cafeteria Trays):"
      }), " A cafeteria stacks trays in columns. Each column holds at most 5 trays. When a column is full and a new tray arrives, you split the column into two columns of 2 and 3 trays, and the middle tray becomes the label for both columns. If the row above is also full, the split propagates upward — sometimes requiring a new row entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If tree is empty, create a new root node with the key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, find the leaf where the key should be inserted (by searching from root)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the leaf has fewer than (m-1) keys, insert the key in sorted position."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the leaf is full (has (m-1) keys):\r\na. Split the node into two nodes: left (first (\\lfloor (m-1)/2 \\rfloor) keys) and right (remaining keys).\r\nb. Promote the middle key to the parent.\r\nc. The parent now has a new child pointer to the right node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the parent is now full, repeat step 4 recursively upward."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the root splits, create a new root with the promoted key."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION B_TREE_INSERT(tree, key):\r\n    root = tree.root\r\n    IF root == NULL:\r\n        tree.root = NEW_NODE(isLeaf=true)\r\n        tree.root.keys[0] = key\r\n        tree.root.numKeys = 1\r\n        RETURN\r\n\r\n    IF root.numKeys == ORDER - 1:\r\n        newRoot = NEW_NODE(isLeaf=false)\r\n        newRoot.children[0] = root\r\n        SPLIT_CHILD(newRoot, 0, root)\r\n        tree.root = newRoot\r\n\r\n    INSERT_NON_FULL(tree.root, key)\r\n\r\nFUNCTION INSERT_NON_FULL(node, key):\r\n    i = node.numKeys - 1\r\n    IF node.isLeaf:\r\n        WHILE i >= 0 AND key < node.keys[i]:\r\n            node.keys[i + 1] = node.keys[i]\r\n            i = i - 1\r\n        node.keys[i + 1] = key\r\n        node.numKeys = node.numKeys + 1\r\n    ELSE:\r\n        WHILE i >= 0 AND key < node.keys[i]:\r\n            i = i - 1\r\n        i = i + 1\r\n        IF node.children[i].numKeys == ORDER - 1:\r\n            SPLIT_CHILD(node, i, node.children[i])\r\n            IF key > node.keys[i]:\r\n                i = i + 1\r\n        INSERT_NON_FULL(node.children[i], key)\r\n\r\nFUNCTION SPLIT_CHILD(parent, idx, child):\r\n    newChild = NEW_NODE(isLeaf=child.isLeaf)\r\n    newChild.numKeys = ORDER / 2\r\n    FOR j = 0 TO ORDER/2 - 1:\r\n        newChild.keys[j] = child.keys[j + ORDER/2]\r\n    IF NOT child.isLeaf:\r\n        FOR j = 0 TO ORDER/2:\r\n            newChild.children[j] = child.children[j + ORDER/2]\r\n    child.numKeys = ORDER/2\r\n    FOR j = parent.numKeys DOWNTO idx + 1:\r\n        parent.children[j + 1] = parent.children[j]\r\n    parent.children[idx + 1] = newChild\r\n    FOR j = parent.numKeys - 1 DOWNTO idx:\r\n        parent.keys[j + 1] = parent.keys[j]\r\n    parent.keys[idx] = child.keys[ORDER/2]\r\n    parent.numKeys = parent.numKeys + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-insert-keys-10-20-30-40-50-into-order-5-b-tree",
      children: "Dry Run: Insert keys 10, 20, 30, 40, 50 into order-5 B-tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Order 5 → max 4 keys per node. Split trigger when inserting key 50."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Insert 10"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[10]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Insert 20"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 20]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Insert 30"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 20, 30]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Insert 40"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 20, 30, 40]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Insert 50 — node full, SPLIT!"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Middle key = 30. Left = [10,20], Right = [40,50]. Root = [30]."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     [30]\r\n    /     \\\r\n[10,20]  [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-insert-5-6-7-8-9-into-order-5-continuing",
      children: "Dry Run: Insert 5, 6, 7, 8, 9 into order-5 (continuing)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Insert 5"
      }), " → goes to left leaf"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     [30]\r\n    /     \\\r\n[5,10,20]  [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: Insert 6"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [30]\r\n       /     \\\r\n[5,6,10,20]  [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8: Insert 7"
      }), " → left leaf full (4 keys), SPLIT!\r\nLeft leaf [5,6,10,20] after inserting 7 → [5,6,7,10,20]. Middle = 7. Left = [5,6], Right = [10,20]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [7, 30]\r\n       /   |    \\\r\n   [5,6] [10,20] [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9: Insert 8"
      }), " → goes to middle leaf [10,20]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [7, 30]\r\n       /   |    \\\r\n   [5,6] [8,10,20] [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 10: Insert 9"
      }), " → middle leaf full → SPLIT!\r\nMiddle = 10, left = [8,9], right = [20]. Promote 10 to parent. Parent [7,30] → [7,10,30]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [7, 10, 30]\r\n       /   |   |    \\\r\n   [5,6] [8,9] [20] [40,50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert (time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse to leaf; splits propagate at most height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/Os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read path down + write splits back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copying up to m keys/children per split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized splits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most inserts don't trigger splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case splits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every level splits up to root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why splits stay rare:"
      }), " Each split creates two nodes at least 50% full. To trigger another split, both halves must fill again — requiring at least ( \\lceil m/2 \\rceil - 1 ) more inserts per half. Only 1 in every ~( m/2 ) inserts causes a split."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create root with key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New root created; tree height increases by 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split propagates to root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as above"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key already exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates not allowed; insertion fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consecutive full nodes on path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple splits cascade upward"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-insertion",
      children: "C++ Implementation (Insertion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void splitChild(BTreeNode* parent, int idx, BTreeNode* child) {\r\n    BTreeNode* newChild = new BTreeNode(child->isLeaf);\r\n    newChild->numKeys = ORDER / 2;\r\n\r\n    for (int i = 0; i < ORDER / 2; ++i)\r\n        newChild->keys[i] = child->keys[i + ORDER / 2];\r\n\r\n    if (!child->isLeaf) {\r\n        for (int i = 0; i <= ORDER / 2; ++i)\r\n            newChild->children[i] = child->children[i + ORDER / 2];\r\n    }\r\n\r\n    child->numKeys = ORDER / 2;\r\n\r\n    for (int i = parent->numKeys; i > idx; --i)\r\n        parent->children[i + 1] = parent->children[i];\r\n    parent->children[idx + 1] = newChild;\r\n\r\n    for (int i = parent->numKeys - 1; i >= idx; --i)\r\n        parent->keys[i + 1] = parent->keys[i];\r\n    parent->keys[idx] = child->keys[ORDER / 2];\r\n    ++parent->numKeys;\r\n}\r\n\r\nvoid insertNonFull(BTreeNode* node, int key) {\r\n    int i = node->numKeys - 1;\r\n    if (node->isLeaf) {\r\n        while (i >= 0 && key < node->keys[i]) {\r\n            node->keys[i + 1] = node->keys[i];\r\n            --i;\r\n        }\r\n        node->keys[i + 1] = key;\r\n        ++node->numKeys;\r\n    } else {\r\n        while (i >= 0 && key < node->keys[i]) --i;\r\n        ++i;\r\n        if (node->children[i]->numKeys == ORDER - 1) {\r\n            splitChild(node, i, node->children[i]);\r\n            if (key > node->keys[i]) ++i;\r\n        }\r\n        insertNonFull(node->children[i], key);\r\n    }\r\n}\r\n\r\nvoid insert(int key) {\r\n    if (!root) {\r\n        root = new BTreeNode(true);\r\n        root->keys[0] = key;\r\n        root->numKeys = 1;\r\n        return;\r\n    }\r\n    if (root->numKeys == ORDER - 1) {\r\n        BTreeNode* newRoot = new BTreeNode(false);\r\n        newRoot->children[0] = root;\r\n        splitChild(newRoot, 0, root);\r\n        root = newRoot;\r\n    }\r\n    insertNonFull(root, key);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-insertion",
      children: "Python Implementation (Insertion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BTree:\r\n    def __init__(self, order=5):\r\n        self.root = None\r\n        self.order = order\r\n\r\n    def insert(self, key):\r\n        if self.root is None:\r\n            self.root = BTreeNode(leaf=True)\r\n            self.root.keys.append(key)\r\n            return\r\n\r\n        if len(self.root.keys) == self.order - 1:\r\n            new_root = BTreeNode(leaf=False)\r\n            new_root.children.append(self.root)\r\n            self._split_child(new_root, 0)\r\n            self.root = new_root\r\n\r\n        self._insert_non_full(self.root, key)\r\n\r\n    def _insert_non_full(self, node, key):\r\n        i = len(node.keys) - 1\r\n        if node.leaf:\r\n            node.keys.append(0)\r\n            while i >= 0 and key < node.keys[i]:\r\n                node.keys[i + 1] = node.keys[i]\r\n                i -= 1\r\n            node.keys[i + 1] = key\r\n        else:\r\n            while i >= 0 and key < node.keys[i]:\r\n                i -= 1\r\n            i += 1\r\n            if len(node.children[i].keys) == self.order - 1:\r\n                self._split_child(node, i)\r\n                if key > node.keys[i]:\r\n                    i += 1\r\n            self._insert_non_full(node.children[i], key)\r\n\r\n    def _split_child(self, parent, idx):\r\n        order = self.order\r\n        child = parent.children[idx]\r\n        new_child = BTreeNode(leaf=child.leaf)\r\n\r\n        mid = order // 2\r\n        new_child.keys = child.keys[mid:]\r\n        child.keys = child.keys[:mid]\r\n\r\n        if not child.leaf:\r\n            new_child.children = child.children[mid:]\r\n            child.children = child.children[:mid]\r\n\r\n        parent.children.insert(idx + 1, new_child)\r\n        parent.keys.insert(idx, child.keys.pop())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-insertion",
      children: "Java Implementation (Insertion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class BTree {\r\n    private BTreeNode root;\r\n    private int order;\r\n\r\n    public BTree(int order) {\r\n        this.order = order;\r\n        this.root = null;\r\n    }\r\n\r\n    public void insert(int key) {\r\n        if (root == null) {\r\n            root = new BTreeNode(order, true);\r\n            root.keys[0] = key;\r\n            root.numKeys = 1;\r\n            return;\r\n        }\r\n        if (root.numKeys == order - 1) {\r\n            BTreeNode newRoot = new BTreeNode(order, false);\r\n            newRoot.children[0] = root;\r\n            splitChild(newRoot, 0);\r\n            root = newRoot;\r\n        }\r\n        insertNonFull(root, key);\r\n    }\r\n\r\n    private void splitChild(BTreeNode parent, int idx) {\r\n        BTreeNode child = parent.children[idx];\r\n        BTreeNode newChild = new BTreeNode(order, child.isLeaf);\r\n        newChild.numKeys = order / 2;\r\n\r\n        for (int i = 0; i < order / 2; i++)\r\n            newChild.keys[i] = child.keys[i + order / 2];\r\n        if (!child.isLeaf) {\r\n            for (int i = 0; i <= order / 2; i++)\r\n                newChild.children[i] = child.children[i + order / 2];\r\n        }\r\n\r\n        child.numKeys = order / 2;\r\n\r\n        for (int i = parent.numKeys; i > idx; i--)\r\n            parent.children[i + 1] = parent.children[i];\r\n        parent.children[idx + 1] = newChild;\r\n\r\n        for (int i = parent.numKeys - 1; i >= idx; i--)\r\n            parent.keys[i + 1] = parent.keys[i];\r\n        parent.keys[idx] = child.keys[order / 2];\r\n        parent.numKeys++;\r\n    }\r\n\r\n    private void insertNonFull(BTreeNode node, int key) {\r\n        int i = node.numKeys - 1;\r\n        if (node.isLeaf) {\r\n            while (i >= 0 && key < node.keys[i]) {\r\n                node.keys[i + 1] = node.keys[i];\r\n                i--;\r\n            }\r\n            node.keys[i + 1] = key;\r\n            node.numKeys++;\r\n        } else {\r\n            while (i >= 0 && key < node.keys[i]) i--;\r\n            i++;\r\n            if (node.children[i].numKeys == order - 1) {\r\n                splitChild(node, i);\r\n                if (key > node.keys[i]) i++;\r\n            }\r\n            insertNonFull(node.children[i], key);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-insertion",
      children: "Advantages & Disadvantages (Insertion)"
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
            children: "Maintains perfect balance automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split logic is complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No rebalancing needed after insert (unlike AVL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascading splits can be expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High branching factor minimizes splits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root split increases tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass down (find + insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires parent pointers or stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletion-operation",
      children: "Deletion Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Library Shelf Restocking):"
      }), " When books are removed from a shelf, the shelf must stay at least half-full. If it drops below, you either borrow a book from a neighboring shelf (redistribution) or merge two half-empty shelves into one (merge). The librarian may need to adjust the section labels (parent keys) accordingly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the key to delete."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 1: Key in leaf"
        }), " — simply remove it. If the leaf has at least (\\lceil m/2 \\rceil - 1) keys after removal, done."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 2: Key in internal node"
        }), " — find predecessor (max key in left subtree) or successor (min key in right subtree). Swap with the leaf key, then delete from leaf (now Case 1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 3: Underflow"
        }), " — after deletion, if node has fewer than (\\lceil m/2 \\rceil - 1) keys:\r\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Borrow from left sibling:"
        }), " If left sibling has extra keys, rotate: sibling's rightmost key goes up to parent, parent key comes down.\r\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Borrow from right sibling:"
        }), " If right sibling has extra keys, rotate: sibling's leftmost key goes up to parent, parent key comes down.\r\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge with sibling:"
        }), " If neither sibling has extra keys, merge — parent key comes down into merged node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge propagation:"
        }), " If merging causes the parent to underflow, repeat step 4 upward."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root underflow:"
        }), " If the root becomes empty (0 keys), replace it with its only child."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION B_TREE_DELETE(tree, key):\r\n    DELETE_FROM_NODE(tree.root, key)\r\n    IF tree.root.numKeys == 0:\r\n        IF tree.root.isLeaf:\r\n            tree.root = NULL\r\n        ELSE:\r\n            tree.root = tree.root.children[0]\r\n\r\nFUNCTION DELETE_FROM_NODE(node, key):\r\n    i = FIND_KEY_POSITION(node, key)\r\n    IF node.isLeaf:\r\n        IF i < node.numKeys AND node.keys[i] == key:\r\n            REMOVE_KEY(node, i)\r\n    ELSE:\r\n        IF i < node.numKeys AND node.keys[i] == key:\r\n            pred = GET_PREDECESSOR(node, i)\r\n            node.keys[i] = pred\r\n            DELETE_FROM_NODE(node.children[i], pred)\r\n        ELSE:\r\n            DELETE_FROM_NODE(node.children[i], key)\r\n    IF node != root AND node.numKeys < MIN_KEYS:\r\n        FIX_UNDERFLOW(node)\r\n\r\nFUNCTION FIX_UNDERFLOW(node):\r\n    sibling, parentIdx = FIND_SIBLING(node)\r\n    IF sibling.numKeys > MIN_KEYS:\r\n        IF sibling is LEFT sibling:\r\n            BORROW_FROM_LEFT(node, sibling, parentIdx)\r\n        ELSE:\r\n            BORROW_FROM_RIGHT(node, sibling, parentIdx)\r\n    ELSE:\r\n        MERGE_WITH_SIBLING(node, sibling, parentIdx)\r\n\r\nFUNCTION BORROW_FROM_LEFT(node, leftSibling, parentIdx):\r\n    SHIFT_KEYS_RIGHT(node)\r\n    node.keys[0] = parent.keys[parentIdx - 1]\r\n    parent.keys[parentIdx - 1] = leftSibling.keys[leftSibling.numKeys - 1]\r\n    REMOVE_KEY(leftSibling, leftSibling.numKeys - 1)\r\n    IF NOT node.isLeaf:\r\n        SHIFT_CHILDREN_RIGHT(node)\r\n        node.children[0] = leftSibling.children[leftSibling.numKeys]\r\n        REMOVE_CHILD(leftSibling, leftSibling.numKeys)\r\n\r\nFUNCTION MERGE_WITH_SIBLING(node, sibling, parentIdx):\r\n    sibling.keys[MIN_KEYS] = parent.keys[parentIdx]\r\n    COPY_KEYS(node, sibling, MIN_KEYS + 1)\r\n    IF NOT node.isLeaf:\r\n        COPY_CHILDREN(node, sibling, MIN_KEYS + 1)\r\n    REMOVE_KEY(parent, parentIdx)\r\n    REMOVE_CHILD(parent, parentIdx + 1)\r\n    sibling.numKeys = sibling.numKeys + node.numKeys + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-deletion-from-b-tree-of-order-5-min-keys--2",
      children: "Dry Run: Deletion from B-tree of order 5 (min keys = 2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [30, 60, 90]\r\n       /    |    |    \\\r\n[10,20]  [40,50] [70,80] [100,110]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete 20"
      }), " (leaf, has extra keys — no underflow):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find 20 in leaf [10,20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10] has 1 key, min = 2. Underflow!"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right sibling [40,50] has 2 keys (can spare 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Borrow from right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate: [40,50] → parent → [10]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [30, 60, 90]        →      [40, 60, 90]\r\n       /    |    |    \\            /    |    |    \\\r\n   [10]  [40,50] [...]    →   [10,30] [50]      [...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final after borrow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [40, 60, 90]\r\n       /    |    |    \\\r\n[10,30]  [50] [70,80] [100,110]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete 30"
      }), " (internal node key — predecessor swap):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find 30 at child[0] leaf [10,30]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 in leaf node — remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10] (underflow!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right sibling [50] has 1 key (min=2). Cannot borrow."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [10] + parent key 40 + [50] → [10,40,50]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent becomes [60,90] — valid"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        [40, 60, 90]        →        [60, 90]\r\n       /    |    |    \\            /    |     \\\r\n[10,30]  [50] [...]        →  [10,40,50]  [70,80] [100,110]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse to leaf + possible propagations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/Os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read path + write back merged/borrowed nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Borrow cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate fixed number of keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy up to m-1 keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case merges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every level merges up to root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why deletion doesn't degrade the tree:"
      }), " Unlike BST deletion (which can create a degenerate tree), B-tree deletion invariants guarantee every node remains at least half full. The tree may shrink in height when the root becomes empty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from leaf without underflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple removal, no propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from leaf causing underflow (borrow available)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate from sibling, parent key updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from leaf causing underflow (no borrow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge with sibling, parent key drops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete internal node key (predecessor/successor swap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap then delete from leaf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascade merge reaches root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root becomes empty → height decreases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing to delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-deletion",
      children: "C++ Implementation (Deletion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void removeFromLeaf(BTreeNode* node, int idx) {\r\n    for (int i = idx + 1; i < node->numKeys; ++i)\r\n        node->keys[i - 1] = node->keys[i];\r\n    node->numKeys--;\r\n}\r\n\r\nint getPredecessor(BTreeNode* node, int idx) {\r\n    BTreeNode* cur = node->children[idx];\r\n    while (!cur->isLeaf) cur = cur->children[cur->numKeys];\r\n    return cur->keys[cur->numKeys - 1];\r\n}\r\n\r\nint getSuccessor(BTreeNode* node, int idx) {\r\n    BTreeNode* cur = node->children[idx + 1];\r\n    while (!cur->isLeaf) cur = cur->children[0];\r\n    return cur->keys[0];\r\n}\r\n\r\nvoid borrowFromPrev(BTreeNode* node, int idx) {\r\n    BTreeNode* child = node->children[idx];\r\n    BTreeNode* sibling = node->children[idx - 1];\r\n    for (int i = child->numKeys - 1; i >= 0; --i)\r\n        child->keys[i + 1] = child->keys[i];\r\n    if (!child->isLeaf) {\r\n        for (int i = child->numKeys; i >= 0; --i)\r\n            child->children[i + 1] = child->children[i];\r\n    }\r\n    child->keys[0] = node->keys[idx - 1];\r\n    if (!child->isLeaf)\r\n        child->children[0] = sibling->children[sibling->numKeys];\r\n    node->keys[idx - 1] = sibling->keys[sibling->numKeys - 1];\r\n    child->numKeys++;\r\n    sibling->numKeys--;\r\n}\r\n\r\nvoid borrowFromNext(BTreeNode* node, int idx) {\r\n    BTreeNode* child = node->children[idx];\r\n    BTreeNode* sibling = node->children[idx + 1];\r\n    child->keys[child->numKeys] = node->keys[idx];\r\n    if (!child->isLeaf)\r\n        child->children[child->numKeys + 1] = sibling->children[0];\r\n    node->keys[idx] = sibling->keys[0];\r\n    for (int i = 1; i < sibling->numKeys; ++i)\r\n        sibling->keys[i - 1] = sibling->keys[i];\r\n    if (!sibling->isLeaf) {\r\n        for (int i = 1; i <= sibling->numKeys; ++i)\r\n            sibling->children[i - 1] = sibling->children[i];\r\n    }\r\n    child->numKeys++;\r\n    sibling->numKeys--;\r\n}\r\n\r\nvoid merge(BTreeNode* node, int idx) {\r\n    BTreeNode* left = node->children[idx];\r\n    BTreeNode* right = node->children[idx + 1];\r\n    int MIN_KEYS = ORDER / 2;\r\n\r\n    left->keys[MIN_KEYS] = node->keys[idx];\r\n    for (int i = 0; i < right->numKeys; ++i)\r\n        left->keys[MIN_KEYS + 1 + i] = right->keys[i];\r\n    if (!left->isLeaf) {\r\n        for (int i = 0; i <= right->numKeys; ++i)\r\n            left->children[MIN_KEYS + 1 + i] = right->children[i];\r\n    }\r\n    left->numKeys = left->numKeys + right->numKeys + 1;\r\n\r\n    for (int i = idx + 1; i < node->numKeys; ++i)\r\n        node->keys[i - 1] = node->keys[i];\r\n    for (int i = idx + 2; i <= node->numKeys; ++i)\r\n        node->children[i - 1] = node->children[i];\r\n    node->numKeys--;\r\n\r\n    delete right;\r\n}\r\n\r\nvoid fixUnderflow(BTreeNode* node, int idx) {\r\n    if (idx > 0 && node->children[idx - 1]->numKeys > ORDER / 2)\r\n        borrowFromPrev(node, idx);\r\n    else if (idx < node->numKeys && node->children[idx + 1]->numKeys > ORDER / 2)\r\n        borrowFromNext(node, idx);\r\n    else {\r\n        if (idx < node->numKeys) merge(node, idx);\r\n        else merge(node, idx - 1);\r\n    }\r\n}\r\n\r\nvoid deleteKey(BTreeNode* node, int key) {\r\n    int idx = 0;\r\n    while (idx < node->numKeys && key > node->keys[idx]) ++idx;\r\n\r\n    if (node->isLeaf) {\r\n        if (idx < node->numKeys && node->keys[idx] == key)\r\n            removeFromLeaf(node, idx);\r\n        return;\r\n    }\r\n\r\n    if (idx < node->numKeys && node->keys[idx] == key) {\r\n        if (node->children[idx]->numKeys > ORDER / 2) {\r\n            int pred = getPredecessor(node, idx);\r\n            node->keys[idx] = pred;\r\n            deleteKey(node->children[idx], pred);\r\n        } else if (node->children[idx + 1]->numKeys > ORDER / 2) {\r\n            int succ = getSuccessor(node, idx);\r\n            node->keys[idx] = succ;\r\n            deleteKey(node->children[idx + 1], succ);\r\n        } else {\r\n            merge(node, idx);\r\n            deleteKey(node->children[idx], key);\r\n        }\r\n    } else {\r\n        deleteKey(node->children[idx], key);\r\n    }\r\n\r\n    if (node->children[idx]->numKeys < ORDER / 2 && node != root)\r\n        fixUnderflow(node, idx);\r\n}\r\n\r\nvoid removeKey(int key) {\r\n    if (!root) return;\r\n    deleteKey(root, key);\r\n    if (root->numKeys == 0) {\r\n        BTreeNode* temp = root;\r\n        if (root->isLeaf) root = nullptr;\r\n        else root = root->children[0];\r\n        delete temp;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-deletion",
      children: "Python Implementation (Deletion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BTree:\r\n    def __init__(self, order=5):\r\n        self.root = None\r\n        self.order = order\r\n\r\n    def delete(self, key):\r\n        if self.root is None:\r\n            return\r\n        self._delete(self.root, key)\r\n        if self.root and len(self.root.keys) == 0:\r\n            if self.root.leaf:\r\n                self.root = None\r\n            else:\r\n                self.root = self.root.children[0]\r\n\r\n    def _delete(self, node, key):\r\n        min_keys = (self.order + 1) // 2 - 1\r\n        i = 0\r\n        while i < len(node.keys) and key > node.keys[i]:\r\n            i += 1\r\n\r\n        if node.leaf:\r\n            if i < len(node.keys) and node.keys[i] == key:\r\n                node.keys.pop(i)\r\n            return\r\n\r\n        if i < len(node.keys) and node.keys[i] == key:\r\n            if len(node.children[i].keys) > min_keys:\r\n                pred = self._get_predecessor(node, i)\r\n                node.keys[i] = pred\r\n                self._delete(node.children[i], pred)\r\n            elif len(node.children[i + 1].keys) > min_keys:\r\n                succ = self._get_successor(node, i)\r\n                node.keys[i] = succ\r\n                self._delete(node.children[i + 1], succ)\r\n            else:\r\n                self._merge(node, i)\r\n                self._delete(node.children[i], key)\r\n        else:\r\n            self._delete(node.children[i], key)\r\n\r\n        if len(node.children[i].keys) < min_keys and node != self.root:\r\n            self._fix_underflow(node, i)\r\n\r\n    def _get_predecessor(self, node, idx):\r\n        cur = node.children[idx]\r\n        while not cur.leaf:\r\n            cur = cur.children[-1]\r\n        return cur.keys[-1]\r\n\r\n    def _get_successor(self, node, idx):\r\n        cur = node.children[idx + 1]\r\n        while not cur.leaf:\r\n            cur = cur.children[0]\r\n        return cur.keys[0]\r\n\r\n    def _fix_underflow(self, parent, idx):\r\n        min_keys = (self.order + 1) // 2 - 1\r\n        if idx > 0 and len(parent.children[idx - 1].keys) > min_keys:\r\n            self._borrow_from_prev(parent, idx)\r\n        elif idx < len(parent.children) - 1 and len(parent.children[idx + 1].keys) > min_keys:\r\n            self._borrow_from_next(parent, idx)\r\n        else:\r\n            if idx < len(parent.children) - 1:\r\n                self._merge(parent, idx)\r\n            else:\r\n                self._merge(parent, idx - 1)\r\n\r\n    def _borrow_from_prev(self, parent, idx):\r\n        child = parent.children[idx]\r\n        sibling = parent.children[idx - 1]\r\n        child.keys.insert(0, parent.keys[idx - 1])\r\n        if not child.leaf:\r\n            child.children.insert(0, sibling.children.pop())\r\n        parent.keys[idx - 1] = sibling.keys.pop()\r\n\r\n    def _borrow_from_next(self, parent, idx):\r\n        child = parent.children[idx]\r\n        sibling = parent.children[idx + 1]\r\n        child.keys.append(parent.keys[idx])\r\n        if not child.leaf:\r\n            child.children.append(sibling.children.pop(0))\r\n        parent.keys[idx] = sibling.keys.pop(0)\r\n\r\n    def _merge(self, parent, idx):\r\n        left = parent.children[idx]\r\n        right = parent.children[idx + 1]\r\n        left.keys.append(parent.keys.pop(idx))\r\n        left.keys.extend(right.keys)\r\n        if not left.leaf:\r\n            left.children.extend(right.children)\r\n        parent.children.pop(idx + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-deletion",
      children: "Java Implementation (Deletion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class BTree {\r\n    private BTreeNode root;\r\n    private int order;\r\n    private int minKeys() { return (int)Math.ceil(order / 2.0) - 1; }\r\n\r\n    public BTree(int order) {\r\n        this.order = order;\r\n        this.root = null;\r\n    }\r\n\r\n    public void delete(int key) {\r\n        if (root == null) return;\r\n        deleteKey(root, key);\r\n        if (root.numKeys == 0) {\r\n            if (root.isLeaf) root = null;\r\n            else root = root.children[0];\r\n        }\r\n    }\r\n\r\n    private void deleteKey(BTreeNode node, int key) {\r\n        int idx = 0;\r\n        while (idx < node.numKeys && key > node.keys[idx]) idx++;\r\n\r\n        if (node.isLeaf) {\r\n            if (idx < node.numKeys && node.keys[idx] == key)\r\n                removeFromLeaf(node, idx);\r\n            return;\r\n        }\r\n\r\n        if (idx < node.numKeys && node.keys[idx] == key) {\r\n            if (node.children[idx].numKeys > minKeys()) {\r\n                int pred = getPredecessor(node, idx);\r\n                node.keys[idx] = pred;\r\n                deleteKey(node.children[idx], pred);\r\n            } else if (node.children[idx + 1].numKeys > minKeys()) {\r\n                int succ = getSuccessor(node, idx);\r\n                node.keys[idx] = succ;\r\n                deleteKey(node.children[idx + 1], succ);\r\n            } else {\r\n                merge(node, idx);\r\n                deleteKey(node.children[idx], key);\r\n            }\r\n        } else {\r\n            deleteKey(node.children[idx], key);\r\n        }\r\n        if (node.children[idx].numKeys < minKeys() && node != root)\r\n            fixUnderflow(node, idx);\r\n    }\r\n\r\n    private int getPredecessor(BTreeNode node, int idx) {\r\n        BTreeNode cur = node.children[idx];\r\n        while (!cur.isLeaf) cur = cur.children[cur.numKeys];\r\n        return cur.keys[cur.numKeys - 1];\r\n    }\r\n\r\n    private int getSuccessor(BTreeNode node, int idx) {\r\n        BTreeNode cur = node.children[idx + 1];\r\n        while (!cur.isLeaf) cur = cur.children[0];\r\n        return cur.keys[0];\r\n    }\r\n\r\n    private void fixUnderflow(BTreeNode node, int idx) {\r\n        if (idx > 0 && node.children[idx - 1].numKeys > minKeys())\r\n            borrowFromPrev(node, idx);\r\n        else if (idx < node.numKeys && node.children[idx + 1].numKeys > minKeys())\r\n            borrowFromNext(node, idx);\r\n        else {\r\n            if (idx < node.numKeys) merge(node, idx);\r\n            else merge(node, idx - 1);\r\n        }\r\n    }\r\n\r\n    private void borrowFromPrev(BTreeNode node, int idx) {\r\n        BTreeNode child = node.children[idx];\r\n        BTreeNode sibling = node.children[idx - 1];\r\n        for (int i = child.numKeys - 1; i >= 0; i--)\r\n            child.keys[i + 1] = child.keys[i];\r\n        if (!child.isLeaf) {\r\n            for (int i = child.numKeys; i >= 0; i--)\r\n                child.children[i + 1] = child.children[i];\r\n        }\r\n        child.keys[0] = node.keys[idx - 1];\r\n        if (!child.isLeaf)\r\n            child.children[0] = sibling.children[sibling.numKeys];\r\n        node.keys[idx - 1] = sibling.keys[sibling.numKeys - 1];\r\n        child.numKeys++;\r\n        sibling.numKeys--;\r\n    }\r\n\r\n    private void borrowFromNext(BTreeNode node, int idx) {\r\n        BTreeNode child = node.children[idx];\r\n        BTreeNode sibling = node.children[idx + 1];\r\n        child.keys[child.numKeys] = node.keys[idx];\r\n        if (!child.isLeaf)\r\n            child.children[child.numKeys + 1] = sibling.children[0];\r\n        node.keys[idx] = sibling.keys[0];\r\n        for (int i = 1; i < sibling.numKeys; i++)\r\n            sibling.keys[i - 1] = sibling.keys[i];\r\n        if (!sibling.isLeaf) {\r\n            for (int i = 1; i <= sibling.numKeys; i++)\r\n                sibling.children[i - 1] = sibling.children[i];\r\n        }\r\n        child.numKeys++;\r\n        sibling.numKeys--;\r\n    }\r\n\r\n    private void merge(BTreeNode node, int idx) {\r\n        BTreeNode left = node.children[idx];\r\n        BTreeNode right = node.children[idx + 1];\r\n        left.keys[minKeys()] = node.keys[idx];\r\n        for (int i = 0; i < right.numKeys; i++)\r\n            left.keys[minKeys() + 1 + i] = right.keys[i];\r\n        if (!left.isLeaf) {\r\n            for (int i = 0; i <= right.numKeys; i++)\r\n                left.children[minKeys() + 1 + i] = right.children[i];\r\n        }\r\n        left.numKeys = left.numKeys + right.numKeys + 1;\r\n        for (int i = idx + 1; i < node.numKeys; i++)\r\n            node.keys[i - 1] = node.keys[i];\r\n        for (int i = idx + 2; i <= node.numKeys; i++)\r\n            node.children[i - 1] = node.children[i];\r\n        node.numKeys--;\r\n    }\r\n\r\n    private void removeFromLeaf(BTreeNode node, int idx) {\r\n        for (int i = idx + 1; i < node.numKeys; i++)\r\n            node.keys[i - 1] = node.keys[i];\r\n        node.numKeys--;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-deletion",
      children: "Advantages & Disadvantages (Deletion)"
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
            children: "Maintains ≥50% space utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex — 3 underflow handling cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree height never increases from deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Borrow/merge logic is error-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merges may reduce height (good)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascading merges can be expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No garbage accumulation (unlike BST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle predecessor/successor swap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-trees",
      children: "B+ Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Library Index Card Catalog):"
      }), " Imagine a library where the card catalog (internal nodes) only lists topic ranges — \"A-F\", \"G-M\", \"N-Z\" — with no actual books. To find a specific book, you look up the range, then go directly to the shelf (leaf) where all books in that range are stored. The shelves themselves are connected in alphabetical order, so browsing \"G through K\" means finding the first G-book, then walking forward shelf by shelf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-tree-properties",
      children: "B+ Tree Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All keys are stored in the leaves (data nodes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes contain only routing keys — no data pointers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaves are linked in a sorted doubly-linked list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes still obey B-tree occupancy rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All leaves are at the same depth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-b-tree-search",
      children: "Algorithm: B+ Tree Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION BPLUS_SEARCH(node, key):\r\n    WHILE NOT node.isLeaf:\r\n        i = 0\r\n        WHILE i < node.numKeys AND key >= node.keys[i]:\r\n            i = i + 1\r\n        node = node.children[i]\r\n    // Now at leaf\r\n    FOR i = 0 TO node.numKeys - 1:\r\n        IF node.keys[i] == key:\r\n            RETURN node.values[i]\r\n    RETURN NULL\r\n\r\nFUNCTION BPLUS_RANGE_SCAN(startKey, endKey):\r\n    leaf = FIND_LEAF(root, startKey)\r\n    WHILE leaf != NULL:\r\n        FOR i = 0 TO leaf.numKeys - 1:\r\n            IF leaf.keys[i] > endKey:\r\n                RETURN\r\n            OUTPUT leaf.keys[i], leaf.values[i]\r\n        leaf = leaf.next\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-tree-vs-b-tree-comparison-table",
      children: "B+ Tree vs B-Tree Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+ Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal + leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf nodes only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal node content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys + data pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys only (routing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted linked list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range query performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k \\cdot \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (internal nodes hold data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (compact internal nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single key lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More compact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk block efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (more routing keys per block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex (two node types)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache friendliness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better (smaller internal nodes)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why B+ trees dominate databases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes pack more routing keys (no data → more keys per block → fanout is higher → tree is shorter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range scans are a linear walk of leaf pointers (no back-tracking up the tree)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clustered index scans are I/O-sequential (leaves are physically adjacent or linked)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-b-tree-range-query",
      children: "Dry Run: B+ Tree Range Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B+ tree of order 4:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internal:        [50, 100]\r\n                 /    |    \\\r\nLeaves:    [10,30,50] → [60,80,100] → [120,150,200]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Range query:"
      }), " Find all keys between 20 and 90"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for key ≥ 20 at root [50,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 < 50, follow child[0] to leaf [10,30,50]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan leaf: skip 10, output 30, 50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow leaf link → next leaf [60,80,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan: output 60, 80. 100 > 90, stop."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Result:"
            }), " 30, 50, 60, 80"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why B+ is better"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log_m n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ leaf scan avoids tree backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal node fanout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data in internal nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-b-tree-skeleton",
      children: "C++ B+ Tree Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n\r\nconst int BPLUS_ORDER = 4;\r\n\r\nstruct BPlusLeaf {\r\n    std::vector<int> keys;\r\n    std::vector<int> values;\r\n    BPlusLeaf* next;\r\n\r\n    BPlusLeaf() : next(nullptr) {}\r\n    bool isFull() const { return keys.size() >= BPLUS_ORDER; }\r\n};\r\n\r\nstruct BPlusNode {\r\n    std::vector<int> keys;\r\n    std::vector<BPlusNode*> children;\r\n    bool isLeaf;\r\n    BPlusLeaf* leafHead;\r\n\r\n    BPlusNode(bool leaf) : isLeaf(leaf), leafHead(nullptr) {}\r\n    bool isFull() const { return keys.size() >= BPLUS_ORDER; }\r\n};\r\n\r\nclass BPlusTree {\r\nprivate:\r\n    BPlusNode* root;\r\n\r\n    BPlusLeaf* findLeaf(int key) {\r\n        BPlusNode* node = root;\r\n        while (node && !node->isLeaf) {\r\n            int i = 0;\r\n            while (i < (int)node->keys.size() && key >= node->keys[i]) ++i;\r\n            node = node->children[i];\r\n        }\r\n        return node ? node->leafHead : nullptr;\r\n    }\r\n\r\npublic:\r\n    BPlusTree() : root(nullptr) {}\r\n\r\n    std::vector<int> rangeQuery(int low, int high) {\r\n        std::vector<int> result;\r\n        BPlusLeaf* leaf = findLeaf(low);\r\n        while (leaf) {\r\n            for (int i = 0; i < (int)leaf->keys.size(); ++i) {\r\n                if (leaf->keys[i] > high) return result;\r\n                if (leaf->keys[i] >= low)\r\n                    result.push_back(leaf->keys[i]);\r\n            }\r\n            leaf = leaf->next;\r\n        }\r\n        return result;\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-b-tree-skeleton",
      children: "Python B+ Tree Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BPlusLeaf:\r\n    def __init__(self):\r\n        self.keys = []\r\n        self.values = []\r\n        self.next = None\r\n\r\nclass BPlusNode:\r\n    def __init__(self, leaf=False):\r\n        self.keys = []\r\n        self.children = []\r\n        self.leaf = leaf\r\n        self.leaf_head = None\r\n\r\nclass BPlusTree:\r\n    def __init__(self, order=4):\r\n        self.root = None\r\n        self.order = order\r\n\r\n    def find_leaf(self, key):\r\n        node = self.root\r\n        while node and not node.leaf:\r\n            i = 0\r\n            while i < len(node.keys) and key >= node.keys[i]:\r\n                i += 1\r\n            node = node.children[i]\r\n        return node.leaf_head if node else None\r\n\r\n    def range_query(self, low, high):\r\n        result = []\r\n        leaf = self.find_leaf(low)\r\n        while leaf:\r\n            for i, k in enumerate(leaf.keys):\r\n                if k > high:\r\n                    return result\r\n                if k >= low:\r\n                    result.append(k)\r\n            leaf = leaf.next\r\n        return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-b-tree-skeleton",
      children: "Java B+ Tree Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class BPlusLeaf {\r\n    int[] keys;\r\n    int[] values;\r\n    BPlusLeaf next;\r\n    int numKeys;\r\n\r\n    BPlusLeaf(int order) {\r\n        keys = new int[order];\r\n        values = new int[order];\r\n        next = null;\r\n        numKeys = 0;\r\n    }\r\n}\r\n\r\nclass BPlusNode {\r\n    int[] keys;\r\n    BPlusNode[] children;\r\n    boolean isLeaf;\r\n    int numKeys;\r\n    BPlusLeaf leafHead;\r\n\r\n    BPlusNode(int order, boolean isLeaf) {\r\n        keys = new int[order];\r\n        children = new BPlusNode[order + 1];\r\n        this.isLeaf = isLeaf;\r\n        numKeys = 0;\r\n        leafHead = null;\r\n    }\r\n}\r\n\r\nclass BPlusTree {\r\n    private BPlusNode root;\r\n    private int order;\r\n\r\n    public BPlusTree(int order) {\r\n        this.order = order;\r\n        this.root = null;\r\n    }\r\n\r\n    private BPlusLeaf findLeaf(int key) {\r\n        BPlusNode node = root;\r\n        while (node != null && !node.isLeaf) {\r\n            int i = 0;\r\n            while (i < node.numKeys && key >= node.keys[i]) i++;\r\n            node = node.children[i];\r\n        }\r\n        return node != null ? node.leafHead : null;\r\n    }\r\n\r\n    public java.util.List<Integer> rangeQuery(int low, int high) {\r\n        java.util.List<Integer> result = new java.util.ArrayList<>();\r\n        BPlusLeaf leaf = findLeaf(low);\r\n        while (leaf != null) {\r\n            for (int i = 0; i < leaf.numKeys; i++) {\r\n                if (leaf.keys[i] > high) return result;\r\n                if (leaf.keys[i] >= low)\r\n                    result.add(leaf.keys[i]);\r\n            }\r\n            leaf = leaf.next;\r\n        }\r\n        return result;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-tree-advantages--disadvantages",
      children: "B+ Tree Advantages & Disadvantages"
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
            children: "Superior range query performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex code (two structures)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Higher fanout (compact internal nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate keys (routing vs data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Better disk block utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf pointers add overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential scan is O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space in internal nodes (routing only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard for databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less suitable for pure in-memory use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b-tree-vs-b-tree-when-to-use-what",
      children: "B-Tree vs B+ Tree: When to Use What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-key lookups (primary key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Either"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both are O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries, sorted scans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+ Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-linked lists avoid tree backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory index (small data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler, no duplicate keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File system directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree (ext4 Htree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No range scans needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database clustered index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+ Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range scans + high fanout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OLTP (many single-row lookups)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+ Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InnoDB, PostgreSQL default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OLAP (many range aggregations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+ Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar stores use variants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-why-are-b-trees-used-for-disk-based-storage-instead-of-bsts-or-avl-trees",
      children: "Q1: Why are B-trees used for disk-based storage instead of BSTs or AVL trees?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Disk I/O is ~10,000x slower than RAM access (10ms for a disk seek vs 1μs for RAM). In a BST with 1 billion keys, each lookup requires ~30 node traversals. Each traversal is a random disk read → 300ms per query. A B-tree of order 1000 packs 999 keys per node, so height ≤ 3 → only 3 random disk reads → 30ms per query. B-tree node size is intentionally matched to disk blocks (usually 4KB-16KB), so each read brings in an entire node in one I/O operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-b-tree-vs-b-tree-for-range-queries--explain-the-difference",
      children: "Q2: B+ tree vs B-tree for range queries — explain the difference."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In a B-tree, a range query \"find all keys between 10 and 100\" works by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find key 10 (O(log n)) — done."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find successor of 10 (backtrack to parent, follow next child) — another O(log n) worst case."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for each key in range: O(k log n) total."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a B+ tree:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the leaf containing key 10 (O(log n)) — done."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk the leaf's linked list forward until > 100."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total: O(log n + k)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Empirical:"
      }), " For a range of 10,000 keys in a tree of 10⁹ keys, B+ tree does ~3 + 10,000 = 10,003 operations. B-tree does ~10,000 × 3 = 30,000 operations — 3x worse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-choose-the-order-m-of-a-b-tree",
      children: "Q3: How do you choose the order m of a B-tree?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The order is chosen to make each node fit exactly into one disk block:\r\n[ m = \\frac{\\text{block size} - \\text{overhead}}{\\text{key size} + \\text{child pointer size}} ]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Block size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical m"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keys/node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height for 10⁹"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~399"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~799"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL InnoDB default page = 16KB → effective order ~1000 for 8-byte keys. The rule: maximize m within the block size to minimize tree height."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-happens-when-you-insert-into-a-b-tree-in-sorted-order-ascending",
      children: "Q4: What happens when you insert into a B-tree in sorted order (ascending)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sequential insertion (1, 2, 3, ...) causes maximum node splits. Each new key fills the rightmost leaf, causing a split that propagates some distance upward. However, unlike BSTs (where sorted insertion creates a degenerate linked list), B-trees remain perfectly balanced. Every insert still takes O(log n). This is a key advantage over BSTs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-fill-factor-and-why-does-it-matter",
      children: "Q5: What is fill factor and why does it matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fill factor measures how full the nodes are. B-tree minimum guarantee is 50% (by the ⌈m/2⌉ rule). Actual fill factor in practice is ~65-70% for random insert patterns. For B+ trees used as database indexes, a higher fill factor means fewer nodes → smaller tree height → better performance. MySQL InnoDB allows configuring the fill factor. A low fill factor (<50%) indicates a design problem — consider rebuilding the index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-concurrent-b-trees-work-latching",
      children: "Q6: How do concurrent B-trees work (latching)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Concurrent B-tree access uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "crabbing"
      }), " (lock-coupling):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lock the root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lock the child."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the child is not a split/merge risk, release the parent lock."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue down — always holding at most 2 locks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For higher concurrency, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "B-link trees"
      }), " add sibling pointers at every level. A search that encounters a mid-split node can follow the sibling link without waiting for the split to complete. PostgreSQL uses a variant of this for its B-tree index concurrency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It's Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL InnoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key = clustered index (data stored in leaf pages). Secondary indexes point to primary key. Default page = 16KB."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree (B-link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default index type. B-link tree concurrency. Supports INCLUDE clause for covering indexes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB WiredTiger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree (LSM variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document index with B-tree internal nodes. LSM trees for write-heavy workloads."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustered and secondary indexes. Index-organized tables store rows in B-tree leaves."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NTFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master File Table (MFT) is a B+ tree for file metadata. Directory indexes for fast filename lookups."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ext4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H-tree (B-tree variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory indexing uses hash-based B-tree (Htree). Fast lookups for large directories."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HFS+ (macOS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog file (directory hierarchy). Extents overflow file for large file allocation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQLite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each table and index is a separate B+ tree. Pages are 4KB default."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IBM DB2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal index with multiple key types. Bidirectional indexes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS DynamoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree (LSM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSM tree with B+ tree structure on each level. Write-optimized with background compaction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deeper-dive-database-indexing",
      children: "Deeper Dive: Database Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL InnoDB Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Primary key creates a B+ tree clustered index\r\nCREATE TABLE users (\r\n    id INT PRIMARY KEY,\r\n    name VARCHAR(100),\r\n    email VARCHAR(100)\r\n);\r\n\r\n-- Secondary index creates another B+ tree\r\nCREATE INDEX idx_name ON users(name);\r\n\r\n-- Query uses B+ tree:\r\n-- 1. Search idx_name B+ tree for 'Alice' → get primary key id\r\n-- 2. Search primary key B+ tree for that id → get full row\r\nSELECT * FROM users WHERE name = 'Alice';\r\n\r\n-- Range query is efficient on B+ tree:\r\n-- 1. Find leaf for id=100\r\n-- 2. Walk leaf linked list to id=200\r\nSELECT * FROM users WHERE id BETWEEN 100 AND 200;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why PostgreSQL's B-tree is special:"
      }), " PostgreSQL implements a \"B-link tree\" variant with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Right-sibling pointers at every level (not just leaves)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lehman-Yao concurrent access algorithm (high concurrency without read locks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deduplication (compresses duplicate keys in internal nodes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INCLUDE clause (add non-key columns in unique indexes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL unique index with included non-key columns\r\nCREATE UNIQUE INDEX idx_unique ON users (email) INCLUDE (name, created_at);\r\n-- B+ tree: email in keys (internal + leaf), name+created_at only in leaves\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MongoDB WiredTiger:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// MongoDB creates a B-tree index on the specified field\r\ndb.users.createIndex({ email: 1 });\r\n\r\n// Compound index\r\ndb.users.createIndex({ name: 1, age: -1 });\r\n\r\n// TTL index (time-to-live) uses B-tree for sorted deletion\r\ndb.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-b-tree-order-and-height",
      children: "Quick Reference: B-Tree Order and Height"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Order (m)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Keys/Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Keys/Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height for 10⁶"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height for 10⁹"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "499"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AVL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree (order m)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+ Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branching factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1.44 \\log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log_{m/2} n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log_{m/2} n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store keys + data or data ptrs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (sorted linked list)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (B-link)"
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
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL InnoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key index, range scans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree (B-link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose index, high concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS (MFT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File metadata lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ext4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H-tree (B-tree variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree (WiredTiger)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustered and secondary indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table/index storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HFS+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree (LSM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioned key-value store"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Confusing \"order m\" definitions (max children vs max keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some texts define m as max children, others as max keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clarify: order m B-tree has m max children, m-1 max keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not splitting when inserting into a full node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attempting insertion without splitting violates B-tree properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always split the full node first (at median), then insert into appropriate child"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting into a full root before splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root overflow must be handled by creating a new root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split root at median, create new root with median key, two children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong key count after deletion (underflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merging neighbors without ensuring correct total key count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After merge, parent loses one key; total = keys_left + 1 + keys_right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling deletion from internal nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleting an internal key requires finding predecessor/successor from leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with inorder predecessor (max of left child) or successor (min of right child)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that all leaves must be at the same depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree property: all leaf nodes at level h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify tree after each operation — any leaf at different depth = violation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing B-tree with B+ tree (linked leaves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree has all data in leaves with linked list; B-tree has data in all nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree: data in every node; B+ tree: data only in leaves, leaves linked"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-b-tree-implementation-simplified",
      children: "TypeScript B-Tree Implementation (simplified)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BTreeNode {\r\n    keys: number[] = [];\r\n    children: BTreeNode[] = [];\r\n    leaf: boolean;\r\n\r\n    constructor(leaf: boolean) { this.leaf = leaf; }\r\n}\r\n\r\nclass BTree {\r\n    private root: BTreeNode;\r\n    private t: number; // minimum degree (node can have t-1 to 2t-1 keys)\r\n\r\n    constructor(t: number) {\r\n        this.t = t;\r\n        this.root = new BTreeNode(true);\r\n    }\r\n\r\n    search(key: number): boolean {\r\n        return this._search(this.root, key);\r\n    }\r\n\r\n    private _search(node: BTreeNode, key: number): boolean {\r\n        let i = 0;\r\n        while (i < node.keys.length && key > node.keys[i]) i++;\r\n        if (i < node.keys.length && key === node.keys[i]) return true;\r\n        if (node.leaf) return false;\r\n        return this._search(node.children[i], key);\r\n    }\r\n\r\n    insert(key: number): void {\r\n        const r = this.root;\r\n        if (r.keys.length === 2 * this.t - 1) {\r\n            const s = new BTreeNode(false);\r\n            s.children.push(r);\r\n            this.root = s;\r\n            this.splitChild(s, 0);\r\n            this.insertNonFull(s, key);\r\n        } else {\r\n            this.insertNonFull(r, key);\r\n        }\r\n    }\r\n\r\n    private splitChild(parent: BTreeNode, i: number): void {\r\n        const y = parent.children[i];\r\n        const z = new BTreeNode(y.leaf);\r\n        const mid = y.keys[this.t - 1];\r\n        \r\n        z.keys = y.keys.splice(this.t); // take upper half\r\n        const midKey = y.keys.pop()!; // actually splice already removes\r\n\r\n        // Wait, let me fix this\r\n        // y.keys from 0 to t-2 remain, key at t-1 goes up, keys from t to 2t-2 go to z\r\n        const midKeyCorrect = y.keys[this.t - 1];\r\n        z.keys = y.keys.splice(this.t); // keeps keys from this.t onward\r\n\r\n        if (!y.leaf) {\r\n            z.children = y.children.splice(this.t);\r\n        }\r\n        parent.children.splice(i + 1, 0, z);\r\n        parent.keys.splice(i, 0, midKeyCorrect);\r\n    }\r\n\r\n    private insertNonFull(node: BTreeNode, key: number): void {\r\n        let i = node.keys.length - 1;\r\n        if (node.leaf) {\r\n            // Find position and insert\r\n            node.keys.push(0); // placeholder\r\n            while (i >= 0 && key < node.keys[i]) {\r\n                node.keys[i + 1] = node.keys[i];\r\n                i--;\r\n            }\r\n            node.keys[i + 1] = key;\r\n        } else {\r\n            while (i >= 0 && key < node.keys[i]) i--;\r\n            i++;\r\n            if (node.children[i].keys.length === 2 * this.t - 1) {\r\n                this.splitChild(node, i);\r\n                if (key > node.keys[i]) i++;\r\n            }\r\n            this.insertNonFull(node.children[i], key);\r\n        }\r\n    }\r\n\r\n    traverse(): number[] {\r\n        const result: number[] = [];\r\n        this._traverse(this.root, result);\r\n        return result;\r\n    }\r\n\r\n    private _traverse(node: BTreeNode, result: number[]): void {\r\n        let i = 0;\r\n        for (; i < node.keys.length; i++) {\r\n            if (!node.leaf) this._traverse(node.children[i], result);\r\n            result.push(node.keys[i]);\r\n        }\r\n        if (!node.leaf) this._traverse(node.children[i], result);\r\n    }\r\n}\r\n\r\n// B+ Tree style: In-order traversal produces sorted keys\r\nfunction bTreeSearchRange(tree: BTree, low: number, high: number): number[] {\r\n    return tree.traverse().filter(k => k >= low && k <= high);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a B-tree of order 5 (max 5 children), what is the maximum number of keys in a node?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 4 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 6"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How many children does a node with k keys have in a B-tree (non-leaf, non-root)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) k"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) k + 1 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 2k"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) k - 1"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the height bound of a B-tree with n keys and minimum degree t?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) log₂n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) log_t(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) log₂(t × n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) n/t"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which operation is more efficient in a B+ tree compared to a standard B-tree?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Point search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Range queries ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Insertion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Deletion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a B-tree deletion, when a node underflows after borrowing from a sibling fails:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The node is deleted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The node is merged with a sibling ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A new key is generated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The tree height increases"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The primary reason databases use B-trees/B+ trees is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) They use less memory than hash tables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) They minimize disk I/O by having a large branching factor ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) They are simpler to implement than AVL trees"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) They support O(1) key lookups"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-a, 10-b, 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B-tree level printing"
          }), ": Print all keys in a B-tree level by level, showing the keys in each node separated by structure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify B-tree properties"
          }), ": Write a function that checks all B-tree properties: keys sorted, min/max key counts, all leaves at same depth."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B-tree with lazy deletion"
          }), ": Instead of physically deleting keys, mark them as deleted. Modify search to ignore marked keys. Analyze space impact."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert B-tree to B+ tree"
          }), ": Given a B-tree, rebuild it as a B+ tree where all data resides in leaves and leaves are linked for range queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B-tree bulk loading"
          }), ": Given a sorted array of n keys, construct a B-tree directly in O(n) time (instead of n insertions). Use the bottom-up approach."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the median of B-tree"
          }), ": Given a B-tree, find the median key without extracting all keys. Use rank-based traversal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B-tree with variable-length keys"
          }), ": Modify the B-tree to support variable-length string keys. How does the order m change?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B-tree node visualization"
          }), ": Create a function that outputs a node in DOT format for GraphViz, showing keys and children with pointers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Concurrent B-tree operations"
          }), ": Describe and implement a locking protocol (latch crabbing) for concurrent B-tree insertions."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-tree-variants-comparison",
      children: "B-Tree Variants Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B* Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2-3-4 Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal + leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal + leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal + leaf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf linking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (linked list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min fill factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌊(2t-1)/3⌋ ≤ keys ≤ 2t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max keys per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2t-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (MBR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k) (faster due to links)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General indexed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, file systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spatial data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching/intro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redistribute before split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (internal nodes store data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (internal nodes only store keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (less splitting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) (m/2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What happens when a B-tree node overflows?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It is deleted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It splits into two nodes ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Keys are discarded"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The tree rebalances"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What key advantage does a B+ tree have over a B-tree?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Lower height"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Efficient range scans ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Less memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Simpler implementation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B-trees are designed for:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) In-memory computation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Disk-block storage ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Network communication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Cache optimization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the height bound of a B-tree of order m with n keys?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (\\log m)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (\\log_{\\lceil m/2 \\rceil} n) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (n/m)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (\\log n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a B+ tree, where is data stored?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Internal nodes only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Leaf nodes only ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both internal and leaf nodes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Only in the root"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What operation fixes a B-tree node with too few keys?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Rotation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Borrow or merge ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Restructuring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Rebuilding"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why do databases prefer B+ trees over B-trees?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Faster single-key lookups"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Higher fanout (compact internal nodes) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Simpler deletion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Less memory usage"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B-trees are multi-way balanced trees designed for block-oriented storage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The branching factor (order) controls height; high order means very shallow trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Splits propagate upward; merges prevent underflow and maintain the ≥50% occupancy guarantee."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B+ trees store all data in leaves connected by a linked list, enabling efficient range scans."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B-trees and B+ trees are the standard data structure for database indexes and file systems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The order m is chosen to make each node fit exactly one disk block for maximum I/O efficiency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B-link trees add sibling pointers for high-concurrency access patterns."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does a B-tree have a minimum occupancy requirement (ceil(m/2) - 1 keys)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the B+ tree leaf-linked structure benefit range queries?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between disk block size and B-tree order?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does sorted insertion in B-trees not cause degeneration (unlike BSTs)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between borrowing and merging during deletion? When is each used?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a B-tree deletion operation for a node with underflow (borrow and merge)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to compute the exact height of a B-tree given its order and number of keys."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulate a B+ tree range query: find all keys between ( low ) and ( high )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given disk block size = 4096 bytes, key = 8 bytes, pointer = 8 bytes, overhead = 64 bytes. Compute the optimal order m."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function that prints the fill factor (percentage of used key slots) of every node in a B-tree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "B-link tree"
        }), ", a variant that adds sibling pointers at every level for concurrency. Show how a search can start at the root and follow sibling links if a split is encountered mid-traversal."]
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