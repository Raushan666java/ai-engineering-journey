"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[84050],{

/***/ 83234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_05_stacks_md_c92_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-05-stacks-md-c92.json
const site_docs_courses_data_structures_05_stacks_md_c92_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/05-stacks","title":"Chapter 5: Stacks","description":"Previous Doubly Linked List | Next: Queues","source":"@site/docs/courses/data-structures/05-stacks.md","sourceDirName":"courses/data-structures","slug":"/data-structures/05-stacks","permalink":"/ai-engineering-journey/data-structures/05-stacks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-stacks","slug":"/data-structures/05-stacks","title":"Chapter 5: Stacks","sidebar_label":"Chapter 5: Stacks","sidebar_position":5},"sidebar":"course-data-structures","previous":{"title":"Chapter 4: Doubly Linked List and Circular Linked List","permalink":"/ai-engineering-journey/data-structures/04-doubly-linked-list"},"next":{"title":"Chapter 6: Queues","permalink":"/ai-engineering-journey/data-structures/06-queues"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/05-stacks.md


const frontMatter = {
	id: '05-stacks',
	slug: '/data-structures/05-stacks',
	title: 'Chapter 5: Stacks',
	sidebar_label: 'Chapter 5: Stacks',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Stacks';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Stacks Matter",
  "id": "why-stacks-matter",
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
  "value": "Stack ADT",
  "id": "stack-adt",
  "level": 3
}, {
  "value": "Array-Based Stack",
  "id": "array-based-stack",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run: Push &amp; Pop Sequence",
  "id": "dry-run-push--pop-sequence",
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
  "value": "Linked-List-Based Stack",
  "id": "linked-list-based-stack",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run: Push &amp; Pop Sequence",
  "id": "dry-run-push--pop-sequence-1",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
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
  "value": "Array vs Linked Stack: Comparison Table",
  "id": "array-vs-linked-stack-comparison-table",
  "level": 2
}, {
  "value": "Parenthesis Matching",
  "id": "parenthesis-matching",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run: Traces",
  "id": "dry-run-traces",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
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
  "value": "Shunting-Yard: Infix to Postfix Conversion",
  "id": "shunting-yard-infix-to-postfix-conversion",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run: <code>a+b*(c-d)/e</code>",
  "id": "dry-run-abc-de",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
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
  "value": "Postfix Expression Evaluation",
  "id": "postfix-expression-evaluation",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run: <code>23*54*+9-</code>",
  "id": "dry-run-23549-",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
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
  "value": "MinStack (O(1) getMin)",
  "id": "minstack-o1-getmin",
  "level": 2
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Dry Run: push(5), push(2), push(7), push(2), pop(), getMin()",
  "id": "dry-run-push5-push2-push7-push2-pop-getmin",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-5",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation-5",
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
  "value": "Space Optimization",
  "id": "space-optimization",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. MinStack (LeetCode 155)",
  "id": "1-minstack-leetcode-155",
  "level": 3
}, {
  "value": "2. Next Greater Element (NGE)",
  "id": "2-next-greater-element-nge",
  "level": 3
}, {
  "value": "3. Stock Span Problem",
  "id": "3-stock-span-problem",
  "level": 3
}, {
  "value": "4. Two Stacks in One Array",
  "id": "4-two-stacks-in-one-array",
  "level": 3
}, {
  "value": "5. Stack Using Queue",
  "id": "5-stack-using-queue",
  "level": 3
}, {
  "value": "6. The Celebrity Problem",
  "id": "6-the-celebrity-problem",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Call Stack (OS / Runtime)",
  "id": "1-call-stack-os--runtime",
  "level": 3
}, {
  "value": "2. Undo / Redo (Ctrl+Z / Ctrl+Y)",
  "id": "2-undo--redo-ctrlz--ctrly",
  "level": 3
}, {
  "value": "3. Expression Evaluators",
  "id": "3-expression-evaluators",
  "level": 3
}, {
  "value": "4. Depth-First Search (DFS)",
  "id": "4-depth-first-search-dfs",
  "level": 3
}, {
  "value": "5. Browser Back Button",
  "id": "5-browser-back-button",
  "level": 3
}, {
  "value": "6. Syntax Parsing (Compilers)",
  "id": "6-syntax-parsing-compilers",
  "level": 3
}, {
  "value": "7. Memory Management",
  "id": "7-memory-management",
  "level": 3
}, {
  "value": "8. Tower of Hanoi",
  "id": "8-tower-of-hanoi",
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
  "value": "Quick Reference: Stack Use Cases",
  "id": "quick-reference-stack-use-cases",
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
  "value": "TypeScript Stack Implementation",
  "id": "typescript-stack-implementation",
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
  "value": "Stack-Based Backtracking: N-Queens Problem",
  "id": "stack-based-backtracking-n-queens-problem",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Problem: N-Queens",
  "id": "problem-n-queens",
  "level": 3
}, {
  "value": "Algorithm (Iterative Backtracking with Stack)",
  "id": "algorithm-iterative-backtracking-with-stack",
  "level": 3
}, {
  "value": "TypeScript — N-Queens with Iterative Stack",
  "id": "typescript--n-queens-with-iterative-stack",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern-1",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern-1",
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
        id: "chapter-5-stacks",
        children: "Chapter 5: Stacks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/04-doubly-linked-list",
          children: "Chapter 4: Doubly Linked List"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/06-queues",
          children: "Queues"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Stack ADT (Last-In-First-Out)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a stack using arrays and linked lists."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply stacks to expression evaluation, parenthesis matching, and undo functionality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the complexity of each stack operation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-stacks-matter",
      children: "Why Stacks Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Imagine a stack of plates in a cafeteria. You place clean plates on top (push), and when someone needs a plate, they take the topmost one (pop). The plate at the bottom came first but gets used last. This is exactly Last-In-First-Out (LIFO). Another example — a Pringles can: you can only remove the chip that was inserted last. Stacks appear everywhere in computing: the Call Stack tracks where each function should return after it finishes; the Undo stack (Ctrl+Z) remembers your last edit; your browser's Back button pops the previous page off a navigation stack. Without stacks, recursion, expression evaluation, and depth-first search simply would not work."]
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
            children: "LIFO Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last-In-First-Out access order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural fit for undo and backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array-Based Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous memory, dynamic resizing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly, O(1) amortized push/pop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked-List Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes with top pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No resizing overhead, consistent O(1) ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expression Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shunting-yard converts infix to postfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix eval uses one operand stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parenthesis Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push opens, pop and match on close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single stack checks all bracket types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MinStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auxiliary stack tracks minima"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) getMin with O(n) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls, undo, DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in compilers, browsers, parsers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Stack LIFO] --> B[Array vs Linked Implementation]\n    B --> C[Push / Pop / Top O(1)]\n    C --> D[Parenthesis Matching]\n    D --> E[Shunting-Yard: Infix to Postfix]\n    E --> F[Postfix Evaluation]\n    F --> G[MinStack]\n    G --> H[Applications: DFS, Undo, Compilers]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch03-stacks-queues.png",
        alt: "Stacks, Queues and Deques"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-adt",
      children: "Stack ADT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Array-based stacks are cache-friendly and faster for most use cases; linked-list stacks avoid resizing but have higher per-element overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A stack is a linear data structure that supports two primary operations: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "push"
      }), " (insert at the top) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pop"
      }), " (remove from the top). The Last-In-First-Out (LIFO) discipline governs access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core operations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert element x at the top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove and return the top element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "top()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "peek()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the top element without removing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isEmpty()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if the stack is empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the number of elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "array-based-stack",
      children: "Array-Based Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A stack of books on a desk. The books sit in a contiguous pile on a fixed-size desk (array). When the desk gets full, you move to a bigger desk (resize), copying all books in order. The topmost book is the most recently placed one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Allocate an array of initial capacity cap. Set \topIndex = -1 (empty stack)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push(value):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If \topIndex == capacity - 1 (full), resize: allocate new array of 2 * capacity, copy old elements, update capacity."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Increment \topIndex."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Store \u000balue at data[topIndex]."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop():"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If isEmpty(), throw underflow error."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read data[topIndex]."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decrement \topIndex."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Return the read value."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top():"
        }), " If empty, throw error; else return data[topIndex] without modifying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isEmpty():"
        }), " Return \topIndex == -1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\nclass ArrayStack:\ndata: array of T\ncapacity: int\ntopIndex: int = -1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "push(value):\n    if topIndex == capacity - 1:\n        newCap = capacity * 2\n        newData = new array[newCap]\n        for i = 0 to capacity - 1:\n            newData[i] = data[i]\n        data = newData\n        capacity = newCap\n    topIndex = topIndex + 1\n    data[topIndex] = value\n\npop():\n    if isEmpty(): throw \"Stack underflow\"\n    value = data[topIndex]\n    topIndex = topIndex - 1\n    return value\n\ntop():\n    if isEmpty(): throw \"Stack is empty\"\n    return data[topIndex]\n\nisEmpty():\n    return topIndex == -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-push--pop-sequence",
      children: "Dry Run: Push & Pop Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " push(10), push(20), push(30), pop(), top()"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "topIndex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Contents (index:value)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0:10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0:10, 1:20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0:10, 1:20, 2:30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0:10, 1:20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "top()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0:10, 1:20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`cpp\n#include <iostream>\n#include <stdexcept>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "template <typename T>\nclass ArrayStack {\nprivate:\nT* data;\nint capacity;\nint topIndex;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void resize() {\n    int newCap = capacity * 2;\n    T* newData = new T[newCap];\n    for (int i = 0; i &lt; capacity; ++i) newData[i] = data[i];\n    delete[] data;\n    data = newData;\n    capacity = newCap;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public:\nArrayStack(int cap = 4) : capacity(cap), topIndex(-1) {\ndata = new T[capacity];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "~ArrayStack() { delete[] data; }\n\nvoid push(const T& value) {\n    if (topIndex == capacity - 1) resize();\n    data[++topIndex] = value;\n}\n\nT pop() {\n    if (isEmpty()) throw std::out_of_range(\"Stack underflow\");\n    return data[topIndex--];\n}\n\nT top() const {\n    if (isEmpty()) throw std::out_of_range(\"Stack is empty\");\n    return data[topIndex];\n}\n\nbool isEmpty() const { return topIndex == -1; }\nint size() const { return topIndex + 1; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nArrayStack<int> stack;\nstack.push(10);\nstack.push(20);\nstack.push(30);\nstd::cout << \"Top: \" << stack.top() << \"\\n\";\nstd::cout << \"Size: \" << stack.size() << \"\\n\";\nwhile (!stack.isEmpty())\nstd::cout << \"Pop: \" << stack.pop() << \"\\n\";\nreturn 0;\n}\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["`python\nclass ArrayStack:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, cap=4):\nself.data = [None] * cap\nself.capacity = cap\nself.topIndex = -1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def push(self, value):\n    if self.topIndex == self.capacity - 1:\n        self.capacity *= 2\n        new_data = [None] * self.capacity\n        for i in range(len(self.data)):\n            new_data[i] = self.data[i]\n        self.data = new_data\n    self.topIndex += 1\n    self.data[self.topIndex] = value\n\ndef pop(self):\n    if self.isEmpty():\n        raise IndexError(\"Stack underflow\")\n    value = self.data[self.topIndex]\n    self.topIndex -= 1\n    return value\n\ndef top(self):\n    if self.isEmpty():\n        raise IndexError(\"Stack is empty\")\n    return self.data[self.topIndex]\n\ndef isEmpty(self):\n    return self.topIndex == -1\n\ndef size(self):\n    return self.topIndex + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stack = ArrayStack()\nstack.push(10)\nstack.push(20)\nstack.push(30)\nprint(\"Top:\", stack.top())\nprint(\"Size:\", stack.size())\nwhile not stack.isEmpty():\nprint(\"Pop:\", stack.pop())\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`java\nimport java.util.EmptyStackException;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public class ArrayStack<T> {\nprivate T[] data;\nprivate int capacity;\nprivate int topIndex;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@SuppressWarnings(\"unchecked\")\npublic ArrayStack(int cap) {\n    capacity = cap;\n    topIndex = -1;\n    data = (T[]) new Object[capacity];\n}\n\npublic ArrayStack() { this(4); }\n\nprivate void resize() {\n    int newCap = capacity * 2;\n    @SuppressWarnings(\"unchecked\")\n    T[] newData = (T[]) new Object[newCap];\n    for (int i = 0; i &lt; capacity; i++)\n        newData[i] = data[i];\n    data = newData;\n    capacity = newCap;\n}\n\npublic void push(T value) {\n    if (topIndex == capacity - 1) resize();\n    data[++topIndex] = value;\n}\n\npublic T pop() {\n    if (isEmpty()) throw new EmptyStackException();\n    return data[topIndex--];\n}\n\npublic T top() {\n    if (isEmpty()) throw new EmptyStackException();\n    return data[topIndex];\n}\n\npublic boolean isEmpty() { return topIndex == -1; }\npublic int size() { return topIndex + 1; }\n\npublic static void main(String[] args) {\n    ArrayStack&lt;Integer&gt; stack = new ArrayStack&lt;>();\n    stack.push(10);\n    stack.push(20);\n    stack.push(30);\n    System.out.println(\"Top: \" + stack.top());\n    System.out.println(\"Size: \" + stack.size());\n    while (!stack.isEmpty())\n        System.out.println(\"Pop: \" + stack.pop());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (all three languages):"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Top: 30 Size: 3 Pop: 30 Pop: 20 Pop: 10"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "push()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct array write at index; resize costs O(n) but happens rarely - doubling makes amortized cost O(1)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just decrement pointer, no shifting."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index read."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEmpty()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer comparison."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous array holds n elements; may waste up to half the array after a resize."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why amortized O(1)?"
      }), " Each insertion is O(1) except when resize happens (O(n)). Since we double capacity, resizes occur at sizes 1, 2, 4, 8, ... - only log2(n) resizes for n insertions. The total cost of all resizes is O(n), so average per insertion is O(1)."]
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
            children: "Cache-friendly - contiguous memory access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize is O(n) when capacity exhausted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No per-node memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity wastes space if oversized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized push/pop/top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinking is not implemented (wasted space after many pops)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple implementation, fewer pointer operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back-to-back resizes at capacity boundary can cause latency spikes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push to full stack:"
        }), " Triggers resize - O(n) copy, but subsequent pushes are O(1) until next full."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop from empty stack:"
        }), " Must throw underflow - guard with isEmpty() check."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top on empty stack:"
        }), " Must throw - guard with isEmpty()."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " push then pop leaves stack empty; push again works correctly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linked-list-based-stack",
      children: "Linked-List-Based Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A stack of sticky notes where each note has an arrow pointing to the one below it. You stick a new note on top (push) and update the arrow. When you peel the top note off (pop), the arrow redirects to the next one below. Unlike the book stack (array), you never run out of desk space - you just keep adding notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Node"
        }), " struct with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), " pointer fields. Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stackTop = nullptr"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push(value):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create new node with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "data = value"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next = stackTop"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stackTop = new node"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop():"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isEmpty()"
            }), ", throw underflow error."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Save ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stackTop->data"
            }), " in a temporary variable."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "temp = stackTop"
            }), ", advance ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stackTop = stackTop->next"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Delete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "temp"
            }), ", decrement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), ", return saved data."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top():"
        }), " If empty, throw error; else return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stackTop->data"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isEmpty():"
        }), " Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count == 0"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Node:\n    data: T\n    next: Node\n\nclass LinkedStack:\n    stackTop: Node = null\n    count: int = 0\n\n    push(value):\n        newNode = new Node(value)\n        newNode.next = stackTop\n        stackTop = newNode\n        count = count + 1\n\n    pop():\n        if isEmpty(): throw \"Stack underflow\"\n        temp = stackTop\n        value = temp.data\n        stackTop = stackTop.next\n        delete temp\n        count = count - 1\n        return value\n\n    top():\n        if isEmpty(): throw \"Stack is empty\"\n        return stackTop.data\n\n    isEmpty():\n        return count == 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-push--pop-sequence-1",
      children: "Dry Run: Push & Pop Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " push(5), push(15), top(), pop(), push(25), pop(), pop()"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "stackTop points to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top to bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(15)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(15)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 -> 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "top()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(15)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 -> 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 -> 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\n\ntemplate <typename T>\nclass LinkedStack {\nprivate:\n    struct Node {\n        T data;\n        Node* next;\n        Node(const T& value) : data(value), next(nullptr) {}\n    };\n    Node* stackTop;\n    int count;\n\npublic:\n    LinkedStack() : stackTop(nullptr), count(0) {}\n\n    ~LinkedStack() {\n        while (stackTop) {\n            Node* temp = stackTop;\n            stackTop = stackTop->next;\n            delete temp;\n        }\n    }\n\n    void push(const T& value) {\n        Node* newNode = new Node(value);\n        newNode->next = stackTop;\n        stackTop = newNode;\n        ++count;\n    }\n\n    T pop() {\n        if (isEmpty()) throw std::out_of_range(\"Stack underflow\");\n        Node* temp = stackTop;\n        T value = temp->data;\n        stackTop = stackTop->next;\n        delete temp;\n        --count;\n        return value;\n    }\n\n    T top() const {\n        if (isEmpty()) throw std::out_of_range(\"Stack is empty\");\n        return stackTop->data;\n    }\n\n    bool isEmpty() const { return count == 0; }\n    int size() const { return count; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Node:\n    def __init__(self, value):\n        self.data = value\n        self.next = None\n\nclass LinkedStack:\n    def __init__(self):\n        self.stackTop = None\n        self.count = 0\n\n    def push(self, value):\n        newNode = Node(value)\n        newNode.next = self.stackTop\n        self.stackTop = newNode\n        self.count += 1\n\n    def pop(self):\n        if self.isEmpty():\n            raise IndexError(\"Stack underflow\")\n        value = self.stackTop.data\n        self.stackTop = self.stackTop.next\n        self.count -= 1\n        return value\n\n    def top(self):\n        if self.isEmpty():\n            raise IndexError(\"Stack is empty\")\n        return self.stackTop.data\n\n    def isEmpty(self):\n        return self.count == 0\n\n    def size(self):\n        return self.count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.EmptyStackException;\n\npublic class LinkedStack<T> {\n    private class Node {\n        T data;\n        Node next;\n        Node(T value) { data = value; next = null; }\n    }\n    private Node stackTop;\n    private int count;\n\n    public LinkedStack() { stackTop = null; count = 0; }\n\n    public void push(T value) {\n        Node newNode = new Node(value);\n        newNode.next = stackTop;\n        stackTop = newNode;\n        count++;\n    }\n\n    public T pop() {\n        if (isEmpty()) throw new EmptyStackException();\n        T value = stackTop.data;\n        stackTop = stackTop.next;\n        count--;\n        return value;\n    }\n\n    public T top() {\n        if (isEmpty()) throw new EmptyStackException();\n        return stackTop.data;\n    }\n\n    public boolean isEmpty() { return count == 0; }\n    public int size() { return count; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "push()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create node + pointer reassignment - no shifting or copying."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect stackTop to next node, delete old top - constant work."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference stackTop pointer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEmpty()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer comparison."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node stores data + pointer, 2x memory vs array."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(n) for any operation?"
      }), " No traversal, no resize - every operation touches only the top node and the stack pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
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
            children: "No capacity limit (until heap exhaustion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher memory per element (data + pointer overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent O(1) - no resize latency spikes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor cache locality - nodes scattered in heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No wasted space - only stores what it has"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer chasing on pop (dereference, then delete)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple destructor (loop through nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor must traverse entire list (O(n))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop from empty:"
        }), " Must throw underflow - always check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isEmpty()"
        }), " first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push many elements:"
        }), " Works until heap memory is exhausted (std::bad_alloc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single node:"
        }), " push then pop leaves list empty; top after that correctly throws."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destructor on large stack:"
        }), " O(n) cleanup - ensure no exception during destruction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "array-vs-linked-stack-comparison-table",
      children: "Array vs Linked Stack: Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array-Based Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked-List Stack"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 slot (data only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data + pointer (~2x memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (heap-fragmented nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resize cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) copy on overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None - grows node by node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed dynamic max (array size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System heap limit only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 50% after resize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No waste"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, fewer allocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More pointer management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical, embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-size, no latency spikes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parenthesis-matching",
      children: "Parenthesis Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Check if a sentence written with nested parentheses - like ( [ { } ] ) - closes everything in the correct order. Imagine threading a string through each opening bracket; when you hit a closing bracket, the string must pass back through the matching opening. If a closing bracket doesn't match the most recent opening, the string gets tangled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an empty stack."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scan each character ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c"
        }), " in the expression left to right."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c"
        }), " is an opening bracket ", (0,jsx_runtime.jsx)(_components.code, {
          children: "("
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "["
        }), ", push it onto the stack."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c"
        }), " is a closing bracket ", (0,jsx_runtime.jsx)(_components.code, {
          children: ")"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "}"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "]"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If stack is empty -> invalid (no opening bracket to match)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pop the top of the stack."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Check if popped bracket matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "c"
            }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{"
            }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "["
            }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "]"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If mismatch -> invalid."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After scanning all characters: if stack is empty -> valid; otherwise -> invalid (unmatched opening brackets)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function isValidParentheses(s: string) -> bool:\n    stack = empty Stack\n    for each char c in s:\n        if c == '(' or c == '{' or c == '[':\n            stack.push(c)\n        else:  // closing bracket\n            if stack.isEmpty(): return false\n            top = stack.pop()\n            if (c == ')' and top != '(') return false\n            if (c == '}' and top != '{') return false\n            if (c == ']' and top != '[') return false\n    return stack.isEmpty()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-traces",
      children: "Dry Run: Traces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Case 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "({[]})"
        }), " (valid)"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "["
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "["
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "["
            }), " - matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "]"
            }), " OK"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{"
            }), " - matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            }), " OK"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), " - matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            }), " OK"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Final stack empty -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "valid"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Case 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "({[})"
        }), " (invalid)"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "["
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "["
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ ("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "["
            }), " - expects ", (0,jsx_runtime.jsx)(_components.code, {
              children: "]"
            }), " but got ", (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "mismatch"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Return false -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "invalid"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Case 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "((())"
        }), " (incomplete)"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( ("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( ( ("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( ("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop - matches OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop - matches OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stack not empty -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "invalid"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <stack>\n\nbool isMatching(char open, char close) {\n    return (open == '(' && close == ')') ||\n           (open == '{' && close == '}') ||\n           (open == '[' && close == ']');\n}\n\nbool isValidParentheses(const std::string& s) {\n    std::stack<char> st;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            st.push(c);\n        } else if (c == ')' || c == '}' || c == ']') {\n            if (st.empty() || !isMatching(st.top(), c)) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    std::string tests[] = {\"(){}[]\", \"({[]})\", \"({[})\", \"((()))\", \"((())\"};\n    for (const auto& t : tests) {\n        std::cout << t << \" -> \"\n                  << (isValidParentheses(t) ? \"valid\" : \"invalid\") << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def isValidParentheses(s: str) -> bool:\n    matching = {')': '(', '}': '{', ']': '['}\n    stack = []\n    for c in s:\n        if c in '({[':\n            stack.append(c)\n        elif c in ')}]':\n            if not stack or stack[-1] != matching[c]:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\n\ntests = [\"(){}[]\", \"({[]})\", \"({[})\", \"((()))\", \"((())\"]\nfor t in tests:\n    print(f\"{t} -> {'valid' if isValidParentheses(t) else 'invalid'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Stack;\n\npublic class ParenthesisChecker {\n    static boolean isMatching(char open, char close) {\n        return (open == '(' && close == ')') ||\n               (open == '{' && close == '}') ||\n               (open == '[' && close == ']');\n    }\n\n    static boolean isValidParentheses(String s) {\n        Stack<Character> st = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(' || c == '{' || c == '[') {\n                st.push(c);\n            } else if (c == ')' || c == '}' || c == ']') {\n                if (st.isEmpty() || !isMatching(st.pop(), c)) return false;\n            }\n        }\n        return st.isEmpty();\n    }\n\n    public static void main(String[] args) {\n        String[] tests = {\"(){}[]\", \"({[]})\", \"({[})\", \"((()))\", \"((())\"};\n        for (String t : tests)\n            System.out.println(t + \" -> \" + (isValidParentheses(t) ? \"valid\" : \"invalid\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(){}[] -> valid\n({[]}) -> valid\n({[}) -> invalid\n((())) -> valid\n((()) -> invalid\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) - single pass over n characters, each push/pop is O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) - worst case when all characters are opening brackets, stack holds n/2 elements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " We visit each character exactly once; stack operations are constant time. No nested loops."]
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
            children: "Single pass, O(n) time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only checks structural validity, not semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles all bracket types simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails gracefully on mismatch - early exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal code - stack of just one type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not report position of error (can be added)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string:"
        }), " Loop body never executes, stack is empty -> returns true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Only opening brackets:"
        }), " Stack never empties after scan -> returns false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Only closing brackets:"
        }), " First closing bracket finds empty stack -> returns false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single bracket:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "("
        }), " -> false, ", (0,jsx_runtime.jsx)(_components.code, {
          children: ")"
        }), " -> false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermixed characters like letters/digits:"
        }), " Ignored by the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " - only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(){}[]"
        }), " processed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very long string (10^6 chars):"
        }), " Stack may hold 10^6 elements - O(n) memory, risk of stack overflow in recursion-based implementations (iterative approach avoids this)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shunting-yard-infix-to-postfix-conversion",
      children: "Shunting-Yard: Infix to Postfix Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A train shunting yard where railcars are rearranged on sidings (a siding is a stack). In infix notation, operators sit between operands like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b"
      }), ". In postfix (Reverse Polish Notation), operators follow operands like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a b +"
      }), ". The shunting-yard algorithm uses an operator stack (the siding) to reorder the cars: operators wait on the siding until higher-priority operators pass through first. Parentheses act like switches that force the siding to dump its cars."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize an empty stack for operators and an empty string ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the infix expression left to right."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token is an operand (letter/digit), append it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "("
        }), ", push it onto the stack."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token is ", (0,jsx_runtime.jsx)(_components.code, {
          children: ")"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop operators from stack to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "output"
            }), " until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), " is encountered."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop and discard the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token is an operator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^"
        }), "):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["While stack is not empty AND stack top is not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), " AND precedence of stack top >= precedence of token:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Pop stack top to ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "output"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push token onto stack."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After scanning all tokens, pop all remaining operators from stack to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Precedence table:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^"
      }), " = 3, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), " = 2, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " = 1, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "("
      }), " = 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function infixToPostfix(expr: string) -> string:\n    stack = empty Stack\n    output = \"\"\n\n    for each char c in expr:\n        if isOperand(c):\n            output += c\n        else if c == '(':\n            stack.push(c)\n        else if c == ')':\n            while not stack.isEmpty() and stack.top() != '(':\n                output += stack.pop()\n            stack.pop()  // remove '('\n        else:  // operator\n            while not stack.isEmpty() and precedence(stack.top()) >= precedence(c):\n                output += stack.pop()\n            stack.push(c)\n\n    while not stack.isEmpty():\n        output += stack.pop()\n    return output\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-abc-de",
      children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a+b*(c-d)/e"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack empty -> push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " > ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), " -> push"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( * +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( * +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- ( * +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " inside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- ( * +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abcd-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "("
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/ +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abcd-*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " (>=), then push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/ +"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abcd-*e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abcd-*e/+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abcd-*e/+"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <stack>\n#include <cctype>\n\nint precedence(char op) {\n    if (op == '+' || op == '-') return 1;\n    if (op == '*' || op == '/') return 2;\n    if (op == '^') return 3;\n    return 0;\n}\n\nstd::string infixToPostfix(const std::string& expr) {\n    std::stack<char> st;\n    std::string result;\n\n    for (char c : expr) {\n        if (std::isalnum(c)) {\n            result += c;\n        } else if (c == '(') {\n            st.push(c);\n        } else if (c == ')') {\n            while (!st.empty() && st.top() != '(') {\n                result += st.top(); st.pop();\n            }\n            st.pop();\n        } else {\n            while (!st.empty() && precedence(st.top()) >= precedence(c)) {\n                result += st.top(); st.pop();\n            }\n            st.push(c);\n        }\n    }\n\n    while (!st.empty()) {\n        result += st.top(); st.pop();\n    }\n    return result;\n}\n\nint main() {\n    std::string expr = \"a+b*(c-d)/e\";\n    std::cout << \"Infix:   \" << expr << \"\\n\";\n    std::cout << \"Postfix: \" << infixToPostfix(expr) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def precedence(op):\n    if op in ('+', '-'): return 1\n    if op in ('*', '/'): return 2\n    if op == '^': return 3\n    return 0\n\ndef infixToPostfix(expr):\n    stack = []\n    result = []\n    for c in expr:\n        if c.isalnum():\n            result.append(c)\n        elif c == '(':\n            stack.append(c)\n        elif c == ')':\n            while stack and stack[-1] != '(':\n                result.append(stack.pop())\n            stack.pop()\n        else:\n            while stack and precedence(stack[-1]) >= precedence(c):\n                result.append(stack.pop())\n            stack.append(c)\n    while stack:\n        result.append(stack.pop())\n    return ''.join(result)\n\n\nexpr = \"a+b*(c-d)/e\"\nprint(\"Infix:   \", expr)\nprint(\"Postfix: \", infixToPostfix(expr))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Stack;\n\npublic class ShuntingYard {\n    static int precedence(char op) {\n        if (op == '+' || op == '-') return 1;\n        if (op == '*' || op == '/') return 2;\n        if (op == '^') return 3;\n        return 0;\n    }\n\n    static String infixToPostfix(String expr) {\n        Stack<Character> st = new Stack<>();\n        StringBuilder result = new StringBuilder();\n\n        for (char c : expr.toCharArray()) {\n            if (Character.isLetterOrDigit(c)) {\n                result.append(c);\n            } else if (c == '(') {\n                st.push(c);\n            } else if (c == ')') {\n                while (!st.isEmpty() && st.peek() != '(')\n                    result.append(st.pop());\n                st.pop();\n            } else {\n                while (!st.isEmpty() && precedence(st.peek()) >= precedence(c))\n                    result.append(st.pop());\n                st.push(c);\n            }\n        }\n\n        while (!st.isEmpty())\n            result.append(st.pop());\n\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        String expr = \"a+b*(c-d)/e\";\n        System.out.println(\"Infix:   \" + expr);\n        System.out.println(\"Postfix: \" + infixToPostfix(expr));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Infix:   a+b*(c-d)/e\nPostfix: abcd-*e/+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) - each character is pushed and popped at most once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) - the operator stack holds at most n operators in worst case (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a+b+c+d+..."
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " Each token is processed once. Push/pop on stack is O(1). The inner ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop pops operators, but each operator is pushed exactly once, so total pops across the entire run is <= n."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
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
            children: "O(n) time, single pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles only single-character operators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Produces parentheses-free postfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes correct associativity (left-to-right for +,-,*,/)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator precedence is extensible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not handle function calls or commas without extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for expression evaluators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output requires a second pass for evaluation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty expression:"
        }), " Returns empty string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single operand:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " (no change)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single operator:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a+b"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ab+"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested parentheses:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "((a+b)*c)"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ab+c*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Unmatched ", (0,jsx_runtime.jsx)(_components.code, {
            children: "("
          }), ":"]
        }), " Stack will not be empty at end - remaining ", (0,jsx_runtime.jsx)(_components.code, {
          children: "("
        }), " is popped to output, producing incorrect postfix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Unmatched ", (0,jsx_runtime.jsx)(_components.code, {
            children: ")"
          }), ":"]
        }), " Stack is empty but ", (0,jsx_runtime.jsx)(_components.code, {
          children: ")"
        }), " encountered - stack top check fails; requires input validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consecutive operators:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a+-b"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a+b-"
        }), " which may not match semantics (unary minus not handled)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postfix-expression-evaluation",
      children: "Postfix Expression Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A calculator that works with Reverse Polish Notation (RPN). HP calculators use RPN - you enter numbers, press Enter to push them onto an operand stack, then press an operator that pops the top two, computes, and pushes the result. This mirrors exactly how the stack evaluates postfix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an empty stack for operands."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the postfix expression left to right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If token is an operand (digit), push it onto the stack (as integer)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If token is an operator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), "):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " (top), then pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " (next) - note order: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " was pushed first."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a operator b"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push the result back onto the stack."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After scanning all tokens, the stack should contain exactly one value - the result."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Division handling:"
      }), " Use integer division for this example; in real systems, use float."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function evaluatePostfix(expr: string) -> int:\n    stack = empty Stack\n\n    for each char c in expr:\n        if isDigit(c):\n            stack.push(int(c) - int('0'))\n        else:\n            b = stack.pop()\n            a = stack.pop()\n            if c == '+': stack.push(a + b)\n            if c == '-': stack.push(a - b)\n            if c == '*': stack.push(a * b)\n            if c == '/': stack.push(a / b)\n\n    return stack.pop()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-23549-",
      children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "23*54*+9-"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expression:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2 3 * 5 4 * + 9 -"
      }), " = (2x3) + (5x4) - 9 = 6 + 20 - 9 = 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 3, pop 2, 2x3=6, push result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 5 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 4, pop 5, 5x4=20, push result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 20, pop 6, 6+20=26, push result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 9, pop 26, 26-9=17, push result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 17"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <stack>\n#include <cctype>\n\nint evaluatePostfix(const std::string& expr) {\n    std::stack<int> st;\n    for (char c : expr) {\n        if (std::isdigit(c)) {\n            st.push(c - '0');\n        } else {\n            int b = st.top(); st.pop();\n            int a = st.top(); st.pop();\n            switch (c) {\n                case '+': st.push(a + b); break;\n                case '-': st.push(a - b); break;\n                case '*': st.push(a * b); break;\n                case '/': st.push(a / b); break;\n                default: throw std::invalid_argument(\"Unknown operator\");\n            }\n        }\n    }\n    return st.top();\n}\n\nint main() {\n    std::string expr = \"23*54*+9-\";\n    std::cout << \"Postfix: \" << expr << \" = \" << evaluatePostfix(expr) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluatePostfix(expr):\n    stack = []\n    for c in expr:\n        if c.isdigit():\n            stack.append(int(c))\n        else:\n            b = stack.pop()\n            a = stack.pop()\n            if c == '+': stack.append(a + b)\n            elif c == '-': stack.append(a - b)\n            elif c == '*': stack.append(a * b)\n            elif c == '/': stack.append(a // b)  # integer division\n    return stack[0]\n\n\nexpr = \"23*54*+9-\"\nprint(f\"Postfix: {expr} = {evaluatePostfix(expr)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Stack;\n\npublic class PostfixEvaluator {\n    static int evaluatePostfix(String expr) {\n        Stack<Integer> st = new Stack<>();\n        for (char c : expr.toCharArray()) {\n            if (Character.isDigit(c)) {\n                st.push(c - '0');\n            } else {\n                int b = st.pop();\n                int a = st.pop();\n                switch (c) {\n                    case '+': st.push(a + b); break;\n                    case '-': st.push(a - b); break;\n                    case '*': st.push(a * b); break;\n                    case '/': st.push(a / b); break;\n                }\n            }\n        }\n        return st.pop();\n    }\n\n    public static void main(String[] args) {\n        String expr = \"23*54*+9-\";\n        System.out.println(\"Postfix: \" + expr + \" = \" + evaluatePostfix(expr));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Postfix: 23*54*+9- = 17\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) - single pass, each push/pop is O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) - stack holds at most the number of operands."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " Exactly n tokens, each processed once with O(1) operations. The stack never exceeds the operand count (about n/2 in worst case)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
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
            children: "No parentheses needed - operator order is unambiguous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires conversion from infix first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-stack, single-pass evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-character operands in this example (can be extended to multi-digit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic - no precedence rules to evaluate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division truncation depends on language (integer vs float)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in real HP calculators and some compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error recovery is difficult - malformed expressions crash"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single operand:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5"
        }), " -> result is 5."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single operator requires two operands:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5+"
        }), " - pop fails, underflow -> error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division by zero:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "50/"
        }), " - runtime error (integer division by zero)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insufficient operands:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "34+5"
        }), " - stack ends with 2 values, extra operand signals malformed expression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-digit numbers:"
        }), " Not handled by single-char parsing - need delimiter-aware tokenizer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative results:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "32-"
        }), " -> -1 - handled naturally by subtraction order: a - b where a was first operand."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minstack-o1-getmin",
      children: "MinStack (O(1) getMin)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A stack of boxes where each box has a label showing the smallest weight among all boxes below it, including itself. When you add a new box, you compare its weight against the current minimum label - if lighter, the new label is its own weight; otherwise, the label copies the previous minimum. This way, you always know the lightest box without searching the whole pile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintain two stacks: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mainStack"
        }), " (all elements) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minStack"
        }), " (running minima)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "push(value):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), " onto ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mainStack"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minStack"
            }), " is empty OR ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value <= minStack.top()"
            }), ", push ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), " onto ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minStack"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pop():"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mainStack"
            }), ". If the popped value equals ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minStack.top()"
            }), ", also pop ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minStack"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "top():"
        }), " Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mainStack.top()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "getMin():"
        }), " Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minStack.top()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MinStack:\n    mainStack: Stack\n    minStack: Stack\n\n    push(value):\n        mainStack.push(value)\n        if minStack.isEmpty() or value <= minStack.top():\n            minStack.push(value)\n\n    pop():\n        if mainStack.isEmpty(): throw \"Stack underflow\"\n        value = mainStack.pop()\n        if value == minStack.top():\n            minStack.pop()\n        return value\n\n    top():\n        return mainStack.top()\n\n    getMin():\n        if minStack.isEmpty(): throw \"No minimum\"\n        return minStack.top()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-push5-push2-push7-push2-pop-getmin",
      children: "Dry Run: push(5), push(2), push(7), push(2), pop(), getMin()"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mainStack (top->bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "minStack (top->bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "getMin()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7, 2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 5 (7 > 2, no push)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 7, 2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 2, 5 (2 <= 2, push)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7, 2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 5 (popped 2 == min top 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getMin()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7, 2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-5",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stack>\n#include <stdexcept>\n\nclass MinStack {\nprivate:\n    std::stack<int> mainStack;\n    std::stack<int> minStack;\n\npublic:\n    void push(int value) {\n        mainStack.push(value);\n        if (minStack.empty() || value <= minStack.top())\n            minStack.push(value);\n    }\n\n    int pop() {\n        if (mainStack.empty()) throw std::out_of_range(\"Stack underflow\");\n        int value = mainStack.top(); mainStack.pop();\n        if (value == minStack.top()) minStack.pop();\n        return value;\n    }\n\n    int top() {\n        if (mainStack.empty()) throw std::out_of_range(\"Stack is empty\");\n        return mainStack.top();\n    }\n\n    int getMin() {\n        if (minStack.empty()) throw std::out_of_range(\"No minimum element\");\n        return minStack.top();\n    }\n};\n\nint main() {\n    MinStack ms;\n    ms.push(5); ms.push(2); ms.push(7); ms.push(2);\n    std::cout << \"getMin: \" << ms.getMin() << \"\\n\";  // 2\n    ms.pop();\n    std::cout << \"getMin: \" << ms.getMin() << \"\\n\";  // 2\n    ms.pop();\n    std::cout << \"getMin: \" << ms.getMin() << \"\\n\";  // 2\n    ms.pop();\n    std::cout << \"getMin: \" << ms.getMin() << \"\\n\";  // 5\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MinStack:\n    def __init__(self):\n        self.mainStack = []\n        self.minStack = []\n\n    def push(self, value):\n        self.mainStack.append(value)\n        if not self.minStack or value <= self.minStack[-1]:\n            self.minStack.append(value)\n\n    def pop(self):\n        if not self.mainStack:\n            raise IndexError(\"Stack underflow\")\n        value = self.mainStack.pop()\n        if value == self.minStack[-1]:\n            self.minStack.pop()\n        return value\n\n    def top(self):\n        if not self.mainStack:\n            raise IndexError(\"Stack is empty\")\n        return self.mainStack[-1]\n\n    def getMin(self):\n        if not self.minStack:\n            raise IndexError(\"No minimum element\")\n        return self.minStack[-1]\n\n\nms = MinStack()\nfor v in [5, 2, 7, 2]:\n    ms.push(v)\nprint(\"getMin:\", ms.getMin())  # 2\nms.pop()\nprint(\"getMin:\", ms.getMin())  # 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation-5",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Stack;\n\nclass MinStack {\n    private Stack<Integer> mainStack;\n    private Stack<Integer> minStack;\n\n    public MinStack() {\n        mainStack = new Stack<>();\n        minStack = new Stack<>();\n    }\n\n    public void push(int value) {\n        mainStack.push(value);\n        if (minStack.isEmpty() || value <= minStack.peek())\n            minStack.push(value);\n    }\n\n    public int pop() {\n        if (mainStack.isEmpty()) throw new RuntimeException(\"Stack underflow\");\n        int value = mainStack.pop();\n        if (value == minStack.peek()) minStack.pop();\n        return value;\n    }\n\n    public int top() {\n        if (mainStack.isEmpty()) throw new RuntimeException(\"Stack is empty\");\n        return mainStack.peek();\n    }\n\n    public int getMin() {\n        if (minStack.isEmpty()) throw new RuntimeException(\"No minimum element\");\n        return minStack.peek();\n    }\n}\n"
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
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two stack pushes (main + conditional min) - all O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One main pop + conditional min pop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct stack peek"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getMin()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct minStack peek - the key advantage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two stacks, but minStack <= mainStack always"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(1) without an aux stack?"
      }), " If we stored min in a single variable, a pop that removes the current minimum would require scanning the remaining stack to find the new min - O(n). The auxiliary stack trades O(n) extra space for O(1) getMin."]
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
            children: "O(1) for all operations including getMin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) extra space (duplicated minima)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, intuitive aux-stack approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space optimization possible (store pairs or diff encoding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with standard stack libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates repeated values (can be optimized to store count, not copies)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty stack getMin():"
        }), " Must throw - no elements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " Both stacks hold the same value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate minima:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5, 2, 2"
        }), " - both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        }), "s are pushed to minStack; pop removes only one, preserving the other ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        }), " as min."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Descending sequence:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5, 4, 3, 2, 1"
        }), " - every push adds to minStack (O(n) space)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ascending sequence:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1, 2, 3, 4, 5"
        }), " - minStack stays at size 1 (only the first ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "space-optimization",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If duplicates are frequent, store ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pair(value, count)"
      }), " in minStack instead of bare values. Push when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value < minStack.top().value"
      }), "; increment count when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value == minStack.top().value"
      }), "; decrement count on matching pop. This reduces worst-case space for repeated values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-minstack-leetcode-155",
      children: "1. MinStack (LeetCode 155)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Already covered above - the aux-stack solution is the standard approach expected in interviews."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-next-greater-element-nge",
      children: "2. Next Greater Element (NGE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array, find the next greater element for each element. The next greater element is the first larger element to its right. If none exists, output -1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[4, 5, 2, 10, 8]"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[5, 10, 10, -1, -1]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize an empty stack and an array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result"
        }), " filled with -1."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the array left to right."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While stack is not empty AND ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[i] > arr[stack.top()]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result[stack.top()] = arr[i]"
        }), " and pop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " onto the stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "vector<int> nextGreaterElement(const vector<int>& arr) {\n    vector<int> result(arr.size(), -1);\n    stack<int> st;\n    for (int i = 0; i < arr.size(); ++i) {\n        while (!st.empty() && arr[i] > arr[st.top()]) {\n            result[st.top()] = arr[i];\n            st.pop();\n        }\n        st.push(i);\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-stock-span-problem",
      children: "3. Stock Span Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " The stock span is the number of consecutive days a stock price is less than or equal to the current day's price before it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Use a stack of indices. For each day, pop all indices where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "price[top] <= price[current]"
      }), ". The span is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "current - stack.top()"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "current + 1"
      }), " if stack is empty)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "vector<int> stockSpan(const vector<int>& prices) {\n    vector<int> span(prices.size());\n    stack<int> st;\n    for (int i = 0; i < prices.size(); ++i) {\n        while (!st.empty() && prices[st.top()] <= prices[i])\n            st.pop();\n        span[i] = st.empty() ? i + 1 : i - st.top();\n        st.push(i);\n    }\n    return span;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[100, 80, 60, 70, 60, 75, 85]"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 1, 1, 2, 1, 4, 6]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-two-stacks-in-one-array",
      children: "4. Two Stacks in One Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement two stacks in a single array efficiently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use one array of size n with two pointers: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top1 = -1"
      }), " (left stack grows right) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top2 = n"
      }), " (right stack grows left). Stack overflows when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top1 + 1 == top2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class TwoStacks {\nprivate:\n    int* arr;\n    int capacity;\n    int top1, top2;\npublic:\n    TwoStacks(int n) : capacity(n), top1(-1), top2(n) {\n        arr = new int[n];\n    }\n\n    void push1(int x) {\n        if (top1 + 1 == top2) throw overflow_error(\"Stack overflow\");\n        arr[++top1] = x;\n    }\n\n    void push2(int x) {\n        if (top1 + 1 == top2) throw overflow_error(\"Stack overflow\");\n        arr[--top2] = x;\n    }\n\n    int pop1() {\n        if (top1 == -1) throw underflow_error(\"Stack underflow\");\n        return arr[top1--];\n    }\n\n    int pop2() {\n        if (top2 == capacity) throw underflow_error(\"Stack underflow\");\n        return arr[top2++];\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-stack-using-queue",
      children: "5. Stack Using Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement a stack using only queues."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach (single queue):"
      }), " On push, push the new element, then rotate the queue by popping and re-pushing all existing elements. This makes the newest element the front of the queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class StackUsingQueue {\nprivate:\n    queue<int> q;\npublic:\n    void push(int x) {\n        q.push(x);\n        for (int i = 0; i < q.size() - 1; ++i) {\n            q.push(q.front());\n            q.pop();\n        }\n    }\n    int pop() {\n        int val = q.front(); q.pop();\n        return val;\n    }\n    int top() { return q.front(); }\n    bool empty() { return q.empty(); }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " push = O(n), pop = O(1), top = O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-the-celebrity-problem",
      children: "6. The Celebrity Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " In a party of n people, a celebrity is someone known by everyone but knows no one. Find the celebrity with minimum questions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm (stack-based):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push all people 0..n-1 onto a stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While stack has >= 2 people: pop A and B. If A knows B, A is not celebrity -> push B back. If A does not know B, B is not celebrity -> push A back."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The last remaining candidate must be verified by checking all others."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int findCelebrity(int n, vector<vector<int>>& knows) {\n    stack<int> st;\n    for (int i = 0; i < n; ++i) st.push(i);\n\n    while (st.size() > 1) {\n        int a = st.top(); st.pop();\n        int b = st.top(); st.pop();\n        if (knows[a][b]) st.push(b);\n        else st.push(a);\n    }\n\n    int candidate = st.top();\n    for (int i = 0; i < n; ++i) {\n        if (i != candidate && (!knows[i][candidate] || knows[candidate][i]))\n            return -1;\n    }\n    return candidate;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-call-stack-os--runtime",
      children: "1. Call Stack (OS / Runtime)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every function call pushes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack frame"
      }), " containing return address, local variables, and parameters onto the call stack. When a function returns, its frame is popped. Deep recursion causes stack overflow - the OS terminates the process. This is the most fundamental stack in computing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-undo--redo-ctrlz--ctrly",
      children: "2. Undo / Redo (Ctrl+Z / Ctrl+Y)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text editors and IDEs maintain a stack of states. Each edit pushes a snapshot. Ctrl+Z pops the last state and restores it. Often paired with a redo stack: undo pops from undo stack and pushes onto redo stack; redo does the reverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-expression-evaluators",
      children: "3. Expression Evaluators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compilers convert infix expressions to postfix (shunting-yard) and evaluate them with a stack (postfix evaluation). Calculators, spreadsheet formula engines, and database query optimizers all use stack-based expression evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-depth-first-search-dfs",
      children: "4. Depth-First Search (DFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph traversal uses a stack explicitly (iterative DFS) or implicitly through recursion (the call stack). The stack tracks which vertices to visit next. Backtracking algorithms (maze solving, N-Queens) are DFS on the solution space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-browser-back-button",
      children: "5. Browser Back Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Browsers push visited URLs onto a navigation stack. The Back button pops the top URL and navigates to it. Forward navigation uses a second stack: Back pushes onto the forward stack; Forward pops from it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-syntax-parsing-compilers",
      children: "6. Syntax Parsing (Compilers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compilers use operator-precedence parsers that are essentially stack automata. JSON/XML parsers use stacks to track tag/brace nesting. HTML validators use stacks to ensure proper tag closure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-memory-management",
      children: "7. Memory Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Garbage collectors (Java, Go) use a stack of root references during mark phase. The thread scheduler maintains a run queue per thread (though it is a deque, not a pure stack)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-tower-of-hanoi",
      children: "8. Tower of Hanoi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The classic recursive puzzle models the LIFO constraint - a disk can only be placed on top of a larger disk, matching stack push/pop semantics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Stack overflow from deep recursion can be avoided by converting to an explicit iterative stack - this is critical for processing large datasets without crashing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use a stack to detect balanced brackets"
        }), ": Push opening brackets; pop and match on closing. If the stack isn't empty at the end, or the wrong bracket is on top - invalid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Postfix evaluation is stack's killer app"
        }), ": Push operands; when you see an operator, pop two operands, apply, push result. One stack, no recursion, no parentheses needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "getMin() in O(1) needs an auxiliary stack"
        }), ": The main stack holds values; the min stack tracks the current minimum at each level. On pop, if the popped value equals the min stack's top, pop the min stack too."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack overflow = recursion too deep"
        }), ": Every recursive call pushes a stack frame. Deep recursion (10k+ levels) overflows the call stack. Convert to explicit stack iteration for large inputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonic stack pattern"
        }), ": For problems like Next Greater Element or Stock Span, a monotonic (decreasing/increasing) stack reduces O(n^2) brute-force to O(n). The stack holds indices, and elements are popped when a larger/smaller element is found."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIFO means the last pushed element is the first popped."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array stacks use less memory; linked stacks never overflow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balanced parentheses are checked with a single stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Postfix expression evaluation uses a single stack of operands."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shunting-yard converts infix to postfix via operator stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MinStack uses an auxiliary stack for O(1) getMin."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stacks model recursion, undo, and depth-first search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monotonic stacks solve NGE and stock span in O(n) time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array-based Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked Stack"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous (may overallocate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-node allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resizes dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never (until heap full)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-element memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 words (data + pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (delete[] array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (traverse all nodes)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-stack-use-cases",
      children: "Quick Reference: Stack Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Stack Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced parentheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push opens, pop on close, check match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push operands, pop for operator, push result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infix to Postfix (Shunting-yard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator precedence stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit stack of nodes to visit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undo (Ctrl+Z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack of previous states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call stack (function calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return addresses + local variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next Greater Element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic stack of indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stock Span"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic stack, span = index - stack.top"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MinStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auxiliary stack of minima"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser back button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack of visited URLs"
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
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Justification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expression parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infix to postfix conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undo system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push states, pop to undo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO for backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back-button navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push pages, pop for back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion emulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulate call stack iteratively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL dual-stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back + forward stacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code editor undo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push edits, pop to revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler syntax analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse-tree construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function return management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Forgetting to check isEmpty before pop/top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calling pop on empty stack causes underflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always guard with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (isEmpty()) throw ..."
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using recursion when an explicit stack would be safer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep recursion overflows the call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to iterative stack for depth > 1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing stack growth direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack can grow upward (increasing index) or downward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose one convention and be consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not resizing the array stack when full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwriting memory beyond buffer leads to corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check cap and double before push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming push is always O(1) (ignoring resize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When capacity is exhausted, resize costs O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use amortized analysis: O(1) amortized, O(n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Popping from a linked-stack but deleting the wrong node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must save temp pointer before moving stackTop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "temp = stackTop; stackTop = stackTop.next; delete temp;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-stack-implementation",
      children: "TypeScript Stack Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IStack<T> {\n    push(item: T): void;\n    pop(): T | undefined;\n    peek(): T | undefined;\n    isEmpty(): boolean;\n    size(): number;\n}\n\nclass ArrayStack<T> implements IStack<T> {\n    private data: T[] = [];\n    push(item: T): void { this.data.push(item); }\n    pop(): T | undefined { return this.data.pop(); }\n    peek(): T | undefined { return this.data[this.data.length - 1]; }\n    isEmpty(): boolean { return this.data.length === 0; }\n    size(): number { return this.data.length; }\n}\n\nclass LinkedStack<T> implements IStack<T> {\n    private top: { data: T; next: any } | null = null;\n    private _size: number = 0;\n\n    push(item: T): void {\n        this.top = { data: item, next: this.top };\n        this._size++;\n    }\n\n    pop(): T | undefined {\n        if (!this.top) return undefined;\n        const item = this.top.data;\n        this.top = this.top.next;\n        this._size--;\n        return item;\n    }\n\n    peek(): T | undefined { return this.top?.data; }\n    isEmpty(): boolean { return this._size === 0; }\n    size(): number { return this._size; }\n}\n\n// MinStack with O(1) getMin\nclass MinStack {\n    private stack: number[] = [];\n    private mins: number[] = [];\n\n    push(val: number): void {\n        this.stack.push(val);\n        if (this.mins.length === 0 || val <= this.mins[this.mins.length - 1]) {\n            this.mins.push(val);\n        }\n    }\n\n    pop(): number | undefined {\n        if (this.stack.length === 0) return undefined;\n        const val = this.stack.pop()!;\n        if (val === this.mins[this.mins.length - 1]) this.mins.pop();\n        return val;\n    }\n\n    peek(): number | undefined { return this.stack[this.stack.length - 1]; }\n    getMin(): number | undefined { return this.mins[this.mins.length - 1]; }\n}\n\n// Parenthesis matching\nfunction isValidParentheses(s: string): boolean {\n    const stack: string[] = [];\n    const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };\n    for (const c of s) {\n        if ('({['.includes(c)) stack.push(c);\n        else if (')}]'.includes(c)) {\n            if (stack.pop() !== map[c]) return false;\n        }\n    }\n    return stack.length === 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the minimum number of stacks needed to implement a queue?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 2 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 4"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is NOT an application of stacks?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Function call management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Breadth-First Search ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Expression evaluation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Undo operation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In the linked-list stack implementation, where does push insert the new node?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) At the tail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) At the head ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) At the middle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) After traversing to the end"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What is the time complexity of the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getMin()"
            }), " operation in the MinStack design?"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(1) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["The postfix expression ", (0,jsx_runtime.jsx)(_components.code, {
              children: "23*54*+"
            }), " evaluates to:"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 26 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 30"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 17"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 22"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack overflow typically occurs when:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The linked stack runs out of heap memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The recursion depth exceeds the call stack limit ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The array stack is full"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Both a and c"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 8-b, 9-b, 10-b, 11-c, 12-a, 13-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement two stacks in one array"
          }), ": Design a data structure that supports two stacks using a single array. Both stacks should use O(1) push/pop/peek."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sort a stack using another stack"
          }), ": Given a stack, sort it in ascending order (largest at top) using only one additional stack and no other data structures."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reverse a stack using recursion"
          }), ": Reverse the contents of a stack without using any loop or extra stack. Use only recursion and the stack's own push/pop operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check for balanced brackets with multiple types"
          }), ": Extend the bracket matching to handle ", (0,jsx_runtime.jsx)(_components.code, {
            children: "()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{}"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[]"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<>"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "«»"
          }), " — any set of matching pairs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Infix to prefix conversion"
          }), ": Modify the shunting-yard algorithm to produce prefix (Polish) notation instead of postfix."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Evaluate prefix expression"
          }), ": Given a prefix expression (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+ * 2 3 5"
          }), "), evaluate it using a stack."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Largest rectangle in a histogram"
          }), ": Given an array of bar heights, find the largest rectangular area possible. Solve in O(n) using a stack."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Next smaller element"
          }), ": For each element in an array, find the next smaller element to its right. Use a stack for O(n) solution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum area of a submatrix with all 1s"
          }), ": Given a binary matrix, find the maximum area of a submatrix containing all 1s. Use stack-based histogram for each row."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remove duplicate letters"
          }), ": Given a string, remove duplicate letters to produce the smallest lexicographic result. Use a monotonic stack approach."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Linear Input, Fixed Output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Long In, First Out"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of stack push (array-based, amortized)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n^2)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which algorithm converts infix to postfix?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Floyd's algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Shunting-yard"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Dijkstra's algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Kahn's algorithm"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3 4 + 2 *"
            }), " evaluates to:"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 14"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 9"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 7"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A MinStack with O(1) getMin() uses:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Two stacks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Two queues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Hash table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Binary tree"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does the monotonic stack pattern optimize?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Sorting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) NGE and stock span"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Binary search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Heap operations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which is NOT an application of stacks?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Browser back button"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Undo in text editors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Shortest path in weighted graphs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Function call management"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-a, 2-a, 3-b, 4-b, 5-a, 6-b, 7-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stack-based-backtracking-n-queens-problem",
      children: "Stack-Based Backtracking: N-Queens Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maze explorer"
      }), " who places breadcrumbs at each fork. When they hit a dead end, they backtrack to the last fork (pop the breadcrumb) and try a different path. Stacks naturally model this backtracking: each choice is pushed onto the stack; when a dead end is reached, the choice is popped and the next alternative is tried."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-n-queens",
      children: "Problem: N-Queens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Place N queens on an N×N chessboard such that no two queens attack each other. Queens attack along rows, columns, and diagonals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-iterative-backtracking-with-stack",
      children: "Algorithm (Iterative Backtracking with Stack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push an empty board state (row = 0, no queens placed)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While the stack is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pop the current state (row, column placements)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If row == N: a solution is found — print and continue."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each column c from 0 to N-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If placing a queen at (row, c) is safe (no conflicts with existing queens):\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Push (row + 1, placements + [c]) onto the stack."
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Start[\"Start: row = 0\"] --> TryCol[\"Try column c = 0..N-1\"]\n    TryCol --> Safe{\"Is (row, c) safe?<br/>Check col, diag1, diag2\"}\n    Safe -->|No| NextCol[\"c++ → try next column\"]\n    NextCol --> TryCol\n    Safe -->|Yes| Place[\"Place queen at (row, c)\"]\n    Place --> Check{\"row == N-1?\"}\n    Check -->|Yes| Solution[\"Print solution<br/>(Found!)\"]\n    Check -->|No| NextRow[\"row++ → recurse/push\"]\n    NextRow --> TryCol\n    Solution --> Backtrack[\"Backtrack: pop state,<br/>try next column\"]\n    Backtrack --> TryCol\n    NextCol --> LastCol{\"All columns tried?\"}\n    LastCol -->|Yes| DeadEnd[\"Dead end → backtrack\"]\n    DeadEnd --> Backtrack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript--n-queens-with-iterative-stack",
      children: "TypeScript — N-Queens with Iterative Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function solveNQueens(n: number): string[][] {\n    const solutions: string[][] = [];\n\n    // Stack entry: [row, columns_placed_so_far]\n    type State = [number, number[]];\n    const stack: State[] = [[0, []]];\n\n    while (stack.length > 0) {\n        const [row, cols] = stack.pop()!;\n\n        if (row === n) {\n            // Found a complete solution\n            const board: string[] = cols.map(c =>\n                '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)\n            );\n            solutions.push(board);\n            continue;\n        }\n\n        // Try columns in reverse so first valid column is on top\n        for (let c = n - 1; c >= 0; c--) {\n            if (isSafe(row, c, cols)) {\n                stack.push([row + 1, [...cols, c]]);\n            }\n        }\n    }\n\n    return solutions;\n}\n\nfunction isSafe(row: number, col: number, queens: number[]): boolean {\n    for (let r = 0; r < queens.length; r++) {\n        const c = queens[r];\n        // Same column or same diagonal\n        if (c === col || Math.abs(c - col) === Math.abs(r - row)) {\n            return false;\n        }\n    }\n    return true;\n}\n\n// Solve 4-Queens\nconst solutions = solveNQueens(4);\nconsole.log(`Found ${solutions.length} solutions for 4-Queens:`);\nsolutions.forEach((board, idx) => {\n    console.log(`\\nSolution ${idx + 1}:`);\n    board.forEach(row => console.log(row));\n});\n\n// Output:\n// Found 2 solutions for 4-Queens:\n// Solution 1:   Solution 2:\n// .Q..          ..Q.\n// ...Q          Q...\n// Q...          ...Q\n// ..Q.          .Q..\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
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
            children: "Time (N-Queens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First queen: N choices, second: N-2, third: N-4... ~N!/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack may hold multiple partial states; depth at most N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much better in practice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early conflict detection eliminates most branches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern-1",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does the stack in iterative N-Queens backtracking store?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Only the current row number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) All board configurations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Partial placements (row + column choices) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The number of conflicts"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is NOT a valid use of backtracking with stacks?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Maze solving"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Sudoku solver"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Sorting an array ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Generating all permutations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In the N-Queens problem, the isSafe check ensures:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) No two queens share the same row"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) No two queens share the same column or diagonal ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Queens are in ascending order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The board is symmetric"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 14-c, 15-c, 16-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern-1",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rat in a Maze"
          }), ": Given an N×N maze with blocked cells (0) and open cells (1), find a path from (0,0) to (N-1,N-1) using stack-based backtracking. The rat can move in four directions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generate all valid parentheses combinations"
          }), ": Given n pairs of parentheses, generate all valid combinations (e.g., n=3 → [\"((()))\", \"(()())\", \"(())()\", \"()(())\", \"()()()\"]). Use a stack to track the current string."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Knight's tour"
          }), ": Place a knight on an empty chessboard and visit every square exactly once using Warnsdorff's heuristic and a stack for backtracking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subset sum using stack"
          }), ": Given a set of integers and a target sum, find all subsets that sum to the target using an explicit stack instead of recursion."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hamiltonian path in a graph"
          }), ": Find a path that visits every vertex exactly once using stack-based backtracking. For a small graph (≤10 vertices), this is feasible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a stack-based Sudoku solver"
          }), ": Use a stack to try cell values. On conflict, backtrack by popping the last choice and trying the next value."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stacks provide LIFO access with O(1) push, pop, and top operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array-based stacks may need resizing; linked stacks never overflow but allocate per node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parenthesis matching uses a stack to track open brackets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The shunting-yard algorithm converts infix to postfix; postfix is evaluated with a single stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MinStack achieves O(1) getMin with an auxiliary stack - a classic interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monotonic stacks optimize next-greater-element and stock-span problems from O(n^2) to O(n)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stacks are fundamental to parsing, recursion, compilers, undo systems, and DFS traversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack-based backtracking (N-Queens, maze solving) models recursive depth-first search iteratively."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the LIFO discipline and where does it arise naturally?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare array-based and linked-list-based stack implementations - when would you choose each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is postfix notation easier to evaluate than infix?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how the shunting-yard algorithm uses operator precedence to convert infix to postfix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the MinStack auxiliary stack guarantee O(1) getMin?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function to reverse a string using a stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program to evaluate a fully parenthesized infix expression containing +, -, *, /."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a stack that supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getMin()"
        }), " in O(1) time alongside push and pop."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an array, find the Next Greater Element for every element using a stack."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MinStack with O(1) space (single variable + arithmetic trick):"
        }), " Instead of an auxiliary stack, store a diff in the main stack. On push, if the new value is smaller than current min, push ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(2*value - min)"
        }), " and update min. On pop, if the popped value is less than min, restore previous min using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "min = 2*min - popped"
        }), ". Implement this and verify it works."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sort a stack using recursion:"
        }), " Given a stack of integers, sort it in ascending order (largest on top) using only recursion and no extra data structure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Largest rectangle in a histogram (LeetCode 84):"
        }), " Given an array of bar heights, find the largest rectangular area - uses a monotonic stack to compute width x height in O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement two stacks in one array"
        }), " (as covered in Interview Corner) with push/pop for both, handling overflow between them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement a stack using a single queue"
        }), " such that push is O(1) and pop is O(n) - then the reverse (push O(n), pop O(1)). Compare the two."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tower of Hanoi using explicit stack:"
        }), " Instead of recursion, model the three pegs as three stacks and simulate the solution iteratively."]
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