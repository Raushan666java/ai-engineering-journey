"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52917],{

/***/ 90964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_04_doubly_linked_list_md_500_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-04-doubly-linked-list-md-500.json
const site_docs_courses_data_structures_04_doubly_linked_list_md_500_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/04-doubly-linked-list","title":"Chapter 4: Doubly Linked List and Circular Linked List","description":"Previous Singly Linked List | Next: Stacks","source":"@site/docs/courses/data-structures/04-doubly-linked-list.md","sourceDirName":"courses/data-structures","slug":"/data-structures/04-doubly-linked-list","permalink":"/ai-engineering-journey/data-structures/04-doubly-linked-list","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-doubly-linked-list","slug":"/data-structures/04-doubly-linked-list","title":"Chapter 4: Doubly Linked List and Circular Linked List","sidebar_label":"Chapter 4: Doubly Linked List and Circular Linked List","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Singly Linked List","permalink":"/ai-engineering-journey/data-structures/03-singly-linked-list"},"next":{"title":"Chapter 5: Stacks","permalink":"/ai-engineering-journey/data-structures/05-stacks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/04-doubly-linked-list.md


const frontMatter = {
	id: '04-doubly-linked-list',
	slug: '/data-structures/04-doubly-linked-list',
	title: 'Chapter 4: Doubly Linked List and Circular Linked List',
	sidebar_label: 'Chapter 4: Doubly Linked List and Circular Linked List',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Doubly Linked List and Circular Linked List';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Doubly Linked Lists Matter",
  "id": "why-doubly-linked-lists-matter",
  "level": 2
}, {
  "value": "Real-World Analogy: Music Playlist with Next and Previous",
  "id": "real-world-analogy-music-playlist-with-next-and-previous",
  "level": 3
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
  "value": "Doubly Linked List — Node Structure",
  "id": "doubly-linked-list--node-structure",
  "level": 3
}, {
  "value": "Advantages over Singly Linked List",
  "id": "advantages-over-singly-linked-list",
  "level": 3
}, {
  "value": "Disadvantage",
  "id": "disadvantage",
  "level": 3
}, {
  "value": "Circular Linked List",
  "id": "circular-linked-list",
  "level": 3
}, {
  "value": "Operations on Doubly Linked List",
  "id": "operations-on-doubly-linked-list",
  "level": 2
}, {
  "value": "1. Insert at Head (pushFront)",
  "id": "1-insert-at-head-pushfront",
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
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "2. Insert at Tail (pushBack)",
  "id": "2-insert-at-tail-pushback",
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
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-1",
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
  "value": "3. Insert at Middle (insertAt)",
  "id": "3-insert-at-middle-insertat",
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
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-2",
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
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "4. Delete from Head (popFront)",
  "id": "4-delete-from-head-popfront",
  "level": 3
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
  "value": "Implementations",
  "id": "implementations-3",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "5. Delete from Tail (popBack)",
  "id": "5-delete-from-tail-popback",
  "level": 3
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
  "value": "Implementations",
  "id": "implementations-4",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "6. Delete at Middle (removeAt)",
  "id": "6-delete-at-middle-removeat",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-5",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 4
}, {
  "value": "7. Forward Traversal",
  "id": "7-forward-traversal",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-6",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-6",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-6",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 4
}, {
  "value": "8. Backward Traversal",
  "id": "8-backward-traversal",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-7",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-7",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-7",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 4
}, {
  "value": "9. Reverse a Doubly Linked List",
  "id": "9-reverse-a-doubly-linked-list",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-8",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-8",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-8",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-8",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 4
}, {
  "value": "Complete Doubly Linked List Implementation",
  "id": "complete-doubly-linked-list-implementation",
  "level": 2
}, {
  "value": "C++",
  "id": "c",
  "level": 3
}, {
  "value": "Circular Singly Linked List",
  "id": "circular-singly-linked-list",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Algorithm Steps (pushBack)",
  "id": "algorithm-steps-pushback",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "Singly vs Doubly vs Circular — Comparison Table",
  "id": "singly-vs-doubly-vs-circular--comparison-table",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. LRU Cache (Least Recently Used Cache)",
  "id": "1-lru-cache-least-recently-used-cache",
  "level": 3
}, {
  "value": "2. Browser Navigation (Forward / Back)",
  "id": "2-browser-navigation-forward--back",
  "level": 3
}, {
  "value": "3. Deque (Double-Ended Queue)",
  "id": "3-deque-double-ended-queue",
  "level": 3
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "LRU Cache in Operating Systems",
  "id": "lru-cache-in-operating-systems",
  "level": 3
}, {
  "value": "Undo / Redo with Cursor Tracking",
  "id": "undo--redo-with-cursor-tracking",
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
  "value": "Quick Reference: When to Use Which List",
  "id": "quick-reference-when-to-use-which-list",
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
  "value": "TypeScript Doubly Linked List Implementation",
  "id": "typescript-doubly-linked-list-implementation",
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
  "value": "Complexity Comparison: DLL vs Singly vs Circular",
  "id": "complexity-comparison-dll-vs-singly-vs-circular",
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
        id: "chapter-4-doubly-linked-list-and-circular-linked-list",
        children: "Chapter 4: Doubly Linked List and Circular Linked List"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/03-singly-linked-list",
          children: "Chapter 3: Singly Linked List"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/05-stacks",
          children: "Stacks"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/data-structures/04-doubly-linked-list/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/04-doubly-linked-list/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/04-doubly-linked-list/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/04-doubly-linked-list/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/04-doubly-linked-list/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/04-doubly-linked-list/visual-explanation.png",
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
        children: "Implement a doubly linked list with forward and backward traversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a circular linked list (singly and doubly)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare singly, doubly, and circular linked lists on time/space complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze operation complexity for each variant with reasoning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply doubly linked lists to real-world problems like LRU cache and browser history."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-doubly-linked-lists-matter",
      children: "Why Doubly Linked Lists Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-music-playlist-with-next-and-previous",
      children: "Real-World Analogy: Music Playlist with Next and Previous"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are listening to a playlist on your music app. You tap ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " to skip forward and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous"
      }), " to go back to the song you just heard. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "singly linked list"
      }), " supports only \"Next\" — once you advance, the previous song is unreachable unless you restart from the first track."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doubly linked list"
      }), " fixes this. Each node (song) stores two pointers: one to the next song and one to the previous song. You can move freely in both directions — just like every real music player."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["More importantly, deleting the last song from a doubly linked list takes constant time ($O(1)$) because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tail.prev"
      }), " gives direct access to the second-to-last song. In a singly linked list, you would walk from the start to find the predecessor — an $O(n)$ operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Insight:"
        }), " Two pointers per node unlock bidirectional traversal and $O(1)$ operations at both ends — at the cost of one extra pointer per element."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Node Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node has prev + data + next pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use struct Node with prev, data, next fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward and backward traversal supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete node at known position in $O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last node points back to head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for round-robin scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly Circular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tail.next = head, head.prev = tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse in any direction indefinitely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers per node vs 1 in singly linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade memory for operational flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Doubly Linked List] --> B[Why DLL Matters]\n    B --> C[Node Structure]\n    C --> D[Operations:<br/>Insert / Delete / Traverse / Reverse]\n    D --> E[Circular Singly]\n    E --> F[Circular Doubly]\n    F --> G[Comparison Table]\n    G --> H[Interview Corner]\n    H --> I[Real-World Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doubly-linked-list--node-structure",
      children: "Doubly Linked List — Node Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node in a doubly linked list has three components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "prev"
          }), ":"]
        }), " Pointer to the previous node in the sequence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "data"
          }), ":"]
        }), " The actual value stored in the node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "next"
          }), ":"]
        }), " Pointer to the next node in the sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The list itself maintains two pointers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "head"
          }), ":"]
        }), " Points to the first node (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nullptr"
        }), " if empty)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "tail"
          }), ":"]
        }), " Points to the last node (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nullptr"
        }), " if empty)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr <- [prev|data|next] <-> [prev|data|next] <-> [prev|data|next] -> nullptr\n            ^                                       ^\n           head                                   tail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-over-singly-linked-list",
      children: "Advantages over Singly Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete at tail:"
        }), " $O(1)$ instead of $O(n)$ — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail.prev"
        }), " gives direct access to the new tail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete a given node:"
        }), " $O(1)$ if the node pointer is known — no need to find the predecessor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse traversal:"
        }), " Walk from tail backward using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " pointers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional iteration:"
        }), " Insert before a given node in $O(1)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disadvantage",
      children: "Disadvantage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node requires one extra pointer (8 bytes on 64-bit systems). For 1 million nodes, that is ~8 MB extra memory vs a singly linked list."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circular-linked-list",
      children: "Circular Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The last node points back to the first node (singly circular) or the first node's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prev"
      }), " points to the last (doubly circular). Useful for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "round-robin scheduling"
      }), ", cyclic buffers, and turn-based games where traversal loops indefinitely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Singly circular:\nhead -> [A] -> [B] -> [C] -> (back to head)\n\nDoubly circular:\nhead <-> [A] <-> [B] <-> [C] <-> (back to head)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In a circular list, traversal never ends naturally — when you reach the starting node again, you have visited every node exactly once. No null checks needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operations-on-doubly-linked-list",
      children: "Operations on Doubly Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-insert-at-head-pushfront",
      children: "1. Insert at Head (pushFront)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Adding a new song to the very top of your playlist. The new song becomes the first track. Its \"next\" pointer connects to the old first song, and the old first song's \"previous\" now points back to the new song."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a new node with the given value."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the list is empty (", (0,jsx_runtime.jsx)(_components.code, {
          children: "head == nullptr"
        }), "):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head = tail = newNode"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.next = head"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head.prev = newNode"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head = newNode"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment the size counter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure pushFront(value)\n    newNode = new Node(value)\n    if head == NULL:\n        head = tail = newNode\n    else:\n        newNode.next = head\n        head.prev = newNode\n        head = newNode\n    size = size + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " Empty (head = null, tail = null)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushFront(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new node [10] created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head is null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head = [10], tail = [10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "head->[10]<-tail"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushFront(5)"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushFront(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new node [5] created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head is [10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[5].next -> [10]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[5]->[10]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].prev -> [5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[5]<->[10]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "head -> [5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "head->[5]<->[10]<-tail"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [5] <-> [10] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void pushFront(const T& value) {\n    DNode<T>* newNode = new DNode<T>(value);\n    if (!head) {\n        head = tail = newNode;\n    } else {\n        newNode->next = head;\n        head->prev = newNode;\n        head = newNode;\n    }\n    ++count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def push_front(self, value):\n    new_node = Node(value)\n    if not self.head:\n        self.head = self.tail = new_node\n    else:\n        new_node.next = self.head\n        self.head.prev = new_node\n        self.head = new_node\n    self.size += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void pushFront(T value) {\n    DNode<T> newNode = new DNode<>(value);\n    if (head == null) {\n        head = tail = newNode;\n    } else {\n        newNode.next = head;\n        head.prev = newNode;\n        head = newNode;\n    }\n    size++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only a fixed set of pointer updates — no loops regardless of list size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One new node created; no auxiliary data structures"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Constant-time insertion at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more pointer updates than singly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly on empty list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must maintain both head and tail pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No traversal needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode becomes both head and tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode pushes in front; old node becomes second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still $O(1)$ — no traversal required"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-insert-at-tail-pushback",
      children: "2. Insert at Tail (pushBack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Adding a song to the end of your playlist. The current last song's \"next\" connects to the new song, and the new song's \"previous\" connects back to the old last song."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a new node with the given value."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the list is empty (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail == nullptr"
        }), "):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head = tail = newNode"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail.next = newNode"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.prev = tail"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail = newNode"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment the size counter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure pushBack(value)\n    newNode = new Node(value)\n    if tail == NULL:\n        head = tail = newNode\n    else:\n        tail.next = newNode\n        newNode.prev = tail\n        tail = newNode\n    size = size + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushBack(20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new node [20] created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail.next = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].next -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10]->[20]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode.prev = tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].prev -> [10]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10]<->[20]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tail -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "head->[10]<->[20]<-tail"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushBack(30)"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushBack(30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new node [30] created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail.next = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].next -> [30]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10]->[20]->[30]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode.prev = tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[30].prev -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10]<->[20]<->[30]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tail -> [30]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "head->[10]<->[20]<->[30]<-tail"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void pushBack(const T& value) {\n    DNode<T>* newNode = new DNode<T>(value);\n    if (!tail) {\n        head = tail = newNode;\n    } else {\n        tail->next = newNode;\n        newNode->prev = tail;\n        tail = newNode;\n    }\n    ++count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def push_back(self, value):\n    new_node = Node(value)\n    if not self.tail:\n        self.head = self.tail = new_node\n    else:\n        self.tail.next = new_node\n        new_node.prev = self.tail\n        self.tail = new_node\n    self.size += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void pushBack(T value) {\n    DNode<T> newNode = new DNode<>(value);\n    if (tail == null) {\n        head = tail = newNode;\n    } else {\n        tail.next = newNode;\n        newNode.prev = tail;\n        tail = newNode;\n    }\n    size++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(1)$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Direct access via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail"
            }), " — no traversal needed (singly linked: $O(n)$ without tail)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single new node allocated"
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
            children: "$O(1)$ insertion at both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need to manage both head and tail pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Comparable to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushFront"
            }), " in cost"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode becomes both head and tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode links after the single existing node"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-insert-at-middle-insertat",
      children: "3. Insert at Middle (insertAt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Inserting a song at a specific position in a playlist — say, as the third track. You find the node currently at that position, update the pointers of its predecessor and node itself to weave in the new song."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate index: if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index < 0"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index > size"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index == 0"
        }), ": call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushFront(value)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index == size"
        }), ": call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushBack(value)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Traverse to the node at position ", (0,jsx_runtime.jsx)(_components.code, {
              children: "index"
            }), " (call it ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.prev = current.prev"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.next = current"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "current.prev.next = newNode"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "current.prev = newNode"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment size."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure insertAt(index, value)\n    if index < 0 OR index > size:\n        return\n    if index == 0:\n        pushFront(value)\n        return\n    if index == size:\n        pushBack(value)\n        return\n\n    current = head\n    for i = 0 to index - 1:\n        current = current.next\n\n    newNode = new Node(value)\n    newNode.prev = current.prev\n    newNode.next = current\n    current.prev.next = newNode\n    current.prev = newNode\n    size = size + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insertAt(1, 15)"
      }), " — insert 15 at index 1 (between 10 and 20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse to index 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current = [20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20, 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode = [15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode.prev = current.prev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[15].prev -> [10]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newNode.next = current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[15].next -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current.prev.next = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].next -> [15]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 -> 15 -> 20 -> 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current.prev = newNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].prev -> [15]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 <-> 15 <-> 20 <-> 30"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [15] <-> [20] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void insertAt(int index, const T& value) {\n    if (index < 0 || index > count) return;\n    if (index == 0) { pushFront(value); return; }\n    if (index == count) { pushBack(value); return; }\n\n    DNode<T>* current = head;\n    for (int i = 0; i < index; ++i)\n        current = current->next;\n\n    DNode<T>* newNode = new DNode<T>(value);\n    newNode->prev = current->prev;\n    newNode->next = current;\n    current->prev->next = newNode;\n    current->prev = newNode;\n    ++count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def insert_at(self, index, value):\n    if index < 0 or index > self.size:\n        return\n    if index == 0:\n        self.push_front(value)\n        return\n    if index == self.size:\n        self.push_back(value)\n        return\n\n    current = self.head\n    for _ in range(index):\n        current = current.next\n\n    new_node = Node(value)\n    new_node.prev = current.prev\n    new_node.next = current\n    current.prev.next = new_node\n    current.prev = new_node\n    self.size += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void insertAt(int index, T value) {\n    if (index < 0 || index > size) return;\n    if (index == 0) { pushFront(value); return; }\n    if (index == size) { pushBack(value); return; }\n\n    DNode<T> current = head;\n    for (int i = 0; i < index; i++)\n        current = current.next;\n\n    DNode<T> newNode = new DNode<>(value);\n    newNode.prev = current.prev;\n    newNode.next = current;\n    current.prev.next = newNode;\n    current.prev = newNode;\n    size++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse from head to the insertion point — worst case near tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one new node regardless of list size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If the node pointer is already known (e.g., from a hash map), insertion before a given node is $O(1)$ — the key advantage over singly linked lists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Insert before known node in $O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By-index insertion still $O(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Four-pointer re-link gives stable insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More pointer updates than singly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Correct at both ends via delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle both prev and next correctly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushFront"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index equals size"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushBack"
            }), " (append)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list with index 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushFront"
            }), ", works correctly"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invalid index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No operation (guard clause)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-delete-from-head-popfront",
      children: "4. Delete from Head (popFront)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Removing the first song from a playlist. The second song becomes the new first track, and its \"previous\" pointer is set to null."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If list is empty (", (0,jsx_runtime.jsx)(_components.code, {
          children: "head == nullptr"
        }), "), return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Save ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " in a temporary pointer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head.next"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " is not null:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head.prev = nullptr"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otherwise, list becomes empty: set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail = nullptr"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete the old head node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement size."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure popFront()\n    if head == NULL:\n        return\n    temp = head\n    head = head.next\n    if head != NULL:\n        head.prev = NULL\n    else:\n        tail = NULL\n    delete temp\n    size = size - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "temp = head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "temp -> [10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20, 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head = head.next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head -> [20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20, 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head is not null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head.prev = nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].prev = null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null <- [20] -> [30]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete temp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10] freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "20, 30"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [20] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void popFront() {\n    if (!head) return;\n    DNode<T>* temp = head;\n    head = head->next;\n    if (head) head->prev = nullptr;\n    else tail = nullptr;\n    delete temp;\n    --count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def pop_front(self):\n    if not self.head:\n        return\n    temp = self.head\n    self.head = self.head.next\n    if self.head:\n        self.head.prev = None\n    else:\n        self.tail = None\n    self.size -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void popFront() {\n    if (head == null) return;\n    DNode<T> temp = head;\n    head = head.next;\n    if (head != null) head.prev = null;\n    else tail = null;\n    size--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(1)$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Direct access via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " — update fixed number of pointers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra memory used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
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
            children: "$O(1)$ deletion at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle empty and single-node cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple pointer updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No operation (guard clause)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " becomes null, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail"
            }), " becomes null — list is empty"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two nodes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " moves to second node, its ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), " becomes null"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-delete-from-tail-popback",
      children: "5. Delete from Tail (popBack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Removing the last song from a playlist. The second-to-last song becomes the new last track, and its \"next\" pointer is set to null."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Difference:"
        }), " In singly linked list, deleting tail requires traversing from head to find predecessor ($O(n)$). DLL's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail.prev"
        }), " gives direct $O(1)$ access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If list is empty (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail == nullptr"
        }), "), return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Save ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), " in a temporary pointer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail.prev"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), " is not null:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail.next = nullptr"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otherwise, list becomes empty: set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head = nullptr"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete the old tail node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement size."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure popBack()\n    if tail == NULL:\n        return\n    temp = tail\n    tail = tail.prev\n    if tail != NULL:\n        tail.next = NULL\n    else:\n        head = NULL\n    delete temp\n    size = size - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "temp = tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "temp -> [30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20, 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail = tail.prev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail -> [20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail is not null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail.next = nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].next = null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 -> 20 -> null"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete temp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30] freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void popBack() {\n    if (!tail) return;\n    DNode<T>* temp = tail;\n    tail = tail->prev;\n    if (tail) tail->next = nullptr;\n    else head = nullptr;\n    delete temp;\n    --count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def pop_back(self):\n    if not self.tail:\n        return\n    temp = self.tail\n    self.tail = self.tail.prev\n    if self.tail:\n        self.tail.next = None\n    else:\n        self.head = None\n    self.size -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void popBack() {\n    if (tail == null) return;\n    DNode<T> temp = tail;\n    tail = tail.prev;\n    if (tail != null) tail.next = null;\n    else head = null;\n    size--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(1)$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Direct access via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail.prev"
            }), " — no traversal. Singly linked: $O(n)$"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra memory used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
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
            children: "$O(1)$ tail deletion — killer feature of DLL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must maintain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tail"
            }), " pointer correctly"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Symmetric with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popFront"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pointers to manage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No operation (guard clause)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tail"
            }), " becomes null, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " becomes null — list empty"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two nodes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tail"
            }), " moves to first node, its ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), " becomes null"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-delete-at-middle-removeat",
      children: "6. Delete at Middle (removeAt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Removing a specific song from the middle of a playlist. The song before it now skips directly to the song after it, and vice versa — the removed song is bypassed from both sides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate index: if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index < 0"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index >= size"
        }), ", return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index == 0"
        }), ": call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "popFront()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index == size - 1"
        }), ": call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "popBack()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Traverse to the node at position ", (0,jsx_runtime.jsx)(_components.code, {
              children: "index"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "current"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "current.prev.next = current.next"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "current.next.prev = current.prev"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Delete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement size."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure removeAt(index)\n    if index < 0 OR index >= size:\n        return\n    if index == 0:\n        popFront()\n        return\n    if index == size - 1:\n        popBack()\n        return\n\n    current = head\n    for i = 0 to index - 1:\n        current = current.next\n\n    current.prev.next = current.next\n    current.next.prev = current.prev\n    delete current\n    size = size - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "removeAt(1)"
      }), " — remove node at index 1 (value 20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Updates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List State (forward)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse to index 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current = [20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 20, 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current.prev.next = current.next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].next -> [30]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 -> 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current.next.prev = current.prev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[30].prev -> [10]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 <-> 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20] freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10, 30"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final State:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [30] <- tail"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void removeAt(int index) {\n    if (index < 0 || index >= count) return;\n    if (index == 0) { popFront(); return; }\n    if (index == count - 1) { popBack(); return; }\n\n    DNode<T>* current = head;\n    for (int i = 0; i < index; ++i)\n        current = current->next;\n\n    current->prev->next = current->next;\n    current->next->prev = current->prev;\n    delete current;\n    --count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def remove_at(self, index):\n    if index < 0 or index >= self.size:\n        return\n    if index == 0:\n        self.pop_front()\n        return\n    if index == self.size - 1:\n        self.pop_back()\n        return\n\n    current = self.head\n    for _ in range(index):\n        current = current.next\n\n    current.prev.next = current.next\n    current.next.prev = current.prev\n    self.size -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void removeAt(int index) {\n    if (index < 0 || index >= size) return;\n    if (index == 0) { popFront(); return; }\n    if (index == size - 1) { popBack(); return; }\n\n    DNode<T> current = head;\n    for (int i = 0; i < index; i++)\n        current = current.next;\n\n    current.prev.next = current.next;\n    current.next.prev = current.prev;\n    size--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse from head to target index — worst case near tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra memory used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " With a known node pointer (e.g., from hash map), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "removeNode(nodePtr)"
        }), " is $O(1)$ — DLL bypasses the need to find the predecessor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Delete at known node in $O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By-index deletion still $O(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer re-link is simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle both prev and next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works at both ends via delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popFront"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Last index"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popBack"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node (size=1)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popFront"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popBack"
            }), " — both produce empty list"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invalid index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No operation (guard clause)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-forward-traversal",
      children: "7. Forward Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Playing through a playlist from the first track to the last, following each song's \"next\" pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-6",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While current node is not null:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Process the node's data."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Move to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current.next"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stop when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " becomes null."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure traverseForward()\n    current = head\n    while current != NULL:\n        print(current.data)\n        current = current.next\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-6",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Print"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10].next = [20]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20].next = [30]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30].next = null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10 20 30"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-6",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void printForward() const {\n    DNode<T>* current = head;\n    while (current) {\n        std::cout << current->data << \" <-> \";\n        current = current->next;\n    }\n    std::cout << \"nullptr\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def print_forward(self):\n    current = self.head\n    while current:\n        print(current.data, end=\" <-> \" if current.next else \"\")\n        current = current.next\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void printForward() {\n    DNode<T> current = head;\n    while (current != null) {\n        System.out.print(current.data + \" <-> \");\n        current = current.next;\n    }\n    System.out.println(\"null\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit every node exactly once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one temporary pointer used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-backward-traversal",
      children: "8. Backward Traversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Going backward through a playlist — following each song's \"previous\" pointer from the last song to the first."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "This is impossible in a singly linked list"
        }), " — no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " pointer exists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-7",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While current node is not null:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Process the node's data."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Move to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current.prev"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stop when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " becomes null."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure traverseBackward()\n    current = tail\n    while current != NULL:\n        print(current.data)\n        current = current.prev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-7",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Print"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30] (tail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30].prev = [20]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20].prev = [10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10].prev = null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "30 20 10"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-7",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void printBackward() const {\n    DNode<T>* current = tail;\n    while (current) {\n        std::cout << current->data << \" <-> \";\n        current = current->prev;\n    }\n    std::cout << \"nullptr\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def print_backward(self):\n    current = self.tail\n    while current:\n        print(current.data, end=\" <-> \" if current.prev else \"\")\n        current = current.prev\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void printBackward() {\n    DNode<T> current = tail;\n    while (current != null) {\n        System.out.print(current.data + \" <-> \");\n        current = current.prev;\n    }\n    System.out.println(\"null\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit every node exactly once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one temporary pointer used"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-reverse-a-doubly-linked-list",
      children: "9. Reverse a Doubly Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Flipping the order of a playlist — the last song becomes first, the first becomes last. For each song, swap its \"next\" and \"previous\" pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-8",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current = head"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "temp = nullptr"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " is not null:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Save ", (0,jsx_runtime.jsx)(_components.code, {
              children: "temp = current.prev"
            }), " (old prev)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current.prev = current.next"
            }), " (prev now points forward)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current.next = temp"
            }), " (next now points backward)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Move ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current = current.prev"
            }), " (this is the old next, now in prev)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After loop, if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "temp"
        }), " is not null, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head = temp.prev"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Swap ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-8",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "procedure reverse()\n    current = head\n    temp = NULL\n    while current != NULL:\n        temp = current.prev\n        current.prev = current.next\n        current.next = temp\n        current = current.prev\n    if temp != NULL:\n        head = temp.prev\n    swap(head, tail)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-8",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial List:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [10] <-> [20] <-> [30] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "temp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prev = next"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "next = temp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "current moves to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].prev -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[10].next -> null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].prev -> [30]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[20].next -> [10]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[30].prev -> null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[30].next -> [20]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After loop:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "temp = [20]"
      }), " (from last iteration).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Set head:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head = temp.prev = [20].prev = [30]"
      }), " (step 2 set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[20].prev -> [30]"
      }), ").\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Swap head and tail:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head = [30], tail = [10]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final reversed list:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -> [30] <-> [20] <-> [10] <- tail"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prev"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "next"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All pointers successfully swapped — list is reversed in $O(n)$ time and $O(1)$ space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-8",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void reverse() {\n    DNode<T>* current = head;\n    DNode<T>* temp = nullptr;\n\n    while (current) {\n        temp = current->prev;\n        current->prev = current->next;\n        current->next = temp;\n        current = current->prev;\n    }\n\n    if (temp) head = temp->prev;\n    DNode<T>* swap = head;\n    head = tail;\n    tail = swap;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reverse(self):\n    current = self.head\n    temp = None\n\n    while current:\n        temp = current.prev\n        current.prev = current.next\n        current.next = temp\n        current = current.prev\n\n    if temp:\n        self.head = temp.prev\n\n    self.head, self.tail = self.tail, self.head\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void reverse() {\n    DNode<T> current = head;\n    DNode<T> temp = null;\n\n    while (current != null) {\n        temp = current.prev;\n        current.prev = current.next;\n        current.next = temp;\n        current = current.prev;\n    }\n\n    if (temp != null) head = temp.prev;\n    DNode<T> swp = head;\n    head = tail;\n    tail = swp;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit every node to swap its two pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two temporary pointers — no recursion stack or extra array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-6",
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
            children: "In-place — no extra list needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More pointer updates per node than singly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ space vs $O(n)$ with a stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must correctly compute new head after loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty list"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " is null, loop skipped, no change"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), " are null — swap is no-op. Head/tail swap also no-op"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both nodes swap correctly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-doubly-linked-list-implementation",
      children: "Complete Doubly Linked List Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c",
      children: "C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nstruct DNode {\n    T data;\n    DNode* prev;\n    DNode* next;\n\n    DNode(const T& value) : data(value), prev(nullptr), next(nullptr) {}\n};\n\ntemplate <typename T>\nclass DoublyLinkedList {\nprivate:\n    DNode<T>* head;\n    DNode<T>* tail;\n    int count;\n\npublic:\n    DoublyLinkedList() : head(nullptr), tail(nullptr), count(0) {}\n\n    ~DoublyLinkedList() {\n        DNode<T>* current = head;\n        while (current) {\n            DNode<T>* temp = current;\n            current = current->next;\n            delete temp;\n        }\n    }\n\n    int size() const { return count; }\n\n    void pushFront(const T& value) {\n        DNode<T>* newNode = new DNode<T>(value);\n        if (!head) {\n            head = tail = newNode;\n        } else {\n            newNode->next = head;\n            head->prev = newNode;\n            head = newNode;\n        }\n        ++count;\n    }\n\n    void pushBack(const T& value) {\n        DNode<T>* newNode = new DNode<T>(value);\n        if (!tail) {\n            head = tail = newNode;\n        } else {\n            tail->next = newNode;\n            newNode->prev = tail;\n            tail = newNode;\n        }\n        ++count;\n    }\n\n    void popFront() {\n        if (!head) return;\n        DNode<T>* temp = head;\n        head = head->next;\n        if (head) head->prev = nullptr;\n        else tail = nullptr;\n        delete temp;\n        --count;\n    }\n\n    void popBack() {\n        if (!tail) return;\n        DNode<T>* temp = tail;\n        tail = tail->prev;\n        if (tail) tail->next = nullptr;\n        else head = nullptr;\n        delete temp;\n        --count;\n    }\n\n    void insertAt(int index, const T& value) {\n        if (index < 0 || index > count) return;\n        if (index == 0) { pushFront(value); return; }\n        if (index == count) { pushBack(value); return; }\n\n        DNode<T>* current = head;\n        for (int i = 0; i < index; ++i) current = current->next;\n        DNode<T>* newNode = new DNode<T>(value);\n        newNode->prev = current->prev;\n        newNode->next = current;\n        current->prev->next = newNode;\n        current->prev = newNode;\n        ++count;\n    }\n\n    void removeAt(int index) {\n        if (index < 0 || index >= count) return;\n        if (index == 0) { popFront(); return; }\n        if (index == count - 1) { popBack(); return; }\n\n        DNode<T>* current = head;\n        for (int i = 0; i < index; ++i) current = current->next;\n        current->prev->next = current->next;\n        current->next->prev = current->prev;\n        delete current;\n        --count;\n    }\n\n    void reverse() {\n        DNode<T>* current = head;\n        DNode<T>* temp = nullptr;\n        while (current) {\n            temp = current->prev;\n            current->prev = current->next;\n            current->next = temp;\n            current = current->prev;\n        }\n        if (temp) head = temp->prev;\n        DNode<T>* swp = head;\n        head = tail;\n        tail = swp;\n    }\n\n    void printForward() const {\n        DNode<T>* current = head;\n        while (current) {\n            std::cout << current->data << \" <-> \";\n            current = current->next;\n        }\n        std::cout << \"nullptr\\n\";\n    }\n\n    void printBackward() const {\n        DNode<T>* current = tail;\n        while (current) {\n            std::cout << current->data << \" <-> \";\n            current = current->prev;\n        }\n        std::cout << \"nullptr\\n\";\n    }\n};\n\nint main() {\n    DoublyLinkedList<int> dll;\n\n    dll.pushBack(10);\n    dll.pushBack(20);\n    dll.pushBack(30);\n    dll.pushFront(5);\n    std::cout << \"Forward:  \";\n    dll.printForward();\n    std::cout << \"Backward: \";\n    dll.printBackward();\n\n    dll.popBack();\n    std::cout << \"After popBack (forward): \";\n    dll.printForward();\n\n    dll.insertAt(1, 12);\n    std::cout << \"After insertAt(1,12): \";\n    dll.printForward();\n\n    dll.reverse();\n    std::cout << \"After reverse: \";\n    dll.printForward();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Forward:  5 <-> 10 <-> 20 <-> 30 <-> nullptr\nBackward: 30 <-> 20 <-> 10 <-> 5 <-> nullptr\nAfter popBack (forward): 5 <-> 10 <-> 20 <-> nullptr\nAfter insertAt(1,12): 5 <-> 12 <-> 10 <-> 20 <-> nullptr\nAfter reverse: 20 <-> 10 <-> 12 <-> 5 <-> nullptr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "circular-singly-linked-list",
      children: "Circular Singly Linked List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A circular playlist that loops forever — when you reach the last song, it wraps back to the first. Perfect for \"repeat all\" mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-pushback",
      children: "Algorithm Steps (pushBack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new node."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If list is empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head = newNode"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.next = head"
            }), " (points to itself)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Traverse to the node whose ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), " points to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " (the current last node)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "last.next = newNode"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newNode.next = head"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nclass CircularLinkedList {\nprivate:\n    struct Node {\n        T data;\n        Node* next;\n        Node(const T& value) : data(value), next(nullptr) {}\n    };\n    Node* head;\n    int count;\n\npublic:\n    CircularLinkedList() : head(nullptr), count(0) {}\n\n    void pushBack(const T& value) {\n        Node* newNode = new Node(value);\n        if (!head) {\n            head = newNode;\n            head->next = head;\n        } else {\n            Node* current = head;\n            while (current->next != head) current = current->next;\n            current->next = newNode;\n            newNode->next = head;\n        }\n        ++count;\n    }\n\n    void print() const {\n        if (!head) return;\n        Node* current = head;\n        do {\n            std::cout << current->data << \" -> \";\n            current = current->next;\n        } while (current != head);\n        std::cout << \"(back to \" << head->data << \")\\n\";\n    }\n};\n\nint main() {\n    CircularLinkedList<int> cll;\n    cll.pushBack(1);\n    cll.pushBack(2);\n    cll.pushBack(3);\n    cll.pushBack(4);\n    cll.print();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 -> 2 -> 3 -> 4 -> (back to 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
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
            children: "pushBack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse to find the last node (no tail pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushFront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert after head, swap data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit all nodes, stop when back at head"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "singly-vs-doubly-vs-circular--comparison-table",
      children: "Singly vs Doubly vs Circular — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Singly Linked"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doubly Linked"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Doubly"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both directions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward (infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both (infinite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Node pointers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (prev, next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (prev, next)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per node (64-bit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Head deletion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tail deletion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert at head"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert at tail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ (with tail ptr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete known node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse traversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null-terminated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (circular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (circular)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round-robin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null checks"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next == head"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check both"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Doubly linked lists appear frequently in coding interviews, often as a component of more complex data structures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-lru-cache-least-recently-used-cache",
      children: "1. LRU Cache (Least Recently Used Cache)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design a cache that evicts the least recently used item when capacity is exceeded. Both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get(key)"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "put(key, value)"
      }), " must run in $O(1)$ amortized time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Doubly linked list + hash map."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DLL"
        }), " maintains access order: most recently used at head, least recently used at tail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash map"
        }), " maps keys to node pointers for $O(1)$ lookup."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get(key)"
        }), ": Look up via hash map. If found, move node to head (remove + insert at front). Return value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "put(key, value)"
        }), ": If key exists, update value and move to head. If new, create node at head. If over capacity, delete tail node and remove its key from hash map."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class LRUCache {\nprivate:\n    struct Node {\n        int key, value;\n        Node* prev;\n        Node* next;\n        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}\n    };\n\n    int capacity;\n    Node* head;\n    Node* tail;\n    unordered_map<int, Node*> cache;\n\n    void moveToHead(Node* node) {\n        remove(node);\n        addToHead(node);\n    }\n\n    void addToHead(Node* node) {\n        node->next = head->next;\n        node->prev = head;\n        head->next->prev = node;\n        head->next = node;\n    }\n\n    void remove(Node* node) {\n        node->prev->next = node->next;\n        node->next->prev = node->prev;\n    }\n\n    Node* popTail() {\n        Node* node = tail->prev;\n        remove(node);\n        return node;\n    }\n\npublic:\n    LRUCache(int cap) : capacity(cap) {\n        head = new Node(0, 0);  // dummy head\n        tail = new Node(0, 0);  // dummy tail\n        head->next = tail;\n        tail->prev = head;\n    }\n\n    int get(int key) {\n        if (!cache.count(key)) return -1;\n        Node* node = cache[key];\n        moveToHead(node);\n        return node->value;\n    }\n\n    void put(int key, int value) {\n        if (cache.count(key)) {\n            Node* node = cache[key];\n            node->value = value;\n            moveToHead(node);\n        } else {\n            Node* newNode = new Node(key, value);\n            cache[key] = newNode;\n            addToHead(newNode);\n            if (cache.size() > capacity) {\n                Node* removed = popTail();\n                cache.erase(removed->key);\n                delete removed;\n            }\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the DLL works:"
      }), " Moving a node to the head requires bypassing it from both neighbors — the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prev"
      }), " pointer makes this $O(1)$ instead of $O(n)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-browser-navigation-forward--back",
      children: "2. Browser Navigation (Forward / Back)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement browser back/forward buttons."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " DLL with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "current"
      }), " pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class BrowserHistory {\nprivate:\n    struct Page {\n        string url;\n        Page* prev;\n        Page* next;\n        Page(string u) : url(u), prev(nullptr), next(nullptr) {}\n    };\n\n    Page* current;\n\npublic:\n    BrowserHistory(string homepage) {\n        current = new Page(homepage);\n    }\n\n    void visit(string url) {\n        // Clear forward history\n        Page* temp = current->next;\n        while (temp) {\n            Page* del = temp;\n            temp = temp->next;\n            delete del;\n        }\n        Page* newPage = new Page(url);\n        current->next = newPage;\n        newPage->prev = current;\n        current = newPage;\n    }\n\n    string back(int steps) {\n        while (steps-- > 0 && current->prev)\n            current = current->prev;\n        return current->url;\n    }\n\n    string forward(int steps) {\n        while (steps-- > 0 && current->next)\n            current = current->next;\n        return current->url;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-deque-double-ended-queue",
      children: "3. Deque (Double-Ended Queue)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement a deque with $O(1)$ insert/delete at both ends."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " A doubly linked list is the natural implementation — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushFront"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "popFront"
      }), " at head and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushBack"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "popBack"
      }), " at tail, all $O(1)$. C++ STL ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::deque"
      }), " uses a segmented array for cache efficiency, but the DLL-based deque is the simplest conceptual model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design LRU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLL + hash map for $O(1)$ operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten a multilevel DLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive or stack-based traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clone a linked list with random pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaving nodes or hash map"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate a DLL by k positions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find new head via modular arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates from sorted DLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass with two pointers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How DLL Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Browser forward/back"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each page is a node. Back follows ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), ", Forward follows ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), ". New page clears forward history"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LRU cache in OS kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux kernel uses a variant of LRU with DLL for page replacement. Accessed pages move to head; eviction takes from tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undo/redo with cursor tracking"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each state is a node. Undo goes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), ", redo goes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), ". New action after undo discards redo branch"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Music player playlist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each song is a node. Next/Previous traverse the DLL. Shuffle randomizes traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Navigation systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route waypoints as DLL — traverse forward (next stop) or backward (previous stop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image viewer slideshow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Previous/Next image navigation — $O(1)$ in both directions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text editor buffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gap buffer + line-based DLL for line-by-line navigation with $O(1)$ insert/delete at cursor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction processing"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each transaction is a DLL node — commit goes forward, rollback traces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), " pointers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task scheduler"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Circular DLL for round-robin: each time slice moves to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), "; removing a task is $O(1)$"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows GUI window Z-order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows stored in a DLL for Z-ordering — bring to front moves a node to head"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lru-cache-in-operating-systems",
      children: "LRU Cache in Operating Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The LRU page replacement algorithm in OS kernels (approximated) uses a doubly linked list:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page access:"
        }), " Move the page node to list head ($O(1)$ via hash map + pointer updates)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page fault:"
        }), " Evict the tail node (least recently used), load new page at head ($O(1)$)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " pointer on the tail node is essential — it gives $O(1)$ access to the second-to-last node for eviction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undo--redo-with-cursor-tracking",
      children: "Undo / Redo with Cursor Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text editors and design tools (Photoshop, Figma) use a DLL of states:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each node stores the document state (or a diff)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Undo"
        }), " moves ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current.prev"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Redo"
        }), " moves ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current.next"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New action after undoing discards all nodes after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " (forward branch cleared)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identical to the browser history pattern."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always check for null ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " on the head node before accessing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node->prev"
        }), " — the most common crash in DLL code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LRU cache is the classic DLL application:"
        }), " Pair a DLL with a hash map. The DLL maintains access order; the hash map provides $O(1)$ lookup. Move accessed nodes to head for \"most recently used\" ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular lists are natural for round-robin:"
        }), " No end-of-list checks — when you reach the same node again, you have visited everyone once. Perfect for CPU scheduling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional traversal costs 1 extra pointer:"
        }), " DLL uses 2x the pointer memory of singly linked. For 1M integers (32-bit), that is 8 MB vs 4 MB — a small price for $O(1)$ deletion at arbitrary positions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Watch for null prev on the head:"
        }), " Always check if the node is the head before accessing its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " pointer. Dereferencing nullptr is an immediate crash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse by swapping pointers:"
        }), " Swap ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), " for every node, then swap ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail"
        }), ". This is $O(n)$ time and $O(1)$ space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dummy node pattern:"
        }), " Sentinel head/tail nodes (as in the LRU cache code) eliminate null checks — cleaner, bug-free code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doubly linked lists allow $O(1)$ deletion at both ends and backward traversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circular linked lists form a ring; traversal from any node visits all nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LRU cache uses a doubly linked list for $O(1)$ access-order maintenance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Josephus problem is elegantly solved with a circular linked list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XOR linked list reduces pointer overhead but sacrifices readability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doubly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Doubly"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (infinite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-when-to-use-which-list",
      children: "Quick Reference: When to Use Which List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-pass forward only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need reverse traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin / cyclic access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular singly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular doubly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singly linked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ tail deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly or circular doubly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LRU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly linked + hash map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ move-to-front, $O(1)$ delete-last"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular singly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin time-slicing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Music playlist repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular doubly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle through songs, prev/next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward/backward navigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undo/redo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack + doubly linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigate history in both directions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forgetting to update both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prev"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), " during insertion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only updating one pointer direction leaves the list in an inconsistent state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always update 4 pointers symmetrically: newNode.prev, newNode.next, prevNode.next, nextNode.prev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dereferencing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "head->prev"
            }), " on an empty list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head is null, so head->prev crashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check head/tail is not null before accessing their prev/next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not updating tail on popBack when list becomes empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tail = null, but head may still point to deleted node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After popBack, if tail becomes null, also set head = null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong reversal - not swapping head and tail after pointer swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List pointers are swapped but head/tail references point to wrong ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After swapping each node's prev/next, always swap head and tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular list traversal never terminates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing the condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "current != head"
            }), " in the loop condition"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use do-while: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "do { ... } while (current != head)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak from not deleting nodes in destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only head/tail pointers are freed, middle nodes remain allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse and delete each node in the destructor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-doubly-linked-list-implementation",
      children: "TypeScript Doubly Linked List Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DListNode<T> {\n    constructor(\n        public data: T,\n        public prev: DListNode<T> | null = null,\n        public next: DListNode<T> | null = null\n    ) {}\n}\n\nclass DoublyLinkedList<T> {\n    private head: DListNode<T> | null = null;\n    private tail: DListNode<T> | null = null;\n    private _count: number = 0;\n\n    get count(): number { return this._count; }\n\n    pushFront(data: T): void {\n        const node = new DListNode(data);\n        if (!this.head) {\n            this.head = this.tail = node;\n        } else {\n            node.next = this.head;\n            this.head.prev = node;\n            this.head = node;\n        }\n        this._count++;\n    }\n\n    pushBack(data: T): void {\n        const node = new DListNode(data);\n        if (!this.tail) {\n            this.head = this.tail = node;\n        } else {\n            this.tail.next = node;\n            node.prev = this.tail;\n            this.tail = node;\n        }\n        this._count++;\n    }\n\n    popFront(): T | null {\n        if (!this.head) return null;\n        const data = this.head.data;\n        this.head = this.head.next;\n        if (this.head) this.head.prev = null;\n        else this.tail = null;\n        this._count--;\n        return data;\n    }\n\n    popBack(): T | null {\n        if (!this.tail) return null;\n        const data = this.tail.data;\n        this.tail = this.tail.prev;\n        if (this.tail) this.tail.next = null;\n        else this.head = null;\n        this._count--;\n        return data;\n    }\n\n    reverse(): void {\n        let curr = this.head;\n        while (curr) {\n            const temp = curr.prev;\n            curr.prev = curr.next;\n            curr.next = temp;\n            curr = curr.prev; // move to original next\n        }\n        const temp = this.head;\n        this.head = this.tail;\n        this.tail = temp;\n    }\n\n    toArrayForward(): T[] {\n        const result: T[] = [];\n        let curr = this.head;\n        while (curr) { result.push(curr.data); curr = curr.next; }\n        return result;\n    }\n\n    toArrayBackward(): T[] {\n        const result: T[] = [];\n        let curr = this.tail;\n        while (curr) { result.push(curr.data); curr = curr.prev; }\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the primary advantage of a doubly linked list over a singly linked list?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Less memory usage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(1) deletion at tail ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Faster search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Simpler code"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In an LRU cache implemented with a DLL + hash map, what happens when a key is accessed?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It is moved to the tail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It is moved to the head ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It is deleted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It stays in place"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of inserting a node before a given node when you have a pointer to the given node in a DLL?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(1) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How many pointer updates are needed to delete a middle node in a DLL (excluding deallocation)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 2 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A circular doubly linked list can be traversed:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Only forward"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Only backward"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both forward and backward, infinitely ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Only once"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the memory per node in a DLL on a 64-bit system?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 8 bytes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 16 bytes ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 24 bytes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 32 bytes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 8-b, 9-b, 10-b, 11-b, 12-c, 13-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flatten a multilevel doubly linked list"
          }), ": Given a DLL where each node has a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "child"
          }), " pointer to another DLL, flatten the entire structure into a single DLL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rotate a doubly linked list by N nodes"
          }), ": Given a DLL, rotate it counter-clockwise by N nodes. Change links, not data."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remove all occurrences of a key in a DLL"
          }), ": Delete every occurrence of a given key in a DLL. O(n) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find pairs with given sum in a sorted DLL"
          }), ": Given a sorted DLL and a target sum, find all pairs whose sum equals the target."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Count triplets with sum equal to target in a sorted DLL"
          }), ": Count all triplets that sum to a given value in O(n²) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert a binary tree to a DLL (in-place)"
          }), ": Given a binary tree, convert it to a DLL following the inorder traversal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Merge sort on a doubly linked list"
          }), ": Implement merge sort for a DLL in O(n log n) time and O(log n) space (recursion)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reverse a doubly linked list in groups of K"
          }), ": Given a DLL, reverse every group of K nodes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sort a DLL containing 0s, 1s, and 2s"
          }), ": Sort a DLL by changing links, not by swapping data."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Josephus circle using circular DLL"
          }), ": Solve the Josephus problem for N people and K steps using a circular DLL."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-comparison-dll-vs-singly-vs-circular",
      children: "Complexity Comparison: DLL vs Singly vs Circular"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doubly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Doubly"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (infinite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) w/ tail ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(1) w/ tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete known node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ptrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ptrs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Hash table lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Circular indexing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the memory overhead of a doubly linked node vs singly?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Same"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 1 extra pointer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 2 extra pointers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 4 extra pointers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which application uses a circular linked list naturally?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Round-robin scheduler"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Hash table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Binary search tree"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "LRU cache combines a DLL with:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Array"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Hash map"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Priority queue"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What field do we check before accessing node->prev?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) node->next"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) node == head"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) node->data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) tail pointer"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity to reverse a DLL?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) $O(1)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) $O(\\log n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) $O(n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) $O(n^2)$"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which operation is $O(n)$ in a DLL?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Delete head"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Delete tail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Insert at head"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Search by value"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-a, 2-b, 3-b, 4-b, 5-b, 6-c, 7-d"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Singly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doubly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Singly"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via full cycle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round-robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can a doubly linked list delete at the tail in $O(1)$ while a singly linked list requires $O(n)$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary advantage of a circular linked list for scheduling algorithms?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the memory overhead of singly vs doubly linked lists for storing 1 million integers."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain how the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " pointer enables $O(1)$ insertion before a known node."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does reversing a DLL not require extra space, while reversing a singly linked list recursively does?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function to reverse a doubly linked list in $O(n)$ time and $O(1)$ space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program to detect whether a circular linked list is broken (has a non-circular node)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Josephus problem solver using a circular linked list."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a browser history class with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "visit(url)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "back(steps)"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forward(steps)"
        }), " using a DLL."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a DLL, remove all nodes with even values in a single pass."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LRU Cache:"
        }), " Implement an LRU (Least Recently Used) cache using a doubly linked list and a hash map. Both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "put"
        }), " must operate in $O(1)$ amortized time. Handle the edge case where the cache is empty, full, or the key already exists."]
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