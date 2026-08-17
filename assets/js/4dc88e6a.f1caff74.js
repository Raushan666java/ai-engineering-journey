"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92360],{

/***/ 45944
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_06_queues_md_4dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-06-queues-md-4dc.json
const site_docs_courses_data_structures_06_queues_md_4dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/06-queues","title":"Chapter 6: Queues","description":"Previous Stacks | Next: Hash Tables","source":"@site/docs/courses/data-structures/06-queues.md","sourceDirName":"courses/data-structures","slug":"/data-structures/06-queues","permalink":"/ai-engineering-journey/data-structures/06-queues","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-queues","slug":"/data-structures/06-queues","title":"Chapter 6: Queues","sidebar_label":"Chapter 6: Queues","sidebar_position":6},"sidebar":"course-data-structures","previous":{"title":"Chapter 5: Stacks","permalink":"/ai-engineering-journey/data-structures/05-stacks"},"next":{"title":"Chapter 7: Hash Tables","permalink":"/ai-engineering-journey/data-structures/07-hash-tables"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/06-queues.md


const frontMatter = {
	id: '06-queues',
	slug: '/data-structures/06-queues',
	title: 'Chapter 6: Queues',
	sidebar_label: 'Chapter 6: Queues',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Queues';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Queues Matter",
  "id": "why-queues-matter",
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
  "value": "Queue ADT",
  "id": "queue-adt",
  "level": 3
}, {
  "value": "1. Simple Array Queue (Naive)",
  "id": "1-simple-array-queue-naive",
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
  "value": "Dry Run — Trace Table",
  "id": "dry-run--trace-table",
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
  "value": "2. Circular Queue (Circular Array Queue)",
  "id": "2-circular-queue-circular-array-queue",
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
  "value": "Dry Run — Trace Table (capacity = 5)",
  "id": "dry-run--trace-table-capacity--5",
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
  "value": "3. Linked-List Queue",
  "id": "3-linked-list-queue",
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
  "value": "Dry Run — Trace Table",
  "id": "dry-run--trace-table-1",
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
  "value": "4. Deque (Double-Ended Queue)",
  "id": "4-deque-double-ended-queue",
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
  "value": "Dry Run — Trace Table (capacity = 5)",
  "id": "dry-run--trace-table-capacity--5-1",
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
  "value": "5. Priority Queue",
  "id": "5-priority-queue",
  "level": 3
}, {
  "value": "Algorithm Steps (Binary Heap-based Max-Priority Queue)",
  "id": "algorithm-steps-binary-heap-based-max-priority-queue",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Dry Run — Trace Table",
  "id": "dry-run--trace-table-2",
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
  "value": "Queue Family Comparison",
  "id": "queue-family-comparison",
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
  "value": "Quick Reference: When to Use Which Queue",
  "id": "quick-reference-when-to-use-which-queue",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Implement a Queue using Two Stacks",
  "id": "problem-1-implement-a-queue-using-two-stacks",
  "level": 3
}, {
  "value": "Problem 2: Sliding Window Maximum",
  "id": "problem-2-sliding-window-maximum",
  "level": 3
}, {
  "value": "Problem 3: First Non-Repeating Character in a Stream",
  "id": "problem-3-first-non-repeating-character-in-a-stream",
  "level": 3
}, {
  "value": "Problem 4: LRU Cache (Using Deque)",
  "id": "problem-4-lru-cache-using-deque",
  "level": 3
}, {
  "value": "Problem 5: Rotten Oranges (BFS with Queue)",
  "id": "problem-5-rotten-oranges-bfs-with-queue",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. BFS Graph Traversal",
  "id": "1-bfs-graph-traversal",
  "level": 3
}, {
  "value": "2. Print Spooling",
  "id": "2-print-spooling",
  "level": 3
}, {
  "value": "3. Message Queues (Kafka, RabbitMQ, AWS SQS)",
  "id": "3-message-queues-kafka-rabbitmq-aws-sqs",
  "level": 3
}, {
  "value": "4. CPU Scheduling",
  "id": "4-cpu-scheduling",
  "level": 3
}, {
  "value": "5. Breadth-First Search (Tree/Graph)",
  "id": "5-breadth-first-search-treegraph",
  "level": 3
}, {
  "value": "6. Web Server Request Queuing",
  "id": "6-web-server-request-queuing",
  "level": 3
}, {
  "value": "7. Undo/Redo in Editors",
  "id": "7-undoredo-in-editors",
  "level": 3
}, {
  "value": "Common Mistakes &amp; GFG Deepening",
  "id": "common-mistakes--gfg-deepening",
  "level": 2
}, {
  "value": "Common Mistakes (GFG-Style)",
  "id": "common-mistakes-gfg-style",
  "level": 3
}, {
  "value": "TypeScript Queue Implementation",
  "id": "typescript-queue-implementation",
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
  "value": "Queue Variants Comparison",
  "id": "queue-variants-comparison",
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
        id: "chapter-6-queues",
        children: "Chapter 6: Queues"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/05-stacks",
          children: "Chapter 5: Stacks"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/07-hash-tables",
          children: "Hash Tables"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Queue ADT (First-In-First-Out)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a circular queue using arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a queue using linked lists."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe priority queues and deques."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply queues to scheduling and breadth-first processing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze and compare simple, circular, linked, deque, and priority queue variants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve classic interview problems using queues and deques."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-queues-matter",
      children: "Why Queues Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine a ticket counter at a cinema. Customers join the line at the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rear"
        }), " and are served from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "front"
        }), ". The first person to arrive buys a ticket first — there is no cutting in line. This is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "First-In-First-Out (FIFO)"
        }), " — the defining principle of a queue."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queues are everywhere:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🖨️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Printer spooler"
        }), " — documents are printed in the order they were submitted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["☕ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Coffee shop"
        }), " — baristas take the next order from the front of the queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📨 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Message brokers"
        }), " (Kafka, RabbitMQ) — producers publish messages to a queue; consumers process them in order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🖥️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU scheduling"
        }), " — processes wait in a ready queue for their turn on the CPU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🗺️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS traversal"
        }), " — graph nodes are explored level by level using a queue."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without queues, life would be chaos: nobody would know who is next, fairness would vanish, and systems would lack predictable ordering."
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
            children: "FIFO Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-In-First-Out access order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural fit for BFS and scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Array Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Front fixed at 0, rear grows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes space after dequeues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular Array Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrap indices modulo capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No wasted space from prior dequeues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes with head and tail pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic sizing without resizing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete at both ends O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines stack + queue capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements ordered by priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary heap gives O(log n) ops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Queue FIFO] --> B[Circular Array vs Linked]\n    B --> C[Enqueue / Dequeue O(1)]\n    C --> D[Deque: Both Ends]\n    D --> E[Priority Queue with Heap]\n    E --> F[Applications: BFS, Sliding Window]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch06-queues.png",
        alt: "Queues Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-adt",
      children: "Queue ADT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A queue follows the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "First-In-First-Out (FIFO)"
      }), " discipline: elements are inserted at the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rear"
      }), " and removed from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "front"
      }), "."]
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
              children: "enqueue(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert element at the rear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dequeue()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove and return the front element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "front()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the front element without removing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isEmpty()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if the queue is empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the number of elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-simple-array-queue-naive",
      children: "1. Simple Array Queue (Naive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A single-file line where the door (front) stays fixed. Everyone enters through the same door, and as people leave through the same door, the space they occupied remains empty — unusable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), " — allocate an array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[0..n-1]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = -1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "enqueue(x)"
        }), " — if full, return overflow error; else increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear"
        }), ", place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[rear]"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dequeue()"
        }), " — if empty, return underflow error; else store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front"
        }), ", decrement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "front()"
        }), " — if empty, error; else return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isEmpty()"
        }), " — return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size == 0"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Queue:\n  arr ← array of size N\n  front ← 0\n  rear ← -1\n  size ← 0\n\nENQUEUE(x):\n  if size == N\n    return \"Overflow\"\n  rear ← rear + 1\n  arr[rear] ← x\n  size ← size + 1\n\nDEQUEUE():\n  if size == 0\n    return \"Underflow\"\n  x ← arr[front]\n  front ← front + 1\n  size ← size - 1\n  return x\n\nFRONT():\n  if size == 0\n    return \"Empty\"\n  return arr[front]\n\nISEMPTY():\n  return size == 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--trace-table",
      children: "Dry Run — Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rear"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ _ , _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rear→0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rear→1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rear→2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front→1 (10 still in arr but logically gone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front→2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rear→3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " After dequeues, indices 0,1 are wasted — we cannot reuse them without shifting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\n\ntemplate <typename T>\nclass SimpleArrayQueue {\nprivate:\n    T* arr;\n    int capacity;\n    int frontIndex;\n    int rearIndex;\n    int count;\n\npublic:\n    SimpleArrayQueue(int cap = 8) : capacity(cap), frontIndex(0), rearIndex(-1), count(0) {\n        arr = new T[capacity];\n    }\n\n    ~SimpleArrayQueue() { delete[] arr; }\n\n    void enqueue(const T& value) {\n        if (count == capacity)\n            throw std::overflow_error(\"Queue overflow\");\n        rearIndex++;\n        arr[rearIndex] = value;\n        count++;\n    }\n\n    T dequeue() {\n        if (count == 0)\n            throw std::underflow_error(\"Queue underflow\");\n        T value = arr[frontIndex];\n        frontIndex++;\n        count--;\n        return value;\n    }\n\n    T front() const {\n        if (count == 0)\n            throw std::underflow_error(\"Queue empty\");\n        return arr[frontIndex];\n    }\n\n    bool isEmpty() const { return count == 0; }\n    int size() const { return count; }\n};\n\nint main() {\n    SimpleArrayQueue<int> q(5);\n    q.enqueue(10);\n    q.enqueue(20);\n    q.enqueue(30);\n    std::cout << \"Front: \" << q.front() << \"\\n\";\n    std::cout << \"Dequeued: \" << q.dequeue() << \"\\n\";\n    q.enqueue(40);\n    while (!q.isEmpty())\n        std::cout << q.dequeue() << \" \";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimpleArrayQueue:\n    def __init__(self, capacity=8):\n        self.arr = [None] * capacity\n        self.capacity = capacity\n        self.front = 0\n        self.rear = -1\n        self.count = 0\n\n    def enqueue(self, value):\n        if self.count == self.capacity:\n            raise OverflowError(\"Queue overflow\")\n        self.rear += 1\n        self.arr[self.rear] = value\n        self.count += 1\n\n    def dequeue(self):\n        if self.count == 0:\n            raise IndexError(\"Queue underflow\")\n        value = self.arr[self.front]\n        self.front += 1\n        self.count -= 1\n        return value\n\n    def front(self):\n        if self.count == 0:\n            raise IndexError(\"Queue empty\")\n        return self.arr[self.front]\n\n    def is_empty(self):\n        return self.count == 0\n\n    def size(self):\n        return self.count\n\nq = SimpleArrayQueue(5)\nq.enqueue(10)\nq.enqueue(20)\nq.enqueue(30)\nprint(\"Front:\", q.front())\nprint(\"Dequeued:\", q.dequeue())\nq.enqueue(40)\nwhile not q.is_empty():\n    print(q.dequeue(), end=\" \")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SimpleArrayQueue<T> {\n    private T[] arr;\n    private int capacity, front, rear, count;\n\n    @SuppressWarnings(\"unchecked\")\n    public SimpleArrayQueue(int cap) {\n        capacity = cap;\n        arr = (T[]) new Object[capacity];\n        front = 0;\n        rear = -1;\n        count = 0;\n    }\n\n    public void enqueue(T value) {\n        if (count == capacity)\n            throw new IllegalStateException(\"Queue overflow\");\n        rear++;\n        arr[rear] = value;\n        count++;\n    }\n\n    public T dequeue() {\n        if (count == 0)\n            throw new IllegalStateException(\"Queue underflow\");\n        T value = arr[front];\n        front++;\n        count--;\n        return value;\n    }\n\n    public T front() {\n        if (count == 0)\n            throw new IllegalStateException(\"Queue empty\");\n        return arr[front];\n    }\n\n    public boolean isEmpty() { return count == 0; }\n    public int size() { return count; }\n\n    public static void main(String[] args) {\n        SimpleArrayQueue<Integer> q = new SimpleArrayQueue<>(5);\n        q.enqueue(10);\n        q.enqueue(20);\n        q.enqueue(30);\n        System.out.println(\"Front: \" + q.front());\n        System.out.println(\"Dequeued: \" + q.dequeue());\n        q.enqueue(40);\n        while (!q.isEmpty())\n            System.out.print(q.dequeue() + \" \");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index assignment — no shifting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just moves the front pointer forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct array access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer comparison"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(n) ) for the array."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not use this?"
      }), " After ( k ) dequeues, the first ( k ) slots become unusable — this is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "false overflow"
      }), ". The queue appears full even though space exists at the front."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes space — false overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) all operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity (unless resized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must shift elements if front reaches end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No pointer overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reuse freed slots"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty queue"
        }), " — dequeue/front on empty → underflow error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full queue"
        }), " — enqueue on full → overflow error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " — front == rear; dequeue makes front > rear, queue becomes empty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "False overflow"
        }), " — front has advanced but enqueue still fails because rear == capacity-1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-circular-queue-circular-array-queue",
      children: "2. Circular Queue (Circular Array Queue)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A rotating sushi bar. The conveyor belt wraps around — when a plate reaches the end, it continues from the start. Similarly, a circular queue reuses empty slots at the beginning by wrapping the rear pointer back to index 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The modulo arithmetic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(rear + 1) % capacity"
        }), " for circular wrap-around is both elegant and error-prone — always test edge cases where rear wraps past front."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A naive array queue wastes space because after dequeues the front pointer moves forward, leaving unused slots at the beginning. A circular queue wraps around: when the rear reaches the end, it continues at index 0 (modulo arithmetic)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), " — allocate array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[0..n-1]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "enqueue(x)"
        }), " — if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size == capacity"
        }), ", queue is full (resize or overflow); else place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[rear]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = (rear + 1) % capacity"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dequeue()"
        }), " — if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size == 0"
        }), " → underflow; else store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = (front + 1) % capacity"
        }), ", decrement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "front()"
        }), " — if empty → error; else return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isEmpty()"
        }), " — return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size == 0"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CircularQueue:\n  arr ← array of size N\n  front ← 0\n  rear ← 0\n  size ← 0\n\nENQUEUE(x):\n  if size == N\n    resize() or return \"Overflow\"\n  arr[rear] ← x\n  rear ← (rear + 1) mod N\n  size ← size + 1\n\nDEQUEUE():\n  if size == 0\n    return \"Underflow\"\n  x ← arr[front]\n  front ← (front + 1) mod N\n  size ← size - 1\n  return x\n\nFRONT():\n  if size == 0 return \"Empty\"\n  return arr[front]\n\nISEMPTY(): return size == 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--trace-table-capacity--5",
      children: "Dry Run — Trace Table (capacity = 5)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rear"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ _ , _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rear wraps to next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front→1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front→2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wrap:"
            }), " rear = (4+1)%5 = 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(60)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60, 20, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "overwrites index 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60, 20, 30, 40, 50]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "front→3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key observation: The circular queue reuses indices 0 and 1 that were freed by earlier dequeues. Without wrap-around, this space would be lost."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\n\ntemplate <typename T>\nclass CircularQueue {\nprivate:\n    T* data;\n    int capacity;\n    int frontIndex;\n    int rearIndex;\n    int count;\n\npublic:\n    CircularQueue(int cap = 8) : capacity(cap), frontIndex(0), rearIndex(0), count(0) {\n        data = new T[capacity];\n    }\n\n    ~CircularQueue() { delete[] data; }\n\n    void enqueue(const T& value) {\n        if (count == capacity) {\n            resize();\n        }\n        data[rearIndex] = value;\n        rearIndex = (rearIndex + 1) % capacity;\n        ++count;\n    }\n\n    T dequeue() {\n        if (isEmpty()) throw std::out_of_range(\"Queue underflow\");\n        T value = data[frontIndex];\n        frontIndex = (frontIndex + 1) % capacity;\n        --count;\n        return value;\n    }\n\n    T front() const {\n        if (isEmpty()) throw std::out_of_range(\"Queue is empty\");\n        return data[frontIndex];\n    }\n\n    bool isEmpty() const { return count == 0; }\n    int size() const { return count; }\n\nprivate:\n    void resize() {\n        int newCap = capacity * 2;\n        T* newData = new T[newCap];\n        for (int i = 0; i < count; ++i) {\n            newData[i] = data[(frontIndex + i) % capacity];\n        }\n        delete[] data;\n        data = newData;\n        capacity = newCap;\n        frontIndex = 0;\n        rearIndex = count;\n    }\n};\n\nint main() {\n    CircularQueue<int> q;\n    q.enqueue(1);\n    q.enqueue(2);\n    q.enqueue(3);\n\n    std::cout << \"Front: \" << q.front() << \"\\n\";\n    std::cout << \"Dequeue: \" << q.dequeue() << \"\\n\";\n    std::cout << \"Dequeue: \" << q.dequeue() << \"\\n\";\n\n    q.enqueue(4);\n    q.enqueue(5);\n    std::cout << \"Size: \" << q.size() << \"\\n\";\n\n    while (!q.isEmpty()) {\n        std::cout << q.dequeue() << \" \";\n    }\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Front: 1\nDequeue: 1\nDequeue: 2\nSize: 3\n3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CircularQueue:\n    def __init__(self, capacity=8):\n        self.data = [None] * capacity\n        self.capacity = capacity\n        self.front = 0\n        self.rear = 0\n        self.count = 0\n\n    def enqueue(self, value):\n        if self.count == self.capacity:\n            self._resize()\n        self.data[self.rear] = value\n        self.rear = (self.rear + 1) % self.capacity\n        self.count += 1\n\n    def dequeue(self):\n        if self.is_empty():\n            raise IndexError(\"Queue underflow\")\n        value = self.data[self.front]\n        self.front = (self.front + 1) % self.capacity\n        self.count -= 1\n        return value\n\n    def front(self):\n        if self.is_empty():\n            raise IndexError(\"Queue empty\")\n        return self.data[self.front]\n\n    def is_empty(self):\n        return self.count == 0\n\n    def size(self):\n        return self.count\n\n    def _resize(self):\n        new_cap = self.capacity * 2\n        new_data = [None] * new_cap\n        for i in range(self.count):\n            new_data[i] = self.data[(self.front + i) % self.capacity]\n        self.data = new_data\n        self.capacity = new_cap\n        self.front = 0\n        self.rear = self.count\n\nq = CircularQueue()\nq.enqueue(1)\nq.enqueue(2)\nq.enqueue(3)\nprint(\"Front:\", q.front())\nprint(\"Dequeue:\", q.dequeue())\nprint(\"Dequeue:\", q.dequeue())\nq.enqueue(4)\nq.enqueue(5)\nprint(\"Size:\", q.size())\nwhile not q.is_empty():\n    print(q.dequeue(), end=\" \")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.NoSuchElementException;\n\npublic class CircularQueue<T> {\n    private T[] data;\n    private int capacity, front, rear, count;\n\n    @SuppressWarnings(\"unchecked\")\n    public CircularQueue(int cap) {\n        capacity = cap;\n        data = (T[]) new Object[capacity];\n        front = 0;\n        rear = 0;\n        count = 0;\n    }\n\n    public void enqueue(T value) {\n        if (count == capacity)\n            resize();\n        data[rear] = value;\n        rear = (rear + 1) % capacity;\n        count++;\n    }\n\n    public T dequeue() {\n        if (isEmpty())\n            throw new NoSuchElementException(\"Queue underflow\");\n        T value = data[front];\n        front = (front + 1) % capacity;\n        count--;\n        return value;\n    }\n\n    public T front() {\n        if (isEmpty())\n            throw new NoSuchElementException(\"Queue empty\");\n        return data[front];\n    }\n\n    public boolean isEmpty() { return count == 0; }\n    public int size() { return count; }\n\n    @SuppressWarnings(\"unchecked\")\n    private void resize() {\n        int newCap = capacity * 2;\n        T[] newData = (T[]) new Object[newCap];\n        for (int i = 0; i < count; i++)\n            newData[i] = data[(front + i) % capacity];\n        data = newData;\n        capacity = newCap;\n        front = 0;\n        rear = count;\n    }\n\n    public static void main(String[] args) {\n        CircularQueue<Integer> q = new CircularQueue<>(4);\n        q.enqueue(1);\n        q.enqueue(2);\n        q.enqueue(3);\n        System.out.println(\"Front: \" + q.front());\n        System.out.println(\"Dequeue: \" + q.dequeue());\n        q.enqueue(4);\n        while (!q.isEmpty())\n            System.out.print(q.dequeue() + \" \");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "enqueue (no resize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single write + modulo arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single read + modulo increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct array access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy all elements to new array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1)?"
      }), " Both enqueue and dequeue are simple pointer movements. Modulo arithmetic is a hardware-level operation — no loops, no shifting. The amortized cost of enqueue remains O(1) because resizing is rare (doubling strategy)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "No false overflow — reuses freed slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity (unless resize implemented)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) all operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize is O(n) and doubles memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One slot may be sacrificed to distinguish full/empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful modulo boundary handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty queue"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front == rear && count == 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full queue"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count == capacity"
        }), ". If using sentinel-slot approach: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(rear + 1) % capacity == front"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " — enqueue then dequeue leaves front == rear with count == 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrap-around"
        }), " — after many operations, front may be at index 4 and rear at index 2. Reading/wrapping correctly requires modulo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize"
        }), " — when full, all elements must be copied from (front...rear) to a new contiguous block starting at index 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-linked-list-queue",
      children: "3. Linked-List Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A conga line at a party. Each person holds the waist of the person in front. New people join at the back, and the front person leaves when it is their turn. The line can grow arbitrarily long — no fixed capacity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head = null"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail = null"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "enqueue(x)"
        }), " — create a new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Node(x)"
        }), ". If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head == null"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head = tail = newNode"
        }), "; else link ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail.next = newNode"
        }), ", move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail = newNode"
        }), ". Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dequeue()"
        }), " — if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head == null"
        }), " → underflow. Store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head.data"
        }), ", move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head = head.next"
        }), ". If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        }), " becomes null, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail = null"
        }), ". Decrement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "front()"
        }), " — if empty → error; else return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head.data"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedQueue:\n  head ← null\n  tail ← null\n  size ← 0\n\nENQUEUE(x):\n  newNode ← Node(x)\n  if head == null\n    head ← newNode\n    tail ← newNode\n  else\n    tail.next ← newNode\n    tail ← newNode\n  size ← size + 1\n\nDEQUEUE():\n  if head == null\n    return \"Underflow\"\n  x ← head.data\n  head ← head.next\n  if head == null\n    tail ← null\n  size ← size - 1\n  return x\n\nFRONT():\n  if head == null return \"Empty\"\n  return head.data\n\nISEMPTY(): return size == 0\nSIZE():    return size\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--trace-table-1",
      children: "Dry Run — Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "head"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "tail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → B → null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enqueue(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → B → C → null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B → C → null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C → null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue() →C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\n\ntemplate <typename T>\nclass LinkedQueue {\nprivate:\n    struct Node {\n        T data;\n        Node* next;\n        Node(const T& value) : data(value), next(nullptr) {}\n    };\n    Node* head;\n    Node* tail;\n    int count;\n\npublic:\n    LinkedQueue() : head(nullptr), tail(nullptr), count(0) {}\n\n    ~LinkedQueue() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n\n    void enqueue(const T& value) {\n        Node* newNode = new Node(value);\n        if (tail) tail->next = newNode;\n        else head = newNode;\n        tail = newNode;\n        ++count;\n    }\n\n    T dequeue() {\n        if (isEmpty()) throw std::out_of_range(\"Queue underflow\");\n        Node* temp = head;\n        T value = temp->data;\n        head = head->next;\n        if (!head) tail = nullptr;\n        delete temp;\n        --count;\n        return value;\n    }\n\n    T front() const {\n        if (isEmpty()) throw std::out_of_range(\"Queue is empty\");\n        return head->data;\n    }\n\n    bool isEmpty() const { return count == 0; }\n    int size() const { return count; }\n};\n\nint main() {\n    LinkedQueue<std::string> q;\n    q.enqueue(\"first\");\n    q.enqueue(\"second\");\n    q.enqueue(\"third\");\n\n    std::cout << q.dequeue() << \"\\n\";\n    std::cout << q.dequeue() << \"\\n\";\n    q.enqueue(\"fourth\");\n    std::cout << q.dequeue() << \"\\n\";\n    std::cout << q.dequeue() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "first\nsecond\nthird\nfourth\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LinkedQueue:\n    class _Node:\n        def __init__(self, value):\n            self.data = value\n            self.next = None\n\n    def __init__(self):\n        self.head = None\n        self.tail = None\n        self.count = 0\n\n    def enqueue(self, value):\n        new_node = self._Node(value)\n        if self.tail:\n            self.tail.next = new_node\n        else:\n            self.head = new_node\n        self.tail = new_node\n        self.count += 1\n\n    def dequeue(self):\n        if self.is_empty():\n            raise IndexError(\"Queue underflow\")\n        value = self.head.data\n        self.head = self.head.next\n        if not self.head:\n            self.tail = None\n        self.count -= 1\n        return value\n\n    def front(self):\n        if self.is_empty():\n            raise IndexError(\"Queue empty\")\n        return self.head.data\n\n    def is_empty(self):\n        return self.count == 0\n\n    def size(self):\n        return self.count\n\nq = LinkedQueue()\nq.enqueue(\"first\")\nq.enqueue(\"second\")\nq.enqueue(\"third\")\nprint(q.dequeue())\nprint(q.dequeue())\nq.enqueue(\"fourth\")\nprint(q.dequeue())\nprint(q.dequeue())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.NoSuchElementException;\n\npublic class LinkedQueue<T> {\n    private static class Node<T> {\n        T data;\n        Node<T> next;\n        Node(T value) { this.data = value; }\n    }\n\n    private Node<T> head, tail;\n    private int count;\n\n    public LinkedQueue() { head = tail = null; count = 0; }\n\n    public void enqueue(T value) {\n        Node<T> newNode = new Node<>(value);\n        if (tail != null) tail.next = newNode;\n        else head = newNode;\n        tail = newNode;\n        count++;\n    }\n\n    public T dequeue() {\n        if (isEmpty())\n            throw new NoSuchElementException(\"Queue underflow\");\n        T value = head.data;\n        head = head.next;\n        if (head == null) tail = null;\n        count--;\n        return value;\n    }\n\n    public T front() {\n        if (isEmpty())\n            throw new NoSuchElementException(\"Queue empty\");\n        return head.data;\n    }\n\n    public boolean isEmpty() { return count == 0; }\n    public int size() { return count; }\n\n    public static void main(String[] args) {\n        LinkedQueue<String> q = new LinkedQueue<>();\n        q.enqueue(\"first\");\n        q.enqueue(\"second\");\n        q.enqueue(\"third\");\n        System.out.println(q.dequeue());\n        System.out.println(q.dequeue());\n        q.enqueue(\"fourth\");\n        System.out.println(q.dequeue());\n        System.out.println(q.dequeue());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rear pointer gives direct tail access — no traversal needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head pointer gives direct front access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directly reads head.data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node stores one pointer (next)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) for both ends?"
      }), " Unlike a singly linked list (which typically has O(n) tail operations), we maintain a separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tail"
      }), " pointer. Both head and tail are direct references — no traversal required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
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
            children: "Dynamic size — no capacity limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra memory per node (pointer overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No resizing or copying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor cache locality — nodes scattered in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) enqueue and dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer manipulation required (bug-prone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No false overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower than array due to allocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty queue"
        }), " — head == null; dequeue/front → underflow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " — head == tail; after dequeue, both become null."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Many elements"
        }), " — works regardless of number (heap memory permitting)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory exhaustion"
        }), " — if heap is full, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new Node"
        }), " may throw."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-deque-double-ended-queue",
      children: "4. Deque (Double-Ended Queue)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A sliding door at a supermarket entrance. People can enter and exit from both sides. During rush hour, the store opens both doors to handle flow in both directions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A deque allows insertion and deletion at both ends in ( O(1) ) time, combining stack and queue capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), " — allocate array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[0..n-1]"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pushFront(x)"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = (front - 1 + capacity) % capacity"
        }), ", place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pushBack(x)"
        }), " — place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[rear]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = (rear + 1) % capacity"
        }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "popFront()"
        }), " — store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[front]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "front = (front + 1) % capacity"
        }), ", decrement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "popBack()"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rear = (rear - 1 + capacity) % capacity"
        }), ", store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[rear]"
        }), ", decrement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "front()"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "back()"
        }), " — return element at front/back without removal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque:\n  arr ← array of size N\n  front ← 0\n  rear ← 0\n  size ← 0\n\nPUSHFRONT(x):\n  front ← (front - 1 + N) mod N\n  arr[front] ← x\n  size ← size + 1\n\nPUSHBACK(x):\n  arr[rear] ← x\n  rear ← (rear + 1) mod N\n  size ← size + 1\n\nPOPFRONT():\n  x ← arr[front]\n  front ← (front + 1) mod N\n  size ← size - 1\n  return x\n\nPOPBACK():\n  rear ← (rear - 1 + N) mod N\n  x ← arr[rear]\n  size ← size - 1\n  return x\n\nFRONT(): return arr[front]\nBACK():  return arr[(rear - 1 + N) mod N]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--trace-table-capacity--5-1",
      children: "Dry Run — Trace Table (capacity = 5)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "front"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rear"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ _ , _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushBack(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, _ , _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushBack(20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , _ , _ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushFront(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , _ , 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushFront(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , 1, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popFront() →1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , 1, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popBack() →20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , 1, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popBack() →10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 20, _ , 1, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <deque>\n\nint main() {\n    std::deque<int> dq;\n\n    dq.push_back(10);\n    dq.push_back(20);\n    dq.push_front(5);\n    dq.push_front(1);\n\n    std::cout << \"Deque: \";\n    for (int x : dq) std::cout << x << \" \";\n    std::cout << \"\\n\";\n\n    std::cout << \"pop_front: \" << dq.front() << \"\\n\";\n    dq.pop_front();\n    std::cout << \"pop_back: \" << dq.back() << \"\\n\";\n    dq.pop_back();\n\n    std::cout << \"Remaining: \";\n    for (int x : dq) std::cout << x << \" \";\n    std::cout << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque: 1 5 10 20\npop_front: 1\npop_back: 20\nRemaining: 5 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python (using collections.deque)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndq = deque()\ndq.append(10)       # push_back\ndq.append(20)\ndq.appendleft(5)    # push_front\ndq.appendleft(1)\n\nprint(\"Deque:\", list(dq))\nprint(\"pop_front:\", dq.popleft())\nprint(\"pop_back:\", dq.pop())\nprint(\"Remaining:\", list(dq))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java (using ArrayDeque)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.ArrayDeque;\nimport java.util.Deque;\n\npublic class DequeExample {\n    public static void main(String[] args) {\n        Deque<Integer> dq = new ArrayDeque<>();\n        dq.addLast(10);\n        dq.addLast(20);\n        dq.addFirst(5);\n        dq.addFirst(1);\n\n        System.out.print(\"Deque: \");\n        for (int x : dq) System.out.print(x + \" \");\n        System.out.println();\n\n        System.out.println(\"pop_front: \" + dq.pollFirst());\n        System.out.println(\"pop_back: \" + dq.pollLast());\n        System.out.print(\"Remaining: \");\n        for (int x : dq) System.out.print(x + \" \");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
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
            children: "pushFront/pushBack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modulo pointer arithmetic — no shifting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popFront/popBack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same — pointer adjustment only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "front/back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct array access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) at both ends?"
      }), " The circular array backing allows both front and back pointers to move independently. Unlike a singly linked list, no traversal is needed for the back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "O(1) insert/delete at both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex than simple queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combines stack + queue in one structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity (array-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for palindrome checking, sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pointers to manage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can mimic stack and queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overcommit: easy to overflow on one side"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty"
        }), " — all access methods fail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " — front == back index."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full"
        }), " — need resize or overflow check."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrap-backwards"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(front - 1 + capacity) % capacity"
        }), " handles negative modulo."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-priority-queue",
      children: "5. Priority Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A hospital emergency room. Patients are treated based on the severity of their condition, not their arrival time. A heart attack patient (high priority) is seen before someone with a sprained ankle (low priority), even if the latter arrived first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a priority queue, elements have a priority value; the element with the highest (or lowest) priority is dequeued first. Typically implemented with a binary heap (( O(\\log n) ) insert and extract)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-binary-heap-based-max-priority-queue",
      children: "Algorithm Steps (Binary Heap-based Max-Priority Queue)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert (push)"
        }), " — add element at the end of the heap array. Bubble it up while its priority is greater than its parent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extract-Max (pop)"
        }), " — swap root with last element, remove the last. Bubble the new root down while it is smaller than either child."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peek (top)"
        }), " — return root element (index 0) — ( O(1) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isEmpty"
        }), " — check heap size == 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PriorityQueue (Max-Heap based):\n  heap ← array\n  size ← 0\n\nPUSH(x):\n  heap[size] ← x\n  i ← size\n  size ← size + 1\n  while i > 0 and heap[PARENT(i)] < heap[i]\n    swap heap[PARENT(i)], heap[i]\n    i ← PARENT(i)\n\nPOP():\n  if size == 0 return \"Empty\"\n  max ← heap[0]\n  heap[0] ← heap[size-1]\n  size ← size - 1\n  MAXHEAPIFY(0)\n  return max\n\nTOP(): return heap[0]\n\nMAXHEAPIFY(i):\n  left ← 2*i + 1\n  right ← 2*i + 2\n  largest ← i\n  if left < size and heap[left] > heap[largest]\n    largest ← left\n  if right < size and heap[right] > heap[largest]\n    largest ← right\n  if largest != i\n    swap heap[i], heap[largest]\n    MAXHEAPIFY(largest)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run--trace-table-2",
      children: "Dry Run — Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap (array)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 → 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 3, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 → 3, 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 3, 5, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 → 3, 5 → 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 7, 5, 1, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 → 7, 5 → 1, 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop() →10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 3, 5, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 → 3, 5 → 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop() →7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 3, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 → 3, 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop() →5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <vector>\n\nstruct Task {\n    std::string name;\n    int priority;\n\n    bool operator<(const Task& other) const {\n        return priority < other.priority; // higher priority first\n    }\n};\n\nint main() {\n    std::priority_queue<Task> pq;\n    pq.push({\"Write report\", 3});\n    pq.push({\"Fix critical bug\", 10});\n    pq.push({\"Check email\", 1});\n    pq.push({\"Review PR\", 5});\n\n    while (!pq.empty()) {\n        Task t = pq.top(); pq.pop();\n        std::cout << \"[Priority \" << t.priority << \"] \" << t.name << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Priority 10] Fix critical bug\n[Priority 5] Review PR\n[Priority 3] Write report\n[Priority 1] Check email\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\nclass Task:\n    def __init__(self, name, priority):\n        self.name = name\n        self.priority = priority\n\n    def __lt__(self, other):\n        # heapq is min-heap; negate for max-heap behavior\n        return self.priority > other.priority\n\npq = []\nheapq.heappush(pq, Task(\"Write report\", 3))\nheapq.heappush(pq, Task(\"Fix critical bug\", 10))\nheapq.heappush(pq, Task(\"Check email\", 1))\nheapq.heappush(pq, Task(\"Review PR\", 5))\n\nwhile pq:\n    t = heapq.heappop(pq)\n    print(f\"[Priority {t.priority}] {t.name}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.PriorityQueue;\n\nclass Task implements Comparable<Task> {\n    String name;\n    int priority;\n\n    Task(String name, int priority) {\n        this.name = name;\n        this.priority = priority;\n    }\n\n    @Override\n    public int compareTo(Task other) {\n        return other.priority - this.priority; // higher priority first\n    }\n}\n\npublic class PriorityQueueExample {\n    public static void main(String[] args) {\n        PriorityQueue<Task> pq = new PriorityQueue<>();\n        pq.offer(new Task(\"Write report\", 3));\n        pq.offer(new Task(\"Fix critical bug\", 10));\n        pq.offer(new Task(\"Check email\", 1));\n        pq.offer(new Task(\"Review PR\", 5));\n\n        while (!pq.isEmpty()) {\n            Task t = pq.poll();\n            System.out.println(\"[Priority \" + t.priority + \"] \" + t.name);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "push (insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bubble up: worst-case travels from leaf to root (tree height)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop (extract-max)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bubble down: same — heap height is (\\log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top (peek)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root of heap is always at index 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "heapify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building heap from array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n), not O(1)?"
      }), " The binary heap is a complete binary tree of height (\\log_2 n). Insertion may require the new element to rise through every level, and extraction may require the new root to sink through every level. This is the price of maintaining the heap property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Guaranteed O(log n) worst-case for insert/extract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not stable — equal-priority order not preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for dynamic priority management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not FIFO — ordering is by priority, not arrival"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for Dijkstra, Huffman, A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap structure requires extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory efficient (array-backed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot find/remove arbitrary elements quickly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty queue"
        }), " — pop/top on empty → error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element"
        }), " — one element; pop leaves heap empty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate priorities"
        }), " — order among equal priorities is implementation-dependent (unstable)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All same priority"
        }), " — effectively becomes FIFO (behavior varies by implementation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resizing"
        }), " — dynamic array backing needs resize when full."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-family-comparison",
      children: "Queue Family Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Simple Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deque"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority Queue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) or 2 ptrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (resizable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed/dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (resizable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (false overflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (per-node ptr ok)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO/LIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Use a sentinel slot in circular queues to distinguish full from empty when front == rear — this is the most common off-by-one bug in queue implementations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular array queue needs one sentinel slot"
        }), ": Use front and rear indices where an empty queue has front == rear, and a full queue has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(rear + 1) % size == front"
        }), ". This wastes one slot but avoids tracking separate size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS is queue's natural domain"
        }), ": Push the start node, mark visited, then repeatedly pop, process neighbors, and push unvisited ones. The queue guarantees level-by-level exploration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonic queue for sliding window max"
        }), ": Maintain a deque where elements are in decreasing order. Before pushing, pop from the back while the back is smaller than the new element. The front is always the window max."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Priority queue with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "decreaseKey"
          }), " needs a heap index"]
        }), ": For Dijkstra's algorithm, maintain an array mapping vertex ID → heap position. This allows ( O(\\log n) ) priority updates instead of ( O(n) ) search."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIFO means the first enqueued element is the first dequeued."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circular arrays avoid wasted space by wrapping indices modulo capacity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linked queues have no capacity limit but allocate per node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deques allow insertion and deletion at both ends."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority queues use a binary heap for ( O(\\log n) ) insertion and extraction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queues are essential for BFS, scheduling, and buffering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deque"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) both ends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) both ends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraparound needs free slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 sentinel slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-node ptr overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ptrs per node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-when-to-use-which-queue",
      children: "Quick Reference: When to Use Which Queue"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Queue Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular array queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-size FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/delete at both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deque"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access by priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue (binary heap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic deque"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS graph traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple FIFO queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher-priority tasks first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed buffer, sequential read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undo history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit size, add/remove from ends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) time overall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed capacity, overwrite oldest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-implement-a-queue-using-two-stacks",
      children: "Problem 1: Implement a Queue using Two Stacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement a FIFO queue using only two stacks (push/pop)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use stack1 for enqueue and stack2 for dequeue. When dequeue is called and stack2 is empty, transfer all elements from stack1 to stack2, reversing their order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueueUsingStacks:\n    def __init__(self):\n        self.s1 = []  # enqueue stack\n        self.s2 = []  # dequeue stack\n\n    def enqueue(self, x):\n        self.s1.append(x)\n\n    def dequeue(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        if not self.s2:\n            raise IndexError(\"Queue empty\")\n        return self.s2.pop()\n\n    def front(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        if not self.s2:\n            raise IndexError(\"Queue empty\")\n        return self.s2[-1]\n\n    def is_empty(self):\n        return not self.s1 and not self.s2\n\n# Test\nq = QueueUsingStacks()\nq.enqueue(1); q.enqueue(2); q.enqueue(3)\nprint(q.dequeue())  # 1\nq.enqueue(4)\nprint(q.dequeue())  # 2\nprint(q.dequeue())  # 3\nprint(q.dequeue())  # 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " enqueue ( O(1) ), dequeue amortized ( O(1) ) (each element moved at most twice)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-sliding-window-maximum",
      children: "Problem 2: Sliding Window Maximum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array and a window size k, find the maximum in every contiguous subarray of size k."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use a monotonic decreasing deque. For each element, remove from back while back < new element, then push. The front is the current window maximum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef sliding_window_maximum(arr, k):\n    dq = deque()\n    result = []\n\n    for i, val in enumerate(arr):\n        # Remove elements out of window from front\n        if dq and dq[0] <= i - k:\n            dq.popleft()\n\n        # Remove smaller elements from back\n        while dq and arr[dq[-1]] < val:\n            dq.pop()\n\n        dq.append(i)\n\n        # First window complete\n        if i >= k - 1:\n            result.append(arr[dq[0]])\n\n    return result\n\nprint(sliding_window_maximum([1, 3, -1, -3, 5, 3, 6, 7], 3))\n# Output: [3, 3, 5, 5, 6, 7]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " ( O(n) ) — each element pushed and popped at most once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-first-non-repeating-character-in-a-stream",
      children: "Problem 3: First Non-Repeating Character in a Stream"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a stream of characters, find the first non-repeating character at each insertion."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Maintain a deque of characters in order of appearance. Use a frequency map. When a character repeats, remove it from the front of the deque if it appears there."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef first_non_repeating(stream):\n    dq = deque()\n    freq = {}\n    result = []\n\n    for ch in stream:\n        freq[ch] = freq.get(ch, 0) + 1\n\n        if freq[ch] == 1:\n            dq.append(ch)\n\n        # Remove characters from front that have repeated\n        while dq and freq[dq[0]] > 1:\n            dq.popleft()\n\n        result.append(dq[0] if dq else '#')\n\n    return result\n\nprint(first_non_repeating(\"aabcbd\"))\n# Output: ['a', 'a', 'b', 'c', 'c', 'd']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-lru-cache-using-deque",
      children: "Problem 4: LRU Cache (Using Deque)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design an LRU (Least Recently Used) cache with get(key) and put(key, value) in O(1)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use a dict for O(1) lookup and a deque for order tracking. On get, move used key to the end. On put, evict from front if full."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = {}\n        self.order = deque()\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.order.remove(key)\n        self.order.append(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.cap:\n            oldest = self.order.popleft()\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)\n\nlru = LRUCache(3)\nlru.put(1, 'A'); lru.put(2, 'B'); lru.put(3, 'C')\nprint(lru.get(1))  # A (1 becomes most recent)\nlru.put(4, 'D')    # evicts 2 (least recently used)\nprint(lru.get(2))  # -1 (evicted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-rotten-oranges-bfs-with-queue",
      children: "Problem 5: Rotten Oranges (BFS with Queue)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a grid where 0=empty, 1=fresh orange, 2=rotten orange. Every minute, rotten oranges rot adjacent fresh oranges. Find the minimum time to rot all, or -1 if impossible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " BFS using a queue. Push all initially rotten oranges. Process level by level — each level = 1 minute."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef oranges_rotting(grid):\n    rows, cols = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == 2:\n                q.append((r, c, 0))\n            elif grid[r][c] == 1:\n                fresh += 1\n\n    dirs = [(1,0), (-1,0), (0,1), (0,-1)]\n    minutes = 0\n\n    while q:\n        r, c, mins = q.popleft()\n        minutes = max(minutes, mins)\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, mins + 1))\n\n    return minutes if fresh == 0 else -1\n\ngrid = [\n    [2, 1, 1],\n    [1, 1, 0],\n    [0, 1, 1]\n]\nprint(oranges_rotting(grid))  # 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-bfs-graph-traversal",
      children: "1. BFS Graph Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Breadth-First Search uses a queue to explore a graph level-by-level. Every node is enqueued once and dequeued once, giving ( O(V + E) ) time. Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Social networks (finding friends-of-friends)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web crawlers (page-by-page discovery)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS navigation (shortest path in unweighted graphs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-print-spooling",
      children: "2. Print Spooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When multiple users send documents to a shared printer, the print spooler queues jobs in FIFO order. Each job waits in the queue until the printer is ready. If a job fails, it may be re-queued or discarded. Circular buffers keep the spool bounded."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-message-queues-kafka-rabbitmq-aws-sqs",
      children: "3. Message Queues (Kafka, RabbitMQ, AWS SQS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Message brokers use distributed queues to decouple producers from consumers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka"
        }), " — partitioned, replicated, ordered logs. Each partition is an ordered queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RabbitMQ"
        }), " — supports multiple queue types: classic (FIFO), quorum (replicated), and priority queues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS SQS"
        }), " — fully managed message queuing with at-least-once delivery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Messages are enqueued by producers and dequeued by consumers. This architecture enables async processing, load leveling, and fault tolerance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-cpu-scheduling",
      children: "4. CPU Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operating systems use several queue types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ready Queue"
        }), " — processes ready to run; scheduled by priority (priority queue)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FCFS (First-Come, First-Served)"
        }), " — simple FIFO queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Round Robin"
        }), " — circular queue with time slices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/O Wait Queue"
        }), " — processes waiting for I/O completion."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-breadth-first-search-treegraph",
      children: "5. Breadth-First Search (Tree/Graph)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level-order tree traversal"
        }), " — process nodes level by level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shortest path"
        }), " — BFS finds shortest path in unweighted graphs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topological sort"
        }), " — Kahn's algorithm uses a queue of nodes with in-degree 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-web-server-request-queuing",
      children: "6. Web Server Request Queuing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web servers use bounded queues (circular buffers) to handle incoming HTTP requests. If the queue is full, new requests are rejected (backpressure) to prevent server overload."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-undoredo-in-editors",
      children: "7. Undo/Redo in Editors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A deque stores edit history. The user can undo (pop from back) or redo (pop from front). Bounded to a maximum size — oldest entries are dropped from the front."
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing front vs rear in circular queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue at rear, dequeue from front — mixing them breaks ordering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep invariant: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front"
            }), " points to oldest element, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rear"
            }), " to the next insertion spot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Miscomputing modulo with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(rear + 1) % size"
            }), " for empty check"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full and empty both have ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front == rear"
            }), " in circular queues"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), " variable or sacrifice one slot to distinguish"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not resizing array queue when full (array impl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements are overwritten or queue rejects valid inserts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double the capacity and copy elements from front to rear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to wrap-around when dequeuing in circular queue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "front++"
            }), " eventually goes out of bounds"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always update with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front = (front + 1) % capacity"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming popFront on empty linked queue returns null gracefully"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["When queue is empty and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front"
            }), " is null, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front.next"
            }), " crashes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isEmpty()"
            }), " before accessing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front.next"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using shift() on arrays for queue in JavaScript/TypeScript"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shift()"
            }), " is O(n) because every element must re-index"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "push()"
            }), " + index pointer for O(1), or a proper ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Queue"
            }), " class"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-queue-implementation",
      children: "TypeScript Queue Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IQueue<T> {\n    enqueue(item: T): void;\n    dequeue(): T | undefined;\n    peek(): T | undefined;\n    isEmpty(): boolean;\n    size(): number;\n}\n\n// Linked List Queue (O(1) all operations)\nclass LinkedQueue<T> implements IQueue<T> {\n    private front: { data: T; next: any } | null = null;\n    private rear: { data: T; next: any } | null = null;\n    private _size: number = 0;\n\n    enqueue(item: T): void {\n        const node = { data: item, next: null };\n        if (this.rear) this.rear.next = node;\n        this.rear = node;\n        if (!this.front) this.front = node;\n        this._size++;\n    }\n\n    dequeue(): T | undefined {\n        if (!this.front) return undefined;\n        const item = this.front.data;\n        this.front = this.front.next;\n        if (!this.front) this.rear = null;\n        this._size--;\n        return item;\n    }\n\n    peek(): T | undefined { return this.front?.data; }\n    isEmpty(): boolean { return this._size === 0; }\n    size(): number { return this._size; }\n}\n\n// Circular Array Queue (O(1) all operations)\nclass CircularArrayQueue<T> implements IQueue<T> {\n    private data: (T | undefined)[];\n    private frontIdx: number = 0;\n    private rearIdx: number = 0;\n    private _size: number = 0;\n    private cap: number;\n\n    constructor(capacity: number = 10) {\n        this.cap = capacity;\n        this.data = new Array(capacity);\n    }\n\n    enqueue(item: T): void {\n        if (this._size === this.cap) this.resize();\n        this.data[this.rearIdx] = item;\n        this.rearIdx = (this.rearIdx + 1) % this.cap;\n        this._size++;\n    }\n\n    dequeue(): T | undefined {\n        if (this._size === 0) return undefined;\n        const item = this.data[this.frontIdx];\n        this.frontIdx = (this.frontIdx + 1) % this.cap;\n        this._size--;\n        return item;\n    }\n\n    peek(): T | undefined {\n        return this._size === 0 ? undefined : this.data[this.frontIdx];\n    }\n\n    isEmpty(): boolean { return this._size === 0; }\n    size(): number { return this._size; }\n\n    private resize(): void {\n        const newCap = this.cap * 2;\n        const newData = new Array(newCap);\n        for (let i = 0; i < this._size; i++) {\n            newData[i] = this.data[(this.frontIdx + i) % this.cap];\n        }\n        this.data = newData;\n        this.frontIdx = 0;\n        this.rearIdx = this._size;\n        this.cap = newCap;\n    }\n}\n\n// Deque with O(1) insert/delete at both ends\nclass Deque<T> {\n    private data: (T | undefined)[] = [];\n    private frontIdx: number = 0;\n    private backIdx: number = -1;\n\n    pushFront(item: T): void {\n        this.frontIdx--;\n        this.data[this.frontIdx] = item;\n    }\n\n    pushBack(item: T): void {\n        this.backIdx++;\n        this.data[this.backIdx] = item;\n    }\n\n    popFront(): T | undefined {\n        if (this.frontIdx > this.backIdx) return undefined;\n        const item = this.data[this.frontIdx];\n        this.frontIdx++;\n        return item;\n    }\n\n    popBack(): T | undefined {\n        if (this.frontIdx > this.backIdx) return undefined;\n        const item = this.data[this.backIdx];\n        this.backIdx--;\n        return item;\n    }\n\n    isEmpty(): boolean { return this.frontIdx > this.backIdx; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is true about a deque (double-ended queue)?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Elements can be inserted/deleted at both ends ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Elements can only be inserted at front"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Elements can only be deleted at rear"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Supports access to middle elements in O(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["In a circular queue of size 5, if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "front = 3"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rear = 2"
            }), ", how many elements?"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 4 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 0"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which queue variant is best for implementing a sliding window maximum?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Simple queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Priority queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Deque ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Circular queue"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the main advantage of the linked-list queue over the array queue?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Faster enqueue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) No fixed capacity ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Lower memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Simpler code"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "An application that requires serving tasks in order of arrival, then emergencies first, needs:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Simple queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Priority queue ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Deque"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Circular queue"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            }), " method in a linked queue implemented without a counter is:"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 7-a, 8-b, 9-c, 10-b, 11-b, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a stack using queues"
          }), ": Use two queues to implement all stack operations (push, pop, top, empty) with O(1) push and O(n) pop, or O(n) push and O(1) pop."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reverse the first K elements of a queue"
          }), ": Given a queue and an integer K, reverse the order of the first K elements."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interleave the first half with the second half"
          }), ": Given a queue of even length, interleave the first half with the second half (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[1,2,3,4,5,6]"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[1,4,2,5,3,6]"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generate binary numbers from 1 to N"
          }), ": Given a number N, generate binary representations for all numbers from 1 to N using a queue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "First non-repeating character in a stream"
          }), ": Given a stream of characters, find the first non-repeating character at any point. Use a queue and a hash map."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LRU cache with queue"
          }), ": Design an LRU cache using a combination of a queue and a hash map. The queue tracks the order of access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check if a given permutation is valid for a queue"
          }), ": Given two arrays — the original order and the dequeued order — check if it's possible to dequeue in that order using a queue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect n ropes with minimum cost"
          }), ": Given n ropes of varying lengths, connect them into one rope with minimum cost (cost = sum of two rope lengths at each connection)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum of all subarrays of size K"
          }), ": Given an array and a window size K, find the maximum element in every contiguous subarray of size K. Solve in O(n) using a deque."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sliding window first negative element"
          }), ": Given an array and a window size K, find the first negative integer in each subarray of size K."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-variants-comparison",
      children: "Queue Variants Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enqueue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peek"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simply linked list (queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular array queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) both ends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max/min in sliding window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Final In, Final Out"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Fixed Input, Fixed Output"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why does a circular queue waste one slot?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Implementation error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) To distinguish empty from full ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Performance optimization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Alignment requirement"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which data structure enables priority queue operations?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Binary heap ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Hash table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Linked list"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A deque allows insertion at:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Front only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Back only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both ends ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Middle only"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which algorithm uses a queue naturally?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) DFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) BFS ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Binary search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Merge sort"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-c, 5-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queues enforce FIFO ordering; circular arrays prevent wasted space by wrapping indices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linked queues provide ( O(1) ) enqueue and dequeue without pre-allocated capacity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deques support insertion and deletion at both ends."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority queues order elements by priority, typically via a binary heap."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queues are fundamental to BFS, scheduling, and buffering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does a naive array queue waste space? How does circular addressing fix this?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the key difference between a stack and a queue?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose a deque over a regular queue?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a queue using two stacks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to reverse the first k elements of a queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a circular buffer (ring buffer) for a fixed-size data stream."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonic Queue"
        }), " data structure that supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push(x)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getMax()"
        }), " in amortized ( O(1) ) time. Use it to solve the sliding window maximum problem."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an array of integers and a window size k, find the maximum of each subarray of size k using a deque."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack using two Queues"
        }), " such that push is O(1) and pop is O(n)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a stream of characters, print the first non-repeating character at every point in time."
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