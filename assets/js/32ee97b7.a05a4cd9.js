"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[78899],{

/***/ 92486
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_08_binary_trees_md_32e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-08-binary-trees-md-32e.json
const site_docs_courses_data_structures_08_binary_trees_md_32e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/08-binary-trees","title":"Chapter 8: Binary Trees","description":"Previous Hash Tables | Next: Binary Search Trees","source":"@site/docs/courses/data-structures/08-binary-trees.md","sourceDirName":"courses/data-structures","slug":"/data-structures/08-binary-trees","permalink":"/ai-engineering-journey/data-structures/08-binary-trees","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-binary-trees","slug":"/data-structures/08-binary-trees","title":"Chapter 8: Binary Trees","sidebar_label":"Chapter 8: Binary Trees","sidebar_position":8},"sidebar":"course-data-structures","previous":{"title":"Chapter 7: Hash Tables","permalink":"/ai-engineering-journey/data-structures/07-hash-tables"},"next":{"title":"Chapter 9: Binary Search Trees","permalink":"/ai-engineering-journey/data-structures/09-bst"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/08-binary-trees.md


const frontMatter = {
	id: '08-binary-trees',
	slug: '/data-structures/08-binary-trees',
	title: 'Chapter 8: Binary Trees',
	sidebar_label: 'Chapter 8: Binary Trees',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Binary Trees';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Binary Trees Matter",
  "id": "why-binary-trees-matter",
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
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Definitions",
  "id": "definitions",
  "level": 3
}, {
  "value": "Properties",
  "id": "properties",
  "level": 3
}, {
  "value": "Types of Binary Trees",
  "id": "types-of-binary-trees",
  "level": 3
}, {
  "value": "Inorder Traversal",
  "id": "inorder-traversal",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Algorithm Steps (Recursive)",
  "id": "algorithm-steps-recursive",
  "level": 3
}, {
  "value": "Algorithm Steps (Iterative)",
  "id": "algorithm-steps-iterative",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run",
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
  "value": "Preorder Traversal",
  "id": "preorder-traversal",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Algorithm Steps (Recursive)",
  "id": "algorithm-steps-recursive-1",
  "level": 3
}, {
  "value": "Algorithm Steps (Iterative)",
  "id": "algorithm-steps-iterative-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-1",
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
  "value": "Postorder Traversal",
  "id": "postorder-traversal",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Algorithm Steps (Recursive)",
  "id": "algorithm-steps-recursive-2",
  "level": 3
}, {
  "value": "Algorithm Steps (Iterative — Two-Stack Method)",
  "id": "algorithm-steps-iterative--two-stack-method",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-2",
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
  "value": "Level-Order Traversal (BFS)",
  "id": "level-order-traversal-bfs",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-3",
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
  "value": "Tree Traversal Comparison Table",
  "id": "tree-traversal-comparison-table",
  "level": 2
}, {
  "value": "Count Nodes (Size)",
  "id": "count-nodes-size",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-4",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-4",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "Height of Binary Tree",
  "id": "height-of-binary-tree",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Algorithm (Postorder)",
  "id": "algorithm-postorder",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-5",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-5",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-1",
  "level": 3
}, {
  "value": "Diameter of Binary Tree",
  "id": "diameter-of-binary-tree",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Algorithm (Postorder with Global Variable)",
  "id": "algorithm-postorder-with-global-variable",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-6",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-6",
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
  "value": "Check if Two Trees are Mirrors (Symmetric Tree)",
  "id": "check-if-two-trees-are-mirrors-symmetric-tree",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-7",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-7",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-2",
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
  "value": "Lowest Common Ancestor (LCA)",
  "id": "lowest-common-ancestor-lca",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-8",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-8",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-8",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-3",
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
  "value": "Serialize and Deserialize",
  "id": "serialize-and-deserialize",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "Algorithm (Level-order with Null Markers)",
  "id": "algorithm-level-order-with-null-markers",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-9",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-9",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-9",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "Threaded Binary Trees",
  "id": "threaded-binary-trees",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-11",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Types",
  "id": "types",
  "level": 3
}, {
  "value": "Inorder Traversal Using Threads",
  "id": "inorder-traversal-using-threads",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-8",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Maximum Path Sum",
  "id": "problem-1-maximum-path-sum",
  "level": 3
}, {
  "value": "Problem 2: Right Side View",
  "id": "problem-2-right-side-view",
  "level": 3
}, {
  "value": "Problem 3: Vertical Order Traversal",
  "id": "problem-3-vertical-order-traversal",
  "level": 3
}, {
  "value": "Common Interview Mistakes",
  "id": "common-interview-mistakes",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Expression Trees Example",
  "id": "expression-trees-example",
  "level": 3
}, {
  "value": "DOM Tree Example",
  "id": "dom-tree-example",
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
  "value": "Quick Reference: Binary Tree Properties",
  "id": "quick-reference-binary-tree-properties",
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
  "value": "TypeScript Binary Tree Traversals",
  "id": "typescript-binary-tree-traversals",
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
  "value": "Tree Types Comparison",
  "id": "tree-types-comparison",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-8-binary-trees",
        children: "Chapter 8: Binary Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/07-hash-tables",
          children: "Chapter 7: Hash Tables"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/09-bst",
          children: "Binary Search Trees"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define binary trees and their terminology."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tree traversals (inorder, preorder, postorder, level-order)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive tree properties from structural relations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute tree height, size, diameter, and check symmetry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the lowest common ancestor (LCA) of two nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialize and deserialize a binary tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe threaded binary trees and their advantages."
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
        href: "../../assets/images/lessons/data-structures/08-binary-trees/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/08-binary-trees/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/08-binary-trees/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/08-binary-trees/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/08-binary-trees/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/08-binary-trees/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-binary-trees-matter",
      children: "Why Binary Trees Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are building the file system on your computer. Every folder can contain files or subfolders — but each folder has exactly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one parent"
      }), " (except the root). That hierarchy is a tree. Now imagine an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "organizational chart"
      }), " of a company: the CEO at the top, VPs under them, managers under VPs, and so on. Each person reports to exactly one boss. That too is a tree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary trees"
      }), " restrict this structure to at most two children per node, making them the simplest hierarchical structure that still enables powerful algorithms. They are the backbone of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expression evaluation"
        }), " — compilers parse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a + b * c"
        }), " into a binary expression tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search"
        }), " — binary search trees enable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "O(log n)"
        }), " lookup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority queues"
        }), " — binary heaps power Dijkstra's algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing protocols"
        }), " — network routing tables are organized as trees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine learning"
        }), " — decision trees and random forests are built from binary splits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without binary trees, hierarchical data would require expensive linear scans. Trees give us the ability to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "skip half the data at each step"
      }), " — the core idea behind logarithmic efficiency."]
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
            children: "Tree Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node has 0-2 children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root at top, leaves at bottom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traversals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder, inorder, postorder, level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each serves different processing order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves = internal nodes + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum nodes at level i is 2^i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete vs Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full: 0 or 2 children; Complete: filled left to right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Important for heap storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diameter & Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive postorder computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for tree DP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path intersection in tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root-to-node path comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threaded Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null pointers reused as traversal links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) traversal without stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Binary Tree] --> B[Terminology & Properties]\n    B --> C[Traversals]\n    C --> D[Inorder / Preorder / Postorder / Level-order]\n    D --> E[Recursive & Iterative]\n    E --> F[Basic Operations]\n    F --> G[Size / Height / Diameter]\n    G --> H[Advanced: Mirror, LCA, Serialize]\n    H --> I[Threaded Binary Trees]\n    I --> J[Interview Corner]\n    J --> K[Real-World Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch05-trees-bst.png",
        alt: "Binary Trees, Traversals and BST"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a binary tree as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "company org chart"
      }), " where every manager has at most two direct reports. The CEO is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "root"
      }), ". Employees with no reports are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leaves"
      }), ". Each person's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subtree"
      }), " is the team under them. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "depth"
      }), " is how many levels down from the CEO; the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "height"
      }), " is how deep the deepest team goes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definitions",
      children: "Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary tree"
      }), " is a hierarchical data structure where each node has at most two children, conventionally called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "right"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Terminology:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example (above tree)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The topmost node with no parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node with no children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes 4, 5, 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node that has one or two children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 2 is parent of 4, 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Child"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node directly connected downward from a parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 3 is child of 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sibling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes sharing the same parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes 2 and 3 are siblings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ancestor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node on the path from root to the node (excluding itself)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 1 is ancestor of 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Descendant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node in the subtree of the given node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes 4, 5 are descendants of 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Height"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges on longest path from node to a leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree: h = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges from root to the node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 6: depth = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depth + 1 (1-indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root at level 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subtree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node and all its descendants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node 2 + {4, 5} is a subtree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any node with at least one child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes 1, 2, 3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "properties",
      children: "Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max nodes at level i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^i (0-indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node can have 2 children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max nodes in tree of height h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^(h+1) - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of geometric series"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min height given n nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ceil(log2(n+1)) - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect binary tree fills all levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max height given n nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degenerate (skewed) tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves in full tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n + 1) / 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every internal node has 2 children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves vs internal nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "leaves = internal + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only in full binary trees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-binary-trees",
      children: "Types of Binary Trees"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full"
            }), " (strict)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node has 0 or 2 children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All levels filled except possibly last, filled left to right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perfect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All internal nodes have 2 children and all leaves at same level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Degenerate"
            }), " (skewed)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node has at most 1 child — effectively a linked list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Balanced"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height difference between subtrees <= 1 for all nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inorder-traversal",
      children: "Inorder Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inorder traversal is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reading a document left to right"
      }), ". If you arrange the tree so that smaller values are on the left and larger on the right (BST), inorder gives you values in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted order"
      }), " — just like reading a dictionary from A to Z. For expression tree ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b"
      }), ", inorder gives ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b"
      }), " — the natural infix notation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-recursive",
      children: "Algorithm Steps (Recursive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the current node is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visit"
        }), " (process) the current node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-iterative",
      children: "Algorithm Steps (Iterative)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize an empty stack. Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current = root"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " is not null or stack is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current"
            }), " is not null: push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current"
            }), " onto stack, set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current = current.left"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop the top node from stack. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visit"
            }), " it."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current = popped_node.right"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat until both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " is null and stack is empty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INORDER(node)\n    if node == null\n        return\n    INORDER(node.left)\n    visit(node)\n    INORDER(node.right)\n\nINORDER_ITERATIVE(root)\n    stack = empty Stack\n    current = root\n    while current != null OR stack is not empty\n        while current != null\n            stack.push(current)\n            current = current.left\n        current = stack.pop()\n        visit(current)\n        current = current.right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recursive execution trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack (top to bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go left to 2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go left to 4"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(2)->inorder(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null) return"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(2)->inorder(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(2)->inorder(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right(null) return"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(2) -> inorder(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(2)->inorder(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 2 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(2)->inorder(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 2 5 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 2 5 1 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1) -> inorder(3) -> inorder(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(3)->inorder(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 2 5 1 3 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inorder(1)->inorder(3)->inorder(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4 2 5 1 3 6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ Recursive\nvoid inorder(TreeNode* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->data << \" \";\n    inorder(root->right);\n}\n\n// C++ Iterative\nvoid inorderIterative(TreeNode* root) {\n    stack<TreeNode*> st;\n    TreeNode* curr = root;\n    while (curr || !st.empty()) {\n        while (curr) {\n            st.push(curr);\n            curr = curr->left;\n        }\n        curr = st.top(); st.pop();\n        cout << curr->data << \" \";\n        curr = curr->right;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python Recursive\ndef inorder(root):\n    if not root:\n        return\n    inorder(root.left)\n    print(root.data, end=\" \")\n    inorder(root.right)\n\n# Python Iterative\ndef inorder_iterative(root):\n    stack = []\n    curr = root\n    while curr or stack:\n        while curr:\n            stack.append(curr)\n            curr = curr.left\n        curr = stack.pop()\n        print(curr.data, end=\" \")\n        curr = curr.right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java Recursive\nvoid inorder(TreeNode root) {\n    if (root == null) return;\n    inorder(root.left);\n    System.out.print(root.data + \" \");\n    inorder(root.right);\n}\n\n// Java Iterative\nvoid inorderIterative(TreeNode root) {\n    Stack<TreeNode> stack = new Stack<>();\n    TreeNode curr = root;\n    while (curr != null || !stack.isEmpty()) {\n        while (curr != null) {\n            stack.push(curr);\n            curr = curr.left;\n        }\n        curr = stack.pop();\n        System.out.print(curr.data + \" \");\n        curr = curr.right;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node visited once; recursion stack depth = height h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node visited once; explicit stack holds at most h nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " Each node is pushed/popped once — constant work per node yields linear total."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(h) space?"
      }), " In the worst case (skewed tree), h = n, so stack uses O(n) space. In a balanced tree, h = log n, so O(log n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
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
            children: "Produces sorted order in BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive version may overflow stack for deep trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive recursive formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative version is more complex to write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time is optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot skip nodes — visits every node"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree (root = null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(nothing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit root only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left-skewed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushes all nodes, visits rightmost first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n, ..., 2, 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right-skewed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterates through right links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1, 2, ..., n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preorder-traversal",
      children: "Preorder Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Preorder is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "writing a table of contents"
      }), ": you first write the chapter title (root), then each section (left subtree), then each subsection before moving to the next chapter (right subtree). It mirrors how compilers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy a directory structure"
      }), ": create the folder first, then recursively copy contents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-recursive-1",
      children: "Algorithm Steps (Recursive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the current node is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visit"
        }), " the current node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-iterative-1",
      children: "Algorithm Steps (Iterative)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push root onto stack."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While stack is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop the top node. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visit"
            }), " it."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "right"
            }), " child first (so left is processed next)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "left"
            }), " child."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until stack is empty."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PREORDER(node)\n    if node == null\n        return\n    visit(node)\n    PREORDER(node.left)\n    PREORDER(node.right)\n\nPREORDER_ITERATIVE(root)\n    if root == null\n        return\n    stack.push(root)\n    while stack is not empty\n        node = stack.pop()\n        visit(node)\n        if node.right != null\n            stack.push(node.right)\n        if node.left != null\n            stack.push(node.left)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-1",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1) -> preorder(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(2)->preorder(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(2)->preorder(4)->left(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(2)->preorder(4)->right(null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(2)->preorder(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 4 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 4 5 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preorder(1)->preorder(3)->preorder(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 4 5 3 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 2 4 5 3 6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ Recursive\nvoid preorder(TreeNode* root) {\n    if (!root) return;\n    cout << root->data << \" \";\n    preorder(root->left);\n    preorder(root->right);\n}\n\n// C++ Iterative\nvoid preorderIterative(TreeNode* root) {\n    if (!root) return;\n    stack<TreeNode*> st;\n    st.push(root);\n    while (!st.empty()) {\n        TreeNode* node = st.top(); st.pop();\n        cout << node->data << \" \";\n        if (node->right) st.push(node->right);\n        if (node->left) st.push(node->left);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python Recursive\ndef preorder(root):\n    if not root:\n        return\n    print(root.data, end=\" \")\n    preorder(root.left)\n    preorder(root.right)\n\n# Python Iterative\ndef preorder_iterative(root):\n    if not root:\n        return\n    stack = [root]\n    while stack:\n        node = stack.pop()\n        print(node.data, end=\" \")\n        if node.right:\n            stack.append(node.right)\n        if node.left:\n            stack.append(node.left)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java Recursive\nvoid preorder(TreeNode root) {\n    if (root == null) return;\n    System.out.print(root.data + \" \");\n    preorder(root.left);\n    preorder(root.right);\n}\n\n// Java Iterative\nvoid preorderIterative(TreeNode root) {\n    if (root == null) return;\n    Stack<TreeNode> stack = new Stack<>();\n    stack.push(root);\n    while (!stack.isEmpty()) {\n        TreeNode node = stack.pop();\n        System.out.print(node.data + \" \");\n        if (node.right != null) stack.push(node.right);\n        if (node.left != null) stack.push(node.left);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each node once; call stack depth = height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node pushed/popped once; stack holds at most h nodes"
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
            children: "Natural root-first processing (copy tree structure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not useful for sorted order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to serialize a tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive may overflow for skewed trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative version is simple with a stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be done in O(1) space without Morris"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Nothing visited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit root once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All nodes stack up; visits root then recurses down left chain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postorder-traversal",
      children: "Postorder Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Postorder is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deleting files from a folder"
      }), ": you must delete all files inside a subfolder before you can delete the subfolder itself, and all subfolders before the parent. Operating systems use postorder when recursively removing directories. Compilers evaluate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b * c"
      }), " using postorder — operands before operator."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-recursive-2",
      children: "Algorithm Steps (Recursive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the current node is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively traverse the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visit"
        }), " the current node."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-iterative--two-stack-method",
      children: "Algorithm Steps (Iterative — Two-Stack Method)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push root onto stack1."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While stack1 is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pop node from stack1. Push it onto stack2."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push left child onto stack1."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push right child onto stack1."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop all nodes from stack2 and visit them."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POSTORDER(node)\n    if node == null\n        return\n    POSTORDER(node.left)\n    POSTORDER(node.right)\n    visit(node)\n\nPOSTORDER_ITERATIVE(root)\n    if root == null\n        return\n    stack1.push(root)\n    while stack1 is not empty\n        node = stack1.pop()\n        stack2.push(node)\n        if node.left != null\n            stack1.push(node.left)\n        if node.right != null\n            stack1.push(node.right)\n    while stack2 is not empty\n        visit(stack2.pop())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-2",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)->postorder(2)->postorder(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null), right(null), Visit 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)->postorder(2)->postorder(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null), right(null), Visit 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)->postorder(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)->postorder(3)->postorder(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left(null), right(null), Visit 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5 2 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)->postorder(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5 2 6 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "postorder(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5 2 6 3 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4 5 2 6 3 1"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ Recursive\nvoid postorder(TreeNode* root) {\n    if (!root) return;\n    postorder(root->left);\n    postorder(root->right);\n    cout << root->data << \" \";\n}\n\n// C++ Iterative (two-stack)\nvoid postorderIterative(TreeNode* root) {\n    if (!root) return;\n    stack<TreeNode*> st1, st2;\n    st1.push(root);\n    while (!st1.empty()) {\n        TreeNode* node = st1.top(); st1.pop();\n        st2.push(node);\n        if (node->left) st1.push(node->left);\n        if (node->right) st1.push(node->right);\n    }\n    while (!st2.empty()) {\n        cout << st2.top()->data << \" \";\n        st2.pop();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python Recursive\ndef postorder(root):\n    if not root:\n        return\n    postorder(root.left)\n    postorder(root.right)\n    print(root.data, end=\" \")\n\n# Python Iterative (two-stack)\ndef postorder_iterative(root):\n    if not root:\n        return\n    st1, st2 = [root], []\n    while st1:\n        node = st1.pop()\n        st2.append(node)\n        if node.left:\n            st1.append(node.left)\n        if node.right:\n            st1.append(node.right)\n    while st2:\n        print(st2.pop().data, end=\" \")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java Recursive\nvoid postorder(TreeNode root) {\n    if (root == null) return;\n    postorder(root.left);\n    postorder(root.right);\n    System.out.print(root.data + \" \");\n}\n\n// Java Iterative (two-stack)\nvoid postorderIterative(TreeNode root) {\n    if (root == null) return;\n    Stack<TreeNode> st1 = new Stack<>(), st2 = new Stack<>();\n    st1.push(root);\n    while (!st1.isEmpty()) {\n        TreeNode node = st1.pop();\n        st2.push(node);\n        if (node.left != null) st1.push(node.left);\n        if (node.right != null) st1.push(node.right);\n    }\n    while (!st2.isEmpty()) {\n        System.out.print(st2.pop().data + \" \");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each node once; call stack depth = height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two stacks collectively hold all nodes"
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
            children: "Child-before-parent ordering (tree deletion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative is more complex than other traversals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Correct order for postfix expression evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-stack method uses extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for tree DP (height, diameter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-stack iterative is error-prone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Nothing visited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit node alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes down entire chain before visiting root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "level-order-traversal-bfs",
      children: "Level-Order Traversal (BFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Level-order is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "calling out names from a class attendance sheet row by row"
      }), ". You call everyone in the front row first, then the second row, and so on. In networking, BFS finds the shortest path in an unweighted graph by exploring neighbors before going deeper."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create an empty queue. Enqueue ", (0,jsx_runtime.jsx)(_components.code, {
          children: "root"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While queue is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dequeue the front node. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visit"
            }), " it."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Enqueue its ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "left"
            }), " child (if exists)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Enqueue its ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "right"
            }), " child (if exists)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until queue is empty."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LEVEL_ORDER(root)\n    if root == null\n        return\n    queue.enqueue(root)\n    while queue is not empty\n        node = queue.dequeue()\n        visit(node)\n        if node.left != null\n            queue.enqueue(node.left)\n        if node.right != null\n            queue.enqueue(node.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-3",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue (front -> back)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 4, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 3 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 3 4 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 2 3 4 5 6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5 6"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nvoid levelOrder(TreeNode* root) {\n    if (!root) return;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        TreeNode* node = q.front(); q.pop();\n        cout << node->data << \" \";\n        if (node->left) q.push(node->left);\n        if (node->right) q.push(node->right);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\nfrom collections import deque\n\ndef level_order(root):\n    if not root:\n        return\n    q = deque([root])\n    while q:\n        node = q.popleft()\n        print(node.data, end=\" \")\n        if node.left:\n            q.append(node.left)\n        if node.right:\n            q.append(node.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nvoid levelOrder(TreeNode root) {\n    if (root == null) return;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        TreeNode node = q.poll();\n        System.out.print(node.data + \" \");\n        if (node.left != null) q.offer(node.left);\n        if (node.right != null) q.offer(node.right);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node visited once; queue holds max width w of tree"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(w) space?"
      }), " In a perfect binary tree, the queue can hold up to n/2 nodes (all leaves at the last level). Worst case: O(n)."]
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
            children: "Finds shortest path (minimum depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not natural for recursive implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visits nodes by depth level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May use O(n) space for wide trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot skip levels"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Nothing visited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit root alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue holds at most 1 node at a time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tree-traversal-comparison-table",
      children: "Tree Traversal Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preorder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level-order"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left -> root -> right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root -> left -> right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left -> right -> root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "by depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit/explicit stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two stacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST sorted order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree copy, serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree deletion, tree DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, shortest path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursive?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awkward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterative difficulty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expression notation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack space (balanced)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack space (skewed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "count-nodes-size",
      children: "Count Nodes (Size)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Counting nodes is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "counting all employees in a company"
      }), ": each manager counts everyone in their department (left + right subtrees), adds themselves, and reports the total upward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If node is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return 0."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively count nodes in left subtree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively count nodes in right subtree."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 + leftCount + rightCount"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SIZE(node)\n    if node == null\n        return 0\n    left = SIZE(node.left)\n    right = SIZE(node.right)\n    return 1 + left + right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-4",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(2) + size(3)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 4 + 2 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(4) + size(5)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 1 + 1 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(null) + size(null)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 0 + 0 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(null) + size(null)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 0 + 0 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(null) + size(6)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 0 + 1 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + size(null) + size(null)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + 0 + 0 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 7 nodes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int size(TreeNode* root) {\n    if (!root) return 0;\n    return 1 + size(root->left) + size(root->right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def size(root):\n    if not root:\n        return 0\n    return 1 + size(root.left) + size(root.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int size(TreeNode root) {\n    if (root == null) return 0;\n    return 1 + size(root.left) + size(root.right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit every node exactly once"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "height-of-binary-tree",
      children: "Height of Binary Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Height is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finding the tallest person in a family tree"
      }), ": you ask each branch how tall it is, then the tallest branch determines your height. The tree's height is the longest path from root to a leaf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-postorder",
      children: "Algorithm (Postorder)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If node is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1"
        }), " (edge-based) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " (node-based)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively compute left subtree height."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively compute right subtree height."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 + max(leftHeight, rightHeight)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HEIGHT(node)\n    if node == null\n        return -1\n    left = HEIGHT(node.left)\n    right = HEIGHT(node.right)\n    return 1 + max(left, right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-5",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "leftH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rightH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height = 1 + max(L,R)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(-1,-1) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(-1,-1) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(0,0) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(-1,-1) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(-1,0) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 + max(1,1) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " height = 2 (edges: 1->2->4 or 1->3->6)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int height(TreeNode* root) {\n    if (!root) return -1;\n    return 1 + max(height(root->left), height(root->right));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def height(root):\n    if not root:\n        return -1\n    return 1 + max(height(root.left), height(root.right))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int height(TreeNode root) {\n    if (root == null) return -1;\n    return 1 + Math.max(height(root.left), height(root.right));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-1",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder visits each node once; recursion depth = height"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "diameter-of-binary-tree",
      children: "Diameter of Binary Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The diameter of a tree is like the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "farthest distance between two cities on a road network"
      }), ". The path does not have to pass through the root — it could be entirely within a subtree. It measures the tree's \"spread.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-postorder-with-global-variable",
      children: "Algorithm (Postorder with Global Variable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintain a global/class variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "diameter = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each node, recursively compute left and right heights."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "diameter = max(diameter, leftHeight + rightHeight)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 + max(leftHeight, rightHeight)"
        }), " as the node's height."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At the end, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "diameter"
        }), " holds the answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DIAMETER(node)\n    if node == null\n        return 0\n    left = DIAMETER(node.left)\n    right = DIAMETER(node.right)\n    dia = max(dia, left + right)\n    return 1 + max(left, right)\n// Called as: dia = 0; DIAMETER(root); return dia\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-6",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "leftH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rightH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path (L+R)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "max dia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Height returned"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diameter = 4"
      }), " (edges). Path: 4 -> 2 -> 1 -> 3 -> 6 (4 edges)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-6",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int diameter = 0;\n\nint heightUtil(TreeNode* root) {\n    if (!root) return 0;\n    int l = heightUtil(root->left);\n    int r = heightUtil(root->right);\n    diameter = max(diameter, l + r);\n    return 1 + max(l, r);\n}\n\nint getDiameter(TreeNode* root) {\n    diameter = 0;\n    heightUtil(root);\n    return diameter;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def diameterOfBinaryTree(root):\n    dia = 0\n    def height(node):\n        nonlocal dia\n        if not node:\n            return 0\n        l = height(node.left)\n        r = height(node.right)\n        dia = max(dia, l + r)\n        return 1 + max(l, r)\n    height(root)\n    return dia\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int diameter = 0;\n\nint heightUtil(TreeNode root) {\n    if (root == null) return 0;\n    int l = heightUtil(root.left);\n    int r = heightUtil(root.right);\n    diameter = Math.max(diameter, l + r);\n    return 1 + Math.max(l, r);\n}\n\nint getDiameter(TreeNode root) {\n    diameter = 0;\n    heightUtil(root);\n    return diameter;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single postorder pass; constant work per node"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(n^2)?"
      }), " A naive approach computes height separately for each node, leading to O(n^2). Here height and diameter are computed in the same pass."]
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
            children: "Single-pass O(n) solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge vs. node counting causes confusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant use of postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global variable pattern is not thread-safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for tree DP patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not return the actual path, only its length"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge-based diameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node-based diameter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two nodes (root + left child)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed left (3 nodes chain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-if-two-trees-are-mirrors-symmetric-tree",
      children: "Check if Two Trees are Mirrors (Symmetric Tree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A symmetric tree is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "human face"
      }), ": the left half mirrors the right half. If you draw a vertical line through the root, the left subtree should be a mirror image of the right subtree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-1",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both roots are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " and the other is not, return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the data values differ, return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isMirror(left.left, right.right) && isMirror(left.right, right.left)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IS_MIRROR(n1, n2)\n    if n1 == null AND n2 == null\n        return true\n    if n1 == null OR n2 == null\n        return false\n    if n1.data != n2.data\n        return false\n    return IS_MIRROR(n1.left, n2.right)\n       AND IS_MIRROR(n1.right, n2.left)\n\nIS_SYMMETRIC(root)\n    return IS_MIRROR(root.left, root.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-7",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symmetric tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   2\n     / \\ / \\\n    3  4 4  3\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(2, 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values equal (2=2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(3, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(null, null) from 3's children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(4, 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(null, null) from 4's children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(null, null) from root's children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returned from all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "true"
      }), " (tree is symmetric)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-7",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "bool isMirror(TreeNode* a, TreeNode* b) {\n    if (!a && !b) return true;\n    if (!a || !b) return false;\n    return (a->data == b->data)\n        && isMirror(a->left, b->right)\n        && isMirror(a->right, b->left);\n}\n\nbool isSymmetric(TreeNode* root) {\n    return isMirror(root->left, root->right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_mirror(a, b):\n    if not a and not b:\n        return True\n    if not a or not b:\n        return False\n    return (a.data == b.data and\n            is_mirror(a.left, b.right) and\n            is_mirror(a.right, b.left))\n\ndef is_symmetric(root):\n    return is_mirror(root.left, root.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "boolean isMirror(TreeNode a, TreeNode b) {\n    if (a == null && b == null) return true;\n    if (a == null || b == null) return false;\n    return (a.data == b.data)\n        && isMirror(a.left, b.right)\n        && isMirror(a.right, b.left);\n}\n\nboolean isSymmetric(TreeNode root) {\n    return isMirror(root.left, root.right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-2",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each node once; stack depth = height"
          })]
        })
      })]
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
            children: "Single-pass, elegant recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive may stack-overflow on deep trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any binary tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative (queue-based) version takes more code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for subtree comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not work on value-mirror with different values"
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
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (vacuously symmetric)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root with left child only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Values differ at mirror positions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lowest-common-ancestor-lca",
      children: "Lowest Common Ancestor (LCA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LCA in a tree is like finding the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "common boss"
      }), " of two employees in an org chart — the nearest person who manages both. For two cousins, their LCA is their shared grandparent. In genealogy, LCA is the most recent common ancestor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-2",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root matches either ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "q"
        }), ", return root."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively search LCA in left and right subtrees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both left and right return non-null, this node is the LCA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If only one side returns non-null, the LCA is in that subtree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-8",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LCA(root, p, q)\n    if root == null\n        return null\n    if root == p OR root == q\n        return root\n    left = LCA(root.left, p, q)\n    right = LCA(root.right, p, q)\n    if left != null AND right != null\n        return root\n    if left != null\n        return left\n    else\n        return right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-8",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Find LCA of node 4 and node 5:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root matches p=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root matches q=5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=4, right=5 -> both non-null -> return 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA(null from 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no match in right subtree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=2, right=null -> return left=2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " LCA of 4 and 5 is node ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-8",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "TreeNode* lca(TreeNode* root, TreeNode* p, TreeNode* q) {\n    if (!root || root == p || root == q) return root;\n    TreeNode* left = lca(root->left, p, q);\n    TreeNode* right = lca(root->right, p, q);\n    if (left && right) return root;\n    return left ? left : right;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def lca(root, p, q):\n    if not root or root == p or root == q:\n        return root\n    left = lca(root.left, p, q)\n    right = lca(root.right, p, q)\n    if left and right:\n        return root\n    return left if left else right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lca(root.left, p, q);\n    TreeNode right = lca(root.right, p, q);\n    if (left != null && right != null) return root;\n    return (left != null) ? left : right;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-3",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each node once; recursion stack = height"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
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
            children: "Simple recursive formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes both nodes exist in the tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any binary tree (not just BST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive may overflow for deep trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time is optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not handle absent nodes gracefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p == q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns p (or q)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p is ancestor of q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One or both nodes missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns non-null node or null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "serialize-and-deserialize",
      children: "Serialize and Deserialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Serialization is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "packing furniture into a box for moving"
      }), ": you disassemble it into a flat sequence of labeled pieces. Deserialization is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unpacking and reassembling"
      }), ": reading the instructions and putting everything back in its original shape."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-level-order-with-null-markers",
      children: "Algorithm (Level-order with Null Markers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serialize:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ", return empty string."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a queue for level-order traversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each node: append its value (or \"#\" for null) to output."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enqueue left and right children (even if null)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deserialize:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split input string by delimiter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create root node from first value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a queue, assign children level by level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each node, read next two values as left and right children."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-9",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SERIALIZE(root)\n    if root == null\n        return \"\"\n    result = \"\"\n    queue.enqueue(root)\n    while queue is not empty\n        node = queue.dequeue()\n        if node == null\n            result += \"#,\"\n        else\n            result += str(node.data) + \",\"\n            queue.enqueue(node.left)\n            queue.enqueue(node.right)\n    return result\n\nDESERIALIZE(data)\n    if data == \"\"\n        return null\n    values = data.split(\",\")\n    root = new Node(int(values[0]))\n    queue.enqueue(root)\n    i = 1\n    while queue is not empty and i < len(values)\n        node = queue.dequeue()\n        if values[i] != \"#\"\n            node.left = new Node(int(values[i]))\n            queue.enqueue(node.left)\n        i++\n        if i < len(values) && values[i] != \"#\"\n            node.right = new Node(int(values[i]))\n            queue.enqueue(node.right)\n        i++\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-9",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serialize tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        1\n       / \\\n      2   3\n     / \\   \\\n    4   5   6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue 2, 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue 4, 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue #, 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5,#,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,4,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue #, #"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[#,6,#,#]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,4,5,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue #, #"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit #"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6,#,#,#,#]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,4,5,#,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip enqueue for null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[#,#,#,#]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,4,5,#,6,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue #, #"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drain nulls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,3,4,5,#,6,#,#,#,#,#,#\""
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Serialized:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1,2,3,4,5,#,6"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-9",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\nstring serialize(TreeNode* root) {\n    if (!root) return \"\";\n    string s;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        TreeNode* node = q.front(); q.pop();\n        if (!node) s += \"#,\";\n        else {\n            s += to_string(node->data) + \",\";\n            q.push(node->left);\n            q.push(node->right);\n        }\n    }\n    return s;\n}\n\nTreeNode* deserialize(string data) {\n    if (data.empty()) return nullptr;\n    stringstream ss(data);\n    string val;\n    getline(ss, val, ',');\n    TreeNode* root = new TreeNode(stoi(val));\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        TreeNode* node = q.front(); q.pop();\n        if (!getline(ss, val, ',')) break;\n        if (val != \"#\") {\n            node->left = new TreeNode(stoi(val));\n            q.push(node->left);\n        }\n        if (!getline(ss, val, ',')) break;\n        if (val != \"#\") {\n            node->right = new TreeNode(stoi(val));\n            q.push(node->right);\n        }\n    }\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef serialize(root):\n    if not root:\n        return \"\"\n    q = deque([root])\n    res = []\n    while q:\n        node = q.popleft()\n        if not node:\n            res.append(\"#\")\n        else:\n            res.append(str(node.data))\n            q.append(node.left)\n            q.append(node.right)\n    return \",\".join(res)\n\ndef deserialize(data):\n    if not data:\n        return None\n    vals = data.split(\",\")\n    root = TreeNode(int(vals[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(vals):\n        node = q.popleft()\n        if vals[i] != \"#\":\n            node.left = TreeNode(int(vals[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(vals) and vals[i] != \"#\":\n            node.right = TreeNode(int(vals[i]))\n            q.append(node.right)\n        i += 1\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic String serialize(TreeNode root) {\n    if (root == null) return \"\";\n    StringBuilder sb = new StringBuilder();\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        TreeNode node = q.poll();\n        if (node == null) sb.append(\"#,\");\n        else {\n            sb.append(node.data).append(\",\");\n            q.offer(node.left);\n            q.offer(node.right);\n        }\n    }\n    return sb.toString();\n}\n\npublic TreeNode deserialize(String data) {\n    if (data.isEmpty()) return null;\n    String[] vals = data.split(\",\");\n    TreeNode root = new TreeNode(Integer.parseInt(vals[0]));\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    int i = 1;\n    while (!q.isEmpty() && i < vals.length) {\n        TreeNode node = q.poll();\n        if (!vals[i].equals(\"#\")) {\n            node.left = new TreeNode(Integer.parseInt(vals[i]));\n            q.offer(node.left);\n        }\n        i++;\n        if (i < vals.length && !vals[i].equals(\"#\")) {\n            node.right = new TreeNode(Integer.parseInt(vals[i]));\n            q.offer(node.right);\n        }\n        i++;\n    }\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-4",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "Serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each node once; output size proportional to nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process each token once; queue holds at most n/2 nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-7",
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
            children: "Handles any binary tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null markers double output size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order preserves parent-child relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not human-readable for large trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstructs exact tree structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String parsing overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serialized"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deserialized"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root with no children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed tree (1-2-3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1,2,#,#,3,#,#,#\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly reconstructed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "threaded-binary-trees",
      children: "Threaded Binary Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-11",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Threaded trees are like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library with page cross-references"
      }), ": instead of searching the entire shelf, each page directly tells you where the next topic is. Threaded trees point null child pointers to the next node in traversal order, eliminating the need for stacks entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "threaded binary tree"
      }), " replaces null pointers with special links (threads):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A null ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " pointer points to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inorder predecessor"
        }), " of that node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A null ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " pointer points to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inorder successor"
        }), " of that node."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables O(1) space inorder traversal — no stack, no recursion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types",
      children: "Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-threaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only right pointers are replaced (inorder successor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double-threaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both left and right pointers are replaced"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boolean flags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "isLeftThread"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isRightThread"
      }), ") distinguish actual child links from threads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inorder-traversal-using-threads",
      children: "Inorder Traversal Using Threads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the leftmost node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visit current node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If right pointer is a thread, follow it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, move to the right child's leftmost node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-5",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No recursion or stack needed"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-8",
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
            children: "O(1) space inorder traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree is harder to modify (extra flags)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No recursion overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads consume memory (boolean flags)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for memory-constrained (embedded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete operations are more complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binary tree problems are among the most frequently asked in technical interviews. Mastering these patterns will prepare you for 80% of tree questions."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution Hint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diameter of Binary Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder + global variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute height and update max diameter simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lowest Common Ancestor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive divide and conquer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCA is first node where p and q split to different subtrees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maximum Path Sum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder + global variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return max branch; update global with root+both children path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vertical Order Traversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order + column map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use map<int, vector<int>> for column -> nodes; BFS with column tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symmetric Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror check recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isMirror(a.left, b.right) && isMirror(a.right, b.left)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Right Side View"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push rightmost node of each level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Tree from Inorder and Preorder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First in preorder is root; split inorder around it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zigzag Level Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order + flip flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternate deque direction each level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maximum Width"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order with index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assign index like heap: 2", (0,jsx_runtime.jsx)(_components.em, {
              children: "i+1, 2"
            }), "i+2 per level"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flatten to Linked List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder + pointer rearrangement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right pointer as next; left pointer = null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-maximum-path-sum",
      children: "Problem 1: Maximum Path Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Postorder traversal maintaining max branch sum from any node down to a leaf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int maxPathSum(TreeNode* root) {\n    int maxSum = INT_MIN;\n    maxGain(root, maxSum);\n    return maxSum;\n}\n\nint maxGain(TreeNode* node, int& maxSum) {\n    if (!node) return 0;\n    int left = max(0, maxGain(node->left, maxSum));\n    int right = max(0, maxGain(node->right, maxSum));\n    maxSum = max(maxSum, left + right + node->data);\n    return node->data + max(left, right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-right-side-view",
      children: "Problem 2: Right Side View"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Level-order, output the last node of each level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "vector<int> rightSideView(TreeNode* root) {\n    vector<int> res;\n    if (!root) return res;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int n = q.size();\n        for (int i = 0; i < n; i++) {\n            TreeNode* node = q.front(); q.pop();\n            if (i == n - 1) res.push_back(node->data);\n            if (node->left) q.push(node->left);\n            if (node->right) q.push(node->right);\n        }\n    }\n    return res;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-vertical-order-traversal",
      children: "Problem 3: Vertical Order Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "vector<vector<int>> verticalOrder(TreeNode* root) {\n    map<int, vector<int>> cols;\n    queue<pair<TreeNode*, int>> q;\n    q.push({root, 0});\n    while (!q.empty()) {\n        auto [node, col] = q.front(); q.pop();\n        cols[col].push_back(node->data);\n        if (node->left) q.push({node->left, col - 1});\n        if (node->right) q.push({node->right, col + 1});\n    }\n    vector<vector<int>> res;\n    for (auto& [col, vec] : cols)\n        res.push_back(vec);\n    return res;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-mistakes",
      children: "Common Interview Mistakes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Fails"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting base case null check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segfault / NullPointerException on leaf children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixing edge-based vs. node-based height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one in tree properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not resetting global variables between test cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifacts from previous test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using == for node comparison (value vs. reference)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing by value when nodes have same data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow with recursion on deep trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always consider iterative alternative"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Binary Trees Are Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilers"
            }), " (Expression Trees)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a + b * c"
            }), " is parsed into a binary tree where operators are internal nodes and operands are leaves. Postorder traversal generates assembly code."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Indexing"
            }), " (B-Trees)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search trees evolved into B-Trees (multi-way) for on-disk indexing in MySQL, PostgreSQL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Systems"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Directory hierarchy is a tree. The root ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), " is the root node; subdirectories are children."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Browsers"
            }), " (DOM)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Document Object Model is a tree where each HTML tag is a node with child tags. CSS selectors traverse this tree."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Routing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanning Tree Protocol (STP) ensures loop-free topology in Ethernet networks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI / Machine Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision trees split data at binary decisions. Random forests are ensembles of decision trees."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compression"
            }), " (Huffman Coding)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Huffman trees encode characters with variable-length prefixes for optimal compression (ZIP, JPEG)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Game AI"
            }), " (Minimax)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game trees represent possible moves. Alpha-beta pruning evaluates binary decisions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority Queues"
            }), " (Binary Heaps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete binary trees power heap operations in Dijkstra's algorithm and scheduling."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless Networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing trees organize mesh networks and broadcast domains."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expression-trees-example",
      children: "Expression Trees Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An expression tree for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(3 + 4) * 5"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      *\n     / \\\n    +   5\n   / \\\n  3   4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inorder:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3 + 4 * 5"
        }), " (infix, needs parentheses)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preorder:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "* + 3 4 5"
        }), " (prefix, LISP notation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Postorder:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3 4 + 5 *"
        }), " (postfix, stack-machine code)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dom-tree-example",
      children: "DOM Tree Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<html>\n  <body>\n    <div>\n      <p>Hello</p>\n      <p>World</p>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DOM tree structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        html\n         |\n       body\n        |\n       div\n      /   \\\n    p     p\n    |     |\n\"Hello\" \"World\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always prefer iterative BFS (queue-based) for level-order traversal over recursion; recursion for level-order would require tracking depth explicitly and wastes stack frames."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level-order (BFS) is iterative, not recursive"
        }), ": Use a queue. While the queue is not empty, pop the front, process it, push its children. This is the natural way to visit nodes level by level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three traversals are all O(n)"
        }), ": Each node is visited exactly once. The difference is the order, not the complexity. Choose the traversal that matches your processing need."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reconstruct from traversals"
        }), ": Given inorder + preorder (or inorder + postorder), you can uniquely reconstruct a binary tree. Inorder alone or preorder alone is insufficient."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threaded trees eliminate recursion"
        }), ": By reusing null right pointers as inorder successor links, a threaded binary tree can be traversed without recursion or an explicit stack — useful in memory-constrained environments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Postorder is the foundation of tree DP"
        }), ": Height, diameter, max path sum — all use the same postorder pattern where a node returns a computed value and updates a global variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursion vs. iteration trade-off"
        }), ": Recursive code is cleaner but risks stack overflow on skewed trees (n = 10^5). Always consider the constraint on tree depth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary trees are hierarchical structures with at most two children per node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inorder visits left -> root -> right; preorder visits root -> left -> right; postorder visits left -> right -> root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level-order traversal uses a queue to process nodes by depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree height is the longest path from root to leaf, computed recursively in postorder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree diameter may pass through root or stay within a subtree — compute height and max in one pass."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two trees are mirrors if their left and right subtrees are swapped reflections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCA is the first node where the paths to two nodes diverge into different subtrees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialization converts a tree to a string; deserialization reconstructs it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threaded trees reuse null pointers for efficient traversal without recursion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack/Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root -> left -> right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy tree, prefix expression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left -> root -> right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST sorted output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left -> right -> root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete tree, postfix expression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, shortest path in unweighted tree"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-binary-tree-properties",
      children: "Quick Reference: Binary Tree Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example (n nodes)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max nodes at level i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 3: 8 nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max nodes total (height h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^(h+1) - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height 4: 31 nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min height (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ceil(log2(n+1)) - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 nodes: height 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max height (degenerate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n - 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 nodes: height 14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves in full binary tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n + 1) / 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 nodes: 8 leaves"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print BST in sorted order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural order property"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute tree height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need subtree heights first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize for reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier with null markers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order print"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS / level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visually shows tree structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate expression tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operands before operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find deepest node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last node in BFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy/clone a tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create root first, then children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete a tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete children before parent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find diameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height + path through node combined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check symmetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder mirror check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare left.right with right.left"
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
            children: "Confusing height vs depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height = edges from node to deepest leaf; depth = edges from root to node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height is measured downward, depth is measured upward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive traversal on deep trees (stack overflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A skewed tree of depth 10,000 will overflow the call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iterative stack-based traversals for production code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling null children in recursive traversals"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dereferencing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "root.left"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "root"
            }), " is null crashes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (root == null) return"
            }), " at the top of recursion"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building unbalanced trees when sequential data is inserted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No self-balancing leads to O(n) operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use AVL, Red-Black, or B-Trees for ordered data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that leaf nodes have both children null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking only one child may mis-identify a leaf"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
              children: "node.left == null && node.right == null"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order using BFS without tracking level boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All nodes come out in one flat queue with no level info"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use null sentinel or inner loop based on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "queue.size()"
            }), " per level"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mistaking full binary tree (every node has 0 or 2 children) with complete binary tree (all levels filled left-to-right)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They are different — a full tree may be incomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn the 3 definitions: full, complete, perfect"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-binary-tree-traversals",
      children: "TypeScript Binary Tree Traversals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TreeNode<T> {\n    constructor(\n        public data: T,\n        public left: TreeNode<T> | null = null,\n        public right: TreeNode<T> | null = null\n    ) {}\n}\n\n// Depth-First: Recursive\nfunction inOrder<T>(root: TreeNode<T> | null, result: T[] = []): T[] {\n    if (!root) return result;\n    inOrder(root.left, result);\n    result.push(root.data);\n    inOrder(root.right, result);\n    return result;\n}\n\nfunction preOrder<T>(root: TreeNode<T> | null, result: T[] = []): T[] {\n    if (!root) return result;\n    result.push(root.data);\n    preOrder(root.left, result);\n    preOrder(root.right, result);\n    return result;\n}\n\nfunction postOrder<T>(root: TreeNode<T> | null, result: T[] = []): T[] {\n    if (!root) return result;\n    postOrder(root.left, result);\n    postOrder(root.right, result);\n    result.push(root.data);\n    return result;\n}\n\n// Depth-First: Iterative\nfunction inOrderIterative<T>(root: TreeNode<T> | null): T[] {\n    const result: T[] = [];\n    const stack: TreeNode<T>[] = [];\n    let curr = root;\n    while (curr || stack.length > 0) {\n        while (curr) {\n            stack.push(curr);\n            curr = curr.left;\n        }\n        curr = stack.pop()!;\n        result.push(curr.data);\n        curr = curr.right;\n    }\n    return result;\n}\n\n// Breadth-First (Level Order)\nfunction levelOrder<T>(root: TreeNode<T> | null): T[][] {\n    const result: T[][] = [];\n    if (!root) return result;\n    const queue: TreeNode<T>[] = [root];\n    while (queue.length > 0) {\n        const levelSize = queue.length;\n        const level: T[] = [];\n        for (let i = 0; i < levelSize; i++) {\n            const node = queue.shift()!;\n            level.push(node.data);\n            if (node.left) queue.push(node.left);\n            if (node.right) queue.push(node.right);\n        }\n        result.push(level);\n    }\n    return result;\n}\n\n// Tree height\nfunction treeHeight<T>(root: TreeNode<T> | null): number {\n    if (!root) return -1; // edges to deepest leaf (-1 convention) or 0 for nodes\n    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));\n}\n\n// Diameter of binary tree\nfunction treeDiameter<T>(root: TreeNode<T> | null): number {\n    let max = 0;\n    function height(node: TreeNode<T> | null): number {\n        if (!node) return 0;\n        const lh = height(node.left);\n        const rh = height(node.right);\n        max = Math.max(max, lh + rh);\n        return 1 + Math.max(lh, rh);\n    }\n    height(root);\n    return max;\n}\n\n// Check if tree is balanced (height diff ≤ 1)\nfunction isBalanced<T>(root: TreeNode<T> | null): boolean {\n    function check(node: TreeNode<T> | null): number {\n        if (!node) return 0;\n        const lh = check(node.left);\n        if (lh === -1) return -1;\n        const rh = check(node.right);\n        if (rh === -1) return -1;\n        if (Math.abs(lh - rh) > 1) return -1;\n        return 1 + Math.max(lh, rh);\n    }\n    return check(root) !== -1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the space complexity of iterative in-order traversal using a stack?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(h) where h = height ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a complete binary tree with n nodes, the height is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) n/2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) ⌊log₂(n)⌋ ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) log₂(n+1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which traversal produces the nodes in sorted order for a BST?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pre-order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) In-order ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Post-order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Level-order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The diameter of a binary tree is defined as:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The height of the tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The longest path between any two nodes (may or may not pass through root) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The maximum number of nodes in any level"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The number of leaf nodes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A tree where every node has either 0 or 2 children is called:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Complete binary tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Full (strict) binary tree ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Perfect binary tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Skewed binary tree"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Morris traversal achieves O(1) space by:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Using a queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Using threaded binary tree concepts ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Using recursion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Using hash set"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-c, 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Construct a binary tree from inorder and preorder traversals"
          }), ": Given inorder and preorder arrays, rebuild the binary tree. Solve recursively."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Boundary traversal of a binary tree"
          }), ": Print the boundary nodes of a binary tree in anti-clockwise direction (left boundary → leaves → right boundary reversed)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum path sum"
          }), ": Find the maximum path sum in a binary tree. A path can start and end at any node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lowest common ancestor (LCA) in a binary tree"
          }), ": Given two nodes, find their lowest common ancestor. Solve recursively in O(n)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vertical order traversal"
          }), ": Print nodes of a binary tree in vertical order. Use a hash map to group nodes by horizontal distance from root."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Serialize and deserialize a binary tree"
          }), ": Design algorithms to convert a binary tree to a string and reconstruct it from that string."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zigzag level order traversal"
          }), ": Traverse the tree in level order, alternating direction at each level (L→R, R→L, L→R, …)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check if a binary tree is symmetric (mirror of itself)"
          }), ": A tree is symmetric if the left subtree is a mirror of the right subtree."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum width of a binary tree"
          }), ": Find the maximum width (number of nodes at any level) including null nodes between nodes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect nodes at the same level"
          }), ": Given a binary tree with an additional ", (0,jsx_runtime.jsx)(_components.code, {
            children: "next"
          }), " pointer, connect each node to the next node on its level."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tree-types-comparison",
      children: "Tree Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complete Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Perfect Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balanced"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skewed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every node has 0 or 2 children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Levels filled left-to-right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌊log₂n⌋"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log₂(n+1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves (max)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≈ n/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≈ n/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2ʰ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array representation possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) n/2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 2^(i+1) - 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which traversal visits root first?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Inorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Preorder ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Postorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Level-order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Level-order traversal uses what data structure?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Queue ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Priority queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Hash table"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which two traversals uniquely reconstruct a binary tree?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Preorder + postorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Inorder + preorder ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Inorder + level-order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Any two"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does a threaded tree reuse?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Node values"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Null pointers ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Leaf nodes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Memory allocator"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which traversal computes tree height most naturally?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Preorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Inorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Postorder ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Level-order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of checking if a binary tree is symmetric?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n^2)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The diameter of a tree is computed in a single pass by combining height with:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) A queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A global variable ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A hash set"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-c, 7-b, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary trees are hierarchical structures with at most two ordered children (left, right)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four traversal orders: inorder (LNR), preorder (NLR), postorder (LRN), level-order (BFS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive traversals are concise but iterative versions avoid stack overflow on deep trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree height = 1 + max(leftHeight, rightHeight) computed postorder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree diameter requires a single postorder pass combining height computation with a global max."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two trees are mirrors if a.left == b.right and a.right == b.left recursively."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCA is found by recursively checking where p and q diverge into different subtrees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialization converts tree to comma-separated values with null markers (#); deserialization reconstructs via queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threaded binary trees optimize null pointers to enable O(1) space traversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary trees are fundamental to compilers, databases, browsers, file systems, and ML."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between leaves and internal nodes in a binary tree?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does inorder traversal of a BST produce sorted output?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a threaded binary tree improve traversal efficiency?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between edge-based and node-based tree height?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does preorder + inorder uniquely determine a binary tree, but preorder + postorder does not?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to find the diameter (longest path between any two nodes) of a binary tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function to check if two binary trees are structurally identical."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given the preorder and inorder traversals of a binary tree, reconstruct the tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to find the maximum path sum (any node to any node) in a binary tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement zigzag level-order traversal (alternating left-to-right, right-to-left)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a binary tree ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "serialization"
        }), " function that converts the tree to a string, and a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deserialization"
        }), " function that reconstructs it. Use level-order serialization with sentinel markers for null nodes."]
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