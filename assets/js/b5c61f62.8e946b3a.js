"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12722],{

/***/ 34177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_13_avl_md_b5c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-13-avl-md-b5c.json
const site_docs_courses_data_structures_13_avl_md_b5c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/13-avl","title":"Chapter 13: AVL Trees","description":"Prev Graph Traversals | Next Red-Black Trees","source":"@site/docs/courses/data-structures/13-avl.md","sourceDirName":"courses/data-structures","slug":"/data-structures/13-avl","permalink":"/ai-engineering-journey/data-structures/13-avl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-avl","slug":"/data-structures/13-avl","title":"Chapter 13: AVL Trees","sidebar_label":"Chapter 13: AVL Trees","sidebar_position":13},"sidebar":"course-data-structures","previous":{"title":"Chapter 12: Graph Traversals","permalink":"/ai-engineering-journey/data-structures/12-graph-traversals"},"next":{"title":"Chapter 14: Red-Black Trees","permalink":"/ai-engineering-journey/data-structures/14-red-black"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/13-avl.md


const frontMatter = {
	id: '13-avl',
	slug: '/data-structures/13-avl',
	title: 'Chapter 13: AVL Trees',
	sidebar_label: 'Chapter 13: AVL Trees',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: AVL Trees';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why AVL Trees Matter",
  "id": "why-avl-trees-matter",
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
  "value": "AVL Invariant",
  "id": "avl-invariant",
  "level": 3
}, {
  "value": "Height Guarantee",
  "id": "height-guarantee",
  "level": 3
}, {
  "value": "Rotations Overview",
  "id": "rotations-overview",
  "level": 3
}, {
  "value": "Balance Factor",
  "id": "balance-factor",
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
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
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
  "value": "Rotations",
  "id": "rotations",
  "level": 2
}, {
  "value": "LL Rotation (Right Rotation)",
  "id": "ll-rotation-right-rotation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 4
}, {
  "value": "Diagram",
  "id": "diagram",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "RR Rotation (Left Rotation)",
  "id": "rr-rotation-left-rotation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 4
}, {
  "value": "Diagram",
  "id": "diagram-1",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "LR Rotation (Left-Right Double Rotation)",
  "id": "lr-rotation-left-right-double-rotation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 4
}, {
  "value": "Diagram",
  "id": "diagram-2",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
  "level": 4
}, {
  "value": "RL Rotation (Right-Left Double Rotation)",
  "id": "rl-rotation-right-left-double-rotation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 4
}, {
  "value": "Diagram",
  "id": "diagram-3",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-4",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis (LR and RL)",
  "id": "complexity-analysis-lr-and-rl",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages (LR and RL)",
  "id": "advantages--disadvantages-lr-and-rl",
  "level": 4
}, {
  "value": "Edge Cases for LR/RL",
  "id": "edge-cases-for-lrrl",
  "level": 4
}, {
  "value": "Insertion with Rebalancing",
  "id": "insertion-with-rebalancing",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 3
}, {
  "value": "C++ Implementation (Full Insert)",
  "id": "c-implementation-full-insert",
  "level": 3
}, {
  "value": "Python Implementation (Full Insert)",
  "id": "python-implementation-full-insert",
  "level": 3
}, {
  "value": "Java Implementation (Full Insert)",
  "id": "java-implementation-full-insert",
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
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "Deletion with Rebalancing",
  "id": "deletion-with-rebalancing",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-6",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-6",
  "level": 3
}, {
  "value": "Deletion 1: Delete 25 (leaf — no cascade)",
  "id": "deletion-1-delete-25-leaf--no-cascade",
  "level": 4
}, {
  "value": "Deletion 2: Delete 50 (one child — cascading)",
  "id": "deletion-2-delete-50-one-child--cascading",
  "level": 4
}, {
  "value": "Deletion 3: Delete 10 (two children — cascading rotations)",
  "id": "deletion-3-delete-10-two-children--cascading-rotations",
  "level": 4
}, {
  "value": "Deletion 4: Delete 30 (root, two children — deep cascade)",
  "id": "deletion-4-delete-30-root-two-children--deep-cascade",
  "level": 4
}, {
  "value": "C++ Implementation (Full Delete)",
  "id": "c-implementation-full-delete",
  "level": 3
}, {
  "value": "Python Implementation (Full Delete)",
  "id": "python-implementation-full-delete",
  "level": 3
}, {
  "value": "Java Implementation (Full Delete)",
  "id": "java-implementation-full-delete",
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
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "AVL vs Red-Black vs B-Tree",
  "id": "avl-vs-red-black-vs-b-tree",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain AVL Rotations Visually",
  "id": "q1-explain-avl-rotations-visually",
  "level": 3
}, {
  "value": "Q2: Check if a Binary Tree is AVL",
  "id": "q2-check-if-a-binary-tree-is-avl",
  "level": 3
}, {
  "value": "Q3: Count Rotations During a Sequence of Insertions",
  "id": "q3-count-rotations-during-a-sequence-of-insertions",
  "level": 3
}, {
  "value": "Q4: Worst-Case AVL Height",
  "id": "q4-worst-case-avl-height",
  "level": 3
}, {
  "value": "Q5: When Would You NOT Use AVL?",
  "id": "q5-when-would-you-not-use-avl",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Key Insight: AVL vs Hash Table",
  "id": "key-insight-avl-vs-hash-table",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: AVL Tree Full Implementation",
  "id": "example-1-avl-tree-full-implementation",
  "level": 3
}, {
  "value": "Example 2: AVL Tree Driver",
  "id": "example-2-avl-tree-driver",
  "level": 3
}, {
  "value": "Example 3: Checking AVL Balance",
  "id": "example-3-checking-avl-balance",
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
  "value": "Quick Reference: AVL Rotation Patterns",
  "id": "quick-reference-avl-rotation-patterns",
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
  "value": "TypeScript AVL Tree Implementation",
  "id": "typescript-avl-tree-implementation",
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
  "value": "Self-Balancing Trees Comparison",
  "id": "self-balancing-trees-comparison",
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
        id: "chapter-13-avl-trees",
        children: "Chapter 13: AVL Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/12-graph-traversals",
        children: "Chapter 12: Graph Traversals"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/14-red-black",
        children: "Chapter 14: Red-Black Trees"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " AVL trees guarantee O(log n) operations by maintaining a strict height balance factor of -1, 0, or 1 at every node."]
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
        href: "../../assets/images/lessons/data-structures/13-avl/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/13-avl/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/13-avl/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/13-avl/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/13-avl/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/13-avl/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define balance factor and AVL invariant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement LL, RR, LR, and RL rotations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement insertion and deletion with rebalancing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze AVL tree height guarantees."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-avl-trees-matter",
      children: "Why AVL Trees Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-balancing scale"
      }), " — a platform that automatically levels itself no matter how you distribute the weight. If you load one side too heavily, a mechanism shifts the platform back to perfectly horizontal. Without this self-balancing, the scale would tilt and become useless for accurate measurement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A standard ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Search Tree (BST)"
      }), " is like a scale without auto-leveling. Insert sorted data (1, 2, 3, 4, 5) and the tree degenerates into a linked list — search time drops from O(log n) to O(n). With millions of records, that is the difference between instantaneous and grinding to a halt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AVL tree"
      }), " (named after inventors Adelson-Velsky and Landis, 1962) is the self-balancing mechanism. After every insertion or deletion, it checks its own \"tilt\" (the balance factor) and performs small local rearrangements called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rotations"
      }), " to restore balance. This guarantees the tree height never exceeds ~1.44 log₂ n, keeping all operations strictly logarithmic."]
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
            children: "Balance factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "height(left) - height(right) ∈ {-1, 0, 1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The invariant that keeps the tree balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LL, RR (single), LR, RL (double)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four patterns that restore balance after modifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert as BST, then rebalance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most one rotation needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove as BST, then rebalance up the path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May require cascading rotations to root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(h < 1.44 \\log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees logarithmic worst-case search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVL vs Red-Black"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tighter balance → faster search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose AVL for search-heavy workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[AVL Tree] --> B[BST Insert/Delete]\n    B --> C{Balance Factor Check}\n    C --> D[|bf| ≤ 1 ✓]\n    C --> E[|bf| > 1 ✗]\n    D --> F[Done]\n    E --> G{Which Rotation?}\n    G --> H[LL → Right Rotate]\n    G --> I[RR → Left Rotate]\n    G --> J[LR → Left then Right]\n    G --> K[RL → Right then Left]\n    H --> L[Tree Balanced]\n    I --> L\n    J --> L\n    K --> L\n    L --> F\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The AVL invariant ensures that the tree height never exceeds 1.44 log n, making all operations O(log n)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch13-avl.png",
        alt: "AVL Tree Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avl-invariant",
      children: "AVL Invariant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AVL tree"
      }), " is a self-balancing BST. The balance factor of any node is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ \\text{balance} = \\text{height(left)} - \\text{height(right)} ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The AVL invariant requires ( \\text{balance} \\in {-1, 0, 1} ) for every node."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "height-guarantee",
      children: "Height Guarantee"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The height of an AVL tree is bounded by ( h < 2 \\log_2 (n+1) ). This guarantees ( O(\\log n) ) search, insert, and delete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotations-overview",
      children: "Rotations Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an insertion or deletion violates the balance invariant, rotations restore balance."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rotation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertion in left child's left subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right rotate at grandparent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertion in right child's right subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rotate at grandparent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertion in left child's right subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rotate at child, then right rotate at grandparent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertion in right child's left subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right rotate at child, then left rotate at grandparent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "balance-factor",
      children: "Balance Factor"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spirit level (bubble level)"
      }), " used in construction. The bubble sits centered when the surface is horizontal. If you tilt left, the bubble drifts right by exactly the tilt amount. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "balance factor"
      }), " measures this tilt: positive means left subtree deeper, negative means right subtree deeper. The AVL invariant demands the bubble stays within [-1, 0, 1] — \"close enough to level.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ \\text{Balance Factor} = \\text{Height(Left Subtree)} - \\text{Height(Right Subtree)} ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Height of a leaf = 1. Height of null = 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute height"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "height = 1 + max(height(left), height(right))"
        }), ". null → 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute balance factor"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bf = height(left) - height(right)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check invariant"
        }), ": if |bf| > 1, rebalance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagate upward"
        }), ": recompute heights and check bf along the path from modification to root."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION getHeight(node):\n    IF node == NULL: RETURN 0\n    RETURN node.height\n\nFUNCTION getBalanceFactor(node):\n    IF node == NULL: RETURN 0\n    RETURN getHeight(node.left) - getHeight(node.right)\n\nFUNCTION updateHeight(node):\n    node.height = 1 + max(getHeight(node.left), getHeight(node.right))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "       30\n      /  \\\n     20   40\n    /  \\\n   10   25\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "height(left)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "height(right)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "node.height"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balance Factor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All balance factors ∈ {-1, 0, 1} ✓. This tree is AVL-compliant."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now insert 5. The tree becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "       30\n      /  \\\n     20   40\n    /  \\\n   10   25\n  /\n 5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "height(left)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "height(right)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "node.height"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balance Factor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (OK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (OK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), " ✗"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node 30 has bf = 2 → AVL violation. Rotation needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int height(AVLNode* node) {\n    return node ? node->height : 0;\n}\n\nint balanceFactor(AVLNode* node) {\n    return node ? height(node->left) - height(node->right) : 0;\n}\n\nvoid updateHeight(AVLNode* node) {\n    if (node) {\n        node->height = 1 + std::max(height(node->left), height(node->right));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def height(node):\n    return node.height if node else 0\n\ndef balance_factor(node):\n    return height(node.left) - height(node.right) if node else 0\n\ndef update_height(node):\n    if node:\n        node.height = 1 + max(height(node.left), height(node.right))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public int height(AVLNode node) {\n    return (node == null) ? 0 : node.height;\n}\n\npublic int balanceFactor(AVLNode node) {\n    return (node == null) ? 0 : height(node.left) - height(node.right);\n}\n\npublic void updateHeight(AVLNode node) {\n    if (node != null) {\n        node.height = 1 + Math.max(height(node.left), height(node.right));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computing height of one node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads precomputed child heights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computing balance factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtracts two precomputed values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Updating heights along path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most h ≤ 1.44 log₂ n ancestors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n) is guaranteed:"
      }), " In an AVL tree of height h, the minimum node count follows n(h) = n(h-1) + n(h-2) + 1 (Fibonacci-like recurrence). This gives h < 1.44 log₂(n+2). Unlike ordinary BST where h can equal n, AVL provably stays logarithmic."]
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
            children: "Guaranteed O(log n) search — no worst-case degradation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra storage: each node stores height (int)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tighter balance than Red-Black → faster lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations add overhead on writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable performance for real-time systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion more complex than BST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple invariant to reason about"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not ideal for write-heavy workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every operation is individually O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more code than BST"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty tree (root = null)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height = 0, bf = 0. Valid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height = 1, bf = 0. Valid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root: bf = ±1. Child is leaf: bf = 0. Valid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically ignored — no height change, no rebalancing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All nodes have bf = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfectly balanced. Best-case height = ⌊log₂ n⌋ + 1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "bf = +2 but left child has bf = -1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR case — double rotation needed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 million nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height ≤ 1.44 log₂ 1,000,000 ≈ 29. All ops finish in ~30 steps."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rotations",
      children: "Rotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rotations rearrange 3-4 pointers to restore the AVL invariant without breaking BST ordering. Four patterns, but conceptually only two: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single"
      }), " (LL, RR) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "double"
      }), " (LR, RL = two singles composed)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ll-rotation-right-rotation",
      children: "LL Rotation (Right Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack of books"
      }), " on a shelf where the heaviest book is on top and lighter books stack to the left — tipping left. Grab the middle book, lift it to the top, let the heavy book fall right. The stack levels instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diagram",
      children: "Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        z                         y\n       / \\                       / \\\n      y   T4        ===>        x   z\n     / \\                           / \\\n    x   T3                        T3  T4\n   / \\\n  T1  T2\n\nBefore: bf(z) = +2, bf(y) ≥ 0\nAfter:  bf(z) = 0,  bf(y) = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " be the unbalanced node (bf = +2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " = left child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T2"
        }), " = right subtree of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " the right child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T2"
        }), " as left child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update heights of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " as new subtree root."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION rightRotate(z):\n    y = z.left\n    T2 = y.right\n    y.right = z\n    z.left = T2\n    updateHeight(z)\n    updateHeight(y)\n    RETURN y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert 30, 20, 10 in order."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Insert 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Insert 20."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    30 (bf=+1, h=2)\n   /\n  20 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Insert 10. bf(30) = +2 ✗. LL case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 (bf=+2 ✗, h=3)\n     /\n    20 (bf=+1, h=2)\n   /\n  10 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Right rotate at 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      20 (bf=0, h=2)\n     /  \\\n    10   30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balanced. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* rotateRight(AVLNode* z) {\n    AVLNode* y = z->left;\n    AVLNode* T2 = y->right;\n    y->right = z;\n    z->left = T2;\n    updateHeight(z);\n    updateHeight(y);\n    return y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rotate_right(z):\n    y = z.left\n    T2 = y.right\n    y.right = z\n    z.left = T2\n    update_height(z)\n    update_height(y)\n    return y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode rotateRight(AVLNode z) {\n    AVLNode y = z.left;\n    AVLNode T2 = y.right;\n    y.right = z;\n    z.left = T2;\n    updateHeight(z);\n    updateHeight(y);\n    return y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
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
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointer reassignments — constant work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 local pointer variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Restores balance in O(1) local operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only correct for LL pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves BST ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If applied to LR case, tree stays broken"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "z has no left child"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible — bf = +2 requires deeper left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T2 = null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works — z.left becomes null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "z is root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y becomes new global root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rr-rotation-left-rotation",
      children: "RR Rotation (Left Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mirror image of LL — a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack of boxes"
      }), " leaning right. Push the middle box up, let the heavy box drop left."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diagram-1",
      children: "Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    z                           y\n   / \\                         / \\\n  T4  y          ===>         z   x\n     / \\                     / \\\n    T3  x                   T4 T3\n       / \\\n      T2 T1\n\nBefore: bf(z) = -2, bf(y) ≤ 0\nAfter:  bf(z) = 0,  bf(y) = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " be the unbalanced node (bf = -2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " = right child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T2"
        }), " = left subtree of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " the left child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T2"
        }), " as right child of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update heights of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION leftRotate(z):\n    y = z.right\n    T2 = y.left\n    y.left = z\n    z.right = T2\n    updateHeight(z)\n    updateHeight(y)\n    RETURN y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert 10, 20, 30."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Insert 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Insert 20."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=-1, h=2)\n  \\\n   20 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Insert 30. bf(10) = -2 ✗. RR case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=-2 ✗, h=3)\n  \\\n   20 (bf=-1, h=2)\n     \\\n      30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Left rotate at 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    20 (bf=0, h=2)\n   /  \\\n  10   30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balanced. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* rotateLeft(AVLNode* z) {\n    AVLNode* y = z->right;\n    AVLNode* T2 = y->left;\n    y->left = z;\n    z->right = T2;\n    updateHeight(z);\n    updateHeight(y);\n    return y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rotate_left(z):\n    y = z.right\n    T2 = y.left\n    y.left = z\n    z.right = T2\n    update_height(z)\n    update_height(y)\n    return y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode rotateLeft(AVLNode z) {\n    AVLNode y = z.right;\n    AVLNode T2 = y.left;\n    y.left = z;\n    z.right = T2;\n    updateHeight(z);\n    updateHeight(y);\n    return y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
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
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror of RR — 3 pointer updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 local variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "O(1) fix for RR imbalance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect for RL case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric to rightRotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires checking child's bf"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lr-rotation-left-right-double-rotation",
      children: "LR Rotation (Left-Right Double Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Untangling a garden hose"
      }), " with a kink in the middle. First twist the kink one way to create a simple bend, then straighten the whole thing. You cannot pull it straight directly — the kink must first be reversed into a simpler curve."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diagram-2",
      children: "Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LR Case (Left-Right):\n        z                         z                         x\n       / \\                       / \\                       / \\\n      y   T4       ===>         x   T4       ===>         y   z\n     / \\                       / \\                       / \\ / \\\n    T1  x                     y   T3                    T1 T2T3 T4\n       / \\                   / \\\n      T2 T3                 T1 T2\n\nStep 1: Left rotate at y     Step 2: Right rotate at z\nBefore: bf(z) = +2, bf(y) = -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " is unbalanced (bf = +2). Left child ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " has bf = -1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First rotation:"
        }), " Left rotate at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " — converts LR to LL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second rotation:"
        }), " Right rotate at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " — fixes LL."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update heights after each rotation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION leftRightRotate(z):\n    z.left = leftRotate(z.left)\n    RETURN rightRotate(z)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert 30, 10, 20."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Insert 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Insert 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    30 (bf=+1, h=2)\n   /\n  10 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Insert 20. bf(30) = +2 ✗. bf(10) = -1 → LR case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 (bf=+2 ✗)\n     /\n    10 (bf=-1)\n     \\\n      20 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Left rotate at 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 (bf=+2 ✗)\n     /\n    20 (bf=0)\n   /\n  10 (bf=0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now LL case at 30."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Right rotate at 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      20 (bf=0, h=2)\n     /  \\\n    10   30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balanced. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* leftRightRotate(AVLNode* z) {\n    z->left = rotateLeft(z->left);\n    return rotateRight(z);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def left_right_rotate(z):\n    z.left = rotate_left(z.left)\n    return rotate_right(z)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode leftRightRotate(AVLNode z) {\n    z.left = rotateLeft(z.left);\n    return rotateRight(z);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rl-rotation-right-left-double-rotation",
      children: "RL Rotation (Right-Left Double Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jackhammer handle"
      }), " — the grip is on the right, but the weight shifts inside and left. First push the inner handle outward (right), then pull the whole thing left to center it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diagram-3",
      children: "Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RL Case (Right-Left):\n    z                         z                           x\n   / \\                       / \\                         / \\\n  T4  y       ===>         T4  x        ===>            z   y\n     / \\                       / \\                     / \\ / \\\n    x  T3                     T1  y                   T4 T1T2 T3\n   / \\                           / \\\n  T1 T2                         T2 T3\n\nStep 1: Right rotate at y     Step 2: Left rotate at z\nBefore: bf(z) = -2, bf(y) = +1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " is unbalanced (bf = -2). Right child ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " has bf = +1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First rotation:"
        }), " Right rotate at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " — converts RL to RR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second rotation:"
        }), " Left rotate at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " — fixes RR."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update heights."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION rightLeftRotate(z):\n    z.right = rightRotate(z.right)\n    RETURN leftRotate(z)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert 10, 30, 20."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Insert 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Insert 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=-1, h=2)\n  \\\n   30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Insert 20. bf(10) = -2 ✗. bf(30) = +1 → RL case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=-2 ✗)\n  \\\n   30 (bf=+1)\n  /\n 20 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Right rotate at 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 (bf=-2 ✗)\n  \\\n   20 (bf=0)\n     \\\n      30 (bf=0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now RR case at 10."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Left rotate at 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     20 (bf=0, h=2)\n    /  \\\n   10   30 (bf=0, h=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balanced. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* rightLeftRotate(AVLNode* z) {\n    z->right = rotateRight(z->right);\n    return rotateLeft(z);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def right_left_rotate(z):\n    z.right = rotate_right(z.right)\n    return rotate_left(z)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode rightLeftRotate(AVLNode z) {\n    z.right = rotateRight(z.right);\n    return leftRotate(z);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-lr-and-rl",
      children: "Complexity Analysis (LR and RL)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
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
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two O(1) rotations composed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuses single-rotation routines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-lr-and-rl",
      children: "Advantages & Disadvantages (LR and RL)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Handles \"inside\" imbalance patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twice the pointer work of single rotations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built from well-understood single rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires correct detection of child's balance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-for-lrrl",
      children: "Edge Cases for LR/RL"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Child's bf misdetected as 0 instead of ±1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May pick wrong rotation — must check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rotating when X has no children"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2/T3 are null — rotation still correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "z is the root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After double rotation, new node becomes root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insertion-with-rebalancing",
      children: "Insertion with Rebalancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loading plates onto a barbell."
      }), " Each time you add weight to one side, the bar tilts. Check the tilt and adjust by moving plates from the heavy side to the light side before adding the next plate. The bar stays level throughout — just as AVL rebalances after each insertion to maintain logarithmic height."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BST Insert:"
        }), " Insert node as in a standard BST."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Height:"
        }), " Walk back up, recomputing height at each ancestor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Balance:"
        }), " Compute bf at each ancestor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rebalance if |bf| > 1:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf > 1 AND value < node.left.data → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LL"
            }), ": rightRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf < -1 AND value > node.right.data → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RR"
            }), ": leftRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf > 1 AND value > node.left.data → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LR"
            }), ": leftRotate(node.left) then rightRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf < -1 AND value < node.right.data → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RL"
            }), ": rightRotate(node.right) then leftRotate(node)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return (possibly new) subtree root."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION insert(node, value):\n    IF node == NULL:\n        RETURN new AVLNode(value)\n\n    IF value < node.data:\n        node.left = insert(node.left, value)\n    ELSE IF value > node.data:\n        node.right = insert(node.right, value)\n    ELSE:\n        RETURN node  // no duplicates\n\n    updateHeight(node)\n\n    bf = getBalanceFactor(node)\n\n    // LL\n    IF bf > 1 AND value < node.left.data:\n        RETURN rightRotate(node)\n\n    // RR\n    IF bf < -1 AND value > node.right.data:\n        RETURN leftRotate(node)\n\n    // LR\n    IF bf > 1 AND value > node.left.data:\n        node.left = leftRotate(node.left)\n        RETURN rightRotate(node)\n\n    // RL\n    IF bf < -1 AND value < node.right.data:\n        node.right = rightRotate(node.right)\n        RETURN leftRotate(node)\n\n    RETURN node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert: [30, 20, 40, 10, 25, 35, 50, 5, 15]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 30:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "30 [bf=0, h=1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 20:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    30 [bf=+1, h=2]\n   /\n  20 [bf=0, h=1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 1 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 40:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    30 [bf=0, h=2]\n   /  \\\n  20   40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 2-2=0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 10:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 [bf=+1, h=3]\n     /  \\\n    20   40\n   /\n  10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 2-1=1 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 25:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 [bf=+1, h=3]\n     /  \\\n    20   40\n   /  \\\n  10  25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 2-1=1 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 35:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 [bf=0, h=3]\n     /  \\\n    20   40\n   /  \\  /\n  10 25 35\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 2-2=0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 50:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      30 [bf=-1, h=3]\n     /  \\\n    20   40\n   /  \\  / \\\n  10 25 35 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bf(30) = 2-2=0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=+1, h=4]\n         /  \\\n       20   40\n      /  \\  / \\\n     10  25 35 50\n    /\n   5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heights: 5→1, 10→2, 20→3. bf(30) = 3-2=1 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert 15:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "            30 [bf=+2 ✗]\n           /  \\\n         20   40\n        /  \\  / \\\n       10  25 35 50\n      / \\\n     5  15\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Heights: 5→1, 15→1, 10→2, 20→3, 30→4.\nbf(20) = 2-1=1 ✓. bf(30) = 3-2 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "+2 ✗"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detect LR case at 30:"
      }), " bf(30)=+2, bf(left child 20)=+1? No, bf(20) = h(10)=2 - h(25)=1 = +1. Since bf > 1 AND value(15) > node.left.data(20) → LR."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step A:"
      }), " Left rotate at 20."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before:            After:\n     20              10\n    /  \\            /  \\\n   10  25          5   20\n  / \\                 /  \\\n 5  15              15   25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=+2 ✗]\n         /  \\\n        10  40\n       / \\  / \\\n      5 20 35 50\n        / \\\n       15 25\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step B:"
      }), " Right rotate at 30."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          20 [bf=0, h=3]\n         /  \\\n       10    30\n      / \\   / \\\n     5  15 25 40\n             /  \\\n            35  50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All balance factors ∈ {-1, 0, 1}. ✓ Final tree is perfectly balanced."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-full-insert",
      children: "C++ Implementation (Full Insert)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* insert(AVLNode* node, const T& value) {\n    if (!node) return new AVLNode(value);\n\n    if (value < node->data)\n        node->left = insert(node->left, value);\n    else if (value > node->data)\n        node->right = insert(node->right, value);\n    else\n        return node;\n\n    updateHeight(node);\n    return rebalance(node, value);\n}\n\nAVLNode* rebalance(AVLNode* node, const T& value) {\n    int bf = balanceFactor(node);\n\n    // LL\n    if (bf > 1 && value < node->left->data)\n        return rotateRight(node);\n\n    // RR\n    if (bf < -1 && value > node->right->data)\n        return rotateLeft(node);\n\n    // LR\n    if (bf > 1 && value > node->left->data) {\n        node->left = rotateLeft(node->left);\n        return rotateRight(node);\n    }\n\n    // RL\n    if (bf < -1 && value < node->right->data) {\n        node->right = rotateRight(node->right);\n        return rotateLeft(node);\n    }\n\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-full-insert",
      children: "Python Implementation (Full Insert)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def insert(node, value):\n    if node is None:\n        return AVLNode(value)\n\n    if value < node.data:\n        node.left = insert(node.left, value)\n    elif value > node.data:\n        node.right = insert(node.right, value)\n    else:\n        return node\n\n    update_height(node)\n    return rebalance(node, value)\n\ndef rebalance(node, value):\n    bf = balance_factor(node)\n\n    # LL\n    if bf > 1 and value < node.left.data:\n        return rotate_right(node)\n\n    # RR\n    if bf < -1 and value > node.right.data:\n        return rotate_left(node)\n\n    # LR\n    if bf > 1 and value > node.left.data:\n        node.left = rotate_left(node.left)\n        return rotate_right(node)\n\n    # RL\n    if bf < -1 and value < node.right.data:\n        node.right = rotate_right(node.right)\n        return rotate_left(node)\n\n    return node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-full-insert",
      children: "Java Implementation (Full Insert)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode insert(AVLNode node, int value) {\n    if (node == null) return new AVLNode(value);\n\n    if (value < node.data)\n        node.left = insert(node.left, value);\n    else if (value > node.data)\n        node.right = insert(node.right, value);\n    else\n        return node;\n\n    updateHeight(node);\n    return rebalance(node, value);\n}\n\npublic AVLNode rebalance(AVLNode node, int value) {\n    int bf = balanceFactor(node);\n\n    // LL\n    if (bf > 1 && value < node.left.data)\n        return rotateRight(node);\n\n    // RR\n    if (bf < -1 && value > node.right.data)\n        return rotateLeft(node);\n\n    // LR\n    if (bf > 1 && value > node.left.data) {\n        node.left = rotateLeft(node.left);\n        return rotateRight(node);\n    }\n\n    // RL\n    if (bf < -1 && value < node.right.data) {\n        node.right = rotateRight(node.right);\n        return rotateLeft(node);\n    }\n\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST descent O(h) + ≤ 2 rotations O(1) + height updates O(h). h ≤ 1.44 log₂ n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (average)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive call stack depth = tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most one double rotation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why only ≤ 2 rotations?"
      }), " After inserting a node, the balance factor of an ancestor changes by at most ±1. Once you rotate at the first unbalanced node, the subtree height returns to its pre-insertion value. Ancestors above are unaffected — rotations ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "do not cascade"
      }), " during insertion."]
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
            children: "Guaranteed O(log n) even with sorted input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex than BST insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "At most one double rotation per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive descent requires stack space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No amortization — every insert is individually fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower inserts than Red-Black trees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New node becomes root, h=1, bf=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically ignored. No height change."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert causes no imbalance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height updates only — no rotation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert causes zigzag (LR/RL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double rotation needed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorted ascending input"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RR at every 3rd insertion."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rotation at root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root pointer changes. Must update global root."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletion-with-rebalancing",
      children: "Deletion with Rebalancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Removing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "support pillar from a building"
      }), " — the floors above may settle unevenly, and this instability can propagate all the way up. Unlike insertion (where adding one brick tilts only one beam), deletion can cause cascading imbalance. Each floor-to-be ancestor must be checked and possibly re-shored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-6",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BST Delete:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Leaf: delete directly."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "One child: replace node with its child."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Two children: replace with inorder successor, then delete successor from right subtree."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Height:"
        }), " At each ancestor from deletion point to root."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Balance:"
        }), " Compute bf at each ancestor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rebalance if |bf| > 1"
        }), " (using child's bf to distinguish):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf > 1 AND bf(left child) ≥ 0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LL"
            }), ": rightRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf > 1 AND bf(left child) < 0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LR"
            }), ": leftRotate(left) then rightRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf < -1 AND bf(right child) ≤ 0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RR"
            }), ": leftRotate(node)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["bf < -1 AND bf(right child) > 0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RL"
            }), ": rightRotate(right) then leftRotate(node)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " for EVERY ancestor up to root (deletion may cascade—unlike insertion)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the (possibly new) subtree root."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION delete(node, value):\n    IF node == NULL: RETURN NULL\n\n    IF value < node.data:\n        node.left = delete(node.left, value)\n    ELSE IF value > node.data:\n        node.right = delete(node.right, value)\n    ELSE:\n        IF node.left == NULL OR node.right == NULL:\n            temp = node.left ? node.left : node.right\n            delete node\n            RETURN temp\n        ELSE:\n            successor = findMin(node.right)\n            node.data = successor.data\n            node.right = delete(node.right, successor.data)\n\n    updateHeight(node)\n    RETURN rebalanceDelete(node)\n\nFUNCTION rebalanceDelete(node):\n    IF node == NULL: RETURN NULL\n    bf = getBalanceFactor(node)\n\n    // LL\n    IF bf > 1 AND getBalanceFactor(node.left) >= 0:\n        RETURN rightRotate(node)\n\n    // LR\n    IF bf > 1 AND getBalanceFactor(node.left) < 0:\n        node.left = leftRotate(node.left)\n        RETURN rightRotate(node)\n\n    // RR\n    IF bf < -1 AND getBalanceFactor(node.right) <= 0:\n        RETURN leftRotate(node)\n\n    // RL\n    IF bf < -1 AND getBalanceFactor(node.right) > 0:\n        node.right = rightRotate(node.right)\n        RETURN leftRotate(node)\n\n    RETURN node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-6",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start from a balanced AVL tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=0, h=4]\n         /  \\\n       20    40 [bf=0, h=3]\n      /  \\   / \\\n     10  25 35 50\n    /  \\       / \\\n   5   15     45 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deletion-1-delete-25-leaf--no-cascade",
      children: "Deletion 1: Delete 25 (leaf — no cascade)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " BST delete 25. Walk up:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=+1, h=4]\n         /  \\\n       20    40\n      /  \\   / \\\n     10  -  35 50\n    /  \\      / \\\n   5   15    45 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heights: 20→h=3 (left=10(h=2), right=0). bf(20) = 2-0 = +1 ✓\n30→h=4 (left=20(h=3), right=40(h=3)). bf(30) = 0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No rotations. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deletion-2-delete-50-one-child--cascading",
      children: "Deletion 2: Delete 50 (one child — cascading)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " BST delete 50 — replace with its child 55."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=0, h=4]\n         /  \\\n       20    40 [bf=-1, h=3]\n      /  \\   / \\\n     10  -  35 55\n    /  \\\n   5   15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check 40: left=35(h=1), right=55(h=1). bf(40) = 0 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check 30: left=20(h=3), right=40(h=2). bf(30) = 1 ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deletion-3-delete-10-two-children--cascading-rotations",
      children: "Deletion 3: Delete 10 (two children — cascading rotations)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Inorder successor of 10 is 15. Copy 15 to node 10. Delete 15 from right subtree of 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30\n         /  \\\n       20    40\n      /  \\   / \\\n     15  -  35 55\n    /\n   5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Walk up. Node 15 has bf = 1-0 = +1 ✓. Node 20 has bf = h(15)=2 - 0 = +2 ✗."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At 20: bf=+2, bf(left child 15) = +1 ≥ 0 → LL case."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Right rotate at 20."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before rotation at 20:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      20 [bf=+2 ✗]\n     /  \\\n    15   null\n   /\n  5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After right rotate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      15 [bf=0, h=2]\n     /  \\\n    5   20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          30 [bf=-1, h=3]\n         /  \\\n       15    40\n      /  \\   / \\\n     5  20 35 55\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Walk up to 30. bf(30) = h(15)=2 - h(40)=2 = 0 ✓. Done."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deletion-4-delete-30-root-two-children--deep-cascade",
      children: "Deletion 4: Delete 30 (root, two children — deep cascade)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Inorder successor of 30 is 35. Copy 35. Delete 35 from right subtree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          35 [bf=-1, h=3]\n         /  \\\n       15    40\n      /  \\    \\\n     5  20    55\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Node 40: left=null, right=55(h=1). bf(40) = 0-1 = -1 ✓.\nbf(35) = h(15)=2 - h(40)=1 = +1 ✓. No rotation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-full-delete",
      children: "C++ Implementation (Full Delete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AVLNode* remove(AVLNode* node, const T& value) {\n    if (!node) return nullptr;\n\n    if (value < node->data)\n        node->left = remove(node->left, value);\n    else if (value > node->data)\n        node->right = remove(node->right, value);\n    else {\n        if (!node->left || !node->right) {\n            AVLNode* temp = node->left ? node->left : node->right;\n            delete node;\n            return temp;\n        } else {\n            AVLNode* successor = findMin(node->right);\n            node->data = successor->data;\n            node->right = remove(node->right, successor->data);\n        }\n    }\n\n    updateHeight(node);\n    return rebalanceDelete(node);\n}\n\nAVLNode* rebalanceDelete(AVLNode* node) {\n    if (!node) return nullptr;\n    int bf = balanceFactor(node);\n\n    // LL\n    if (bf > 1 && balanceFactor(node->left) >= 0)\n        return rotateRight(node);\n\n    // LR\n    if (bf > 1 && balanceFactor(node->left) < 0) {\n        node->left = rotateLeft(node->left);\n        return rotateRight(node);\n    }\n\n    // RR\n    if (bf < -1 && balanceFactor(node->right) <= 0)\n        return rotateLeft(node);\n\n    // RL\n    if (bf < -1 && balanceFactor(node->right) > 0) {\n        node->right = rotateRight(node->right);\n        return rotateLeft(node);\n    }\n\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-full-delete",
      children: "Python Implementation (Full Delete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def delete(node, value):\n    if node is None:\n        return None\n\n    if value < node.data:\n        node.left = delete(node.left, value)\n    elif value > node.data:\n        node.right = delete(node.right, value)\n    else:\n        if node.left is None or node.right is None:\n            temp = node.left if node.left else node.right\n            return temp\n        else:\n            successor = find_min(node.right)\n            node.data = successor.data\n            node.right = delete(node.right, successor.data)\n\n    update_height(node)\n    return rebalance_delete(node)\n\ndef rebalance_delete(node):\n    if node is None:\n        return None\n    bf = balance_factor(node)\n\n    # LL\n    if bf > 1 and balance_factor(node.left) >= 0:\n        return rotate_right(node)\n\n    # LR\n    if bf > 1 and balance_factor(node.left) < 0:\n        node.left = rotate_left(node.left)\n        return rotate_right(node)\n\n    # RR\n    if bf < -1 and balance_factor(node.right) <= 0:\n        return rotate_left(node)\n\n    # RL\n    if bf < -1 and balance_factor(node.right) > 0:\n        node.right = rotate_right(node.right)\n        return rotate_left(node)\n\n    return node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-full-delete",
      children: "Java Implementation (Full Delete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public AVLNode delete(AVLNode node, int value) {\n    if (node == null) return null;\n\n    if (value < node.data)\n        node.left = delete(node.left, value);\n    else if (value > node.data)\n        node.right = delete(node.right, value);\n    else {\n        if (node.left == null || node.right == null) {\n            AVLNode temp = (node.left != null) ? node.left : node.right;\n            return temp;\n        } else {\n            AVLNode successor = findMin(node.right);\n            node.data = successor.data;\n            node.right = delete(node.right, successor.data);\n        }\n    }\n\n    updateHeight(node);\n    return rebalanceDelete(node);\n}\n\npublic AVLNode rebalanceDelete(AVLNode node) {\n    if (node == null) return null;\n    int bf = balanceFactor(node);\n\n    // LL\n    if (bf > 1 && balanceFactor(node.left) >= 0)\n        return rotateRight(node);\n\n    // LR\n    if (bf > 1 && balanceFactor(node.left) < 0) {\n        node.left = rotateLeft(node.left);\n        return rotateRight(node);\n    }\n\n    // RR\n    if (bf < -1 && balanceFactor(node.right) <= 0)\n        return rotateLeft(node);\n\n    // RL\n    if (bf < -1 && balanceFactor(node.right) > 0) {\n        node.right = rotateRight(node.right);\n        return rotateLeft(node);\n    }\n\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST delete O(h) + up to O(h) rotations × O(1) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations per delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlike insertion, deletion may cascade to root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive stack depth = tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every ancestor updated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why deletion cascades but insertion does not:"
      }), " Insertion adds a leaf — the subtree height can increase by at most 1. After rotation, the height returns to the pre-insertion value, so ancestors are unaffected. Deletion removes a node — subtree height can decrease by 1, creating imbalance at ancestors. Fixing one level may change the height that the next ancestor sees, potentially creating a new imbalance. This propagates upward."]
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
            children: "Maintains O(log n) height after deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May require O(log n) rotations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-healing — tree stays balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex to implement than insert rebalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No amortization — each delete is individually O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs to check child's balance (not inserted value)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete from empty tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete leaf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct removal; check ancestors for imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete node with one child"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with child; check ancestors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete node with two children"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find successor; copy value; delete successor from right subtree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete causes cascade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each ancestor up to root rechecked and possibly rotated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete causes imbalance at root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotation changes root — update global root pointer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avl-vs-red-black-vs-b-tree",
      children: "AVL vs Red-Black vs B-Tree"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AVL Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red-Black Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree (m=3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Balance condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "|bf| ≤ 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red property + black-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All leaves at same depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.44 log₂ n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 log₂ n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log_m n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fastest"
            }), " (tightest balance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (fewer levels, wider nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node merges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra storage per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height (int, ~4 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color (1 bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys array + child pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Search-heavy"
            }), " workloads"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy, language stdlibs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk-based"
            }), " databases"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Excellent"
            }), " (block-oriented)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory DB indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux CF scheduler, C++ map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL InnoDB, PostgreSQL, MongoDB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose which:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AVL"
        }), " when reads dominate writes and search speed matters (compiler symbol tables, in-memory caches)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Red-Black"
        }), " when writes are frequent and worst-case insert/delete bounds matter (OS schedulers, std::map)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B-Tree"
        }), " when data lives on disk and block I/O is the bottleneck (relational databases, file systems)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-avl-rotations-visually",
      children: "Q1: Explain AVL Rotations Visually"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LL → Right rotate:\n     z               y\n    / \\             / \\\n   y  T4    =>     x   z\n  / \\                 / \\\n x  T3               T3 T4\n\nRR → Left rotate:\n z                  y\n/ \\                / \\\nT1 y       =>     z   x\n  / \\                / \\\n T2 x              T1 T2\n\nLR → Left then Right:\n   z              z              x\n  / \\            / \\            / \\\n y  T4    =>    x  T4    =>   y   z\n/ \\            / \\            / \\ / \\\nT1 x          y  T3          T1 T2 T3 T4\n  / \\        / \\\n T2 T3      T1 T2\n\nRL → Right then Left:\n z              z              x\n/ \\            / \\            / \\\nT1 y     =>   T1 x      =>   z   y\n  / \\            / \\        / \\ / \\\n x  T4          T1 y        T1 T2 T3 T4\n/ \\              / \\\nT2 T3           T2 T3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory trick:"
      }), " The name tells the direction of the first rotation. LR = Left then Right. RL = Right then Left. The grandparent always gets the opposite-direction single rotation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-check-if-a-binary-tree-is-avl",
      children: "Q2: Check if a Binary Tree is AVL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION isAVL(node):\n    IF node == NULL: RETURN (true, 0)\n\n    (leftAVL, leftH) = isAVL(node.left)\n    (rightAVL, rightH) = isAVL(node.right)\n\n    IF NOT leftAVL OR NOT rightAVL: RETURN (false, 0)\n\n    bf = leftH - rightH\n    IF |bf| > 1: RETURN (false, 0)\n\n    height = 1 + max(leftH, rightH)\n    RETURN (true, height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Runs in O(n) time, O(h) space. Returns both AVL status and height in one post-order traversal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-count-rotations-during-a-sequence-of-insertions",
      children: "Q3: Count Rotations During a Sequence of Insertions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintain a counter. Every time ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rotateRight()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rotateLeft()"
      }), " is called (including inside double rotations), increment it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Insert sequence: [30, 20, 10] → 1 rotation (LL at 30)\nInsert sequence: [10, 20, 30] → 1 rotation (RR at 10)\nInsert sequence: [30, 10, 20] → 2 rotations (LR at 30)\nInsert sequence: [10, 30, 20] → 2 rotations (RL at 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-worst-case-avl-height",
      children: "Q4: Worst-Case AVL Height"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an AVL tree with height h, the minimum number of nodes follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N(0) = 0, N(1) = 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N(h) = N(h-1) + N(h-2) + 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This Fibonacci-like recurrence gives N(h) ≈ φ^(h+2) / √5 - 1. Solving for h:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["h ≈ 1.44 log₂(n+2) — the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "worst-case"
        }), " height of an AVL tree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For 1,000,000 nodes: h ≈ 1.44 × log₂(1,000,002) ≈ 1.44 × 20 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "28.7"
      }), ". A million-node AVL tree fits in 29 levels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-when-would-you-not-use-avl",
      children: "Q5: When Would You NOT Use AVL?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-heavy workloads"
        }), " where insertions/deletions outnumber searches 2:1 or more."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disk-backed storage"
        }), " where B-tree's block-level access patterns are more efficient."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory-constrained environments"
        }), " where the height int per node is significant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When only worst-case insert/delete speed matters"
        }), " — Red-Black trees have tighter delete rotation bounds (≤ 3)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why AVL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-memory database indexes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed O(log n) search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite in-memory mode, Redis sorted sets use skip lists but AVL is used by custom caching layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compiler symbol tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast lookups, rare insertions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ compilers use AVL or hash tables for identifier resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avionics, automotive ECUs — can tolerate AVL's O(log n) worst case, unlike hash tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network routing tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast prefix lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some software routers use AVL for prefix matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaming engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity lookup, spatial indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-component systems use AVL for ID-to-entity maps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File system indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory tree balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some in-memory FS layers (tmpfs internals)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text editors (Undo/Redo stacks)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced history trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVL tracks revision history with O(log n) lookup to any version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geometric algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line sweep intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVL is used as the status structure in Bentley-Ottmann line sweep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database query optimizers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost estimation trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVL stores plan alternatives for quick minimum-cost lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-insight-avl-vs-hash-table",
      children: "Key Insight: AVL vs Hash Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVL trees support ordered operations that hash tables cannot:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range queries:"
        }), " \"Find all keys between 1000 and 2000\" — O(log n + k) in AVL, O(n) in hash table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ordered traversal:"
        }), " Sorted iteration in O(n) — impossible in hash table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Successor/Predecessor:"
        }), " Find next/previous key in O(log n) — O(1) average in hash table only when approximate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The code demonstrates how rotations, balance factor checking, and rebalancing work together to maintain the AVL invariant through insertions and deletions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-avl-tree-full-implementation",
      children: "Example 1: AVL Tree Full Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <algorithm>\n\ntemplate <typename T>\nstruct AVLNode {\n    T data;\n    AVLNode* left;\n    AVLNode* right;\n    int height;\n\n    AVLNode(const T& value)\n        : data(value), left(nullptr), right(nullptr), height(1) {}\n};\n\ntemplate <typename T>\nclass AVLTree {\nprivate:\n    AVLNode<T>* root;\n\n    int height(AVLNode<T>* node) const {\n        return node ? node->height : 0;\n    }\n\n    int balanceFactor(AVLNode<T>* node) const {\n        return node ? height(node->left) - height(node->right) : 0;\n    }\n\n    void updateHeight(AVLNode<T>* node) {\n        if (node) {\n            node->height = 1 + std::max(height(node->left), height(node->right));\n        }\n    }\n\n    // Right rotate (LL case)\n    AVLNode<T>* rotateRight(AVLNode<T>* z) {\n        AVLNode<T>* y = z->left;\n        AVLNode<T>* T2 = y->right;\n\n        y->right = z;\n        z->left = T2;\n\n        updateHeight(z);\n        updateHeight(y);\n        return y;\n    }\n\n    // Left rotate (RR case)\n    AVLNode<T>* rotateLeft(AVLNode<T>* z) {\n        AVLNode<T>* y = z->right;\n        AVLNode<T>* T2 = y->left;\n\n        y->left = z;\n        z->right = T2;\n\n        updateHeight(z);\n        updateHeight(y);\n        return y;\n    }\n\n    AVLNode<T>* insert(AVLNode<T>* node, const T& value) {\n        if (!node) return new AVLNode<T>(value);\n\n        if (value < node->data)\n            node->left = insert(node->left, value);\n        else if (value > node->data)\n            node->right = insert(node->right, value);\n        else\n            return node; // no duplicates\n\n        updateHeight(node);\n        return rebalance(node, value);\n    }\n\n    AVLNode<T>* rebalance(AVLNode<T>* node, const T& value) {\n        int bf = balanceFactor(node);\n\n        // LL case\n        if (bf > 1 && value < node->left->data)\n            return rotateRight(node);\n\n        // RR case\n        if (bf < -1 && value > node->right->data)\n            return rotateLeft(node);\n\n        // LR case\n        if (bf > 1 && value > node->left->data) {\n            node->left = rotateLeft(node->left);\n            return rotateRight(node);\n        }\n\n        // RL case\n        if (bf < -1 && value < node->right->data) {\n            node->right = rotateRight(node->right);\n            return rotateLeft(node);\n        }\n\n        return node;\n    }\n\n    AVLNode<T>* findMin(AVLNode<T>* node) const {\n        while (node && node->left) node = node->left;\n        return node;\n    }\n\n    AVLNode<T>* remove(AVLNode<T>* node, const T& value) {\n        if (!node) return nullptr;\n\n        if (value < node->data) {\n            node->left = remove(node->left, value);\n        } else if (value > node->data) {\n            node->right = remove(node->right, value);\n        } else {\n            if (!node->left || !node->right) {\n                AVLNode<T>* temp = node->left ? node->left : node->right;\n                delete node;\n                return temp;\n            } else {\n                AVLNode<T>* successor = findMin(node->right);\n                node->data = successor->data;\n                node->right = remove(node->right, successor->data);\n            }\n        }\n\n        updateHeight(node);\n        return rebalanceDelete(node);\n    }\n\n    AVLNode<T>* rebalanceDelete(AVLNode<T>* node) {\n        if (!node) return nullptr;\n        int bf = balanceFactor(node);\n\n        // LL case\n        if (bf > 1 && balanceFactor(node->left) >= 0)\n            return rotateRight(node);\n\n        // LR case\n        if (bf > 1 && balanceFactor(node->left) < 0) {\n            node->left = rotateLeft(node->left);\n            return rotateRight(node);\n        }\n\n        // RR case\n        if (bf < -1 && balanceFactor(node->right) <= 0)\n            return rotateLeft(node);\n\n        // RL case\n        if (bf < -1 && balanceFactor(node->right) > 0) {\n            node->right = rotateRight(node->right);\n            return rotateLeft(node);\n        }\n\n        return node;\n    }\n\n    void inorder(AVLNode<T>* node) const {\n        if (!node) return;\n        inorder(node->left);\n        std::cout << node->data << \" \";\n        inorder(node->right);\n    }\n\n    void destroy(AVLNode<T>* node) {\n        if (!node) return;\n        destroy(node->left);\n        destroy(node->right);\n        delete node;\n    }\n\npublic:\n    AVLTree() : root(nullptr) {}\n    ~AVLTree() { destroy(root); }\n\n    void insert(const T& value) { root = insert(root, value); }\n    void remove(const T& value) { root = remove(root, value); }\n\n    bool search(const T& value) const {\n        AVLNode<T>* current = root;\n        while (current) {\n            if (value == current->data) return true;\n            if (value < current->data) current = current->left;\n            else current = current->right;\n        }\n        return false;\n    }\n\n    void inorder() const {\n        inorder(root);\n        std::cout << \"\\n\";\n    }\n\n    int height() const { return height(root); }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-avl-tree-driver",
      children: "Example 2: AVL Tree Driver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include \"avl.h\"\n\nint main() {\n    AVLTree<int> avl;\n\n    // Insert values that would cause a BST to become degenerate\n    int values[] = {10, 20, 30, 40, 50, 5, 15, 25, 35, 45};\n    for (int v : values) avl.insert(v);\n\n    std::cout << \"Inorder: \";\n    avl.inorder();\n\n    std::cout << \"Height: \" << avl.height() << \"\\n\";\n    std::cout << \"Search 25: \" << (avl.search(25) ? \"found\" : \"not found\") << \"\\n\";\n    std::cout << \"Search 55: \" << (avl.search(55) ? \"found\" : \"not found\") << \"\\n\";\n\n    avl.remove(10);\n    std::cout << \"After remove 10: \";\n    avl.inorder();\n\n    avl.remove(30);\n    std::cout << \"After remove 30: \";\n    avl.inorder();\n\n    avl.remove(50);\n    std::cout << \"After remove 50: \";\n    avl.inorder();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Inorder: 5 10 15 20 25 30 35 40 45 50\nHeight: 3\nSearch 25: found\nSearch 55: not found\nAfter remove 10: 5 15 20 25 30 35 40 45 50\nAfter remove 30: 5 15 20 25 35 40 45 50\nAfter remove 50: 5 15 20 25 35 40 45\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-checking-avl-balance",
      children: "Example 3: Checking AVL Balance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nbool isAVL(AVLNode<T>* node) {\n    if (!node) return true;\n    int bf = (node->left ? node->left->height : 0)\n           - (node->right ? node->right->height : 0);\n    if (bf < -1 || bf > 1) return false;\n    return isAVL(node->left) && isAVL(node->right);\n}\n\n// Usage:\n// std::cout << \"Is AVL: \" << (isAVL(avl.getRoot()) ? \"yes\" : \"no\") << \"\\n\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Master single rotations (LL/RR) first — double rotations (LR/RL) are just two single rotations in sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The four rotation patterns are just two"
        }), ": LL and RR are symmetric (single rotations). LR and RL are symmetric (double rotations — rotate the child first, then the node). Master one direction and the other is mirrored."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Balance factor = height(left) - height(right)"
        }), ": AVL invariant requires this to be -1, 0, or 1. After insertion, walk up to the first unbalanced node and apply the corresponding rotation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deletion may cascade"
        }), ": Unlike insertion (at most one rotation needed), deletion may require rotations at multiple ancestors. Walk all the way up to the root, rebalancing at each unbalanced node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AVL vs Red-Black"
        }), ": AVL trees have tighter balance → faster lookups. Red-Black trees have faster insertions/deletions (fewer rotations). Choose AVL for search-heavy workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Insert rebalancing uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "value"
          }), " comparisons"]
        }), " to distinguish LL/LR/RR/RL. Delete rebalancing uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "child's balance factor"
        }), " instead (since the deleted value is no longer in the tree for comparison)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AVL trees maintain height balance factor between -1, 0, and 1 for every node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four rotation patterns (LL, RR, LR, RL) restore balance after modifications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Height is strictly (O(\\log n)), guaranteeing logarithmic worst-case operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deletion may require multiple rotations propagating up to the root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AVL trees sacrifice insertion speed for faster lookups compared to Red-Black trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The minimum number of nodes in an AVL tree of height h follows (n(h) = n(h-1) + n(h-2) + 1)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST (unbalanced)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AVL Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red-Black Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n) (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1.44 \\log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2 \\log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations per delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance factor (2 bits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color bit (1 bit)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-avl-rotation-patterns",
      children: "Quick Reference: AVL Rotation Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left child is heavy-left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single right rotation on node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right child is heavy-right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single left rotation on node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left child is heavy-right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rotation on child, then right rotation on node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right child is heavy-left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right rotation on child, then left rotation on node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores balance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why AVL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database in-memory index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed (O(\\log n)) search for large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler symbol table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast lookups, infrequent insertions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable worst-case performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network routing table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast prefix lookup, stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming (entity lookup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, search-heavy workload"
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
            children: "Forgetting to update height after rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height of subtrees changes after rotation — old height gives wrong balance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always recompute height = 1 + max(left.height, right.height) after each rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checking balance before updating heights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance factor uses stale height values → false violation or false pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update heights first, then check balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong rotation case classification for insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert into left-left vs left-right of heavy subtree determines single vs double rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map violation pattern → rotation type: LL (right-rotate), RR (left-rotate), LR (left-right), RL (right-left)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applying rotation to wrong node (not the imbalanced ancestor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotating the inserted node instead of the first imbalanced ancestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always find the deepest imbalanced node, then apply rotation on that node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not rebalancing bottom-up after deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleting a node may leave ancestors imbalanced, not just the parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After deletion, traverse up the path to root, updating heights and rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that AVL deletion is harder than insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion requires at most 2 rotations; deletion may require O(log n) rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebalance every node on the path from deleted node to root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double rotation implementation: only rotating once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doing only the first rotation (e.g., left) without the second (right) leaves the tree still imbalanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR = left-rotate(left child) then right-rotate(node); RL = right-rotate(right child) then left-rotate(node)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-avl-tree-implementation",
      children: "TypeScript AVL Tree Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class AVLNode {\n    data: number;\n    left: AVLNode | null = null;\n    right: AVLNode | null = null;\n    height: number = 1;\n\n    constructor(data: number) {\n        this.data = data;\n    }\n}\n\nclass AVLTree {\n    private root: AVLNode | null = null;\n\n    private height(node: AVLNode | null): number {\n        return node ? node.height : 0;\n    }\n\n    private balanceFactor(node: AVLNode | null): number {\n        return node ? this.height(node.left) - this.height(node.right) : 0;\n    }\n\n    private updateHeight(node: AVLNode): void {\n        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));\n    }\n\n    private rightRotate(y: AVLNode): AVLNode {\n        const x = y.left!;\n        const T2 = x.right;\n        x.right = y;\n        y.left = T2;\n        this.updateHeight(y);\n        this.updateHeight(x);\n        return x;\n    }\n\n    private leftRotate(x: AVLNode): AVLNode {\n        const y = x.right!;\n        const T2 = y.left;\n        y.left = x;\n        x.right = T2;\n        this.updateHeight(x);\n        this.updateHeight(y);\n        return y;\n    }\n\n    insert(data: number): void {\n        this.root = this._insert(this.root, data);\n    }\n\n    private _insert(node: AVLNode | null, data: number): AVLNode {\n        if (!node) return new AVLNode(data);\n        if (data < node.data) node.left = this._insert(node.left, data);\n        else if (data > node.data) node.right = this._insert(node.right, data);\n        else return node; // no duplicates\n\n        this.updateHeight(node);\n        const bf = this.balanceFactor(node);\n\n        // LL Case\n        if (bf > 1 && data < node.left!.data) return this.rightRotate(node);\n        // RR Case\n        if (bf < -1 && data > node.right!.data) return this.leftRotate(node);\n        // LR Case\n        if (bf > 1 && data > node.left!.data) {\n            node.left = this.leftRotate(node.left!);\n            return this.rightRotate(node);\n        }\n        // RL Case\n        if (bf < -1 && data < node.right!.data) {\n            node.right = this.rightRotate(node.right!);\n            return this.leftRotate(node);\n        }\n        return node;\n    }\n\n    delete(data: number): void {\n        this.root = this._delete(this.root, data);\n    }\n\n    private _delete(node: AVLNode | null, data: number): AVLNode | null {\n        if (!node) return null;\n        if (data < node.data) node.left = this._delete(node.left, data);\n        else if (data > node.data) node.right = this._delete(node.right, data);\n        else {\n            if (!node.left) return node.right;\n            if (!node.right) return node.left;\n            const succ = this._min(node.right!);\n            node.data = succ.data;\n            node.right = this._delete(node.right, succ.data);\n        }\n        if (!node) return null;\n\n        this.updateHeight(node);\n        const bf = this.balanceFactor(node);\n\n        // LL\n        if (bf > 1 && this.balanceFactor(node.left) >= 0) return this.rightRotate(node);\n        // LR\n        if (bf > 1 && this.balanceFactor(node.left) < 0) {\n            node.left = this.leftRotate(node.left!);\n            return this.rightRotate(node);\n        }\n        // RR\n        if (bf < -1 && this.balanceFactor(node.right) <= 0) return this.leftRotate(node);\n        // RL\n        if (bf < -1 && this.balanceFactor(node.right) > 0) {\n            node.right = this.rightRotate(node.right!);\n            return this.leftRotate(node);\n        }\n        return node;\n    }\n\n    private _min(node: AVLNode): AVLNode {\n        let curr = node;\n        while (curr.left) curr = curr.left;\n        return curr;\n    }\n\n    search(data: number): boolean {\n        let curr = this.root;\n        while (curr) {\n            if (data === curr.data) return true;\n            curr = data < curr.data ? curr.left : curr.right;\n        }\n        return false;\n    }\n\n    toArray(): number[] {\n        const result: number[] = [];\n        const stack: AVLNode[] = [];\n        let curr = this.root;\n        while (curr || stack.length > 0) {\n            while (curr) { stack.push(curr); curr = curr.left; }\n            curr = stack.pop()!;\n            result.push(curr.data);\n            curr = curr.right;\n        }\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the maximum possible height of an AVL tree with 7 nodes?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 3 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 6"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How many rotations are needed at most during an AVL insertion?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 2 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time for searching in an AVL tree with n nodes?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n log n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What distinguishes an LR case from an LL case in AVL insertion?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The imbalance is at the right child"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The inserted node is in the right subtree of the left child ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Balance factor = 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No rotation needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "An AVL tree with height h has at least how many nodes (recursive formula)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) N(h) = 2^h - 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) N(h) = N(h-1) + N(h-2) + 1 ✓ (Fibonacci-like)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) N(h) = 2 × N(h-1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) N(h) = h²"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "If an AVL deletion causes imbalance at multiple ancestors:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Only one needs rebalancing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) All ancestors on the path must be rebalanced ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The root is always rebalanced"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No rebalancing is needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-b, 10-b, 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AVL tree property verification"
          }), ": Write functions to verify that a given binary tree is a valid AVL tree (BST invariant + balance factor ≤ 1 + correct heights)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Count nodes in range [L, R]"
          }), ": Given an AVL tree and a range, count the number of nodes whose values lie in [L, R] in O(log n + k) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AVL tree with augmentation"
          }), ": Support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "findKthSmallest(k)"
          }), " in O(log n) by storing subtree sizes. Implement the insertion and rotation with size updates."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Merge two AVL trees"
          }), ": Given two AVL trees, merge them into one AVL tree. If the total size is m + n, aim for O(m + n) time by flattening to sorted array and building balanced tree."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Split an AVL tree by key"
          }), ": Given a key K, split the AVL tree into two trees: one with values ≤ K and one with values > K. Each must remain a valid AVL tree."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AVL tree serialization"
          }), ": Design an algorithm to serialize and deserialize an AVL tree, preserving both the BST property and the balance information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Largest BST in a binary tree"
          }), ": Given a binary tree (not necessarily BST), find the largest subtree that is a valid BST. Use a bottom-up approach returning (min, max, size, isBST) from each node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AVL tree with duplicates"
          }), ": Modify the AVL tree to support duplicate keys (e.g., using a count field per node). All operations should remain O(log n)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "self-balancing-trees-comparison",
      children: "Self-Balancing Trees Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AVL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red-Black"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Splay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Treap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.44 log₂n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 log₂n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log_{m/2}(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (splay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (rotate after insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Balance strictness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (amortized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degree-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent ptr (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple keys/pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locality of reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple impl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (recent nodes near root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (blocks/pages)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) -2, -1, 0, 1, 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 0 only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How many rotations may be needed after an AVL insertion?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) At most 1 ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) At most 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (O(\\log n))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 0"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "LR rotation is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Single rotation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Double rotation (left then right) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Double rotation (right then left)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No rotation needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the maximum height of an AVL tree with (n) nodes?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (1.44 \\log n) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (2 \\log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (\\log n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which is better for search-heavy workloads?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) AVL ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Red-Black"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Unbalanced BST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Linked list"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why can deletion require multiple rotations but insertion cannot?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Deletion is recursive, insertion is iterative"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Insertion restores original subtree height; deletion may not ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Deletion uses a different balance factor formula"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Insertion never causes LL/RR imbalance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How does delete rebalancing distinguish LL from LR (since the value is gone)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It uses the balance factor of the child node ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It randomly tries one rotation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It uses the deleted value, stored separately"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It applies both and checks which works"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-a, 3-b, 4-b, 5-a, 6-b, 7-a"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AVL trees maintain height balance via the balance factor (-1, 0, 1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four rotation patterns (LL, RR, LR, RL) restore balance after modifications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Height is strictly ( O(\\log n) ), guaranteeing logarithmic operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deletion rebalancing may require multiple rotations up the path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insertion needs ≤ 2 rotations; deletion may cascade to the root."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the balance factor, and what values does the AVL invariant permit?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the maximum height of an AVL tree with 1000 nodes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does deletion in an AVL tree require checking balance at every ancestor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the AVL tree resulting from inserting 1, 2, 3, 4, 5, 6, 7 in order. Show each rotation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function that prints the balance factor of every node in an AVL tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that counts the number of rotations performed during a sequence of insertions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw the step-by-step rotations when deleting node 15 from this AVL tree:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "     20\n    /  \\\n   10   30\n  / \\   / \\\n 5  15 25 35\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given the sequence [50, 30, 80, 20, 40, 70, 90, 10, 35, 45], build the AVL tree step by step showing the balance factor at every node after each insertion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVL tree with parent pointers"
        }), " in each node. Show how successor, predecessor, and rebalancing after deletion can use parent pointers for ( O(\\log n) ) upward traversal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "iterative AVL insertion"
        }), " (no recursion) using a stack to track the path from root to the new node. Compare its performance with the recursive version."]
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