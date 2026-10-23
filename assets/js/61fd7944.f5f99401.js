"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5102],{

/***/ 5309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_05_trees_md_61f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-05-trees-md-61f.json
const site_docs_courses_coding_problems_05_trees_md_61f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/05-trees","title":"Chapter 05: Trees","description":"Tree problems are among the most common interview topics. They test your understanding of recursion, BFS/DFS traversal, and data structure design. Mastering trees is essential for every software engineer.","source":"@site/docs/courses/coding-problems/05-trees.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/05-trees","permalink":"/ai-engineering-journey/coding-problems/05-trees","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-trees","slug":"/coding-problems/05-trees","title":"Chapter 05: Trees","sidebar_label":"Chapter 05: Trees","sidebar_position":5},"sidebar":"course-coding-problems","previous":{"title":"Chapter 04: Stacks & Queues","permalink":"/ai-engineering-journey/coding-problems/04-stacks-queues"},"next":{"title":"Chapter 06: Graphs","permalink":"/ai-engineering-journey/coding-problems/06-graphs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/coding-problems/05-trees.md


const frontMatter = {
	id: '05-trees',
	slug: '/coding-problems/05-trees',
	title: 'Chapter 05: Trees',
	sidebar_label: 'Chapter 05: Trees',
	sidebar_position: 5
};
const contentTitle = 'Chapter 05: Trees';

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
  "value": "Tree Algorithm Patterns",
  "id": "tree-algorithm-patterns",
  "level": 2
}, {
  "value": "Complexity Decision Matrix",
  "id": "complexity-decision-matrix",
  "level": 2
}, {
  "value": "Easy Problems (10)",
  "id": "easy-problems-10",
  "level": 2
}, {
  "value": "Problem 1: Binary Tree Inorder Traversal",
  "id": "problem-1-binary-tree-inorder-traversal",
  "level": 3
}, {
  "value": "Problem 2: Maximum Depth of Binary Tree",
  "id": "problem-2-maximum-depth-of-binary-tree",
  "level": 3
}, {
  "value": "Problem 3: Same Tree",
  "id": "problem-3-same-tree",
  "level": 3
}, {
  "value": "Problem 4: Symmetric Tree",
  "id": "problem-4-symmetric-tree",
  "level": 3
}, {
  "value": "Problem 5: Binary Tree Level Order Traversal",
  "id": "problem-5-binary-tree-level-order-traversal",
  "level": 3
}, {
  "value": "Problem 6: Convert Sorted Array to BST",
  "id": "problem-6-convert-sorted-array-to-bst",
  "level": 3
}, {
  "value": "Problem 7: Balanced Binary Tree",
  "id": "problem-7-balanced-binary-tree",
  "level": 3
}, {
  "value": "Problem 8: Minimum Depth of Binary Tree",
  "id": "problem-8-minimum-depth-of-binary-tree",
  "level": 3
}, {
  "value": "Problem 9: Path Sum",
  "id": "problem-9-path-sum",
  "level": 3
}, {
  "value": "Problem 10: Invert Binary Tree",
  "id": "problem-10-invert-binary-tree",
  "level": 3
}, {
  "value": "Medium Problems (14)",
  "id": "medium-problems-14",
  "level": 2
}, {
  "value": "Problem 11: Validate Binary Search Tree",
  "id": "problem-11-validate-binary-search-tree",
  "level": 3
}, {
  "value": "Problem 12: Binary Tree Zigzag Level Order Traversal",
  "id": "problem-12-binary-tree-zigzag-level-order-traversal",
  "level": 3
}, {
  "value": "Problem 13: Construct Binary Tree from Preorder and Inorder",
  "id": "problem-13-construct-binary-tree-from-preorder-and-inorder",
  "level": 3
}, {
  "value": "Problem 14: Binary Tree Right Side View",
  "id": "problem-14-binary-tree-right-side-view",
  "level": 3
}, {
  "value": "Problem 15: Kth Smallest Element in a BST",
  "id": "problem-15-kth-smallest-element-in-a-bst",
  "level": 3
}, {
  "value": "Problem 16: Lowest Common Ancestor of a BST",
  "id": "problem-16-lowest-common-ancestor-of-a-bst",
  "level": 3
}, {
  "value": "Problem 17: Lowest Common Ancestor of a Binary Tree",
  "id": "problem-17-lowest-common-ancestor-of-a-binary-tree",
  "level": 3
}, {
  "value": "Problem 18: Binary Tree Maximum Path Sum",
  "id": "problem-18-binary-tree-maximum-path-sum",
  "level": 3
}, {
  "value": "Problem 19: Binary Tree Level Order Traversal II",
  "id": "problem-19-binary-tree-level-order-traversal-ii",
  "level": 3
}, {
  "value": "Problem 20: Count Complete Tree Nodes",
  "id": "problem-20-count-complete-tree-nodes",
  "level": 3
}, {
  "value": "Problem 21: Binary Tree Paths",
  "id": "problem-21-binary-tree-paths",
  "level": 3
}, {
  "value": "Problem 22: Sum Root to Leaf Numbers",
  "id": "problem-22-sum-root-to-leaf-numbers",
  "level": 3
}, {
  "value": "Problem 23: Flatten Binary Tree to Linked List",
  "id": "problem-23-flatten-binary-tree-to-linked-list",
  "level": 3
}, {
  "value": "Problem 24: Populating Next Right Pointers in Each Node",
  "id": "problem-24-populating-next-right-pointers-in-each-node",
  "level": 3
}, {
  "value": "Hard Problems (6)",
  "id": "hard-problems-6",
  "level": 2
}, {
  "value": "Problem 25: Serialize and Deserialize Binary Tree",
  "id": "problem-25-serialize-and-deserialize-binary-tree",
  "level": 3
}, {
  "value": "Problem 26: Binary Tree Cameras",
  "id": "problem-26-binary-tree-cameras",
  "level": 3
}, {
  "value": "Problem 27: Binary Tree Maximum Path Sum (with variations)",
  "id": "problem-27-binary-tree-maximum-path-sum-with-variations",
  "level": 3
}, {
  "value": "Problem 28: Recover Binary Search Tree",
  "id": "problem-28-recover-binary-search-tree",
  "level": 3
}, {
  "value": "Problem 29: Vertical Order Traversal of a Binary Tree",
  "id": "problem-29-vertical-order-traversal-of-a-binary-tree",
  "level": 3
}, {
  "value": "Problem 30: All Nodes Distance K in Binary Tree",
  "id": "problem-30-all-nodes-distance-k-in-binary-tree",
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
        id: "chapter-05-trees",
        children: "Chapter 05: Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Tree problems are among the most common interview topics. They test your understanding of recursion, BFS/DFS traversal, and data structure design. Mastering trees is essential for every software engineer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master tree traversals: inorder, preorder, postorder, level-order (BFS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand recursion depth and iterative approaches for tree problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement BST operations: insert, delete, search, validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply DFS/BFS to solve complex tree problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle serialization, deserialization, and tree construction from traversals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize patterns: lowest common ancestor, diameter, path sum, subtree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-classification-flow",
      children: "Problem Classification Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Tree Problem] --> B{Type?}\r\n    B -->|BST| C[Use inorder property: sorted values]\r\n    B -->|Binary Tree| D{Operation?}\r\n    B -->|N-ary| E[BFS / DFS with children list]\r\n    \r\n    D -->|Traversal| F{Order?}\r\n    F -->|Level order| G[BFS with Queue]\r\n    F -->|In/Pre/Post| H[DFS with Stack / Recursion]\r\n    \r\n    D -->|Property| I{Metric?}\r\n    I -->|Height| J[MaxDepth / Balanced]\r\n    I -->|Path| K[Diameter / Path Sum]\r\n    I -->|Structure| L[Symmetric / Same Tree]\r\n    \r\n    D -->|Construction| M[From traversals]\r\n    D -->|Modification| N[Serialize / Deserialize]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tree-algorithm-patterns",
      children: "Tree Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "mindmap\r\n  root((Tree Patterns))\r\n    DFS Traversals\r\n      Inorder → sorted for BST\r\n      Preorder → root first\r\n      Postorder → children before parent\r\n      Morris → [\"O(1) space\"]\r\n    BFS Traversals\r\n      Level order\r\n      Zigzag level order\r\n      Right side view\r\n    BST Operations\r\n      Insert / Delete\r\n      Search / Validate\r\n      Next / Floor / Ceil\r\n    Path Problems\r\n      Root-to-leaf sum\r\n      Max path sum\r\n      Diameter\r\n    Construction\r\n      From inorder+preorder\r\n      From inorder+postorder\r\n      Serialize / Deserialize\r\n    LCA\r\n      Binary Tree\r\n      BST (simpler)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-decision-matrix",
      children: "Complexity Decision Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "xychart-beta\r\n    title \"Tree Algorithm Complexities\"\r\n    x-axis [\"DFS Recursive\", \"DFS Iterative\", \"BFS\", \"Morris\", \"Serialize\"]\r\n    y-axis \"Time / Space\" 0 --> 100\r\n    bar [60, 60, 60, 60, 80]\r\n    line [70, 50, 50, 10, 60]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-10",
      children: "Easy Problems (10)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-binary-tree-inorder-traversal",
      children: "Problem 1: Binary Tree Inorder Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, Stack, Recursion]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Inorder Traversal, Iterative Traversal, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Iterative traversal with explicit stack — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS level-order — does not produce inorder sequence\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        children: "Binary Tree Inorder Traversal"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-15-kth-smallest-element-in-a-bst",
        children: "Kth Smallest Element in a BST"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-28-recover-binary-search-tree",
        children: "Recover Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-6-valid-parentheses",
        children: "Valid Parentheses"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given the root of a binary tree, return the inorder traversal (left → root → right)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, null, 2, 3]\r\nOutput: [1, 3, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive:"
        }), " D → left, visit, right. Time O(n), Space O(h)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative (Stack):"
        }), " Push left, pop, visit, go right. Time O(n), Space O(h)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TreeNode {\r\n  val: number;\r\n  left: TreeNode | null;\r\n  right: TreeNode | null;\r\n  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\r\n    this.val = val ?? 0;\r\n    this.left = left ?? null;\r\n    this.right = right ?? null;\r\n  }\r\n}\r\n\r\nfunction inorderTraversal(root: TreeNode | null): number[] {\r\n  const result: number[] = [];\r\n  const stack: TreeNode[] = [];\r\n  let curr = root;\r\n\r\n  while (curr || stack.length > 0) {\r\n    while (curr) {\r\n      stack.push(curr);\r\n      curr = curr.left;\r\n    }\r\n    curr = stack.pop()!;\r\n    result.push(curr.val);\r\n    curr = curr.right;\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function arrayToTree(arr: (number | null)[]): TreeNode | null {\r\n  if (!arr.length || arr[0] === null) return null;\r\n  const root = new TreeNode(arr[0]);\r\n  const queue: TreeNode[] = [root];\r\n  let i = 1;\r\n  while (queue.length > 0 && i < arr.length) {\r\n    const node = queue.shift()!;\r\n    if (arr[i] !== null) {\r\n      node.left = new TreeNode(arr[i] as number);\r\n      queue.push(node.left);\r\n    }\r\n    i++;\r\n    if (i < arr.length && arr[i] !== null) {\r\n      node.right = new TreeNode(arr[i] as number);\r\n      queue.push(node.right);\r\n    }\r\n    i++;\r\n  }\r\n  return root;\r\n}\r\n\r\nconsole.log(inorderTraversal(arrayToTree([1, null, 2, 3]))); // [1, 3, 2]\r\nconsole.log(inorderTraversal(arrayToTree([]))); // []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h) where h = tree height"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-maximum-depth-of-binary-tree",
      children: "Problem 2: Maximum Depth of Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — O(n) extra queue space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        children: "Maximum Depth of Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-8-minimum-depth-of-binary-tree",
        children: "Minimum Depth of Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-7-balanced-binary-tree",
        children: "Balanced Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-6-number-of-islands",
        children: "Number of Islands"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the maximum depth (number of nodes along the longest path from root to farthest leaf)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxDepth(root: TreeNode | null): number {\r\n  if (!root) return 0;\r\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))); // 3\r\nconsole.log(maxDepth(arrayToTree([1, null, 2]))); // 2\r\nconsole.log(maxDepth(null)); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-same-tree",
      children: "Problem 3: Same Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, Recursion]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS comparing both trees — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — O(n) extra queue space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/same-tree/",
        children: "Same Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-4-symmetric-tree",
        children: "Symmetric Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-10-invert-binary-tree",
        children: "Invert Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two binary trees, check if they are structurally identical and have same values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: p = [1, 2, 3], q = [1, 2, 3]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {\r\n  if (!p && !q) return true;\r\n  if (!p || !q) return false;\r\n  return p.val === q.val &&\r\n    isSameTree(p.left, q.left) &&\r\n    isSameTree(p.right, q.right);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const tree1 = arrayToTree([1, 2, 3]);\r\nconst tree2 = arrayToTree([1, 2, 3]);\r\nconst tree3 = arrayToTree([1, 2, null]);\r\nconsole.log(isSameTree(tree1, tree2)); // true\r\nconsole.log(isSameTree(tree1, tree3)); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-symmetric-tree",
      children: "Problem 4: Symmetric Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS mirror check — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS comparing levels — O(n) extra queue space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/symmetric-tree/",
        children: "Symmetric Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-3-same-tree",
        children: "Same Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-10-invert-binary-tree",
        children: "Invert Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a binary tree, check if it is a mirror of itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 2, 3, 4, 4, 3]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isSymmetric(root: TreeNode | null): boolean {\r\n  const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {\r\n    if (!t1 && !t2) return true;\r\n    if (!t1 || !t2) return false;\r\n    return t1.val === t2.val &&\r\n      isMirror(t1.left, t2.right) &&\r\n      isMirror(t1.right, t2.left);\r\n  };\r\n\r\n  return isMirror(root, root);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3]))); // true\r\nconsole.log(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3]))); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-binary-tree-level-order-traversal",
      children: "Problem 5: Binary Tree Level Order Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS with queue, one level per iteration — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS recursion — needs extra depth bookkeeping to group levels\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        children: "Binary Tree Level Order Traversal"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-12-binary-tree-zigzag-level-order-traversal",
        children: "Binary Tree Zigzag Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-19-binary-tree-level-order-traversal-ii",
        children: "Binary Tree Level Order Traversal II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-12-rotting-oranges",
        children: "Rotting Oranges"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the level order traversal of a binary tree's nodes' values (left to right, level by level)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: [[3], [9, 20], [15, 7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function levelOrder(root: TreeNode | null): number[][] {\r\n  if (!root) return [];\r\n  const result: number[][] = [];\r\n  const queue: TreeNode[] = [root];\r\n\r\n  while (queue.length > 0) {\r\n    const levelSize = queue.length;\r\n    const level: number[] = [];\r\n\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      level.push(node.val);\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n\r\n    result.push(level);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));\r\n// [[3], [9, 20], [15, 7]]\r\nconsole.log(levelOrder(null)); // []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-convert-sorted-array-to-bst",
      children: "Problem 6: Convert Sorted Array to BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BST, Divide and Conquer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Balanced BST, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive mid-split — O(n) time, O(log n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Sequential insertion — produces skewed tree, not height-balanced\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        children: "Convert Sorted Array to Binary Search Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-11-validate-binary-search-tree",
        children: "Validate Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-15-kth-smallest-element-in-a-bst",
        children: "Kth Smallest Element in a BST"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-21-search-in-rotated-sorted-array",
        children: "Search in Rotated Sorted Array"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an integer array sorted in ascending order, convert it to a height-balanced BST."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [-10, -3, 0, 5, 9]\r\nOutput: [0, -3, 9, -10, null, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sortedArrayToBST(nums: number[]): TreeNode | null {\r\n  const build = (left: number, right: number): TreeNode | null => {\r\n    if (left > right) return null;\r\n    const mid = Math.floor((left + right) / 2);\r\n    const node = new TreeNode(nums[mid]);\r\n    node.left = build(left, mid - 1);\r\n    node.right = build(mid + 1, right);\r\n    return node;\r\n  };\r\n\r\n  return build(0, nums.length - 1);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const bst = sortedArrayToBST([-10, -3, 0, 5, 9]);\r\nconsole.log(inorderTraversal(bst)); // [-10, -3, 0, 5, 9]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(log n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-balanced-binary-tree",
      children: "Problem 7: Balanced Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Postorder DFS with early exit (-1 sentinel) — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Top-down height recomputation per node — O(n log n) redundant work\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/balanced-binary-tree/",
        children: "Balanced Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-2-maximum-depth-of-binary-tree",
        children: "Maximum Depth of Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-6-convert-sorted-array-to-bst",
        children: "Convert Sorted Array to BST"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Determine if a binary tree is height-balanced (left and right subtrees differ by ≤1 in height)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isBalanced(root: TreeNode | null): boolean {\r\n  const checkHeight = (node: TreeNode | null): number => {\r\n    if (!node) return 0;\r\n\r\n    const left = checkHeight(node.left);\r\n    if (left === -1) return -1;\r\n    const right = checkHeight(node.right);\r\n    if (right === -1) return -1;\r\n\r\n    if (Math.abs(left - right) > 1) return -1;\r\n    return 1 + Math.max(left, right);\r\n  };\r\n\r\n  return checkHeight(root) !== -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isBalanced(arrayToTree([3, 9, 20, null, null, 15, 7]))); // true\r\nconsole.log(isBalanced(arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]))); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-minimum-depth-of-binary-tree",
      children: "Problem 8: Minimum Depth of Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS — early exit at first leaf, O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS recursion — explores whole tree even when a shallow leaf exists\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        children: "Minimum Depth of Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-2-maximum-depth-of-binary-tree",
        children: "Maximum Depth of Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-19-shortest-path-in-binary-matrix",
        children: "Shortest Path in Binary Matrix"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the minimum depth (shortest path from root to nearest leaf)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minDepth(root: TreeNode | null): number {\r\n  if (!root) return 0;\r\n\r\n  const queue: TreeNode[] = [root];\r\n  let depth = 1;\r\n\r\n  while (queue.length > 0) {\r\n    const levelSize = queue.length;\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      if (!node.left && !node.right) return depth;\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n    depth++;\r\n  }\r\n\r\n  return depth;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))); // 2\r\nconsole.log(minDepth(arrayToTree([2, null, 3, null, 4]))); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-path-sum",
      children: "Problem 9: Path Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS with remaining-sum — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — O(n) extra queue space, no early-exit advantage\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/path-sum/",
        children: "Path Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-22-sum-root-to-leaf-numbers",
        children: "Sum Root to Leaf Numbers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-21-binary-tree-paths",
        children: "Binary Tree Paths"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-15-subarray-sum-equals-k",
        children: "Subarray Sum Equals K"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a target sum, determine if the tree has a root-to-leaf path that sums to target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function hasPathSum(root: TreeNode | null, targetSum: number): boolean {\r\n  if (!root) return false;\r\n  if (!root.left && !root.right) return root.val === targetSum;\r\n  return hasPathSum(root.left, targetSum - root.val) ||\r\n         hasPathSum(root.right, targetSum - root.val);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const tree = arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);\r\nconsole.log(hasPathSum(tree, 22)); // true\r\nconsole.log(hasPathSum(null, 0)); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-invert-binary-tree",
      children: "Problem 10: Invert Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, Recursion]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS swapping children — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — O(n) extra queue space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/invert-binary-tree/",
        children: "Invert Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-4-symmetric-tree",
        children: "Symmetric Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-3-same-tree",
        children: "Same Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given the root of a binary tree, invert the tree (mirror it)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [4, 2, 7, 1, 3, 6, 9]\r\nOutput: [4, 7, 2, 9, 6, 3, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function invertTree(root: TreeNode | null): TreeNode | null {\r\n  if (!root) return null;\r\n  const temp = root.left;\r\n  root.left = invertTree(root.right);\r\n  root.right = invertTree(temp);\r\n  return root;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const inverted = invertTree(arrayToTree([4, 2, 7, 1, 3, 6, 9]));\r\nconsole.log(levelOrder(inverted));\r\n// [[4], [7, 2], [9, 6, 3, 1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-14",
      children: "Medium Problems (14)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-validate-binary-search-tree",
      children: "Problem 11: Validate Binary Search Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BST, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Binary Search Tree, Inorder Traversal, DFS\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS with min/max range bounds — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Parent-child comparison only — misses violations deeper in the tree\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/validate-binary-search-tree/",
        children: "Validate Binary Search Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-15-kth-smallest-element-in-a-bst",
        children: "Kth Smallest Element in a BST"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-28-recover-binary-search-tree",
        children: "Recover Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-21-search-in-rotated-sorted-array",
        children: "Search in Rotated Sorted Array"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Determine if a binary tree is a valid BST. Left subtree values must be < root value; right > root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [2, 1, 3]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 10⁴"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-2³¹ ≤ Node.val ≤ 2³¹ - 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inorder check:"
        }), " Inorder traversal must be strictly increasing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range check:"
        }), " Keep min/max valid range for each node."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isValidBST(root: TreeNode | null): boolean {\r\n  const validate = (node: TreeNode | null, min: number, max: number): boolean => {\r\n    if (!node) return true;\r\n    if (node.val <= min || node.val >= max) return false;\r\n    return validate(node.left, min, node.val) &&\r\n           validate(node.right, node.val, max);\r\n  };\r\n\r\n  return validate(root, -Infinity, Infinity);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isValidBST(arrayToTree([2, 1, 3]))); // true\r\nconsole.log(isValidBST(arrayToTree([5, 1, 4, null, null, 3, 6]))); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-binary-tree-zigzag-level-order-traversal",
      children: "Problem 12: Binary Tree Zigzag Level Order Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS with direction toggle — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS recursion — needs depth tracking and level reversal\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        children: "Binary Tree Zigzag Level Order Traversal"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-14-binary-tree-right-side-view",
        children: "Binary Tree Right Side View"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-10-word-ladder",
        children: "Word Ladder"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return zigzag level order: left→right, then right→left, alternating."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: [[3], [20, 9], [15, 7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function zigzagLevelOrder(root: TreeNode | null): number[][] {\r\n  if (!root) return [];\r\n  const result: number[][] = [];\r\n  const queue: TreeNode[] = [root];\r\n  let leftToRight = true;\r\n\r\n  while (queue.length > 0) {\r\n    const levelSize = queue.length;\r\n    const level: number[] = [];\r\n\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      if (leftToRight) {\r\n        level.push(node.val);\r\n      } else {\r\n        level.unshift(node.val);\r\n      }\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n\r\n    result.push(level);\r\n    leftToRight = !leftToRight;\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));\r\n// [[3], [20, 9], [15, 7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-construct-binary-tree-from-preorder-and-inorder",
      children: "Problem 13: Construct Binary Tree from Preorder and Inorder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, Array, Divide and Conquer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Preorder Traversal, Inorder Traversal, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive with hash map for inorder index — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Linear indexOf per node — O(n²) worst case\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        children: "Construct Binary Tree from Preorder and Inorder Traversal"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-25-serialize-and-deserialize-binary-tree",
        children: "Serialize and Deserialize Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-1-binary-tree-inorder-traversal",
        children: "Binary Tree Inorder Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-1-two-sum",
        children: "Two Sum"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Build a binary tree from preorder and inorder traversal arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]\r\nOutput: [3, 9, 20, null, null, 15, 7]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function buildTree(preorder: number[], inorder: number[]): TreeNode | null {\r\n  if (!preorder.length || !inorder.length) return null;\r\n\r\n  const rootVal = preorder[0];\r\n  const root = new TreeNode(rootVal);\r\n  const mid = inorder.indexOf(rootVal);\r\n\r\n  root.left = buildTree(\r\n    preorder.slice(1, mid + 1),\r\n    inorder.slice(0, mid)\r\n  );\r\n  root.right = buildTree(\r\n    preorder.slice(mid + 1),\r\n    inorder.slice(mid + 1)\r\n  );\r\n\r\n  return root;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const preorder = [3, 9, 20, 15, 7];\r\nconst inorder = [9, 3, 15, 20, 7];\r\nconsole.log(levelOrder(buildTree(preorder, inorder)));\r\n// [[3], [9, 20], [15, 7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²) naive, O(n) with hash map\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-binary-tree-right-side-view",
      children: "Problem 14: Binary Tree Right Side View"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS taking last node of each level — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS visiting left children first — captures left-side nodes, not the right view\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-right-side-view/",
        children: "Binary Tree Right Side View"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-12-binary-tree-zigzag-level-order-traversal",
        children: "Binary Tree Zigzag Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-12-rotting-oranges",
        children: "Rotting Oranges"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the values of nodes you can see from the right side of the tree (top to bottom)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3, null, 5, null, 4]\r\nOutput: [1, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function rightSideView(root: TreeNode | null): number[] {\r\n  if (!root) return [];\r\n  const result: number[] = [];\r\n  const queue: TreeNode[] = [root];\r\n\r\n  while (queue.length > 0) {\r\n    const levelSize = queue.length;\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      if (i === levelSize - 1) result.push(node.val);\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(rightSideView(arrayToTree([1, 2, 3, null, 5, null, 4])));\r\n// [1, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-kth-smallest-element-in-a-bst",
      children: "Problem 15: Kth Smallest Element in a BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BST, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Binary Search Tree, Inorder Traversal, Iterative Traversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Iterative inorder with early stop at k — O(h + k) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Collect full inorder array then index — always O(n), even when k is small\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        children: "Kth Smallest Element in a BST"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-1-binary-tree-inorder-traversal",
        children: "Binary Tree Inorder Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-11-validate-binary-search-tree",
        children: "Validate Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-23-find-minimum-in-rotated-sorted-array",
        children: "Find Minimum in Rotated Sorted Array"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the kth smallest element in a BST."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 1, 4, null, 2], k = 1\r\nOutput: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ k ≤ nodes ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function kthSmallest(root: TreeNode | null, k: number): number {\r\n  const stack: TreeNode[] = [];\r\n  let curr = root;\r\n  let count = 0;\r\n\r\n  while (curr || stack.length > 0) {\r\n    while (curr) {\r\n      stack.push(curr);\r\n      curr = curr.left;\r\n    }\r\n    curr = stack.pop()!;\r\n    count++;\r\n    if (count === k) return curr.val;\r\n    curr = curr.right;\r\n  }\r\n\r\n  return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(kthSmallest(arrayToTree([3, 1, 4, null, 2]), 1)); // 1\r\nconsole.log(kthSmallest(arrayToTree([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(h + k)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-lowest-common-ancestor-of-a-bst",
      children: "Problem 16: Lowest Common Ancestor of a BST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BST]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Binary Search Tree, Lowest Common Ancestor\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BST property descent — O(h) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Generic binary-tree LCA recursion — O(n), ignores BST ordering\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        children: "Lowest Common Ancestor of a Binary Search Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-17-lowest-common-ancestor-of-a-binary-tree",
        children: "Lowest Common Ancestor of a Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-11-validate-binary-search-tree",
        children: "Validate Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-1-find-if-path-exists-in-graph",
        children: "Find if Path Exists in Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the lowest common ancestor of two nodes in a BST."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8\r\nOutput: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lowestCommonAncestorBST(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {\r\n  if (!root || !p || !q) return null;\r\n\r\n  if (p.val < root.val && q.val < root.val) {\r\n    return lowestCommonAncestorBST(root.left, p, q);\r\n  }\r\n  if (p.val > root.val && q.val > root.val) {\r\n    return lowestCommonAncestorBST(root.right, p, q);\r\n  }\r\n\r\n  return root;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const bstTree = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);\r\nconst p = new TreeNode(2);\r\nconst q = new TreeNode(8);\r\nconsole.log(lowestCommonAncestorBST(bstTree, p, q)?.val); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(h)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-lowest-common-ancestor-of-a-binary-tree",
      children: "Problem 17: Lowest Common Ancestor of a Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Lowest Common Ancestor, DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive postorder DFS — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Parent map + visited set — O(n) extra space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        children: "Lowest Common Ancestor of a Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-16-lowest-common-ancestor-of-a-bst",
        children: "Lowest Common Ancestor of a BST"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-30-all-nodes-distance-k-in-binary-tree",
        children: "All Nodes Distance K in Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the LCA of two nodes in a binary tree (not necessarily BST)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1\r\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {\r\n  if (!root || root === p || root === q) return root;\r\n\r\n  const left = lowestCommonAncestor(root.left, p, q);\r\n  const right = lowestCommonAncestor(root.right, p, q);\r\n\r\n  if (left && right) return root;\r\n  return left || right;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const treeLCA = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);\r\nconst pNode = new TreeNode(5);\r\nconst qNode = new TreeNode(1);\r\nconsole.log(lowestCommonAncestor(treeLCA, pNode, qNode)?.val); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-binary-tree-maximum-path-sum",
      children: "Problem 18: Binary Tree Maximum Path Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Postorder DFS tracking max gain — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute-force check every pair of nodes — O(n²) path computations\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        children: "Binary Tree Maximum Path Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-27-binary-tree-maximum-path-sum-with-variations",
        children: "Binary Tree Maximum Path Sum (with variations)"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-9-path-sum",
        children: "Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the maximum path sum in a binary tree. Path can start and end at any node."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [-10, 9, 20, null, null, 15, 7]\r\nOutput: 42\r\nExplanation: Path 15 → 20 → 7 = 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 3 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function maxPathSum(root: TreeNode | null): number {\r\n  let maxSum = -Infinity;\r\n\r\n  const dfs = (node: TreeNode | null): number => {\r\n    if (!node) return 0;\r\n\r\n    const leftGain = Math.max(dfs(node.left), 0);\r\n    const rightGain = Math.max(dfs(node.right), 0);\r\n    const currentPath = node.val + leftGain + rightGain;\r\n    maxSum = Math.max(maxSum, currentPath);\r\n\r\n    return node.val + Math.max(leftGain, rightGain);\r\n  };\r\n\r\n  dfs(root);\r\n  return maxSum;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(maxPathSum(arrayToTree([-10, 9, 20, null, null, 15, 7]))); // 42\r\nconsole.log(maxPathSum(arrayToTree([1, 2, 3]))); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-19-binary-tree-level-order-traversal-ii",
      children: "Problem 19: Binary Tree Level Order Traversal II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS with unshift per level — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS recursion — needs depth tracking and final reversal\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        children: "Binary Tree Level Order Traversal II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-12-binary-tree-zigzag-level-order-traversal",
        children: "Binary Tree Zigzag Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-12-rotting-oranges",
        children: "Rotting Oranges"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return bottom-up level order (leaf to root)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: [[15, 7], [9, 20], [3]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function levelOrderBottom(root: TreeNode | null): number[][] {\r\n  const result: number[][] = [];\r\n  if (!root) return result;\r\n\r\n  const queue: TreeNode[] = [root];\r\n  while (queue.length > 0) {\r\n    const level: number[] = [];\r\n    const levelSize = queue.length;\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      level.push(node.val);\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n    result.unshift(level);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(levelOrderBottom(arrayToTree([3, 9, 20, null, null, 15, 7])));\r\n// [[15, 7], [9, 20], [3]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-20-count-complete-tree-nodes",
      children: "Problem 20: Count Complete Tree Nodes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, Binary Search]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Binary Search Tree, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive height comparison using completeness — O(log² n) time, O(log n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Full traversal counting — O(n), wastes the complete-tree property\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/count-complete-tree-nodes/",
        children: "Count Complete Tree Nodes"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-2-maximum-depth-of-binary-tree",
        children: "Maximum Depth of Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-7-balanced-binary-tree",
        children: "Balanced Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-21-search-in-rotated-sorted-array",
        children: "Search in Rotated Sorted Array"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count the number of nodes in a complete binary tree in O(n) time (or better)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3, 4, 5, 6]\r\nOutput: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n) is trivial (traverse all). Optimize: use complete tree property — check full height."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countNodes(root: TreeNode | null): number {\r\n  const getDepth = (node: TreeNode | null): number => {\r\n    let depth = 0;\r\n    while (node) {\r\n      depth++;\r\n      node = node.left;\r\n    }\r\n    return depth;\r\n  };\r\n\r\n  if (!root) return 0;\r\n\r\n  const leftDepth = getDepth(root.left);\r\n  const rightDepth = getDepth(root.right);\r\n\r\n  if (leftDepth === rightDepth) {\r\n    return (1 << leftDepth) + countNodes(root.right);\r\n  } else {\r\n    return (1 << rightDepth) + countNodes(root.left);\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(countNodes(arrayToTree([1, 2, 3, 4, 5, 6]))); // 6\r\nconsole.log(countNodes(arrayToTree([]))); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(log² n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(log n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-21-binary-tree-paths",
      children: "Problem 21: Binary Tree Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS carrying path string — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — stores a full path copy per queue node, O(n²) worst-case memory\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-paths/",
        children: "Binary Tree Paths"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-9-path-sum",
        children: "Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-22-sum-root-to-leaf-numbers",
        children: "Sum Root to Leaf Numbers"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/09-backtracking#problem-9-word-search",
        children: "Word Search"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return all root-to-leaf paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3, null, 5]\r\nOutput: [\"1->2->5\", \"1->3\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binaryTreePaths(root: TreeNode | null): string[] {\r\n  const result: string[] = [];\r\n\r\n  const dfs = (node: TreeNode | null, path: string) => {\r\n    if (!node) return;\r\n    if (!node.left && !node.right) {\r\n      result.push(path + node.val);\r\n      return;\r\n    }\r\n    dfs(node.left, path + node.val + '->');\r\n    dfs(node.right, path + node.val + '->');\r\n  };\r\n\r\n  dfs(root, '');\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(binaryTreePaths(arrayToTree([1, 2, 3, null, 5])));\r\n// [\"1->2->5\", \"1->3\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-22-sum-root-to-leaf-numbers",
      children: "Problem 22: Sum Root to Leaf Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Recursive DFS with running sum — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS — O(n) extra queue space carrying partial sums\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        children: "Sum Root to Leaf Numbers"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-9-path-sum",
        children: "Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-21-binary-tree-paths",
        children: "Binary Tree Paths"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/09-backtracking#problem-9-word-search",
        children: "Word Search"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Each root-to-leaf path represents a number. Return total sum of all root-to-leaf numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3]\r\nOutput: 25\r\nExplanation: 12 + 13 = 25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sumNumbers(root: TreeNode | null): number {\r\n  const dfs = (node: TreeNode | null, sum: number): number => {\r\n    if (!node) return 0;\r\n    sum = sum * 10 + node.val;\r\n    if (!node.left && !node.right) return sum;\r\n    return dfs(node.left, sum) + dfs(node.right, sum);\r\n  };\r\n\r\n  return dfs(root, 0);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(sumNumbers(arrayToTree([1, 2, 3]))); // 25\r\nconsole.log(sumNumbers(arrayToTree([4, 9, 0, 5, 1]))); // 1026\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-23-flatten-binary-tree-to-linked-list",
      children: "Problem 23: Flatten Binary Tree to Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, Stack]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Preorder Traversal, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Postorder recursion relinking in place — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Collect preorder into array then relink — O(n) extra space, not in-place\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        children: "Flatten Binary Tree to Linked List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-1-binary-tree-inorder-traversal",
        children: "Binary Tree Inorder Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-25-serialize-and-deserialize-binary-tree",
        children: "Serialize and Deserialize Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-1-reverse-linked-list",
        children: "Reverse Linked List"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Flatten a binary tree to a right-skewed linked list (in-place, preorder order)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 5, 3, 4, null, 6]\r\nOutput: [1, null, 2, null, 3, null, 4, null, 5, null, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function flatten(root: TreeNode | null): void {\r\n  if (!root) return;\r\n\r\n  flatten(root.left);\r\n  flatten(root.right);\r\n\r\n  const tempRight = root.right;\r\n  root.right = root.left;\r\n  root.left = null;\r\n\r\n  let curr = root;\r\n  while (curr.right) curr = curr.right;\r\n  curr.right = tempRight;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const flatTree = arrayToTree([1, 2, 5, 3, 4, null, 6]);\r\nflatten(flatTree);\r\nconsole.log(rightSideView(flatTree)); // [1, 2, 3, 4, 5, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-24-populating-next-right-pointers-in-each-node",
      children: "Problem 24: Populating Next Right Pointers in Each Node"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " BFS level-by-level linking — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS recursion — cannot link next pointers across subtrees without sibling context\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        children: "Populating Next Right Pointers in Each Node"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-14-binary-tree-right-side-view",
        children: "Binary Tree Right Side View"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-10-word-ladder",
        children: "Word Ladder"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Connect each node to its next right node (perfect binary tree)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3, 4, 5, 6, 7]\r\nOutput: [1, #, 2, 3, #, 4, 5, 6, 7, #]\r\n(Each next pointer connects to the right neighbor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NodeWithNext {\r\n  val: number;\r\n  left: NodeWithNext | null;\r\n  right: NodeWithNext | null;\r\n  next: NodeWithNext | null;\r\n  constructor(val?: number, left?: NodeWithNext, right?: NodeWithNext, next?: NodeWithNext) {\r\n    this.val = val ?? 0;\r\n    this.left = left ?? null;\r\n    this.right = right ?? null;\r\n    this.next = next ?? null;\r\n  }\r\n}\r\n\r\nfunction connect(root: NodeWithNext | null): NodeWithNext | null {\r\n  if (!root) return null;\r\n\r\n  const queue: NodeWithNext[] = [root];\r\n  while (queue.length > 0) {\r\n    const levelSize = queue.length;\r\n    for (let i = 0; i < levelSize; i++) {\r\n      const node = queue.shift()!;\r\n      node.next = i < levelSize - 1 ? queue[0] : null;\r\n      if (node.left) queue.push(node.left);\r\n      if (node.right) queue.push(node.right);\r\n    }\r\n  }\r\n\r\n  return root;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-6",
      children: "Hard Problems (6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-25-serialize-and-deserialize-binary-tree",
      children: "Problem 25: Serialize and Deserialize Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, Design, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Tree Serialization, Preorder Traversal, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Preorder DFS with null markers — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Level-order array with trailing nulls — O(2^h) space blow-up on skewed trees\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        children: "Serialize and Deserialize Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-13-construct-binary-tree-from-preorder-and-inorder",
        children: "Construct Binary Tree from Preorder and Inorder"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-1-binary-tree-inorder-traversal",
        children: "Binary Tree Inorder Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-16-encode-and-decode-strings",
        children: "Encode and Decode Strings"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design algorithms to serialize and deserialize a binary tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3, null, null, 4, 5]\r\nOutput: [1, 2, 3, null, null, 4, 5]\r\n(After serialize then deserialize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use preorder traversal with '#' for null nodes and ',' as delimiter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function serialize(root: TreeNode | null): string {\r\n  const result: string[] = [];\r\n\r\n  const dfs = (node: TreeNode | null) => {\r\n    if (!node) {\r\n      result.push('#');\r\n      return;\r\n    }\r\n    result.push(node.val.toString());\r\n    dfs(node.left);\r\n    dfs(node.right);\r\n  };\r\n\r\n  dfs(root);\r\n  return result.join(',');\r\n}\r\n\r\nfunction deserialize(data: string): TreeNode | null {\r\n  const values = data.split(',');\r\n  let index = 0;\r\n\r\n  const dfs = (): TreeNode | null => {\r\n    if (values[index] === '#') {\r\n      index++;\r\n      return null;\r\n    }\r\n    const node = new TreeNode(parseInt(values[index]));\r\n    index++;\r\n    node.left = dfs();\r\n    node.right = dfs();\r\n    return node;\r\n  };\r\n\r\n  return dfs();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const original = arrayToTree([1, 2, 3, null, null, 4, 5]);\r\nconst serialized = serialize(original);\r\nconsole.log(serialized); // \"1,2,#,#,3,4,#,#,5,#,#\"\r\nconst deserialized = deserialize(serialized);\r\nconsole.log(levelOrder(deserialized));\r\n// [[1], [2, 3], [4, 5]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-26-binary-tree-cameras",
      children: "Problem 26: Binary Tree Cameras"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, Greedy, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Postorder DFS greedy with 3 states — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute-force all camera placements — O(2^n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-cameras/",
        children: "Binary Tree Cameras"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-18-binary-tree-maximum-path-sum",
        children: "Binary Tree Maximum Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-17-lowest-common-ancestor-of-a-binary-tree",
        children: "Lowest Common Ancestor of a Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-24-longest-increasing-path-in-a-matrix",
        children: "Longest Increasing Path in a Matrix"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a binary tree, we install cameras on nodes where each camera monitors its parent, itself, and immediate children. Return the minimum number of cameras needed to monitor all nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [0, 0, null, 0, 0]\r\nOutput: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 1000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minCameraCover(root: TreeNode | null): number {\r\n  let cameras = 0;\r\n\r\n  const dfs = (node: TreeNode | null): number => {\r\n    // 0 = uncovered, 1 = covered, 2 = has camera\r\n    if (!node) return 1;\r\n\r\n    const left = dfs(node.left);\r\n    const right = dfs(node.right);\r\n\r\n    if (left === 0 || right === 0) {\r\n      cameras++;\r\n      return 2;\r\n    }\r\n\r\n    if (left === 2 || right === 2) return 1;\r\n\r\n    return 0;\r\n  };\r\n\r\n  if (dfs(root) === 0) cameras++;\r\n  return cameras;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minCameraCover(arrayToTree([0, 0, null, 0, 0]))); // 1\r\nconsole.log(minCameraCover(arrayToTree([0, 0, null, 0, null, 0, null, null, 0]))); // 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-27-binary-tree-maximum-path-sum-with-variations",
      children: "Problem 27: Binary Tree Maximum Path Sum (with variations)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, DFS, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Postorder DFS tracking max gain — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Brute-force check every pair of nodes — O(n²) path computations\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        children: "Binary Tree Maximum Path Sum"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-18-binary-tree-maximum-path-sum",
        children: "Binary Tree Maximum Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-9-path-sum",
        children: "Path Sum"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-3-maximum-subarray-kadanes-algorithm",
        children: "Maximum Subarray"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a binary tree, find the maximum path sum that can start and end at any node. The path must not pass through the same node twice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 2, 3]\r\nOutput: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Already covered as Problem 18 with optimal solution.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-28-recover-binary-search-tree",
      children: "Problem 28: Recover Binary Search Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BST, DFS]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Binary Search Tree, Inorder Traversal, Iterative Traversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Inorder traversal detecting two misplaced nodes — O(n) time, O(h) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Collect full inorder array + sort — O(n) extra space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/recover-binary-search-tree/",
        children: "Recover Binary Search Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-11-validate-binary-search-tree",
        children: "Validate Binary Search Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-1-binary-tree-inorder-traversal",
        children: "Binary Tree Inorder Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-6-valid-parentheses",
        children: "Valid Parentheses"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Two elements of a BST are swapped by mistake. Recover the tree without changing its structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [1, 3, null, null, 2]\r\nOutput: [3, 1, null, null, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inorder traversal identifies two misplaced nodes. Swap their values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function recoverTree(root: TreeNode | null): void {\r\n  let first: TreeNode | null = null;\r\n  let second: TreeNode | null = null;\r\n  let prev: TreeNode | null = null;\r\n\r\n  const inorder = (node: TreeNode | null) => {\r\n    if (!node) return;\r\n    inorder(node.left);\r\n\r\n    if (prev && prev.val > node.val) {\r\n      if (!first) first = prev;\r\n      second = node;\r\n    }\r\n    prev = node;\r\n\r\n    inorder(node.right);\r\n  };\r\n\r\n  inorder(root);\r\n  [first!.val, second!.val] = [second!.val, first!.val];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const broken = arrayToTree([1, 3, null, null, 2]);\r\nrecoverTree(broken);\r\nconsole.log(inorderTraversal(broken)); // [1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(h)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-29-vertical-order-traversal-of-a-binary-tree",
      children: "Problem 29: Vertical Order Traversal of a Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " DFS, Level Order\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " DFS tagging (col, row) + sort — O(n log n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " BFS without coordinate tracking — cannot group nodes by column\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
        children: "Vertical Order Traversal of a Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-5-binary-tree-level-order-traversal",
        children: "Binary Tree Level Order Traversal"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-30-all-nodes-distance-k-in-binary-tree",
        children: "All Nodes Distance K in Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-11-group-anagrams",
        children: "Group Anagrams"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the vertical order traversal from leftmost to rightmost. If two nodes are in the same row and column, sort by value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 9, 20, null, null, 15, 7]\r\nOutput: [[9], [3, 15], [20], [7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function verticalTraversal(root: TreeNode | null): number[][] {\r\n  const nodes: [number, number, number][] = []; // [col, row, val]\r\n\r\n  const dfs = (node: TreeNode | null, row: number, col: number) => {\r\n    if (!node) return;\r\n    nodes.push([col, row, node.val]);\r\n    dfs(node.left, row + 1, col - 1);\r\n    dfs(node.right, row + 1, col + 1);\r\n  };\r\n\r\n  dfs(root, 0, 0);\r\n\r\n  nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);\r\n\r\n  const result: number[][] = [];\r\n  let prevCol = -Infinity;\r\n\r\n  for (const [col, , val] of nodes) {\r\n    if (col !== prevCol) {\r\n      result.push([]);\r\n      prevCol = col;\r\n    }\r\n    result[result.length - 1].push(val);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(verticalTraversal(arrayToTree([3, 9, 20, null, null, 15, 7])));\r\n// [[9], [3, 15], [20], [7]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-30-all-nodes-distance-k-in-binary-tree",
      children: "Problem 30: All Nodes Distance K in Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Tree, BFS, Graph, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " BFS, DFS, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " DFS parent map + BFS from target — O(n) time, O(n) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " DFS downward from target only — misses nodes reachable through ancestors\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
        children: "All Nodes Distance K in Binary Tree"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-17-lowest-common-ancestor-of-a-binary-tree",
        children: "Lowest Common Ancestor of a Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/05-trees#problem-29-vertical-order-traversal-of-a-binary-tree",
        children: "Vertical Order Traversal of a Binary Tree"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a target node, return all nodes at distance K from the target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], target = 5, k = 2\r\nOutput: [7, 4, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build parent map via DFS, then BFS from target node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {\r\n  const parent = new Map<TreeNode, TreeNode | null>();\r\n\r\n  const dfs = (node: TreeNode | null, par: TreeNode | null) => {\r\n    if (!node) return;\r\n    parent.set(node, par);\r\n    dfs(node.left, node);\r\n    dfs(node.right, node);\r\n  };\r\n\r\n  dfs(root, null);\r\n\r\n  const visited = new Set<TreeNode>();\r\n  const queue: [TreeNode, number][] = [[target!, 0]];\r\n  const result: number[] = [];\r\n\r\n  while (queue.length > 0) {\r\n    const [node, dist] = queue.shift()!;\r\n    if (visited.has(node)) continue;\r\n    visited.add(node);\r\n\r\n    if (dist === k) {\r\n      result.push(node.val);\r\n      continue;\r\n    }\r\n\r\n    if (node.left && !visited.has(node.left)) queue.push([node.left, dist + 1]);\r\n    if (node.right && !visited.has(node.right)) queue.push([node.right, dist + 1]);\r\n    const par = parent.get(node);\r\n    if (par && !visited.has(par)) queue.push([par, dist + 1]);\r\n  }\r\n\r\n  return result;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const treeKD = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);\r\nconst target = treeKD!.left; // node with value 5\r\nconsole.log(distanceK(treeKD, target, 2)); // [7, 4, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Inorder Traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level Order Traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted Array to BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced Binary Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invert Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zigzag Level Order"
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
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build Tree from Pre/In"
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
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right Side View"
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
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kth Smallest in BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h+k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCA in BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCA in Binary Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Path Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level Order II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count Complete Nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log² n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Tree Paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum Root to Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten to Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populate Next Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize / Deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Tree Cameras"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max Path Sum (dup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover BST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes Distance K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
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