"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61346],{

/***/ 4289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_09_bst_md_2c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-09-bst-md-2c3.json
const site_docs_courses_data_structures_09_bst_md_2c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/09-bst","title":"Chapter 9: Binary Search Trees","description":"Previous Binary Trees | Next: Heaps","source":"@site/docs/courses/data-structures/09-bst.md","sourceDirName":"courses/data-structures","slug":"/data-structures/09-bst","permalink":"/ai-engineering-journey/data-structures/09-bst","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-bst","slug":"/data-structures/09-bst","title":"Chapter 9: Binary Search Trees","sidebar_label":"Chapter 9: Binary Search Trees","sidebar_position":9},"sidebar":"course-data-structures","previous":{"title":"Chapter 8: Binary Trees","permalink":"/ai-engineering-journey/data-structures/08-binary-trees"},"next":{"title":"Chapter 10: Heaps","permalink":"/ai-engineering-journey/data-structures/10-heaps"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/09-bst.md


const frontMatter = {
	id: '09-bst',
	slug: '/data-structures/09-bst',
	title: 'Chapter 9: Binary Search Trees',
	sidebar_label: 'Chapter 9: Binary Search Trees',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Binary Search Trees';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why BSTs Matter",
  "id": "why-bsts-matter",
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
  "value": "BST Invariant",
  "id": "bst-invariant",
  "level": 3
}, {
  "value": "BST Search",
  "id": "bst-search",
  "level": 3
}, {
  "value": "BST Insertion",
  "id": "bst-insertion",
  "level": 3
}, {
  "value": "BST Deletion",
  "id": "bst-deletion",
  "level": 3
}, {
  "value": "Min, Max, Successor, Predecessor",
  "id": "min-max-successor-predecessor",
  "level": 3
}, {
  "value": "Floor and Ceiling in BST",
  "id": "floor-and-ceiling-in-bst",
  "level": 3
}, {
  "value": "Range Queries (Print keys in [L, R])",
  "id": "range-queries-print-keys-in-l-r",
  "level": 3
}, {
  "value": "Check if a Tree is a BST",
  "id": "check-if-a-tree-is-a-bst",
  "level": 3
}, {
  "value": "Sorted Array to Balanced BST",
  "id": "sorted-array-to-balanced-bst",
  "level": 3
}, {
  "value": "Lowest Common Ancestor in BST",
  "id": "lowest-common-ancestor-in-bst",
  "level": 3
}, {
  "value": "BST Operations and Complexity",
  "id": "bst-operations-and-complexity",
  "level": 2
}, {
  "value": "BST vs Array vs Linked List vs Hash Table",
  "id": "bst-vs-array-vs-linked-list-vs-hash-table",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: BST Implementation",
  "id": "example-1-bst-implementation",
  "level": 3
}, {
  "value": "Example 2: Driver Program",
  "id": "example-2-driver-program",
  "level": 3
}, {
  "value": "Example 3: Successor and Predecessor",
  "id": "example-3-successor-and-predecessor",
  "level": 3
}, {
  "value": "Use Cases and Applications",
  "id": "use-cases-and-applications",
  "level": 2
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Validate BST",
  "id": "problem-1-validate-bst",
  "level": 3
}, {
  "value": "Problem 2: Kth Smallest Element in BST",
  "id": "problem-2-kth-smallest-element-in-bst",
  "level": 3
}, {
  "value": "Problem 3: LCA in BST",
  "id": "problem-3-lca-in-bst",
  "level": 3
}, {
  "value": "Problem 4: BST to Sorted Doubly Linked List",
  "id": "problem-4-bst-to-sorted-doubly-linked-list",
  "level": 3
}, {
  "value": "Problem 5: Pair Sum in BST",
  "id": "problem-5-pair-sum-in-bst",
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
  "value": "Quick Reference: BST Operations",
  "id": "quick-reference-bst-operations",
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
  "value": "TypeScript BST Implementation",
  "id": "typescript-bst-implementation",
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
  "value": "Comparison: BST vs AVL vs Red-Black vs B-Tree",
  "id": "comparison-bst-vs-avl-vs-red-black-vs-b-tree",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
        id: "chapter-9-binary-search-trees",
        children: "Chapter 9: Binary Search Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/08-binary-trees",
          children: "Chapter 8: Binary Trees"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/10-heaps",
          children: "Heaps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Binary Search Tree (BST) invariant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement search, insertion, and deletion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement min, max, successor, and predecessor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the complexity of BST operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply BSTs to solve range queries, floor/ceiling, and validation problems."
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
        href: "../../assets/images/lessons/data-structures/09-bst/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/09-bst/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/09-bst/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/09-bst/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/09-bst/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/09-bst/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-bsts-matter",
      children: "Why BSTs Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: The Dictionary Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you have a printed English dictionary with 100,000 words. You want to find the word \"Binary.\" You do not flip page by page from the start — that would be (O(n)) linear search. Instead, you open the dictionary roughly in the middle. If \"Binary\" comes before the page you opened (alphabetically), you discard the entire right half and repeat on the left half. Each step cuts the search space in half. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary search"
      }), " — and a BST is the data structure that makes this possible dynamically, with insertions and deletions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A BST is like a self-organizing dictionary: every node keeps track of which side every word belongs to, so finding, adding, or removing a word never requires inspecting more than the height of the tree."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not just use a sorted array?"
        }), " Arrays support binary search in (O(\\log n)) but insertion and deletion cost (O(n)) due to shifting elements. BSTs give (O(\\log n)) for all three operations — search, insert, delete — on average."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "BST Invariant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left < root < right for all nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables O(log n) average search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare key, descend left or right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive or iterative both O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion (3 cases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf, one child, two children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-child case uses successor swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Successor/Predecessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min of right subtree or ancestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for ordered traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor/Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest ≤ key / Smallest ≥ key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries and nearest-neighbor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate range (min, max) per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catch broken invariants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted Array → BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick middle, recurse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build balanced tree in O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA in BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First node between the two values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler than binary tree LCA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) average, O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced tree guarantees O(log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Binary Search Tree] --> B[BST Invariant]\n    B --> C[Search O&#40;h&#41;]\n    B --> D[Insert O&#40;h&#41;]\n    B --> E[Delete O&#40;h&#41;]\n    C --> F[Successor / Predecessor]\n    D --> F\n    E --> F\n    F --> G[Floor / Ceiling]\n    F --> H[Range Queries]\n    G --> I[Check BST]\n    H --> I\n    I --> J[Sorted Array to BST]\n    J --> K[LCA in BST]\n    K --> L[Complexity & Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch09-bst.png",
        alt: "Binary Search Tree Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bst-invariant",
      children: "BST Invariant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The BST property applies to all nodes in the subtree, not just direct children - a node's left descendant cannot exceed the root even if it is the right child of the left child."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For any node with key ( k ):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All keys in the left subtree are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "less than"
        }), " ( k )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All keys in the right subtree are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greater than"
        }), " ( k )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicate keys may be handled by convention (left includes less-than-or-equal, or by storing a count)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        50\n       /  \\\n     30    70\n    /  \\   / \\\n   20  40 60  80\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this works:"
      }), " The BST invariant guarantees that an inorder traversal (left → root → right) yields keys in sorted order. For the tree above, inorder produces: 20, 30, 40, 50, 60, 70, 80. This property is what makes BSTs so powerful — you get a sorted sequence on demand without sorting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bst-search",
      children: "BST Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Finding a contact in a phonebook. You open to the middle. If \"Smith\" comes after the current page, you discard the first half and continue in the second half. Each step discards an entire subtree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the root is null, the key does not exist — return false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the key equals the root's data, return true (found)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "less than"
        }), " the root's data, recursively search the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greater than"
        }), " the root's data, recursively search the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function search(root, key):\n    if root == null:\n        return false\n    if key == root.data:\n        return true\n    if key < root.data:\n        return search(root.left, key)\n    else:\n        return search(root.right, key)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Search for 40 in the tree:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
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
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 < 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 > 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 == 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial:        Step 1:          Step 2:          Step 3:\n   50            50               50               50\n  /  \\          /  \\             /  \\             /  \\\n30   70        30   70          30   70          30   70\n     / \\      / \\  / \\        /  \\  / \\        /  \\  / \\\n    40  80   20 40 60 80     20  40 60 80     20  40 60 80\n                              ^                   ^\n                           30→right            40==40 ✓\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Recursive\nbool search(BSTNode<T>* node, const T& value) const {\n    if (!node) return false;\n    if (value == node->data) return true;\n    if (value < node->data) return search(node->left, value);\n    return search(node->right, value);\n}\n\n// Iterative\nbool searchIterative(BSTNode<T>* root, const T& value) const {\n    BSTNode<T>* current = root;\n    while (current) {\n        if (value == current->data) return true;\n        if (value < current->data) current = current->left;\n        else current = current->right;\n    }\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Recursive\ndef search(root, key):\n    if root is None:\n        return False\n    if key == root.data:\n        return True\n    if key < root.data:\n        return search(root.left, key)\n    return search(root.right, key)\n\n# Iterative\ndef search_iterative(root, key):\n    current = root\n    while current:\n        if key == current.data:\n            return True\n        if key < current.data:\n            current = current.left\n        else:\n            current = current.right\n    return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Recursive\npublic boolean search(Node root, int value) {\n    if (root == null) return false;\n    if (value == root.data) return true;\n    if (value < root.data) return search(root.left, value);\n    return search(root.right, value);\n}\n\n// Iterative\npublic boolean searchIterative(Node root, int value) {\n    Node current = root;\n    while (current != null) {\n        if (value == current.data) return true;\n        if (value < current.data) current = current.left;\n        else current = current.right;\n    }\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree is roughly balanced; each step discards half the remaining nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (skewed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degenerate tree is effectively a linked list; may traverse all nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root is the target"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h)) for recursive (call stack), (O(1)) for iterative."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(h)) instead of (O(\\log n))?"
      }), " The height (h) of a BST equals (n) in the worst case (sorted insertion creates a chain) and (\\log n) in the balanced case. That is why self-balancing trees (AVL, Red-Black) enforce (h = O(\\log n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Empty tree (root = null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare once, return true/false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key not in tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse to leaf, return false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on convention (return true on first match)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bst-insertion",
      children: "BST Insertion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Adding a new word to a dictionary. You start at the middle, compare alphabetically, and navigate to the correct page. When you reach an empty slot (a gap between two existing words), you insert the new word there. If the word already exists, you ignore it (or increment a counter for duplicates)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the root is null, create a new node and return it as the new root."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "less than"
        }), " the root's data, recursively insert into the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greater than"
        }), " the root's data, recursively insert into the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the key ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "equals"
        }), " the root's data, handle the duplicate (ignore or store count)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the (unchanged) root pointer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function insert(root, key):\n    if root == null:\n        return new Node(key)\n    if key < root.data:\n        root.left = insert(root.left, key)\n    else if key > root.data:\n        root.right = insert(root.right, key)\n    // else: duplicate — ignore or increment count\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Insert values [50, 30, 70, 20, 40, 60, 80] into an empty BST:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree After Insertion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → left: 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → right: 70"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → left(30) → left: 20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → left(30) → right: 40"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → right(70) → left: 60"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "50 → right(70) → right: 80"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Final tree:\n        50\n       /  \\\n     30    70\n    /  \\   / \\\n   20  40 60  80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Recursive\nBSTNode<T>* insert(BSTNode<T>* node, const T& value) {\n    if (!node) return new BSTNode<T>(value);\n    if (value < node->data)\n        node->left = insert(node->left, value);\n    else if (value > node->data)\n        node->right = insert(node->right, value);\n    // duplicate — ignore\n    return node;\n}\n\n// Iterative\nBSTNode<T>* insertIterative(BSTNode<T>* root, const T& value) {\n    if (!root) return new BSTNode<T>(value);\n    BSTNode<T>* current = root;\n    BSTNode<T>* parent = nullptr;\n    while (current) {\n        parent = current;\n        if (value < current->data) current = current->left;\n        else if (value > current->data) current = current->right;\n        else return root; // duplicate\n    }\n    if (value < parent->data) parent->left = new BSTNode<T>(value);\n    else parent->right = new BSTNode<T>(value);\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Recursive\ndef insert(root, key):\n    if root is None:\n        return Node(key)\n    if key < root.data:\n        root.left = insert(root.left, key)\n    elif key > root.data:\n        root.right = insert(root.right, key)\n    return root\n\n# Iterative\ndef insert_iterative(root, key):\n    if root is None:\n        return Node(key)\n    current, parent = root, None\n    while current:\n        parent = current\n        if key < current.data:\n            current = current.left\n        elif key > current.data:\n            current = current.right\n        else:\n            return root\n    if key < parent.data:\n        parent.left = Node(key)\n    else:\n        parent.right = Node(key)\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Recursive\npublic Node insert(Node root, int value) {\n    if (root == null) return new Node(value);\n    if (value < root.data) root.left = insert(root.left, value);\n    else if (value > root.data) root.right = insert(root.right, value);\n    return root;\n}\n\n// Iterative\npublic Node insertIterative(Node root, int value) {\n    if (root == null) return new Node(value);\n    Node current = root, parent = null;\n    while (current != null) {\n        parent = current;\n        if (value < current.data) current = current.left;\n        else if (value > current.data) current = current.right;\n        else return root;\n    }\n    if (value < parent.data) parent.left = new Node(value);\n    else parent.right = new Node(value);\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend tree height ~ (\\log n) for random insertions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (skewed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting sorted data creates a chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting at root of empty tree"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h)) recursive (call stack), (O(1)) iterative."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
            children: "Node becomes root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convention: ignore / overwrite / increment counter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Already present in skewed tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse full chain, O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of BST Insertion:"
      })
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
            children: "(O(\\log n)) average — fast for random data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) worst-case for sorted/almost-sorted input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple recursive implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive may overflow stack for deep trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No restructuring needed for insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No balancing guarantee — tree degrades silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder traversal stays sorted after insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate handling is non-standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bst-deletion",
      children: "BST Deletion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Removing a page from a dictionary. If the page is a leaf (no sub-entries), you simply remove it. If the page has only a left or right section (one child), you replace it with that section. If the page has both left and right sub-sections (two children), you find the smallest page in the right sub-section — the \"inorder successor\" — move its content into the current page, and then delete that smallest page instead. This preserves the dictionary's alphabetical order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (3 Cases):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base:"
        }), " If root is null, return null (key not found)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate to the node: if key < root.data, recurse left; if key > root.data, recurse right."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 1 — Leaf (no children):"
        }), " Delete the node, return null to the parent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 2 — One child:"
        }), " Save the child pointer, delete the node, return the child to the parent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 3 — Two children:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find the inorder successor (smallest node in the right subtree)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Copy the successor's data into the current node."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recursively delete the successor from the right subtree."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function delete(root, key):\n    if root == null:\n        return null\n    if key < root.data:\n        root.left = delete(root.left, key)\n    else if key > root.data:\n        root.right = delete(root.right, key)\n    else:\n        // key found — three cases\n        if root.left == null and root.right == null:   // Case 1: leaf\n            delete root\n            return null\n        if root.left == null:                           // Case 2: right child\n            temp = root.right; delete root; return temp\n        if root.right == null:                          // Case 2: left child\n            temp = root.left; delete root; return temp\n        // Case 3: two children\n        succ = findMin(root.right)\n        root.data = succ.data\n        root.right = delete(root.right, succ.data)\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Delete 50 (root, two children) from the tree:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        50 ← delete\n       /  \\\n     30    70\n    /  \\   / \\\n   20  40 60  80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step-by-step:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find 50 at root. Two children → find inorder successor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "min of right subtree(70) = 60"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy successor's data (60) into root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root data becomes 60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursively delete 60 from right subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to 70 → left(60)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 is a leaf → delete and return null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70's left becomes null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Final tree:\n        60\n       /  \\\n     30    70\n    /  \\     \\\n   20  40     80\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Delete 20 (leaf) then 30 (one child):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial:          Delete 20:          Delete 30:\n   50                50                 50\n  /  \\              /  \\               /  \\\n30   70           30   70            40   70\n  \\  / \\            \\  / \\                / \\\n 40 60 80           40 60 80           60   80\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete 20 (leaf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30's left becomes null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete 30 (has right child 40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50's left becomes 40"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "BSTNode<T>* remove(BSTNode<T>* node, const T& value) {\n    if (!node) return nullptr;\n    if (value < node->data) {\n        node->left = remove(node->left, value);\n    } else if (value > node->data) {\n        node->right = remove(node->right, value);\n    } else {\n        // Case 1: leaf\n        if (!node->left && !node->right) {\n            delete node;\n            return nullptr;\n        }\n        // Case 2: one child\n        if (!node->left) {\n            BSTNode<T>* temp = node->right;\n            delete node;\n            return temp;\n        }\n        if (!node->right) {\n            BSTNode<T>* temp = node->left;\n            delete node;\n            return temp;\n        }\n        // Case 3: two children\n        BSTNode<T>* successor = findMin(node->right);\n        node->data = successor->data;\n        node->right = remove(node->right, successor->data);\n    }\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def delete(root, key):\n    if root is None:\n        return None\n    if key < root.data:\n        root.left = delete(root.left, key)\n    elif key > root.data:\n        root.right = delete(root.right, key)\n    else:\n        # Case 1: leaf\n        if root.left is None and root.right is None:\n            return None\n        # Case 2: one child\n        if root.left is None:\n            return root.right\n        if root.right is None:\n            return root.left\n        # Case 3: two children\n        succ = find_min(root.right)\n        root.data = succ.data\n        root.right = delete(root.right, succ.data)\n    return root\n\ndef find_min(node):\n    while node and node.left:\n        node = node.left\n    return node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public Node delete(Node root, int value) {\n    if (root == null) return null;\n    if (value < root.data) root.left = delete(root.left, value);\n    else if (value > root.data) root.right = delete(root.right, value);\n    else {\n        // Case 1: leaf\n        if (root.left == null && root.right == null) return null;\n        // Case 2: one child\n        if (root.left == null) return root.right;\n        if (root.right == null) return root.left;\n        // Case 3: two children\n        Node successor = findMin(root.right);\n        root.data = successor.data;\n        root.right = delete(root.right, successor.data);\n    }\n    return root;\n}\n\npublic Node findMin(Node node) {\n    while (node != null && node.left != null) node = node.left;\n    return node;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need to find the node first; deletion is (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find node + bypass is (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find node + findMin(right) = O(h) + O(h) = O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overall average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced tree height = (\\log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overall worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed tree height = (n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h)) recursive (call stack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key not found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse the search path and return unchanged root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete root with two children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successor becomes new root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete root with one child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child becomes new root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete root that is leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree becomes empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from skewed tree (right only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Succ = immediate right child; O(h)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of BST Deletion:"
      })
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
            children: "Three-case logic is clean and systematic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-child case requires successor search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No tree restructuring needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive delete on successor may be deep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains sorted order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not rebalance if deletion creates imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any comparable data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successor's tree position may be deep"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "min-max-successor-predecessor",
      children: "Min, Max, Successor, Predecessor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In a well-organized library, the \"minimum\" is the book at the far-left end of the shelf — keep going left. The \"maximum\" is the book at the far-right end — keep going right. The \"successor\" of a book is the next book alphabetically (the leftmost book in its right-side section). The \"predecessor\" is the previous book (the rightmost book in its left-side section)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Min:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the node has a left child, move to the left child."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The current node is the minimum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Max:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the node has a right child, move to the right child."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The current node is the maximum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Successor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the node has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right subtree"
        }), ", the successor is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "minimum"
        }), " of that subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, walk from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "root"
        }), " to the node. The successor is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "most recent ancestor"
        }), " where the node lies in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Predecessor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the node has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left subtree"
        }), ", the predecessor is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "maximum"
        }), " of that subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, walk from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "root"
        }), " to the node. The predecessor is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "most recent ancestor"
        }), " where the node lies in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function findMin(root):\n    while root != null and root.left != null:\n        root = root.left\n    return root\n\nfunction findMax(root):\n    while root != null and root.right != null:\n        root = root.right\n    return root\n\nfunction successor(root, target):\n    if target.right != null:\n        return findMin(target.right)\n    succ = null\n    while root != null and root != target:\n        if target.data < root.data:\n            succ = root\n            root = root.left\n        else:\n            root = root.right\n    return succ\n\nfunction predecessor(root, target):\n    if target.left != null:\n        return findMax(target.left)\n    pred = null\n    while root != null and root != target:\n        if target.data > root.data:\n            pred = root\n            root = root.right\n        else:\n            root = root.left\n    return pred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Successor of 60:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tree: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[50, 30, 70, 20, 40, 60, 80]"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check right subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60.right = null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root=50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 > 50, no ancestor record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 < 70, record succ=70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current == target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return succ=70"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Successor of 60 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "70"
      }), ". Inorder after 60 is: ..., 60, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "70"
      }), ", 80."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Predecessor of 70:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check left subtree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70.left = 60, findMax(60's subtree) = 60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor found"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Predecessor of 70 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "60"
      }), ". Inorder before 70 is: ..., 60, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "70"
      }), ", 80."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nBSTNode<T>* findMin(BSTNode<T>* node) {\n    while (node && node->left) node = node->left;\n    return node;\n}\n\ntemplate <typename T>\nBSTNode<T>* findMax(BSTNode<T>* node) {\n    while (node && node->right) node = node->right;\n    return node;\n}\n\ntemplate <typename T>\nBSTNode<T>* successor(BSTNode<T>* root, BSTNode<T>* target) {\n    if (target->right) {\n        BSTNode<T>* current = target->right;\n        while (current->left) current = current->left;\n        return current;\n    }\n    BSTNode<T>* succ = nullptr;\n    BSTNode<T>* current = root;\n    while (current && current != target) {\n        if (target->data < current->data) {\n            succ = current;\n            current = current->left;\n        } else {\n            current = current->right;\n        }\n    }\n    return succ;\n}\n\ntemplate <typename T>\nBSTNode<T>* predecessor(BSTNode<T>* root, BSTNode<T>* target) {\n    if (target->left) {\n        BSTNode<T>* current = target->left;\n        while (current->right) current = current->right;\n        return current;\n    }\n    BSTNode<T>* pred = nullptr;\n    BSTNode<T>* current = root;\n    while (current && current != target) {\n        if (target->data > current->data) {\n            pred = current;\n            current = current->right;\n        } else {\n            current = current->left;\n        }\n    }\n    return pred;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def find_min(node):\n    while node and node.left:\n        node = node.left\n    return node\n\ndef find_max(node):\n    while node and node.right:\n        node = node.right\n    return node\n\ndef successor(root, target):\n    if target.right:\n        return find_min(target.right)\n    succ = None\n    current = root\n    while current and current != target:\n        if target.data < current.data:\n            succ = current\n            current = current.left\n        else:\n            current = current.right\n    return succ\n\ndef predecessor(root, target):\n    if target.left:\n        return find_max(target.left)\n    pred = None\n    current = root\n    while current and current != target:\n        if target.data > current.data:\n            pred = current\n            current = current.right\n        else:\n            current = current.left\n    return pred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public Node findMin(Node node) {\n    while (node != null && node.left != null) node = node.left;\n    return node;\n}\n\npublic Node findMax(Node node) {\n    while (node != null && node.right != null) node = node.right;\n    return node;\n}\n\npublic Node successor(Node root, Node target) {\n    if (target.right != null) return findMin(target.right);\n    Node succ = null;\n    Node current = root;\n    while (current != null && current != target) {\n        if (target.data < current.data) {\n            succ = current;\n            current = current.left;\n        } else {\n            current = current.right;\n        }\n    }\n    return succ;\n}\n\npublic Node predecessor(Node root, Node target) {\n    if (target.left != null) return findMax(target.left);\n    Node pred = null;\n    Node current = root;\n    while (current != null && current != target) {\n        if (target.data > current.data) {\n            pred = current;\n            current = current.right;\n        } else {\n            current = current.left;\n        }\n    }\n    return pred;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min / Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk the leftmost/rightmost path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Successor (has right subtree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min of subtree of height ≤ h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Successor (no right subtree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root-to-node walk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor (has left subtree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max of subtree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor (no left subtree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root-to-node walk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
            children: "min/max return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min = max = root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rightmost node has no successor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost node has no predecessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node is root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successor = min(right subtree) or null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-and-ceiling-in-bst",
      children: "Floor and Ceiling in BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are looking for a taxi that can seat exactly 5 passengers. No taxi has exactly 5 seats. The \"floor\" is the largest taxi with ≤ 5 seats (a 4-seater). The \"ceiling\" is the smallest taxi with ≥ 5 seats (a 6-seater). In a BST, floor(key) = largest value ≤ key; ceil(key) = smallest value ≥ key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Floor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root is null, return null."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root.data == key, return root.data."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data > key, the floor must be in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree (current root is too large)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data < key, root.data is a candidate. The floor might still be in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree if there is a value between root.data and key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — Ceiling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root is null, return null."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root.data == key, return root.data."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data < key, the ceiling must be in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree (current root is too small)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data > key, root.data is a candidate. The ceiling might still be in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree if there is a value between key and root.data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function floor(root, key):\n    if root == null: return null\n    if root.data == key: return root.data\n    if root.data > key: return floor(root.left, key)\n    // root.data < key: candidate; check right subtree\n    rightFloor = floor(root.right, key)\n    if rightFloor != null: return rightFloor\n    return root.data\n\nfunction ceil(root, key):\n    if root == null: return null\n    if root.data == key: return root.data\n    if root.data < key: return ceil(root.right, key)\n    // root.data > key: candidate; check left subtree\n    leftCeil = ceil(root.left, key)\n    if leftCeil != null: return leftCeil\n    return root.data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Floor of 55:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tree: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[50, 30, 70, 20, 40, 60, 80]"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Floor Candidate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 < 55, candidate=50, go right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 > 55, go left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 > 55, go left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null → propagate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "50"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Floor of 55 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "50"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Ceiling of 55:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ceil Candidate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 < 55, go right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 > 55, candidate=70, go left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 > 55, candidate=60, go left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null → propagate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "60"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ceiling of 55 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "60"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nBSTNode<T>* floor(BSTNode<T>* root, const T& key) {\n    if (!root) return nullptr;\n    if (root->data == key) return root;\n    if (root->data > key) return floor(root->left, key);\n    BSTNode<T>* rightFloor = floor(root->right, key);\n    return rightFloor ? rightFloor : root;\n}\n\ntemplate <typename T>\nBSTNode<T>* ceil(BSTNode<T>* root, const T& key) {\n    if (!root) return nullptr;\n    if (root->data == key) return root;\n    if (root->data < key) return ceil(root->right, key);\n    BSTNode<T>* leftCeil = ceil(root->left, key);\n    return leftCeil ? leftCeil : root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def floor(root, key):\n    if root is None:\n        return None\n    if root.data == key:\n        return root\n    if root.data > key:\n        return floor(root.left, key)\n    right_floor = floor(root.right, key)\n    return right_floor if right_floor else root\n\ndef ceil(root, key):\n    if root is None:\n        return None\n    if root.data == key:\n        return root\n    if root.data < key:\n        return ceil(root.right, key)\n    left_ceil = ceil(root.left, key)\n    return left_ceil if left_ceil else root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public Node floor(Node root, int key) {\n    if (root == null) return null;\n    if (root.data == key) return root;\n    if (root.data > key) return floor(root.left, key);\n    Node rightFloor = floor(root.right, key);\n    return rightFloor != null ? rightFloor : root;\n}\n\npublic Node ceil(Node root, int key) {\n    if (root == null) return null;\n    if (root.data == key) return root;\n    if (root.data < key) return ceil(root.right, key);\n    Node leftCeil = ceil(root.left, key);\n    return leftCeil != null ? leftCeil : root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single path descent with potential extra branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as floor — mirror direction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Floor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ceiling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key smaller than all values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key larger than all values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exists in tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "range-queries-print-keys-in-l-r",
      children: "Range Queries (Print keys in [L, R])"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You want all books in a library with call numbers between 500 and 600. Instead of scanning every book (O(n)), you navigate to the lower bound (500), traverse in order, and stop when you exceed 600. The BST structure lets you skip entire sections that are out of range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root is null, return."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data > L, recurse into the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree — there may be valid keys on the left."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If L ≤ root.data ≤ R, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "print"
        }), " or collect root.data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If root.data < R, recurse into the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree — there may be valid keys on the right."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function rangeQuery(root, L, R):\n    if root == null: return\n    if root.data > L:\n        rangeQuery(root.left, L, R)\n    if L <= root.data <= R:\n        print(root.data)\n    if root.data < R:\n        rangeQuery(root.right, L, R)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Range query [30, 70] on tree [50, 30, 70, 20, 40, 60, 80]:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 > 30 → go left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 > 20 (L) → go left; 30 in [30,70] → print; 30 < 70 → go right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 not ≥ 30, skip; 20 < 70 → go right (no-op)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 > 30 → go left (null); 40 in [30,70] → print; 40 < 70 → go right (null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back at 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 in [30,70] → print"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 > 30 → go left; 70 in [30,70] → print; 70 not < 70 → stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60, 70"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Output: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "30, 40, 50, 60, 70"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Visual:"
      }), " Nodes visited but skipped: 80 (70.right — 80 > 70, so right branch of 70 is not explored). Nodes visited: 50, 30, 20, 40, 60, 70, 80? No — 80 is never visited because at node 70, R=70, and 70 is not < 70, so we do not go right."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid rangeQuery(BSTNode<T>* root, const T& L, const T& R, vector<T>& result) {\n    if (!root) return;\n    if (root->data > L)\n        rangeQuery(root->left, L, R, result);\n    if (root->data >= L && root->data <= R)\n        result.push_back(root->data);\n    if (root->data < R)\n        rangeQuery(root->right, L, R, result);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def range_query(root, L, R, result=None):\n    if result is None:\n        result = []\n    if root is None:\n        return result\n    if root.data > L:\n        range_query(root.left, L, R, result)\n    if L <= root.data <= R:\n        result.append(root.data)\n    if root.data < R:\n        range_query(root.right, L, R, result)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void rangeQuery(Node root, int L, int R, List<Integer> result) {\n    if (root == null) return;\n    if (root.data > L)\n        rangeQuery(root.left, L, R, result);\n    if (root.data >= L && root.data <= R)\n        result.add(root.data);\n    if (root.data < R)\n        rangeQuery(root.right, L, R, result);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
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
            children: "(O(k + h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = number of output nodes, h = tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When k = 0 (no nodes in range)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When all nodes are in range (full traversal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(k + h)) instead of (O(n))?"
      }), " The algorithm only visits nodes that could potentially be in range. Out-of-range subtrees are pruned. At node 80 with range [30,70], we do not explore it at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Empty range (L > R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No nodes in range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = 0, still visit O(h) nodes along boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L = R (single value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns exactly that node if it exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L = -∞, R = +∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full inorder traversal, O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-if-a-tree-is-a-bst",
      children: "Check if a Tree is a BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are auditing a library to verify every shelf follows alphabetical order. For each shelf (node), you check: is every book on the left shelf before this shelf's letter? Is every book on the right shelf after? You carry a \"minimum allowed\" and \"maximum allowed\" range down each path. A book must always be within its allowed range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Using Range):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define a recursive function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isBST(root, min, max)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root is null, return true (empty tree is a BST)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If root.data ≤ min or root.data ≥ max, return false (violation)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isBST(root.left, min, root.data)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isBST(root.right, root.data, max)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Using Inorder):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform an inorder traversal of the tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the previous visited node's value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If current node's value ≤ previous value, the tree is not a BST."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If traversal completes without violation, it is a BST."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode (Range Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function isBST(root, min, max):\n    if root == null: return true\n    if root.data <= min or root.data >= max: return false\n    return isBST(root.left, min, root.data)\n       and isBST(root.right, root.data, max)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode (Inorder Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "prev = -infinity\nfunction isBSTInorder(root):\n    if root == null: return true\n    if not isBSTInorder(root.left): return false\n    if root.data <= prev: return false\n    prev = root.data\n    return isBSTInorder(root.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Range Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test tree: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[50, 30, 70, 20, 40, 60, 80]"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allowed Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, 50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, 30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, 50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(50, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(50, 70)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60 in range ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(70, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 in range ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Result: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valid BST"
      }), " ✓"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Invalid Tree Test:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      50\n     /  \\\n    30   40   ← Violation: 40 is in left subtree of 50 but 40 > 30\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allowed Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, 50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, 30)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✗ 40 ≥ 30 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invalid!"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ (Range Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nbool isBST(BSTNode<T>* root, T min, T max) {\n    if (!root) return true;\n    if (root->data <= min || root->data >= max) return false;\n    return isBST(root->left, min, root->data)\n        && isBST(root->right, root->data, max);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ (Inorder Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nbool isBSTInorder(BSTNode<T>* root, T& prev) {\n    if (!root) return true;\n    if (!isBSTInorder(root->left, prev)) return false;\n    if (root->data <= prev) return false;\n    prev = root->data;\n    return isBSTInorder(root->right, prev);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python (Range Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_bst(root, min_val=float('-inf'), max_val=float('inf')):\n    if root is None:\n        return True\n    if root.data <= min_val or root.data >= max_val:\n        return False\n    return (is_bst(root.left, min_val, root.data) and\n            is_bst(root.right, root.data, max_val))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python (Inorder Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "prev = float('-inf')\ndef is_bst_inorder(root):\n    global prev\n    if root is None:\n        return True\n    if not is_bst_inorder(root.left):\n        return False\n    if root.data <= prev:\n        return False\n    prev = root.data\n    return is_bst_inorder(root.right)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java (Range Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public boolean isBST(Node root, int min, int max) {\n    if (root == null) return true;\n    if (root.data <= min || root.data >= max) return false;\n    return isBST(root.left, min, root.data)\n        && isBST(root.right, root.data, max);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java (Inorder Method):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "private int prev = Integer.MIN_VALUE;\n\npublic boolean isBSTInorder(Node root) {\n    if (root == null) return true;\n    if (!isBSTInorder(root.left)) return false;\n    if (root.data <= prev) return false;\n    prev = root.data;\n    return isBSTInorder(root.right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, no global state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sentinel values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive (sorted = BST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global/static variable for prev"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(n)) for both?"
      }), " Every node must be visited at least once to verify the invariant. There is no way to skip nodes — the BST check is always (\\Omega(n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid BST?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates (equal allowed in left)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on ≤ vs < in check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right child < parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grandchild violates ancestor range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (caught by range method)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of Each Method:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No global state, works for any data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentinel values needed (INT_MIN/INT_MAX or null)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutates global/prev; fails if used concurrently"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sorted-array-to-balanced-bst",
      children: "Sorted Array to Balanced BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You have a sorted list of 7 names and want to build a phonebook that allows fast lookups. The optimal strategy: pick the middle name as the root, recursively build the left half into the left subtree, and the right half into the right subtree. This guarantees the tree is as short as possible — height = ⌈log₂(n+1)⌉."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the array segment is empty (left > right), return null."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the middle index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mid = (left + right) / 2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a new node with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[mid]"
        }), " as the data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively build the left subtree from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[left..mid-1]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively build the right subtree from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[mid+1..right]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function sortedArrayToBST(arr, left, right):\n    if left > right: return null\n    mid = (left + right) / 2\n    root = new Node(arr[mid])\n    root.left = sortedArrayToBST(arr, left, mid - 1)\n    root.right = sortedArrayToBST(arr, mid + 1, right)\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Array = [20, 30, 40, 50, 60, 70, 80]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Subtree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Subtree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20,30,40,50,60,70,80]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20,30,40]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60,70,80]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20,30,40]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[40]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[40]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60,70,80]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[80]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[80]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Result:\n        50\n       /  \\\n     30    70\n    /  \\   / \\\n   20  40 60  80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Height = ⌈log₂(8)⌉ = 3. Perfectly balanced."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nBSTNode<T>* sortedArrayToBST(const vector<T>& arr, int left, int right) {\n    if (left > right) return nullptr;\n    int mid = left + (right - left) / 2;  // avoid overflow\n    BSTNode<T>* root = new BSTNode<T>(arr[mid]);\n    root->left = sortedArrayToBST(arr, left, mid - 1);\n    root->right = sortedArrayToBST(arr, mid + 1, right);\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sorted_array_to_bst(arr, left, right):\n    if left > right:\n        return None\n    mid = (left + right) // 2\n    root = Node(arr[mid])\n    root.left = sorted_array_to_bst(arr, left, mid - 1)\n    root.right = sorted_array_to_bst(arr, mid + 1, right)\n    return root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public Node sortedArrayToBST(int[] arr, int left, int right) {\n    if (left > right) return null;\n    int mid = left + (right - left) / 2;\n    Node root = new Node(arr[mid]);\n    root.left = sortedArrayToBST(arr, left, mid - 1);\n    root.right = sortedArrayToBST(arr, mid + 1, right);\n    return root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
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
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each element is visited exactly once to create a node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (call stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced recursion depth = tree height"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (total)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n new nodes created"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(n)) and not (O(n \\log n))?"
      }), " Each element is processed once in the middle-finding step. There is no comparison or sorting — the input is already sorted. The recurrence is (T(n) = 2T(n/2) + O(1)), which solves to (O(n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
            children: "Empty array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return node with no children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root = first, right = second (left-skewed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates in array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed; both copies may appear in tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array is null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lowest-common-ancestor-in-bst",
      children: "Lowest Common Ancestor in BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Two cousins in a family tree want to find their closest common ancestor. In a family tree organized by birth year (BST), you start at the oldest known ancestor. If both cousins were born after the current ancestor, you move to the right (younger side). If both were born before, move left. The first ancestor whose birth year lies between the two cousins (or matches one of them) is their lowest common ancestor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both p and q are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greater than"
        }), " root, LCA is in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both p and q are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "less than"
        }), " root, LCA is in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " subtree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise (root is between p and q, or root equals p or q), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "root is the LCA"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode (Iterative):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function LCA(root, p, q):\n    while root != null:\n        if p < root.data and q < root.data:\n            root = root.left\n        else if p > root.data and q > root.data:\n            root = root.right\n        else:\n            return root   // found LCA\n    return null\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Find LCA of 20 and 60 in tree [50, 30, 70, 20, 40, 60, 80]:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p=20, q=60"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20<50, 60>50"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["p on left, q on right → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LCA = 50"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LCA of 40 and 80:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p=40, q=80"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40<50, 80>50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LCA = 50"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LCA of 20 and 40:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p=20, q=40"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both < 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20<30, 40>30"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["p left, q right → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LCA = 30"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Recursive\ntemplate <typename T>\nBSTNode<T>* LCA(BSTNode<T>* root, const T& p, const T& q) {\n    if (!root) return nullptr;\n    if (p < root->data && q < root->data)\n        return LCA(root->left, p, q);\n    if (p > root->data && q > root->data)\n        return LCA(root->right, p, q);\n    return root;\n}\n\n// Iterative\ntemplate <typename T>\nBSTNode<T>* LCAIterative(BSTNode<T>* root, const T& p, const T& q) {\n    while (root) {\n        if (p < root->data && q < root->data)\n            root = root->left;\n        else if (p > root->data && q > root->data)\n            root = root->right;\n        else\n            return root;\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Recursive\ndef lca(root, p, q):\n    if root is None:\n        return None\n    if p < root.data and q < root.data:\n        return lca(root.left, p, q)\n    if p > root.data and q > root.data:\n        return lca(root.right, p, q)\n    return root\n\n# Iterative\ndef lca_iterative(root, p, q):\n    while root:\n        if p < root.data and q < root.data:\n            root = root.left\n        elif p > root.data and q > root.data:\n            root = root.right\n        else:\n            return root\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Recursive\npublic Node LCA(Node root, int p, int q) {\n    if (root == null) return null;\n    if (p < root.data && q < root.data)\n        return LCA(root.left, p, q);\n    if (p > root.data && q > root.data)\n        return LCA(root.right, p, q);\n    return root;\n}\n\n// Iterative\npublic Node LCAIterative(Node root, int p, int q) {\n    while (root != null) {\n        if (p < root.data && q < root.data)\n            root = root.left;\n        else if (p > root.data && q > root.data)\n            root = root.right;\n        else\n            return root;\n    }\n    return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
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
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most h nodes visited on a single root-to-leaf path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (skewed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h = n for degenerate tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (recursive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call stack depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (iterative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is BST LCA simpler than binary tree LCA?"
      }), " In a general binary tree, LCA requires post-order traversal and ancestor tracking — (O(n)) every time. In a BST, the ordering property lets you decide direction at each node, making it (O(h)) with a trivial while loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
            children: "p == q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the node itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p is ancestor of q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both not in tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null (BST property would guide to leaf, but the value not found is not detected here — caller must verify presence)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One node null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bst-operations-and-complexity",
      children: "BST Operations and Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst (unbalanced)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min / Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(h) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Successor / Predecessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(h) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor / Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(h) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k + h) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted Array → BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(h) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bst-vs-array-vs-linked-list-vs-hash-table",
      children: "BST vs Array vs Linked List vs Hash Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST (Balanced)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sorted Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search (average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search (worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert (average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete (average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorted iteration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(k + h)) efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n + k)) binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Floor/Ceiling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) with 2 ptrs/node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) compact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) with 1 ptr/node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) + load factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointers scattered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Order preserved"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "* Linked list delete assumes you already have a pointer to the node."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use what:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BST:"
        }), " Need sorted data, range queries, floor/ceiling, and moderate lookups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sorted Array:"
        }), " Read-heavy, no insertions/deletions, need binary search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linked List:"
        }), " Sequential access, frequent insert/delete at known positions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Table:"
        }), " Fastest lookups, no ordering needed, no range queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-bst-implementation",
      children: "Example 1: BST Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nstruct BSTNode {\n    T data;\n    BSTNode* left;\n    BSTNode* right;\n\n    BSTNode(const T& value) : data(value), left(nullptr), right(nullptr) {}\n};\n\ntemplate <typename T>\nclass BST {\nprivate:\n    BSTNode<T>* root;\n\n    BSTNode<T>* insert(BSTNode<T>* node, const T& value) {\n        if (!node) return new BSTNode<T>(value);\n        if (value < node->data)\n            node->left = insert(node->left, value);\n        else if (value > node->data)\n            node->right = insert(node->right, value);\n        // else: duplicate, ignore\n        return node;\n    }\n\n    bool search(BSTNode<T>* node, const T& value) const {\n        if (!node) return false;\n        if (value == node->data) return true;\n        if (value < node->data) return search(node->left, value);\n        return search(node->right, value);\n    }\n\n    BSTNode<T>* findMin(BSTNode<T>* node) const {\n        while (node && node->left) node = node->left;\n        return node;\n    }\n\n    BSTNode<T>* findMax(BSTNode<T>* node) const {\n        while (node && node->right) node = node->right;\n        return node;\n    }\n\n    BSTNode<T>* remove(BSTNode<T>* node, const T& value) {\n        if (!node) return nullptr;\n\n        if (value < node->data) {\n            node->left = remove(node->left, value);\n        } else if (value > node->data) {\n            node->right = remove(node->right, value);\n        } else {\n            // Case 1: leaf\n            if (!node->left && !node->right) {\n                delete node;\n                return nullptr;\n            }\n            // Case 2: one child\n            if (!node->left) {\n                BSTNode<T>* temp = node->right;\n                delete node;\n                return temp;\n            }\n            if (!node->right) {\n                BSTNode<T>* temp = node->left;\n                delete node;\n                return temp;\n            }\n            // Case 3: two children\n            BSTNode<T>* successor = findMin(node->right);\n            node->data = successor->data;\n            node->right = remove(node->right, successor->data);\n        }\n        return node;\n    }\n\n    void inorder(BSTNode<T>* node) const {\n        if (!node) return;\n        inorder(node->left);\n        std::cout << node->data << \" \";\n        inorder(node->right);\n    }\n\n    void destroy(BSTNode<T>* node) {\n        if (!node) return;\n        destroy(node->left);\n        destroy(node->right);\n        delete node;\n    }\n\npublic:\n    BST() : root(nullptr) {}\n    ~BST() { destroy(root); }\n\n    void insert(const T& value) { root = insert(root, value); }\n\n    bool search(const T& value) const { return search(root, value); }\n\n    void remove(const T& value) { root = remove(root, value); }\n\n    T min() const {\n        BSTNode<T>* node = findMin(root);\n        if (!node) throw std::out_of_range(\"Tree is empty\");\n        return node->data;\n    }\n\n    T max() const {\n        BSTNode<T>* node = findMax(root);\n        if (!node) throw std::out_of_range(\"Tree is empty\");\n        return node->data;\n    }\n\n    void inorder() const {\n        inorder(root);\n        std::cout << \"\\n\";\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-driver-program",
      children: "Example 2: Driver Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include \"bst.h\"\n\nint main() {\n    BST<int> bst;\n    int values[] = {50, 30, 70, 20, 40, 60, 80};\n\n    for (int v : values) bst.insert(v);\n\n    std::cout << \"Inorder traversal (sorted): \";\n    bst.inorder();\n\n    std::cout << \"Min: \" << bst.min() << \"\\n\";\n    std::cout << \"Max: \" << bst.max() << \"\\n\";\n\n    std::cout << \"Search 40: \" << (bst.search(40) ? \"found\" : \"not found\") << \"\\n\";\n    std::cout << \"Search 55: \" << (bst.search(55) ? \"found\" : \"not found\") << \"\\n\";\n\n    bst.remove(20);\n    std::cout << \"After removing 20: \";\n    bst.inorder();\n\n    bst.remove(30);\n    std::cout << \"After removing 30: \";\n    bst.inorder();\n\n    bst.remove(50);\n    std::cout << \"After removing 50: \";\n    bst.inorder();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Inorder traversal (sorted): 20 30 40 50 60 70 80\nMin: 20\nMax: 80\nSearch 40: found\nSearch 55: not found\nAfter removing 20: 30 40 50 60 70 80\nAfter removing 30: 40 50 60 70 80\nAfter removing 50: 40 60 70 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-successor-and-predecessor",
      children: "Example 3: Successor and Predecessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nBSTNode<T>* successor(BSTNode<T>* root, BSTNode<T>* target) {\n    if (target->right) {\n        BSTNode<T>* current = target->right;\n        while (current->left) current = current->left;\n        return current;\n    }\n\n    BSTNode<T>* succ = nullptr;\n    BSTNode<T>* current = root;\n    while (current && current != target) {\n        if (target->data < current->data) {\n            succ = current;\n            current = current->left;\n        } else {\n            current = current->right;\n        }\n    }\n    return succ;\n}\n\ntemplate <typename T>\nBSTNode<T>* predecessor(BSTNode<T>* root, BSTNode<T>* target) {\n    if (target->left) {\n        BSTNode<T>* current = target->left;\n        while (current->right) current = current->right;\n        return current;\n    }\n\n    BSTNode<T>* pred = nullptr;\n    BSTNode<T>* current = root;\n    while (current && current != target) {\n        if (target->data > current->data) {\n            pred = current;\n            current = current->right;\n        } else {\n            current = current->left;\n        }\n    }\n    return pred;\n}\n\nint main() {\n    auto* root = new BSTNode<int>(50);\n    root->left = new BSTNode<int>(30);\n    root->right = new BSTNode<int>(70);\n    root->left->left = new BSTNode<int>(20);\n    root->left->right = new BSTNode<int>(40);\n    root->right->left = new BSTNode<int>(60);\n    root->right->right = new BSTNode<int>(80);\n\n    auto* succ = successor(root, root->right->left); // successor of 60\n    if (succ) std::cout << \"Successor of 60: \" << succ->data << \"\\n\";\n\n    auto* pred = predecessor(root, root->right); // predecessor of 70\n    if (pred) std::cout << \"Predecessor of 70: \" << pred->data << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Successor of 60: 70\nPredecessor of 70: 60\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The three deletion cases (leaf, one child, two children) are fundamental - master the two-child case where you replace with the inorder successor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases-and-applications",
      children: "Use Cases and Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How BST Is Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why BST"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-trees (generalized BSTs) organize index pages. Queries traverse from root to leaf to locate rows."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) lookup, range queries, insert/delete balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File System Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix ls -l and file managers use tree structures to maintain sorted directory listings."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted order traversal, fast lookup by name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Memory Dictionaries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python's dict uses hash tables, but \bisect module works on sorted lists; tree-based sortedcontainers library uses BST internally."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered iteration, range queries, floor/ceiling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-complete / Spell Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary search trees (a BST variant) store dictionary words for prefix matching."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix search, sorted order, memory-efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symbol Tables (Compilers)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers maintain symbol tables as BSTs for fast variable lookup and scoped insertion."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast lookup, ordered iteration for code generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Routing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing tables are stored in tree structures (radix trees, PATRICIA) for IP prefix matching."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest-prefix match in (O(k)) for k-bit address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority Queues via Treap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treap (BST + heap) gives randomized balanced BST with priority queue operations."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both search and min/max extraction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-validate-bst",
      children: "Problem 1: Validate BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given the root of a binary tree, determine if it is a valid BST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use the range method — each node must lie within an allowed interval (min, max). The interval narrows as we descend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_valid_bst(root):\n    def validate(node, lo, hi):\n        if not node:\n            return True\n        if node.val <= lo or node.val >= hi:\n            return False\n        return (validate(node.left, lo, node.val) and\n                validate(node.right, node.val, hi))\n    return validate(root, float('-inf'), float('inf'))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(n)) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h))"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Empty tree = valid. Single node = valid. Duplicate values = invalid (if strictly less/greater)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-kth-smallest-element-in-bst",
      children: "Problem 2: Kth Smallest Element in BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the kth smallest element in a BST (1-indexed)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Inorder traversal visits nodes in sorted order. Track count — when count == k, return the current node's value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def kth_smallest(root, k):\n    stack = []\n    curr = root\n    while stack or curr:\n        while curr:\n            stack.append(curr)\n            curr = curr.left\n        curr = stack.pop()\n        k -= 1\n        if k == 0:\n            return curr.val\n        curr = curr.right\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(h + k)) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h))"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " If the tree is modified frequently (insert/delete), maintain a subtree size count at each node to achieve (O(\\log n)) per query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-lca-in-bst",
      children: "Problem 3: LCA in BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the lowest common ancestor of two nodes in a BST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use BST property — if both values are less than root, go left; if both greater, go right; otherwise root is the LCA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def lowest_common_ancestor(root, p, q):\n    while root:\n        if p.val < root.val and q.val < root.val:\n            root = root.left\n        elif p.val > root.val and q.val > root.val:\n            root = root.right\n        else:\n            return root\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(h)) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(1))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-bst-to-sorted-doubly-linked-list",
      children: "Problem 4: BST to Sorted Doubly Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Convert a BST to a sorted circular doubly linked list in-place (no new nodes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Inorder traversal with a prev pointer. Link each visited node to the previous node. At the end, link head and tail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bst_to_dll(root):\n    def dfs(node):\n        nonlocal first, last\n        if not node:\n            return\n        dfs(node.left)\n        if last:\n            last.right = node\n            node.left = last\n        else:\n            first = node\n        last = node\n        dfs(node.right)\n\n    first = last = None\n    dfs(root)\n    # make circular\n    if first and last:\n        first.left = last\n        last.right = first\n    return first\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(n)) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(h))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-pair-sum-in-bst",
      children: "Problem 5: Pair Sum in BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a BST and a target sum, find if there exist two nodes whose values sum to the target."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 1 (Hash Set):"
      }), " Traverse the tree; for each node, check if \target - node.val exists in the set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def find_pair(root, target):\n    seen = set()\n    def dfs(node):\n        if not node:\n            return False\n        if (target - node.val) in seen:\n            return True\n        seen.add(node.val)\n        return dfs(node.left) or dfs(node.right)\n    return dfs(root)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 2 (Two Pointers):"
      }), " Use BST iterator — one from left (inorder), one from right (reverse inorder). Move pointers based on sum vs target."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(n)) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(n)) (set) or (O(h)) (iterator approach)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When implementing BST deletion, always draw the tree first. The two-child case is the most error-prone - remember you are moving the successor's value, not the successor node itself."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inorder traversal of a BST is always sorted"
        }), ": This is the BST invariant. Use it to verify correctness — if inorder is not sorted, the BST property is violated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sorted array → balanced BST in (O(n))"
        }), ": Pick the middle element as root, recursively build left from the left half, right from the right half. This guarantees height (\\lceil \\log n \\rceil)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest common ancestor in BST is simpler than in binary trees"
        }), ": Walk from root; the LCA is the first node whose value lies between the two target values (or equals one of them)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Treaps combine BST with heap priorities"
        }), ": Each node has a key (BST order) and a random priority (heap order). This gives a balanced tree with high probability without explicit rotations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Morris traversal traverses a BST in (O(1)) space"
        }), ": Uses threaded binary tree links — no recursion or stack needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use long long or template types for BST data"
        }), ": Avoids overflow when using INT_MIN/INT_MAX sentinels in BST validation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BST property: left subtree < root < right subtree for all nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search, insert, and delete average (O(\\log n)); worst case (O(n)) for degenerate trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inorder traversal of a BST yields sorted order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deletion of a node with two children uses the inorder successor (or predecessor)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorted array can be converted to a balanced BST in (O(n))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation of BST requires checking the allowed value range ((min, max)) per node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floor/Ceiling and Range Queries use BST ordering to prune search space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCA in BST is (O(h)) using simple comparison — no ancestor tracking needed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balanced BST (AVL)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left < root < right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left < root < right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) guaranteed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1.44 \\log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotation needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-bst-operations",
      children: "Quick Reference: BST Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare key, go left/right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search to leaf, attach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete (leaf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simply remove"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete (1 child)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypass node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete (2 children)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with inorder successor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left → root → right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor / Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend, track candidate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range Query [L,R]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(k + h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prune out-of-range subtrees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range (min, max) per node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted Array → BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick mid, recurse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(h))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare p, q vs root"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why BST"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary / symbol table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast lookup by key, sorted iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries: find all keys between a and b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered statistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-th smallest element (with subtree size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not ideal — heap is simpler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autocomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TST or trie preferred over BST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted set operations (union, intersection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spell checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST stores dictionary for O(log n) lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP routing table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree structures enable prefix matching"
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
            children: "Deleting a node with two children without finding inorder successor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing the node directly breaks BST structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with inorder successor (or predecessor), then delete the successor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive BST operations without tail recursion optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion on skewed BST overflows stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iterative versions (while loops) for search and insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting duplicates without a policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST rule says \"left ≤ root < right\" or \"left < root ≤ right\" — mixing causes inconsistent behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose a consistent policy and document it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validating BST by only checking immediate children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A node may have a value that satisfies parent check but violates an ancestor's constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass min/max bounds down the recursion for validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming all self-balancing trees maintain BST invariant during rotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations temporarily may violate BST if not applied to the correct pivot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always verify: left subtree keys < node key < right subtree keys after rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not updating height/balance factor after deletion in AVL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to rebalance after deletion leaves tree unbalanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebalance bottom-up after every insertion and deletion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using linear search to find predecessor/successor in a BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-order threaded traversal or direct pointer lookup is O(h) but via flat array is O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigate from root using BST properties in O(h)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-bst-implementation",
      children: "TypeScript BST Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BSTNode {\n    constructor(\n        public data: number,\n        public left: BSTNode | null = null,\n        public right: BSTNode | null = null\n    ) {}\n}\n\nclass BinarySearchTree {\n    private root: BSTNode | null = null;\n\n    insert(data: number): void {\n        if (!this.root) { this.root = new BSTNode(data); return; }\n        let curr = this.root;\n        while (true) {\n            if (data < curr.data) {\n                if (!curr.left) { curr.left = new BSTNode(data); return; }\n                curr = curr.left;\n            } else {\n                if (!curr.right) { curr.right = new BSTNode(data); return; }\n                curr = curr.right;\n            }\n        }\n    }\n\n    search(data: number): boolean {\n        let curr = this.root;\n        while (curr) {\n            if (data === curr.data) return true;\n            curr = data < curr.data ? curr.left : curr.right;\n        }\n        return false;\n    }\n\n    delete(data: number): void {\n        this.root = this._delete(this.root, data);\n    }\n\n    private _delete(node: BSTNode | null, data: number): BSTNode | null {\n        if (!node) return null;\n        if (data < node.data) {\n            node.left = this._delete(node.left, data);\n        } else if (data > node.data) {\n            node.right = this._delete(node.right, data);\n        } else {\n            // case 1: leaf\n            if (!node.left && !node.right) return null;\n            // case 2: one child\n            if (!node.left) return node.right;\n            if (!node.right) return node.left;\n            // case 3: two children → replace with inorder successor\n            const succ = this._min(node.right);\n            node.data = succ.data;\n            node.right = this._delete(node.right, succ.data);\n        }\n        return node;\n    }\n\n    private _min(node: BSTNode): BSTNode {\n        let curr = node;\n        while (curr.left) curr = curr.left;\n        return curr;\n    }\n\n    isValid(): boolean {\n        return this._validate(this.root, -Infinity, Infinity);\n    }\n\n    private _validate(node: BSTNode | null, min: number, max: number): boolean {\n        if (!node) return true;\n        if (node.data <= min || node.data >= max) return false;\n        return this._validate(node.left, min, node.data) &&\n               this._validate(node.right, node.data, max);\n    }\n\n    // Kth smallest element (in-order)\n    kthSmallest(k: number): number | null {\n        const stack: BSTNode[] = [];\n        let curr = this.root;\n        let count = 0;\n        while (curr || stack.length > 0) {\n            while (curr) { stack.push(curr); curr = curr.left; }\n            curr = stack.pop()!;\n            count++;\n            if (count === k) return curr.data;\n            curr = curr.right;\n        }\n        return null;\n    }\n\n    // Lowest common ancestor\n    lca(n1: number, n2: number): number | null {\n        let curr = this.root;\n        while (curr) {\n            if (n1 < curr.data && n2 < curr.data) curr = curr.left;\n            else if (n1 > curr.data && n2 > curr.data) curr = curr.right;\n            else return curr.data; // split point\n        }\n        return null;\n    }\n\n    toArray(): number[] {\n        const result: number[] = [];\n        const stack: BSTNode[] = [];\n        let curr = this.root;\n        while (curr || stack.length > 0) {\n            while (curr) { stack.push(curr); curr = curr.left; }\n            curr = stack.pop()!;\n            result.push(curr.data);\n            curr = curr.right;\n        }\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time complexity of searching in a BST with n nodes?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The inorder traversal of a BST produces:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Sorted descending order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Sorted ascending order ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Root-to-leaf paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Level-order sequence"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which is NOT true about the inorder successor of a node in a BST?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It is the smallest node greater than the given node"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It can be found by going right once, then left repeatedly ✓ (wait, this IS true — let me rephrase. The FALSE statement.)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) If the node has no right subtree, the successor is the nearest ancestor where the node is in its left subtree ✓ (this IS true)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Actually: False statement: \"If the node has a right subtree, the successor is the leftmost node of the left subtree of the right child\" — WAIT that IS true."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Let me restate: NOT true → \"The inorder predecessor is always a leaf node.\" ✓ (predecessor can be internal node)"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let me use a clean MCQ:"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which value is NOT in a valid BST's inorder traversal of [1, 3, 7, 9, 12, 15]?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 7"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 5 ✓ (5 would violate sorted order)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 12"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 15"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A binary search tree with a preorder traversal of [5, 3, 2, 4, 7, 6, 8] has what root?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 5 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 8"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the minimum height of a BST with 255 nodes?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 7"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 8 ✓ (2⁸ - 1 = 255)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 9"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 255"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The ceiling of a key in a BST is defined as:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The smallest key ≥ given key ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The largest key ≤ given key"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The root value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The height of the node"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-b, 11-b, 12-c, 13-b, 14-a"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find k-th largest element in a BST"
          }), ": Use reverse in-order traversal (right-root-left) to find the kth largest element in O(h + k)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check if a binary tree is a BST"
          }), ": Write a function that returns true if the given binary tree is a valid BST (use the min-max range approach)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert a BST to a balanced BST (Day-Stout-Warren algorithm)"
          }), ": Transform a skewed BST into a balanced one in O(n) time and O(1) space by converting to a vine and then compressing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Merge two BSTs"
          }), ": Given two BSTs, merge them into a single BST. Do it in O(m + n) time with limited extra space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pair with given sum in BST"
          }), ": Given a BST and a target sum, check if there exist two nodes whose sum equals the target. Use two-pointer on inorder array, or hash set."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Floor and ceiling in a BST"
          }), ": Find the largest key ≤ given key (floor) and smallest key ≥ given key (ceiling) in a BST."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix a BST with two swapped nodes"
          }), ": Two nodes in a BST are swapped. Detect and correct them without changing the structure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Count BST subtrees within a given range"
          }), ": Given a BST and a range [L, R], count the number of subtrees whose all nodes fall within the range."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flatten BST to sorted linked list"
          }), ": Convert a BST into a sorted linked list in place using (reverse) Morris traversal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Median of BST in O(n) time and O(1) space"
          }), ": Find the median of a BST efficiently using Morris traversal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-bst-vs-avl-vs-red-black-vs-b-tree",
      children: "Comparison: BST vs AVL vs Red-Black vs B-Tree"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST (unbalanced)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AVL Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red-Black Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree (order m)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Balance strictness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ptrs + height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ptrs + color bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m pointers + keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/O (databases)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotation per insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 2 (plus recolor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.44 log₂n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 log₂n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log_{m/2}(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Tree is always balanced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Every node has two children"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Worst-case BST search complexity?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (O(1))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (O(\\log n))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (O(n)) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (O(n^2))"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What traversal of a BST yields sorted order?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Preorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Inorder ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Postorder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Level-order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deletion of a node with two children uses:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Inorder successor ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Level-order predecessor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Random node"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Tree rotation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How to build a balanced BST from a sorted array?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Insert in order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Pick middle as root, recursively ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Reverse order insertion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Use heap construction"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of finding LCA in a BST?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (O(n)) in all cases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (O(\\log n)) average, (O(n)) worst ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (O(1))"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (O(n^2))"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which data structure supports floor/ceiling queries most efficiently?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Hash table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) BST ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Linked list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Queue"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-a, 2-c, 3-b, 4-a, 5-b, 6-b, 7-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BSTs maintain order: left < root < right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average-case complexity is ( O(\\log n) ) for search, insert, delete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst-case ( O(n) ) occurs when the tree becomes a chain (sorted insertion)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deletion of a node with two children uses the inorder successor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floor/Ceiling and Range Queries use BST ordering to prune search efficiently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checking BST validity requires range-based validation, not just local child checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCA in BST is trivial — just compare both values against the current node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balanced BSTs (AVL, Red-Black, Treap) guarantee (O(\\log n)) height."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that an inorder traversal of a BST yields sorted order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What causes a BST to become unbalanced? Give a construction sequence that produces a degenerate tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three cases of BST deletion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the range-method for BST validation need both min and max bounds? What goes wrong with just checking children?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the successor of a node without a right subtree is the nearest ancestor where the node lies in the left subtree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to check if a given binary tree satisfies the BST invariant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the lowest common ancestor of two given nodes in a BST."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function that converts a sorted array into a height-balanced BST."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement BST floor and ceiling operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to print all keys in a BST that lie within a given range [L, R]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Treap"
        }), " (Tree + Heap), where each node has a key and a randomly assigned priority. Show that this yields a balanced BST in expectation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Morris inorder traversal"
        }), " — traverse a BST in (O(n)) time and (O(1)) space using threaded links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BST iterator"
        }), " with\next() and hasNext() in (O(1)) average time and (O(h)) space."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a BST, convert it to a sorted doubly linked list in-place (no extra nodes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find if there exist two nodes in a BST whose values sum to a given target — solve with (O(h)) space and (O(n)) time."
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